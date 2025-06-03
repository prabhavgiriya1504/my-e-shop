import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddresssForm from './DeliveryAddresssForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Add Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get step from URL and clamp it
  const querySearch = new URLSearchParams(location.search);
  const rawStep = parseInt(querySearch.get('step')) || 0;
  const step = Math.min(rawStep, steps.length); // allow = steps.length to show "Finish"

  const handleNext = () => {
    if (step < steps.length) {
      navigate(`?step=${step + 1}`);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      navigate(`?step=${step - 1}`);
    }
  };

  return (
    <div className="px-10 lg:px-10">
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={Math.min(step, steps.length - 1)}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {step >= steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you're finished
            </Typography>
            <Button onClick={() => navigate(`?step=0`)}>Reset</Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={step === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {step === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>

            <div className='mt-10'>
              {step === 1 ? <DeliveryAddresssForm /> : <OrderSummary />}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}

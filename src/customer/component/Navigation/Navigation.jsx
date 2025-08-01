

// import { Fragment, useEffect, useState } from "react";
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   Popover,
//   PopoverButton,
//   PopoverGroup,
//   PopoverPanel,
//   Tab,
//   TabGroup,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Transition,
// } from "@headlessui/react";
// import {useLocation, useNavigate} from 'react-router-dom';
// import {
//   Bars3Icon,
//   MagnifyingGlassIcon,
//   ShoppingBagIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

// import { Avatar, Button, Menu, MenuItem } from "@mui/material";

// import { navigation } from "./navigation.js";
// import { deepPurple } from "@mui/material/colors";
// import AuthModal from "../Auth/AuthModal.jsx";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser, logout } from "../../../State/Auth/Action.js";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navigation() {
//   const [open, setOpen] = useState(false);
//   const [openAuthModal , setOpenAuthModal] = useState(false);

//    const navigate = useNavigate();

//    const jwt = localStorage.getItem("jwt");

//  const [anchorEl, setAnchorEl] = useState(null);
//  const dispatch = useDispatch();

// const openUserMenu = Boolean(anchorEl);
// const {auth} = useSelector(store=>store);
// const location = useLocation();

//   const handleCategoryClick = (category, section, item, close) => {
//     navigate(`/${category.id}/${section.id}/${item.id}`);
//     close();
//   };


//   const handleCloseUserMenu = (event) => {
//     setAnchorEl(null);
//   };
  

//   const handleUserClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleOpen = () => {
//     setOpenAuthModal(true);
//   };
//   const handleClose = () => {
//     setOpenAuthModal(false);
//   };

//    useEffect(()=>{
//       if(jwt){
//         dispatch(getUser(jwt));
//       }
//     },[jwt , auth.jwt]);

//      useEffect(()=>{
//           if(auth.user){
//             handleClose();
//           }
//           if(location.pathname==="/login" || location.pathname==="/register"){
//                  navigate(-1);
//           }
//      },[auth.user]);

//     const handleLogout = () => {
//       dispatch(logout());
//       handleCloseUserMenu();
//     }



//   return (
//     <div className="bg-white">
//       {/* Mobile menu */}
//       <Transition.Root show={open} as={Fragment}>
//         <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
//           <Transition.Child
//             as={Fragment}
//             enter="transition-opacity ease-linear duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity ease-linear duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 z-40 flex">
//             <Transition.Child
//               as={Fragment}
//               enter="transition ease-in-out duration-300 transform"
//               enterFrom="-translate-x-full"
//               enterTo="translate-x-0"
//               leave="transition ease-in-out duration-300 transform"
//               leaveFrom="translate-x-0"
//               leaveTo="-translate-x-full"
//             >
//               <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
//                 <div className="flex px-4 pb-2 pt-5">
//                   <button
//                     type="button"
//                     className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
//                     onClick={() => setOpen(false)}
//                   >
//                     <span className="sr-only">Close menu</span>
//                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>
//                 </div>

//                 {/* Links */}
//                 <Tab.Group as="div" className="mt-2">
//                   <div className="border-b border-gray-200">
//                     <Tab.List className="-mb-px flex space-x-8 px-4">
//                       {navigation.categories.map((category) => (
//                         <Tab
//                           key={category.name}
//                           className={({ selected }) =>
//                             classNames(
//                               selected
//                                 ? "border-indigo-600 text-indigo-600"
//                                 : "border-transparent text-gray-900",
//                               "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium border-none"
//                             )
//                           }
//                         >
//                           {category.name}
//                         </Tab>
//                       ))}
//                     </Tab.List>
//                   </div>
//                   <Tab.Panels as={Fragment}>
//                     {navigation.categories.map((category) => (
//                       <Tab.Panel
//                         key={category.name}
//                         className="space-y-10 px-4 pb-8 pt-10"
//                       >
//                         <div className="grid grid-cols-2 gap-x-4">
//                           {category.featured.map((item) => (
//                             <div
//                               key={item.name}
//                               className="group relative text-sm"
//                             >
//                               <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
//                                 <img
//                                   src={item.imageSrc}
//                                   alt={item.imageAlt}
//                                   className="object-cover object-center"
//                                 />
//                               </div>
//                               <a
//                                 href={item.href}
//                                 className="mt-6 block font-medium text-gray-900"
//                               >
//                                 <span
//                                   className="absolute inset-0 z-10"
//                                   aria-hidden="true"
//                                 />
//                                 {item.name}
//                               </a>
//                               <p aria-hidden="true" className="mt-1">
//                                 Shop now
//                               </p>
//                             </div>
//                           ))}
//                         </div>
//                         {category.sections.map((section) => (
//                           <div key={section.name}>
//                             <p
//                               id={`${category.id}-${section.id}-heading-mobile`}
//                               className="font-medium text-gray-900"
//                             >
//                               {section.name}
//                             </p>
//                             {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
//                             <ul
//                               role="list"
//                               aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
//                               className="mt-6 flex flex-col space-y-6"
//                             >
//                               {section.items.map((item) => (
//                                 <li key={item.name} className="flow-root">
//                                   <p onClick={()=>navigate("/men/clothing/mens_kurta")} className="-m-2 block p-2 text-gray-500">
//                                     {"clothings"}
//                                   </p>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         ))}
//                       </Tab.Panel>
//                     ))}
//                   </Tab.Panels>
//                 </Tab.Group>

//                 <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//                   {navigation.pages.map((page) => (
//                     <div key={page.name} className="flow-root">
//                       <a
//                         href={page.href}
//                         className="-m-2 block p-2 font-medium text-gray-900"
//                       >
//                         {page.name}
//                       </a>
//                     </div>
//                   ))}
//                 </div>

//                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
//                   {auth.user?.firstName ? (
//                     <div>
//                       <Avatar
//                         className="text-white"
//                         onClick={handleUserClick}
//                         aria-controls={open ? "basic-menu" : undefined}
//                         aria-haspopup="true"
//                         aria-expanded={open ? "true" : undefined}
//                         // onClick={handleUserClick}
//                         sx={{
//                           bgcolor: deepPurple[500],
//                           color: "white",
//                           cursor: "pointer",
//                         }}
//                       >
//                         {auth.user?.firstName[0].toUpperCase()}
//                       </Avatar>
//                       {/* <Button
//                         id="basic-button"
//                         aria-controls={open ? "basic-menu" : undefined}
//                         aria-haspopup="true"
//                         aria-expanded={open ? "true" : undefined}
//                         onClick={handleUserClick}
//                       >
//                         Dashboard
//                       </Button>
//                       Hello sir,
//                         my name is Prabhav Giriya, i am a B.Tech final year student, currently looking for an internship, if there is any opportunity in your organization or in your network please let me know, so i can apply to that 
//                       */
//                       }
//                       <Menu
//                         id="basic-menu"
//                         anchorEl={anchorEl}
//                         open={openUserMenu}
//                         onClose={handleCloseUserMenu}
//                         MenuListProps={{
//                           "aria-labelledby": "basic-button",
//                         }}
//                       >
//                         <MenuItem onClick={handleCloseUserMenu}>
//                          Profile
//                         </MenuItem>
//                         <MenuItem onClick={()=>navigate("/account/order")}> My Orders</MenuItem>
//                         <MenuItem onClick={handleLogout}>Logout</MenuItem>
//                       </Menu>
//                     </div>
//                   ) : (
//                     <Button
//                       onClick={handleOpen}
//                       className="text-sm font-medium text-gray-700 hover:text-gray-800"
//                     >
//                      <span className="animate-bounce">Signin</span> 
//                     </Button>
//                   )}
//                 </div>

//                 <div className="border-t border-gray-200 px-4 py-6">
//                   <a href="/" className="-m-2 flex items-center p-2">
//                     <img
//                       src="https://tailwindui.com/img/flags/flag-canada.svg"
//                       alt=""
//                       className="block h-auto w-5 flex-shrink-0"
//                     />
//                     <span className="ml-3 block text-base font-medium text-gray-900">
//                       CAD
//                     </span>
//                     <span className="sr-only">, change currency</span>
//                   </a>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition.Root>

//       <header className="relative bg-white">
//         <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
//           Get free delivery on orders over $100
//         </p>

//         <nav
//           aria-label="Top"
//           className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
//         >
//           <div className="border-b border-gray-200">
//             <div className="flex h-16 items-center">
//               <button
//                 type="button"
//                 onClick={() => setOpen(true)}
//                 className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
//               >
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Open menu</span>
//                 <Bars3Icon aria-hidden="true" className="size-6" />
//               </button>

//               {/* Logo */}
//               <div className="ml-4 flex lg:ml-0" onClick={()=>navigate("/")}>
               
//                   <span className="sr-only">Your Company</span>
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//   <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
//   <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
// </svg>

               
//               </div>
//               {/* Flyout menus */}
//                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
//                 <div className="flex h-full space-x-8">
//                   {navigation.categories.map((category) => (
//                     <Popover key={category.name} className="flex">
//                       {({ open, close }) => (
//                         <>
//                           <div className="relative flex">
//                             <Popover.Button
//                               className={classNames(
//                                 open
//                                   ? "border-indigo-600 text-indigo-600"
//                                   : "border-transparent text-gray-700 hover:text-gray-800",
//                                 "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
//                               )}
//                             >
//                               {category.name}
//                             </Popover.Button>
//                           </div>

//                           <Transition
//                             as={Fragment}
//                             enter="transition ease-out duration-200"
//                             enterFrom="opacity-0"
//                             enterTo="opacity-100"
//                             leave="transition ease-in duration-150"
//                             leaveFrom="opacity-100"
//                             leaveTo="opacity-0"
//                           >
//                             <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
//                               {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
//                               <div
//                                 className="absolute inset-0 top-1/2 bg-white shadow"
//                                 aria-hidden="true"
//                               />

//                               <div className="relative bg-white">
//                                 <div className="mx-auto max-w-7xl px-8">
//                                   <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
//                                     <div className="col-start-2 grid grid-cols-2 gap-x-8">
//                                       {category.featured.map((item) => (
//                                         <div
//                                           key={item.name}
//                                           className="group relative text-base sm:text-sm"
//                                         >
//                                           <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
//                                             <img
//                                               src={item.imageSrc}
//                                               alt={item.imageAlt}
//                                               className="object-cover object-center"
//                                             />
//                                           </div>
//                                           <a
//                                             href={item.href}
//                                             className="mt-6 block font-medium text-gray-900"
//                                           >
//                                             <span
//                                               className="absolute inset-0 z-10"
//                                               aria-hidden="true"
//                                             />
//                                             {item.name}
//                                           </a>
//                                           <p
//                                             aria-hidden="true"
//                                             className="mt-1"
//                                           >
//                                             Shop now
//                                           </p>
//                                         </div>
//                                       ))}
//                                     </div>
//                                     <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
//                                       {category.sections.map((section) => (
//                                         <div key={section.name}>
//                                           <p
//                                             id={`${section.name}-heading`}
//                                             className="font-medium text-gray-900"
//                                           >
//                                             {section.name}
//                                           </p>
//                                           {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
//                                           <ul
//                                             role="list"
//                                             aria-labelledby={`${section.name}-heading`}
//                                             className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
//                                           >
//                                             {section.items.map((item) => (
//                                               <li
//                                                 key={item.name}
//                                                 className="flex"
//                                               >
//                                                 <p
//                                                   onClick={() =>
//                                                     handleCategoryClick(
//                                                       category,
//                                                       section,
//                                                       item,
//                                                       close
//                                                     )
//                                                   }
//                                                   className="cursor-pointer hover:text-gray-800"
//                                                 >
//                                                   {item.name}
//                                                 </p>
//                                               </li>
//                                             ))}
//                                           </ul>
//                                         </div>
//                                       ))}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </Popover.Panel>
//                           </Transition>
//                         </>
//                       )}
//                     </Popover>
//                   ))}

//                   {navigation.pages.map((page) => (
//                     <a
//                       key={page.name}
//                       href={page.href}
//                       className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
//                     >
//                       {page.name}
//                     </a>
//                   ))}
//                 </div>
//               </Popover.Group>

//               <div className="ml-auto flex items-center">
//                 <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
//                   {auth.user?.firstName ? (
//                     <div>
//                       <Avatar
//                         className="text-white"
//                         onClick={handleUserClick}
//                         aria-controls={open ? "basic-menu" : undefined}
//                         aria-haspopup="true"
//                         aria-expanded={open ? "true" : undefined}
//                         // onClick={handleUserClick}
//                         sx={{
//                           bgcolor: deepPurple[500],
//                           color: "white",
//                           cursor: "pointer",
//                         }}
//                       >
//                         {auth.user?.firstName[0].toUpperCase()}
//                       </Avatar>
//                       {/* <Button
//                         id="basic-button"
//                         aria-controls={open ? "basic-menu" : undefined}
//                         aria-haspopup="true"
//                         aria-expanded={open ? "true" : undefined}
//                         onClick={handleUserClick}
//                       >
//                         Dashboard
//                       </Button> */}
//                       <Menu
//                         id="basic-menu"
//                         anchorEl={anchorEl}
//                         open={openUserMenu}
//                         onClose={handleCloseUserMenu}
//                         MenuListProps={{
//                           "aria-labelledby": "basic-button",
//                         }}
//                       >
//                         <MenuItem onClick={handleCloseUserMenu}>
//                          Profile
//                         </MenuItem>
//                         <MenuItem onClick={()=>navigate("/account/order")}> My Orders</MenuItem>
//                         <MenuItem onClick={handleLogout}>Logout</MenuItem>
//                       </Menu>
//                     </div>
//                   ) : (
//                     <Button
//                       onClick={handleOpen}
//                       className="text-sm font-medium text-gray-700 hover:text-gray-800"
//                     >
//                      <span className="animate-bounce">Signin</span> 
//                     </Button>
//                   )}
//                 </div>

//                 {/* Search */}
//                 <div className="flex lg:ml-6">
//                   <a href="https://google.com" className="p-2 text-gray-400 hover:text-gray-500">
//                     <span className="sr-only">Search</span>
//                     <MagnifyingGlassIcon
//                       aria-hidden="true"
//                       className="size-6"
//                     />
//                   </a>
//                 </div>

//                 {/* Cart */}
//                 <div className="ml-4 flow-root lg:ml-6">
//                   <div className="group -m-2 flex items-center p-2">
//                     <ShoppingBagIcon
//                     onClick={()=> navigate("/cart")}
//                       aria-hidden="true"
//                       className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
//                     />
//                     <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      
//                     </span>
//                     <span className="sr-only">items in cart, view bag</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
          
//       <AuthModal handleClose={handleClose} open={openAuthModal} />
//     </div>
//   );
// }










import { Fragment, useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from "@headlessui/react";
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Avatar, Button, Menu, MenuItem } from "@mui/material";

import { navigation } from "./navigation.js"; // Ensure this path is correct
import { deepPurple } from "@mui/material/colors";
import AuthModal from "../Auth/AuthModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../../State/Auth/Action.js";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [open, setOpen] = useState(false); // State for mobile menu open/close
  const [openAuthModal, setOpenAuthModal] = useState(false); // State for auth modal

  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const [anchorEl, setAnchorEl] = useState(null); // State for user menu anchor
  const dispatch = useDispatch();

  const openUserMenu = Boolean(anchorEl);
  const { auth } = useSelector(store => store);
  const location = useLocation();

  // Function to handle category clicks and close the mobile menu
  const handleCategoryClick = (category, section, item, closeMobileMenu) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    closeMobileMenu(); // Call the function to close the mobile menu
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenAuthModal = () => { // Renamed for clarity
    setOpenAuthModal(true);
  };
  const handleCloseAuthModal = () => { // Renamed for clarity
    setOpenAuthModal(false);
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt, dispatch]); // Added dispatch to dependency array

  useEffect(() => {
    if (auth.user) {
      handleCloseAuthModal(); // Close modal if user logs in
    }
    // This part might cause issues if you want to allow navigation to /login or /register
    // when not logged in. Consider if you truly want to navigate back.
    if (location.pathname === "/login" || location.pathname === "/register") {
      // navigate(-1); // This will prevent showing the login/register page if user is already logged in
    }
  }, [auth.user, location.pathname, navigate]); // Added navigate to dependency array

  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
  };

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {/* Auth section for mobile */}
                  {auth.user?.firstName ? (
                    <div className="flow-root mb-4"> {/* Added margin bottom */}
                      <div className="flex items-center space-x-3 -m-2 p-2">
                        <Avatar
                          className="text-white"
                          onClick={handleUserClick} // Use existing handleUserClick
                          aria-controls={openUserMenu ? "mobile-basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={openUserMenu ? "true" : undefined}
                          sx={{
                            bgcolor: deepPurple[500],
                            color: "white",
                            cursor: "pointer",
                          }}
                        >
                          {auth.user?.firstName[0].toUpperCase()}
                        </Avatar>
                        <span className="font-medium text-gray-900">
                          Hello, {auth.user?.firstName}
                        </span>
                      </div>
                      <Menu
                        id="mobile-basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "mobile-basic-button",
                        }}
                      >
                        <MenuItem onClick={() => { handleCloseUserMenu(); navigate("/profile"); setOpen(false); }}>Profile</MenuItem>
                        <MenuItem onClick={() => { handleCloseUserMenu(); navigate("/account/order"); setOpen(false); }}>My Orders</MenuItem>
                        <MenuItem onClick={() => { handleLogout(); setOpen(false); }}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <div className="flow-root mb-4">
                      <Button
                        onClick={() => { handleOpenAuthModal(); setOpen(false); }} // Close mobile menu when opening auth modal
                        className="text-sm font-medium text-gray-700 hover:text-gray-800 w-full justify-start normal-case"
                      >
                        <span className="animate-bounce">Sign in</span>
                      </Button>
                    </div>
                  )}

                {/* Links */}
                <TabGroup as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <TabList className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium border-none"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </TabList>
                  </div>
                  <TabPanels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <TabPanel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href} // Consider changing this to navigate using react-router-dom
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <p
                                    onClick={() =>
                                      // Correctly use handleCategoryClick and close the mobile menu
                                      handleCategoryClick(
                                        category,
                                        section,
                                        item,
                                        () => setOpen(false) // Pass a function to close the dialog
                                      )
                                    }
                                    className="-m-2 block p-2 text-gray-500 cursor-pointer hover:text-gray-800"
                                  >
                                    {item.name} {/* Display the actual item name */}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </TabPanel>
                    ))}
                  </TabPanels>
                </TabGroup>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Authentication and Cart for Mobile Menu */}
                <div className="border-t border-gray-200 px-4 py-6">
                  

                  {/* Cart for mobile */}
                  <div className="flow-root">
                    <div className="group -m-2 flex items-center p-2 cursor-pointer" onClick={() => { navigate("/cart"); setOpen(false); }}>
                      <ShoppingBagIcon
                        aria-hidden="true"
                        className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Cart
                      </span>
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        {/* You can put cart item count here if you have it in Redux */}
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </div>
                  </div>
                </div>

                {/* Currency selector (optional, keep if needed) */}
                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="/" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </DialogPanel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0 cursor-pointer" onClick={() => navigate("/")}>
                <span className="sr-only">Your Company</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-indigo-600">
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
              </div>
              {/* Flyout menus (Desktop) */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open: popoverOpen, close: closePopover }) => (
                        <>
                          <div className="relative flex">
                            <PopoverButton
                              className={classNames(
                                popoverOpen
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </PopoverButton>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <PopoverPanel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href} // Consider using navigate
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <p
                                                  onClick={() =>
                                                    handleCategoryClick(
                                                      category,
                                                      section,
                                                      item,
                                                      closePopover // Pass close function of Popover
                                                    )
                                                  }
                                                  className="cursor-pointer hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </p>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                {/* Auth section for Desktop */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {auth.user?.firstName ? (
                    <div>
                      <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls={openUserMenu ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openUserMenu ? "true" : undefined}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {auth.user?.firstName[0].toUpperCase()}
                      </Avatar>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={() => { handleCloseUserMenu(); navigate("/profile"); }}>
                          Profile
                        </MenuItem>
                        <MenuItem onClick={() => { handleCloseUserMenu(); navigate("/account/order"); }}> My Orders</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Button
                      onClick={handleOpenAuthModal}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      <span className="animate-bounce">Sign in</span>
                    </Button>
                  )}
                </div>

                {/* Search (Desktop) */}
                <div className="hidden lg:flex lg:ml-6"> {/* Hide on mobile */}
                  <a href="https://google.com" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      aria-hidden="true"
                      className="size-6"
                    />
                  </a>
                </div>

                {/* Cart (Desktop) */}
                <div className="ml-4 flow-root lg:ml-6">
                  <div className="group -m-2 flex items-center p-2 cursor-pointer" onClick={() => navigate("/cart")}>
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {/* Cart item count goes here if available from Redux */}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <AuthModal handleClose={handleCloseAuthModal} open={openAuthModal} />
    </div>
  );
}
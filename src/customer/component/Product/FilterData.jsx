export const color = [
    "White","Black","Red","Marun","Being","Pink","Green","Yellow"
];

export const filters = [
    {
        id: "color",
        name: "color",
        options: [
            {value: "white" , label: "White"},
            {value: "beige" , label: "Beige"},
            {value: "blue" , label: "Blue"},
            {value: "brown" , label: "Brown"},
            {value: "green" , label: "Green"},
            {value: "purple" , label: "Purple"},
            {value: "yellow" , label: "Yellow"}
        ]
    },
    {
        id: "size",
        name: "Size",
        options: [
            {value: "S" , label: "S"},
            {value: "M" , label: "M"},
            {value: "L" , label: "L"},
            {value: "XL" , label: "XL"}
        ]
    }
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            {value: "0-10111",label:"any"},
            {value: "159-399" , label: "Rs.159-399"},
            {value: "399-999" , label: "Rs.399-999"},
            {value: "999-1999" , label: "Rs.999-1999"},
            {value: "1999-2999" , label: "Rs.1999-2999"},
            {value: "2999-3999" , label: "Rs.2999-3999"},   
        ]
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            {value: "10" , label: "10% and Above"},
            {value: "20" , label: "20% and Above"},
            {value: "30" , label: "30% and Above"},
            {value: "40" , label: "40% and Above"},
            {value: "50" , label: "50% and Above"},
            {value: "60" , label: "60% and Above"},
            {value: "70" , label: "70% and Above"},
            {value: "80" , label: "80% and Above"}
        ]
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            {value: "in_stock" , label: "In Stock"},
            {value: "out_of_stocks" , label: "Out of Stock"}
        ]
    }
];


let initialState = [
    {
        id: 1,
        name: 'Mango',
        price: 3,
        status: true,
    },
    {
        id: 2,
        name: 'Apple',
        price: 5,
        status: false,
    },
    {
        id: 3,
        name: 'Orange',
        price: 1,
        status: true,
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}

export default products
const initialState = {
    data: [
        {
            name: "Pelican Brief",
            author: "John Grisham",
            type: 'fiction'
        },
        {
            name: "Painted House",
            author: "John Grisham",
            type: 'fiction'
        },
        {
            name: "French Revolution",
            author: "Thomas Carlyle",
            type: 'Biography'
        },
        {
            name: "He Lived With Gods",
            author: "M Gupta",
            type: 'Biography'
        },
        {
            name: "Adventures of tom sawyer",
            author: "Mark Twain",
            type: 'Fiction'
        },
        {
            name: "Foutain Head",
            author: "Ann",
            type: 'Fiction'
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        default: {
            return { ...state };
        }
    }
};
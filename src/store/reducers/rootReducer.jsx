const initState = {
    user: [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com"
        }

    ]
}
const rootReducer = (state = initState, action) => {

    return state;
}

export default rootReducer;
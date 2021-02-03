const initial={
    loggedUser:{}
}
const userReducer=(state=initial,action)=>{

    switch (action.type) {
        case ("NEW_USER"):
            return{
                ...state,
                loggedUser:action.payload
            }
            break;
        case ("LOGIN"):
            return{
                ...state,
                loggedUser:action.payload
            }
        default:
            return state;
    }

}
export default userReducer;
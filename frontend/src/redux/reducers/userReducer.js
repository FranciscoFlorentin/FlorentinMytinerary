const initial={
    loggedUser:null
}
const userReducer=(state=initial,action)=>{

    switch (action.type) {
        case ("LOG_IN"):
            return{
                ...state,
                loggedUser: action.payload.response
            }
            break;
        case ("LOG_OUT"):
            return{
                ...state,
                loggedUser:null
            }
                break;    
        default:
            return state;
    }

}
export default userReducer;
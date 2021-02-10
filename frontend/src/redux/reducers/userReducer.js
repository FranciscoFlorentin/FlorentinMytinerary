const initial={
    loggedUser:null
}
const userReducer=(state=initial,action)=>{

    switch (action.type) {
        case ("LOG_IN"):
            localStorage.setItem("name",action.payload.response.name);
            localStorage.setItem("token",action.payload.response.token);
            localStorage.setItem("id",action.payload.response.id);
            localStorage.setItem("pic",action.payload.response.pic);
            
            return{
                ...state,
                loggedUser: action.payload.response
            }
            break;
        case ("LOG_OUT"):
            localStorage.clear();
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
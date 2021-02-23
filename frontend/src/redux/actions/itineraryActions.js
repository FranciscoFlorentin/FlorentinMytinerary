import axios from "axios";
import Swal from 'sweetalert2';

const itineraryActions ={
    getItinerariesByCityId: (cityId)=>{
        return async (dispatch,getState)=>{
            axios.get(`http://localhost:4000/api/itineraries/by_city/${cityId}`)
            .then(response=>dispatch({type: "ITINERARIES_BY_CITY",payload: response.data.response}))
            .catch(error=>Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error
            }))
        }
    },
    addComment: (userComment,itineraryId)=>{
        return async(dispatch,getState)=>{
            const response = await axios.put(`http://localhost:4000/api/itinerary/addComment/${itineraryId}`,{userComment},{
                headers: {
                    Authorization: `Bearer ${getState().userReducer.loggedUser.token}`
                }
            })
            if(response){
                dispatch({type:"UPDATE_ITINERARIES", payload:response.data.response})
                return response.data.response
            }
            else {console.log(response)}
        }
    },
    deleteComment: (commentToDelete,itineraryId)=>{
        return async(dispatch,getState)=>{
            const response = await axios.put(`http://localhost:4000/api/itinerary/deleteComment/${itineraryId}`,{commentToDelete},{
                headers: {
                    Authorization: `Bearer ${getState().userReducer.loggedUser.token}`
                }
            })
            if(response){
                dispatch({type: "UPDATE_ITINERARIES",payload: response.data.response})
                return response.data.response
            }
            else{console.log(response)}
        }
    },
    editComment: (comment,editedComment,itineraryId)=>{
        return async(dispatch,getState)=>{
            const response = await axios.put(`http://localhost:4000/api/itinerary/editComment/${itineraryId}`,{comment,editedComment},{
                headers: {
                    Authorization: `Bearer ${getState().userReducer.loggedUser.token}`
                }
            })
            if(response){
                dispatch({type: "UPDATE_ITINERARIES",payload: response.data.response})
                return response.data.response
            }
            else { console.log(response)}
        }
    },
    itineraryLiked: (itineraryId)=>{
        return async (dispatch,getState)=>{
            if(getState().userReducer.loggedUser){
                const response= await axios.put(`http://localhost:4000/api/itinerary/likes/${itineraryId}`,{},{
                headers:{
                    Authorization: `Bearer ${getState().userReducer.loggedUser.token}`
                }
            })
            if(response){
                dispatch({type:"UPDATE_ITINERARIES", payload:response.data.response})
                return (response.data.response)
            } else{
                alert("You must logged")
            }
    }   
        }}
}
export default itineraryActions;
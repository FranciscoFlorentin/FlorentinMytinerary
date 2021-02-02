import {connect} from "react-redux";
import {useState} from "react";
import Swal from 'sweetalert2';
import cityActions from "../redux/actions/cityActions";

const Admin=({addCity})=>{
    const [newCity,setNewCity]=useState({cityName:"",cityPic:""});
    const [newItinerary,setNewItinerary]=useState({
        itineraryName:"",userName:"",userPicName:"",likes:"",duration:"",price:"",
        idCity:"",activityName:"",activityPic:"",userName:"",userPic:"",userComment:""
    })
    
    const sendCity=(e)=>{
        e.preventDefault()
        if ((newCity.cityName=== "") || (newCity.cityPic==="")){
            Swal.fire('Fill the fields')
            return false}
        else{
            addCity(newCity)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'New City Created',
                showConfirmButton: false,
                timer: 1500
              })}
    }
    const sendItinerary=(e)=>{
       e.preventDefault()

    }
    return(
    <>  
        <div className="admin">
            <div className="adminCity">
                <h3>CITIES</h3>
                <div className="formAddCity">
                    <input type="text" placeholder="Enter new city name" name="cityName" 
                        onChange={(e)=>setNewCity ({...newCity,[e.target.name]:e.target.value})} />
                    <input type="text" placeholder="Image name (name.jpg)" name="cityPic" 
                        onChange={(e)=>setNewCity({...newCity,[e.target.name]:e.target.value})} />
                    <button onClick={sendCity}>ADD NEW CITY</button>
                </div>
            </div>
            <div className="adminItinerary">
                <h3>ITINERARIES</h3>
                <div className="formAddItinerary">
                    <input type="text" placeholder="itineraryName" name="itineraryName" onChange={(e)=>setNewCity ({...newItinerary,[e.target.name]:e.target.value})}/>
                    <input type="text" placeholder="userName" name="userName"/>
                    <input type="text" placeholder="userPicName" name="userPicName"/>
                    <input type="number" placeholder="likes" name="likes"/>
                    <input type="number" placeholder="duration" name="duration"/>
                    <input type="number" placeholder="price" name="price"/>
                    <input type="text" placeholder="idCity" name="idCity"/>
                    <form name="activities">
                        <input type="text" placeholder="activityName" name="activityName"/>
                        <input type="text" placeholder="activityPic" name="activityPic"/>
                    </form>
                    <form name="comments">
                        <input type="text" placeholder="userName" name="userName"/>
                        <input type="text" placeholder="userPic"name="userPic"/>
                        <input type="text" placeholder="userComment" name="userComment"/>
                    </form>
                    <button onClick={sendItinerary}>ADD NEW ITINERARY</button>
                </div>
            </div>
        </div>
        
    
    </>
    )
}
const mapStateToProps=state=>{
    return{
        cities: state.cityReducer.cities,
        city: state.cityReducer.city,
        itinerariesByCity: state.itineraryReducer.itinerariesByCity 
    }
}
const mapDispatchToProps={
    addCity: cityActions.addCity
}
export default connect(mapStateToProps,mapDispatchToProps)(Admin);

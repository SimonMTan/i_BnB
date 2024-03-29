import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getallspots } from "../../store/spots";
import './home.css'

const Getallspots = () => {
    const dispatch = useDispatch();

    const allspots = useSelector((state) =>state.allSpots)
    // console.log('allspot ---->',allspots)
    const arrspots = Object.values(allspots.allSpots)
    // console.log(' should be array allSpots',arrspots )

    useEffect(() => {
    dispatch(getallspots())
    },[dispatch])

    return (
        <>
         <div className="spot-container">
                {arrspots.map(spot => (
                    <div className="ind-spot-wrapper" key={spot.id}>
                    <NavLink to={`/spots/${spot.id}`}>
                        <div className="ind-spot" >
                            <img src={spot?.previewImage[0]} alt ={spot.previewImage} className='ind-spot-img'/>
                            <div className="ind-spot-firstline">
                                <span><b>{spot.name}</b></span>
                                <span><b>★ {spot.avgRating > 0 ? spot.avgRating : 'New'}</b></span>
                            </div>
                            <div >{spot.city}, {spot.state}</div>
                            <div >{spot.country}</div>
                            <div ><b>${spot.price}</b> per night</div>
                        </div>
                    </NavLink>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Getallspots;

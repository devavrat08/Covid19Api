import React, { useState,useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import axios from 'axios';
const Map=()=>
{
    const [state,setState]=useState(null);
    const [viewPort,setViewPort]=useState({
        width:'800px',
        height:600,
        latitude:0,
        longtitude:0,
        zoom:2
    });

    const onViewPortChange=viewPort=>setViewPort({...viewPort,transitionDuration:3000});
    const token='pk.eyJ1IjoiZGV2c2hhaGFzYW5lIiwiYSI6ImNrZmliZm92ajB0aXYycXMydzVnb2JubXoifQ.bVLH7rB_ypvSQ736ZcPsBw';

    useEffect(()=>{
        const items=async()=>{
            try{
            let response= await axios.get('https://covid19.mathdro.id/api/recovered');
            setState(response.data);
            }
            catch(error)
            {
                console.log(error.message);
            }
    }
    items();
    },[]);

    return (
        <React.Fragment>
            <div>
                <ReactMapGL 
                {...viewPort}
                transitionDuration={1000}
                mapboxApiAccessToken={token}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={viewPort=>setViewPort(viewPort)}
                >
                    </ReactMapGL>
            </div>
        </React.Fragment>
    )
}


export default Map;


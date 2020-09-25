import React,{useState,useEffect} from 'react';
import axios from 'axios';
import TotalDeath from './totaldeaths';
import Recovered from './recoveredcases';
import TotalCases from './totalcases';


const Header=()=>{

    const [totalCases,setTotalCases]=useState("");
    const[recovered,setRecovered]=useState("");
    const[totalDeath,setTotalDeath]=useState("");

    useEffect(()=>{
        let data= async()=>{
            let response=await axios.get('https://covid19.mathdro.id/api');
            console.log(response);
            setTotalCases(response.data.confirmed.value);
            setRecovered(response.data.recovered.value);
            setTotalDeath(response.data.deaths.value);
        }
        data();
    },[totalCases])

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                     <div className="col-md-3">
                        <TotalCases cases={totalCases}/>
                    </div>
                    <div className="col-md-3">
                        <Recovered recover={recovered}/>
                    </div>
                    <div className="col-md-3">
                        <TotalDeath death={totalDeath}/>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;

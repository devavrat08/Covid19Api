import React from 'react';

const Country=({items,countrySearch})=>{
    if(!items){return null;}
    if(!countrySearch){return null;}

    return(
        <React.Fragment>
            <div className="card text-left">
           
              <div className="card-body">
                <h4 className="card-title">{countrySearch}</h4>
               
              </div>
              <div className="alert alert-secondary" role="alert">
 Confirmed {items.confirmed.value}
</div>
<div className="alert alert-success" role="alert">
 Recovered {items.recovered.value}
</div>
<div className="alert alert-danger" role="alert">
  Deaths {items.deaths.value}
</div>
            </div>
        </React.Fragment>
    )
}

export default Country;
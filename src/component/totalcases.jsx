import React from 'react';

const TotalCases=(props)=>
{
    const numberFormat=new Intl.NumberFormat();
    return(
        <React.Fragment>
            <div className="card text-left" style={{borderBottom:'5px solid pinkn'}}>
              
                <div className="card-body">
                    <h4 className="card-title">
               Total Cases:  {numberFormat.format( props.cases)}
                 </h4>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TotalCases;
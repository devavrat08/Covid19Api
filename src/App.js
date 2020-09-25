import React from 'react';
import Header from './component/header'
import Map from './component/map'

function App() {
  return (
  <React.Fragment>
    <Header/>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
        <Map/>
        </div>

      </div>
    </div>
   
  </React.Fragment>
  );
}

export default App;

import React from 'react';
import Header from './component/header'
import Map from './component/map';
import Search from './component/search';

function App() {
  return (
  <React.Fragment>
    <Header/>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
        <Map/>
        </div>
        <div className="col-md-4">
          <Search/>
        </div>

      </div>
    </div>
   
  </React.Fragment>
  );
}

export default App;

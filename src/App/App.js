
import React from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

const accessToken = 'pk.eyJ1IjoibXRnaWxsOTAiLCJhIjoiY2p5MHh5dm0wMDF0ZTNubzNkdDcyNXVndiJ9.C32ccynIS0v4UlaUylcoOQ';

class App extends React.Component {
  style = 'mapbox://styles/mapbox/streets-v11';

  center = [-86.7816, 36.1627];

  zoom = 3;

  mapStyle = {
    height: '75vh',
    width: '75vw',
  };

  render() {
    const Map = ReactMapboxGl({
      accessToken,
    });
    return (
      <div className="MapComp">
        <Map
        style={this.style}
        containerStyle={this.mapStyle}
        center={this.center}
        />
      </div>
    );
  }
}

export default App;

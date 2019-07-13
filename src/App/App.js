
import React, { Component } from 'react';
import ReactMap, { Layer, Feature } from 'react-mapbox-gl';

const accessToken = 'pk.eyJ1IjoibXRnaWxsOTAiLCJhIjoiY2p5MHh5dm0wMDF0ZTNubzNkdDcyNXVndiJ9.C32ccynIS0v4UlaUylcoOQ';

class App extends Component {
  style = 'mapbox://styles/mapbox/streets-v11';

  center = [-96, 37.8];

  zoom = [4];

  mapStyle = {
    height: '75vh',
    width: '75vw',
  };

  render() {
    const Map = ReactMap({
      accessToken,
    });
    return (
      <div className="MapComp">
        <Map
        style={this.style}
        containerStyle={this.mapStyle}
        center={this.center}
        zoom={this.zoom}
      >
       <Layer
      type="symbol"
      id="marker"
      layout={{ 'icon-image': 'marker-15' }}>
      <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
    </Layer>
    </Map>
      </div>
    );
  }
}

export default App;

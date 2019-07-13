
import React from 'react';

import Map from '../components/MapBox/Map';

class App extends React.Component {
  state = {
    position: [-86.7816, 36.1627],
    zoom: [8],
  }

  render() {
    const { position, zoom } = this.state;
    return (
      <div className="App">
        <Map
        position={position}
        zoom={zoom}
        />
      </div>
    );
  }
}

export default App;

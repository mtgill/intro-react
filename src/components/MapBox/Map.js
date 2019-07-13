import React from 'react';
import ReactMapboxGl, { Layer, Marker } from 'react-mapbox-gl';

const accessToken = 'pk.eyJ1IjoibXRnaWxsOTAiLCJhIjoiY2p5MHh5dm0wMDF0ZTNubzNkdDcyNXVndiJ9.C32ccynIS0v4UlaUylcoOQ';

const MapBox = ReactMapboxGl({
  accessToken,
});

class Map extends React.Component {
  style = 'mapbox://styles/mapbox/streets-v9';

  render() {
    const { position, zoom } = this.props;
    return (
      <div className="Map">
        <MapBox
        center={position}
        zoom={zoom}
        container='Map'
        containerStyle={{
          height: '100vh',
          width: '100vw',
        }}
        style={this.style}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ 'icon-image': 'marker-15' }}>
            </Layer>
            <Marker
  coordinates={[-86.7816, 36.1627]}
  anchor="bottom">
  <img href="../../../assets/pin.jpg" alt="..."/>
</Marker>
        </MapBox>

      </div>
    );
  }
}

export default Map;

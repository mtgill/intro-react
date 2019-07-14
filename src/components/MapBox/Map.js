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
  <img src={'data:image/png;base64,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'} alt="..."/>
</Marker>
        </MapBox>

      </div>
    );
  }
}

export default Map;

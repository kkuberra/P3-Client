import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCg-3HXvx8eaDiQqFAGibAQPJPrrhWnbss&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 39.815977, lng: -105.202629 }}
    >
    
        {props.isMarkerShown && <Marker title="test" label="test" position={{ lat: 39.815977, lng: -105.202629 }} onClick={props.onMarkerClick} />}
        {props.isMarkerShown && <Marker position={{ lat: 39.734354, lng: -105.038970 }} onClick={props.onMarkerClick} />}
        {props.isMarkerShown && <Marker position={{ lat: 39.636423, lng: -104.876888 }} onClick={props.onMarkerClick} />}


    </GoogleMap>
)

class Map extends React.PureComponent {
    state = {
        isMarkerShown: false,
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    render() {
        return (
            <MyMapComponent
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
            />
        )
    }
}

export default Map
import React, { Component } from 'react';
import axios from 'axios'
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import '../App.css';
import { SVGOverlay, Popup } from 'react-map-gl';
let data = [];

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoidGFuaXNocW1pc2hyYSIsImEiOiJja2Nub2NxeDkwZGI0MnFsdmk3OXhmbHVqIn0.D978KZ8t0I6T_crSB_OvBQ';



function Redraw({ project, long, lat, zoom, infected, }) {
    const [cx, cy] = project([long, lat]);
    return <circle cx={cx} cy={cy} r={((zoom * infected)) / 100000 + 5} fill={infected < 60000 ? '#01A4F6' : '#FD3E58'} style={{ opacity: 0.6 }} />;
}

function RenderPopups() {
    return data.map((point, index) => {
        return (
            <Popup
                key={index}
                latitude={point.latitude}
                longitude={point.longitude}
                closeButton={true}
                closeOnClick={false}
                onClose={() => this.setState({ showPopup: false })}
                anchor="top"
                dynamicPosition={false}
            ></Popup>
        )
    })
}


function PlotPoints(props) {
    const points = data.map((point, index) => {
        const zoom = props.zoom;
        return (
            <SVGOverlay key={index} zoom={zoom} point={point} redraw={(props) => {
                return <Redraw
                    project={props.project}
                    lat={point.latitude}
                    long={point.longitude}
                    zoom={zoom}
                    infected={point.confirmed}

                />
            }} />
        )
    })
    return points
}


function Map(props) {
    const [viewport, setViewport] = useState({
        width: '67rem',
        height: '71vh',
        latitude: props.latitude,
        longitude: props.longitude,
        zoom: 8
    });


    return (
        <ReactMapGL
            mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
            mapStyle="mapbox://styles/mapbox/dark-v9"
            {...viewport}
            onViewportChange={nextViewport => setViewport(nextViewport)}
        >

            <PlotPoints zoom={viewport.zoom} />
            <RenderPopups />
        </ReactMapGL>

    );
}

class RenderMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0
        }
    }

    componentDidMount = () => {

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            });
        } else {
            console.log("Not Available");
        }


        axios.get('/countries').then(response => {
            data = response.data;
        })
    }


    render() {
        console.log(this.state.longitude)
        console.log(this.state.latitude)
        return <Map latitude={this.state.latitude} longitude={this.state.longitude} />
    }
}

export default RenderMap;
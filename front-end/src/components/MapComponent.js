/// app.js

import React, { Component } from 'react';
import DeckGL from '@deck.gl/react';
import { ScatterplotLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import axios from "axios";

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MAPBOX_ACCESS_TOKEN: '',

            data: [],
            viewport: {
                ...DeckGL.defaultViewport,
                longitude: 76.040497,
                latitude: 19.065773,
                zoom: 2,
                width: '67rem',
                height: '71vh',
            },
        }

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data
        })
    }

    componentDidMount() {
        axios.get('/key').then(response => {
            this.setState({
                MAPBOX_ACCESS_TOKEN: response.data

            })
        });;

        window.addEventListener('resize', this._resize.bind(this));
        this._resize();
    }

    _resize() {

        this._onViewportChange({
            width: (window.innerWidth < 1200 || window.innerWidth > 1575) ? '95vw' : '70rem',
            height: window.innerWidth < 1200 ? '60vh' : window.innerHeight
        });
    }

    _onViewportChange(viewport) {
        this.setState({
            viewport: { ...this.state.viewport, ...viewport }
        });
    }

    render() {

        const { viewport } = this.state;

        const layer = new ScatterplotLayer({
            id: 'scatterplot-layer',
            data: this.state.data,
            pickable: true,
            opacity: 0.5,
            filled: true,
            radiusMaxPixels: 200,
            lineWidthMinPixels: 1,
            radiusScale: 10,
            radiusMinPixels: 1,
            getPosition: d => { return [d.longitude, d.latitude] },
            getRadius: d => Math.sqrt(d.confirmed * 1000),
            getFillColor: d => d.confirmed < 200000 ? [1, 164, 246] : [253, 62, 88]
        })

        return (
            <div className='map-inner-container' style={{ position: 'relative' }}>
                <DeckGL
                    {...viewport}
                    initialViewState={viewport}
                    controller={true}
                    layers={layer}
                    getTooltip={({ object }) => {
                        return (
                            object &&
                            `${object.location}
                            Infected - ${object.confirmed - object.dead - object.recovered}
                            Recovered - ${object.recovered}
                            Deaths - ${object.dead}`
                        )
                    }}
                >
                    <StaticMap
                        {...viewport}
                        mapboxApiAccessToken={this.state.MAPBOX_ACCESS_TOKEN}
                        mapStyle="mapbox://styles/mapbox/dark-v9"
                    />
                </DeckGL>
            </div>
        );
    }
}

export default Map;







import React, { Component } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';

let historicData = {};

let confirmedDiff = [];
let deathsDiff = [];
let recoveredDiff = [];
let dates = [];

let displayData = [];
let colorGraph = '';

class Graph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [],
            options: {},
            toggle: 'infected'
        }

        axios.get('/graph').then(response => {
            historicData = response.data;
            dates = Object.keys(historicData.cases);
            dates = dates.map((date) => {
                const dateNew = new Date(date)
                return dateNew.toLocaleDateString('en', { day: '2-digit', month: 'short' })
            })

            const confirmed = Object.values(historicData.cases);
            const deaths = Object.values(historicData.deaths);
            const recovered = Object.values(historicData.recovered);

            for (var i = 0; i < dates.length; i++) {
                confirmedDiff[i] = confirmed[i + 1] - confirmed[i];
                deathsDiff[i] = deaths[i + 1] - deaths[i];
                recoveredDiff[i] = recovered[i + 1] - recovered[i]
            }
        })
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.toggle === 'infected') {
            displayData = confirmedDiff
            colorGraph = '#BA3131'
        }

        else if (nextProps.toggle === 'deaths') {
            displayData = deathsDiff
            colorGraph = '#4E4E53'
        }

        else {
            displayData = recoveredDiff
            colorGraph = '#5CC1AC'
        }
        this.setState({
            toggle: nextProps.toggle,

            series: [{
                name: 'Confirmed',
                data: displayData
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'area',
                    foreColor: '#fff',
                    toolbar: {
                        show: true,
                        tools: {
                            download: false,
                            selection: false,
                            zoom: false,
                            zoomin: true,
                            zoomout: true,
                            pan: false,
                            reset: false,
                            customIcons: []
                        },
                        autoSelected: "selection"
                    },
                },
                colors: [colorGraph],
                grid: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                tooltip: {
                    enabled: false
                },
                fill: {
                    colors: undefined,
                    opacity: 0.2,
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: "vertical",
                        shadeIntensity: 0.5,
                        gradientToColors: undefined,
                        inverseColors: true,
                        opacityFrom: 0.7,
                        opacityTo: 0.3,
                    }
                },
                xaxis: {
                    rotate: '90',
                    type: 'Date',
                    categories: dates,
                    labels: {
                        rotate: 0,
                    },
                    tickAmount: 3,
                    tickPlacement: 'on',
                    axisTicks: {
                        show: true,
                        borderType: 'solid',
                        color: '#78909C',
                        height: 6,
                        offsetX: 0,
                        offsetY: 0
                    },
                },
            },
        })


    }

    render() {
        return (
            <div id="chart" className="graph-container">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={300} />
            </div>
        );
    }
}

export default Graph;
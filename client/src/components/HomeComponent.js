import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Map from './MapComponent'
import '../App.css';
import Sidebar from './SidebarComponent';
import WorldIcon from './WorldIcon';
import axios from 'axios';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            worldStats: {
                confirmed: 0,
                recovered: 0,
                dead: 0,
                active: 0
            }
        }
    }

    componentDidMount() {
        axios.get('/world').then(response => {
            this.setState({
                worldStats: {
                    confirmed: response.data.cases,
                    recovered: response.data.recovered,
                    dead: response.data.deaths,
                    active: response.data.active
                }
            })

        })
        axios.get('/countries').then(response => {
            this.setState({
                countries: response.data
            })

        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col xl="9" className="main-col">
                        <div className='heading-container'>
                            <p className="main-heading">Coronavirus COVID-19</p>
                            <p className="sub-heading">Global Cases</p>
                        </div>
                        <Row className='world-icon-row'>
                            <Col md={6} lg={3}>
                                <WorldIcon
                                    color='#BA3131'
                                    data={this.state.worldStats.confirmed}
                                    title='Confirmed'
                                    svgSource='./images/Biohazard.svg'
                                />
                            </Col>
                            <Col md={6} lg={3}>
                                <WorldIcon
                                    color='#F6C879'
                                    data={this.state.worldStats.active}
                                    title='Active'
                                    svgSource='./images/virus.svg'
                                />
                            </Col>
                            <Col md={6} lg={3}>
                                <WorldIcon
                                    color='#4E4E53'
                                    data={this.state.worldStats.dead}
                                    title='Deaths'
                                    svgSource='./images/skull.svg'
                                />
                            </Col>
                            <Col md={6} lg={3}>
                                <WorldIcon
                                    color='#5CC1AC'
                                    data={this.state.worldStats.recovered}
                                    title='Recovered'
                                    svgSource='./images/plus.svg'
                                />
                            </Col>
                        </Row>

                        <Row className='map-container'>
                            <Map data={this.state.countries} />
                        </Row>
                    </Col>
                    <Sidebar />
                </Row>
            </Container>
        )
    }
}

export default Main;
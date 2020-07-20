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
            data: [],
            worldStats: {
                confirmed: 0,
                recovered: 0,
                dead: 0
            }
        }
    }

    componentDidMount() {
        axios.get('/countries').then(response => {
            let c = 0;
            let r = 0;
            let de = 0;
            response.data.map(d => {
                c += d.confirmed;
                r += d.recovered;
                de += d.dead;
                return 0;
            })

            this.setState({
                data: response.data,
                worldStats: {
                    confirmed: c,
                    recovered: r,
                    dead: de
                }
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
                                    data={this.state.worldStats.confirmed - this.state.worldStats.dead - this.state.worldStats.recovered}
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
                            <Map data={this.state.data} />
                        </Row>
                    </Col>
                    <Sidebar />
                </Row>
            </Container>
        )
    }
}

export default Main;
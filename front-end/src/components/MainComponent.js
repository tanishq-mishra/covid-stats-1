import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Map from './MapComponent'
import '../App.css';
import Sidebar from './SidebarComponent';
import Hamburger from './HamburgerComponent';
import WorldIcon from './WorldIcon';
import axios from 'axios';




class Main extends Component {

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col xl="9" className="main-col">
                        <div>
                            <p className="main-heading">Coronavirus COVID-19</p>
                            <p className="sub-heading">Global Cases</p>
                        </div>
                        <Row>
                            <Col xl={3}>
                                <WorldIcon color='#BA3131' data='232' title='Confirmed' svgSource='./images/Biohazard.svg' />
                            </Col>
                            <Col xl={3}>
                                <WorldIcon color='#F6C879' data='31232' title='Active' svgSource='./images/virus.svg' />
                            </Col>
                            <Col xl={3}>
                                <WorldIcon color='#4E4E53' data='31232' title='Deaths' svgSource='./images/skull.svg' />
                            </Col>
                            <Col xl={3}>
                                <WorldIcon color='#5CC1AC' data='31232' title='Recovered' svgSource='./images/plus.svg' />
                            </Col>
                        </Row>

                        <Row className='map-container'>
                            <Map />
                        </Row>
                    </Col>
                    <Sidebar />
                    <Hamburger />
                </Row>
                <Row>
                </Row>
            </Container>
        )
    }
}

export default Main;
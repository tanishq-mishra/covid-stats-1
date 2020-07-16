import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Map from './MapComponent'
import '../App.css';
import Sidebar from './SidebarComponent';

class Main extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col md="9" className="main-col">
                        <div>
                            <p className="main-heading">Coronavirus COVID-19</p>
                            <p className="sub-heading">Global Cases</p>
                        </div>

                        <Row className='map-container'>
                            <Map />
                        </Row>
                    </Col>
                    <Sidebar />
                </Row>
            </Container>
        )
    }
}

export default Main;
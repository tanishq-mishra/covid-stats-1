import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Map from './MapComponent'
import '../App.css';
import Sidebar from './SidebarComponent';
import Hamburger from './HamburgerComponent';

class Main extends Component {
    render() {
        console.log(this.props)
        return (
            <Container fluid={true}>
                <Row>
                    <Col xl="9" className="main-col">
                        <div>
                            <p className="main-heading">Coronavirus COVID-19</p>
                            <p className="sub-heading">Global Cases</p>
                        </div>

                        <Row className='map-container'>
                            <Map />
                        </Row>
                    </Col>
                    <Sidebar />
                    <Hamburger />
                </Row>
            </Container>
        )
    }
}

export default Main;
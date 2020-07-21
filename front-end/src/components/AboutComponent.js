import React from 'react';
import { Col, Row, Container } from "reactstrap";


function RenderCard(props) {
    return (
        <div className='about-card'>
            <Row>
                <Col xs={12}><img src={props.img} alt={props.name}></img></Col>
                <Col xs={12}><div style={{ fontSize: 22, fontWeight: 600 }}>{props.name}</div></Col>
                <Col xs={12}><div style={{ marginBottom: 6 }}>Fullstack Developer/ Flutter Developer</div></Col>
                <Col xs={12}><div>{props.email}</div></Col>
            </Row>
        </div>
    )
}


function About() {
    return (
        <Container>
            <h1 className="about-heading">Got to Know Us</h1>
            <Row>
                <Col lg={5} ><RenderCard img={'./images/Tanishq.jpg'} name='Tanishq Mishra' email='tanishqrmishra@gmail.com' /></Col>
                <Col lg={2} ><hr /></Col>
                <Col lg={5} ><RenderCard img={'./images/Sakshi.jpg'} name='Sakshi Tomar' email='diyasakshi89@gmail.com' /></Col>
            </Row>
        </Container>
    )
}

export default About;
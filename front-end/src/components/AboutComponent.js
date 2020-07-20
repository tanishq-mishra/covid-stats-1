import React from 'react';
import { Col, Row, Container } from "reactstrap";


function RenderCard(props) {

    return (

        <div className='about-card' style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '20vh' }} >
            <Row>
                <Col xs={12}><img src={props.img} ></img></Col>
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
            <h1 style={{ textAlign: "center", marginTop: 20 }}>Got to Know Us</h1>
            <Row>
                <Col lg={5} ><RenderCard img={'./images/Tanishq.jpg'} name='Tanishq Mishra' email='tanishqrmishra@gmail.com' /></Col>
                <Col lg={2}><hr /></Col>
                <Col lg={5} ><RenderCard img={'./images/Sakshi.jpg'} name='Sakshi Tomar' email='diyasakshi89@gmail.com' /></Col>

            </Row>
        </Container>

    )
}

export default About;
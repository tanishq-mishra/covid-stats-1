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
            <Row style={{ alignSelf: 'center', marginTop: '100px' }}>
                <Col>
                    <a href={props.github} target='blank'>
                        <div className="social-button">
                            <i className="fab fa-github fa-lg"></i>
                        </div>
                    </a>
                </Col>
                <Col>
                    <a href={props.linkedin} target='blank'>
                        <div className="social-button">
                            <i className="fab fa-linkedin-in fa-lg"></i>
                        </div>
                    </a>
                </Col>
            </Row>
        </div>
    )
}


function About() {
    return (
        <>
            <h1 className="about-heading">Get to Know Us</h1>
            <Container>
                <Row>
                    <Col lg={5} >
                        <RenderCard
                            img={'./images/Tanishq.jpg'}
                            name='Tanishq Mishra'
                            email='tanishqrmishra@gmail.com'
                            github='https://github.com/tanishq-mishra'
                            linkedin='https://www.linkedin.com/in/tanishq-mishra-79861a34/'
                        />
                    </Col>
                    <Col lg={2} ><hr /></Col>
                    <Col lg={5} >
                        <RenderCard
                            img={'./images/Sakshi.jpg'}
                            name='Sakshi Tomar'
                            email='diyasakshi89@gmail.com'
                            github='https://github.com/sakshi-0809'
                            linkedin='https://www.linkedin.com/in/sakshi-tomar-52215a171/'
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;
import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';


class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleDiv: 'infected'
        };

        this.handleCLick = this.handleClick.bind(this);
    }

    //js code for animation of the hamburger 
    componentDidMount() {
        const menuBtn = document.querySelector('.menu-btn');
        let menuOpen = false;
        menuBtn.addEventListener('click', () => {
            if (!menuOpen) {
                menuBtn.classList.add('open');
                menuOpen = true;
            } else {
                menuBtn.classList.remove('open');
                menuOpen = false;
            }
        });
    }

    handleClick(id) {
        this.setState({
            toggleDiv: id
        });
    }

    render() {
        const SideDiv = (props) => {
            return (
                <div className={props.class} onClick={() => this.handleClick(props.id)} id={props.id}>{props.name}</div>
            );
        }

        return (
            <Col className="sidebar" md="3">
                <Container>
                    <Row style={{ paddingTop: "10px" }}>
                        <Col md={{ size: "5" }} style={{ paddingLeft: "0" }}>
                            <div>
                                <p className="side-heading">Cases Info</p>
                            </div>
                        </Col>
                        <Col md={{ size: "2", offset: "5" }}>
                            <div className="menu-btn">
                                <div className="menu-btn__burger"></div>
                            </div>

                        </Col>
                    </Row>
                </Container>

                <Container className="sidebar-container">
                    <Row className="sidebar-row">
                        <SideDiv
                            id={"infected"}
                            name={"Infected"}
                            class={this.state.toggleDiv === "infected" ? "selected" : "unselected"}
                        />
                        <SideDiv
                            id={"deaths"}
                            name={"Deaths"}
                            class={this.state.toggleDiv === "deaths" ? "selected" : "unselected"}
                        />
                        <SideDiv
                            id={"recovered"}
                            name={"Recovered"}
                            class={this.state.toggleDiv === "recovered" ? "selected" : "unselected"}
                        />
                    </Row>
                </Container>
            </Col>
        )
    }
}

export default Sidebar;
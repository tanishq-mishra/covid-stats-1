import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Highlights from './HighlightsComponent';
import Graph from './GraphComponent';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleDiv: 'infected',
        };

        this.handleCLick = this.handleClick.bind(this);
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
            <Col className="sidebar" xl="3">
                <Container>
                    <Row>
                        <div>
                            <p className="side-heading">Cases Info</p>
                        </div>
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
                    <Highlights toggle={this.state.toggleDiv} />
                    <Graph toggle={this.state.toggleDiv} />
                </Container>
            </Col>
        )
    }
}

export default Sidebar;
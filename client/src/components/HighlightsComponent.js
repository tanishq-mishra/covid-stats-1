import React, { Component } from 'react';
import ReactCountryFlag from "react-country-flag"
import axios from 'axios';
import { Col, Row, Container } from "reactstrap";

class Highlights extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('/countries').then(response => response.data).then((data) => {
            data.sort(this.sortByConfirmed());
            this.setState({
                data: data.filter((country, index) => index < 6)
            })

        })
    }

    sortByConfirmed() {
        var sort_order = -1;

        return function (a, b) {
            if (a["confirmed"] < b["confirmed"]) {
                return -1 * sort_order;
            } else if (a["confirmed"] > b["confirmed"]) {
                return 1 * sort_order;
            } else {
                return 0 * sort_order;
            }
        }
    }

    render() {
        const HighlightsData = () => {
            return (this.state.data.map((country) => {
                return (
                    <Row key={country.country_code} >
                        <Col xs={1}>
                            <div className='flag-container' >
                                <ReactCountryFlag
                                    countryCode={country.country_code}
                                    svg
                                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                                    cdnSuffix="svg"
                                    title={country.location}
                                    style={{ width: '20px', height: '20px', borderRadius: "100%" }}
                                />
                            </div>
                        </Col>
                        <Col xs={6}>
                            <p>{country.location}</p>
                        </Col>
                        <Col xs={4} style={{ textAlign: 'right', paddingRight: 0 }}>
                            {this.props.toggle === 'infected' && (country.confirmed - country.dead - country.recovered).toLocaleString()}
                            {this.props.toggle === 'deaths' && country.dead.toLocaleString()}
                            {this.props.toggle === 'recovered' && country.recovered.toLocaleString()}

                        </Col>
                    </Row>
                )
            }))
        }

        return (
            <Container style={{ marginTop: '40px', padding: 0 }}>
                <HighlightsData />
            </Container>
        );
    }
}

export default Highlights;
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
            if (a["cases"] < b["cases"]) {
                return -1 * sort_order;
            } else if (a["cases"] > b["cases"]) {
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
                    <Row key={country.countryInfo.iso2} >
                        <Col xs={1}>
                            <div className='flag-container' >
                                <ReactCountryFlag
                                    countryCode={country.countryInfo.iso2}
                                    svg
                                    cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                                    cdnSuffix="svg"
                                    title={country.country}
                                    style={{ width: '20px', height: '20px', borderRadius: "100%" }}
                                />
                            </div>
                        </Col>
                        <Col xs={6}>
                            <p>{country.country}</p>
                        </Col>
                        <Col xs={4} style={{ textAlign: 'right', paddingRight: 0 }}>
                            {this.props.toggle === 'infected' && (country.active).toLocaleString()}
                            {this.props.toggle === 'deaths' && country.deaths.toLocaleString()}
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
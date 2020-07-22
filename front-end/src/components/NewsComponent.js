import React, { Component } from 'react';
import axios from 'axios';

class News extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        axios.get('/news').then(response => {
            console.log(response);
        })
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default News;
import React, { Component } from "react";
import CountUp from 'react-countup';


class WorldIcon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data
        })
    }


    render() {
        const color = this.props.color;
        const data = this.props.data;
        const title = this.props.title;
        const svgSource = this.props.svgSource
        return (
            <div className='world-container'>
                <div
                    className='svg-container'
                    style={{
                        backgroundColor: color,
                        display: 'flex',
                        height: '55px',
                        width: '55px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '15px',
                        boxShadow: `0px 2px 10px ${color}`
                    }}>
                    <img src={svgSource} alt='' style={{ height: '35px', width: '35px' }} />
                </div>
                <div className='world-data'>
                    <p>{title}</p>
                    <h2><CountUp end={data} /></h2>
                </div>
            </div>
        )
    }
}

export default WorldIcon;
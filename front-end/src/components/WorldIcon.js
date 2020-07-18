import React from "react";

function WorldIcon(props) {
    const color = props.color;
    const data = props.data;
    const title = props.title;
    const svgSource = props.svgSource

    return (
        <div className='world-container'>
            <div
                className='svg-container'
                style={{
                    backgroundColor: color,
                    display: 'flex',
                    height: '60px',
                    width: '60px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '15px',
                    boxShadow: `0px 2px 10px ${color}`
                }}>
                <img src={svgSource} style={{ height: '35px', width: '35px' }} />
            </div>
            <div className='world-data'>
                <p>{title}</p>
                <h2>{data}</h2>

            </div>

        </div>
    )
}

export default WorldIcon;
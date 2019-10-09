import React from 'react';
import './Circles.css'

const Circles = function (props) {
    return (
        <div className='Circles'>
            <div
                value='1' name='1'
                className={props.selected === '1' ? 'selected' : 'null'}

            >1</div>
            <div
                value='2' name='2'
                className={props.selected === '2' ? 'selected' : 'null'}
            >2</div>
            <div
                value='3' name='3'
                className={props.selected === '3' ? 'selected' : 'null'}
            >3</div>
            <div
                value='4' name='4'
                className={props.selected === '4' ? 'selected' : 'null'}
            >4</div>
        </div>
    )
}

export default Circles
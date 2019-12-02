import React from 'react';
import './CircleSelector.css'


// ISSUE WITH setState({})


// onClick sets off buttonClick function
// const buttonClick = (e) => {
//     this.setState({
//         selected: this.state.selected
//     })
// }


// May have to move buttonClick function to App.js 
// If so, add helper function to redirect onClick to buttonClick on App.js


const CircleSelector = (props) => {
    console.log('props = ' + props)

    const buttonClick = (e) => {
        console.log('e = ' + e)
        console.log('e.target = ' + e.target)
        props.onClick(e.target.value)
        // this.setState({
        //     [e.target.name]: e.target.value
    }

    if (props.selected)

        return (
            <div className="CircleSelector">
                <button
                    value='1'
                    className={props.selected === '1' ? 'selected' : 'null'}
                    onClick={buttonClick}>
                    {props.selected === true ? 'CIRCLE 1 SELECTED' : 'SELECT CIRCLE 1'}
                </button>
                <button
                    value='2'
                    // name='2'
                    className={props.selected === '2' ? 'selected' : 'null'}
                    onClick={buttonClick}>
                    {props.selected === true ? 'CIRCLE 2 SELECTED' : 'SELECT CIRCLE 2'}
                </button>
                <button
                    value='3'
                    className={props.selected === '3' ? 'selected' : 'null'}
                    onClick={buttonClick}>
                    {props.selected === true ? 'CIRCLE 3 SELECTED' : 'SELECT CIRCLE 3'}
                </button>
                <button
                    value='4'
                    className={props.selected === '4' ? 'selected' : 'null'}
                    onClick={buttonClick}>
                    {props.selected === true ? 'CIRCLE 4 SELECTED' : 'SELECT CIRCLE 4'}
                </button>
            </div >
        )
}

export default CircleSelector
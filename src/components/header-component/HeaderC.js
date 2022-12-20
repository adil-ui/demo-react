import React from "react";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    countClickBtn() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return <div className="hero-image">
            <div className="hero-text">
                <h1>I am John Doe</h1>
                <p id='myPara'>You clicked {this.state.count} times</p>
                <button onClick={this.countClickBtn}>Hire me</button>
            </div>
        </div> 
    }
}


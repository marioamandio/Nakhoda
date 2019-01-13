import React, { Component } from 'react';
import '../styles/elements.css'



class SelectDown extends Component {
    state = {
        selected: false
    }

    onClickHandler() {
        this.setState((prev) => ({selected: !prev.selected}))
    }

    renderOptions() {
        const fills = new Array(7).fill(`some random text`);
        return (
            <div className="select-menu-list">
                {fills.map((fill, i) => <div key={i}>{fill}</div>)}
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="select-menu__custom" name="some" id="" onClick={this.onClickHandler.bind(this)}>
                    {this.state.selected && this.renderOptions()}
                </div>
            </div>
        );
    }
}

export default SelectDown;
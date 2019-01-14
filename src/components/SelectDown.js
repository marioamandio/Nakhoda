import React, { Component } from 'react';
import '../styles/elements.css';




class SelectDown extends Component {
    state = {
        selected: false
    }

    onClickHandler() {
        this.setState((prev) => ({selected: !prev.selected}))
    }

    renderOptions() {
        const fills = new Array(7).fill(`some random text sim`);
        return (
            <div className="select-menu-list">
                {fills.map((fill, i) => (
                    <div 
                        key={i} 
                        className={`select-menu__options--option`} 
                        id={`menu${i}`}>
                            <div className="select-menu__options--option--text">
                                {fill}
                            </div>
                    </div>))}
            </div>
        )
    }

    render() {
        return (
            <div className="select-menu">
                <div className="select-menu__custom" name="some" id="" onClick={this.onClickHandler.bind(this)}>
                    <p>something here</p>
                </div>
                <div className="select-menu__options">
                    {this.state.selected && this.renderOptions()}
                </div>
            </div>
        );
    }
}

export default SelectDown;
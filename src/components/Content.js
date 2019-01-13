import React from 'react';

import SelectDown from './SelectDown'
import imgVerified from '../img/icons/icon-verified.png'
import '../styles/components/content.css'
import '../styles/icons/icons.css'



const Content = () => {
    return (
        <div className="content--container">
            <div className="content">
                <div className="content--text">
                    <div className="content--text--title">
                        <img src={imgVerified} alt="" className="icon--verified"/>
                        <span>CSspendisse ornare auctor urna.</span>
                    </div>
                    <div className="content--text--text">
                        <p>Fusce venenatis diam nisi, a pharetra quam dictum eget. Vestibulum varius quam et nisi lacinia mattis. Nunc tempor commodo nulla. Curabitur euismod libero eget dolor.</p>
                    </div>
                </div>
                <div className="content--grid">
                    <div className="content--grid__el">
                        <p>paraiso tropical</p>
                        <p>araiso tropical</p>
                        <p>araiso tropical</p>
                        <p>araiso tropical</p>
                    </div>
                    <div className="content--grid__el">
                        <p>araiso tropical</p>
                        <p>araiso tropical</p>
                        <p>araiso tropical</p>
                        <p>araiso tropical</p>
                    </div>
                    <div className="content--grid__el">
                        <p>araiso tropical</p>
                    </div>
                    <div className="content--grid__el">
                        <p>araiso tropical</p>
                        <p>araiso tropical</p>
                        <p>araiso tropical</p>
                        <p>araiso tropical</p>
                    </div>
                    <div className="content--grid__el">
                        <p>araiso tropical</p>
                        <p>araiso tropical</p>
                        <p>araiso tropical</p>
                        <p>araiso tropical</p>
                    </div>
                </div>
                <div className="content-board">
                    <div className="content-board__header">
                        <div className="content-board__header--title dashboard-title__1">
                            <p className="">Perspiciatis Unde</p>
                        </div>
                        <div className="content-board__header--title dashboard-title__2">
                            <p>Acusetion aularditon vandam</p>
                        </div>
                        <div className="content-board__header--title dashboard-title__3">
                            <p>voluptatem (comodo)</p>
                        </div>
                    </div>
                    <div className="content-board__body">
                        <div className="content-board__body-el content__body--1">
                            <p>some text</p>
                        </div>
                        <div className="content-board__body-el">
                            <SelectDown />
                        </div>
                        <div className="content-board__body-el content__body--3">
                            <p>some more text here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
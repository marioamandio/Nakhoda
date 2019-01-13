import React from 'react';

import Navbar from './Navbar';
import Menu from './Menu';
import Content from './Content';

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <Menu />
            <Content />
        </div>
    );
};

export default App;

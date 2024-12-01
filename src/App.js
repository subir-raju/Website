import React from "react";

import About from './container/About/About';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    return (
        <div>
           <Navbar />
            <Header />
            <About />
            <Footer />
        </div>
    )
}

export default App;
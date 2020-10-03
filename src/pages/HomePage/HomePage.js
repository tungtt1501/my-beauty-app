import React, { Fragment } from 'react';
import About from './../../components/About/About'
import ServiceList from './../../components/ServiceList/ServiceList'
import Menu from './../../components/Menu/Menu'
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import Gallery from '../../components/Gallery/Gallery';

class HomePage extends React.Component {

    componentDidMount () {
        const script = document.createElement("script");

        script.src = "/js/main.js";
        script.async = true;

        document.body.appendChild(script);
    }
  
  render() {
    return (
      <div>
        <Menu />
        <Header />
        <About />
        <ServiceList />
        <Gallery />
        <Footer />
      </div>
    )
    }
}

export default HomePage;

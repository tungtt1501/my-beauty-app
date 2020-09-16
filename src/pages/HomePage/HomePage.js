import React, { Fragment } from 'react';
import About from './../../components/About/About'
import ServiceList from './../../components/ServiceList/ServiceList'
import BlogList from './../../components/BlogList/BlogList'
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'

class HomePage extends React.Component {

    componentDidMount () {
        const script = document.createElement("script");

        script.src = "/js/main.js";
        script.async = true;

        document.body.appendChild(script);
    }
  
  render() {
    return (
      <Fragment>
        <Header />
        <About />
        <ServiceList />
        <BlogList />
        <Footer />
      </Fragment>
      );
    }
}

export default HomePage;

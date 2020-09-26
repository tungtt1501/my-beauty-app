import React from 'react';
import './Menu.css'
import { Link } from 'react-scroll';

const menus = [
    {
        name: 'Home',
        to: 'home',
        exact: true
    },
    {
        name: 'About',
        to: 'about',
        exact: false
    },
    {
        name: 'Services',
        to: 'services',
        exact: false
    },
    {
        name: 'Gallery',
        to: 'gallery',
        exact: false
    }
];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <li className={'nav-item'}>
            <Link to={to}
                spy={true} 
                smooth={true} 
                duration={1000} 
                className={'nav-link display-cursor'}
                activeClass={'active'}>
                {label}
            </Link>
        </li>
    )
}

class Menu extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <Link to="home"
                spy={true} 
                smooth={true} 
                duration={1000} 
                className={'navbar-brand nav-link display-cursor'}
                activeClass={'active'}>
                <img width={"170px"} src={'images/icon.png'}/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
                {this.showMenu(menus)}
            </ul>
          </div>
          </div>
      </nav>
      );
    }
  
    showMenu = (menus) => {
        var result = null;
        if (menus) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            })
        }
        return result;
    }
}

export default Menu;

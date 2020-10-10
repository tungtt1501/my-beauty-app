import React from 'react';
import { Link } from 'react-scroll';

const menus = [
  {
    name: 'Accueil',
    to: 'home',
    exact: true
  },
  {
    name: 'A propos',
    to: 'about',
    exact: false
  },
  {
    name: 'Soins',
    to: 'services',
    exact: false
  },
  {
    name: 'Galerie',
    to: 'gallery',
    exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <li>
      <Link to={to}
        spy={true}
        smooth={true}
        duration={1000}
        style={{cursor:"pointer"}}>
        {label}
      </Link>
    </li>
  )
}

class Footer extends React.Component {

  render() {
    return (
      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">My Beauty Lausanne</h2>
                <p>My Beauty Lausanne vous accueille dans son nouvel institut de beauté dans un cadre chaleureux au centre ville de Lausanne (Place Pépinet 2) et vous propose des soins ongulaires et corporels de qualité.</p>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Liens rapides</h2>
                <ul className="list-unstyled">
                  {this.showMenu(menus)}
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Vous avez des questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon icon-map-marker" /><span className="text" style={{color: "black"}}>Place Pépinet 2, 1003 Lausanne, Suisse</span></li>
                    <li><span className="icon icon-phone" /><span className="text" style={{color: "black"}}>+41 78 743 96 89</span></li>
                    <li><span className="icon icon-envelope" /><span className="text" style={{color: "black"}}>mybeautylausanne@gmail.com</span></li>
                    <li>
                      <ul className="ftco-footer-social list-unstyled float-lft mt-3" style={{ display:"flex" }}>
                        <li className="ftco-animate"><a href="https://twitter.com"><span className="icon-twitter" /></a></li>
                        <li className="ftco-animate"><a href="https://www.facebook.com/My-Beauty-Lausanne-100487788466428"><span className="icon-facebook" /></a></li>
                        <li className="ftco-animate"><a href="https://www.instagram.com/"><span className="icon-instagram" /></a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="mb-0">
              </p>
            </div>
          </div>
        </div>
      </footer>
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

export default Footer;

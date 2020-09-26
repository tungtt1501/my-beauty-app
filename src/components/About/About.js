import React, { Fragment } from 'react';
import { Element } from 'react-scroll';
import BookForm from '../Book/BookForm';
import intro from './../../images/intro.jpg';
import offerdeal1 from './../../images/offer-deal-1.jpg'
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

class About extends React.Component {
  state = {
    sign: false,
    open: false
  }

  onOpenModal = () => {
    this.setState({ sign: true });
  };

  onCloseModal = () => {
    this.setState({ sign: false });
  };

  onAddSuccess = () => {
    this.onCloseModal();
    this.setState({ open: true });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  TransitionRight = (props) => {
    return <Slide {...props} direction="right" />;
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose} TransitionComponent={this.TransitionRight} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert onClose={this.handleClose} severity="success" style={{color:'white', backgroundColor:'#6bac05'}}>
              This is a success message!
          </Alert>
          </Snackbar>
        </div>
        <Element id="about" name="about">
          <section className="ftco-section ftco-intro" style={{ backgroundImage: 'url(' + intro + ')' }}>
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-md-6">
                  <div className="heading-section ftco-animate">
                    <h2 className="mb-4">My Beauty Lausanne</h2>
                  </div>
                  <p className="ftco-animate">My Beauty Lausanne vous accueille dans son nouvel institut de beauté dans un cadre chaleureux au centre ville de Lausanne (Place Pépinet 2) et vous propose des soins ongulaires et corporels de qualité. Bienvenue dans notre institut pour un moment de détente dans un cadre apaisant.</p>
                  <ul className="mt-5 do-list">
                    <li className="ftco-animate"><span className="ion-ios-checkmark-circle mr-3" /><span>Epilation à la cire</span></li>
                    <li className="ftco-animate"><span className="ion-ios-checkmark-circle mr-3" /><span>Forfait épilation</span></li>
                    <li className="ftco-animate"><span className="ion-ios-checkmark-circle mr-3" /><span>Pose vernis normal</span></li>
                    <li className="ftco-animate"><span className="ion-ios-checkmark-circle mr-3" /><span>Beauté des pieds</span></li>
                    <li className="ftco-animate"><span className="ion-ios-checkmark-circle mr-3" /><span>Pose nouveaux ongles</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section ftco-no-pt ftco-no-pb">
            <div className="container-flux">
              <div className="row no-gutters">
                <div className="col-md-4 d-flex align-items-stretch">
                  <div className="offer-deal text-center px-2 px-lg-5">
                    <div className="img" style={{ backgroundImage: 'url(images/offer-deal-1.jpg)' }} />
                    <div className="text mt-4">
                      <h3 className="mb-4">Forfait épilation</h3>
                      <p className="mb-5">Bienvenue dans notre institut pour un moment de détente dans un cadre apaisant.</p>
                      <p><a className="btn px-4 py-3" style={{backgroundColor: '#6bac05', color: 'white'}} onClick={this.onOpenModal}> Book A Treatment <span className="ion-ios-arrow-round-forward" /></a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-stretch">
                  <div className="offer-deal active text-center px-2 px-lg-5">
                    <div className="img" style={{ backgroundImage: 'url(images/offer-deal-2.jpeg)' }} />
                    <div className="text mt-4">
                      <h3 className="mb-4">Epilation à la cire</h3>
                      <p className="mb-5">Bienvenue dans notre institut pour un moment de détente dans un cadre apaisant.</p>
                      <p><a className="btn px-4 py-3" style={{backgroundColor: '#6bac05', color: 'white'}} onClick={this.onOpenModal}> Book A Treatment <span className="ion-ios-arrow-round-forward" /></a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-stretch">
                  <div className="offer-deal text-center px-2 px-lg-5">
                    <div className="img" style={{ backgroundImage: 'url(images/offer-deal-3.jpg)' }} />
                    <div className="text mt-4">
                      <h3 className="mb-4">Beauté des pieds</h3>
                      <p className="mb-5">Bienvenue dans notre institut pour un moment de détente dans un cadre apaisant.</p>
                      <p><a className="btn px-4 py-3" style={{backgroundColor: '#6bac05', color: 'white'}} onClick={this.onOpenModal}> Book A Treatment <span className="ion-ios-arrow-round-forward" /></a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="ftco-section ftco-section-services bg-light">
            <div className="container-fluid px-md-5">
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="services text-center ftco-animate">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-candle" />
                    </div>
                    <div className="text mt-3">
                      <h3>Aromatheraphy</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="services text-center ftco-animate">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-beauty-treatment" />
                    </div>
                    <div className="text mt-3">
                      <h3>Skin Care</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="services text-center ftco-animate">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-stone" />
                    </div>
                    <div className="text mt-3">
                      <h3>Herbal Spa</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="services text-center ftco-animate">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-relax" />
                    </div>
                    <div className="text mt-3">
                      <h3>Body Massage</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <Modal open={this.state.sign} onClose={this.onCloseModal}>
            <BookForm onAddSuccess={this.onAddSuccess} />
          </Modal>

        </Element>
      </Fragment>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(About);

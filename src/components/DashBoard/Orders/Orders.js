import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Budget from './../Budget';
import TotalCustomers from './../TotalCustomer';
import TotalProfit from './../TotalProfit';
import LatestOrders from './../LatestOrders';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

Orders.propTypes = {
    
};

function Orders(props) {
    return (
            <Container maxWidth={false}>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  lg={4}
                  md={6}
                  xl={4}
                  xs={12}
                >
                  <Budget />
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={6}
                  xl={4}
                  xs={12}
                >
                  <TotalCustomers />
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={6}
                  xl={4}
                  xs={12}
                >
                  <TotalProfit />
                </Grid>
                <Grid
                  item
                  lg={12}
                  md={12}
                  xl={12}
                  xs={12}
                >
                  <LatestOrders />
                </Grid>
              </Grid>
            </Container>
    );
}

export default Orders;
import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Budget from './../Budget';
import TotalCustomers from './../TotalCustomer';
import TotalProfit from './../TotalProfit';
import LatestOrders from './LatestOrders';

Orders.propTypes = {};

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
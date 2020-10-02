import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LatestOrders from './../LatestOrders';
import Box from '@material-ui/core/Box';
import ServiceCategory from './ServiceCategory';
import ServiceItems from './ServiceItems';

ServiceDashBoard.propTypes = {
    
};

function ServiceDashBoard(props) {
    return (
        <Container maxWidth={false}>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  lg={6}
                  md={6}
                  xl={6}
                  xs={12}
                >
            <ServiceCategory />
                </Grid>
                <Grid
                  item
                  lg={12}
                  md={12}
                  xl={12}
                  xs={12}
                >
                  <ServiceItems />
                </Grid>
              </Grid>
            </Container>
    );
}

export default ServiceDashBoard;
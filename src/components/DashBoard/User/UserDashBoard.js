import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Users from './Users';

UserDashboard.propTypes = {

};

function UserDashboard(props) {
    return (
        <Container maxWidth={false}>
            <Grid
                container
                spacing={3}
            >
                <Grid
                    item
                    lg={12}
                    md={9}
                    xl={9}
                    xs={12}
                >
                    <Users />
                </Grid>
            </Grid>
        </Container>
    );
}

export default UserDashboard;
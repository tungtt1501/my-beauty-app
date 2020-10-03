import React, { Fragment, useEffect, useState } from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { actResetUsers, actGetUsersRequest, actDeleteUserRequest } from './../../../actions/index'
import { connect } from 'react-redux'
import TablePagination from '@material-ui/core/TablePagination';
import AddIcon from '@material-ui/icons/Add';
import {
    Button,
    Card,
    CardHeader,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    makeStyles, TableContainer
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import User from './User';

const useStyles = makeStyles(() => ({
    root: {},
    tableHeight: {
        flexFlow: 1
    },
    tableLayout: {
        tableLayout: "fixed"
    },
    button: {
        margin: "10px"
    }
}));

function Users({ className, users, resetForm, fetchAllUsers, deleteUser, ...rest }) {

    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        resetForm();
        fetchAllUsers();
    }, []);

    const onDeleteUser = (id) => {
        deleteUser(id);
    }
    return (
        <Fragment>
            <Card
                className={clsx(classes.root, className)}
                {...rest}>
                <CardHeader title="Users" />
                <Link to={`/admin/users/addUser`}
                    exact={'false'}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<AddIcon />}
                    >
                        Add
                </Button>
                </Link>
                <Divider />
                <Paper className={classes.root}></Paper>
                <TableContainer className={classes.tableHeight}>
                    <Table className={classes.tableLayout}>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    User id
                                </TableCell>
                                <TableCell>
                                    Email
                                </TableCell>
                                <TableCell>
                                    First Name
                                </TableCell>
                                <TableCell>
                                    Last Name
                                </TableCell>
                                <TableCell>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
                                <User
                                    key={index}
                                    index={index}
                                    user={user}
                                    onDeleteUser={() => onDeleteUser(user.userId)} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Card>
        </Fragment>
    );
}

Users.propTypes = {
    className: PropTypes.string,
};

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        resetForm: () => {
            dispatch(actResetUsers());
        },
        fetchAllUsers: () => {
            dispatch(actGetUsersRequest());
        },
        deleteUser: (id) => {
            dispatch(actDeleteUserRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { actFetchAllServicesBookRequest, actUpdateServicesBookRequest, actGetItemServicesBookRequest } from './../../actions/index'
import { connect } from 'react-redux'
import OrderItem from './OrderItem'
import TablePagination from '@material-ui/core/TablePagination';
import {
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

const useStyles = makeStyles(() => ({
    root: {},
    tableHeight: {
        flexFlow: 1
    }
}));

const LatestOrders = ({ className, orders, itemEditing, fetchAllServicesBook, getServicesBook, updateServicesBook, ...rest }) => {
    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        fetchAllServicesBook();
    }, []);

    const onEdit = (id) => {
        getServicesBook(id);
    }

    const onConfirm = () => {
        itemEditing.status = 1;
        updateServicesBook(itemEditing);
    }

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}>
            <CardHeader title="Latest Orders" />
            <Divider />
            <Paper className={classes.root}></Paper>
            <TableContainer className={classes.tableHeight}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                Full Name
                                    </TableCell>
                            <TableCell align="center">
                                Email
                                    </TableCell>
                            <TableCell align="center">
                                Phone
                                    </TableCell>
                            <TableCell align="center">
                                Service
                                    </TableCell>
                            <TableCell align="center">
                                Date
                                    </TableCell>
                            <TableCell align="center">
                                Time
                                    </TableCell>
                            <TableCell align="center">
                                Status
                                    </TableCell>
                            <TableCell align="center">
                                Action
                                    </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order, index) => (
                            <OrderItem
                                key={index}
                                index={index}
                                order={order}
                                onEditItem={() => onEdit(order.id)}
                                onConfirmItem={() => onConfirm()} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination 
                rowsPerPageOptions={[6, 12, 25]}
                component="div"
                count={orders.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Card>
    );
};

LatestOrders.propTypes = {
    className: PropTypes.string,
};

const mapStateToProps = state => {
    return {
        orders: state.servicesBook,
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllServicesBook: () => {
            dispatch(actFetchAllServicesBookRequest());
        },
        getServicesBook: (id) => {
            dispatch(actGetItemServicesBookRequest(id));
        },
        updateServicesBook: (serviceBook) => {
            dispatch(actUpdateServicesBookRequest(serviceBook));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestOrders);

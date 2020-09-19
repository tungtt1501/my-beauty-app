import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { actFetchAllServicesBookRequest, actUpdateServicesBookRequest, actGetItemServicesBookRequest } from './../../actions/index'
import { connect } from 'react-redux'
import OrderItem from './OrderItem'
import {
    Box,
    Button,
    Card,
    CardHeader,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(() => ({
    root: {},
    actions: {
        justifyContent: 'flex-end'
    }
}));

const LatestOrders = ({ className, orders, itemEditing, fetchAllServicesBook, getServicesBook, updateServicesBook, ...rest }) => {
    const classes = useStyles();

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
            {...rest}
        >
            <CardHeader title="Latest Orders" />
            <Divider />
            <PerfectScrollbar>
                <Box minWidth={800}>
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
                            {orders.map((order, index) => (
                                <OrderItem
                                    key={index}
                                    index={index}
                                    order={order}
                                    onEditItem={() => onEdit(order.id)}
                                    onConfirmItem={() => onConfirm()} />
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
            <Box
                display="flex"
                justifyContent="flex-end"
                p={2}>
                <Button
                    color="primary"
                    endIcon={<ArrowRightIcon />}
                    size="small"
                    variant="text">
                    View all
                </Button>
            </Box>
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

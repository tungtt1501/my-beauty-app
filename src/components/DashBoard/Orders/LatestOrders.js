import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'
import OrderItem from '../OrderItem'
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
import { getAll, update } from './OrderSlice';

const useStyles = makeStyles(() => ({
    root: {},
    tableHeight: {
        flexFlow: 1
    },
    tableLayout: {
        tableLayout: "fixed",
        minWidth: "1200px"
    }
}));

const LatestOrders = (props) => {
    const { className, ...rest } = props;
    const classes = useStyles();

    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.list);
    const loadingStatus = useSelector(state => state.orders.status);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [itemEditing, setItemEditing] = useState({
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceType: '',
        date: '',
        time: '',
        status: null
    });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        if (loadingStatus == 'idle') {
            const fetchAllOrder = async () => {
                try {
                    const params = {};
                    await dispatch(getAll(params));
                } catch (error) {
                    console.log('Failed to fetch category list: ', error);
                }
            }

            fetchAllOrder();
        }
    }, [loadingStatus, dispatch]);

    const onEdit = (id) => {
        const foundItem = orders.find(x => x.id === id);
        setItemEditing({ ...foundItem, status: 1 });
    }

    const onConfirm = () => {
        const updateOrder = async () => {
            try {
                await dispatch(update(itemEditing));
            } catch (error) {
                console.log('Failed to delete: ', error);
            }
        }

        updateOrder();
    }

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}>
            <CardHeader title="Latest Orders" />
            <Divider />
            <Paper className={classes.root}></Paper>
            <TableContainer className={classes.tableHeight}>
                <Table className={classes.tableLayout}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Full Name
                                    </TableCell>
                            <TableCell>
                                Email
                                    </TableCell>
                            <TableCell>
                                Phone
                                    </TableCell>
                            <TableCell>
                                Service
                                    </TableCell>
                            <TableCell>
                                Date
                                    </TableCell>
                            <TableCell>
                                Time
                                    </TableCell>
                            <TableCell>
                                Status
                                    </TableCell>
                            <TableCell>
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
                rowsPerPageOptions={[5, 10, 25]}
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

export default LatestOrders;

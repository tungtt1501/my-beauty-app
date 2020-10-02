import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { actFetchAllServiceItemsRequest, actUpdateServicesBookRequest, actGetItemServicesBookRequest } from './../../../actions/index'
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
import ServiceItemDetail from './ServiceItemDetail';

const useStyles = makeStyles(() => ({
    root: {},
    tableHeight: {
        flexFlow: 1
    }
}));

const ServiceItems = ({ className, serviceItems, itemEditing, fetchAllServicesItems, getServicesBook, updateServicesBook, ...rest }) => {
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
        fetchAllServicesItems();
    }, []);

    const onEdit = (id) => {
        //getServicesBook(id);
    }

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}>
            <CardHeader title="Services Items" />
            <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<AddIcon />}
                    >
                        Add
            </Button>
            <Divider />
            <Paper className={classes.root}></Paper>
            <TableContainer className={classes.tableHeight}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Service Id
                            </TableCell>
                            <TableCell>
                                Category Id
                            </TableCell>
                            <TableCell>
                                Service Name
                            </TableCell>
                            <TableCell>
                                Time
                            </TableCell>
                            <TableCell>
                                Price
                            </TableCell>
                            <TableCell>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {serviceItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((serviceItem, index) => (
                            <ServiceItemDetail
                                key={index}
                                index={index}
                                serviceItem={serviceItem}
                                onEditItem={() => onEdit(serviceItem.serviceItemId)} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={serviceItems.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Card>
    );
};

ServiceItems.propTypes = {
    className: PropTypes.string,
};

const mapStateToProps = state => {
    return {
        serviceItems: state.serviceItems,
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllServicesItems: () => {
            dispatch(actFetchAllServiceItemsRequest());
        },
        getServicesBook: (id) => {
            dispatch(actGetItemServicesBookRequest(id));
        },
        updateServicesBook: (serviceBook) => {
            dispatch(actUpdateServicesBookRequest(serviceBook));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceItems);

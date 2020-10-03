import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { actResetServiceDetail, actFetchAllServiceItemsRequest, actDeleteServicesDetailRequest } from './../../../actions/index'
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
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {},
    tableHeight: {
        flexFlow: 1
    },
    tableLayout: {
        tableLayout: "fixed"
    }
}));

const ServiceItems = ({ className, serviceItems, itemEditing, resetForm, fetchAllServicesItems, deleteServiceDetail, ...rest }) => {
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
        fetchAllServicesItems();
    }, []);

    const onDeleteServiceDetail = (id) => {
        deleteServiceDetail(id);
    }

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}>
            <CardHeader title="Services Items" />
            <Link to={`/admin/services/addServiceDetail`}
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
                                onDeleteServiceDetail={() => onDeleteServiceDetail(serviceItem.serviceItemId)} />
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
        resetForm: () => {
            dispatch(actResetServiceDetail());
        },
        fetchAllServicesItems: () => {
            dispatch(actFetchAllServiceItemsRequest());
        },
        deleteServiceDetail: (id) => {
            dispatch(actDeleteServicesDetailRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceItems);

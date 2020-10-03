import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { actFetchServicesRequest, actUpdateServicesBookRequest, actGetItemServicesBookRequest } from './../../../actions/index'
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
import ServiceCategoryItem from './ServiceCategoryItem';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {},
    tableHeight: {
        flexFlow: 1
    }
}));

const ServiceCategory = ({ className, services, itemEditing, fetchAllServicesCategory, getServicesBook, updateServicesBook, ...rest }) => {
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
        fetchAllServicesCategory();
    }, []);

    const onEdit = (id) => {
        //getServicesBook(id);
    }

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}>
            <CardHeader title="Services Category" />
            <Link to={`/admin/services/addCategory`}
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
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Category Id
                            </TableCell>
                            <TableCell>
                                Category Name
                            </TableCell>
                            <TableCell>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {services.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((service, index) => (
                            <ServiceCategoryItem
                                key={index}
                                index={index}
                                service={service}
                                onEditItem={() => onEdit(service.categoryId)} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={services.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Card>
    );
};

ServiceCategory.propTypes = {
    className: PropTypes.string,
};

const mapStateToProps = state => {
    return {
        services: state.services,
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllServicesCategory: () => {
            dispatch(actFetchServicesRequest());
        },
        getServicesBook: (id) => {
            dispatch(actGetItemServicesBookRequest(id));
        },
        updateServicesBook: (serviceBook) => {
            dispatch(actUpdateServicesBookRequest(serviceBook));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceCategory);

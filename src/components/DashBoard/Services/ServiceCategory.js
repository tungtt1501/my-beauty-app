import React, { Fragment, useEffect } from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '@material-ui/core/TablePagination';
import AddIcon from '@material-ui/icons/Add';
import { deleteEntity, getAll } from './ServiceCategorySlice'
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
    },
    tableLayout: {
        tableLayout: "fixed"
    },
    button: {
        margin: "10px"
    }
}));

const ServiceCategory = (props) => {
    const { className, ...rest } = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    const services = useSelector(state => state.serviceCategory.list);
    const loadingStatus = useSelector(state => state.serviceCategory.status);

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
        if (loadingStatus == 'idle') {
            const fetchAllServicesCategory = async () => {
                try {
                    const params = {};
                    await dispatch(getAll(params));
                } catch (error) {
                    console.log('Failed to fetch category list: ', error);
                }
            }

            fetchAllServicesCategory();
        }
    }, [loadingStatus, dispatch]);


    const onDeleteCategory = (id) => {
        const deleteCategory = async () => {
            try {
                const params = { id: id };
                await dispatch(deleteEntity(params));
            } catch (error) {
                console.log('Failed to delete: ', error);
            }
        }
        deleteCategory();
    }

    return (
        <Fragment>
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
                    <Table className={classes.tableLayout}>
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
                                    onDeleteCategory={() => onDeleteCategory(service.categoryId)} />
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
        </Fragment>
    );
};

ServiceCategory.propTypes = {
    className: PropTypes.string,
};

export default ServiceCategory;

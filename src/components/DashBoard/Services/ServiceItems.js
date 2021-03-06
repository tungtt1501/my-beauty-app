import React, { useEffect } from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '@material-ui/core/TablePagination';
import AddIcon from '@material-ui/icons/Add';
import {deleteEntity, getAllItem} from './ServiceItemsSlice'
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
    },
    button: {
        margin: "10px"
    }
}));

const ServiceItems = (props) => {
    const {className, ...rest } = props;
    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const dispatch = useDispatch();
    const serviceItems = useSelector(state => state.serviceItem.list);
    const loadingStatus = useSelector(state => state.serviceItem.status);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        if (loadingStatus === 'idle') {
            const fetchAllServicesItem = async () => {
                try {
                    const params = {};
                    await dispatch(getAllItem(params));
                } catch (error) {
                    console.log('Failed to fetch service item list: ', error);
                }
            }
    
            fetchAllServicesItem();
        }
    }, [loadingStatus, dispatch]);

    const onDeleteServiceDetail = (id) => {
        const deleteServiceItem = async () => {
            try {
                await dispatch(deleteEntity(id));
            } catch (error) {
                console.log('Failed to delete: ', error);
            }
        }
        deleteServiceItem();
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

export default ServiceItems;

import React, { Fragment, useEffect } from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux'
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
import { getAll, deleteEntity } from './UserSlice'

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

function Users(props) {
    const { className, ...rest } = props;
    const classes = useStyles();

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.list);
    const loadingStatus = useSelector(state => state.users.status);

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
            const fetchAllUser = async () => {
                try {
                    const params = {};
                    await dispatch(getAll(params));
                } catch (error) {
                    console.log('Failed to fetch category list: ', error);
                }
            }

            fetchAllUser();
        }
    }, [loadingStatus, dispatch]);

    const onDeleteUser = (id) => {
        const deleteUser = async () => {
            try {
                await dispatch(deleteEntity(id));
            } catch (error) {
                console.log('Failed to delete: ', error);
            }
        }
        deleteUser();
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

export default Users;
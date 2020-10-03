import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {
    Button,
    TableCell,
    TableRow,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function ServiceCategoryItem({ service, onEditItem }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <TableRow
                hover
                key={service.categoryId}>
                <TableCell>
                    {service.categoryId}
                </TableCell>
                <TableCell>
                    {service.categoryName}
                </TableCell>
                <TableCell>
                    <Link to={`/admin/services/${service.categoryId}/editCate`}
                        exact={'false'}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<EditIcon />}
                        >Edit
                        </Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    >
                    Delete
                    </Button>
                </TableCell>
            </TableRow>
        </Fragment >
    );
}
import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {
    Button,
    TableCell,
    TableRow,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function ServiceItemDetail({ serviceItem, onEditItem}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <TableRow
                hover
                key={serviceItem.serviceItemId}>
                <TableCell>
                    {serviceItem.serviceItemId}
                </TableCell>
                <TableCell>
                    {serviceItem.categoryId}
                </TableCell>
                <TableCell>
                    {serviceItem.serviceItemName}
                </TableCell>
                <TableCell>
                    {serviceItem.serviceItemTime}
                </TableCell>
                <TableCell>
                    {serviceItem.serviceItemPrice}
                </TableCell>
                <TableCell>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<EditIcon />}
                    >
                        Edit
                    </Button>
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
        </Fragment>
    );
}
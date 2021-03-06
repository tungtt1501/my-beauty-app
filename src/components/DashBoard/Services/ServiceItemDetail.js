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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Draggable from 'react-draggable';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

export default function ServiceItemDetail({ serviceItem, onDeleteServiceDetail}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = (id) => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleConfirmDel = () => {
        setOpen(false);
        onDeleteServiceDetail();
    };
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
                    {serviceItem.serviceItemPrice}
                </TableCell>
                <TableCell>
                    <Link to={`/admin/services/${serviceItem.serviceItemId}/editServiceDetail`}
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
                        onClick={() => handleClickOpen()}
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                </Button>
                </TableCell>
            </TableRow>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title">
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Confirm
            </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure delete this service item?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmDel} color="primary">
                        Confirm
                    </Button>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}
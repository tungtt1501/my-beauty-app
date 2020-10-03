import React, { Fragment, useState } from 'react';
import moment from 'moment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import {
    Button,
    Chip,
    TableCell,
    TableRow,
} from '@material-ui/core';

function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

export default function OrderItem({ order, onEditItem, onConfirmItem }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = (id) => {
        setOpen(true);
        onEditItem();
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        setOpen(false);
        onConfirmItem();
    };
    return (
        <Fragment>
            <TableRow
                hover
                key={order.id}>
                <TableCell>
                    {order.firstName + ' ' + order.lastName}
                </TableCell>
                <TableCell>
                    {order.email}
                </TableCell>
                <TableCell>
                    {order.phone}
                </TableCell>
                <TableCell>
                    {order.serviceType}
                </TableCell>
                <TableCell>
                    {moment(order.date).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>
                    {moment(order.time).format('HH:mm')}
                </TableCell>
                <TableCell>
                    <Chip
                        color={order.status == 0 ? 'secondary' : 'primary'}
                        label={order.status == 0 ? 'Pending' : 'Confirmed'}
                        size="small"
                    />
                </TableCell>
                <TableCell>
                    <Button variant="contained" size="small" color="primary" onClick={() => handleClickOpen()} className={order.status == 0 ? '' : 'Mui-disabled'}>
                        Confirm
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
                        Are you sure you have confirmed with the customer?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirm} color="primary">
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
import React, { Fragment } from 'react';
import { Card, CardHeader, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import clsx from 'clsx';
import UserForm from './UserForm';
import { add, update } from './UserSlice';

UserEditPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
        },
    }
}));

function UserEditPage(props) {
    const { className, ...rest } = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const isAddMode = !id;

    const editedItem = useSelector(state => {
        const foundItem = state.users.list.find(x => x.userId == id);
        return {...foundItem, password: 'EditPage'};
    });

    const initialValues = isAddMode ? { password: '', firstName: '', lastName: '', email: '' } : editedItem;

    const handleSubmit = (values) => {
        const editUser = async () => {
            if (isAddMode) {
                const user = {...values}
                await dispatch(add(user));
            } else {
                // Do something here
                const user = {...values, userId: id}
                await dispatch(update(user));
            }

            history.goBack();
        }

        editUser();
    }

    return (
        <Fragment>
            <Card
                className={clsx(classes.root, className)}
                {...rest}>
                <CardHeader title={`Edit Services Item`} />
                <UserForm isAddMode={isAddMode}
                    initialValues={initialValues}
                    onSubmit={handleSubmit} />
            </Card>
        </Fragment>
    );
}

export default UserEditPage;
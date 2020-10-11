import { Card, CardHeader, makeStyles } from '@material-ui/core';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { useHistory, useParams } from 'react-router-dom';
import ServiceCategoryForm from './ServiceCategoryForm';
import { add, update } from './ServiceCategorySlice';

ServiceCategoryEditPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
        },
    },
    button: {
        width: '12ch',
    }
}));

function ServiceCategoryEditPage(props) {
    const { className, ...rest } = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const isAddMode = !id;


    const editedItem = useSelector(state => {
        const foundItem = state.serviceCategory.list.find(x => x.categoryId == id);
        return foundItem;
    });

    const initialValues = isAddMode ? { categoryName: '' } : editedItem;

    const handleSubmit = (values) => {
        const addCategory = async () => {
            if (isAddMode) {
                const category = {...values}
                await dispatch(add(category));
            } else {
                // Do something here
                const category = {...values, categoryId: id}
                await dispatch(update(category));
            }

            history.goBack();
        }

        addCategory();
    }

    return (
        <Fragment>
            <Card
                className={clsx(classes.root, className)}
                {...rest}>
                <CardHeader title={id ? `Edit Services Category` : `Add Services Category`} />
                <ServiceCategoryForm
                    isAddMode={isAddMode}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </Card>
        </Fragment>
    );
}

export default ServiceCategoryEditPage;
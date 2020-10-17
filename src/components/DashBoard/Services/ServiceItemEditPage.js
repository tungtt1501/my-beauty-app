import React, { Fragment, useEffect } from 'react';
import { Card, CardHeader, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import clsx from 'clsx';
import ServiceDetailForm from './ServiceDetailForm';
import { add, resetState, update } from './ServiceItemsSlice';

ServiceItemEditPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
        },
    }
}));

function ServiceItemEditPage(props) {
    const { className, ...rest } = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const isAddMode = !id;

    const serviceCategoryList = useSelector(state => state.serviceCategory.list);
    const editedItem = useSelector(state => {
        const foundItem = state.serviceItem.list.find(x => x.serviceItemId === id);

        if (foundItem) {
            const category = serviceCategoryList.find(x => x.categoryName === foundItem.categoryId);
            return {...foundItem, categoryId: category};
        }
        return {...foundItem, categoryId: null};
    });

    const initialValues = isAddMode ? { categoryId: null, serviceItemName: '', serviceItemPrice: '' } : editedItem;

    useEffect(() => {
        dispatch(resetState());
    }, [])

    const handleSubmit = (values) => {
        const editServiceItem = async () => {
            if (isAddMode) {
                const serviceItem = {...values, categoryId: values.categoryId.categoryName}
                await dispatch(add(serviceItem));
            } else {
                // Do something here
                const serviceItem = {...values, categoryId: values.categoryId.categoryName, serviceItemId: id}
                await dispatch(update(serviceItem));
            }

            history.goBack();
        }

        editServiceItem();
    }
    return (
        <Fragment>
            <Card
                className={clsx(classes.root, className)}
                {...rest}>
                <CardHeader title={`Edit Services Item`} />
                <ServiceDetailForm isAddMode={isAddMode}
                    initialValues={initialValues}
                    serviceCategoryList={serviceCategoryList}
                    onSubmit={handleSubmit} />
            </Card>
        </Fragment>
    );
}

export default ServiceItemEditPage;
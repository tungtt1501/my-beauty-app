import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Card, CardHeader, Input, makeStyles } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { Link } from 'react-router-dom';
import BackspaceIcon from '@material-ui/icons/Backspace';
import SaveIcon from '@material-ui/icons/Save';
import { FormFeedback } from 'reactstrap';
import InputFile from '../../../custom-field/InputFile';

GalleryForm.propTypes = {
    onSubmit: PropTypes.func,
};

GalleryForm.defaultProps = {
    onSubmit: null,
}

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

function GalleryForm(props) {
    const classes = useStyles();
    const { initialValues, isAddMode, className, ...rest } = props;

    const FILE_SIZE = 160 * 1024;
    const SUPPORTED_FORMATS = [
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "image/png"
    ];

    const validationSchema = Yup.object().shape({
        file: Yup
            .mixed()
            .required("A file is required")
            .test(
                "fileSize",
                "File too large",
                value => value && value.size <= FILE_SIZE
            )
            .test(
                "fileFormat",
                "Unsupported Format",
                value => value && SUPPORTED_FORMATS.includes(value.type)
            )
    });

    return (
        <Fragment>
            <Card
                className={clsx(classes.root, className)}
                {...rest}>
                <CardHeader title={isAddMode ? `Edit Services Category` : `Add Services Category`} />
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={props.onSubmit}
                >
                    {(formikProps => {
                        const { values, errors, touched } = formikProps;
                        console.log({ values, errors, touched });
                        return (
                            <Form className={classes.root}>
                                <Field
                                    name="file"
                                    type="file"
                                    label="File"
                                    component={InputFile}
                                />
                                <Link to={`/admin/gallery`}
                                    exact={'true'}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="small"
                                        className={classes.button}
                                        startIcon={<BackspaceIcon />}
                                    >Back
                                    </Button>
                                </Link>
                                <Button
                                    variant="contained"
                                    color={isAddMode ? 'primary' : 'success'}
                                    size="small"
                                    type="submit"
                                    className={classes.button}
                                    startIcon={<SaveIcon />}
                                >

                                    Save
                                </Button>
                            </Form>
                        );
                    })}
                </Formik>
            </Card>
        </Fragment>

    );
}

export default GalleryForm;
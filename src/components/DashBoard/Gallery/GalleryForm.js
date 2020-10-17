import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Card, CardHeader, LinearProgress, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import BackspaceIcon from '@material-ui/icons/Backspace';
import SaveIcon from '@material-ui/icons/Save';
import { SimpleFileUpload } from 'formik-material-ui';

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
    const { initialValues, className, ...rest } = props;

    const FILE_SIZE = 2048 * 1024;
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
                <CardHeader title={`Add Services Category`} />
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={props.onSubmit}
                >
                    {({ submitForm, isSubmitting }) => (
                            <Form className={classes.root}>
                                <Field component={SimpleFileUpload} name="file" label="File to upload" />
                                {isSubmitting && <LinearProgress />}
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
                                    color={'primary'}
                                    size="small"
                                    onClick={submitForm}
                                    className={classes.button}
                                    startIcon={<SaveIcon />}
                                >

                                    Save
                                </Button>
                            </Form>
                        )
                    }
                </Formik>
            </Card>
        </Fragment>

    );
}

export default GalleryForm;
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import GalleryForm from './GalleryForm';
import { clearErr, uploadAct } from './UploadSlice';
import { Slide, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { add } from './GallerySlice';

GalleryAddEditPage.propTypes = {

};

const TransitionRight = (props) => {
    return <Slide {...props} direction="right" />;
}

function GalleryAddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const initialValues = { file: "" };
    const uploadStatus = useSelector(state => state.status);
    const name = useSelector(state => state.upload.url);
    const error = useSelector(state => state.upload.error);

    const handleSubmit = (values, { setSubmitting }) => {
        const uploadFile = async () => {
            try {
                const data = { ...values };
                await dispatch(uploadAct(data));
                setSubmitting(false);
            } catch (error) {
                console.log('Failed to fetch category list: ', error);
            }
        }

        uploadFile();
    }

    useEffect(() => {
        if (uploadStatus === 'success') {
            const addFile = async () => {
                if (!error && !name) {
                    try {
                        const gallery = { url: name };
                        console.log(gallery);
                        await dispatch(add(gallery));
                    } catch (error) {
                        console.log('Failed to fetch category list: ', error);
                    }
                }
            }

            addFile();
        }
    }, [uploadStatus, name, error])

    const handleClose = () => {
        const actCloseErr = clearErr();
        dispatch(actCloseErr);
    }

    return (
        <div className="photo-edit">
            <div className="photo-edit__form">
                <GalleryForm
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </div>
            <div>
                {error && (<Snackbar open={error !== null} autoHideDuration={6000} onClose={handleClose} TransitionComponent={TransitionRight} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                    <Alert severity="error" onClose={handleClose} variant="filled">
                        {error}
                    </Alert>
                </Snackbar>)}
            </div>
        </div>
    );
}

export default GalleryAddEditPage;
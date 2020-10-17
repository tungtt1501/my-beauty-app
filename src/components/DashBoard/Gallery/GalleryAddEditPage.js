import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import GalleryForm from './GalleryForm';
import { resetUploadFile, uploadAct } from './UploadSlice';
import { Slide, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { add, resetState } from './GallerySlice';

GalleryAddEditPage.propTypes = {

};

const TransitionRight = (props) => {
    return <Slide {...props} direction="right" />;
}

function GalleryAddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const initialValues = { file: "" };
    const uploadStatus = useSelector(state => state.upload.status);
    const name = useSelector(state => state.upload.url);
    const error = useSelector(state => state.upload.error);

    const handleSubmit = (values, { setSubmitting }) => {
        const uploadFile = async () => {
            try {
                const data = { ...values };
                await dispatch(uploadAct(data));
                setSubmitting(false);
                dispatch(resetUploadFile());
            } catch (error) {
                console.log('Failed to fetch category list: ', error);
            }
        }

        uploadFile();
    }

    useEffect(() => {
        dispatch(resetState());
    }, []);

    useEffect(() => {
        if (uploadStatus === 'succeeded') {
            const addFile = async () => {
                if (!error && name) {
                    try {
                        const gallery = { url: name };
                        await dispatch(add(gallery));
                        history.goBack();
                    } catch (error) {
                        console.log('Failed to fetch category list: ', error);
                    }
                }
            }

            addFile();
        }
    }, [uploadStatus, name, error]);

    const handleClose = () => {
        const actCloseErr = resetUploadFile();
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
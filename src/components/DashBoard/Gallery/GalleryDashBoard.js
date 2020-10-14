import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import GalleryList from './GalleryList';
import { getAll, removePhoto } from './GallerySlice';
import {
    Button
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

GalleryDashBoard.propTypes = {

};

function GalleryDashBoard(props) {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos.list);
    const loadingStatus = useSelector(state => state.photos.status);
    const history = useHistory();

    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo);
        const removePhotoId = photo.id;
        // const action = removePhoto(removePhotoId);
        // dispatch(action);
    }

    useEffect(() => {
        if (loadingStatus == 'idle') {
            const fetchAllGalley = async () => {
                try {
                    const params = {};
                    await dispatch(getAll(params));
                } catch (error) {
                    console.log('Failed to fetch category list: ', error);
                }
            }

            fetchAllGalley();
        }
    }, [loadingStatus, dispatch]);
    return (
        <Container maxWidth={false}>
            <div className="photo-main">
                <div className="py-5">
                    <Link to={`/admin/gallery/add`}
                        exact={'false'}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            startIcon={<AddIcon />}
                        >
                            Add
                        </Button>
                    </Link>
                </div>

                <GalleryList
                    photoList={photos}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </div>
        </Container>
    );
}

export default GalleryDashBoard;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import GalleryList from './GalleryList';
import { removePhoto } from './GallerySlice';
import {
    Button
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

GalleryDashBoard.propTypes = {

};

function GalleryDashBoard(props) {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos);
    const history = useHistory();

    const handlePhotoEditClick = (photo) => {
        console.log('Edit: ', photo);
        const editPhotoUrl = `/admin/gallery/${photo.id}`;
        history.push(editPhotoUrl);
    }

    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo);
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    }
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
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </div>
        </Container>
    );
}

export default GalleryDashBoard;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import Images from "../../../../constants/images";
import Banner from "../../../../components/banner";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/photo/component/photoList";
import { removePhoto } from "features/photo/photoSlice";

MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const photos = useSelector((state) => state.photoReducer);

  const handleRemove = (photo) => {
    const action = removePhoto(photo.id);
    dispatch(action);
  };

  const handleEdit = (photo) => {
    navigate(`/photo/${photo.id}`);
  };
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.BLUE_BG} />
      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
        <br />
        <PhotoList
          photoList={photos}
          onPhotoEditClick={handleEdit}
          onPhotoRemoveClick={handleRemove}
        />
      </Container>
    </div>
  );
}

export default MainPage;

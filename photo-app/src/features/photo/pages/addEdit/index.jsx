import React from "react";
import "./styles.scss";
import PhotoForm from "../../component/photoForm";
import Banner from "../../../../components/banner";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, editPhoto } from "features/photo/photoSlice";
import { useNavigate, useParams } from "react-router-dom";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { photoId } = useParams();

  const photoEdit = useSelector((state) =>
    state.photoReducer.find((photo) => photo.id === +photoId)
  );
  const isAddMode = !photoId;
  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : photoEdit;
  const handleSubmit = (values) => {
    setTimeout(() => {
      if (isAddMode) {
        const action = addPhoto(values);
        dispatch(action);
      } else {
        const action = editPhoto(values);
        dispatch(action);
      }
      navigate("/photos");
    }, 2000);
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddEditPage;

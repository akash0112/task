import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddNewFolder, EditFolder } from "../../../redux/actions/folderAction";
import { v4 as uuid } from "uuid";
import "./addfolder.scss";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../header/Header";
const AddFolder = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const [folderName, setfolderName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const foldersData = useSelector((state) => state?.folder);
  const editData =
    foldersData.foldersData.length > 0 &&
    foldersData?.foldersData?.filter((item) => item?.id === id);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(AddNewFolder({ id: uuid(), name: folderName }));
    setModalToggle(!modalToggle);
    navigate("/");
  };
  const handleCloseModal = () => {
    navigate("/");
  };
  useEffect(() => {
    if (id) {
      setfolderName(editData[0]?.name);
    }
  }, [id]);
  const handleEdit = () => {
    dispatch(EditFolder({ id: editData[0]?.id, name: folderName }));
    navigate("/");
  };
  return (
    <>
      <div className="mainpage">
        <Header />
        <h2 className="texthead">{id ? "Edit Folder" : "Add New Folder"}</h2>
        <div className="content-page">
          <div className="content">
            <div>
              <input
                className="input"
                name="name"
                value={folderName}
                onChange={(e) => setfolderName(e.target.value)}
                placeholder="Please Enter The Folder Name"
              />
            </div>
            <div className="content-page">
              <button
                className="button-submit"
                onClick={() => {
                  id ? handleEdit() : handleSubmit();
                }}
              >
                Submit
              </button>
              <button
                className="button-cancel"
                onClick={() => handleCloseModal()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFolder;

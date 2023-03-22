import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./folder.scss";
import { DeleteFolder } from "../redux/actions/folderAction";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Card from "./Card";
const UnderFolder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [actions, setactions] = useState(false);
  const { foldersData } = useSelector((state) => state?.folder);
  const [actionIndex, setactionIndex] = useState(null);
  const handleFolderClick = (name) => {
    navigate(`/${name}`);
  };
  const handleActions = (index) => {
    setactionIndex(index);
    setactions(!actions);
  };
  const handleDelete = (itemName) => {
    dispatch(DeleteFolder(itemName));
    setactionIndex(null);
  };
  const handleEdit = (id) => {
    navigate(`editfolder/${id}`);
  };
  const { id } = useParams();
  return (
    <div className="mainpage">
      <p className="under-folder-main-heading">{`${
        id ? `Root-Folder > ${id}` : ""
      }`}</p>
      <div className="folder-page">
        {foldersData &&
          foldersData.length > 0 &&
          foldersData.map((item, index) => (
            <Card
              item={item}
              index={index}
              handleFolderClick={handleFolderClick}
              handleActions={handleActions}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              actionIndex={actionIndex}
              actions={actions}
            />
            // <div key={index} className="folder-card">
            //   <div className="card-inner-content">
            //     <div
            //       className="card-content"
            //       onClick={() => handleFolderClick(item.name)}
            //     >
            //       <BsFolderFill size={40} />
            //       <p>{item.name}</p>
            //     </div>
            //     <BsThreeDotsVertical
            //       style={{ cursor: "pointer" }}
            //       onClick={() => handleActions(index)}
            //       size={18}
            //     />
            //   </div>
            //   <div className={`${actions && index === actionIndex ? "actions-open" : "actions-close"}`}>
            //     <ul className="list">
            //       <li onClick={()=>handleEdit(item.id)}>Edit</li>
            //       <li onClick={()=>handleDelete(item.name)}>Delete</li>
            //     </ul>
            //   </div>
            // </div>
          ))}
      </div>
    </div>
  );
};

export default UnderFolder;

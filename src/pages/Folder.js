import React, { useState } from "react";
import Header from "../components/header/Header";
import { BsFolderFill, BsThreeDotsVertical } from "react-icons/bs";
import "./folder.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeleteFolder } from "../redux/actions/folderAction";
import UnderFolder from "./UnderFolder";
const Folder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [actions, setactions] = useState(false);
  const [actionIndex, setactionIndex] = useState(null);
  const { foldersData } = useSelector((state) => state?.folder);
  const handleFolderClick = (name) => {
    navigate(`folder/${name}`);
  };
  const handleActions =(index)=>{
    setactionIndex(index)
    setactions(!actions)
  }
  const handleDelete=(itemName)=>{
    dispatch(DeleteFolder(itemName))
    setactionIndex(null)
  }
  const handleEdit=(id)=>{
    navigate(`editfolder/${id}`)
  }
  return (
    <div className="mainpage">
      <Header />
      <UnderFolder/>
    </div>
  );
};

export default Folder;

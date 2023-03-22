import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./header.scss";
const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="header">
      <div className="leftheader">
        <input type="checkbox" />
        <p>Select All</p>
      </div>
      <div className="rightheader">
        <div className="search">
          <input type="search" placeholder="Search" />
        </div>
        <div className="newfolderbutton">
        <div className="inner" onClick={()=>navigate('/addfolder')}>
          <div>
            <AiOutlinePlusCircle color="white" size={14} />
          </div>
          <div>New Folder</div>
        </div>
      </div>
        <div className="button">Upload File</div>
        <div className="button">
          <RiArchiveDrawerFill size={12} color="white" />
        </div>
        <div className="button">
          <BsThreeDotsVertical size={12} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  AiOutlinePlusCircle,
  AiFillCaretRight,
  AiFillCaretDown,
} from "react-icons/ai";
import { folderdata } from "../../data/navdata.js";
import "./sidebar.scss";
const Sidebar = () => {
  const [dropMenu, setdropMenu] = useState(false);
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <p className="sidehead">Library</p> <AiOutlinePlusCircle size={20} />
      </div>
      <div className="main">
        {folderdata.map((folder,index) => (
          <div key={index}>
            <div className="dropdown-btn">
              <div className="left-content">
                <span>
                  {folder.children || folder.subFolder ? (
                    dropMenu ? (
                      <AiFillCaretDown
                        onClick={() => setdropMenu(!dropMenu)}
                        size={12}
                      />
                    ) : (
                      <AiFillCaretRight
                        onClick={() => setdropMenu(!dropMenu)}
                        size={12}
                      />
                    )
                  ) : (
                    ""
                  )}
                </span>
              </div>
              <span>{folder.name}</span>
              <BsThreeDotsVertical size={16} />
            </div>
            {dropMenu &&
              folder?.children?.map((children) => (
                <div className="dropdown-btn">
                  <div className="left-content">
                    <span>{children.name}</span>
                  </div>
                  <BsThreeDotsVertical size={16} />
                </div>
              ))}
            {dropMenu &&
              folder?.subFolder?.map((subFolderChildren) => (
                <>
                  <div className="dropdown-btn">
                    <div className="left-content">
                      <span>
                        {folder?.children || folder.subFolder ? (
                          dropMenu ? (
                            <AiFillCaretDown
                              onClick={() => setdropMenu(!dropMenu)}
                              size={12}
                            />
                          ) : (
                            <AiFillCaretRight
                              onClick={() => setdropMenu(!dropMenu)}
                              size={12}
                            />
                          )
                        ) : (
                          ""
                        )}
                      </span>
                      <span>{subFolderChildren.name}</span>
                    </div>
                    <BsThreeDotsVertical size={16} />
                  </div>
                  {subFolderChildren?.children.map((item) => (
                    <div className="dropdown-btn">
                      <div className="left-content">
                        <span>{item.name}</span>
                      </div>
                      <BsThreeDotsVertical size={16} />
                    </div>
                  ))}
                </>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

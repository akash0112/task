import React from "react";
import { BsFolderFill, BsThreeDotsVertical } from "react-icons/bs";

const Card = ({
  item,
  index,
  handleActions,
  handleFolderClick,
  handleEdit,
  handleDelete,
  actionIndex,
  actions,
}) => {
  return (
    <div key={index} className="folder-card">
      <div className="card-inner-content">
        <div
          className="card-content"
          onClick={() => handleFolderClick(item.name)}
        >
          <BsFolderFill size={40} />
          <p>{item.name}</p>
        </div>
        <BsThreeDotsVertical
          style={{ cursor: "pointer" }}
          onClick={() => handleActions(index)}
          size={18}
        />
      </div>
      <div
        className={`${
          actions && index === actionIndex ? "actions-open" : "actions-close"
        }`}
      >
        <ul className="list">
          <li onClick={() => handleEdit(item.id)}>Edit</li>
          <li onClick={() => handleDelete(item.name)}>Delete</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;

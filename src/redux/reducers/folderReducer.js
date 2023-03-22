const initialState = {
  foldersData: [],
};

const folderReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case "ADD_NEW_FOLDER":
      return {
        ...state,
        foldersData: [...state.foldersData, payload],
      };
    case "DELETE_FOLDER":
      return {
        ...state,
        foldersData: state.foldersData.filter((item) => item.name !== payload),
      };
    case "EDIT_FOLDER":
      return {
        ...state,
        foldersData: state.foldersData.map((content) =>
          content.id === action.payload.id
            ? {
                ...content,
                name: action.payload.name,
              }
            : content
        ),
      };

    default:
      return state;
  }
};

export default folderReducer;

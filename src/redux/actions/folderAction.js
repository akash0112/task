export const AddNewFolder =(data)=>dispatch=>(
    dispatch({
        type:"ADD_NEW_FOLDER",
        payload:data
    })
)

export const DeleteFolder =(name)=>dispatch=>(
    dispatch({
        type:"DELETE_FOLDER",
        payload:name
    })
)

export const EditFolder =(folderData)=>dispatch=>(
    dispatch({
        type:"EDIT_FOLDER",
        payload:folderData
    })
)
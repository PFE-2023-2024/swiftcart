import React ,{useState}from 'react'
import { MdReportGmailerrorred } from "react-icons/md"; 
import SunEditor from 'suneditor-react';
import Backdrop from '@mui/material/Backdrop';
import { CgClose } from "react-icons/cg";
import './style/EditProductDetails.css';
function Editdescription({onClose,editorState}) {
    const [editor, setEditorState] = useState(editorState);
    const [error, setError] = useState('');
    const handleEditorChange = (content) => {
        setEditorState(content);
      };
  return (
    <Backdrop open={true}sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <div className='EditProductDetails'> 
    <div className='header'>
          <h1>Edit your Product details</h1>
          <button onClick={onClose}><CgClose /></button>
        </div>
        {error.trim() && <div className="erreur">
            <p> <MdReportGmailerrorred size={25}/>{error}</p>
          </div> }    
        <div className="SunEditor" style={{width:'100%',display:'flex',padding:'1rem'}}>
    <SunEditor 
        setOptions={{
        buttonList: [
            ['undo', 'redo'],
            ['font', 'fontSize', 'formatBlock'],
            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
            ['fontColor', 'hiliteColor', 'textStyle'],
            ['removeFormat'],
            ['align', 'horizontalRule', 'list', 'table','link'],
            ['fullScreen', 'showBlocks', 'codeView'],
            ['preview', 'print'],
        ]
        }}
        onChange={handleEditorChange}
        setContents={editor}/>

    </div>
    <div className="button"><button >Save Changes</button></div>
    </div>
    </Backdrop>
  )
}

export default Editdescription
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';


const MyEditor = () => {

  const [editorState, setEditorState] = useState({
    editorState: EditorState.createEmpty()
  })
  return (
    <div>
      <Editor editorState={editorState} onChange={(e) => setEditorState(e.target.value)} />
    </div>
  )
}

export default MyEditor;
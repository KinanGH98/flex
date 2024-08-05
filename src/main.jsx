import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CodePen from "./components/CodePen.jsx";
import {CodeEditorProvider} from "./CodeEditorContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
        <CodeEditorProvider>
            <CodePen/>
        </CodeEditorProvider>
)

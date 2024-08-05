import React from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/css/css.js'
import 'codemirror/mode/javascript/javascript.js'
import {Controlled as CodeMirrorEditor} from "react-codemirror2";
import './autorefresh.ext.js'

const Editor = ({title, language, value, onChange, headerBgColor}) =>
{
    function handleChange(editor, data, value)
    {
        onChange(value);
    }

    return (
        <div className='editor' style={{['--editorBorderColor']: headerBgColor}}>
            <div style={{borderBottomColor: headerBgColor}}
                 className="editor-header">
                <h4>{title}</h4>
            </div>
            <CodeMirrorEditor

                className='code-mirror-wrapper'
                value={value}
                onBeforeChange={handleChange}
                options={{
                    lineWrapping: true,
                    autoRefresh: {force: true},
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true
                }}
            ></CodeMirrorEditor>
        </div>
    );
};

export default Editor;
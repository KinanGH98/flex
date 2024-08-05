import React, {useState} from 'react';
import Editor from "./Editor.jsx";
import SplitPane, {Pane} from "split-pane-react";
import 'split-pane-react/esm/themes/default.css';
import {useCodeEditorContext} from "../CodeEditorContext.jsx";

export default function DesktopCodePanels({setIsResizing})
{
    const {html, setHtml, css, setCss, js, setJs} = useCodeEditorContext();
    const [horizontalPanesSizes, setHorizontalPanesSizes] = useState(['auto', 'auto', 'auto']);

    return (
        <SplitPane
            resizerSize={10}
            split='vertical'
            sizes={horizontalPanesSizes}
            onChange={setHorizontalPanesSizes} 
            onDragStart={() => setIsResizing(true)}
            onDragEnd={() => setIsResizing(false)}
        >

            <Pane minSize={50}>
                <Editor title={'HTML'}
                        value={html}
                        onChange={setHtml}
                        language={'xml'}
                        headerBgColor={'#DD4B25'}></Editor>
            </Pane>

            <Pane minSize={50}>
                <Editor title={'CSS'}
                        value={css}
                        onChange={setCss}
                        language={'css'}
                        headerBgColor={'#254BDD'}></Editor>
            </Pane>

            <Pane minSize={50}>
                <Editor title={'JS'}
                        value={js}
                        onChange={setJs}
                        language={'JavaScript'}
                        headerBgColor={'#E9D44D'}></Editor>
            </Pane>
        </SplitPane>
    );
}
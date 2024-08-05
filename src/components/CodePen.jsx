import React, {useEffect, useState} from 'react';
import SplitPane, {Pane} from 'split-pane-react';
import {useMediaQuery} from 'react-responsive';
import MobileCodePanels from './MobileCodePanels';
import DesktopCodePanels from './DesktopCodePanels';
import 'split-pane-react/esm/themes/default.css';
import {useCodeEditorContext} from '../CodeEditorContext';

export default function CodePen()
{
    const {html, css, js} = useCodeEditorContext();
    const [output, setOutput] = useState('');
    const [verticalPanesSizes, setVerticalPanesSizes] = useState(['auto', 'auto']);
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    const [isResizing, setIsResizing] = useState(false);

    // Update the output on screen every 250ms.
    useEffect(() =>
    {
        const timeout = setTimeout(() =>
        {
            setOutput(`
                <html lang="en">
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
                </html>
            `);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <div className="main-container">
            <SplitPane
                style={{height: '100%'}}
                resizerSize={10}
                split="horizontal"
                sizes={verticalPanesSizes}
                onChange={setVerticalPanesSizes}
                onDragStart={() => setIsResizing(true)}
                onDragEnd={() => setIsResizing(false)}
            >
                <div className="code-panels">
                    {isMobile ? <MobileCodePanels/> : <DesktopCodePanels setIsResizing={setIsResizing}/>}
                </div>
                <Pane minSize={50}>
                    <div className="outputPanel">
                        {isResizing && <div className="drag-overlay"/>}
                        <iframe
                            srcDoc={output}
                            style={{border: 0}}
                            title="output"
                            width="100%"
                            height="100%"
                            sandbox="allow-scripts"
                        />
                    </div>
                </Pane>
            </SplitPane>
        </div>
    );
}

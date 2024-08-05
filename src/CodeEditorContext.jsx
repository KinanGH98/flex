import React, {createContext, useContext} from 'react';
import useLocalStorage from "./hooks/useLocalStorage.js";

const CodeEditorContext = createContext();

export const useCodeEditorContext = () => useContext(CodeEditorContext);

export const CodeEditorProvider = ({children}) =>
{
    const [html, setHtml] = useLocalStorage('html', '<h1>Hello World</h1>');
    const [css, setCss] = useLocalStorage('css', `body{ color: purple; }`);
    const [js, setJs] = useLocalStorage('js', '');

    return (
        <CodeEditorContext.Provider value={{html, setHtml, css, setCss, js, setJs}}>
            {children}
        </CodeEditorContext.Provider>
    );
};

import React, {useState} from 'react';
import Editor from "./Editor.jsx";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
// import 'react-tabs/style/react-tabs.css';
import '../mobile.css'
import '../index.css'
import {useCodeEditorContext} from "../CodeEditorContext.jsx";

export default function MobileCodePanels()
{
    const { html, setHtml, css, setCss, js, setJs } = useCodeEditorContext();

    return (
        <Tabs>
            <TabList>
                <Tab>HTML</Tab>
                <Tab>CSS</Tab>
                <Tab>JS</Tab>
            </TabList>

            <TabPanel>
                <Editor title={'HTML'}
                        value={html}
                        onChange={setHtml}
                        language={'xml'}
                        headerBgColor={'#DD4B25'}></Editor>
            </TabPanel>

            <TabPanel>
                <Editor title={'CSS'}
                        value={css}
                        onChange={setCss}
                        language={'css'}
                        headerBgColor={'#254BDD'}></Editor>
            </TabPanel>

            <TabPanel>
                <Editor title={'JS'}
                        value={js}
                        onChange={setJs}
                        language={'JavaScript'}
                        headerBgColor={'#E9D44D'}></Editor>
            </TabPanel>
        </Tabs>
    );
}
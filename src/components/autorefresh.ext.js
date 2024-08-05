﻿// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

import codemirror from "codemirror";

(function (mod) {
    mod(codemirror);
}((CodeMirror) => {


    CodeMirror.defineOption('autoRefresh', false, (cm, val) => {
        if (cm.state.autoRefresh) {
            stopListening(cm, cm.state.autoRefresh);
            cm.state.autoRefresh = null;
        }
        if (val && (val.force || cm.display.wrapper.offsetHeight == 0)) { startListening(cm, cm.state.autoRefresh = { delay: val.delay || 250 }); }
    });

    function startListening(cm, state) {
        function check() {
            if (cm.display.wrapper.offsetHeight) {
                stopListening(cm, state);
                if (cm.display.lastWrapHeight != cm.display.wrapper.clientHeight) { cm.refresh(); }
            } else {
                state.timeout = setTimeout(check, state.delay);
            }
        }
        state.timeout = setTimeout(check, state.delay);
        state.hurry = function () {
            clearTimeout(state.timeout);
            state.timeout = setTimeout(check, 50);
        };
        CodeMirror.on(window, 'mouseup', state.hurry);
        CodeMirror.on(window, 'keyup', state.hurry);
    }

    function stopListening(_cm, state) {
        clearTimeout(state.timeout);
        CodeMirror.off(window, 'mouseup', state.hurry);
        CodeMirror.off(window, 'keyup', state.hurry);
    }
}));

const { contextBridge, ipcRenderer } = require('electron');

/*
contextBridge.exposeInMainWorld('electronAPI', {
    sendMessage: (message) => ipcRenderer.send('send-message', message),
    onMessage: (callback) => ipcRenderer.on('reply-message', (_, data) => callback(data))
});
*/


contextBridge.exposeInMainWorld('COLORDLE_API', {

});


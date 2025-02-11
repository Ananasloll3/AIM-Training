const { contextBridge, ipcRenderer } = require('electron');

/*
contextBridge.exposeInMainWorld('electronAPI', {
    sendMessage: (message) => ipcRenderer.send('send-message', message),
    onMessage: (callback) => ipcRenderer.on('reply-message', (_, data) => callback(data))
});
*/


contextBridge.exposeInMainWorld('AIM_TRAINING_API', {

    // ipcRenderer send : 
    loadPageMenu: (whoWant) => ipcRenderer.send('loadPageMenu', whoWant),
    loadPageAim: (whoWant) => ipcRenderer.send('loadPageAim', whoWant),

    getConnectedSend: () => ipcRenderer.send('getConnected'),



    // ipcRenderer Reply : 
    getConnectedReply: () => ipcRenderer.on('getConnected', (event, data) => callback(data))


});

 
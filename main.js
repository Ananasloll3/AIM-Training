const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const LogAim = require('./Log')

let mainWindow;
const Log = new LogAim()


app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    mainWindow.loadFile('./src/AIM-Training/index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    
    
});


ipcMain.on('loadPageMenu', (event, whoWant) => {

    Log.info(`Load page MENU from ${whoWant}`)
    
    mainWindow.loadFile('./src/Menu/index.html');

});


ipcMain.on('loadPageAim', (event, whoWant) => {

    Log.info(`Load page AIM from ${whoWant}`)
    
    mainWindow.loadFile('./src/AIM-Training/index.html');

});

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const Log = require('./Log')

let mainWindow;

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

    Log.info("Create Browser succesful")
    Log.info("Loading page Aim...")

    mainWindow.loadFile('./src/AIM-Training/index.html');
    Log.info("Loading page Aim succesful !")
    
    
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    
    
});



// ---------------- Function ipcMain ---------------- //


ipcMain.on('loadPageMenu', (event, whoWant) => {

    Log.info(`Load page MENU from page ${whoWant}`)
    
    mainWindow.loadFile('./src/Menu/index.html');

});


ipcMain.on('loadPageAim', (event, whoWant) => {

    Log.info(`Load page AIM from page ${whoWant}`)
    
    mainWindow.loadFile('./src/AIM-Training/index.html');

});

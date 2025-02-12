const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const Log = require('./Log')

let mainWindow;
let connected = false;

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

    Log.succes("Create Browser succesful")
    Log.info("Loading page Aim...")

    mainWindow.loadFile('./src/Menu/Login/index.html');
    Log.succes("Loading page Aim succesful !")
    
    
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    
    
});



// ---------------- Function ipcMain ---------------- //


ipcMain.on('loadPageMenu', (event, whoWant) => {

    Log.info(`Load page MENU from page ${whoWant}...`)
    mainWindow.loadFile('./src/Menu/Login/index.html');
    Log.succes(`Page Menu Load !`);
});


ipcMain.on('loadPageAim', (event, whoWant) => {

    Log.info(`Load page AIM from page ${whoWant}...`)
    mainWindow.loadFile('./src/AIM-Training/index.html');
    Log.succes(`Page AIm Load !`);
});


ipcMain.on('loadPageSignup', (event, whoWant) => {

    Log.info(`Load page Signup from page ${whoWant}...`)
    mainWindow.loadFile('./src/Menu/Signup/index.html');
    Log.succes(`Page Signup Load !`);
});


ipcMain.on('loadPageLogin', (event, whoWant) => {

    Log.info(`Load page Login from page ${whoWant}...`)
    mainWindow.loadFile('./src/Menu/Login/index.html');
    Log.succes(`Page Login Load !`);
});



ipcMain.on('getConnected', (event) => {

    Log.info(`Get connected : ${connected}`)
    
    event.reply('returnConnected', connected)
});
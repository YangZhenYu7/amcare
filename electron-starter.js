/**
 * Created by yangzhenyu on 2017/7/23.
 */
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const {shell} = require('electron')
const spawn = require('child_process').spawn;
const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 1400, height: 700})

    // and load the index.html of the app.
    // mainWindow.loadURL(url.format({
    //     pathname: path.join(__dirname, 'index.html'),
    //     protocol: 'file:',
    //     slashes: true
    // }))

    startDBServer();

    mainWindow.loadURL('http://localhost:3000');

    // Open the DevTools.
      mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

function startDBServer() {
    free = spawn('mongod', ['--dbpath', './src/database/mongodb', '--port', '12221']);
// 捕获标准输出并将其打印到控制台
    free.stdout.on('data', function (data) {
        console.log('standard output:\n' + data);
    });
// 捕获标准错误输出并将其打印到控制台
    free.stderr.on('data', function (data) {
        console.log('standard error output:\n' + data);
    });
// 注册子进程关闭事件
    free.on('exit', function (code, signal) {
        console.log('child process eixt ,exit:' + code);
    });
}


app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})
import path from 'path';
import url from 'url';
import { app, ipcMain, Menu } from 'electron';
import log from 'electron-log';
import { autoUpdater } from 'electron-updater';
import { devMenuTemplate } from './menu/dev_menu_template';
import { editMenuTemplate } from './menu/edit_menu_template';
import createWindow from './helpers/window';
import pJson from '../package.json';
import tray from './tray';

import env from 'env';

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('electron-messages starting...');

app.setAppUserModelId(pJson.build.appId);

const setApplicationMenu = () => {
  const menus = [editMenuTemplate];
  if (env.name !== 'production') {
    menus.push(devMenuTemplate);
  }
  Menu.setApplicationMenu(Menu.buildFromTemplate(menus));
};

if (env.name !== 'production') {
  const userDataPath = app.getPath('userData');
  app.setPath('userData', `${userDataPath} (${env.name})`);
}

let mainWindow;
app.on('ready', () => {
  setApplicationMenu();

  mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    title: 'Electron Messages',
    titleBarStyle: 'hidden-inset',
    icon: process.platform === 'linux' && path.join(__dirname, 'assets/icons/64x64.png')
  });

  mainWindow.loadURL('https://messages.android.com/');

  if (env.name === 'development') {
    mainWindow.openDevTools();
  }
  tray.build(mainWindow);

  autoUpdater.checkForUpdates();
});

autoUpdater.on('checking-for-update', () => {
  log.info('checking for update...');
});

autoUpdater.on('update-downloaded', (info) => {
  log.info('update ready');
  autoUpdater.quitAndInstall();
});

app.on('window-all-closed', () => {
  app.quit();
});

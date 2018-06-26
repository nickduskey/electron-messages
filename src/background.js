import path from 'path';
import url from 'url';
import { app, Menu } from 'electron';
import { devMenuTemplate } from './menu/dev_menu_template';
import { editMenuTemplate } from './menu/edit_menu_template';
import createWindow from './helpers/window';

import env from 'env';

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

app.on('ready', () => {
  setApplicationMenu();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    title: 'Electron Messages',
    icon: process.platform === 'linux' && path.join(__dirname, 'assets/icons/64x64.png')
  });

  mainWindow.loadURL('https://messages.android.com/');

  if (env.name === 'development') {
    mainWindow.openDevTools();
  }
});

app.on('window-all-closed', () => {
  app.quit();
});

import { app, Menu, Tray } from 'electron';
import path from 'path';

let tray = null;

exports.build = (window) => {
  if (process.platform === 'darwin' || tray ) {
    return;
  }

  const toggleWindowVisible = () => {
    if (window.isVisible()) {
      window.hide();
    } else {
      window.show();
    }
  };

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Toggle',
      click() {
        toggleWindowVisible();
      }
    },
    {
      type: 'separator'
    },
    {
      role: 'quit'
    }
  ]);

  tray = new Tray(path.join(__dirname, '../src/assets/icons/trayicon.png'));
  tray.setToolTip(`${app.getName()}`);
  tray.setContextMenu(contextMenu);
  tray.on('click', toggleWindowVisible);
}

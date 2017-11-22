var tray = new nw.Tray({
    icon : 'favicon.png',
    title: 'My App Tray'
});
  
var menu = new nw.Menu();
    menu.append(new nw.MenuItem({
        label: 'Exit NodeRIP',
        click: function() { window.close() }
}));
  
tray.menu = menu;
function popUp(URL) {
  day = new Date();
  id = day.getTime();
  eval("page"+id+" = window.open(URL, '"+id+"', 'toolbar=0, scrollbars=1, location=0, statusbar=0, menubar=0, resizable=1, width=690, height=920');");
}
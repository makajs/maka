const createHashHistory = require('history').createHashHistory;

let hashHistory;
const listerners = [];

function setHistoryInstance() {
  if (!hashHistory) { hashHistory = createHashHistory(); }
}

function listen(handler) {
  setHistoryInstance();
  let h = listerners.find(o => o.listen === handler);
  if (!h) {
    h = handler;
    const unlisten = hashHistory.listen(handler);

    listerners.push({ listen: h, unlisten });
  }
}

function unlisten(handler) {
  const index = listerners.findIndex(o => o.listen === handler);

  if (index === -1) { return; }

  listerners[index].unlisten();
  listerners.splice(index, 1);
}


function goBack() {
  hashHistory && hashHistory.back && hashHistory.back();
  // history 升级后接口变化 goBack 变成了 back
  // hashHistory && hashHistory.goBack && hashHistory.goBack()
}

function redirect(app) {
  if (!hashHistory) return;
  if (location.hash === `#${app}`) return;
  hashHistory && hashHistory.push(app);
}

function getLocation() {
  return hashHistory && hashHistory.location;
}

export default {
  listen,
  unlisten,
  goBack,
  redirect,
  getLocation,
};

export {
  listen,
  unlisten,
  goBack,
  redirect,
  getLocation,
};

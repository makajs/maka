"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadApp = loadApp;
exports.clearAppState = clearAppState;
exports.loadPlugin = loadPlugin;

function loadApp(fullName, prevFullName) {
  return {
    type: '@@loadApp',
    payload: {
      fullName: fullName,
      prevFullName: prevFullName
    }
  };
}

function clearAppState(fullName) {
  return {
    type: '@@clearAppState',
    payload: {
      fullName: fullName
    }
  };
}

function loadPlugin(fullName, prevFullName) {
  return {
    type: '@@loadPlugin',
    payload: {
      fullName: fullName,
      prevFullName: prevFullName
    }
  };
}
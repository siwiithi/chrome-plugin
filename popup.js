'use strict';

function check() {
  chrome.storage.sync.set({'checked': true}, function() {
    message('Settings saved');
    browser.browserAction.enable();
  });
  chrome.browserAction.setBadgeText({text: 'ON'});
}

function unCheck() {
  chrome.storage.sync.set({'checked': false}, function() {
    browser.browserAction.disable();
  });
  chrome.browserAction.setBadgeText({text: 'OFF'});
}

document.getElementById('myChkBtn').addEventListener('click', check)
document.getElementById('myUnchkBtn').addEventListener('click', unCheck)

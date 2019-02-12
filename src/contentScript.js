// // chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   // alert('updated from contentscript');
// // });
// console.log("get currentpage", window.location.href);

var vid = $('video').get(0);
vid.addEventListener('ended', function (e) {
  vid.play();
  alert('end');
});
console.log(vid);

// check this https://www.youtube.com/watch?v=lTTajzrSkCw
// try again
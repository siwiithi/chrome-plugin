var vid = $('video').get(0);
  vid.addEventListener('ended', function (e) {
    chrome.storage.sync.get("checked", function (value) {
      if(value.checked) {
        vid.play();
        alert('Replay Youtube');
      }
    });
  });

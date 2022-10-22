myid = ""

chrome.tabs.onUpdated.addListener(function
  (_, changeInfo, _) {
    if (changeInfo.url.startsWith("https://youtube.com/watch?v=")) {
      var video_id = window.location.search.split('v=')[1];
      var ampersandPosition = video_id.indexOf('&');
      if(ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
      }
      fetch("https://twipper.misilelaboratory.xyz/post/${video_id}", {
        Method: 'POST',
        headers: "Content-Type": "application/json",
        body: {
          "myid": myid
        }
      })
    }
  }
);


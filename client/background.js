chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "getSummary") {
    chrome.storage.local.get('summary', function(data) {
      sendResponse({summary: data.summary});
    });
    return true; // Required to return a response asynchronously.
  }
});

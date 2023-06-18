chrome.runtime.sendMessage({method: "getSummary"}, function(response) {
  console.log("- ".concat(response.summary));
  document.getElementById('summary').innerText = "- ".concat(response.summary);
});

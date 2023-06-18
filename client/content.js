window.onload = function() {
  fetch('http://localhost:3000/summarize', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url: window.location.href })
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    const summary = data.summary
    // Store the summary
    chrome.storage.local.set({summary: summary});
  })
  .catch(error => console.error('Error:', error));
};
document.addEventListener('DOMContentLoaded', function() {
  var toggle_btn = document.getElementById('toggle');
  chrome.storage.sync.get('active',function(result) {
    toggle_btn.checked = result.active;
  });
  toggle_btn.addEventListener('click', function() {
    chrome.storage.sync.set({'active': toggle_btn.checked});
    chrome.storage.sync.get('active',function(result) {
      console.log(result);
    });
  });
});

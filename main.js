function updateWebviews() {
  var webview = document.querySelector("webview");
  webview.style.height = document.documentElement.clientHeight + "px";
  webview.style.width = document.documentElement.clientWidth + "px";
};

onload = updateWebviews;
window.onresize = updateWebviews;

// open with chrome browser tab(not chrome app)
var webview = document.querySelector("webview");
webview.addEventListener('newwindow', function (e) {
  e.preventDefault(); 
  chrome.browser.openTab({url: e.targetUrl});
});

// Images
document.getElementById("icon").src = browser.runtime.getURL("images/todologo.png");

// Height
document.getElementById("icon").height = document.getElementById("title").clientHeight;

// Resize iframes
setTimeout(function(){
    var iframept = document.getElementById("iframept");
    iframept.style.height = iframept.contentWindow.document.body.scrollHeight * 1.2 + 'px';
    var iframeen = document.getElementById("iframeen");
    iframeen.style.height = iframept.contentWindow.document.body.scrollHeight * 1.2 + 'px';
}, 500);
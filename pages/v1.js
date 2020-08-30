// Images
document.getElementById("icon").src = browser.runtime.getURL("images/todologo.png");
document.getElementById("print1").src = browser.runtime.getURL("images/usage.png");

// Height
document.getElementById("icon").height = document.getElementById("title").clientHeight;
console.log(document.getElementById("title").clientHeight);

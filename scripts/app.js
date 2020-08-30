function startApp() {
    // Get openned tabs and process them to open new one
    url = "https://to-do.live.com/tasks/myday";
    let querying = browser.tabs.query({pinned: true, windowId: browser.windows.WINDOW_ID_CURRENT});
    querying.then(openTab, onError);
}
  
function openTab(tabs) {
    // Check if tab is already created
    appTab = undefined;
    for (let tab of tabs) {
        if (tab.url.indexOf(url)>=0) {
            appTab = tab;
        }
    }

    if (appTab==undefined) {
        // Open it if not
        browser.tabs.create({
            url: url,
            index: 0,
            pinned: true,
            active: false
        }).then(changeTab);
    } else {
        // Otherwise, change to openned tab
        changeTab(appTab);
    }
}

function changeTab(tab) {
    // Changes current tab to the open given as argument
    browser.tabs.update(tab.id, {
        active: true
    }).then(onUpdated, onError);
}

// Debugging functions
function onUpdated(tab) {
    console.log(`Updated tab: ${tab.id}`);
}

function onError(error) {
    console.log(`Error: ${error}`);
}

// Add listener
browser.browserAction.onClicked.addListener(startApp);
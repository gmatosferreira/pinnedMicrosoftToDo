function openPage() {

    browser.tabs.create({
        url: "https://to-do.microsoft.com/",
        index: 0,
        pinned: true,
        active: false
    });
}

browser.browserAction.onClicked.addListener(openPage);
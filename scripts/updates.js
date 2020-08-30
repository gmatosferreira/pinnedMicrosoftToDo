// Updates management

currentVersion = 1

function updateVersion() {
    browser.storage.local.remove("version");
    let version = {
        n: currentVersion
    }
    browser.storage.local.set({version});
}

function validateVersion(version) {

    if (version.version!=undefined)
        version = version.version;

    // If updated
    if (version.n != currentVersion) {
        // Show updates page
        url = browser.runtime.getURL("pages/v"+currentVersion+".html")
        browser.tabs.create({
            url: url,
            active: true
        });
        // Update version
        //updateVersion();
    }
}

function onError(error) {}

browser.storage.local.get("version").then(validateVersion, onError);
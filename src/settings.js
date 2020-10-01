const URLs = {
    "Home": "/",
    "AV-CMS": "/av-cms",
    "NoMatch": "*"
}

function URLSettings() {
    const getURL = (key) => { return URLs[key] }

    return {
        getURL
    }
}
export default URLSettings();



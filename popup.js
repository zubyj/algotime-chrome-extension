chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'viewLineText') {
        document.getElementById('output').textContent = request.data.join('\n');
    }
});

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['content.js']
    });
});

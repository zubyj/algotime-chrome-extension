
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.type === 'viewLineText') {
        const codeText = request.data.join('\n');
        const timeComplexity = await fetchTimeComplexity(codeText);
        document.getElementById('time-complexity').textContent = `${timeComplexity}`;
    }
});

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['content.js']
    });
});

function fetchTimeComplexity(prompt) {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ type: 'fetchTimeComplexity', prompt }, (response) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(response);
            }
        });
    });
}

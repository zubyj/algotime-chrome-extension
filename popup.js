document.getElementById('analyze-code').addEventListener('click', async () => {
    const codeText = await getCodeFromActiveTab();
    if (codeText) {
        const result = await fetchTimeComplexity(codeText);
        if (result.success) {
            document.getElementById('time-complexity').textContent = `${result.timeComplexity}`;
        } else {
            document.getElementById('time-complexity').textContent = 'Error: Unable to fetch time complexity';
        }
    } else {
        document.getElementById('time-complexity').textContent = 'Error: Unable to retrieve code';
    }
});

async function getCodeFromActiveTab() {
    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        return await new Promise((resolve) => {
            chrome.tabs.sendMessage(tab.id, { type: 'getCode' }, (response) => {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError);
                    resolve(null);
                } else {
                    resolve(response.data.join('\n'));
                }
            });
        });
    } catch (error) {
        console.error(error);
        return null;
    }
}

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

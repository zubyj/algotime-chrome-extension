const API_KEY = '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';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'fetchTimeComplexity') {
        fetchTimeComplexity(request.prompt, sendResponse);
        return true; // This will keep the message channel open until sendResponse is called.
    }
});

async function fetchTimeComplexity(prompt, sendResponse) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "system",
                    "content": "You are a helpful assistant that can analyze code and determine its time complexity."
                },
                {
                    "role": "user",
                    "content": `Return the time complexity in one word. Use Big O notation:\n${prompt}`
                }
            ],
            temperature: 0.5,
            max_tokens: 50
        })
    });

    const data = await response.json();
    console.log(data);
    sendResponse(data.choices[0].message.content.trim());
}

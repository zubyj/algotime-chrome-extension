# AlgoTime Chrome Extension

## Important Note

This project is no longer maintained and updated. The project has been absorbed into the chrome extension 'Leetcode Explained.'

## Overview

AlgoTime is a Chrome extension that analyzes your LeetCode solutions and determines their time and space complexity using OpenAI's GPT-3.5-turbo.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Files and Structure](#files-and-structure)
4. [Permissions](#permissions)

## Installation

1. Download the AlgoTime Chrome extension source code.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" in the top-right corner.
4. Click "Load unpacked" and select the downloaded source code folder.

## Usage

1. Navigate to a LeetCode problem page (e.g., `https://leetcode.com/problems/...`).
2. Click the AlgoTime icon in the Chrome toolbar to open the extension popup.
3. Replace the API_KEY in the background.js file with your OpenAI API key.
4. Click the "Analyze Code" button.
5. The time complexity of your solution will be displayed in the popup.

## Files and Structure

- `manifest.json`: Contains the metadata and configuration for the extension.
- `popup.html`: The HTML file for the extension popup.
- `popup.js`: The JavaScript code responsible for handling user interactions in the popup.
- `background.js`: The background script that communicates with the OpenAI API to fetch the time complexity. Replace the API_KEY with your OpenAI API key.
- `content.js`: The content script that extracts the code from the LeetCode problem page.

## Permissions

- `activeTab`: Access to the current active tab.
- `scripting`: Inject content scripts into web pages.
- `storage`: Store data locally for the extension.
- `host_permissions`: Access to the OpenAI API.

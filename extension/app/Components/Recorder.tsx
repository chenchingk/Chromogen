import React from 'react';

const Recorder: React.FC = () => {
  // Connect to background.js
  const backgroundConnection = chrome.runtime.connect();
  // REFACTOR: generalize to a 'sendmessage' function
  const downloadFile = () => {
    // Send message to background.js
    backgroundConnection.postMessage({
      action: 'downloadFile',
      tabId: chrome.devtools.inspectedWindow.tabId,
    });
  };

  const toggleRecord = () => {
    // Send message to background.js
    backgroundConnection.postMessage({
      action: 'toggleRecord',
      tabId: chrome.devtools.inspectedWindow.tabId,
    });
  };

  return (
    <div className="recorder-div">
      <button id="recorderBtn" type="submit" onClick={toggleRecord}>
        Start Recording!
      </button>
      <button id="recorderBtn" type="submit" onClick={downloadFile}>
        Download!
      </button>
    </div>
  );
};

export default Recorder;

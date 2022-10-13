import React from "react";
import { useEffect } from "react";

import "./downloadButton.css";

const DownloadButton = () => {

  useEffect(() => {
    initialize();
  }, [])

  const initialize = () => {
    var element = document.getElementById("schedule_para");
    var text = element.innerHTML;

    element.innerHTML = '';
    for (var i = 0; i < text.length; i++) {
      var letter = text[i];
      var span = document.createElement('span');
      var node = document.createTextNode(letter);
      var r = (360/text.length)*(i);
      var x = (Math.PI/text.length).toFixed(0) * (i);
      var y = (Math.PI/text.length).toFixed(0) * (i);
      span.appendChild(node);
      span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
      span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
      element.appendChild(span);
    }
  }

  return (
    <div className="download_button">
        <div className="download_para_wrapper">
        <div className="schedule_para" id="schedule_para">Schedule*Schedule*Schedule*</div>
        </div>
        <img src="/images/bgMedia/download.png" alt="" />
        <a href="/images/myw3schoolsimage.jpg" download />
    </div>
  );
};

export default DownloadButton;

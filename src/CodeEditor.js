import React, { useEffect } from 'react';

function CodeEditor() {
  useEffect(() => {
    const initialize = () => {
      const html = document.getElementById("html");
      const css = document.getElementById("css");
      const js = document.getElementById("js");
      const code = document.getElementById("code").contentWindow.document;
      
      document.body.onkeyup = () => {
        code.open();
        code.writeln(
          html.value +
          "<style>" + css.value + "</style>" +
          "<script>" + js.value + "</script>"
        );
        code.close();
      }
    }
    
    initialize();
  }, []);

  return (
    <div>
      <textarea id="html" placeholder="HTML"></textarea>
      <textarea id="css" placeholder="CSS"></textarea>
      <textarea id="js" placeholder="JavaScript"></textarea>
      <iframe id="code"></iframe>
    </div>
  );
}

export default CodeEditor;
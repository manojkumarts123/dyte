import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')

  const liveWebsite = `
    <html>
      <style>${css}</style>
      <body>${html}</body>
      <script>${js}</script>
      
    </html>
  `
  
  
  return (
    
    <div>
      <div class="title">
        <h1>Web Development</h1>
      </div>

      <div class="container">
        <div class="left">
          <h2>Files</h2>
            <button onClick={setHtml}><h3>HTML File</h3></button>
            <button onClick={setCss}><h3>CSS File</h3></button>
            <button onClick={setJs}><h3>JavaScript File</h3></button>
        </div>

        <div class="center">
          <Editor 
            lang="html"
            name = "HTML"
            hvalue = {html}
            cvalue={css}
            jvalue={js}
            //onchange=''
          />        
        </div>

        <div class="right">
            <iframe 
              srcDoc = {liveWebsite}
              title="website"
              sandbox="allow-scripts" 
            />
        </div>
      </div>
    </div>



    
  );
  
}

export default App;

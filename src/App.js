import './App.css';
import CodeEditor from './CodeEditor';


function App() {
  return (
    <div>
      <div class="mainarea">
        <div class="editors">
            <h2>html</h2>
            <textarea id="html" placeholder="HTML"></textarea>
        </div>
        <div class="editors">
            <h2>css</h2>
            <textarea id="css" placeholder="CSS"></textarea>
        </div>
        <div class="editors">
            <h2>js</h2>
            <textarea id="js" placeholder="JavaScript"></textarea>
        </div>
    </div>
    <div class="output">
        <h2>output</h2>
        <iframe id="code"></iframe>
    </div>
    <script type="text/javaScript" src="app.js"></script>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CodeEditor from './components/CodeEditor'
import Button from './components/Button'
import useDebounce from './Hooks/useDebounce'
import {saveCode,loadCode} from './utils/db.ts'
// import {loadCode} from './utils/db.ts'
function App() {

const [html,setHtml] = useState('')
const [css,setCss] = useState('')
const [js,setJs] = useState('')

const debouceHTML = useDebounce(html, 1000)
const debouceCSS = useDebounce(css, 1000)
const debouceJS = useDebounce(js, 1000)
useEffect(() => {
  loadCode().then((data) => {
     if (data) {
      setHtml(data.html || "");
      setCss(data.css || "");
      setJs(data.js || "");
    }
    console.log("data loaded");
    // console.log(data);
  });
}, []);
const SaveToDb=()=>{
  saveCode(debouceHTML, debouceCSS, debouceJS);
}
  return (
    
    <div className="  w-full h-screen bg-gray-800 overflow-hidden">
    <div className ="w-full ">
      <Button name="Save" onClick={SaveToDb}  />
 {/* <div className="flex gap-2 p-2">

   <Button name="HTML" onClick={() => setActiveTab("html")} />
   <Button name="CSS" onClick={() => setActiveTab("css")} />
   <Button name="JavaScript" onClick={() => setActiveTab("js")} />
    </div> */}
  <div className="w-full flex gap-2 p-2">

  {/* {activeTab === "html" && ( */}
          <CodeEditor language="html" value={html} onChange={setHtml} />
        {/* // )} */}
        {/* {activeTab ==="css"&&( */}
          <CodeEditor language="css" value={css} onChange={setCss} />
        {/* )} */}
        {/* {activeTab ==="js"&&( */}
          <CodeEditor language="javascript" value={js} onChange={setJs} />
        {/* )} */}
  </div>
    </div>
   <div className="w-full h-2/3">
    <iframe
          srcDoc={`<html><style>${debouceCSS}</style><body>${debouceHTML}<script>${debouceJS}</script></body></html>`}
          className="w-full h-full bg-white"
        />
   </div>
      
    </div>
   
  )
}

export default App

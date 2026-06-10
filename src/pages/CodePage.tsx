import Button from '../components/Button'
import { useEffect, useState } from 'react'
import CodeEditor from '../components/CodeEditor'
import useDebounce from '../Hooks/useDebounce'
import {saveCode,loadCode} from '../utils/db.ts'

function CodePage({SignOut}:any) {
    const [html,setHtml] = useState('')
    const [css,setCss] = useState('')
    const [js,setJs] = useState('')
    
    const debouceHTML = useDebounce(html, 1000)
    const debouceCSS = useDebounce(css, 1000)
    const debouceJS = useDebounce(js, 1000)

   const SaveToDb=()=>{
     saveCode(debouceHTML, debouceCSS, debouceJS);
    
   }
    useEffect(()=>{
         loadCode().then((data) => {
             if (data) {
              setHtml(data.html || "");
              setCss(data.css || "");
              setJs(data.js || "");
            }
            console.log("data loaded");
            
          });
    },[])
  return (
   <div className="  w-full h-screen bg-gray-800 overflow-hidden">
    <div className="w-full flex justify-end gap-2 p-2">
      <Button name="Save" onClick={SaveToDb}  />
      <Button name="Sign Out" onClick={SignOut} />
    </div>
 
      <div className ="w-full flex justify-end gap-2 p-2">
  <div className="w-full flex gap-2 p-2">

          <CodeEditor language="html" value={html} onChange={setHtml} />
          <CodeEditor language="css" value={css} onChange={setCss} />
          <CodeEditor language="javascript" value={js} onChange={setJs} />
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

export default CodePage
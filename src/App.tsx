import { useEffect, useState } from 'react'

import './App.css'
import CodeEditor from './components/CodeEditor'
import Button from './components/Button'
import useDebounce from './Hooks/useDebounce'
import {saveCode,loadCode} from './utils/db.ts'
import {supabase} from "./utils/supabase.ts"
function App() {

const [html,setHtml] = useState('')
const [css,setCss] = useState('')
const [js,setJs] = useState('')

const debouceHTML = useDebounce(html, 1000)
const debouceCSS = useDebounce(css, 1000)
const debouceJS = useDebounce(js, 1000)
const [user,setuser] = useState(null)

useEffect(() => {
  const getUser = async()=>{
    const {data} = await supabase.auth.getUser();
    if(data){
    setuser(data.user)
    }

  }
  getUser()
  loadCode().then((data) => {
     if (data) {
      setHtml(data.html || "");
      setCss(data.css || "");
      setJs(data.js || "");
    }
    console.log("data loaded");
    
  });
}, []);
const SaveToDb=()=>{
  saveCode(debouceHTML, debouceCSS, debouceJS);
  console.log(user)
}
const SignInWithGoogle=async()=>{
  const {data,error} = await supabase.auth.signInWithOAuth({
  provider: 'google',
  })
 if(data){
  setuser(data.user);
 }

   if (error) {
    console.log(error);
  }
}
  return (
    <>
    {user ? (
      <Button name="Sign Out" onClick={() => supabase.auth.signOut()} />
    ) : (
      <Button name="Sign In With Google" onClick={SignInWithGoogle} />
    )}
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
    </>
   
  )
}

export default App

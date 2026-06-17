import { useEffect, useState } from 'react'

import './App.css'
import {supabase} from "./utils/supabase.ts"
import CodePage from './pages/CodePage.tsx'
import type { User } from '@supabase/supabase-js/dist/index.cjs'
import SignUp from './pages/SignUp.tsx'
import { Routes ,Route} from 'react-router-dom'
import Protected from './routes/Protected.tsx'
import Home from './pages/Home.tsx'
function App() {

 const [user, setuser] = useState<User | null>(null);
useEffect(() => {
  const getUser = async()=>{
    const {data} = await supabase.auth.getUser();
    if(data){
    setuser(data.user)
    }

  }
  getUser()
 
}, []);

const SignInWithGoogle=async()=>{
  const {error} = await supabase.auth.signInWithOAuth({
  provider: 'google',
   
  })
 

   if (error) {
    console.log(error);
  }
}
const SignOut=async()=>{
  const {error} = await supabase.auth.signOut();

  if (!error) {
   setuser(null)
  }
}
  return (
    <>
   
   
 <Routes>
  <Route path="/" element={<Home user={user} SignOut={SignOut} />} />
   <Route path="/signup" element={<SignUp user={user} SignInWithGoogle={SignInWithGoogle} />} />
    <Route path="/code" element={<Protected user={user}><CodePage SignOut={SignOut} /></Protected>} />
 </Routes>
    </>
   
  )
}

export default App

import { useEffect, useState } from 'react'

import './App.css'
import Button from './components/Button'
import {supabase} from "./utils/supabase.ts"
import CodePage from './pages/CodePage.tsx'
import type { User } from '@supabase/supabase-js/dist/index.cjs'
import SignUp from './pages/SignUp.tsx'
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
    {user ? (
       <CodePage SignOut={SignOut} />
     
    ) : (
    <SignUp SignInWithGoogle={SignInWithGoogle} />
    )}
   
 
    </>
   
  )
}

export default App

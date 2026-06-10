import { useEffect, useState } from 'react'

import './App.css'
import Button from './components/Button'
import {supabase} from "./utils/supabase.ts"
import CodePage from './pages/CodePage.tsx'
import type { User } from '@supabase/supabase-js/dist/index.cjs'
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
      <>
      <Button name="Sign Out" onClick={SignOut} />
       <CodePage  />
      </>
    ) : (
      <div className="w-full h-screen flex items-center justify-center">
        <Button name="Sign In With Google" onClick={SignInWithGoogle} />

      </div>
    )}
   
 
    </>
   
  )
}

export default App

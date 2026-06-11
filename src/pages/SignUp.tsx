import Button from '../components/Button'
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
function SignUp({user, SignInWithGoogle }:any) {
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/code");
    }
  }, [user]);
  return (
    
 <div className="w-full h-screen bg-black flex items-center justify-center">
        <Button name="Sign In With Google" onClick={SignInWithGoogle} />

      </div>
    
  )
}

export default SignUp
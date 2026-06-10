import Button from '../components/Button'
function SignUp({ SignInWithGoogle }:any) {
  return (
    
 <div className="w-full h-screen flex items-center justify-center">
        <Button name="Sign In With Google" onClick={SignInWithGoogle} />

      </div>
    
  )
}

export default SignUp
import { Navigate } from 'react-router-dom';

function Protected({user,children}:any) {
 if (!user) {
    return <Navigate to="/" />;
  }
    return (
    <div>{children}</div>
  )
}

export default Protected
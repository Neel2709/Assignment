import React,{useState} from 'react'
import { auth} from '../config/Config';


const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [errorMsg,setErrorMsg] = useState('');
    const [successMsg,setSuccessMsg] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        //console.log(email,password);
        auth.signInWithEmailAndPassword(email,password).then(()=>{
            setSuccessMsg('Sign in Successfully');
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setTimeout(() => {
                setSuccessMsg('');
                window.location = '/';
            }, 3000);
        }).catch((error)=>{
            setErrorMsg(error.message);
        })
    }
 
  return (
    <div>
        <h1 className='text-center mt-5'>Login</h1>
        {successMsg && <>
            <div className="col-12 text-center mb-3" >
                <span>{successMsg}</span>
            </div>
            <br></br>
        </>}
        <form className="w-50 mx-auto mt-5 row g-3 border border-3 rounded-3" onSubmit={handleLogin} autoComplete="off">
            <div className="col-md-12">
                <label for="Email" className="form-label">Email</label>
                <input type="email" className="form-control" id="Email" placeholder='abc@email.com'
                onChange={(e)=> setEmail(e.target.value)} value={email} />
            </div> 
            <div className="col-12">
                <label for="Password" className="form-label">Password</label>
                <input type="password" className="form-control" id="Password" placeholder="" 
                onChange={(e)=> setPassword(e.target.value)} value={password} />
            </div>
            <div className="col-12 text-center mb-1">
                <button type="submit" className="btn btn-secondary">Login</button>
            </div>
            <div className="col-12 text-center mb-3" >
                <span>Don't have an account Signup </span>
                <a href='signup' className='text-decoration-none'>Here</a>
            </div>
        </form>
        {errorMsg && <>
            <div className="col-12 text-center mb-3" >
                <span>{errorMsg}</span>
            </div>
        </>}
    </div>
  )
}

export default Login

import React ,{useState} from 'react'
import { auth, db } from '../config/Config';
const Signup = () => {

  const [fullName,setFullName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const [errorMsg,setErrorMsg] = useState('');
  const [successMsg,setSuccessMsg] = useState('');

  const handleSignup = (e) => {
        e.preventDefault();
        //console.log(fullName,email,password);
         auth.createUserWithEmailAndPassword(email,password).then((Credential)=>{
            db.collection('Users').doc(Credential.user.uid).set({
                FullName : fullName,
                Email : email,
                Password : password
            }).then(()=>{
                setSuccessMsg('Registered Successfully..');
                setFullName('');
                setEmail('');
                setPassword('');
                setErrorMsg('');
                setTimeout(() => {
                    setSuccessMsg('');
                    window.location = '/login';
                }, 3000);
            }).catch((error)=>{
                setErrorMsg(error.message);
            })
        }).catch((error)=>{
            setErrorMsg(error.message);
        })

  }

  return (
    <div>
        <h1 className='text-center mt-5'>Sign up</h1>

        {successMsg && <>
            <div className="col-12 text-center mb-3" >
                <span>{successMsg}</span>
            </div>
            <br></br>
        </>}

        <form className="w-50 mx-auto mt-5 row g-3 border border-3 rounded-3" onSubmit={handleSignup} autoComplete="off">
            <div className="col-md-12">
                <label for="Full Name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="Full Name" 
                 onChange={(e)=> setFullName(e.target.value)} value={fullName} />
            </div>
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
                <button type="submit" className="btn btn-secondary">Register</button>
            </div>
            <div className="col-12 text-center mb-3" >
                <span>Already have an account Login </span>
                <a href='login' className='text-decoration-none'>Here</a>
            </div>
        </form>
        {errorMsg && <>
            <div className="col-12 text-center mb-3" >
                <span>{errorMsg}</span>
            </div>
            <br></br>
        </>}
    </div>
  )
}

export default Signup

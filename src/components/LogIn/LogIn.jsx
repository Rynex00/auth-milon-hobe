import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const LogIn = () => {

  const { singInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(singInUser)

  const handelFrom = e => {
    e.preventDefault()

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    singInUser(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset();
        navigate('/')
      })
      .catch(error => {
        console.log(error)
      })

  }

  return (
    <div className="hero">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold ">LogIn Now!</h1>
          </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handelFrom} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>New here new Please? <Link to='/register' ><button className="btn btn-active btn-link">Register</button></Link>  </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn
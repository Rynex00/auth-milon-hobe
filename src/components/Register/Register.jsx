import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {

  const { createUser } = useContext(AuthContext)
  // console.log(createUser);

  const handelFrom = e => {
    e.preventDefault()

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.log(error);
      })

  }


  return (
    <div className="hero">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold ">Register Now!</h1>
          </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handelFrom} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" placeholder="Name" name='name' className="input input-bordered" />
              </div>
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
                <button className="btn btn-primary">Regiset</button>
              </div>
            </form>
            <p>Already have account Please? <Link to='/logIn' ><button className="btn btn-active btn-link">LogIn</button></Link>  </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
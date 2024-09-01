import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProviders'

const Navber = () => {

  const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout()
      .then(() => {
        console.log('user logged out successfuly')
      })
      .catch(error => console.log(error))
  }

  const links = <>
    <NavLink to='/' ><li><a>Home</a></li></NavLink>
    <NavLink to='/logIn' ><li><a>Log In</a></li></NavLink>
    <NavLink to='/register' ><li><a>Register</a></li></NavLink>
    <NavLink to='/orders' ><li><a>Orders</a></li></NavLink>
    {user &&
      <>
        <NavLink to='/profile' ><li><a>Profile</a></li></NavLink>
        <NavLink to='/dashBored' ><li><a>DashBored</a></li></NavLink>
      </>
    }
  </>


  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {
              links
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            links
          }
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <>
            <span>{user.email}</span>
            <a onClick={handleLogOut} className="btn">Log Out</a>
          </>
            :
            <Link to='/logIn' ><button className="btn">Log In</button></Link>
        }
      </div>
    </div>
  )
}

export default Navber
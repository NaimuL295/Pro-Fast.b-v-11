import React from 'react';
import { Link, NavLink } from 'react-router';
import ProFast from '../ProFast/ProFast';
import useAuth from '../../Hook/useAuth';
Link
const Navbar = () => {
  const {user ,logout}=useAuth()
    const navItems=<>
    
     <li><NavLink to="/">Home</NavLink> </li>
       
        <li> <NavLink to="/coverage">Coverage</NavLink></li>
        <li> <NavLink to="/sendParcel">Send A Parcel</NavLink></li>
      {user &&<>
              <li> <NavLink to="/dashboard">DashboardLayout</NavLink></li>

      </>
       }
        <li> <NavLink to="/about">About us</NavLink></li>
    
    
    </>
    const handlerLogout=()=>{
logout().then((result) => {
  console.log(result);
  
}).catch((err) => {
  console.log(err);
});
    }
    return (
        <div>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {navItems}
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl"><ProFast/></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div>
  <div className="navbar-end ">

    {user?   <li onClick={handlerLogout}   className='list-none  btn btn-primary' >log out</li> 
    
  :<ul className='space-x-2'><li className='list-none btn  '><Link to="/login">Log in</Link></li>
  <li className='list-none btn btn-primary'><Link to="/register">Sign up</Link></li>
 </ul>
  
  }
  



  </div>
</div>    
        </div>
    );
};

export default Navbar;
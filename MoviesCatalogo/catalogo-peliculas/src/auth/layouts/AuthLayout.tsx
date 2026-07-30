import React from 'react'
import { Link, Outlet } from 'react-router'


const AuthLayout = () => {
  return (
    <div>
        <header className='bg-slate-900 w-full h-10 flex items-center justify-center gap-10 text-white text-center py-8'>
            <Link to='movies' className= 'w-1/10 bg-sky-500 rounded-2xl'>Peliculas</Link>
            <Link to='/' className='w-1/10 bg-sky-500 rounded-2xl'>Vuelve</Link>
            <Link to='/auth' className='w-1/10 bg-sky-500 rounded-2xl'>Login</Link>
            
        </header>

        
        <Outlet/>
        <footer className='bg-amber-700 w-full h-10'></footer>  
    </div>
  )
}

export default AuthLayout

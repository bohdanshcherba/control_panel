import React from 'react'
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>


export const LoginPage = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const userData = {
            userName: formData.get('userName'),
            email: formData.get('email'),
            password: formData.get('password'),
        };

        
        console.log(userData);
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <form className="block w-96 border-gray-500 border p-9 rounded-md " onSubmit={handleSubmit}>
                <h1 className='text-center mb-9'>Login</h1>
                <label className="block mb-3">
                    <span className="block">User name</span>
                    <input type="text" name='userName' minLength={4} className="w-full rounded-md" placeholder='Username...'required/>
                </label>
                <label className="block mb-3">
                    <span className="block">Email</span>
                    <input type="email" name='email' className="w-full rounded-md" placeholder='Email...' required/>
                </label>
                <label className="block mb-3">
                    <span className="block">Password</span>
                    <input type="password" name='password' minLength={4} className="w-full rounded-md" placeholder='Password...' required/>
                </label>
                <br/>
                <button type='submit' className='rounded-md bg-slate-300 py-2 px-4 w-full'>Submit</button>
            </form>
        </div>
    )
}

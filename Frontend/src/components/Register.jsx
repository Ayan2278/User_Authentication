import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/register', { // Added 'http://'
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)

            });

            const data = await response.json();
            if (data.message) {
                setSuccess(data.message);
                setError(" ");
                setTimeout(() => {
                    setSuccess("");
                }, 2000);
            }
            else {
                setError(data.error);
                setSuccess(" ");
                setTimeout(() => {
                    setError("");
                }, 2000);
            }
            document.getElementById('username').value = "";
            document.getElementById('password').value = "";
            console.log('Response from server:', data);
        } catch (error) {
            document.getElementById('username').value = "";
            document.getElementById('password').value = "";
            console.error('Error:', error);
        }
    };

    return (
        <div className='flex justify-center items-center mx-9 h-[100vh]'>
            <div className="card w-[400px] h-[350px] flex justify-center items-center flex-col shadow-[0_4px_20px_rgba(0,0,0,0.15)] shadow-[#abafff] rounded-xl">
                <h2 className='text-3xl my-3'>Register</h2>
                <form onSubmit={handleSubmit} className='flex flex-col w-[100%] justify-center'>
                    <input
                        type="text"
                        className=' InputTxt bg-slate-100 px-4 m-3 rounded-lg h-[40px] focus:border-[#abafff] focus:outline-none border border-transparent transition-all duration-200'
                        name="username"
                        id="username"
                        placeholder='Username'
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input
                        type="password"  // Set type as 'password'
                        className='InputTxt bg-slate-100 px-4 m-3 rounded-lg h-[40px] focus:border-[#abafff] focus:outline-none border border-transparent transition-all duration-200'
                        name="password"
                        id="password"
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button className='btn m-3' type='submit'>Register</button>
                </form>
                    <p className='text-red-500'>{error}</p>
                    <p className='text-green-600'>{success}</p>
                    <p className=''>Already have an account? <Link to="/Login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                setSuccess('Login successful! Redirecting...');
                setError(' '); // Clear any previous errors
                // Redirect or perform actions after successful login, e.g., redirect to another page
            } else {
                setError(data.error || 'An error occurred during login.');
            }

            // Clear input fields
            setFormData({ username: '', password: '' });
            console.log('Response from server:', data);
        } catch (error) {
            setError('An unexpected error occurred. Please try again.');
            console.error('Error:', error);
            // Clear input fields
            setFormData({ username: '', password: '' });
        }
    };

    return (
        <div>
            <div className="card shadow-[0_4px_20px_rgba(0,0,0,0.15)] shadow-[#abafff] rounded-xl">
                <h2 className='text-3xl my-3'>Login</h2>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className='InputTxt bg-slate-100 px-4 m-3 rounded-lg h-[40px] focus:border-[#abafff] focus:outline-none border border-transparent transition-all duration-200'
                        name="username"
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username" // Added placeholder
                    />
                    <input
                        type="password"
                        className='InputTxt bg-slate-100 px-4 m-3 rounded-lg h-[40px] focus:border-[#abafff] focus:outline-none border border-transparent transition-all duration-200'
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password" // Added placeholder
                    />
                    <button className='btn m-3' type='submit'>Login</button>
                </form>
                {error && <p className="text-red-500">{error}</p>} {/* Display error messages */}
                {success && <p className="text-green-500">{success}</p>} {/* Display success messages */}
                <p>Don't have an account? <Link to="/register">Sign up</Link></p>
            </div>
        </div>
    );
}

export default Login;

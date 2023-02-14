import React, { useState } from "react";
import logo from '../../components/assets/logo.png'
import background from '../../components/assets/background.png'
import './SignIn.css';

function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };
    return (

        <div className="signin-container">
            <div class="cover">
                <img src={background} alt="" />
            </div>
            <form onSubmit={handleSubmit}>

                <div class="logo-container">
                    <img src={logo} alt="" />
                </div>

                <h1>Sign In</h1>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="signup-input"
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>

        </div>


    );
};

export default SignIn
import React, { useState } from 'react';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    let newErrors = { ...errors };

    switch (name) {
      case 'fullName':
        newErrors.fullName =
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : '';
        break;
      case 'email':
        newErrors.email = validEmailRegex.test(value)
          ? ''
          : 'Email is not valid!';
        break;
      case 'password':
        newErrors.password =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }
    setErrors(newErrors);

    if (name === 'fullName') setFullName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    if (fullName === '' || email === '' || password === '') {
        valid = false;
    }
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm(errors)) {
      alert('Valid Form');
      console.log('Form Submitted Successfully:', { fullName, email, password });
      setFullName('');
      setEmail('');
      setPassword('');
      setErrors({ fullName: '', email: '', password: '' });
    } else {
      if (errors.fullName.length > 0) {
        alert(errors.fullName);
      } else if (errors.email.length > 0) {
        alert(errors.email);
      } else if (errors.password.length > 0) {
        alert(errors.password);
      } else {
        if (fullName === '') {
            alert('Full Name cannot be empty!');
        } else if (email === '') {
            alert('Email cannot be empty!');
        } else if (password === '') {
            alert('Password cannot be empty!');
        }
      }
    }
  };

  return (
    <div>
      <h2>Register Here!!!</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="fullName">Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName.length > 0 && (
            <span className="error">{errors.fullName}</span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          {errors.email.length > 0 && (
            <span className="error">{errors.email}</span>
          )}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          {errors.password.length > 0 && (
            <span className="error">{errors.password}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
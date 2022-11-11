import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Location</label>
          <select className="form-select" name="occupation" onChange={handleChange} value={values.location}>
            <option value=""></option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="">Bihar</option>
            <option value="">Chhattisgarh</option>
            <option value="">Goa</option>
            <option value="">Gujarat</option>
            <option value="">Haryana</option>
            <option value="">Himachal Pradesh</option>
            <option value="">Jharkhand</option>
            <option value="">Karnataka</option>
            <option value="">Kerala</option>
            <option value="">Madhya Pradesh</option>
            <option value="">Maharashtra</option>
            <option value="">Manipur</option>
            <option value="">Meghalaya</option>
            <option value="">Mizoram</option>
            <option value="">Nagaland</option>
            <option value="">Odisha</option>
            <option value="">Punjab</option>
            <option value="">Rajasthan</option>
            <option value="">Sikkim</option>
            <option value="">Tamil Nadu</option>
            <option value="">Telangana</option>
            <option value="">Tripura</option>
            <option value="">Uttar Pradesh</option>
            <option value="">West Bengal</option> 
          </select>
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Shop Types</label>
          <select className="form-select" name="" onChange={handleChange} value={values.location}>
            <option value=""></option>
            <option value="Andhra Pradesh">Grocery</option>
            <option value="Arunachal Pradesh">Pharmacy</option>
            <option value="Arunachal Pradesh">Stationary</option>
            </select>
            </div>

            <div className='form-inputs'>
          <label className='form-label'>Shop size</label>
          <input
            className='form-input'
            type='Size'
            name='Size'
            placeholder='Enter your shop size'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;

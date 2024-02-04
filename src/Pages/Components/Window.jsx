import React from 'react'

export const Window = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Login</span>
        <form>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <div className='rorl'>
            <p>New user? Create an <br /> account</p>
            <button>Logi</button>
          </div>
        </form>
      </div>
    </div>
  );
};

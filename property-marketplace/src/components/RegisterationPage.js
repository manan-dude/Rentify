import React, { useState } from 'react';
import './Registeration.css';

const RegistrationPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <body>
      <section>
        <div className="container">
          <div className={`user ${isSignIn ? 'signinBx' : 'signupBx'}`}>
            <div className="imgBx">
              <img
                src="https://cdn.dribbble.com/users/1858723/screenshots/6905597/flat_house_-_digital_illustration___animation.gif"
                alt=""
              />
            </div>
            <div className="formBx">
              <form action="" onSubmit={(e) => e.preventDefault()}>
                <h2>{isSignIn ? 'Sign In' : 'Create an Account'}</h2>
                {isSignIn ? (
                  <input type="text" placeholder="Username" />
                ) : (
                  <>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Create Password" />
                    <input type="password" placeholder="Confirm Password" />
                  </>
                )}
                <input type="submit" value={isSignIn ? 'Login' : 'Sign Up'} />
                <p className="signup">
                  {isSignIn ? "Don't have an account ? " : "Already have an account ? "}
                  <a href="#" onClick={toggleForm}>
                    {isSignIn ? 'Sign Up.' : 'Sign in.'}
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className={`user ${isSignIn ? 'signupBx' : 'signinBx'}`}>
            <div className="formBx">
              <form action="" onSubmit={(e) => e.preventDefault()}>
                <h2>Create an account</h2>
                <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="text" placeholder="Phone Number" />
                    <input type="email" placeholder="Email Address" />
                    <input type="text" placeholder="Seller/Buyer" />
             
                <input type="submit" value="Sign Up" />
                <p className="signup">
                  Already have an account ?{' '}
                  <a href="#" onClick={toggleForm}>
                    Sign in.
                  </a>
                </p>
              </form>
            </div>
            <div className="imgBx">
              <img
                src="https://cdn.dribbble.com/users/345283/screenshots/3132975/800.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default RegistrationPage;

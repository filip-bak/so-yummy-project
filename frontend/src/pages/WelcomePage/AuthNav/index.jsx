import React from 'react';


export const AuthNav = () => {
  return (
    <nav>
        <button>
          <a href="/register">
            <div>Registration</div>
          </a>
      </button>
      <button>
          <a href="/signin">
            <div>Sign in</div>
          </a>
   </button>
    </nav>
  );
};

export default AuthNav
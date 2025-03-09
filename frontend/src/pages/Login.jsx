import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form className="min-h-[80vh] flex items-center">
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 rounded-md text-gray-700 text-sm shadow-md border border-gray-200 bg-white">

          {/* Heading */}
          <p className="text-xl font-semibold text-gray-800">
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </p>
          <p className="text-gray-500 text-sm">
            Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment
          </p>

          {/* Full Name Field (Only for Sign Up) */}
          {state === 'Sign Up' && (
            <div className="w-full space-y-1 mt-2">
              <p className="font-medium text-gray-700 text-sm">Full Name</p>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-[#654321] focus:outline-none transition-all text-gray-700"
              />
            </div>
          )}

          {/* Email Field */}
          <div className="w-full space-y-1">
            <p className="font-medium text-gray-700 text-sm">Email</p>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-[#654321] focus:outline-none transition-all text-gray-700"
            />
          </div>

          {/* Password Field */}
          <div className="w-full space-y-1">
            <p className="font-medium text-gray-700 text-sm">Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-[#654321] focus:outline-none transition-all text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full mt-3 py-2 px-4 bg-[#654321] text-white font-medium rounded-md hover:bg-[#543210] transition-colors">
            {state === 'Sign Up' ? 'Create Account' : 'Login'}
          </button>

          {/* Toggle between Sign Up and Login */}
          {state === 'Sign Up' ? (
            <p className="text-gray-600 text-sm mt-2">
              Already have an account?{' '}
              <span
                onClick={() => setState('Login')}
                className="text-[#654321] font-medium cursor-pointer hover:underline"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-gray-600 text-sm mt-2">
              Create a new account?{' '}
              <span
                onClick={() => setState('Sign Up')}
                className="text-[#654321] font-medium cursor-pointer hover:underline"
              >
                Click here
              </span>
            </p>
          )}

        </div>
      </form>
      <br />
    </>
  );
};

export default Login;
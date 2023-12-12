//@format
import { useState, useEffect } from 'react';
import { login, createUser } from './apiRequests';

export default function Login({ user, setUser, setPage }) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInSelected, setSignInSelected] = useState(true);
  const [message, setMessage] = useState('wrong password');
  const handleSubmit = async () => {
    if (signInSelected) {
      await login(email, password, user, setUser, setPage, setMessage);
    } else {
      await createUser(email, password, userName, setUser, setPage, setPage);
    }
  };

  function validateEmail(email) {
    // Check if the input is not an empty string
    if (email.trim() === '') {
      return false;
    }

    // Split the email address by @ symbol
    const parts = email.split('@');

    // Check if there are exactly two parts
    if (parts.length !== 2) {
      return false;
    }

    const [localPart, domainPart] = parts;

    // Check if the local part is not empty
    if (localPart.trim() === '') {
      return false;
    }

    // Check if the domain part is not empty
    if (domainPart.trim() === '') {
      return false;
    }

    // Check if the domain part contains at least one dot
    if (!domainPart.includes('.')) {
      return false;
    }

    // Check if the email address doesn't end with a dot
    if (domainPart.endsWith('.')) {
      return false;
    }

    // If all checks pass, the email address is considered valid
    return true;
  }

    const formInvalid = () => {
    return (
      !validateEmail(email) ||
      password === '' ||
      (!signInSelected && userName === '')
    );
  };

  useEffect(() => {
    formInvalid();
  }, [email, password, userName, message]);

  return (
    <div className="flex min-h-full flex-1 flex-col bg-white rounded-lg shadow-xl justify-center md:mt-10 sm:max-w-md xl:p-10 ">
      <div className="text-center">
        <button
          onClick={() => setSignInSelected(true)}
          aria-current="page"
          className={`px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 ${signInSelected ? 'ring-blue-700 text-blue-700' : ''
            }`}
        >
          Sign in
        </button>
        <button
          onClick={() => setSignInSelected(false)}
          className={`px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 focus:z-10 ${!signInSelected ? 'ring-blue-700 text-blue-700' : ''
            }`}
        >
          Register
        </button>
      </div>
      <div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
          {signInSelected
            ? 'Sign in to your account'
            : 'Register for an account '}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            {!signInSelected ? (
              <>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900 "
                >
                  User Name
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="block w-full rounded-lg border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    console.log(userName);
                    setUserName(e.target.value);
                  }}
                />
              </>
            ) : (
              <></>
            )}
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900 "
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`block w-full rounded-lg border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${message === 'no email' ? 'border-red-500' : ''
                  }`}
                onChange={(e) => {
                  console.log(email);
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={`block w-full rounded-lg border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${message === 'wrong password' ? 'border-red-500' : ''
                  }`}
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log(password);
                }}
              />
            </div>
          </div>

          <div>
            <button
              disabled={formInvalid()}
              className={`${formInvalid() ? 'bg-red-600' : 'bg-indigo-600'} flex w-full justify-center rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:${formInvalid() ? 'bg-red-500' : 'bg-indigo-500'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-focus-visible:outline-indigo-600`}
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              {signInSelected ? 'Sign in' : 'Register'}
            </button>
          </div>
        </form>

        {/* <p className="mt-10 text-center text-sm text-gray-500"> */}
        {/*   Not a member?{' '} */}
        {/*   <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> */}
        {/*     Start a 14 day free trial */}
        {/*   </a> */}
        {/* </p> */}
      </div >
    </div >
  );
}

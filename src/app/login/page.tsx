import { FcGoogle } from "react-icons/fc"; // Google Icon
import { FaGithub } from "react-icons/fa"; // GitHub Icon

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="mt-2 text-sm text-center text-gray-600">
          Please sign in to your account
        </p>

        <form className="mt-6 space-y-5">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center mt-6">
          <span className="absolute px-3 text-sm text-gray-600 bg-white">
            Or continue with
          </span>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-800 bg-gray-100 border rounded-md hover:bg-gray-200">
            <FcGoogle className="w-5 h-5 mr-2" /> Google
          </button>
          <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-800 bg-gray-100 border rounded-md hover:bg-gray-200">
            <FaGithub className="w-5 h-5 mr-2" /> GitHub
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Dont have an account?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

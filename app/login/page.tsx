// for sign in
// export default function Login() {
//   return (
//     <div className="w-full mx-auto max-w-sm mt-8">
//       <form
//         action="/auth/login"
//         method="post"
//         className="bg-white shadow-md rounded-xl px-8 pt6 pb-8 mb-4"
//       >
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-gray-700 text-lg font-bold mb-2"
//           >
//             Email
//           </label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             className="shadow appearance-none border rounded w-full px-1 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
//           />
//         </div>

//         <div className="mb-6">
//           <label
//             htmlFor="password"
//             className="block text-gray-700 text-lg font-bold mb-2"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Type your password.."
//             className="shadow appearance-none border rounded w-full px-1 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="flex items-center justify-between">
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline">
//             Sign In
//           </button>
//           <a href="/auth/signup" className="inline-block">
//             Create account
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// }

// for sign up
export default function Login() {
  return (
    <form action="/auth/signup" method="post">
      <label htmlFor="email">Email</label>
      <input type="text" name="email" className="font-bold text-purple-700" />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        className="font-bold text-purple-700"
      />
      <button>Sign Up</button>
    </form>
  );
}

//  <form action="/auth/login" method="post">
//       <label htmlFor="email">Email</label>
//       <input type="text" name="email" className="font-bold text-purple-700" />
//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         name="password"
//         className="font-bold text-purple-700"
//       />
//       <button>Sign In</button>
//     </form>

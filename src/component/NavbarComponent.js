import { Link } from "react-router-dom";


const Navbar = () =>{
    return(
<div>
<nav className="bg-white border-gray-200 dark:bg-orange-400">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a>
        <img src="../logo192.png" className="h-8" alt="Flowbite Logo" />
        <span className="text-2xl font-bold text-center text-white-800 mb-4">Expense Tracking App</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
    aria-controls="navbar-default" 
    aria-expanded="false">

        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div  id="navbar-default">
      <ul className="flex flex-col space-y-5">
        <li>
          <Link to='/user' 
          href="#" 
          className="flex justify-center items-top text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 rounded me-200 mb-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" 
          aria-current="page">User</Link>
        </li>

        <li>
          <Link to = "/expense" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 rounded me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          รายจ่าย
          </Link>
        </li>
        <li>
          <Link to = "/income" className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 rounded dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          รายรับ
          </Link>
        </li>

        </ul>
    </div>
  </div>
</nav>
</div>
    )
}
export default Navbar;
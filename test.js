<nav className="container mx-auto flex justify-between px-2 md:px-14">
<div className='block md:hidden'>
  <h1 className='text-2xl text-indigo-600 '>Menu</h1>
  {/* onClick={openMobileDropDown} */}

</div>
<div className="text-2xl  font-bold text-black">
  <Link to="/"> <img className='mt-5 w-96 md:w-32 flex item' src='https://trustopay.vercel.app/assets/images/trustopay_logo_m%201.png' alt="Logo" /></Link>
</div>
<div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
  <ul class="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:text-sm  md:border-0 md:bg-white  md:space-x-8 md:rtl:space-x-reverse">
    <li>
      <Link
      className="block py-2 px-3 text-lg text-gray-700  rounded md:bg-transparent md:p-0" aria-current="page"
      to="/"
    >
      Home
    </Link>

    </li>
    <li>
        <button  onClick={() => setDropdownOpen(!dropdownOpen)} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex text-lg items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-indigo-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto  ">Product <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
        {/* <!-- Dropdown menu --> */}
        { dropdownOpen &&
          <div  class="z-10 absolute font-normal divide-y divide-gray-100 rounded-lg shadow w-44 ">
            <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
              <li> 
                <a onClick={() => handleDropdownClick('/genuine')}   class="block px-4 py-2 md:hover:bg-gray-400 rounded-md hover:cursor-pointer">Genuine</a>
              </li>
              <li>
                <a onClick={() => handleDropdownClick('product/b2')}  class="block px-4 py-2 md:hover:bg-gray-400 rounded-md hover:cursor-pointer"> B2</a>
              </li>
              <li>
                <a onClick={() => handleDropdownClick('product/b2c')}  class="block px-4 py-2 md:hover:bg-gray-400 rounded-md hover:cursor-pointer ">B2B2</a>
              </li>
              <li> 
                <a onClick={() => handleDropdownClick('product/b2c')}   class="block px-4 py-2 md:hover:bg-gray-400 rounded-md hover:cursor-pointer">B2C</a>
              </li>
              
            </ul>
      
        </div>
        }
    </li>
  
  <li>
    <Link
      className="block py-2 px-3 text-lg text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
      to="/about"
    >
      About
    </Link>
  </li>
  <li>
    <Link
      className="block py-2 px-3 text-lg text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
      to="/Contact"
    >
      Contact
    </Link>
  </li>

  </ul>
</div>
<div className="flex space-x-4">
  <button className=" hidden md:block border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded">
    Notify me
  </button>
  <button className="bg-indigo-600 text-white hover:bg-indigo-700 py-2 px-4 rounded">
    Contact Us
  </button>
</div>
</nav>
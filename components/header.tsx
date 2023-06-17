import React from 'react'

const Header = () => {
  return (
    <nav
  aria-label="Global"
  className="mx-auto flex max-w-3xl items-center justify-between p-4"
>
  <a
    href="/"
    className="inline-flex p-4 items-center justify-center rounded-lg bg-gray-100"
  >
    Ecommerce
  </a>

  <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">


    <li><a className="rounded-lg px-3 py-2" href=""> Login/Create an Account </a></li>

    <li>
      <a
        className="inline-flex items-center gap-2 rounded-lg px-3 py-2"
        href=""
        target="_blank"
      >
        Start shopping

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          ></path>
        </svg>
      </a>
    </li>
  </ul>
</nav>
  )
}

export default Header

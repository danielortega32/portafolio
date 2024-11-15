import React , { useState } from 'react';

export  const Navbar = ({ scrollToSection, refs }) => {
  const { mainRef, proyectRef, experienceRef, profileRef } = refs;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-gray-50 dark:bg-gray-800 dark:bg-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100   
 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? '' : 'hidden'}`}>
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 justify-center items-center md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
              <button
                onClick={() => scrollToSection(mainRef)}
                className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(experienceRef)}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Experiencia
              </button>
            </li>
            <li>
            
              <button
                onClick={() => scrollToSection(proyectRef)}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Proyectos
              </button>
            </li>
            <li>
              
              <button
                onClick={() => scrollToSection(profileRef)}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Sobre Mi
              </button>
            </li>
            <li>
              {/* Enlace de contacto (mailto sigue siendo un enlace normal) */}
              <a
                href="mailto:daniortegacavs@gmail.com"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


import React from 'react'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Main = () => {
  return (
    <div class="flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-screen mb-0">
      {/* Sección izquierda: Imagen */}
      <div class="flex justify-center md:w-full md:ml-auto md:mr-auto">
        <img 
          src="https://i.ibb.co/YNfDxxK/dani.png" 
          alt="Profile"
          class="rounded-lg shadow-lg ml-12 md:ml-[50px]" 
          width="180px"          
        />
      </div>

      {/* Sección derecha: Texto y descripción */}
      <div class="w-full md:w-2/3 flex flex-col justify-center text-center md:text-left">
        {/* Título */}
        <h1 class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white">
        ¡Hola! Soy <span class="text-indigo-600">Daniel Ortega!</span>
</h1>
        
        {/* Descripción */}
        <p class="mt-2 text-gray-600 dark:text-gray-300">
        Desarrollador Full-Stack apasionado por crear experiencias web excepcionales. Con sólida experiencia en Java, Spring Boot y React, he construido aplicaciones web escalables y de alto rendimiento. Me encanta trabajar en equipos ágiles y estoy siempre buscando nuevas tecnologías para mejorar mis habilidades.
        </p>

        {/* Iconos de contacto */}
        <div class="mt-4 flex justify-center md:justify-start space-x-4">
          <a 
            href="https://www.linkedin.com/in/-daniel-ortega/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-blue-700 hover:text-blue-900 dark:text-white dark:hover:text-blue-500"
          >
            <FaLinkedin size={30} />
          </a>
          <a 
            href="daniortegacavs@gmail.com" 
            class="text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-400"
          >
            <FaEnvelope size={30}  />
          </a>
        </div>
      </div>
    </div>
  )
}


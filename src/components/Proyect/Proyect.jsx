import React from 'react'
import { FaProjectDiagram,FaGithub, FaLink  } from 'react-icons/fa'; 


const PROJECTS = [
  {
    title: "Repositorio del proyecto App Libreria creado con Sping Boot",
    description:
      "En este repositorio se encuentra un proyecto que he realizado utilizando Spring, Java, HTML y CSS, el mismo consiste en una librería donde se puede gestionar el stock y préstamo de libros a clientes.",
    github: "https://github.com/danielortega32/libreriaApp",
    image: "https://i.ibb.co/vkCWrH8/App-Libreria.png", 
  },
  {
    title: "Repositorio  Agenda de Contacto con Spring Boot",
    description:
      "Esta aplicación web permite gestionar una agenda de contactos de manera intuitiva. Desarrollada con Spring Boot y Bootstrap, ofrece funcionalidades CRUD (Crear, Leer, Actualizar y Eliminar) para administrar contactos.Tecnologías Utilizadas Backend: Spring Boot, Java Frontend: HTML, CSS, Bootstrap Base de datos: ( base de datos utiliza es MySQL ).",
    github: "https://github.com/danielortega32/crudSpring",
    image: "https://i.ibb.co/wCNbSZ8/Crud-Agenda.png",
  },
  {
    title: "Ecommerce creado con React, Chakra UI, Vite y Firebase",
    description:
      "Esta es una tienda en línea construida con React, utilizando el framework de componentes UI Chakra UI, el build tool Vite, y Firebase como backend para el almacenamiento de datos. La aplicación permite a los usuarios navegar por un catálogo de productos, agregarlos al carrito, realizar el proceso de compra y gestionar su cuenta.",
    github: "https://github.com/danielortega32/react-ecommerce",
    image: "https://i.ibb.co/Kyhhv2V/ecommerce.png",
  },
  {
    title: "Portafolio Personal utiizando  React, Vite, Tailwind CSS",
    description:
      "Este repositorio contiene el código fuente de mi portafolio personal, una aplicación web creada con React, Vite y Tailwind CSS. Este portafolio muestra una recopilación de mis proyectos, habilidades y experiencia como desarrollador web.",
    github:"https://github.com/danielortega32/portafolio",
    image: "https://i.ibb.co/KDr2CLz/porf.png",
  },
];

export const Proyect = () => {
  return (
    <div className="flex flex-col gap-y-16 md:ml-[50px]">
    <div  className="flex items-center justify-center text-indigo-600 text-2xl md:text-4xl font-bold"> <FaProjectDiagram className="size-7" />Proyectos</div>  
    {PROJECTS.map(({ image, title, description, link, github }) => (
      <article
        key={title}
        className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
      >
        {/* Imagen del proyecto */}
        <div className="w-full md:w-1/2">
          <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-hidden rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50 px-4 sm:px-8">
            <img
              alt={`Imagen del proyecto ${title}`}
              className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105 "
              loading="lazy"
              src={image}
            />
          </div>
        </div>

        {/* Información del proyecto */}
        <div className="w-full md:w-1/2 md:max-w-lg">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 px-4 sm:px-8">
            {title}
          </h3>
          <p className="mt-2 text-gray-700 dark:text-gray-400 px-4 sm:px-8">
            {description}
          </p>
          <footer className="flex items-center justify-start mt-4 gap-x-4 px-4 sm:px-8">
            {/* Botón GitHub */}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-white bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition"
              >
                <FaGithub className="size-6" />
                Código
              </a>
            )}
            {/* Botón Link del proyecto */}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500 transition"
              >
                <FaLink className="size-6" />
                Web
              </a>
            )}
          </footer>
        </div>
      </article>
    ))}
  </div>
  );
};


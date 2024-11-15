import React from 'react'
import { FaChevronRight } from 'react-icons/fa'; 

const EXPERIENCES = [
  {
    date: "Actualmente",
    title: "Desarrollo Web",
    company: "LG Ingenieria",
    description:
      " Desarrollador web en un proyecto de gestión empresarial para una compañía especializada en sistemas  red de incendios. Diseñamos e implementé una aplicación web completa, desde el frontend (con tecnologías Html, Boostrap,CSS) hasta el backend (con tecnologías java, spring boot ), para optimizar los procesos de inventario y facturación. Actualmente sigo desarrollando el proyecto ",

  },
  
];

const ExperienceItem = ({ title, company, description, link, date }) => {
  return (
    <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4 ">
      <div className="relative pb-12 md:col-span-2">
        <div className="sticky top-0">
          <span className="text-indigo-600 -left-[42px] absolute rounded-full text-5xl">
            &bull;
          </span>

          <h3 className="text-xl font-bold text-indigo-600">{title}</h3>
          <h4 className="font-semibold text-xl text-gray-600 dark:text-white">{company}</h4>
          <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">
            {date}
          </time>
        </div>
      </div>
      <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
        {description}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:text-blue-700"
          >
            Saber más{" "}
            <FaChevronRight className="w-5 h-5 ml-2" />
          </a>
        )}
      </div>
    </div>
  );
};


export const ExperienceSection = () => {
  return (
    <ol className="relative mt-16 md:ml-[50px]">
    {EXPERIENCES.map((experience, index) => (
      <li key={index}>
        <ExperienceItem {...experience} />
      </li>
    ))}
  </ol>
  )
}

import React from 'react'

const personalImageAlt = "Daniel Ortega"
export const Profile = () => {
  return (
    <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row md:ml-[50px] px-4 sm:px-8">
    {/* Texto de presentación */}
    <div className="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1 px-4 sm:px-8">
      <p>
        Me llamo Daniel Ortega . Soy <strong>
          desarrollo de Software Full Stack especializado en Java Backend con Spring.
        </strong>
      </p>
      <p>
        Me encanta tomar mates 🧉 y desarrollar software que solucione problemas reales tanto en escritorio como en la web usando Java ☕ y Spring con Thymeleaf 🍃.
      </p>
    </div>

    {/* Imagen de perfil */}
    <img
      width="200"
      height="200"
      src="https://i.ibb.co/YNfDxxK/dani.png"
      alt={personalImageAlt}
      className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20"
      style={{ objectPosition: '50% 50%' }} 
    />
  </article>
  )
}

// import React from 'react';
// import { movies } from '../data/movies';
// // Subimos un nivel (..) para entrar a components
// import MovieCard from '../components/MovieCard';

// const HomePage = () => {
//   return (
//     <main className="min-h-screen bg-slate-950 text-slate-100 p-6 sm:p-10">
//       <header className="max-w-7xl mx-auto mb-10 text-center">
//         <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-white">
//           Catálogo de Películas
//         </h1>
//         <p className="text-slate-400">
//           Explora nuestra selección de títulos clásicos del cine.
//         </p>
//       </header>

//       <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </section>
//     </main>
//   );
// };

// export default HomePage;


import React from 'react';
import MovieCard from '../components/MovieCard';
import { movies } from '../data/movies';

const HomePage: React.FC = () => {
  return (

<div className="min-h-screen bg-white text-gray-900">
      
      <header className="w-full bg-slate-900 border-b border-slate-800 py-2 px-6 shadow-md sticky top-0 z-10 flex justify-center items-center">
        <h1 className="text-2xl font-extrabold text-white text-center">
          Movie <span className="text-indigo-500">BPM</span>
        </h1>
      </header>

      <main className="pt-6 pb-10 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <section className="mb-6 text-center">
            <h2 className="text-3xl font-extrabold mb-1 text-gray-900">
              Catálogo de Películas
            </h2>
            <p className="text-gray-600 text-sm">
              Explora las mejores películas disponibles
            </p>
          </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id+movie.title} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  </div>
  );
};

export default HomePage;
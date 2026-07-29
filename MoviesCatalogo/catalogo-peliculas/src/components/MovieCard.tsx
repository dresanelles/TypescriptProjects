// import { IMovie } from "../data/movies";

// interface MovieCardProps {
//     movie: IMovie;
// }


// function MovieCard ({ movie }): MovieCardProps {
//     const { title, year, genre, director, duration, description, rating, image } = movie;

//     return (
//         <article className="bg-slate-800 text-slate-100 rounded-2xl overflow-hidden shadow:lg hover:shadow-2xl transition-all duration-100 hover:-translate-y-2 flex flex-col justify-between border border-slate-700">
//             <div className="relative h-64 overflow-hidden group">
//                 <img
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 src="{image} 
//                 alt={`Póster promocional de la película ${title}`}
//                 />
//             <span className


//             </div>
//         </article>
//     )
// }

import type { IMovie } from '../data/movies';

interface MovieCardProps {
  movie: IMovie;
}

function MovieCard({ movie }: MovieCardProps) {
  const { title, year, genre, director, duration, description, rating, image } = movie;

  return (
    <article className="bg-slate-800 text-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between border border-slate-700">
      
      <div className="relative h-64 overflow-hidden group">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={`Póster promocional de la película ${title}`}
        />
        <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-amber-400 font-bold px-3 py-1 rounded-full text-sm border border-amber-400/30">
          ⭐ {rating}
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <header className="flex justify-between items-start mb-3 gap-2">
            <h2 className="text-xl font-bold text-white leading-tight">
              {title}
            </h2>
            <span className="text-xs font-semibold bg-sky-500/20 text-sky-300 px-2 py-1 rounded-md">
              {year}
            </span>
          </header>

          <div className="text-sm text-slate-300 space-y-1 mb-4">
            <p>
              <strong className="text-slate-100">Género:</strong> {genre}
            </p>
            <p>
              <strong className="text-slate-100">Director:</strong> {director}
            </p>
            <p>
              <strong className="text-slate-100">Duración:</strong> {duration} minutos
            </p>
          </div>

          <p className="text-slate-400 text-xs line-clamp-3 mb-4 leading-relaxed">
            {description}
          </p>
        </div>

        <button
          className="w-full bg-sky-600 hover:bg-sky-500 text-white font-medium py-2 px-4 rounded-xl transition duration-200 ease-in-out text-sm shadow-md hover:shadow-sky-500/25 active:scale-95"
          type="button"
        >
          Ver detalles
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
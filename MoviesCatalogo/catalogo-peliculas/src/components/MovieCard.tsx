// import type { IMovie } from '../data/movies';

// interface MovieCardProps {
//   movie: IMovie;
// }

// function MovieCard({ movie }: MovieCardProps) {
//   const { title, year, genre, director, duration, description, rating, image } = movie;

//   return (
//     <article className="bg-slate-600 text-slate-100 rounded-2xl overflow-hidden shadow-black hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between">
      
//       <div className="relative aspect-[2/3] overflow-hidden group">
//         <img
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           src={image}
//           alt={`Póster promocional de la película ${title}`}
//         />
//         <span className="absolute top-3 right-3 bg-yellow-300 backdrop-blur-md text-black font-bold px-3 py-1 rounded text-sm border border-amber-400/30">
//           {rating}
//         </span>
//       </div>

//       <div className="p-5 flex-1 flex flex-col justify-between">
//         <div>
//           <header className="flex justify-between items-start mb-3 gap-2">
//             <h2 className="text-xl font-bold text-white leading-tight">
//               {title}
//             </h2>
//             <span className="text-xs font-semibold bg-sky-500/20 text-sky-300 px-2 py-1 rounded-md">
//               {year}
//             </span>
//           </header>

//           <div className="text-sm text-slate-300 space-y-1 mb-4">
//             <p>
//               <strong className="text-slate-100">Género:</strong> {genre}
//             </p>
//             <p>
//               <strong className="text-slate-100">Director:</strong> {director}
//             </p>
//             <p>
//               <strong className="text-slate-100">Duración:</strong> {duration} minutos
//             </p>
//           </div>

//           <p className="text-slate-400 text-xs line-clamp-3 mb-4 leading-relaxed">
//             {description}
//           </p>
//         </div>

//         <button
//           className="w-full bg-sky-600 hover:bg-sky-500 text-white font-medium py-2 px-4 rounded-xl transition duration-200 ease-in-out text-sm shadow-md hover:shadow-sky-500/25 active:scale-95"
//           type="button"
//         >
//           Ver detalles
//         </button>
//       </div>
//     </article>
//   );
// }

// export default MovieCard;



import React from 'react';
import { Link } from 'react-router'; 
import type { IMovie } from '../data/movies';

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="bg-slate-800 text-slate-100 rounded-2xl overflow-hidden shadow-black hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between">
      <div>
        <div className="overflow-hidden">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full relative aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-5">
          <div className="flex justify-between items-start gap-2 mb-2">
            <h3 className="font-bold text-lg text-white group-hover:text-indigo-400 transition-colors">
              {movie.title}
            </h3>
            <span className=" w-1/5 bg-yellow-500 text-black text-sm font-semibold rounded-2xl whitespace-nowrap text-center">
             {movie.rating}
            </span>
          </div>
          <p className="text-xs text-slate-400 mb-4">
            {movie.year} &bull; {movie.genre}
          </p>
          <p className="text-slate-300 text-sm line-clamp-3">
            {movie.description}
          </p>
        </div>
      </div>

      
      <div className="p-5 pt-0">
        <Link
          to={`/movies/${movie.id}`}
          className="w-full block text-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm py-2 px-4 rounded-lg transition-colors"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
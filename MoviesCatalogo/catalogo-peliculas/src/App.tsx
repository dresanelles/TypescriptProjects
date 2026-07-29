import MovieCard from "./components/MovieCard";
import { movies } from "./data/movies";

function App() {
  return (
    <main className="min-h-screen bg-slate-900 p-6 sm:p-10 text-slate-100">
      <header className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">

            Catálogo de Películas
        </h1>

        <p className="text-slate-400">
          Explora nuestra selección de títulos de clásicos del cine.
        </p>

      </header>

      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}

      </section>
    </main>
  );
};


export default App;
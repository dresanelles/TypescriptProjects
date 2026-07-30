import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import MoviesDetailsPage from "./pages/MovieDetailPages";
import AuthLayout from "./auth/layouts/AuthLayout"


export const movieRouter = createBrowserRouter([
    
    // {
    //     path: '/',
    //     element: <HomePage/>
    // },
    // {
    //     path: 'movies/:id',
    //     element: <MoviesDetailsPage/>
    // }
    {
        path: '/',
        element: <AuthLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'movies',
                element: <h1 className="text-4xl">Aquí van a ir las peliculas</h1>
            }
            
        ]
    },
    {
        path: '/auth',
        element: <h1>Aquí vas a manejar el reerizado de las rutas automatizadas</h1>,
        children: [

        ]
    }
])



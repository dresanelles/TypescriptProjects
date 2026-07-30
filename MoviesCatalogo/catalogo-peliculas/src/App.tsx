import { RouterProvider } from "react-router";
import { movieRouter } from "./appRouter";

function App() {
  return <RouterProvider router={movieRouter} />;
}

export default App;
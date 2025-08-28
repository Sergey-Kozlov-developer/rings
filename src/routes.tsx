import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import Characters from "./pages/Characters/Character";
import About from "./pages/Abouts/Abouts";
import NotFound from "./pages/NotFound/NotFound";
import Movies from "./pages/Movies";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "books",
				element: <Books />,
			},
			{
				path: "characters",
				element: <Characters />,
			},
			{
				path: "movies",
				element: <Movies />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

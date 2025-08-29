import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Characters from "./pages/Characters";
import Movies from "./pages/Movies";
import About from "./pages/Abouts";
import NotFound from "./pages/NotFound";

export const routers = createBrowserRouter([
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

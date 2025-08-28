import Loading from "./components/Loading";
import Error from "./components/Error";
import { useBooks } from "./hooks";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import Characters from "./pages/Characters/Character";
import About from "./pages/Abouts/Abouts";
import NotFound from "./pages/NotFound/NotFound";

function App() {
	const { loading, error } = useBooks();

	if (loading) return <Loading />;
	if (error) return <Error message={error} />;

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="books" element={<Books />} />
				<Route path="characters" element={<Characters />} />
				<Route path="about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;

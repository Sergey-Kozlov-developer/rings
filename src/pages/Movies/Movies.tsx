import { useLordOfRingsApi } from "../../hooks";

interface Movies {
	_id: string;
	name: string;
	quote: string;
}

function Movies() {
	const { data: movies } = useLordOfRingsApi<Movies>("/movie");
	return (
		<div>
			<h1>Movies</h1>
			{movies.map((movie) => (
				<div key={movie._id}>
					<p>{movie.name}</p>
				</div>
			))}
		</div>
	);
}

export default Movies;

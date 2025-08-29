import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { useLordOfRingsApi } from "../../hooks";
import type { Movie } from "../../types/movie";

function Movies() {
	const { data: movies, loading, error } = useLordOfRingsApi<Movie>("/movie");

	if (loading) return <Loading />;
	if (error) return <Error message={error} />;
	return (
		<div>
			<h1 className="text-3xl font-bold text-center mb-8">
				The Lord of the Rings Movies
			</h1>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{movies.map((movie) => (
					<div
						key={movie._id}
						className="bg-white p-6 rounded-lg shadow-md"
					>
						<h2 className="text-xl font-semibold mb-3">
							{movie.name}
						</h2>

						<div className="space-y-2 text-sm text-gray-600">
							<p>Runtime: {movie.runtimeInMinutes} minutes</p>
							<p>Budget: ${movie.budgetInMillions}M</p>
							<p>
								Box Office: ${movie.boxOfficeRevenueInMillions}M
							</p>
							<p>
								Oscar Nominations:
								{movie.academyAwardNominations}
							</p>
							<p>Oscar Wins: {movie.academyAwardWins}</p>
							<p>Rotten Tomatoes: {movie.rottenTomatoesScore}%</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Movies;

import { useLordOfRingsApi } from "../../hooks/useLordOfRingsApi";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

interface Character {
	_id: string;
	name: string;
	race: string;
	gender: string;
}

function Characters() {
	const {
		data: characters,
		loading,
		error,
	} = useLordOfRingsApi<Character>("/character");

	if (loading) return <Loading />;
	if (error) return <Error message={error} />;

	return (
		<div>
			<h1 className="text-3xl font-bold text-center mb-8">
				Characters of Middle-earth
			</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{characters.map((character) => (
					<div
						key={character._id}
						className="bg-white p-4 rounded-lg shadow-md"
					>
						<h3 className="text-xl font-semibold">
							{character.name}
						</h3>
						<p className="text-gray-600">Race: {character.race}</p>
						<p className="text-gray-600">
							Gender: {character.gender}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Characters;

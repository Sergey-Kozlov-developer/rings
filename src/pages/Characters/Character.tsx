import { useCharacters } from "../../hooks/useLordOfRingsApi";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import CharacterList from "../../components/CharacterList";

function Characters() {
	const { data: characters, loading, error } = useCharacters();

	if (loading) return <Loading />;
	if (error) return <Error message={error} />;

	return (
		<div>
			<h1 className="text-3xl font-bold text-center mb-8">
				Characters of Middle-earth
			</h1>
			<CharacterList characters={characters} />
		</div>
	);
}

export default Characters;

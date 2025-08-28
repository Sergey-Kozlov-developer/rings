import type { Character } from "../../types/character";
import CharacterItem from "./CharacterItem";

interface CharacterListProps {
	characters: Character[];
}

function CharacterList({ characters }: CharacterListProps) {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
			{characters.map((character) => (
				<CharacterItem key={character._id} character={character} />
			))}
		</div>
	);
}

export default CharacterList;

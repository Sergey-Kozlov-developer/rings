import type { Character } from "../../types/character";

interface CharacterItemProps {
	character: Character;
}

function CharacterItem({ character }: CharacterItemProps) {
	return (
		<div key={character._id} className="bg-white p-4 rounded-lg shadow-md">
			<h3 className="text-xl font-semibold">{character.name}</h3>
			<p className="text-gray-600">Race: {character.race}</p>
			<p className="text-gray-600">
				Birth: {character.birth ?? "no data available"}
			</p>
			<p className="text-gray-600">Gender: {character.gender}</p>
			<p className="text-gray-600">
				Hair: {character.hair ?? "no data available"}
			</p>
			<p className="text-gray-600">
				Height: {character.height ?? "no data available"}
			</p>
			<p className="text-gray-600">
				Realm: {character.realm ?? "no data available"}
			</p>

			<p className="text-gray-600">
				Spouse: {character.spouse ?? "no data available"}
			</p>
			<p className="text-gray-600">
				Death: {character.death ?? "no data available"}
			</p>
			<p className="text-gray-600">
				Wiki:{" "}
				<a
					href={character.wikiUrl ?? "no data available"}
					target="_blank"
				>
					Wiki link
				</a>
			</p>
		</div>
	);
}

export default CharacterItem;

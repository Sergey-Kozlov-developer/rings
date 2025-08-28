import type { Book } from "../../types";

interface BookItemProps {
	book: Book;
}

function BookItem({ book }: BookItemProps) {
	return (
		<li className="p-6 hover:bg-gray-50 transition-colors">
			<h2 className="text-2xl font-semibold text-gray-800 text-center">
				{book.name}
			</h2>
		</li>
	);
}

export default BookItem;

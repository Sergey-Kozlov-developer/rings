import type { Book } from "../../types";
import BookItem from "./BookItem";

interface BookListProps {
	books: Book[];
}

function BookList({ books }: BookListProps) {
	if (books.length === 0) {
		return <div className="text-center text-gray-500">No books found.</div>;
	}

	return (
		<div className="flex justify-center">
			<div className="w-full max-w-2xl">
				<ul className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
					{books.map((book) => (
						<BookItem key={book._id} book={book} />
					))}
				</ul>

				<div className="text-center mt-4">
					<p className="text-gray-500">Total books: {books.length}</p>
				</div>
			</div>
		</div>
	);
}

export default BookList;

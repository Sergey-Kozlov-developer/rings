import BookList from "../../components/BookList";
import { useBooks } from "../../hooks";

function Books() {
	const { data: books } = useBooks();
	return (
		<div>
			<h1 className="text-3xl font-bold text-center mb-8">
				The Lord of the Rings Books
			</h1>
			<BookList books={books} />
		</div>
	);
}

export default Books;

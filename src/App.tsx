import {useEffect, useState} from 'react'

// Ваш API-ключ из переменной окружения
const API_KEY = import.meta.env.REACT_APP_LOTR_API_KEY;
;
const BASE_URL = 'https://the-one-api.dev/v2';


function App() {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);
                // Важно: передаем токен в заголовке Authorization
                const response = await fetch(`${BASE_URL}/book`, {
                    headers: {
                        'Authorization': `Bearer ${API_KEY}` // Вот так добавляется ключ
                    }
                });

                if (!response.ok) {
                    // Если ответ не в диапазоне 200-299, выбрасываем ошибку
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setBooks(data.docs); // Данные всегда находятся в свойстве `docs`
                setError(null);

            } catch (err) {
                setError(err.message);
                setBooks([]);
            } finally {
                setLoading(false);
            }
        }

        fetchBooks();
    }, []);

    // Состояния загрузки и ошибки
    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-2xl">Loading books...</div>
        </div>
    );

    if (error) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-2xl text-red-600">Error: {error}</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                {/* Заголовок по центру */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        The Lord of the Rings Books
                    </h1>
                    <p className="text-gray-600">Discover the epic journey through Middle-earth</p>
                </div>

                {/* Список книг по центру */}
                <div className="flex justify-center">
                    <div className="w-full max-w-2xl">
                        <ul className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
                            {books.map((book) => (
                                <li key={book._id} className="p-6 hover:bg-gray-50 transition-colors">
                                    <h2 className="text-2xl font-semibold text-gray-800 text-center">
                                        {book.name}
                                    </h2>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Дополнительная информация по центру */}
                <div className="text-center mt-8">
                    <p className="text-gray-500">
                        Total books: {books.length}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App

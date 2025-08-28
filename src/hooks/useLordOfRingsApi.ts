import { useEffect, useState } from "react";
import type { Book } from "../types";
import type { Character } from "../types/character";

// Ваш API-ключ из переменной окружения
const API_KEY = import.meta.env.VITE_REACT_APP_LOTR_API_KEY;
const BASE_URL = "https://the-one-api.dev/v2";

export function useLordOfRingsApi<T>(endpoint: string) {
	// получение книг
	const [data, setData] = useState<T[]>([]);
	// состояние загрузки страницы
	const [loading, setLoading] = useState(true);
	// ошибки
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await fetch(`${BASE_URL}${endpoint}`, {
					headers: {
						Authorization: `Bearer ${API_KEY}`,
					},
				});
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const result = await response.json();
				setData(result.docs);
				setError(null);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Unknown error");
				setData([]);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [endpoint]);

	return { data, loading, error };
}
// Специализированный хук для книг
export function useBooks() {
	return useLordOfRingsApi<Book>("/book");
}
// Специализированный хук для персонажей
export function useCharacters() {
	return useLordOfRingsApi<Character>("/character");
}

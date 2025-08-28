function Home() {
	return (
		<div className="text-center">
			<h1 className="text-4xl font-bold text-gray-800 mb-4">
				Добро пожаловать!
			</h1>
			<p className="text-xl text-gray-600 mb-8">
				Сервис работает на API the-one-api.dev
			</p>
			<div className="grid md:grid-cols-3 gap-6">
				<div className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-semibold mb-3">Книги</h2>
					<p className="text-gray-600">
						Погрузитесь в огромную вселенную Средиземья
					</p>
				</div>
				<div className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-semibold mb-3">Персонажи</h2>
					<p className="text-gray-600">
						Познакомьтесь с героями Средиземья
					</p>
				</div>
				<div className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-semibold mb-3">Фильмы</h2>
					<p className="text-gray-600">
						Откройте для себя экранизации книг
					</p>
				</div>
			</div>
		</div>
	);
}

export default Home;

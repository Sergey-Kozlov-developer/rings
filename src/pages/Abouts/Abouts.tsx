function About() {
	return (
		<div className="max-w-2xl mx-auto">
			<h1 className="text-3xl font-bold text-center mb-8">О проекте</h1>
			<div className="bg-white p-6 rounded-lg shadow-md">
				<p className="text-gray-700 mb-4">
					React приложение по вселенной "Властелин колец".
					Используется LOTR API
				</p>
				<p className="text-gray-700 mb-4">
					Работает на React 19, TypeScript, Tailwind CSS, and React
					Router.
				</p>
				<h2 className="text-xl font-semibold mb-3">Особенности:</h2>
				<ul className="list-disc list-inside text-gray-700 space-y-2">
					<li>Адаптивный дизайн</li>
					<li>Каталог персонажей с пагинацие</li>
				</ul>
			</div>
		</div>
	);
}

export default About;

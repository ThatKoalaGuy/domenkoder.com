export default function Portfolio() {
	return (
		<>
			<title> Portfolio - Domen Koder</title>
			<link rel="canonical" href="https://domenkoder.com/portfolio" />
			<meta
				name="description"
				content="The portfolio of Domen Koder, showcasing his finished and work in project projects."
			></meta>
			<main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-450 mx-auto">
				<a
					target="_blank"
					href="https://github.com/ThatKoalaGuy/personal-website"
					className="block bg-zinc-700 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
				>
					<div className="aspect-[4/3]">
						<img
							src="/projects/personal-website.png"
							alt="Personal website project"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="p-4 text-green-400 font-semibold text-lg">
						Personal portfolio website - you are visiting it right now!
						<br />
						<br />
						<br />
						Tech stack: Vite + React + TailwindCSS
					</div>
				</a>

				<a
					target="_blank"
					href="https://github.com/ThatKoalaGuy/ToDoCLI"
					className="block bg-zinc-700 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
				>
					<div className="aspect-[4/3]">
						<img
							src="/projects/todocli.png"
							alt="ToDoCLI project"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="p-4 text-green-400 font-semibold text-lg">
						ToDoCLI - a simple CLI todo app.
						<br />
						<br />
						<br />
						Tech stack: C
					</div>
				</a>

				<a
					target="_blank"
					href="https://github.com/ThatKoalaGuy/Calculator"
					className="block bg-zinc-700 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
				>
					<div className="aspect-[4/3]">
						<img
							src="/projects/calculator.png"
							alt="Calculator project"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="p-4 text-green-400 font-semibold text-lg">
						Calculator - a calculator made for practicing web development
						skills.
						<br />
						<br />
						Tech stack: HTML, CSS, JS
					</div>
				</a>

				<a
					target="_blank"
					href="https://github.com/ThatKoalaGuy/RockPaperScissors"
					className="block bg-zinc-700 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
				>
					<div className="aspect-[4/3]">
						<img
							src="/projects/rps.png"
							alt="Rock Paper Scissors project"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="p-4 text-green-400 font-semibold text-lg">
						RockPaperScissors - a game made for learning web development.
						<br />
						<br />
						Tech stack: HTML, CSS, JS
					</div>
				</a>
			</main>
		</>
	);
}

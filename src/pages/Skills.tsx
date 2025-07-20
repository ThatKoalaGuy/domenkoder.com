export default function About() {
	return (
		<>
			<title>Skills - Domen Koder</title>
			<link rel="canonical" href="https://domenkoder.com/skills" />
			<meta
				name="description"
				content="Learn about Domen Koder's skills as a software developer."
			></meta>
			<main className="max-w-4xl mx-auto space-y-10 flex-grow">
				<h1 className="text-4xl sm:text-5xl font-bold text-center text-white p-6">
					My Skills
				</h1>

				<section>
					<h2 className="text-2xl font-semibold mb-4">Programming Languages</h2>
					<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-lg">
						<li>HTML & CSS (Advanced)</li>
						<li>JavaScript (Advanced)</li>
						<li>Java (Intermediate)</li>
						<li>C (Basic)</li>
					</ul>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">
						Frameworks & Libraries
					</h2>
					<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-lg">
						<li>React</li>
						<li>Tailwind CSS</li>
					</ul>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">Tools & Platforms</h2>
					<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-lg">
						<li>Git & GitHub</li>
						<li>Linux / WSL</li>
						<li>Docker</li>
						<li>Virtualization [Hyper-V]</li>
						<li>Networking</li>
					</ul>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">Other Skills</h2>
					<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-lg">
						<li>Problem Solving</li>
						<li>Fast Learner</li>
						<li>Team Communication</li>
						<li>Slovenian (native), English (C1), German (A1)</li>
					</ul>
				</section>
			</main>
		</>
	);
}

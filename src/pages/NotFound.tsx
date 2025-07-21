export default function NotFound() {
	return (
		<>
			<title>404 | Domen Koder</title>
			<link rel="canonical" href="https://domenkoder.com/404" />
			<div className="flex flex-col items-center justify-center text-center p-4 flex-grow">
				<h1 className="text-8xl font-bold mb-4">404</h1>
				<p className="text-4xl mb-6">Page not found</p>
				<p className="text-2xl mb-6">
					The page ran away. Probably scared of your code ;)
				</p>
				<a href="/" className="text-blue-500 hover:underline text-xl">
					Go back home
				</a>
			</div>
		</>
	);
}

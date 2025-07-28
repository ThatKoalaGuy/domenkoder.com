import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type PostMeta = {
	title: string;
	date: string;
	summary?: string;
	[key: string]: unknown;
};

type Post = {
	slug: string;
	meta: PostMeta;
	Component: React.ComponentType;
};

export default function Blog() {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const modules = import.meta.glob('../posts/*.mdx');

		(async () => {
			const loadedPosts = await Promise.all(
				Object.entries(modules).map(async ([path, resolver]) => {
					const mod = (await resolver()) as {
						meta: PostMeta;
						default: React.ComponentType;
					};
					return {
						slug: path.split('/').pop()?.replace('.mdx', '') ?? '',
						meta: mod.meta,
						Component: mod.default,
					};
				})
			);

			loadedPosts.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
			setPosts(loadedPosts);
		})();
	}, []);

	return (
		<>
			<title>Blog | Domen Koder</title>
			<link rel="canonical" href="https://domenkoder.com/blog" />
			<meta
				name="description"
				content="Explore articles by Domen Koder on programming, web development, and tech insights — a blog for curious developers."
			/>
			<main className="flex justify-center px-4 py-6 flex-grow">
				<div className="w-full max-w-2xl">
					<h1 className="text-5xl font-bold mb-6 text-center text-white">
						Blog
					</h1>
					<ul className="space-y-6">
						{posts.map(({ slug, meta }) => (
							<li key={slug}>
								<Link
									to={`/blog/${slug}`}
									className="block p-5 rounded-xl bg-zinc-700/50 hover:bg-zinc-600/60 transition-colors"
								>
									<div className="flex items-center justify-between gap-4">
										<h2 className="text-2xl font-semibold text-green-300 hover:underline flex-shrink max-w-[70%]">
											{meta.title}
										</h2>
										<h2 className="text-green-300 text-sm sm:text-base flex-shrink-0 whitespace-nowrap">
											{meta.date}
										</h2>
									</div>

									<p className="text-green-400 mt-2">
										{meta.summary ?? 'No summary available.'}
									</p>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</main>
		</>
	);
}

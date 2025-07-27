import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import Giscus from '@giscus/react';

type PostMeta = {
	title: string;
	date: string;
	summary: string;
	[key: string]: unknown;
	author: string;
};

type Post = {
	slug: string;
	meta: PostMeta;
	Component: React.ComponentType;
};

export default function Post() {
	const { slug } = useParams<{ slug: string }>();
	const [post, setPost] = useState<Post | null>(null);

	useEffect(() => {
		if (!slug) return;

		const modules = import.meta.glob('../posts/*.mdx');

		(async () => {
			for (const [path, resolver] of Object.entries(modules)) {
				if (path.endsWith(`${slug}.mdx`)) {
					const mod = (await resolver()) as {
						meta: PostMeta;
						default: React.ComponentType;
					};
					setPost({
						slug,
						meta: mod.meta,
						Component: mod.default,
					});
					break;
				}
			}
		})();
	}, [slug]);

	if (!post) return <p className="text-center mt-10">Loading post...</p>;

	const { meta, Component } = post;

	return (
		<>
			<SEO
				title={meta.title ?? ''}
				description={meta.summary ?? ''}
				slug={slug ?? ''}
			/>
			<article className="flex justify-center px-4 py-10 flex-grow">
				<div className="max-w-4xl w-full">
					<div className="flex flex-col sm:flex-row justify-between items-end mb-8 gap-4">
						<h1 className="text-4xl sm:text-6xl m-0 text-green-400 font-medium">
							{meta.title}
						</h1>
						<div className="text-sm sm:text-right">
							<h2 className="text-green-400 text-lg m-0 leading-none whitespace-nowrap">
								{meta.date}
							</h2>
							<h2 className="text-xl font-medium m-0 leading-none whitespace-nowrap text-green-400">
								By: {meta.author}
							</h2>
						</div>
					</div>

					<div className="prose prose-invert max-w-4xl text-lg">
						<Component />
					</div>

					<p className="mt-10">
						<Link to="/blog" className="text-green-400 hover:underline">
							← Back to Blog
						</Link>
					</p>
				</div>
			</article>
			<div className="flex justify-center w-full">
				<div className="max-w-4xl w-full">
					<Giscus
						repo="ThatKoalaGuy/domenkoder.com"
						repoId="R_kgDOPL6q1Q"
						category="Giscuss"
						categoryId="DIC_kwDOPL6q1c4CtebQ"
						mapping="pathname"
						strict="0"
						reactionsEnabled="1"
						emitMetadata="0"
						inputPosition="top"
						theme="noborder_dark"
						lang="en"
						loading="lazy"
					/>
				</div>
			</div>
		</>
	);
}

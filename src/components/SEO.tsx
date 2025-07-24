import { useEffect } from 'react';

type SEOProps = {
	title: string;
	description: string;
	slug: string;
};

export function SEO({ title, description, slug }: SEOProps) {
	useEffect(() => {
		document.title = `${title} | Domen Koder`;
		// You can also update meta description here if needed
	}, [title]);

	return (
		<>
			<meta name="description" content={description} />
			<link rel="canonical" href={`https://domenkoder.com/blog/${slug}`} />
		</>
	);
}

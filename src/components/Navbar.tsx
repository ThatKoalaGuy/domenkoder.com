import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [showNavbar, setShowNavbar] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Hide on scroll down, show on scroll up
			if (currentScrollY > lastScrollY && currentScrollY > 50) {
				setShowNavbar(false);
			} else {
				setShowNavbar(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	return (
		<nav
			className={`bg-zinc-800 text-green-400 px-6 py-4 shadow-md fixed w-full top-0 z-50 transition-transform duration-300 ${
				showNavbar ? 'translate-y-0' : '-translate-y-full'
			}`}
		>
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				<div className="text-2xl font-bold">
					<Link to="/" className="hover:text-white transition">
						Domen Koder
					</Link>
				</div>

				{/* Desktop links */}
				<div className="hidden md:flex space-x-6">
					<Link to="/blog" className="hover:text-white transition">
						Blog
					</Link>
					<Link to="/portfolio" className="hover:text-white transition">
						Portfolio
					</Link>
					<Link to="/skills" className="hover:text-white transition">
						Skills
					</Link>
					<Link to="/about" className="hover:text-white transition">
						About me
					</Link>
				</div>

				{/* Mobile menu button */}
				<button
					aria-label="menu"
					className="md:hidden focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</div>

			{/* Mobile dropdown */}
			<div
				className={`md:hidden absolute top-full right-0 w-48 bg-zinc-900 text-green-400 rounded-md shadow-lg transform transition-all duration-300 origin-top-right ${
					isOpen
						? 'opacity-100 scale-100 translate-x-0'
						: 'opacity-0 scale-95 translate-x-4 pointer-events-none'
				}`}
			>
				<div className="flex flex-col items-end px-4 py-4 space-y-2 text-right">
					<Link
						to="/blog"
						className="hover:text-white transition"
						onClick={() => setIsOpen(false)}
					>
						Blog
					</Link>
					<Link
						to="/portfolio"
						className="hover:text-white transition"
						onClick={() => setIsOpen(false)}
					>
						Portfolio
					</Link>
					<Link
						to="/skills"
						className="hover:text-white transition"
						onClick={() => setIsOpen(false)}
					>
						Skills
					</Link>
					<Link
						to="/about"
						className="hover:text-white transition"
						onClick={() => setIsOpen(false)}
					>
						About me
					</Link>
				</div>
			</div>
		</nav>
	);
}

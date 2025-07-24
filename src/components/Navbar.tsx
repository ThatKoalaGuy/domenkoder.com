import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-zinc-800 text-green-400 px-6 py-4 shadow-md relative z-50">
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

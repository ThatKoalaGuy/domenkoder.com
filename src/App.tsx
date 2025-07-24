import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
	return (
		<div className="bg-zinc-800 flex flex-col min-h-screen text-green-400 font-heading">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:slug" element={<Post />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/about" element={<About />} />

				{/* 404 page - wildcard route */}
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import ShowList from './components/ShowList';

const App = () => {

	const [shows, setShows] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [showsPerPage] = useState(50);


	useEffect(() => {
		const getShows = async () => {
			setLoading(true);
			const res = await axios.get('http://api.tvmaze.com/shows');
			setShows(res.data);
			setLoading(false);
		}

		getShows()
	}, []);


	const lastShowIndex = currentPage * showsPerPage;
	const firstShowIndex = lastShowIndex - showsPerPage;
	const currentShow = shows.slice(firstShowIndex, lastShowIndex);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
	const nextPage = () => setCurrentPage(prev => prev + 1);
	const prevPage = () => setCurrentPage(prev => prev - 1);

	return (
		<div className="container mt-5">
			<ShowList shows={currentShow} loading={loading} />
			<Pagination
				showsPerPage={showsPerPage}
				totalShows={shows.length}
				paginate={paginate}
				nextPage={nextPage}
				prevPage={prevPage}
			/>
		</div>
	);
}

export default App;

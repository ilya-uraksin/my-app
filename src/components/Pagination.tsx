import { FC } from 'react';

interface PaginationProps {
	showsPerPage: number,
	totalShows: number,
	paginate: any,
	nextPage: any,
	prevPage: any
}

const Pagination: FC<PaginationProps> = ({ showsPerPage, totalShows, paginate, nextPage, prevPage }) => {

	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalShows / showsPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<div className="justify-content-center">
			<ul className="pagination justify-content-center">
				<li className="page-item"><a className="page-link" href="!#" onClick={prevPage}>Previous</a></li>
				{
					pageNumbers.map(number => (
						<li key={number} className="page-item">
							<a href="!#" className="page-link" onClick={() => paginate(number)}>
								{number}
							</a>
						</li>
					))
				}
				<li className="page-item"><a className="page-link" href="!#" onClick={nextPage}>Next</a></li>
			</ul>
		</div>
	)

}

export default Pagination;
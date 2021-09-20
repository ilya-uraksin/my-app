import { FC } from 'react';

interface PaginationProps {
	showsPerPage: number,
	totalShows: number,
	paginate: any
}

const Pagination: FC<PaginationProps> = ({ showsPerPage, totalShows, paginate }) => {

	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalShows / showsPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<div>
			<ul className="pagination justify-content-center">
				{
					pageNumbers.map(number => (
						<li key={number} className="page-item">
							<a href="!#" className="page-link" onClick={() => paginate(number)}>
								{number}
							</a>
						</li>
					))
				}
			</ul>
		</div>
	)

}

export default Pagination;
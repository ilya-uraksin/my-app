import { FC } from 'react';
import { IShow } from '../types/types';
import ShowItem from './ShowItem';



interface ShowListProps {
	shows: IShow[],
	loading: boolean
}

const ShowList: FC<ShowListProps> = ({ shows, loading }) => {
	return (
		<table className="table table-striped table-hover">
			<thead>
				<tr>
					<th scope="col">Обложка</th>
					<th scope="col">Название</th>
					<th scope="col">Жанр</th>
					<th scope="col">Длительность</th>
					<th scope="col">Рейтинг</th>
				</tr>
			</thead>
			<tbody>
				{shows.map(show =>
					<ShowItem key={show.id} show={show} />
				)}
			</tbody>
		</table>
	)
};

export default ShowList;
import { FC } from 'react';
import { IShow } from '../types/types';

interface ShowItemProps {
	show: IShow;
}

const ShowItem: FC<ShowItemProps> = ({ show }) => {

	return (
		<tr>
			<td><img src={show.image.medium} className="image" alt="" /></td>
			<td>{show.name}</td>
			<td>{show.genres.join(', ')}</td>
			<td>{show.runtime} min</td>
			<td>{show.rating.average}</td>
		</tr>
	)
}

export default ShowItem;
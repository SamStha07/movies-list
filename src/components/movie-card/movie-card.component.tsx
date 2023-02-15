import React, { FC, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IMovie } from '../../types/movie.types';
import ImgWithFallback from '../image/image.component';
import Modal from '../modal/modal.component';
import DirectorModalContent from './director-modal-content.component';

interface IMovieProps {
	data: IMovie;
}

const MovieCard: FC<IMovieProps> = ({ data }) => {
	const { slug } = useParams();
	const [open, setOpen] = useState(false);

	const handleToggle = () => {
		setOpen((prev) => !prev);
	};

	/**
	 * if detail page slug and route slug is equal then will redirect to homepage
	 * if not will redireact to movie details page
	 */
	const redirectLink = slug === data.slug ? '/' : `/${data.slug}`;

	return (
		<>
			<div
				className={`flex gap-4 hover:shadow-lg ${
					slug ? '' : 'hover:shadow-lg'
				}`}
			>
				<Link to={redirectLink}>
					<ImgWithFallback
						altName={data.name}
						fallback={data.image.large}
						src={data.image.small}
						className="w-[152px] h-[128px] object-cover cursor-pointer"
						loading="lazy"
					/>
				</Link>
				<div className="mt-[10px] flex-1">
					<Link to={redirectLink}>
						<h3 className="text-2xl font-bold capitalize leading-none">
							{data.name}
						</h3>
					</Link>
					<span
						data-testid="category-element"
						className="block text-grayColor text-base capitalize mt-2 mb-1 leading-normal"
					>
						{data.category}
					</span>
					<button
						className="text-base capitalize"
						type="button"
						onClick={() => setOpen(true)}
					>
						{data.director.name}
					</button>
				</div>
			</div>
			{open && (
				<Modal onToggle={handleToggle} title={data.director.name}>
					<DirectorModalContent
						image={data.director.image}
						bio={data.director.bio}
						name={data.director.name}
					/>
				</Modal>
			)}
		</>
	);
};

export default MovieCard;

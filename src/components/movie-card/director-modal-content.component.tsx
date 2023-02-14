import React, { FC } from 'react';
import { IDirector } from '../../types/movie.types';

const DirectorModalContent: FC<IDirector> = ({ image, bio }) => (
	<div>
		<img src={image} alt="" className="w-full h-[144px] object-cover" />
		<p className="text-sm mt-5">{bio}</p>
	</div>
);

export default DirectorModalContent;

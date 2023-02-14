import React, { FC } from 'react';
import { IDirector } from '../../types/movie.types';
import ImgWithFallback from '../image/image.component';

const DirectorModalContent: FC<IDirector> = ({ image, name, bio }) => (
	<div>
		<ImgWithFallback
			altName={name}
			fallback={image.large}
			src={image.small}
			className="w-full h-[144px] object-cover"
			loading="lazy"
		/>
		<p className="text-sm mt-5">{bio}</p>
	</div>
);

export default DirectorModalContent;

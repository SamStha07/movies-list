import React, { FC } from 'react';

interface IImageProps {
	src: string;
	fallback: string;
	type?: string;
	altName: string | undefined;
	className: string;
	loading: 'eager' | 'lazy';
}

const ImgWithFallback: FC<IImageProps> = ({
	src,
	fallback,
	type = 'image/webp',
	altName,
	className,
	loading,
	...rest
}) => (
	<picture>
		<source srcSet={src} type={type} />
		<img
			src={fallback}
			alt={`${altName}-img`}
			aria-label={altName}
			className={className}
			loading={loading}
			{...rest}
		/>
	</picture>
);

ImgWithFallback.defaultProps = {
	type: 'image/webp',
};

export default ImgWithFallback;

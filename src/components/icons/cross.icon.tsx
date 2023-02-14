import React, { FC } from 'react';

interface ICrossIconProps {
	handleClose: () => void;
}

const CrossIcon: FC<ICrossIconProps> = ({ handleClose }) => (
	<button onClick={handleClose} type="button">
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.66653 12.0001L0.482876 2.81648C-0.160959 2.17264 -0.160959 1.12693 0.482876 0.483091C1.12696 -0.16099 2.17242 -0.16099 2.8165 0.483091L11.9999 9.66651L21.1836 0.482846C21.8274 -0.16099 22.8731 -0.16099 23.5169 0.483091C24.161 1.12693 24.161 2.17264 23.5169 2.81648L14.3335 12.0001L23.5169 21.1836C24.161 21.8274 24.161 22.8731 23.5169 23.5169C22.8731 24.161 21.8274 24.161 21.1836 23.5169L11.9999 14.3335L2.8165 23.5169C2.17242 24.161 1.12696 24.161 0.482876 23.5169C-0.160959 22.8731 -0.160959 21.8274 0.482876 21.1836L9.66653 12.0001Z"
				fill="black"
			/>
		</svg>
	</button>
);

export default CrossIcon;

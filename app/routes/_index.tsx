import { Link } from '@remix-run/react';

export const meta = () => [
	{
		title: 'Remix DnB Stack',
	},
	{
		charset: 'utf-8',
	},
	{
		name: 'viewport',
		content: 'width=device-width, initial-scale=1.0',
	},
];

const Index = () => (
	<div className="flex h-screen w-screen flex-col items-center justify-start pt-20 text-center">
		<h2>A Writer</h2>
		<h1>JJ Vega</h1>
	</div>
);

export default Index;

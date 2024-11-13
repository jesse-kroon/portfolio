import type { IProject } from '../../components/Projects/interfaces';

const liveUrlPrefix = 'https://jesse-kroon.github.io';
const githubPrefix = 'https://github.com/jesse-kroon';
export const WebAppProjects: IProject[] = [];

export const APIProjects: IProject[] = [];

export const FMComponentProjects: IProject[] = [
	{
		title: 'Four-Card Feature Section',
		url: `${liveUrlPrefix}/fm-four-card-feature-section`,
		githubUrl: `${githubPrefix}/fm-four-card-feature-section`,
		description: 'A simple component created using CSS grid.',
		imageSrc: '/images/project_previews/fm-four-card-feature-section.png',
		technologies: ['HTML', 'CSS', 'CSS Grid']
	},
	{
		title: 'Product Preview Card',
		url: `${liveUrlPrefix}/fm-product-preview-card`,
		githubUrl: `${githubPrefix}/fm-product-preview-card`,
		description: 'A responsive product showcase card.',
		imageSrc: '/images/project_previews/fm-product-preview-card.png',
		technologies: ['HTML', 'CSS', 'FlexBox', 'Responsive Design']
	}
];

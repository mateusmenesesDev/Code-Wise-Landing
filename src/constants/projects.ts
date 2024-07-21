import type { Project } from '~/types/Project.type';

export const projects: Project[] = [
	{
		title: 'Personal Blog',
		description:
			'Build a full-stack web application that allows users to create and manage their own personal blogs. This project will cover front-end development with Nextjs and a Content Management System (CMS) like Strapi, Contentful, or Sanity.',
		features: [
			'User authentication and authorization',
			'CRUD operations for blog posts and comments',
			'Headless cms integration (Strapi, Contentful, Sanity, etc.)',
			'SEO optimization and social media sharing',
			'Performance optimization and caching strategies',
			'Analytics and tracking integration'
		],
		image: {
			src: require('/public/images/projects/blog.png'),
			alt: 'Personal Blog'
		}
	},
	{
		title: 'E-commerce Platform',
		description:
			'Create an e-commerce platform that allows users to browse products, add them to the cart, and complete the purchase. This project will cover front-end development with a modern framework, back-end API development, and integration of the two.',
		features: [
			'Product catalog with categories and filters',
			'User authentication and authorization',
			'Shopping cart functionality with checkout process',
			'Payment gateway integration (Stripe, PayPal, etc.)',
			'Order management and tracking',
			'Inventory management and restocking',
			'Sales dashboard and reporting'
		],
		image: {
			src: require('/public/images/projects/ecommerce.png'),
			alt: 'E-commerce Platform'
		}
	},
	{
		title: 'Customer Relationship Management (CRM)',
		description:
			'Develop a CRM system that allows businesses to manage customer relationships, track interactions, and analyze data. This project will cover front-end development with a modern framework, back-end API development, and integration of the two.',
		features: [
			'Customer profiles with contact information and history',
			'Lead management and sales pipeline tracking',
			'Task and appointment scheduling',
			'Email marketing integration',
			'Reporting and analytics dashboard',
			'Customizable fields and workflows'
		],
		image: {
			src: require('/public/images/projects/crm.png'),
			alt: 'Customer Relationship Management (CRM)'
		}
	},
	{
		title: 'Learning Management System (LMS)',
		description:
			'Build an LMS that allows educators to create courses, manage students, and track their progress. This project will cover front-end development with a modern framework, back-end API development, and integration of the two.',
		features: [
			'Course creation with modules and lessons',
			'Student enrollment and progress tracking',
			'Quiz and assignment creation',
			'Discussion forums and messaging',
			'Grading and assessment tools',
			'Analytics and reporting'
		],
		image: {
			src: require('/public/images/projects/lms.png'),
			alt: 'Learning Management System (LMS)'
		}
	},
	{
		title: 'Social Media App',
		description:
			'Develop a social media application that allows users to create posts, follow other users, and interact with the content. This project will cover front-end development with a modern framework, back-end API development, and integration of the two.',
		features: [
			'User authentication and authorization',
			'Post creation and interaction (likes, comments, shares)',
			'User profile with followers and following',
			'Real-time notifications and messaging',
			'Content moderation and reporting',
			'Analytics and engagement tracking'
		],
		image: {
			src: require('/public/images/projects/socialmedia.png'),
			alt: 'Social Media App'
		}
	}
	// {
	//   title: 'Portfolio Website',
	//   description:
	//     'Create a personal portfolio website to showcase your projects, skills, and experience. This project will cover front-end development with a modern framework, responsive design, and deployment to a hosting platform.',
	//   features: [
	//     'Custom design with animations and transitions',
	//     'Project showcase with descriptions and images',
	//     'Skills and experience sections',
	//     'Contact form and social media links',
	//     'SEO optimization and performance improvements',
	//   ],
	//   image: require('/public/images/projects/blog.png'),
	// },
	// {
	//   title: 'Chat Application',
	//   description:
	//     'Develop a real-time chat application that allows users to send messages, create channels, and join group conversations. This project will cover front-end development with a modern framework, back-end API development, and integration of the two.',
	//   features: [
	//     'User authentication and authorization',
	//     'Real-time messaging with WebSockets',
	//     'Channel creation and management',
	//     'Group chat functionality with multiple participants',
	//     'Message history and notifications',
	//   ],
	//   image: require('/public/images/projects/blog.png'),
	// },
];

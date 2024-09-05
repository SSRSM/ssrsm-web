import { House, LayoutGrid, Newspaper, UsersRound } from "lucide-react";

type NavigationItem = {
	label: string;
	href: string;
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const nav: {
	publicItems: NavigationItem[];
	authItems: NavigationItem[];
	roleItems: Record<string, NavigationItem[]>;
} = {
	publicItems: [
		{
			label: 'Дома',
			href: '/',
			icon: House,
		},
		{
			label: 'За нас',
			href: '/about',
			icon: UsersRound,
		},
		{
			label: 'Активности',
			href: '/news',
			icon: Newspaper,
		},
	],
	authItems: [
		{
			label: 'Портал',
			href: '/app/',
			icon: LayoutGrid,
		},
	],
	roleItems: {}
};
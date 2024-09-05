import {
	SignedIn,
	SignedOut,
	UserButton
} from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { LogIn, Menu } from 'lucide-react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import GraduateCapIcon from '@/components/icons/graduate-cap';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { nav } from '@/config/nav';

export async function Navbar() {
	const currUser = await currentUser();
	console.log(currUser);

	let navigationItems = nav.publicItems;

	if (currUser) {
		navigationItems = [...nav.publicItems, ...nav.authItems];
	}

	return (
		<div className='fixed top-0 left-0 z-40 w-full h-navbar bg-background/70 border backdrop-blur-[4px] flex items-center justify-center'>
			<div className="w-full h-full px-4 sm:px-6 py-3 container max-w-screen-lg grid grid-cols-[1fr_auto_auto] lg:grid-cols-[1fr_auto_1fr] gap-3 items-center">
				<Link href='/' className='flex-1 flex flex-row gap-3 items-center'>
					<GraduateCapIcon className='size-9 sm:size-11' />
					<span className='text-xl sm:text-2xl font-bold'>ССРСМ</span>
				</Link>

				<div className="lg:flex-1 h-full">
					<NavigationMenu className='hidden lg:flex items-center justify-center h-full'>
						<NavigationMenuList className='space-x-6'>
							{navigationItems.map((item) => (
								<NavigationMenuItem key={item.label}>
									<NavigationMenuLink className={twMerge(navigationMenuTriggerStyle(), 'shadow-glow')} asChild>
										<Link href={item.href}>
											<item.icon className='size-6 mr-2' />{item.label}
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>

					<DropdownMenu>
						<div className="lg:hidden h-full">
							<DropdownMenuTrigger asChild>
								<Button variant='outline' className='h-full aspect-square p-3'>
									<Menu className='size-full' />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className='min-w-[17ch]' align='end' alignOffset={currUser ? -20 : 0}>
								{navigationItems.map((item) => (
									<DropdownMenuItem key={item.label} asChild>
										<Button variant='ghost' className='w-full flex items-center justify-start py-3 h-auto' asChild>
											<Link href={item.href}>
												<item.icon className='size-6 mr-2' />{item.label}
											</Link>
										</Button>
									</DropdownMenuItem>
								))}

								<SignedOut>
									<DropdownMenuItem asChild>
										<Button variant='outline' className='w-full flex items-center justify-start h-auto' asChild>
											<Link href='/sign-in'>
												<LogIn className='size-6 mr-2' />Најави се
											</Link>
										</Button>
									</DropdownMenuItem>
								</SignedOut>
							</DropdownMenuContent>
						</div>
					</DropdownMenu>
				</div>

				<SignedIn>
					<div className="w-full h-full flex items-center justify-end">
						<UserButton appearance={{
							elements: {
								avatarBox: {
									width: '3rem',
									height: '3rem',
								}
							}
						}}>
						</UserButton>
					</div>
				</SignedIn>
			</div>
		</div>
	);
}
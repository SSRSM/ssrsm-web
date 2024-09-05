import { type VariantProps, cva } from "class-variance-authority";

const underlineVariants = cva(
	'absolute -bottom-1 -left-[2.5%] w-[105%] h-1 border-0',
	{
		variants: {
			variant: {
				primary: 'bg-primary',
				secondary: 'bg-secondary',
			}
		},
		defaultVariants: {
			variant: 'primary',
		},
	}
);

export interface TextUnderlinedProps
	extends React.HTMLAttributes<HTMLDivElement>,
	VariantProps<typeof underlineVariants> {
}

export function TextUnderlined({
	children,
	variant,
	...props
}: TextUnderlinedProps) {
	return (
		<div className="relative w-fit" {...props}>
			{children}
			<div className={underlineVariants({ variant })} />
		</div>
	);
}
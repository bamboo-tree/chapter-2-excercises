import { ComponentProps, MouseEventHandler } from "react";
import { cn } from "../../utils/cn";

type Props = {
	label: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
} & ComponentProps<"button">;

export const Button = ({ label, className, onClick, ...rest }: Props) => {
	return (
		<button
			onClick={onClick}
			className={cn("text-black bg-yellow-500 px-4 py-2 rounded-lg", className)}
			{...rest}
		>
			{label}
		</button>
	);
};

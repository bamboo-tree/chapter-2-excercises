import { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Props = {
	label: string;
} & ComponentProps<"h1">;

export const Header = ({ label, className }: Props) => {
	return (
		<h1 className={cn("text-blue-400 font-bold font-size-xl", className)}>
			{label}
		</h1>
	);
};

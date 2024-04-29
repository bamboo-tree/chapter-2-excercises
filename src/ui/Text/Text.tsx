import { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Props = {
	label: string;
} & ComponentProps<"p">;

export const Text = ({ label, className }: Props) => {
	return (
		<p className={cn("text-pink-500 font-bold text-xl", className)}>{label}</p>
	);
};

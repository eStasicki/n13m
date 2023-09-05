import clsx from "clsx";

type ContainerProps = {
	children: React.ReactNode;
	className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
	return (
		<div className={clsx("mx-auto max-w-7xl px-2 sm:px-4 lg:px-8", className)}>{children}</div>
	);
};
export { Container };

import clsx from "clsx";
import Link from "next/link";

type HeaderLinkProps = {
	label: string;
	url: string;
};

const HeaderLink = ({ url, label }: HeaderLinkProps) => {
	return (
		<Link href={url} legacyBehavior>
			<a
				className={clsx(
					"flex h-full w-full min-w-[3rem] items-center justify-center px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700",
				)}
			>
				{label}
			</a>
		</Link>
	);
};
export { HeaderLink };

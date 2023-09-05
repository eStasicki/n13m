import { Container } from "../../atoms/container";
import { HeaderLink } from "./headerLink";

type HeaderProps = {
	mainMenuItems: HeaderMainMenuItems[];
};

type HeaderMainMenuItems = {
	label: string;
	url: string;
};

const Header = ({ mainMenuItems }: HeaderProps) => {
	return (
		<header className="sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg">
			<Container>
				<div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
					<nav className="scrolling-touch scroll-shadows -mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
						<ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
							{mainMenuItems.map(({ label, url }) => {
								return (
									<li key={label} className="first:pl-4 last:pr-4 lg:px-0">
										<HeaderLink label={label} url={url} />
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			</Container>
		</header>
	);
};
export { Header };

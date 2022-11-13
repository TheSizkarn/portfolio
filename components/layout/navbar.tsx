import {Header, Logo, Nav, Theme} from "./styles/navbar";
import Link from "next/link";
import LogoInline from "../../public/logo-texte-inline.svg";
import Sun from "../../public/sun.svg";
import Moon from "../../public/moon.svg";

type Props = {
	toggleTheme: any
	isDarkTheme: boolean
}

const navbar = ({toggleTheme, isDarkTheme}: Props) => {
	return (
		<Header>
			<div className="header-wrapper">
				<div className="header-left">
					<Logo>
						<Link href="/">
							<LogoInline/>
						</Link>
					</Logo>
				</div>
				<div className="header-right">
					<Nav>
						<ul>
							<li>
								<Link href='/'>Accueil</Link>
							</li>
							<li>
								<Link href='#about'>À propos</Link>
							</li>
							<li>
								<Link href='#projets'>Réalisations</Link>
							</li>
							<li>
								<Link href='#contact'>Contact</Link>
							</li>
						</ul>
					</Nav>
					<Theme onClick={toggleTheme}>
            {isDarkTheme ?
							<Sun/> :
							<Moon/>}
          </Theme>
				</div>
			</div>
		</Header>
	)
}

export default navbar;
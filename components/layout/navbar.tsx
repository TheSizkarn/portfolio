import {Header, Logo, Nav} from "./styles/navbar";
import Link from "next/link";
import LogoInline from "../../public/logo-texte-inline.svg";

const navbar = () => {
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
				</div>
			</div>
		</Header>
	)
}

export default navbar;
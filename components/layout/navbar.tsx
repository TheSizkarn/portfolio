import {useState, useRef} from "react";
import {Header, Logo, Nav, Burger, Cross} from "./styles/navbar";
import Link from "next/link";
import LogoInline from "../../public/logo-texte-inline.svg";
import BurgerSvg from "../../public/svg/menu.svg";
import CrossSvg from "../../public/svg/cross.svg";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const refOpenNav = useRef();
  
  useOnClickOutside(refOpenNav, () => setOpenNav(false));
  
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
					<Nav className={openNav ? 'open' : ''}>
						<ul ref={refOpenNav}>
              <Cross onClick={() => setOpenNav(false)}>
                <CrossSvg />
              </Cross>
							<li>
								<Link href='/'>Accueil</Link>
							</li>
							<li>
								<Link href='#about'>À propos</Link>
							</li>
              <li>
                <Link href='#services'>Services</Link>
              </li>
							<li>
								<Link href='#projets'>Réalisations</Link>
							</li>
							<li>
								<Link href='#contact'>Contact</Link>
							</li>
						</ul>
					</Nav>
          <Burger onClick={() => setOpenNav(true)}>
            <BurgerSvg/>
          </Burger>
				</div>
			</div>
		</Header>
	)
}

export default navbar;
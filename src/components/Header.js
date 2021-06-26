import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {appData} from "../data";
import {Color} from "../styled/Theme";
import cn from 'classnames';
import {Link} from 'react-scroll'

const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => {
            const scrollTop = window.scrollY || window.pageYOffset;
            setScrolled(scrollTop > 500);
        };
        window.addEventListener('scroll', handler)
        return () => {
            window.removeEventListener('scroll', handler);
        }
    }, [])

    return (
        <Container className={cn({scrolled})}>
            <Logo>{appData.header.logo}</Logo>
            <Nav>
                {
                    appData.header.menu.map((item) => (
                        <NavItem key={item.name}>
                            <Link activeClass="isActive"
                                  to={item.to}
                                  spy={true}
                                  smooth={true}
                                  hashSpy={true}
                                  offset={-70}
                                  duration={500}
                                  ignoreCancelEvents={false}
                            >
                                {item.name}
                            </Link>
                        </NavItem>
                    ))
                }
            </Nav>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: 70px;
  transition: 0.4s;

  &.scrolled {
    background: #fff;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.15);
  }
`;

const Logo = styled.div`
  font-size: 20px;
  color: #fff;
  transition: 0.4s;
  
  .scrolled & {
    color: #111;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  a {
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin: 0 10px;
    height: 70px;
    color: #fff;
    font-size: 16px;
    text-transform: capitalize;
    cursor: pointer;
    transition: 0.4s;

    .scrolled & {
      color: #111;
    }

    &:hover {
      color: ${Color.Primary}
    }
  }
`;

export default Header;
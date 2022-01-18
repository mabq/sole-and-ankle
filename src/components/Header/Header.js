import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => (
    // Our site features two visual headers, but they should be
    // grouped semantically as a single header.
    <header>
        <SuperHeader />
        <MainHeader>
            <SpecialSpacer>
                <AdjustedLogo />
            </SpecialSpacer>
            <Nav>
                <NavLink href="/sale">Sale</NavLink>
                <NavLink href="/new">New&nbsp;Releases</NavLink>
                <NavLink href="/men">Men</NavLink>
                <NavLink href="/women">Women</NavLink>
                <NavLink href="/kids">Kids</NavLink>
                <NavLink href="/collections">Collections</NavLink>
            </Nav>
            <SpecialSpacer />
        </MainHeader>
    </header>
);

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 19px 32px;
    border-bottom: 1px solid ${COLORS.gray[300]};
    /* TODO: adjuts to mobile */
`;

const AdjustedLogo = styled(Logo)`
    display: block;
    padding-right: 112px;
`;

const Nav = styled.nav`
    display: flex;
    gap: 48px;
    padding: 0 24px;
`;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
        color: ${COLORS.secondary};
    }
`;

const SpecialSpacer = styled.div`
    flex: 1;
`;

export default Header;

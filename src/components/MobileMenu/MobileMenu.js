/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <StyledDialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <StyledDialogContent>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={1} />
        </CloseButton>
        
        <MenuNav>
          <NavLink active href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </MenuNav>

        <MenuFooter>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </MenuFooter>
      </StyledDialogContent>
    </StyledDialogOverlay>
  );
};

export const StyledDialogOverlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
`;

export const StyledDialogContent = styled(DialogContent)`
  --spacing: 32px;

  position: absolute;
  background: ${COLORS.white};
  top: 0;
  right: 0;
  bottom: 0;
  width: 20rem;
  padding: var(--spacing);

  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: var(--spacing);
  right: 22px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${props => props.active? COLORS.secondary : COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  font-size: calc(18 / 16 * 1rem);
`;

export const MenuNav = styled.nav`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-size: calc(14 / 16 * 1rem);
`;

export const MenuFooter = styled.footer`
  position: absolute;
  bottom: var(--spacing);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export default MobileMenu;

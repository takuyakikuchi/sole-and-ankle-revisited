/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { WEIGHTS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <StyledDialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <StyledDialogContent area-label="Mobile menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={1} />
          <VisuallyHidden>Close menu</VisuallyHidden>
        </CloseButton>

        <Spacer />
        
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
  background: var(--color-backdrop);
`;

export const StyledDialogContent = styled(DialogContent)`
  --spacing: 32px;

  position: absolute;
  background: white;
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

export const Spacer = styled.div`
  flex: 1;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ active }) => (active ? 'var(--color-secondary)' : 'var(--color-gray-900)')};
  font-weight: ${WEIGHTS.medium};
  font-size: calc(18 / 16 * 1rem);
`;

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-size: calc(14 / 16 * 1rem);
`;

export const MenuFooter = styled.footer`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`;

export default MobileMenu;

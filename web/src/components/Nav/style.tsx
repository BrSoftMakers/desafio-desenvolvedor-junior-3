import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 80px;
  background: ${theme.colors.surface_primary};
  font-size: 18px;

  .logo {
    width: 200px;
  }
  @media (min-width: ${theme.breakpoints.desktop}) {
    padding: 0 150px;
  }
`;

export const NavContainer = styled.nav`
  div {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  .newPost,
  .home {
    color: ${theme.colors.text_primary};
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    padding: 15px 20px;
    letter-spacing: 1px;
    transition: all 0.2s linear;
    border-radius: ${theme.borderRadius.md};

    &:hover {
      background: ${theme.colors.background};
    }
  }
  .home {
    border-radius: 0;
    border-right: 1px solid ${theme.colors.stroke};
    &:hover {
      background: none;
    }
  }
  button {
    background: none;
    font-size: 18px;
    padding: 15px 0;
    letter-spacing: 1px;
    border-left: 1px solid ${theme.colors.stroke};
    transition: all 0.2s linear;
    width: 100px;

    &:active {
      transform: scale(0.9);
    }
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }
  .ham-box {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 24px;
  }
  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: 30px;
    height: 2px;
    border-radius: 4px;
    background-color: ${theme.colors.text_primary};
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${({ menuOpen }: { menuOpen: boolean }) =>
      menuOpen ? "0.12s" : "0s"};
    transform: rotate(${({ menuOpen }) => (menuOpen ? "225deg" : "0deg")});
    transition-timing-function: cubic-bezier(
      ${({ menuOpen }) =>
        menuOpen ? "0.215, 0.61, 0.355, 1" : "0.55, 0.055, 0.675, 0.19"}
    );
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: 30px;
      height: 2px;
      border-radius: 4px;
      background-color: ${theme.colors.text_primary};
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${({ menuOpen }) => (menuOpen ? "100%" : "120%")};
      top: ${({ menuOpen }) => (menuOpen ? "0" : "-10px")};
      opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) =>
        menuOpen ? "var(--ham-before-active)" : "var(--ham-before)"};
    }
    &:after {
      width: ${({ menuOpen }) => (menuOpen ? "100%" : "80%")};
      bottom: ${({ menuOpen }) => (menuOpen ? "0" : "-10px")};
      transform: rotate(${({ menuOpen }) => (menuOpen ? "-90deg" : "0")});
      transition: ${({ menuOpen }) =>
        menuOpen ? "var(--ham-after-active)" : "var(--ham-after)"};
    }
  }
`;

export const Sidebar = styled.aside`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 100px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: ${theme.colors.background};
    box-shadow: -10px 0px 30px -15px rgba(39, 39, 42, 0.7);
    z-index: 9;
    transform: translateX(
      ${({ menuOpen }: { menuOpen: boolean }) => (menuOpen ? 0 : 100)}vw
    );
    visibility: ${({ menuOpen }) => (menuOpen ? "visible" : "hidden")};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }
    .newPost,
    .home {
      color: ${theme.colors.text_primary};
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 22px;
      padding: 15px 20px;
      letter-spacing: 1px;
    }
    button {
      background: none;
      font-size: 22px;
      padding: 15px 20px;
      letter-spacing: 1px;
      /* width: 100px; */

      &:active {
        transform: scale(0.9);
      }
    }
  }
`;

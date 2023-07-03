import { TopNavbar } from "./topnavbar";
import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';
import React from "react";
import { SideMenu } from './sidemenu';
import { padding } from "@mui/system";
import { Footer } from "./footer";

const SIDE_NAV_WIDTH = 0;

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  // [theme.breakpoints.up('lg')]: {
  //   paddingLeft: SIDE_NAV_WIDTH
  // }
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
  padding:'0'
});

export const Layout = (props) => {
  const { children } = props;
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(false);

  const handlePathnameChange = useCallback(
    () => {
      if (openNav) {
        setOpenNav(false);
      }
    },
    [openNav]
  );

  useEffect(
    () => {
      handlePathnameChange();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]
  );
  return (
    <>
      <TopNavbar onNavOpen={() => setOpenNav(true)} />
      <SideMenu
        onClose={() => setOpenNav(false)}
        open={openNav}
      />
      <LayoutRoot>
        <LayoutContainer>
          {children}
        </LayoutContainer>
      </LayoutRoot>
      <Footer/>
    </>
  );
};

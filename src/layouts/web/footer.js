import React from "react";
import Image from "next/image";
import Link from "next/link";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
const SIDE_NAV_WIDTH = 0;
const TOP_NAV_HEIGHT = 45;

export const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: (theme) => alpha(theme.palette.background.navy, 1),

          position: "relative",
          left: {
            lg: `${SIDE_NAV_WIDTH}%`,
          },
          bottom: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
          },
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,           
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            
            {/* <Image src="/assets/kedsport-logo.png" width={50} height={50} alt="Kedsport Logo" /> */}

            <Typography variant="subtitle2" color="text.logo">
              Copyright 2023 | kedsports.com
            </Typography>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={2}>
            <Link className="top-link" href={"/web/home"}>
              <Typography variant="body2" color="text.logo">
                Services
              </Typography>
            </Link>
            <Link className="top-link" href={"/web/contact"}>
              <Typography variant="body2" color="text.logo">
                T&C
              </Typography>
            </Link>
            <Link className="top-link" href={"/web/about"}>
              <Typography variant="body2" color="text.logo">
                FAQ
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};


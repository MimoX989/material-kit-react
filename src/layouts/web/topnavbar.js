import PropTypes from "prop-types";
import Image from "next/image";
import BellIcon from "@heroicons/react/24/solid/BellIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import {
  Avatar,
  Badge,
  Button,
  Box,
  Link,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { usePopover } from "src/hooks/use-popover";
import { AccountPopover } from "src/layouts/dashboard/account-popover";

const SIDE_NAV_WIDTH = 0;
const TOP_NAV_HEIGHT = 64;

export const TopNavbar = (props) => {
  const { onNavOpen } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const accountPopover = usePopover();

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: (theme) => alpha(theme.palette.background.navy, 1),
          // backgroundImage:"public/assets/wavback.svg",
          position: "sticky",
          left: {
            lg: `${SIDE_NAV_WIDTH}%`,
          },
          top: 0,
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
            {!lgUp && (
              <IconButton onClick={onNavOpen}>
                <SvgIcon fontSize="small">
                  <Bars3Icon />
                </SvgIcon>
              </IconButton>
            )}
            <Image src="/assets/kedsport-logo.png" width={50} height={50} alt="Kedsport Logo" />
            {/* <Tooltip title="Search">
              <IconButton>
                <SvgIcon fontSize="small">
                  <MagnifyingGlassIcon />
                </SvgIcon>
              </IconButton>
            </Tooltip> */}
            <Typography variant="h3" color="text.logo">
              Kedsports
            </Typography>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={5}>
            {lgUp && (
              <Stack alignItems="center" direction="row" spacing={2}>
                <Link variant="body1" color="text.toplink" underline="hover" href={"/web/home"}>
                  Home
                </Link>
                <Link variant="body1" color="text.toplink" underline="hover" href={"/web/contact"}>
                  Contact
                </Link>
                <Link variant="body1" color="text.toplink" underline="hover" href={"/web/about"}>
                  About Us
                </Link>
              </Stack>
            )}

            {/* <Tooltip title="Notifications">
              <IconButton>
                <Badge badgeContent={4} color="success" variant="dot">
                  <SvgIcon fontSize="small">
                    <BellIcon />
                  </SvgIcon>
                </Badge>
              </IconButton>
            </Tooltip> */}
            <Stack alignItems="center" direction="row" spacing={2}>
              <Button variant="contained" href="/auth/login">
                Login
              </Button>
              <Avatar
                onClick={accountPopover.handleOpen}
                ref={accountPopover.anchorRef}
                sx={{
                  cursor: "pointer",
                  height: 40,
                  width: 40,
                }}
                src="/assets/avatars/avatar-cao-yu.png"
              />
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  );
};

TopNavbar.propTypes = {
  onNavOpen: PropTypes.func,
};

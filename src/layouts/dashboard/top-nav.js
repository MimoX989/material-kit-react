import PropTypes from "prop-types";
import BellIcon from "@heroicons/react/24/solid/BellIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { usePopover } from "src/hooks/use-popover";
import { AccountPopover } from "./account-popover";
import { AuthConsumer } from "src/contexts/auth-context";

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const { onNavOpen } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const accountPopover = usePopover();

  return (
    <AuthConsumer>
      {(ctx) => {
        const username = ctx.user.name;
        if (username === null) {
          var user = " ";
        } else {
          var user = username;
        }
        return (
          <div>
            <Box
              component="header"
              sx={{
                backdropFilter: "blur(6px)",
                backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
                position: "sticky",
                left: {
                  lg: `${SIDE_NAV_WIDTH}px`,
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
                  {/* <Tooltip title="Search">
              <IconButton>
                <SvgIcon fontSize="small">
                  <MagnifyingGlassIcon />
                </SvgIcon>
              </IconButton>
            </Tooltip> */}
                </Stack>
                <Stack alignItems="center" direction="row" spacing={2}>
                  <Tooltip title="Contacts">
                    <IconButton>
                      <SvgIcon fontSize="small">
                        <UsersIcon />
                      </SvgIcon>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Notifications">
                    <IconButton>
                      <Badge badgeContent={4} color="success" variant="dot">
                        <SvgIcon fontSize="small">
                          <BellIcon />
                        </SvgIcon>
                      </Badge>
                    </IconButton>
                  </Tooltip>
                  <Avatar
                    onClick={accountPopover.handleOpen}
                    ref={accountPopover.anchorRef}
                    sx={{
                      cursor: "pointer",
                      height: 40,
                      width: 40,
                    }}
                    src={ctx.user.avatar}
                  />
                </Stack>
              </Stack>
            </Box>
            <AccountPopover
              username={user}
              anchorEl={accountPopover.anchorRef.current}
              open={accountPopover.open}
              onClose={accountPopover.handleClose}
            />
          </div>
        );
      }}
    </AuthConsumer>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func,
};

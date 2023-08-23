import {
  AppBar,
  Box,
  Collapse,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";

import React from "react";
import { ExpandMoreRounded, MenuRounded } from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";

import logo from "../assets/react.svg";

const drawerWidth = "30vw";
const drawerMinWidth = 200;
const drawerMaxWidth = 240;

export default function AppFrame() {
  const theme = useTheme();

  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          borderStyle: "solid",
          borderColor: "rgb(229,234,242)",
          borderWidth: "0px 0px thin",
          borderRadius: 0,
          boxShadow: "none",
          backgroundColor: "#fff",
          color: theme.palette.text.primary,
          zIndex: theme.zIndex.drawer + 1,
          "& .MuiToolbar-root": {
            minHeight: 0,
            height: 56,
            p: theme.spacing(1),
            display: "flex",
            gap: theme.spacing(1),
          },
        }}
      >
        <Toolbar>
          <IconButton
            onClick={() => setOpen(!open)}
            size="small"
            sx={{
              display: { xs: "inline-flex", sm: "inline-flex", md: "none" },

              borderStyle: "solid",
              borderColor: "rgb(229,234,242)",
              borderWidth: "thin",
              borderRadius: 2,
            }}
          >
            <MenuRounded fontSize="small" />
          </IconButton>

          <a href="/" style={{ height: "1.5em" }}>
            <img src={logo} alt="React" style={{ height: "100%" }} />
          </a>

          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              gap: theme.spacing(1),
            }}
          >
            <Divider orientation="vertical" flexItem />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="caption">Nuclear Reactor</Typography>
              <Typography
                sx={{
                  fontSize: "0.5em",
                  fontStyle: "italic",
                  color: theme.palette.text.secondary,
                }}
              >
                A place for experimentation in React.
              </Typography>
            </div>
          </Box>
        </Toolbar>
      </AppBar>

      <DrawerDesktop />
      <DrawerMobile open={open} setOpen={setOpen} />

      <Container
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Toolbar />
        <Outlet />
      </Container>
    </Box>
  );
}

function DrawerMobile({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
}) {
  const theme = useTheme();

  const closeDrawer = () => setOpen(false);

  const [openComponents, setOpenComponents] = React.useState<boolean>(false);
  const [openHooks, setOpenHooks] = React.useState<boolean>(false);
  const [openAPIs, setOpenAPIs] = React.useState<boolean>(false);

  return (
    <Drawer
      open={open}
      variant="temporary"
      anchor="left"
      onClose={() => setOpen(false)}
      sx={{
        display: { xs: "block", sm: "block", md: "none" },
        zIndex: theme.zIndex.drawer + 2,
        width: drawerWidth,
        minWidth: drawerMinWidth,
        maxWidth: drawerMaxWidth,
        flexShrink: 0,
        ["& .MuiDrawer-paper"]: {
          width: drawerWidth,
          minWidth: drawerMinWidth,
          maxWidth: drawerMaxWidth,
          boxSizing: "border-box",
        },
        ["& .MuiToolbar-root"]: {
          minHeight: 0,
          height: 56,
          p: theme.spacing(1),
          display: "flex",
          gap: theme.spacing(0.5),
        },
      }}
    >
      <div
        style={{
          padding: theme.spacing(1),
          display: "flex",
          alignItems: "center",
          gap: theme.spacing(1),
        }}
      >
        <a href="/" style={{ height: "1.5em" }}>
          <img src={logo} alt="React" style={{ height: "100%" }} />
        </a>

        <Divider orientation="vertical" flexItem />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="caption">Nuclear Reactor</Typography>
          <Typography
            sx={{
              fontSize: "0.5em",
              fontStyle: "italic",
              color: theme.palette.text.secondary,
            }}
          >
            A place for experimentation in React.
          </Typography>
        </div>
      </div>

      <Divider />

      <Box sx={{ overflow: "auto" }}>
        <List dense>
          <DrawerSection
            open={openComponents}
            setOpen={setOpenComponents}
            closeDrawer={closeDrawer}
            title="Components"
            subtitles={["Fragment", "Profiler", "StrictMode", "Suspense"]}
          />
          <DrawerSection
            open={openHooks}
            setOpen={setOpenHooks}
            closeDrawer={closeDrawer}
            title="Hooks"
            subtitles={[
              "useCallback",
              "useContext",
              "useEffect",
              "useMemo",
              "useReducer",
              "useRef",
              "useState",
            ]}
          />
          <DrawerSection
            open={openAPIs}
            setOpen={setOpenAPIs}
            closeDrawer={closeDrawer}
            title="APIs"
            subtitles={["createContext", "forwardRef", "lazy", "memo"]}
          />
        </List>
      </Box>
    </Drawer>
  );
}

function DrawerDesktop() {
  const theme = useTheme();

  const [openComponents, setOpenComponents] = React.useState<boolean>(false);
  const [openHooks, setOpenHooks] = React.useState<boolean>(false);
  const [openAPIs, setOpenAPIs] = React.useState<boolean>(false);

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "none", md: "block" },
        width: drawerWidth,
        minWidth: drawerMinWidth,
        maxWidth: drawerMaxWidth,
        flexShrink: 0,
        ["& .MuiDrawer-paper"]: {
          width: drawerWidth,
          minWidth: drawerMinWidth,
          maxWidth: drawerMaxWidth,
          boxSizing: "border-box",
        },
        ["& .MuiToolbar-root"]: {
          minHeight: 0,
          height: 56,
          p: theme.spacing(1),
          display: "flex",
          gap: theme.spacing(0.5),
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List dense>
          <DrawerSection
            open={openComponents}
            setOpen={setOpenComponents}
            title="Components"
            subtitles={["Fragment", "Profiler", "StrictMode", "Suspense"]}
          />
          <DrawerSection
            open={openHooks}
            setOpen={setOpenHooks}
            title="Hooks"
            subtitles={[
              "useCallback",
              "useContext",
              "useEffect",
              "useMemo",
              "useReducer",
              "useRef",
              "useState",
            ]}
          />
          <DrawerSection
            open={openAPIs}
            setOpen={setOpenAPIs}
            title="APIs"
            subtitles={["createContext", "forwardRef", "lazy", "memo"]}
          />
        </List>
      </Box>
    </Drawer>
  );
}

function DrawerSection({
  open,
  setOpen,
  closeDrawer,
  title,
  subtitles,
}: {
  open: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
  closeDrawer?: () => void;
  title: string;
  subtitles: string[];
}) {
  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          ml: theme.spacing(1),
          mr: theme.spacing(3),
          borderRadius: theme.spacing(1),
        }}
      >
        <ListItemText
          primary={title}
          primaryTypographyProps={{
            noWrap: true,
            color: theme.palette.primary.main,
            fontSize: 12,
            fontWeight: "medium",
          }}
        />
        <ExpandMoreRounded
          fontSize="small"
          sx={{
            color: theme.palette.primary.main,
            transform: open ? "rotate(0deg)" : "rotate(-90deg)",
            transition: "all 0.5s ease",
          }}
        />
      </ListItemButton>
      <Collapse in={open} timeout={500} unmountOnExit>
        <List component="div" disablePadding>
          {subtitles.map((hook) => (
            <ListItemButton
              key={hook}
              dense
              onClick={() => {
                if (closeDrawer) closeDrawer();
                navigate("/components/" + hook.toLowerCase());
              }}
              sx={{
                pl: theme.spacing(4),
                ml: theme.spacing(1),
                mr: theme.spacing(3),
                borderRadius: theme.spacing(1),
              }}
            >
              <ListItemText
                secondary={hook}
                secondaryTypographyProps={{
                  noWrap: true,
                  fontSize: 12,
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
}

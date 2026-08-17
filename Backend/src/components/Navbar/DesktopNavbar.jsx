import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CallIcon from "@mui/icons-material/Call";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KitKatLogo from "../../assets/Images/KitKatLogo.png";
import { CommonButton } from '../../StyledComponents/CommonButton';
import { NavLink } from 'react-router-dom';

const DesktopNavbar = ({ menuArray, location, desktopMenu, setDesktopMenu, handleDesktopMenu }) => {
  return (
    <ClickAwayListener onClickAway={() => setDesktopMenu(null)}>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          height: "10vh",
          px: { md: 0.5, sm: 2, xs: 1, lg: 3 },
          boxShadow: "0 2px 5px rgba(0,0,0,.2)",
          position: "sticky",
          top: 0,
          background: "#fff",
          zIndex: 1000,
        }}
      >
        <Box component="img" src={KitKatLogo} sx={{ width: 200, height: 50 }} />

        <Box sx={{ display: "flex", gap: "40px", alignItems: "center", justifyContent: "center" }}>
          {menuArray.map((item, index) => {
            const parentActive =
              item.subMenu && item.subMenu.some((sub) => sub.path === location.pathname);

            return (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                {item.subMenu ? (
                  <Box
                    onClick={() => handleDesktopMenu(index)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.3,
                      cursor: "pointer",
                      pb: "6px",
                      borderBottom: "2px solid",
                      borderColor: parentActive ? "#1976d2" : "transparent",
                      "&:hover": { borderColor: "#1976d2" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { md: "0.9rem", nd: "1rem", lg: "1.1rem" },
                        color: parentActive ? "#1976d2" : "#071B52",
                        fontWeight: parentActive ? 700 : 550,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <KeyboardArrowDownIcon
                      sx={{
                        fontSize: 20,
                        color: parentActive ? "#1976d2" : "#071B52",
                        transition: "transform 0.25s ease",
                        transform: desktopMenu === index ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </Box>
                ) : (
                  <Typography
                    component={NavLink}
                    to={item.path}
                    onClick={() => setDesktopMenu(null)}
                    sx={{
                      textDecoration: "none",
                      fontSize: { md: "0.9rem", nd: "1rem", lg: "1.1rem" },
                      color: "#071B52",
                      fontWeight: 550,
                      pb: "6px",
                      borderBottom: "2px solid transparent",
                      "&:hover": { borderColor: "#1976d2" },
                      "&.active": {
                        color: "#1976d2",
                        fontWeight: 700,
                        borderColor: "#1976d2",
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                )}

                {item.subMenu && desktopMenu === index && (
                  <Paper
                    elevation={4}
                    sx={{
                      position: "absolute",
                      top: "calc(100% + 15px)",
                      left: 0,
                      minWidth: 280,
                      zIndex: 1000,
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <List disablePadding>
                      {item.subMenu.map((subItem, subIndex) => (
                        <ListItemButton
                          key={subIndex}
                          component={NavLink}
                          to={subItem.path}
                          onClick={() => setDesktopMenu(null)}
                          sx={{
                            "&.active": {
                              backgroundColor: "#1976d2",
                              color: "white",
                            },
                          }}
                        >
                          <ListItemText primary={subItem.name} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Paper>
                )}
              </Box>
            );
          })}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CommonButton variant="contained" sx={{ fontSize: { md: "0.5rem", nd: "0.7rem", lg: "1rem" }, gap: 1 }}>
              <CallIcon sx={{ fontSize: { md: "0.9rem", lg: "1.5rem" } }} />
              +91 93638 39353
            </CommonButton>
          </Box>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default DesktopNavbar;
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";

// export const CommonButton = styled(Button)({
//     backgroundColor:"#0749C4",
//     color:"white",
//     textTransform:"none"
// } )

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const CommonButton = styled(Button)(({ variant }) => ({
  textTransform: "none",

  ...(variant === "contained" && {
    backgroundColor: "#FD6A02",
    color: "#fff",
    zIndex:0,
    "&:hover": {
      backgroundColor: "#FD6A02",
    },
  }),

  ...(variant === "outlined" && {
    color: "#FD6A02",
    border: "1px solid #FD6A02",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "rgba(196, 105, 7, 0.08)",
      border: "1px solid #",
    },
  }),
}));
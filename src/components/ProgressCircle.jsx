import { Box, useTheme } from "@mui/material";
// import { tokens } from "../theme";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  // const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${"black"} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${"white"} ${angle}deg 360deg),
            ${"green"}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
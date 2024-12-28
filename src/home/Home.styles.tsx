import {Typography, styled} from "@mui/material";

export const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const Title = styled(Typography)({
  fontWeight: 500,
  textAlign: "center",
  margin: "0 2.5rem",
  color: "rgb(185 28 28)",
});

export const Subtitle = styled(Typography)({
  textAlign: "center",
  margin: "3rem 1.5rem 0",
});

export const ButtonsContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  marginTop: "5rem",
});

export const PrimaryButton = styled("button")({
  fontSize: "1.5rem",
  backgroundColor: "rgb(14 116 144)",
  color: "#fff",
  padding: "1rem",
  minWidth: "9rem",
  cursor: "pointer",
  borderRadius: "0.75rem",
  "&:hover": {
    backgroundColor: "rgb(22 78 99)",
  },
});

export const SecondaryButton = styled("button")({
  fontSize: "1.5rem",
  backgroundColor: "rgb(239 68 68)",
  color: "#fff",
  padding: "1rem",
  minWidth: "9rem",
  cursor: "pointer",
  borderRadius: "0.75rem",
  "&:hover": {
    backgroundColor: "rgb(153 27 27)",
  },
});

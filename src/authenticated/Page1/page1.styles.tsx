import {Box as MuiBox, styled} from "@mui/material";

export const Box = styled(MuiBox)({
  display: "flex",
  justifyContent: "end",
  margin: "0.625rem",
});

export const Header = styled("header")({
  margin: "0 auto",
  padding: "1rem 0.75rem",
  maxWidth: "48rem",
});

export const Title = styled("h1")({
  fontSize: "1.5rem",
  lineHeight: "2rem",
  textAlign: "center",
  textDecoration: "underline",
  textUnderlineOffset: "8px",
  textDecorationStyle: "wavy",
  paddingBottom: "1rem",
});

export const Main = styled("main")({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  margin: "0 auto",
  maxWidth: "48rem",
  padding: "0 1rem",
});

export const Subtitle = styled("h2")({
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
  textAlign: "center",
});

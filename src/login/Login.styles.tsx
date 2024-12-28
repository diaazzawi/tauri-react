import {TextField as MuiTextField, Typography, styled} from "@mui/material";

export const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "2.5rem",
});

export const Title = styled(Typography)({
  fontWeight: 500,
  textAlign: "center",
  margin: "0 2.5rem",
  color: "rgb(14 116 144)",
});

export const Form = styled("form")({
  display: "flex",
  justifyContent: "center",
  paddingBottom: "0.75rem",
  margin: "2.5rem",
});

export const FormContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "24rem",
  gap: "0.75rem",
});

export const TextField = styled(MuiTextField)({
  padding: "0.75rem",
  backgroundColor: "transparent",
  outlineColor: "#64748b",
  width: "100%",
  marginTop: "1.5rem",
  "& div": {
    borderRadius: "0.75rem",
  },
  "& .MuiInputLabel-root": {
    left: "12px",
    top: "12px",
  },
  // This is the cleanest workaround to remove the built-in reveal icon from the TextField input on MS Edge and Windows; Otherwise, we'll end up with two reveal (eye) icons when user starts typing in the password field!
  "& input::-ms-reveal": {
    display: "none",
  },
});

export const ButtonsContainer = styled("div")({
  display: "flex",
  gap: "0.5rem",
});

export const SubmitButton = styled("button")(({disabled}) => ({
  fontSize: "1.5rem",
  backgroundColor: disabled ? "rgb(156 163 175)" : "rgb(22 163 74)",
  color: "#fff",
  borderRadius: "0.75rem",
  padding: "1rem",
  alignSelf: "self-start",
  cursor: "pointer",
  width: "100%",
  marginTop: "1.5rem",
}));

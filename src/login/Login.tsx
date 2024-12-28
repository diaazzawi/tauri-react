import {zodResolver} from "@hookform/resolvers/zod";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {IconButton, InputAdornment} from "@mui/material";
// import axios from "axios";
import _ from "lodash";
import {ClipboardEvent, ClipboardEventHandler, MouseEvent, useEffect, useRef, useState} from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {Navigate, useNavigate} from "react-router-dom";
import {defaultLoginForm, loginSchema, type TLoginForm} from "../types";
import {Container, Form, FormContent, SubmitButton, TextField, Title} from "./Login.styles";

/**
 * Login component that handles user authentication.
 *
 * This component renders a login form and manages the authentication process.
 * It uses various hooks to handle form state, authentication, and navigation.
 *
 * @returns {JSX.Element} The rendered login form or a redirect to a protected route if the user is authenticated.
 *
 * @component
 *
 * @example
 * // Usage example:
 * <Login />
 *
 * @remarks
 * - The form uses `react-hook-form` for form state management and validation.
 * - The password visibility is toggled with a timer to hide the password after a short duration for security reasons.
 * - The form submission handler sends the form data to a backend endpoint to authenticate the user and retrieve an access token.
 * - If the user is authenticated, they are redirected to a protected route.
 * - If the user is not authenticated, the login form is displayed.
 *
 * @hook
 * - `useIsAuthenticated` - Determines if the user is authenticated.
 * - `useSignIn` - Signs in the user.
 * - `useNavigate` - Navigates to a specified route.
 * - `useForm` - Manages the login form state.
 * - `useState` - Manages the local state for password visibility.
 * - `useRef` - Stores the value of the timer for password visibility.
 * - `useEffect` - Handles side effects for password visibility and component unmounting.
 *
 * @function
 * - `handleClickShowPassword` - Toggles the password visibility.
 * - `handleMouseDownPassword` - Prevents default behavior on mouse down event in the password field.
 * - `handleMouseUpPassword` - Prevents default behavior on mouse up event in the password field.
 * - `handlePasswordCopyPaste` - Prevents clipboard events (copy, cut, paste) in the password field for security.
 * - `handleFormSubmit` - Submits the form data to authenticate the user.
 * - `renderEmailField` - Renders the email field using a controlled `TextField` component.
 * - `renderPasswordField` - Renders the password field using a controlled `TextField` component.
 *
 * @todo
 * - Uncomment the block in `handleFormSubmit` when the login endpoint is defined.
 * - Replace the example token with a valid token from the backend.
 */
const Login: React.FC = () => {
  // Determines if the user is authenticated or not.
  const isAuthenticated = useIsAuthenticated();
  // Use the following hook to sign in the user.
  const signIn = useSignIn();
  // Use the following hook to programmatically navigate to a certain route.
  const navigate = useNavigate();
  // Use the following hook to manage the login form.
  const {control, reset, handleSubmit, formState} = useForm<TLoginForm>({
    mode: "onChange", // Specify when to validate the form
    reValidateMode: "onChange", // Specify when to re-validate the form
    resolver: zodResolver(loginSchema), // Provide the Zod resolver using our predefined login schema
    defaultValues: defaultLoginForm, // Provide the default values of our form
  });
  // We need to determine when the form is considered valid and when the various form fields are marked dirty.
  const {isValid, dirtyFields} = formState;
  // Define a local state to control when to show or hide the password.
  const [showPassword, setShowPassword] = useState(false);
  // Use the useRef hook to store the value of the timer. Unlike useState, changing the value of this constant (via .current)
  // won't re-render the component.
  const showPasswordTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Make sure to remove timers when the component unloads (unmounts).
  useEffect(() => {
    return () => {
      clearTimeout(showPasswordTimerRef.current);
    };
  }, []);

  // This useEffect hook is used to programmatically hiding the password after a limited time.
  useEffect(() => {
    if (showPassword) {
      showPasswordTimerRef.current = setTimeout(() => {
        setShowPassword(false);
      }, 750); // For security, turn off the password visibility after 750 millisecond
    }
  }, [showPassword]);

  // Handler to toggle password visibility.
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // Handler to ignore mouse down event in the password field.
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // Handler to ignore mouse up event in the password field.
  const handleMouseUpPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // Handler to ignore clipboard events (copy, cut, and paste) in the password field.
  const handlePasswordCopyPaste: ClipboardEventHandler<HTMLInputElement> = (event: ClipboardEvent<HTMLInputElement>) => {
    // For security, disable copy, cut, and paste
    event.preventDefault();
  };

  // Handler to submit a valid form data.
  // We need to submit the form data to a backend endpoint to retrieve an access token and user data that must be pass to the signIn hook.
  const handleFormSubmit: SubmitHandler<TLoginForm> = async (formData) => {
    if (process.env.NODE_ENV !== "production") {
      console.log("formData", JSON.stringify(formData));
    }
    //TODO: Uncomment the following block when the login endpoint is defined.
    //// Send the formData to the login endpoint to authenticate the user on the server side and return a valid accessToken along with a user object.
    // const url = "https://server.com/login";
    // const resp = await axios.post(url, formData);
    // if (resp.data) {
    //   if (
    //     signIn({
    //       auth: {
    //         token: resp.data.accessToken,
    //         type: "Bearer",
    //       },
    //       userState: resp.data.user
    //     });
    //   ) {
    //     navigate("/page1");
    //   } else {
    //     alert("An error occurred while trying to login. Please try again!");
    //   }
    // }

    // Comment out the following line when the login endpoint is defined.
    // Example token: Use https://jwt.io/ to generate the token and make sure it's not expired (i.e., the 'exp' field is in the future).
    // Note that if the token is invalid (for example, expired) the user won't be able to login (i.e., the signIn function below will return false).
    if (
      signIn({
        auth: {
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZXhwIjoxNzYwMTIxMDE2fQ.cmWd75zfTBwZzIBeoOWy2Oc_m6LFlLdV1_4vP0h-2NU",
          type: "Bearer",
        },
        userState: {name: "Dia Azzawi", uid: 123456},
      })
    ) {
      // If the user is signed in successfully, navigate the user to a protected route (page1 in this case).
      navigate("/page1");
    } else {
      // If the user fails to sign in, display a message to the user (basic alert here), reset the form to its default values, then
      // reload the page (reload is required because the we are not setting the value prop of the password field and resetting the
      // form is not enough to clear out all fields in this page).
      alert("An error occurred while trying to login. Please try again!");
      reset(defaultLoginForm);
      location.reload();
    }
  };

  // Function to render the email field using a controlled TextField component.
  const renderEmailField = () => {
    const fieldLabel = "Email";
    const fieldName = "email";
    return <Controller control={control} name={fieldName} render={({field: {value, onChange, ref}, fieldState: {error}}) => <TextField id={fieldName} inputRef={ref} value={value} onChange={onChange} error={Boolean(error)} helperText={error?.message} label={fieldLabel} placeholder={fieldLabel} variant="outlined" required fullWidth />} />;
  };

  // Function to render the password field using a controlled TextField component.
  const renderPasswordField = () => {
    const fieldLabel = "Password";
    const fieldName = "password";
    return (
      <Controller
        control={control}
        name={fieldName}
        defaultValue={defaultLoginForm.password}
        render={({field: {onChange, ref}, fieldState: {error}}) => (
          <TextField
            id={fieldName}
            inputRef={ref}
            //value={value} // CAUTION: To prevent the user from seeing the password in DevTools, NEVER set the value prop.
            onChange={onChange}
            error={Boolean(error)}
            helperText={error?.message}
            label={fieldLabel}
            placeholder={fieldLabel}
            variant="outlined"
            required
            fullWidth
            type={showPassword ? "text" : "password"}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} onMouseUp={handleMouseUpPassword} edge="end" disableRipple={true}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            onCut={handlePasswordCopyPaste}
            onCopy={handlePasswordCopyPaste}
            onPaste={handlePasswordCopyPaste}
          />
        )}
      />
    );
  };

  if (isAuthenticated) {
    // If the user is authenticated, navigate the user to a protected route (page1 in this case).
    return <Navigate to={"/page1"} replace />;
  } else {
    // If the user is authenticated, render the login form.
    return (
      <Container>
        <Title variant="h2" gutterBottom>
          Login
        </Title>
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <FormContent>
            {renderEmailField()}
            {renderPasswordField()}
            <SubmitButton disabled={_.isEmpty(dirtyFields) || !isValid}>Submit</SubmitButton>
            {/* <SubmitButton disabled={false}>Submit</SubmitButton> */}
          </FormContent>
        </Form>
      </Container>
    );
  }
};

export default Login;

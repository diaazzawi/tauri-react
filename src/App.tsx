import RequireAuth from "@auth-kit/react-router/RequireAuth";
import {createTheme, ThemeProvider} from "@mui/material";
import {FC, useEffect} from "react";
import AuthProvider from "react-auth-kit";
import {useHotkeys} from "react-hotkeys-hook";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Page1 from "./authenticated/Page1/page1";
import Home from "./home/Home";
import Login from "./login/Login";
import {authStore} from "./store";

/**
 * Creates a custom theme for the application using Material-UI's `createTheme` function.
 *
 * The theme defines the primary color palette with the following properties:
 * - `main`: The main color used for primary elements, set to `#1976d2`.
 * - `contrastText`: The color used for text that contrasts with the primary color, set to `white`.
 *
 * @returns {Theme} The custom theme object.
 */
const appTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      contrastText: "white",
    },
  },
});

/**
 * The main application component.
 *
 * This component sets up the following:
 * - Prevents saving the page as HTML using Ctrl+S hotkey in release builds.
 * - Prevents displaying DevTools using Ctrl+Shift+I and F12 hotkeys in release builds.
 * - Prevents displaying the context menu in any page inside the app in release builds.
 * - Defines routes inside the BrowserRouter component, wrapped by Material UI's ThemeProvider.
 * - Provides unprotected routes for the home and login pages.
 * - Protects certain routes by wrapping the page component with RequireAuth and providing a fallback route.
 * - Wraps the ThemeProvider with AuthProvider and passes the authentication store.
 *
 * @returns The main application component.
 */
const App: FC = () => {
  // The following code prevents saving the page as HTML using Ctrl+S hotkey (in most browsers, like Chrome and Edge) in release builds.
  useHotkeys("ctrl+s", (ev: Event) => {
    if (process.env.NODE_ENV === "production") {
      ev.preventDefault();
    }
  });

  // The following code prevents displaying DevTools using Ctrl+Shift+I hotkey in release builds.
  useHotkeys("ctrl+shift+i", (ev: Event) => {
    if (process.env.NODE_ENV === "production") {
      ev.preventDefault();
    }
  });

  // The following code prevents displaying DevTools using F12 hotkey in release builds.
  useHotkeys("f12", (ev: Event) => {
    if (process.env.NODE_ENV === "production") {
      ev.preventDefault();
    }
  });

  // The code inside the following hook prevents displaying the context menu in any page inside the app in release builds.
  useEffect(() => {
    const handleContextMenu = (ev: Event) => {
      if (process.env.NODE_ENV === "production") {
        ev.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  // - We are going to define our routes inside BrowserRouter component, which should be wrapped by Material UI's ThemeProvider.
  // - The index and login routes (i.e., the home and login pages) are unprotected (i.e., any user can access them without login).
  // - To protect a route (i.e., a page that can be accessed by logged in users only), we need to wrap the page component with RequirePath and provide a fallback route. This requires wrapping
  // the ThemeProvider by AuthProvider and passing the authentication store.
  return (
    <AuthProvider store={authStore}>
      <ThemeProvider theme={appTheme}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route
              path={"/page1"}
              element={
                <RequireAuth fallbackPath={"/login"}>
                  <Page1 />
                </RequireAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;

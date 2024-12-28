# Tauri POC

The purpose of this POC is to demonstrate how to develop a full stack **desktop** application with Tauri and React.

## Table of Contents

- [Technology stack](#technology-stack)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Creating a New Tauri + React + Typescript + Vite Project](#creating-a-new-tauri--react--typescript--vite-project)
- [Security](#security)
  * [Protecting UI Passwords and PINs](#protecting-ui-passwords-and-pins)
  * [Disabling DevTools](#disabling-devtools)
  * [Disabling the Context Menu](#disabling-the-context-menu)
  * [Preventing the User from Saving a Page](#preventing-the-user-from-saving-a-page)
  * [Preventing the User from Revealing the Password in the Resulting Source Code](#preventing-the-user-from-revealing-the-password-in-the-resulting-source-code)

## Technology stack

| Name | Version |
| :--- | :------ |
| https://v2.tauri.app/) | [![badge](https://img.shields.io/badge/npm-2.1.0-blue)](https://www.npmjs.com/package/@tauri-apps/cli/v/2.1.0) |
| [React](https://18.react.dev/) | [![badge](https://img.shields.io/badge/npm-18.3.1-blue)](https://www.npmjs.com/package/react/v/18.3.1) |
| [TypeScript](https://www.typescriptlang.org/) | [![badge](https://img.shields.io/badge/npm-5.7.2-blue)](https://www.npmjs.com/package/typescript/v/5.6.2) |
| [Vite](https://vite.dev/) | [![badge](https://img.shields.io/badge/npm-6.0.3-blue)](https://www.npmjs.com/package/vite/v/6.0.1) |

## Dependencies

| Dependency | Version | Purpose |
| :--------- | :------ | :------ |
| [@auth-kit/react-router](https://www.npmjs.com/package/@auth-kit/react-router/v/3.1.3) | [![npm](https://img.shields.io/badge/npm-3.1.3-blue)](https://www.npmjs.com/package/@auth-kit/react-router/v/3.1.3) | A library for managing protected routes using *react-router-dom*. |
| [@emotion/react](https://www.npmjs.com/package/@emotion/react/v/11.14.0) | [![npm](https://img.shields.io/badge/npm-11.14.0-blue)](https://www.npmjs.com/package/@emotion/react/v/11.14.0) | Simple styling in React used by [Material UI](https://mui.com/material-ui/) to generate CSS styles. |
| [@emotion/styled](https://www.npmjs.com/package/@emotion/styled/v/11.14.0) | [![npm](https://img.shields.io/badge/npm-11.14.0-blue)](https://www.npmjs.com/package/@emotion/styled/v/11.14.0) | Provides `styled` API for @emotion/react used with [Material UI](https://mui.com/material-ui/) to create components that have styles attached to them. |
| [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers/v/3.9.1) | [![npm](https://img.shields.io/badge/npm-3.9.1-blue)](https://www.npmjs.com/package/@hookform/resolvers/v/3.9.1) | Provides as set of resolver functions to be used with any external validation library such as [Yup](https://github.com/jquense/yup), [Zod](https://github.com/vriad/zod), [Joi](https://github.com/hapijs/joi), [Vest](https://github.com/ealush/vest), [Ajv](https://github.com/ajv-validator/ajv) and many others. |
| [@mui/icons-material](https://www.npmjs.com/package/@mui/icons-material/v/6.2.1) | [![npm](https://img.shields.io/badge/npm-6.2.1-blue)](https://www.npmjs.com/package/@mui/icons-material/v/6.2.1) | Provides Google's [Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons) converted to Material UI [SVG Icon](https://mui.com/material-ui/icons/#svgicon) components. |
| [@mui/material](https://www.npmjs.com/package/@mui/material/v/6.2.1) | [![npm](https://img.shields.io/badge/npm-6.2.1-blue)](https://www.npmjs.com/package/@mui/material/v/6.2.1) | A comprehensive, production ready component library that implements Google's [Material Design](https://m2.material.io/design/introduction/). |
| [axios](https://www.npmjs.com/package/axios/v/1.7.9) | [![npm](https://img.shields.io/badge/npm-1.7.9-blue)](https://www.npmjs.com/package/axios/v/1.7.9) | A promise based HTTP client for the browser and [Node.js](https://nodejs.org/). |
| [lodash](https://www.npmjs.com/package/lodash/v/4.17.21) | [![npm](https://img.shields.io/badge/npm-4.17.21-blue)](https://www.npmjs.com/package/lodash/v/4.17.21) | A modern JavaScript utility library delivering modularity, performance & extras. |
| [react-auth-kit](https://www.npmjs.com/package/react-auth-kit/v/3.1.3) | [![npm](https://img.shields.io/badge/npm-3.1.3-blue)](https://www.npmjs.com/package/react-auth-kit/v/3.1.3) | Authentication Library for Token-Based Auth with JSON Web Token (JWT). |
| [react-hook-form](https://www.npmjs.com/package/react-hook-form/v/7.54.1) | [![npm](https://img.shields.io/badge/npm-7.54.1-blue)](https://www.npmjs.com/package/react-hook-form/v/7.54.1) | Performant, flexible and extensible forms with easy-to-use validation. |
| [react-hotkeys-hook](https://www.npmjs.com/package/react-hotkeys-hook/v/4.6.1) | [![npm](https://img.shields.io/badge/npm-4.6.1-blue)](https://www.npmjs.com/package/react-hotkeys-hook/v/4.6.1) | A React hook for using keyboard shortcuts in components in a declarative way. |
| [react-router-dom](https://www.npmjs.com/package/react-router-dom/v/6.28.0) | [![npm](https://img.shields.io/badge/npm-6.28.0-blue)](https://www.npmjs.com/package/react-router-dom/v/6.28.0) | Provides bindings for using [React Router](https://github.com/remix-run/react-router) in web applications. |
| [zod](https://www.npmjs.com/package/zod/v/3.24.1) | [![npm](https://img.shields.io/badge/npm-3.24.1-blue)](https://www.npmjs.com/package/zod/v/3.24.1) | TypeScript-first schema validation with static type inference |

## Installation

Assuming you have **yarn** installed on your system, follow these steps:

1. If **Rust** is not installed on your system, install it from https://www.rust-lang.org/tools/install.
2. Install all dependencies by running the following command in the terminal:

    ```sh
    yarn install
    ```

3. Run the app in **debug** mode:

    ```sh
    yarn tauri dev
    ```

4. Build the app in **release** mode:

    ```sh
    yarn tauri build
    ```
    You can now install the app from the generated msi file located at `tauri-react\src-tauri\target\release\bundle\msi\tauri-react_0.1.0_x64_en-US.msi` and run the app in release mode.
	
## Creating a New Tauri + React + Typescript + Vite Project

Assuming you have **yarn** installed on your system, follow these steps:

1. If **Rust** is not installed on your system, install it from https://www.rust-lang.org/tools/install.
2. If `create-vite` is not installed globally on your system, install it by running the following command:

    ```sh
    yarn global add create-vite
    ```

3. Open terminal and run `npm create vite@latest`. This will prompt you for project name, framework, and variant:
  >- **Project name:** `<YOUR-PROJECT-NAME>`
  >- **Framework:** `React`
  >- **Variant:** `TypeScript`
4. Open `<YOUR-PROJECT-NAME>` folder in VS Code.
5. Edit `vite.config.ts` to change the default port to 3000 by adding the following block inside `defineConfig`:

    ```js
    export default defineConfig({
      ...
      server: {
        port: 3000
      }
    });
    ```

6. Install all dependencies by running the following command in the terminal:

    ```sh
    yarn install
    ```

7. Run the project to make you can see the landing page in the browser (http://localhost:3000):

    ```sh
    yarn dev
    ```

8. Add Tauri CLI to the project by running the following command:

    ```sh
    yarn add -D @tauri-apps/cli@latest
    ```

9. Initialize Tauri by running the following command:

    ```sh
    yarn tauri init
    ```

    This will prompt you for app name, window title, web assets location, dev server URL, frontend dev command, and frontend build command:

  >- **App name:** `<YOUR-PROJECT-NAME>`
  >- **Window title:** `<YOUR-WINDOW-TITLE>`
  >- **Web assets location:** `../build`
  >- **Dev server URL:** `http://localhost:3000`
  >- **Frontend dev command:** `yarn dev`
  >- **Frontend build command:** `yarn build`

10. Edit `src-tauri/tauri.conf.json` to use `../dist` as the `frontendDist` value rather than `../build` under the build section (see https://tauri.app/start/frontend/vite)

11. Run the app in **debug** mode:

    ```sh
    yarn tauri dev
    ```

12. Build the app in **release** mode:

    ```sh
    yarn tauri build
    ```
    You can now install the app from the generated msi file located at `tauri-react\src-tauri\target\release\bundle\msi\tauri-react_0.1.0_x64_en-US.msi` and run the app in release mode.

## Security

### Protecting UI Passwords and PINs

The application follows the standard security guidelines for UI password/PIN fields, such as ["The application must not display passwords/PINs as clear text"](https://www.stigviewer.com/stig/application_security_and_development/2023-06-08/finding/V-222554) finding. The login page provides a good example implementation to protect such sensitive information by
- supressing the context menu when the user right-clicks the Password field,
- preventing the user from copying, cutting, or pasting the value of the Password field using keyboard shortcuts, and
- allowing the user to turn on the password visibility via the password-reveal icon for a very limited time.

The relevant code for these guidelines is shown below:

```js
const Login: React.FC = () => {
  
  ...
  
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    return () => {
      clearTimeout(showPasswordTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (showPassword) {
      showPasswordTimerRef.current = setTimeout(() => {
        setShowPassword(false);
      }, 750); // For security, turn off the password visibility after 750 millisecond
    }
  }, [showPassword]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handlePasswordCopyPaste: ClipboardEventHandler<HTMLInputElement> = (event: ClipboardEvent<HTMLInputElement>) => {
    // For security, disable copy, cut, and paste
    event.preventDefault();
  };

  const handlePasswordContextMenu = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  ...
  
  const renderPasswordField = () => {
    const fieldLabel = "Password";
    const fieldName = "password";
    return (
      <Controller
        control={control}
        name={fieldName}
        defaultValue={defaultLoginForm.password}
        render={({field: {value, onChange, ref}, fieldState: {error}}) => (
          <TextField
            id={fieldName}
            inputRef={ref}
            value={value}
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
            onContextMenu={handlePasswordContextMenu}
          />
        )}
      />
    );
  };

  ...
  
```

### Disabling DevTools

DevTools is a valuable tool during development. However, it may reveal sensitive information to the user. To disable DevTools in **debug** builds, add the following configuration under `app/windows` section in `src-tauri/tauri.conf.json`:

```js
"devtools": false
```

#### NOTES
- This configuration will remove the **Inspector** menu item from the context menu displayed when the user right-clicks inside the client area of the app window. However, the user can still open the Inspector via `Ctrl+Shift+I` shortcut in **debug** builds.
- The **default** value of this configuration is `false` in **release** builds. *Note that the user cannot open the Inspector window with* `Ctrl+Shift+I` *or* `F12` *keyboard shortcuts in **release** builds*.
- For more information, please see https://tauri.app/reference/config/#devtools.

Another approach is by disabling the `Ctrl+Shift+I` and `F12` hotkeys in the ALL pages throughout the app by adding the following code inside the `App.tsx` component.

```js
import {useHotkeys} from "react-hotkeys-hook";

...

const App: FC = () => {

  ...
  
  useHotkeys("ctrl+shift+i", (ev: Event) => {
    if (process.env.NODE_ENV === "production") {
      ev.preventDefault();
    }
  });

  useHotkeys("f12", (ev: Event) => {
    if (process.env.NODE_ENV === "production") {
      ev.preventDefault();
    }
  });

  ...
  
}
```
### Disabling the Context Menu

The following code prevents displaying the context menu when used inside any component. To prevent displaying the context menu in ALL pages throughout the app, add this code inside the `App.tsx` component.

```js
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
```

### Preventing the User from Saving a Page

The following code prevents the user from saving the page using the standard `CTRL+S` hotkey. To prevent the user from saving the HTML code of ANY page throughout the app, add this code inside the `App.tsx` component.

```js
import {useHotkeys} from "react-hotkeys-hook";

...

const App: FC = () => {

  ...
  
  useHotkeys("ctrl+s", (ev: Event) => {
    if (process.env.NODE_ENV === "production") {
      ev.preventDefault();
    }
  });

  ...
  
}
```
  
### Preventing the User from Revealing the Password in the Resulting Source Code

When the user has access to the source code (via DevTools or saving the page as HTML), the user can still see the value of the password field in the resulting HTML code. To prevent this for any `TextField` with sensitive information, NEVER set the `value` prop. This is a good security practice, even when the user cannot access to the DevTools or save the page source code.

**Example:**

```js
<TextField
  id={fieldName}
  inputRef={ref}
  //value={value} // CAUTION: To prevent the user from seeing the password in DevTools, NEVER set the value prop.
  onChange={onChange}
  ...
/>
```
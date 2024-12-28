import createStore from "react-auth-kit/createStore";

/**
 * Creates a store for managing authentication properties.
 *
 * @constant
 * @type {Store}
 *
 * @property {string} authName - The prefix for authentication properties.
 * @property {string} authType - The storage type for authentication properties (e.g., local storage).
 * @property {boolean} debug - Flag to enable or disable debugging based on the environment.
 *
 * @example
 * const authStore = createStore({
 *   authName: "_auth",
 *   authType: "localstorage",
 *   debug: process.env.NODE_ENV !== "production",
 * });
 */
const authStore = createStore({
  authName: "_auth",
  authType: "localstorage",
  debug: process.env.NODE_ENV !== "production",
});

/**
 * Exports the `authStore` from the current module.
 */
export {authStore};

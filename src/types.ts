import {z} from "zod";

/**
 * Represents a user with personal and authentication details.
 */
export type TUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const passwordLength = 4;
/**
 * Schema for validating login credentials.
 *
 * This schema ensures that the email and password fields are provided and meet the specified criteria.
 *
 * @constant
 * @type {ZodObject}
 *
 * @property {ZodString} email - The email field must be a non-empty string and a valid email address.
 * @property {ZodString} password - The password field must be a non-empty string with a minimum length defined by `passwordLength`.
 */
export const loginSchema = z.object({
  email: z.string().nonempty("Please specify an email.").email("Please specify a valid email"),
  password: z.string().nonempty("Please specify a password.").min(passwordLength, `Password must be at least ${passwordLength} characters.`),
});

/**
 * Type definition for the login form based on the `loginSchema`.
 *
 * This type is inferred from the `loginSchema` using Zod's `infer` utility.
 * It represents the structure and types of data expected in the login form.
 */
export type TLoginForm = z.infer<typeof loginSchema>;

/**
 * Default values for the login form.
 *
 * @type {TLoginForm}
 * @property {string} email - The email address of the user.
 * @property {string} password - The password of the user.
 */
export const defaultLoginForm: TLoginForm = {
  email: "",
  password: "",
};

/**
 * Represents the login information for a user.
 *
 * @typedef {Object} TLogin
 * @property {TUser} user - The user information.
 * @property {string} accessToken - The access token for authentication.
 * @property {string} refreshToken - The refresh token for obtaining new access tokens.
 */
export type TLogin = {
  user: TUser;
  accessToken: string;
  refreshToken: string;
};

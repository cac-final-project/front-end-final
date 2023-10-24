declare global {
  type TUsername = string | null;
  type TPassword = string | null;
}

type KeyValuePairUsername = [string, TUsername];
type KeyValuePairPassword = [string, TPassword];

export const KEYS_AND_DEFAULT = {
  username: ["@username", null] as KeyValuePairUsername,
  password: ["@password", null] as KeyValuePairPassword,
};

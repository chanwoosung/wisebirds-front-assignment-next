export enum Auth {
  Admin = "Admin",
  Manager = "Manager",
  Viewer = "Viewer",
}

export type AuthKey = keyof typeof Auth;

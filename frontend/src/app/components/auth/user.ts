export interface Roles {
  admin?: boolean;
  employee?: boolean;
}


export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  roles: Roles;
}

export interface Roles {
  admin?: boolean;
  employee?: boolean;
}


export interface User {
  empID: string;
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  hourlyRate?: number;
  roles: Roles;
  notAvailable?: Date[];
}

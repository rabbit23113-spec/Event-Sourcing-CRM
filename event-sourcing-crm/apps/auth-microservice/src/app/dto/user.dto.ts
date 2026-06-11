export enum Role {
  ADMIN = "admin",
  MANAGER = "manager",
  SALES = "sales",
}

export class UserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

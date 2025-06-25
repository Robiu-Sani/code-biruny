export interface IUser {
  id?: string;
  name?: string;
  email?: string;
  isActive?: boolean;
  role?: "user" | "admin" | "guest" | "moderator" | "superadmin" | "editor";
  image?: string;
  phone?: string;
  address?: string;
  dateOfBirth?: string;
  gender?: "male" | "female" | "other";
  createdAt?: string;
  updatedAt?: string;
  lastLogin?: string;
  nationality?: string;
  bio?: string;
  website?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  language?: string;
  timezone?: string;
  emailVerified?: boolean;
  phoneVerified?: boolean;
  statusMessage?: string;
  password?: string;
}

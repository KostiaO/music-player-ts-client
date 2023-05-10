export interface TAuthReturn {
  success: boolean;
  msg?: string;
  accessToken?: string;
}

export interface TAuthUser {
  id: string;
  password: string;
}

declare global {
  interface RegisterWithPhonePayload {
    auth_key: string;
    first_name: string;
    last_name: string;
    email: string;
    user_type: string;
  }
}

export {};

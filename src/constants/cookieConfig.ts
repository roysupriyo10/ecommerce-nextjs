export const cookieConfig: {} = {
  // path: "/",
  secure: process.env.NODE_ENV === "development" ? false : true,
  sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
  httpOnly: true,
};

export const USER_ACCESS_TOKEN_COOKIE = "user_access_token";

export const TEMP_CART_COOKIE = "temporary_cart_id";

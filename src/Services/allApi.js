import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonApi";


// Google Login 
export const googleLoginApi = async (body) => {
  return await commonApi('POST', `${BASE_URL}/api/googleLogin`, body, "")
}

// Login 
export const loginApi = async (body) => {
  return await commonApi('POST', `${BASE_URL}/user/login`, body, "")
}

// Register 
export const registerApi = async (body) => {
  return await commonApi('POST', `${BASE_URL}/user/register`, body, "")
}

//  Generate and verify email otp 
export const emailgenerateOtpApi = async (body) => {
  return await commonApi("POST", `${BASE_URL}/emailOtp`, body, "");
};

export const emailVerificationOtpApi = async (body) => {
  return await commonApi("POST", `${BASE_URL}/emailverification`, body, "");
};


// Generate and verify phone otp 
export const phonegenerateOtpApi = async (body) => {
  return await commonApi("POST", `${BASE_URL}/phoneOtp`, body, "");
}

export const phoneverificationOtpApi = async (body) => {
  return await commonApi("POST", `${BASE_URL}/phoneOtp`, body, "");
}
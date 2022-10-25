import { DateTime, Interval } from "luxon";

export const validateEmail = (email) => {
  return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}

export const validatePassword = (pw) => {
  return pw.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
}

export const validateConfirmPassword = (pw, confirmPw) => {
  return pw === confirmPw;
}

export const validateDateOfBirth = (dobStr) => {
  const dob = DateTime.fromISO(dobStr);
  const interval = Interval.fromDateTimes(dob, DateTime.now())
  return interval.length('years') >= 15;
}

export const validatePhone = (phone) => {
  return phone.match(/^[0-9]{10}/);
}

export const validateUserId = (userId) => {
  const res = userId.match(/^[0-9]{6}/);
  return res;
}

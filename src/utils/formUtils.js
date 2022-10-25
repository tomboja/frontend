import { DateTime, Interval } from "luxon";

export const validateEmail = (email) => {
  return true;
}

export const validatePassword = (pw, confirmPw) => {
  return pw === confirmPw;
}

export const validateDateOfBirth = (dobStr) => {
  const dob = DateTime.fromISO(dobStr);
  const interval = Interval.fromDateTimes(dob, DateTime.now())
  return interval.length('years') >= 15;
}

export const validatePhone = (phone) => {
  return phone.match(/[0-9]{10}/);
}

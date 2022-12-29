export const regExp_Names = new RegExp(/^[a-zA-Z\s]+$/);
export const regExp_Username = new RegExp(/^[a-zA-Z0-9]+$/);
export const regExp_MobileNumber = new RegExp(/^[0-9]{9}$/);
export const regExp_MobileNumberWithDummy = new RegExp(/^[789][0-9]{9}$/);
export const regExp_Password = new RegExp(
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&)(+=.-])(?=.{6,})/
);

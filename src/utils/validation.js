// The error strings in this functions are the keys to the actual
// error string in the translation files.
export const validateEmailFormat = email => {
  const splittedAddress = email.split("@");
  if (
    email.includes(" ") ||
    splittedAddress.length == 1 ||
    splittedAddress.length > 2 ||
    !splittedAddress[splittedAddress.length - 1].includes(".")
  )
    return "contact:error-email-format";
  return undefined;
};

export const validateForm = info => {
  const formErrors = {};
  formErrors.purpose =
    !info || !info.purpose ? "contact:error-purpose" : undefined;
  formErrors.name = !info || !info.name ? "contact:error-name" : undefined;
  formErrors.email =
    !info || !info.email
      ? "contact:error-email"
      : validateEmailFormat(info.email);
  return formErrors;
};

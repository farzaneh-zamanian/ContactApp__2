export const validateNameLastname = (value, name) => {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  if (!value || value.trim() === "") {
    return `Please enter your ${capitalizedName}`;
  }

  if (value.length < 3 || value.length > 20) {
    return `${capitalizedName} must be between 4 and 20 characters`;
  }

  if (!/^[a-zA-Z ]+$/.test(value)) {
    return `${capitalizedName} must contain only letters and spaces`;
  }

  return "";
};

export const validateLastName = (value) => {
  if (!value) return "Please enter your last name";
  if (value.length < 3) return "Last name must be at least 4 characters";
  return "";
};


export const validateEmail = (value) => {
  if (!value) return "Please enter your email address";
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  if (!emailPattern.test(value)) return "Invalid email address.";
  return "";
};

export const validateTelephone = (value) => {
  if (!value) return "Please enter your telephone number";
  const telephonePattern = /^09\d{9}$/;
  if (!telephonePattern.test(value)) return "Invalid telephone number.";
  return "";
};

export const validateInput = (name, value) => {
  switch (name) {
    case "name":
      return validateNameLastname(value, name);
    case "family":
      return validateNameLastname(value, name);
    case "email":
      return validateEmail(value);
    case "telephone":
      return validateTelephone(value);
    default:
      return "";
  }
};
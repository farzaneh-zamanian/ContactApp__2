export const validateName = (value) => {
      if (!value) return "Please enter your name";
      if (value.length < 3) return "Name must be at least 4 characters";
      return "";
    };
    
    export const validateEmail = (value) => {
      if (!value) return "Please enter your email address";
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
      if (!emailPattern.test(value)) return "Invalid email address. Please use a valid email format (e.g. example@example.com)";
      return "";
    };
    
    export const validateTelephone = (value) => {
      if (!value) return "Please enter your telephone number";
      const telephonePattern = /^09\d{9}$/;
      if (!telephonePattern.test(value)) return "Invalid telephone number. Please use a valid 10-digit telephone number starting with 09";
      return "";
    };
    
    export const validateInput = (name, value) => {
      switch (name) {
        case "name":
        case "lastName":
          return validateName(value);
        case "email":
          return validateEmail(value);
        case "telephone":
          return validateTelephone(value);
        default:
          return "";
      }
    };
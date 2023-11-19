const validateEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(value);
  if (isValid) {
    return true;
  }
  return false;
};

export default validateEmail;

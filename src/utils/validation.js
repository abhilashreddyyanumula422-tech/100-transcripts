// Form Validation Utilities

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Check for emojis in email
  const emojiRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F700}-\u{1F77F}]|[\u{1F780}-\u{1F7FF}]|[\u{1F800}-\u{1F8FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA00}-\u{1FA6F}]|[\u{1FA70}-\u{1FAFF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u;
  if (emojiRegex.test(email)) return false;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
};

export const validateRequired = (value) => {
  return value !== null && value !== undefined && value !== '' && value.trim() !== '';
};

export const validateNumeric = (value, min = 0, max = Infinity) => {
  const num = Number(value);
  if (isNaN(num)) return false;
  return num >= min && num <= max;
};

export const validatePrice = (value) => {
  const num = Number(value);
  if (isNaN(num)) return false;
  return num >= 0;
};

export const validateMinLength = (value, min) => {
  return value && value.length >= min;
};

export const validateMaxLength = (value, max) => {
  return !value || value.length <= max;
};

export const validateLettersOnly = (value) => {
  // Only allow letters and spaces
  const lettersOnlyRegex = /^[a-zA-Z\s]+$/;
  return lettersOnlyRegex.test(value);
};

export const validateNoEmojis = (value) => {
  const emojiRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F700}-\u{1F77F}]|[\u{1F780}-\u{1F7FF}]|[\u{1F800}-\u{1F8FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA00}-\u{1FA6F}]|[\u{1FA70}-\u{1FAFF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u;
  return !emojiRegex.test(value);
};

export const getErrorMessage = (field, value, rules = {}) => {
  if (rules.required && !validateRequired(value)) {
    return `${field} is required`;
  }
  
  if (rules.email && value && !validateEmail(value)) {
    return `Please enter a valid email address without emojis`;
  }
  
  if (rules.phone && value && !validatePhone(value)) {
    return `Please enter a valid 10-digit phone number`;
  }
  
  if (rules.lettersOnly && value && !validateLettersOnly(value)) {
    return `${field} should only contain letters and spaces`;
  }
  
  if (rules.noEmojis && value && !validateNoEmojis(value)) {
    return `${field} should not contain emojis`;
  }
  
  if (rules.numeric && value && !validateNumeric(value, rules.min, rules.max)) {
    const range = rules.min !== undefined && rules.max !== undefined 
      ? `between ${rules.min} and ${rules.max}`
      : rules.min !== undefined 
        ? `at least ${rules.min}`
        : rules.max !== undefined 
          ? `at most ${rules.max}`
          : '';
    return `${field} must be a valid number${range ? ' ' + range : ''}`;
  }
  
  if (rules.price && value && !validatePrice(value)) {
    return `${field} cannot be negative`;
  }
  
  if (rules.minLength && value && !validateMinLength(value, rules.minLength)) {
    return `${field} must be at least ${rules.minLength} characters`;
  }
  
  if (rules.maxLength && value && !validateMaxLength(value, rules.maxLength)) {
    return `${field} must not exceed ${rules.maxLength} characters`;
  }
  
  return null;
};

export const validateForm = (formData, validationRules) => {
  const errors = {};
  let isValid = true;
  
  Object.keys(validationRules).forEach((field) => {
    const error = getErrorMessage(
      validationRules[field].label || field,
      formData[field],
      validationRules[field]
    );
    if (error) {
      errors[field] = error;
      isValid = false;
    }
  });
  
  return { errors, isValid };
};

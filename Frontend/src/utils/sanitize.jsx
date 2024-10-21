
// sanitize.js
import DOMPurify from 'dompurify';

export const sanitizeInputs = (fieldIds) => {
  const sanitizedData = {};

  fieldIds.forEach(id => {
    const value = document.getElementById(id).value;
    sanitizedData[id] = DOMPurify.sanitize(value);
  });

  return sanitizedData;
};

export const sanitizeDescription = (description) => {
  return DOMPurify.sanitize(description);
};

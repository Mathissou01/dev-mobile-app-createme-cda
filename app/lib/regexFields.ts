// Email Regex
export const emailRegex = {
  min: 13,
  max: 50,
  pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
};
// Email Next-u Regex
export const emailNextURegex = {
  min: 13,
  max: 50,
  pattern: /^[a-z0-9_-]+\.[a-z0-9_-]+@next-u\.fr$/,
};
// Phone number Regex
export const phoneRegex = {
  pattern:
    /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/,
};

export const nameRegex = {
  min: 1,
  max: 50,
  pattern: /^[a-zA-Z-]+$/,
};

export const messageRegex = {
  min: 10,
  max: 1000,
  pattern:
    /^[A-Za-zàáâãäåæçèéêëìíîïñòóôõöùúûüÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜ0-9\.\'\ʼ\ʻ\’\s\n !\?,;:%\-_'"\(\)\[\]\{\}<>/\\\|@#\$&\*~`\^\+=]{10,1000}$/gm,
};

export const subjectRegex = {
  min: 5,
  max: 50,
  pattern:
  /^([A-Za-zàáâãäåæçèéêëìíîïñòóôõöùúûüÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜ0-9\.\'\ʼ\ʻ\’\s\n !\?,;:%\-_'"\(\)\[\]\{\}<>/\\\|@#\$&\*~`\^\+=]){5,50}$/,
};

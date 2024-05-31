// Messages d'erreur pour les e-mails{/* prettier-ignore */}
export const emailErrors = {
  emptyEmail: "L'email ne peut pas être vide.",
  invalidFormat: "Adresse e-mail invalide. Veuillez vérifier le format (lettre minuscules).",
  missingAtSymbol: "L'adresse e-mail doit contenir le symbole @.",
  tooLong: "L'adresse e-mail est trop longue.",
  tooShort: "L'adresse e-mail est trop courte.",
  notNextU: "Seul une adresse Next-U est acceptée.",
};

// Messages d'erreur pour les numéros de téléphone
export const phoneErrors = {
  emptyEmail: "Le numéro de téléphone ne peut pas être vide.",
  invalidFormat: "Numéro de téléphone invalide. Veuillez utiliser un format valide.",
  missingCountryCode: "Le code de pays est manquant.",
  tooLong: "Le numéro de téléphone est trop long.",
  tooShort: "Le numéro de téléphone est trop court.",
};

// Messages d'erreur pour les messages
export const subjectErrors = {
  empty: "Le sujet ne peut pas être vide.",
  tooShort: "Le sujet est trop court.",
  tooLong: "Le sujet est trop long.",
};

export const messageErrors = {
  empty: "Le message ne peut pas être vide.",
  tooShort: "Le message est trop court (10 caractères min).",
  tooLong: "Le message est trop long (1000 caractères max).",
};

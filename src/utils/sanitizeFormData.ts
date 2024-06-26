export function sanitizeFormData(formData: FormData) {
  const fields = Object.fromEntries(formData);

  const sanitizedFields: { [k: string]: string } = {};

  for (const field in fields) {
    const fieldValue = fields[field];
    if (typeof fieldValue !== "string") continue;
    sanitizedFields[field] = fieldValue.trim();
  }

  return sanitizedFields;
}

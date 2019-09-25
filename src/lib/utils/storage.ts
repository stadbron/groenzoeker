export function toEnvIdentifier(identifier: string): string {
  return identifier.replace('.', '_').toUpperCase();
}

export function getStored(identifier: string) {
  try {
    return JSON.parse(localStorage[identifier]
        ? localStorage[identifier]
        : process.env[toEnvIdentifier(identifier)]);
  } catch (error) {
    return null;
  }
}

export function setStored(identifier: string, value: any) {
  try {
    localStorage[identifier] = JSON.stringify(value);
  } catch (error) {
    return null;
  }

  return null;
}

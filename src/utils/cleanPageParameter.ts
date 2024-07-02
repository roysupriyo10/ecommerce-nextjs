export function cleanPageParameter(param: string) {
  return isNaN(Number(param)) ? 1 : Number(param);
}

export const getJsDateFromExcel = (excelDate) => {
  if (!Number(excelDate)) {
    throw new Error('wrong input format')
  }
  const parsed = (excelDate - (25567 + 2)) * (24 * 60 * 60 * 1000);
  const date = new Date(parsed);
  return date.getFullYear() + "-" + (Number(date.getUTCMonth()) + 1) + "-" + date.getUTCDate();
}

export const normalizeObj = arr =>
  (Array.isArray(arr) ? arr : [arr]).reduce((prev, current) => {
    prev[current.id] = current;
    return prev;
  }, {});
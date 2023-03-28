export const redondearDosDecimales = (num: number) => {
  return +(Math.round(Number(num.toString() + "e+2")) + "e-2");
};

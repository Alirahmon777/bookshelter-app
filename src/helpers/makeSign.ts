import CryptoJS from 'crypto-js';

export const makeSign = (pathWithQuery: string, method?: string, body?: object): string => {
  const bodyString = body ? JSON.stringify(body) : '';

  const signstr = method + pathWithQuery + bodyString + localStorage.getItem('secret');
  const sign = CryptoJS.MD5(signstr).toString();

  console.log('signstr:', signstr);
  console.log('sign:', sign);

  return sign;
};

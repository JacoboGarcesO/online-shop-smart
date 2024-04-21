export enum ErrorsEnum {
  invalidCredentials = 'auth/invalid-credential',
  manyRequests = 'auth/too-many-requests'
}

export const errorsEnumToMessages = (error: ErrorsEnum) => {
  const map = new Map();
  map.set(ErrorsEnum.invalidCredentials, 'Incorrect credentials');
  map.set(ErrorsEnum.manyRequests, 'Many request with this account');

  return map.get(error);
};

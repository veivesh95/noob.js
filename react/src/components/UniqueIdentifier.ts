import md5 from 'blueimp-md5';

export const UniqueIdentifier = (username: string) => {
  return '#' + md5(username).slice(0, 6);
};

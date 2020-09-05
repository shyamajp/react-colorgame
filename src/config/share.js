const url = "https://meripirn.github.io/colorgame/";

export const twitter = (time) => {
  return {
    url,
    shareText: `I played ColorGame! Time:${time}(s) at`,
  };
};

export const facebook = () => {
  return {
    url,
  };
};

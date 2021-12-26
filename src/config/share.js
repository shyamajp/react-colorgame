const url = "https://shyamajp.github.io/react-colorgame/";

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

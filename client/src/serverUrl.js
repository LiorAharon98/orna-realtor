const serverUrl = (routeName) => {
 
  return process.env.NODE_ENV !== "development"
    ? `${process.env.REACT_APP_LOCAL_URL}/${routeName}`
    : `${process.env.REACT_APP_PRODUCTION_API}/${routeName}`;
};
export default serverUrl;

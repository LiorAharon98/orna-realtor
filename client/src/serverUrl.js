const serverUrl = (routeName)=>{

   return process.env.NODE_ENV === "development"
    ? `http://localhost:4000/${routeName}`
    : `https://orna-realtor-node-js-03cea7a828a1.herokuapp.com/${routeName}`;
}
  export default serverUrl
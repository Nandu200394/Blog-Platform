
export const login = (username) => {
    //console.log("Logging in user:", username); 
  localStorage.setItem("user", username);
};
export const logout = (username) => {
    //console.log("Logging in user:", username); 
  localStorage.removeItem("user", username);
};

export const getCurrentUser = () => {
  return localStorage.getItem("user") || "Guest";
};

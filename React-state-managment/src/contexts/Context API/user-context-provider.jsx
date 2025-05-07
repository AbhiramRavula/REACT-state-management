import { useState, createContext } from "react"; 
// 4.4k (gzipped: 1.9k)

const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "pedro", email: "pedro@gmail.com" });
  };

  const logout = () => {
    setUser(null);
  };

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children} {/* Correctly render children */}
    </UserContext.Provider>
  );
};
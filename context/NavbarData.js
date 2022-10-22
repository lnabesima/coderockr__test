import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();
export const useNavbarData = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [openContactModal, setOpenContactModal] = useState(false);
  const [openNewPostModal, setOpenNewPostModal] = useState(false);
  return (
    <NavbarContext.Provider
      value={{
        openContactModal,
        setOpenContactModal,
        openNewPostModal,
        setOpenNewPostModal,
      }}>
      {children}
    </NavbarContext.Provider>
  );
};

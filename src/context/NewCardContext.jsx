import { createContext, useState } from "react";

export const NewCardContext = createContext({
  newCard: [],
  setNewCard: () => {}
})

export const NewCardProvider = ({ children }) => {
  const [newCard, setNewCard] = useState([]);
  const value = { newCard, setNewCard };

  return <NewCardContext.Provider value={value}>{children}</NewCardContext.Provider>;
}

//


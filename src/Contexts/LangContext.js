import React, {useState, useContext} from 'react'

export const LangContext = React.createContext("hun");

export const LangProvider = ({children}) =>{

    const [lang, setLang] = useState("hun");

    const setLangDeu = () => {
        setLang("deu");
    }

    const setLangHun = () => {
        setLang("hun");
    }



    const data = [lang, setLangHun, setLangDeu];
    return <LangContext.Provider value={data}>{children}  </LangContext.Provider>;
}

export const useLang = () => {
    const context = useContext(LangContext);
    return context;
  };
  

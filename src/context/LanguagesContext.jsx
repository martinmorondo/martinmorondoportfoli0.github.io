import { IntlProvider } from "react-intl";
import { useState, createContext } from "react";
import enUS from "../languages/us.json";
import esMX from "../languages/es.json";

const LanguagesContext = createContext();

const LanguagesProvider = ({ children }) => {
  const [locale, setlocale] = useState("en-US");
  const [message, setmessage] = useState(enUS);
const changeLangToEs =()=>{
    setlocale("es-MX")
    setmessage(esMX)
    

}
const changeLangToEn =()=>{
    setlocale("en-US")
    setmessage(enUS)
   

}

  return (
    <IntlProvider locale={locale} messages={message}>
      <LanguagesContext.Provider value={{changeLangToEs,changeLangToEn}}>{children}</LanguagesContext.Provider>
    </IntlProvider>
  );
};


export { LanguagesContext,LanguagesProvider } ;

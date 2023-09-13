import { createContext, useState } from "react";

export let LanguageContext =createContext('AR');

function  LanguageContextProvide(props){

const [language,setlanguage]=useState('AR');

function ChangeLanguage(){
   
    if(language=='AR') {
        setlanguage('EN'); 
    }
    else{
        setlanguage('AR'); 
    }
}
console.log(props.children);
console.log(props.children);


return <LanguageContext.Provider value={{language,ChangeLanguage}}>

{props.children}

</LanguageContext.Provider>

}

export default LanguageContextProvide;
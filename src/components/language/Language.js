import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

export default function Language() {
  let {language,ChangeLanguage}= useContext(LanguageContext)

  return <>

  <div style={{color:'blue',marginTop:'7px'}}>Language :<span onClick={ChangeLanguage} role='button' >{language}</span></div>
  </>
}

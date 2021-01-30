import Head from 'next/head'
import React, { useState } from 'react';
import {Container,WelcomeDiv,LoginDiv,Text,DefaultInput,DefaultButton} from './indexStyles'

//
import BackGroundImg from '../assets/imgs/MainPageLosango.png'

const userServices = require("../services/users")

export default function Index(props) {
  const [urlData, setUrlData] = useState("")
  
  const login = async ()=>{    
    var login = document.getElementById("loginInput").value.trim()
    var senha = document.getElementById("senhaInput").value.trim()
    document.getElementById("textErrorMessage").value = "Usuario Não Encontrado!"
    
    
    try {
      var alo = await userServices.getAll()
 
    } catch (error) {
      
    }

  }
  return (
    <Container BackImg={BackGroundImg}>
      <WelcomeDiv>
        <Text fontSize={'46px'} color={'#000'}>
          Olá!!
        </Text>
        
        <Text fontSize={'25px'} color={'#000'}>
          Faça login em nosso sistema
        </Text>
      </WelcomeDiv>
      <LoginDiv>
        <DefaultInput placeholder={"Login"} id="loginInput"></DefaultInput>
        <DefaultInput placeholder={"Senha"} id="senhaInput"></DefaultInput>
        <DefaultButton onClick={login}>Entrar</DefaultButton>
        <Text id="textErrorMessage" color={"red"}>
          error
        </Text>
      </LoginDiv>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
    
  )
}

import Head from 'next/head'
import React, { useState } from 'react';
import {Container,WelcomeDiv,LoginDiv,Text,DefaultInput,DefaultButton} from '../assets/styles/index'

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
    <div className="main">
    <div className="login">
        <h1>Olá</h1>
        <h2>Para se manter conectado faça o login</h2>
        <form action="">

            <p>Usuario</p>
            <input type="text" name="" placeholder="Insira seu e-mail"></input>

            <p>Senha</p>
            <input type="password" name="" placeholder="Insira sua senha"></input>
            <input type="submit" name="" value="Login"></input>
            <a href="#">Esqueceu sua senha?</a><br/>            

        </form>
    </div>

    </div>     
  )
}

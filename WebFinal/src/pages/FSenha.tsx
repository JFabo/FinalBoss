import { Dispatch, FormEventHandler, SetStateAction } from "react";
import {useNavigate} from "react-router-dom";

export default function () {
  let navigate = useNavigate()
  
  return <>

  <h1> Que pena, o sistema não consegue resolver esse BO não</h1>
  <button type="button" onClick={() => navigate("/")}>Voltar</button>
  <button type="button" onClick={() => navigate("/Cadastro")}>Cadastrar-se "novamente"</button>
  </>
}
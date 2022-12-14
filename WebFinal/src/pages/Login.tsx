import { Dispatch, FormEventHandler, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

export default function () {

  let navigate = useNavigate()
  const enviarDados: FormEventHandler<HTMLFormElement> = async ev => {
    ev.preventDefault()
    const { email, password } = ev.currentTarget

    const request = await fetch(`/api/login/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })

    const responseData = await request.json()

    if (request.status >= 200 && request.status <= 299) {
      localStorage.setItem("token", responseData.token)
      alert("PARABAEINZ!")
      return
    }

    if (responseData.error) {
      alert(responseData.error)
      return
    }

    alert("Cara! deu um erro tão foda, que eu nem sei o que foi!")
  }
  
  
  return <>

  <h1>Bem vindo ao Final Boss</h1>

  <div className="modal">
  <form onSubmit={enviarDados}>
      <h1>Login</h1>

      <div>
      <label htmlFor="nickname">Digite seu nickname: </label>
      <input type="text" name="" id="nickname" placeholder="GamerMonster123" />
      </div>

      <div>
      <label htmlFor="password">Digite a sua senha: </label>
      <input type="text" name="" id="password" placeholder="***********" />
      </div>
    
      <div className="buttons">
      <button type="button" onClick={() => navigate("/Cadastro")}>Cadastrar-se</button>
      <button type="button" onClick={() => navigate("/FSenha")}>Esqueci minha senha</button>
      <button type="submit">&#8594;</button>
      </div>
      
    </form>
  </div>
  
  </>
}
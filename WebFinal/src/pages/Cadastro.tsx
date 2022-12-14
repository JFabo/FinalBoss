import { Dispatch, FormEventHandler, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

export default function () {

  let navigate = useNavigate()
  const enviarDados: FormEventHandler<HTMLFormElement> = async ev => {
    ev.preventDefault()
    const { _name, email, password } = ev.currentTarget

    const request = await fetch(`/api/user/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: _name.value,
        email: email.value,
        password: password.value
      })
    })

    if (request.status >= 200 && request.status <= 299) {
      alert("PARABAEINZ!")
      return
    }

    const responseData = await request.json()
    
    if (responseData.error) {
      alert(responseData.error)
      return
    }

  }

  return <>
  <div className="modal">
  <form onSubmit={enviarDados}>
      <h1>Cadastro</h1>
      <div>
      <label>Coloque um nome ou apelido: </label>
      <input name="_name" placeholder="nickname" />
      </div>
      
      <div>
      <label>Coloque um email: </label>
      <input name="email" placeholder="igotamail@email.com" />
      </div>
      
      <div>
      <label>Escolha uma senha: </label>
      <input name="password" type="password" placeholder="********" />
      </div>
      
      <div className="buttons">
      <button type="button" onClick={() => navigate("/")}>Voltar</button>
      <button type="submit" onClick={() => alert("Usuário Registrado, volte e dê um login")}>Registrar-se</button>
      </div>
      
    </form>
  </div>
  </>
}
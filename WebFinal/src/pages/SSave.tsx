import { Dispatch, FormEventHandler, SetStateAction, useState, MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import BttLogoff from "../components/BttLogoff";

export default function () {
  
  const [name, setName] = useState("___")
  const [email, setEmail] = useState("___")
  let navigate = useNavigate()

  const buscarDados: MouseEventHandler<HTMLButtonElement> = async ev => {
    ev.preventDefault()
    const request = await fetch(`/api/logged/${sessionStorage.getItem('token')}`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sesid: sessionStorage.getItem('token')
      })
    })

    if (request.status >= 200 && request.status <= 299) {
      const user = await request.json()
      setName(user.name)
      setEmail(user.email)
      return
    }

    alert("Deu ruim!")
  }

  const updateSave: FormEventHandler<HTMLFormElement> = async ev => {
      ev.preventDefault()
      const { _name, email, password } = ev.currentTarget

      const sesidRequest = await fetch(`/api/logged/${sessionStorage.getItem('token')}`, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              sesid: sessionStorage.getItem('token')
          })

      })

      if (sesidRequest.status >= 200 && sesidRequest.status <= 299) {
          const user = await sesidRequest.json()
          if (user == "nothing") {
              alert("Usuário não está logado!")
              return
          }
          const updateRequest = await fetch(`/api/user/${user.id}`, {
              method: "PATCH",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  name: _name.value,
                  email: email.value,
                  password: password.value
              })
          })
          if (updateRequest.status >= 200 && updateRequest.status <= 299) {
              sessionStorage.clear()
              alert("Tudo joia.")
              return
          }
          const updateResponseData = await updateRequest.json()

          if (updateResponseData.error) {
              alert(updateResponseData.error)
              return
          }

          alert("PA PA PA PA PA!")
      }else{
          alert("Bah né, deu uns problema com os guri meu")
          return
      }
  }

  
  return <>
  <div className="modal">
    <label>Olá </label>{name}
  <form onSubmit={updateSave}>  
      <h1>Escolha seu save</h1>

    
      <div className="buttons">
      <BttLogoff/>
      <button onClick={() => {}}>Prosseguir com o jogo</button>
      </div>
      
    </form>
  </div>
  </>
}
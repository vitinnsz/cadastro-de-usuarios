
import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {
  
  const users = [
    {
    id: "1234123",
    name: "teste",
    age: 33,
    email: "teste@gmial.com"
    },
    {
    id: "124124",
    name: "teste2",
    age: 34,
    email: "teste2@gmial.com"
    }
  ]

  return (

    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="nome" type="text"/>
        <input placeholder="Idade" name="idade" type="number"  />
        <input placeholder="E-mail" name="email" type="email" />
        <button type='button'> Cadastrar </button>
      </form>

      {users.map((user) => (
        
      <div key = {user.id} className="card">
        <div>
          <p>Nome:   <span>{user.name} </span> </p>
          <p>Idade:  <span>{user.age}  </span> </p>
          <p>Email:  <span>{user.email}</span> </p>
        </div>
      
      <button>
        <img src={Trash}/>
          </button>
        </div>
      
      ))}

      
        
    </div>
    
  )
}

export default Home
import "./styles/style.css";
import {BsPeopleFill} from "react-icons/bs";
import {AiOutlineUserDelete, AiOutlineEdit, AiOutlinePlus} from "react-icons/ai";



function App() {
  return (
    <div className="container">
      
      <main>
        <h1 className="title">Telefone.me</h1>
        <h2 className="subtitle">Adicionar contato</h2>
        <p className="text">Campos com <span className="asterisc">*</span> são obrigatórios:</p>
        <div className="inputs">
          <input className="nome"
          type="text"
          placeholder="Nome...*"
          />
          <input className="sobrenome"
          type="text"
          placeholder="Sobrenome..."
          />
        
          <input className="celular"
          type="text"
          placeholder="N° de telefone...*"
          />
        
          <input className="email"
          type="text"
          placeholder="E-mail..."
          />
        </div>
        <div className="botoes">
          <button className="botaoAdd">
            <AiOutlinePlus size="25" color="#13547a"/> <span className="botaoTexto">Adicionar contato</span>
          </button>
          <button className="botaoCtt">
              <BsPeopleFill size="25" color="#13547a"/> <span className="botaoTexto">Ver contatos</span>
          </button>
        </div>

        <table>
          <thead>
            <th>Contatos</th>
            <button>
              <AiOutlineUserDelete/> <span>Excluir contato</span>
            </button>
            <button>
              <AiOutlineEdit/><span>Editar contato</span>
            </button>
          </thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Telefone</th>
            <th>E-mail</th>
          </tr>

          <tr>
            <td>Arthur</td>
            <td>Lola</td>
            <td>999279920</td>
            <td>arthurlolaoliveira@hotmail.com</td>
          </tr>
        </table>
      </main>



    </div>
  );
}

export default App;

// src/App.jsx
import Mensagem from "./components/mensagem"; 
import Saudacao from "./components/saudacao";

const App = () => {
  return (
    <div>
      <h1>Teste de aula UEA</h1>
      <Mensagem texto="Exibindo texto importado" />
      <Saudacao nome="João" idade={20} /> 
    </div>
  );
};

export default App;

const Saudacao = ({ nome, idade }: { nome: string, idade: number }) => {
    const mensagem = `Oi, meu nome é ${nome} e tenho ${idade} anos`;

    const statusIdade = idade > 18 ? "Usuário maior de idade" : "Usuário menor de idade";
  
    return (
      <div>
        <p>{mensagem}</p> 
        <p>{statusIdade}</p>  
      </div>
    );
  };
  
  export default Saudacao;
  
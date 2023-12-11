// Exporta a função padrão cadastro
export default function cadastro(){
    // Define uma função chamada saveCourse
    function saveCourse(){
        // Usa o servidor
        "use server"
        // Registra a mensagem "Acessou a função" no console
        console.log("Acessou a função")
    }
    // Retorna um elemento div que contém um formulário para cadastrar livros
    return(
        <div>
            <h1 className="text-white text-center text-4xl"> Cadastrar livro</h1>
            <form>
                <input type="text" name="titulo" placeholder="Digite o título do livro " /> <br></br>
                <input type="text" name="autor" placeholder="Digite o autor do livro " /><br></br>
                
                <button formAction={saveCourse} className="text-white"> Salvar</button>

            </form>
        </div>
    )
}

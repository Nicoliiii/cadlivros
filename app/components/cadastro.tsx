export default function cadastro(){
    function saveCourse(){
        "use server"
        console.log("Acessou a função")
    }
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

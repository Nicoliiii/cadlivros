// Importa os componentes Aside e NavBar de seus respectivos arquivos
import Aside from "../components/Aside"
import NavBar from "../components/NavBar"

// Exporta a função padrão AdminLayout
export default function AdminLayout({
    // A função recebe um objeto como parâmetro que tem uma propriedade children do tipo React.ReactNode
    children,
}: {
    children: React.ReactNode
}) {
    // Retorna um elemento div que contém os componentes NavBar, Aside e children
    return (
        <div className="max-w-[1024px] m-auto">
            <NavBar /> {/* Renderiza o componente NavBar */}
            <div className="flex justify-center items-center min-h-screen">
                <Aside /> {/* Renderiza o componente Aside */}
                <div className="p-12 w-screen">
                {children} {/* Renderiza o conteúdo passado como children */}
                </div>
            </div>
        </div>
    )
}

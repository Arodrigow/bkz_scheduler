'use server'
import MainTitleComponent from "../components/mainTitle";
import ParagraphComponent from "../components/paragraph";
import RegisterSection from "../components/registerSection";

export default async function CriarPage() {
    let subjectList: string[] = [];
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center gap-2">
            <MainTitleComponent text={title}></MainTitleComponent>
            <hr className="h-4" />
            <ParagraphComponent content={paragraphContent1}></ParagraphComponent>
            <hr className="h-4" />
            <RegisterSection></RegisterSection>
        </div>

    )
}

const title = "Criador de Horários";
const paragraphContent1 = "Aplicativo para criação de horários da Escola Estadual Salmen Bukzem. Para gerar um horário basta seguir as instruções em cada uma das etapas.";

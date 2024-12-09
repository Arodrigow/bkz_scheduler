import AccordionComponent from "../components/accordion";

export default function CriarPage() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-2">
            <AccordionComponent id="Accordion1" step="1" title="Cadastrar as matérias"></AccordionComponent>
            <AccordionComponent id="Accordion2" step="2" title="Cadastrar os professores"></AccordionComponent>
        </div>

    )
}
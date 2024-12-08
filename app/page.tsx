import ButtonComponent from "./components/button";
import LogoComponent from "./components/logoComponent";
import MainTitleComponent from "./components/mainTitle";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-4 bg-white">
      <LogoComponent></LogoComponent>
      <MainTitleComponent text="Criador de Horários"></MainTitleComponent>
      <ButtonComponent type="confirmation" text="Começar" url="/criar"></ButtonComponent>
    </div>
  )
}

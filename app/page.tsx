import ButtonComponent from "./components/button";
import LogoComponent from "./components/logoComponent";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white">
      <LogoComponent></LogoComponent>
      <ButtonComponent type="confimation" text="Começar" url="/criar"></ButtonComponent>
    </div>
  )
}

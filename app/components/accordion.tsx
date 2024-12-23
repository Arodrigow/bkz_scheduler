'use client'

import { AccordionProps } from "@/types/types";
import ParagraphComponent from "./paragraph";

export default function AccordionComponent(props: AccordionProps) {
    const hendleAccordion = () => {
        let main = document.getElementById(props.id) as HTMLElement;
        let parentElement = main.parentElement as HTMLElement;
        let element = parentElement.parentElement as HTMLElement;
        let indicators = main.querySelectorAll("img");
        let child = element.querySelector("#menu") as HTMLElement;
        let h = element.querySelector("#mainHeading>div>p") as HTMLElement;

        h.classList.toggle("font-semibold");
        child.classList.toggle("hidden");
        indicators[0].classList.toggle("rotate-180");
    }

    return (
            <div className="lg:container lg:mx-auto lg:py-10 md:py-8 md:px-6 py-6 px-4 border-2">
                <div className="w-full mx-auto">
                    <div className="w-full md:px-6">
                        <div id="mainHeading" className="flex justify-between items-center w-full">
                            <div className="">
                                <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-black"><span className="lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-black">Etapa {props.step}.</span> {props.title}</p>
                            </div>
                            <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" id={props.id} onClick={() => { hendleAccordion(); }}>
                                <img className="transform  " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" alt="toggler" />
                                <img className="transform hidden " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg" alt="toggler" />
                            </button>
                        </div>
                        <div id="menu" className="flex-col hidden mt-6 w-full mb-6">
                            <ParagraphComponent content={props.stepGuide}></ParagraphComponent>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
    )
}
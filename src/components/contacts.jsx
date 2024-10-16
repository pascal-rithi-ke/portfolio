import React, { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FormContact from "./form/formContact";

import SlideBottom from "./animation/SlideInBottom";

export function Contacts({ isVisible }) {
  const [startAnimation, setStartAnimation] = useState(false);
  const [key, setKey] = useState(0); // Utilisé pour forcer la réinitialisation de l'animation

  useEffect(() => {
    if (isVisible) {
      setStartAnimation(true);
      setKey((prevKey) => prevKey + 1); // Forcer la réinitialisation de l'animation
    } else {
      setStartAnimation(false);
    }
  }, [isVisible]);

  return (
    <SlideBottom key={key} isVisible={startAnimation}>
      <div className="mt-20 pb-12 px-6 md:h-auto">
        <h2 className="text-2xl font-bold mb-6">Contacts</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <SlideBottom key={key} isVisible={startAnimation}>
                Get in touch ?
              </SlideBottom>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col items-start space-y-2">
                <li>
                  <span className="font-bold">Email :</span>
                  <a
                    href="mailto:pascal.rithi@gmail.com"
                    className="ml-2 relative inline-block text-black group"
                  >
                    pascal.rithi@gmail.com
                    <span
                      className="absolute left-1/2 bottom-0 h-[1px] w-0 bg-black transition-all duration-500 ease-out group-hover:left-0 group-hover:w-full"
                    ></span>
                  </a>
                </li>
                <li>
                  <span className="font-bold">Github :</span>
                  <a
                    href="https://github.com/pascal-rithi-ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 relative inline-block text-black group"
                  >
                    pascal-rithi-ke
                    <span
                      className="absolute left-1/2 bottom-0 h-[1px] w-0 bg-black transition-all duration-500 ease-out group-hover:left-0 group-hover:w-full"
                    ></span>
                  </a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <SlideBottom key={key} isVisible={startAnimation}>
                Send a message by email ?
              </SlideBottom>
            </AccordionTrigger>
            <AccordionContent>
              <FormContact />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </SlideBottom>
  );
}

export default Contacts;

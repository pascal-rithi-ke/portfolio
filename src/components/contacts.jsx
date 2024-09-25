import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import FormContact from "./form/formContact";

export function Contacts() {
  return (
    <>
      <h2 id="contact" className="text-2xl font-bold mb-6">Contacts</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How to contact me?</AccordionTrigger>
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
                    className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-black transition-all duration-500 ease-out group-hover:left-0 group-hover:w-full"
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
                    className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-black transition-all duration-500 ease-out group-hover:left-0 group-hover:w-full"
                  ></span>
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Send a message directly from a form ?
          </AccordionTrigger>
          <AccordionContent>
            <FormContact />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default Contacts;

import * as Accordion from "@radix-ui/react-accordion";
import { faqData } from "../../../data/faqData";
import AccordionArrow from "./AccordionArrow";

function FaqAccordion() {
  return (
    <Accordion.Root
      type="single"
      className="flex flex-col gap-xsm w-full mt-sm"
      collapsible
    >
      {faqData.map((category) => (
        <Accordion.Item key={category.id} value={category.id} className="">
          {/* First level */}
          <Accordion.Header className="outline outline-accent rounded-lg px-xs py-xxs w-full hover:outline-accent-secondary  data-[state=open]:outline-accent-secondary">
            <Accordion.Trigger className="group flex justify-between items-center w-full text-sm font-semibold text-left text-primary cursor-pointer focus-within:outline-accent-secondary">
              {category.title}
              <AccordionArrow />
            </Accordion.Trigger>
          </Accordion.Header>

          {/* Second level */}
          <Accordion.Content>
            <Accordion.Root
              type="single"
              className="flex flex-col gap-xs"
              collapsible
            >
              {category.items.map((item) => (
                <Accordion.Item
                  key={item.id}
                  value={item.id}
                  className="outline rounded-lg outline-secondary bg-bg-secondary hover:outline-accent-secondary data-[state=open]:outline-accent-secondary first:mt-xs "
                >
                  <Accordion.Header className="px-xs py-xxs">
                    <Accordion.Trigger className="group flex justify-between items-center gap-xxs w-full text-sm text-left text-primary cursor-pointer  focus-within:outline-accent-secondary ">
                      {item.question}
                      <AccordionArrow />
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <Accordion.Content className="text-secondary text-xs/11 px-xs py-xxs">
                    {item.answer}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

export default FaqAccordion;

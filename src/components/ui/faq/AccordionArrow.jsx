import { IoIosArrowDown } from "react-icons/io";

function AccordionArrow() {
  return (
    <span className="transition-all ease-in duration-300 group-data-[state=open]:rotate-180">
      <IoIosArrowDown
        className="fill-primary size-xsm  group-data-[state=open]:fill-accent-secondary"
        aria-hidden
      />
    </span>
  );
}

export default AccordionArrow;

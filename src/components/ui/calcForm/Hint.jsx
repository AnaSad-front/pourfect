import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { BsExclamationCircle } from "react-icons/bs";

function Hint({ hint = "Hint title", description = "Some description" }) {
  return (
    <Tippy
      theme="custom"
      content={
        <>
          <h4 className="text-primary text-sm font-semibold mb-xxs">{hint}</h4>{" "}
          <p className="font-normal text-xs/12 text-secondary">{description}</p>
        </>
      }
      placement="auto"
      duration={300}
    >
      <span>
        <BsExclamationCircle className="fill-accent size-xsm" />
      </span>
    </Tippy>
  );
}

export default Hint;

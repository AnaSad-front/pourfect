import { FaRegCopyright } from "react-icons/fa";

function Copyright() {
  return (
    <p className="text-xs text-secondary flex justify-center w-100%">
      Copyright
      <span className="px-2">
        <FaRegCopyright className="fill-secondary size-[1.8rem]" />
      </span>
      {new Date().getFullYear()} Anastasia Sadyreva
    </p>
  );
}

export default Copyright;

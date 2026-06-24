import { splitProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

export default function Order(
  props: JSX.HTMLAttributes<HTMLDivElement> & {
    name: string;
    imgSrc: string;
    imgAlt: string;
  },
) {
  const [local, other] = splitProps(props, ["name", "imgSrc", "imgAlt", "class"])

  return (
    <div
      class={
        "m-1 rounded-2xl text-sm bg-gray h-55 max-w-55 w-100% gap-3 flex flex-col items-center text-center p-2 pt-0 mx-auto hover:scale-110 transition duration-100 ease-in" +
        " " +
        local.class
      }
      {...other}
    >
      <img class="mb-1.5 w-[75%]" src={local.imgSrc} alt={local.imgAlt} />
      <span class="mb-1 block whitespace-pre-wrap font-bold text-xl">
        {local.name}
      </span>
    </div>
  );
}

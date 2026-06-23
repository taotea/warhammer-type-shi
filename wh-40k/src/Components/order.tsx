import { JSX } from "solid-js/jsx-runtime";

export default function Order(
  props: JSX.HTMLAttributes<HTMLDivElement> & {
    name: string;
    imgSrc: string;
    imgAlt: string;
  },
) {
  return (
    <div
      class={
        "m-1 mx-5 rounded-2xl text-sm bg-gray h-55 w-55 gap-3 flex flex-col items-center text-center p-2 pt-0" +
        " " +
        props.class
      }
    >
      <img class="mb-1.5 w-[75%]" src={props.imgSrc} alt={props.imgAlt} />
      <span class="mb-1 block whitespace-pre-wrap font-bold text-xl">
        {props.name}
      </span>
    </div>
  );
}

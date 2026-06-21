import { JSX, JSXElement } from "solid-js";

export default function Card_2(
  props: JSX.HTMLAttributes<HTMLDivElement> & {
    name: string;
    definition: string;
    imgSrc: string;
    imgAlt: string;
    price: string;
  },
): JSXElement {
  return (
    <div
      class={
        "m-1 rounded-2xl text-sm bg-gray h-104 flex flex-col items-center text-center p-2" +
        " " +
        props.class
      }
    >
      <img
        class="mb-1.5 w-full h-[65%]"
        src={props.imgSrc}
        alt={props.imgAlt}
      />
      <span class="mb-1 block whitespace-pre-wrap font-bold text-xl">
        {props.name}
      </span>
      <span class="mb-1 block whitespace-pre-wrap text-[12px]">
        {props.definition}
      </span>
      <div class="flex w-full px-5 justify-between items-center">
        <span class="text-xl">{props.price}</span>
        <button class="text-5xl">+</button>
      </div>
    </div>
  );
}

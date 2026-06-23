import { createSignal, JSX, JSXElement } from "solid-js";

export default function Card_2(
  props: JSX.HTMLAttributes<HTMLDivElement> & {
    name: string;
    definition: string;
    imgSrc: string;
    imgAlt: string;
    price: string;
    onBuy: () => void;
  },
): JSXElement {
  let [bought, setBought] = createSignal(false);

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
        <button
          onClick={() => {
            props.onBuy();
            setBought(true);
            setTimeout(() => {
              setBought(false);
            }, 500);
          }}
          class={"text-5xl" + " " + (bought() ? "text-accent" : "")}
        >
          +
        </button>
      </div>
    </div>
  );
}

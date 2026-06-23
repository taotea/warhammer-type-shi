import { createSignal, JSX, JSXElement, Show } from "solid-js";

export default function Card_1(
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
      <span class="mb-1 block whitespace-pre-wrap font-bold text-xl font-spectral-cs">
        {props.name}
      </span>
      <span class="mb-1 block whitespace-pre-wrap text-[12px]">
        {props.definition}
      </span>
      <span class="text-[#CEDA25] text-xl">{props.price}</span>
      <button
        class={
          "text-[#CABE36] text-xl block w-max bg-[#5D551A] px-7 border-black border" +
          " " +
          (bought()? "bg-[#302c11]" : "")
        }
        onClick={() => {
          props.onBuy();
          setBought(true);
          setTimeout(() => {
            setBought(false);
          }, 500);
        }}
        disabled = { bought()? true : false }
      >
        <Show when={!bought()} fallback="В корзине">
          Купить
        </Show>
      </button>
    </div>
  );
}

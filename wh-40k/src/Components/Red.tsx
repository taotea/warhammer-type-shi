import { JSXElement } from "solid-js";
import { JSX } from "solid-js/h/jsx-runtime";

export default function Red(
  props: JSX.HTMLAttributes<HTMLDivElement> & {
    name: string;
    definition: string; // тут не трогай
    imgSrc: string;
    imgAlt: string;
  },
): JSXElement {
  return (
    <div
      class={
        "bg-linear-to-b from-accent to-secondary m-1 rounded-2xl text-center text-sm border-black border-3 lg:w-65 lg:h-42" +
        " " +
        props.class
      }
    >
      <img src={props.imgSrc} alt={props.imgAlt} class="mb-1.5 mx-auto block" />
      <span class="mb-2 block font-spectral-cs text-2xl font-bold">{props.name}</span>
      <span class="mb-9 block text-1xl font-italic text-glow">{props.definition}</span>
    </div>
  );
}

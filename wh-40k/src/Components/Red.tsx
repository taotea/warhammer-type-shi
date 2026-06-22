import { JSXElement } from "solid-js";
import { JSX } from "solid-js/h/jsx-runtime";

export default function Red(
  props: JSX.HTMLAttributes<HTMLDivElement> & {
    name: JSX.Element;
    definition: JSX.Element;
    imgSrc: string;
    imgAlt: string;
  },
): JSXElement {
  return (
    <div
      class={
        "bg-linear-to-b from-accent to-secondary m-1 rounded-2xl text-center text-sm" +
        " " +
        props.class
      }
    >
      <img src={props.imgSrc} alt={props.imgAlt} class="mb-1.5 mx-auto block" />
      <span class="mb-2 block">{props.name}</span>
      <span class="mb-9 block">{props.definition}</span>
    </div>
  );
}

import { createSignal } from "solid-js";
import "./app.css";

export default function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div class="w-15 h-10 bg-red-500">
      Text
    </div>
  );
}

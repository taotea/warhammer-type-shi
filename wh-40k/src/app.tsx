import "./app.css";
import Card_1 from "./Components/card_1";
import Red from "./Components/Red";

export default function App() {
  return (
    <main class="w-full h-full text-base bg-dark text-light">
      <header class="text-4xl h-[7em] flex items-center justify-center">
        <span class="font-spectral w-min text-center font-extrabold-italic text-glow tracking-widest">Adepta Sororitas ✟</span>
      </header>
      {/* хернюшки красные */}
      <div class="grid auto-rows-fr auto-cols-fr mb-14">
        <Red class={"row-start-1"} name="Name" definition="Definition" imgSrc="dwa" imgAlt="иконка"/>
        <Red class={"row-start-1"} name="Name" definition="Definition" imgSrc="dwa" imgAlt="иконка"/>
        <Red class={"row-start-2"} name="Name" definition="Definition" imgSrc="dwa" imgAlt="иконка"/>
        <Red class={"row-start-2"} name="Name" definition="Definition" imgSrc="dwa" imgAlt="иконка"/>
      </div>
      <div>
        <Card_1 definition="Дуо культовых книг за авторством Джеймса Сваллоу"
                name={"“Вера и Пламя”\n“Молот и Наковальня”"}
                price="59,99$"
                imgSrc="image.png"
                imgAlt="kurwa">
        </Card_1>
      </div>
    </main>
  );
}

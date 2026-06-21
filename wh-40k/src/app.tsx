import { createSignal, Show } from "solid-js";
import "./app.css";
import Card_1 from "./Components/card_1";
import Card_2 from "./Components/card_2";
import Order from "./Components/order";
import Red from "./Components/Red";
import { Motion, Presence } from "solid-motionone";

export default function App() {
  const [menuOpen, setMenuOpen] = createSignal(false);

  return (
    <main class="w-full h-full text-base bg-dark text-light p-2">
      <header
        id="sanctuary"
        class="mb-4 -m-2 text-4xl h-[7em] flex items-center justify-center bg-[url('kimchonung.png')]"
      >
        <span class="font-spectral w-min text-center font-extrabold-italic text-glow tracking-widest">
          Adepta Sororitas ✟
        </span>
      </header>
      {/* хернюшки красные */}
      <div class="grid auto-rows-fr auto-cols-fr mb-14">
        <Red
          class={"row-start-1"}
          name="Name"
          definition="Definition"
          imgSrc="dwa"
          imgAlt="иконка"
        />
        <Red
          class={"row-start-1"}
          name="Name"
          definition="Definition"
          imgSrc="dwa"
          imgAlt="иконка"
        />
        <Red
          class={"row-start-2"}
          name="Name"
          definition="Definition"
          imgSrc="dwa"
          imgAlt="иконка"
        />
        <Red
          class={"row-start-2"}
          name="Name"
          definition="Definition"
          imgSrc="dwa"
          imgAlt="иконка"
        />
      </div>
      {/* карточка */}
      <div>
        <Card_1
          definition="Дуо культовых книг за авторством Джеймса Сваллоу"
          name={"“Вера и Пламя”\n“Молот и Наковальня”"}
          price="59,99$"
          imgSrc="image.png"
          imgAlt="kurwa"
          onBuy={() => console.log("карточка 1")}
        />
      </div>
      {/* Наш ассортимент: */}
      <div id="catalogue">
        <p class="my-30 text-center text-5xl">Наш ассортимент:</p>
        <div class="flex flex-col gap-2">
          <Card_2
            class=""
            name="Худи с капюшоном, вышивка Fleur de Lys"
            definition="Худи, сшитое из натурального хлопка. По-середине стойкий принт символа Ордена."
            price="59,99$"
            imgSrc="hude.png"
            imgAlt="hudi"
            onBuy={() => console.log("карточка 2")}
          />
          <Card_2
            class=""
            name="Худи с капюшоном, вышивка Fleur de Lys"
            definition="Худи, сшитое из натурального хлопка. По-середине стойкий принт символа Ордена."
            price="59,99$"
            imgSrc="hude.png"
            imgAlt="hudi"
            onBuy={() => console.log("карточка 2")}
          />
          <Card_2
            class=""
            name="Худи с капюшоном, вышивка Fleur de Lys"
            definition="Худи, сшитое из натурального хлопка. По-середине стойкий принт символа Ордена."
            price="59,99$"
            imgSrc="hude.png"
            imgAlt="hudi"
            onBuy={() => console.log("карточка 2")}
          />
          <Card_22
            class=""
            name="Худи с капюшоном, вышивка Fleur de Lys"
            definition="Худи, сшитое из натурального хлопка. По-середине стойкий принт символа Ордена."
            price="59,99$"
            imgSrc="hude.png"
            imgAlt="hudi"
            onBuy={() => console.log("карточка 2")}
          />
          <Card_2
            class=""
            name="Худи с капюшоном, вышивка Fleur de Lys"
            definition="Худи, сшитое из натурального хлопка. По-середине стойкий принт символа Ордена."
            price="59,99$"
            imgSrc="hude.png"
            imgAlt="hudi"
            onBuy={() => console.log("карточка 2")}
          />
          <Card_2
            class=""
            name="Худи с капюшоном, вышивка Fleur de Lys"
            definition="Худи, сшитое из натурального хлопка. По-середине стойкий принт символа Ордена."
            price="59,99$"
            imgSrc="hude.png"
            imgAlt="hudi"
            onBuy={() => console.log("карточка 2")}
          />
        </div>
      </div>
      {/* Лор */}
      <div id="lore">
        <div class="bg-secondary -mx-2 text-center p-8 text-3xl/13">
          † "Вера - наш щит. Ярость - наше оружие." †
        </div>
        <img src="kimcha.png" alt="" />
        <p>
          Adepta Sororitas, еще называемые Сёстрами Битвы - женское воинство
          Экклезиархии, элита Империума, “Святое Войско”. НЕ путать с
          Космодесантниками, Сёстры - это иная фракция, которая не подчиняется
          Астартес. После восстания Себастьяна Тора, указом Императора было
          запрещено содержать мужские армии под контролем Церкви. Но правилами
          не запрещено было создавать женские боевые ордена. Сёстры - это живое
          воплощение фанатичной веры в Бога-Императора, которая способна
          вычищать целые полчища еретиков одними только молитвами. Их вера
          защищает их от ранений. Их молитвы способны противостоять демонам
          Хаоса. Их орудия и невероятная фанатичность сеет страх и ужас в глазах
          врага.
        </p>
        <img src="chubaka.png" alt="" />
        <p>
          Как и космодесант, Сёстры любят оружие помощнее и побольше. Их
          излюбленные оружия, ласково называемые “троицей”: Мельта (плазма),
          Огнемёт и Священный Болтер - стрелковое оружие с гигантским калибром,
          чаще всего с освящёнными боеприпасами на борту.
        </p>
        <img src="bumbum.png" alt="" />
        <p>
          “Враги Императора настолько осквернены, что не замечают ужаса и
          ущербности своих собственных жалких жизней. Убийство настолько
          опустившихся существ может показаться актом милосердия, кровавым
          благословением. Но так думать нельзя, ибо еретик, чужой и предатель не
          заслуживают подобных благословений. Посвящайте их смерти Владыке
          человечества и не думайте о врагах, которых вы убиваете, ни в каком
          другом ключе, кроме как о жертвах во имя Его вечной славы.” - Святая
          Целестина, “Размышления о природе праведного возмездия”
        </p>
        <p>Основными Дочерними Орденами являются:</p>
        <div class="flex flex-col items-center mb-30">
          <Order
            name={"Our Martyred Lady -\nФанатизм"}
            imgSrc="bloblo.png"
            imgAlt="kurwa ya perdole"
          />
          <Order
            name={"Our Martyred Lady -\nФанатизм"}
            imgSrc="bloblo.png"
            imgAlt="kurwa ya perdole"
          />
          <Order
            name={"Our Martyred Lady -\nФанатизм"}
            imgSrc="bloblo.png"
            imgAlt="kurwa ya perdole"
          />
          <Order
            name={"Our Martyred Lady -\nФанатизм"}
            imgSrc="bloblo.png"
            imgAlt="kurwa ya perdole"
          />
        </div>
        <img src="chupapi.png" alt="" />
        <p>
          Символ Ордена - Fleur de Lys (Лилия), означающая чистоту и
          жертвенность. Сам по себе символ крайне известен. В истории он
          традиционно ассоциировался с французской монархией, чистотой и
          королевской властью. Но во вселенной Warhammer 40K его в основном
          ассоциируют именно с Сёстрами Битвы.
        </p>
        <img src="jutjut.png" alt="" />
        <p>
          Войска Сестёр Битвы тоже по-своему разнообразны. Серафимы, например,
          являются элитными войсками, чья задача - нападать с небес на прыжковых
          ранцах. Их цель - устрашать врага внезапным появлением, давая другим
          отрядам сестёр окно для стрельбы на поражение.
        </p>
        <img src="munana.png" alt="" />
        <p>
          Воздаятельницы - безумно интересная часть Адепта. Их рутина по
          выкашиванию ереси специализируется на работе с Тяжёлыми Болтерами,
          Огнемётами и Мульти-Мельтами. На этих карателей ложится тяжкая
          ответственность за оказание прицельной огневой поддержки их
          наступающим сёстрам. Несмотря на их бронебойность и сильное влияние на
          исход боя, они являются одними из самых уравновешенных и невозмутимых
          воительниц, хоть и не менее кровожадных. Учитывая умение Сестёр
          мастерски определять приоритетные цели и слабые места противника,
          отделение Воздаятельниц, с их разрушительным вооружением, делает их
          ужасающе мощной боевой единицей на поле боя.
        </p>
        <img src="kurgan.png" alt="" />
        <p>
          Сёстры Репентии, однако, не так хорошо видны на фоне остальных. Не все
          сёстры полностью защищены верой от влияния грязных рук Хаоса и
          холодных сомнений. Репентией может стать любая, вне зависимости от
          статуса. Задача и смысл жизни Репентий - покаяться за грехи перед
          Императором, или умереть во имя его славы. Лысые, одетые в лохмотья, с
          единственным оружием в руках - цепным мечом - каждая Репентия рвётся в
          бой с ощущением, что она подвела своих сестёр, свой орден и Императора
          лично. Репентии известны тем, что на поле боя ведут себя невероятно
          агрессивно. Они не заботятся о собственной жизни - они существуют ради
          искупления и убийств врагов своей веры, поэтому рвутся в самую гущу
          битвы, лишь бы убить как можно больше во славу имени Его.
        </p>
      </div>
      {/* Обратная связь */}
      <div
        class="bg-linear-to-b from-[#433434] to-[#A98383] p-2 m-2 rounded-2xl"
        id="puhelinnumero"
      >
        <p class="text-center">ОБРАТНАЯ СВЯЗЬ</p>
        <p>Почта: defaduptus@gmail.com</p>
        <p>Телефон: +79989483645</p>
        <p>Telegram: @killyourself_dept</p>
        <p>======================================</p>
        <p>
          Возникли проблемы во время или после покупки? Напишите нам и
          расскажите свою проблему! Также разрешается предлагать идеи для
          дополнения страницы с лором. Ну, так, на всякий случай.
        </p>
      </div>
      {/* корзина */}
      <img
        src="cart.svg"
        alt="корзина"
        class="bg-secondary rounded-2xl fixed bottom-4.5 right-4.5"
      />
      {/* кнопка меню сверху слева */}
      <img
        src="menu.svg"
        alt="меню"
        class="fixed top-4.5 left-4.5"
        onClick={() => {
          setMenuOpen(true);
        }}
      />
      {/* само меню */}
      <Presence>
        <Show when={menuOpen()}>
          <Motion
            class="fixed top-0 left-0 h-screen w-screen bg-dark/80"
            onClick={() => {
              setMenuOpen(false);
            }}
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <div
              class="fixed top-0 p-5 left-0 flex flex-col items-center h-75 w-60 
                  justify-between bg-linear-to-b from-accent to-dark
                  rounded-2xl rounded-bl-none rounded-tl-none text-xl"
            >
              <div class="w-3/4 bg-light h-1" />
              <p>
                <a href="#sanctuary">Святилище</a>
              </p>
              <p>
                <a href="#catalogue">Каталог</a>
              </p>
              <p>
                <a href="#lore">Лор</a>
              </p>
              <p>
                <a href="#puhelinnumero">Обратная Связь</a>
              </p>
            </div>
          </Motion>
        </Show>
      </Presence>
    </main>
  );
}

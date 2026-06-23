import { createEffect, createSignal, Show } from "solid-js";
import "./app.css";
import Card_1 from "./Components/card_1";
import Card_2 from "./Components/card_2";
import Order from "./Components/order";
import Red from "./Components/Red";
import { Motion, Presence } from "solid-motionone";
import { createStore } from "solid-js/store";
import Product from "./Types/product";

export default function App() {
  const [menuOpen, setMenuOpen] = createSignal(false);
  const [cartOpen, setCartOpen] = createSignal(false);
  const [cart, setCart] = createStore<Product[]>([]);

  return (
    <main class="w-full h-full text-base bg-dark text-light p-2">
      <header
        id="sanctuary"
        class="mb-4 -m-2 text-4xl h-[7em] flex items-center justify-center bg-[url('dev.png')] bg-position-[center_top_-7rem]"
      >
        <span class="w-min text-center font-bold italic text-glow tracking-widest font-spectral-cs text-5xl">Adepta Sororitas <span class="font-medium">✟</span></span> 
        
      </header>
      {/* хернюшки красные */}
      <div class="grid auto-rows-fr auto-cols-fr mb-14 lg:flex lg:items-center lg:justify-center lg:gap-2">
        <Red
          class={"row-start-1"}
          name="Ритуальные одежды"
          definition="Худи, футболки, плащи"
          imgSrc="clothes.png"
          imgAlt="иконка"
        />
        <Red
          class={"row-start-1"}
          name="Символы веры"
          definition="Кольца, кулоны, печати"
          imgSrc="diamond.png"
          imgAlt="иконка"
        />
        <Red
          class={"row-start-2"}
          name="Алтарная утварь"
          definition="Кружки, фляги"
          imgSrc="cups.png"
          imgAlt="иконка"
        />
        <Red
          class={"row-start-2"}
          name="Писания и книги"
          definition="Артбуки, постеры, книги"
          imgSrc="book.png"
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
          onBuy={() => {
            setCart(cart.length, {
              name: "“Вера и Пламя”\n“Молот и Наковальня”",
              definition: "Дуо культовых книг за авторством Джеймса Сваллоу",
              price: 59.99,
            });
          }}
        />
      </div>
      {/* Наш ассортимент: */}
      <div id="catalogue">
        <p class="my-30 text-center text-5xl font-spectral-cs">
          Наш ассортимент:
        </p>
        <div class="flex flex-col gap-2">
          <Card_2
            class=""
            name="Худи с капюшоном, вышивка Fleur de Lys"
            definition="Худи, сшитое из натурального хлопка. По-середине стойкий принт символа Ордена."
            price="59,99$"
            imgSrc="hude.png"
            imgAlt="hudi"
            onBuy={() =>
              setCart(cart.length, {
                name: "Худи с капюшоном, вышивка Fleur de Lys",
                definition:
                  "Худи, сшитое из натурального хлопка. По-середине стойкий принт символа Ордена.",
                price: 59.99,
              })
            }
          />
          <Card_2
            class=""
            name="Футболка с принтом Fleur de Lys"
            definition="Чёрная футболка с принтом Ордена. Никаких излишков."
            price="39,99$"
            imgSrc="t-shirt.png"
            imgAlt="ts"
            onBuy={() =>
              setCart(cart.length, {
                name: "Футболка с принтом Fleur de Lys",
                definition:
                  "Чёрная футболка с принтом Ордена. Никаких излишков.",
                price: 39.99,
              })
            }
          />
          <Card_2
            class=""
            name="Чётки Адепта из чёрного дерева"
            definition="Чётки, выполненные из чёрного дерева вручную нашими мастерами. На концах дополнительно висят медали и крест."
            price="29,99$"
            imgSrc="adept.png"
            imgAlt="ad"
            onBuy={() =>
              setCart(cart.length, {
                name: "Чётки Адепта из чёрного дерева",
                definition:
                  "Чётки, выполненные из чёрного дерева вручную нашими мастерами. На концах дополнительно висят медали и крест.",
                price: 29.99,
              })
            }
          />
          <Card_2
            class=""
            name="Печать чистоты Adepta Sororitas"
            definition="Печать выполнена из натуральной краски и дополнена тканью с ручной гравировкой молитв. Купив Печать, Император будет вдохновлять и защищать вас."
            price="34,99$"
            imgSrc="seal-of-purity.png"
            imgAlt="seal"
            onBuy={() =>
              setCart(cart.length, {
                name: "Печать чистоты Adepta Sororitas",
                definition:
                  "Печать выполнена из натуральной краски и дополнена тканью с ручной гравировкой молитв. Купив Печать, Император будет вдохновлять и защищать вас.",
                price: 34.99,
              })
            }
          />
          <Card_2
            class=""
            name="“Отряд Сестёр на перепутье с Хаосом”"
            definition="Постер-иллюстрация, выполненная на холсте, размер А2. Сзади прикреплен специальный держатель, если захочется повесить на стену. Значок Аквилы в подарок."
            price="24,99$"
            imgSrc="cool-picture.png"
            imgAlt="picture"
            onBuy={() =>
              setCart(cart.length, {
                name: "“Отряд Сестёр на перепутье с Хаосом”",
                definition:
                  "Постер-иллюстрация, выполненная на холсте, размер А2. Сзади прикреплен специальный держатель, если захочется повесить на стену. Значок Аквилы в подарок.",
                price: 24.99,
              })
            }
          />
          <Card_2
            class=""
            name="Термокружка с гравировкой Ордена"
            definition="Термокружка, которая способна выдержать любые горячие напитки. Красивая гравировка выполнена вручную."
            price="39,99$"
            imgSrc="mega-cup.png"
            imgAlt="cup"
            onBuy={() =>
              setCart(cart.length, {
                name: "Термокружка с гравировкой Ордена",
                definition:
                  "Термокружка, которая способна выдержать любые горячие напитки. Красивая гравировка выполнена вручную.",
                price: 39.99,
              })
            }
          />
        </div>
      </div>
      <br></br>
      <br></br>

      {/* Лор */}
      <div id="lore">
        <div class="bg-secondary -mx-2 text-center p-8 text-3xl/13 semibold-italic">
          <span class="text-yellow-300">†</span>{" "}
          <span class="font-spectral-cs">
            "Вера - наш щит. Ярость - наше оружие."
          </span>
          <span class="text-yellow-300">†</span>
        </div>
        <img src="kimcha.png" alt="" />
        <p>
          <span class="text-yellow-300">Adepta Sororitas</span>, еще называемые{" "}
          <span class="text-yellow-300">Сёстрами Битвы</span> - женское воинство
          Экклезиархии, элита Империума, “Святое Войско”. НЕ путать с
          <span class="text-red-500">Космодесантниками</span>, Сёстры - это иная
          фракция, которая не подчиняется Астартес. После восстания Себастьяна
          Тора, указом <span class="text-yellow-300">Императора</span> было
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
          излюбленные оружия, ласково называемые “троицей”:{" "}
          <span class="text-yellow-300">Мельта</span> (плазма),
          <span class="text-yellow-300">Огнемёт</span> и{" "}
          <span class="text-yellow-300">Священный Болтер</span> - стрелковое
          оружие с гигантским калибром, чаще всего с освящёнными боеприпасами на
          борту.
        </p>
        <img src="bumbum.png" alt="" />
        <p>
          <span class="text-yellow-300 font-bold">
            “Враги Императора настолько осквернены, что не замечают ужаса и
            ущербности своих собственных жалких жизней. Убийство настолько
            опустившихся существ может показаться актом милосердия, кровавым
            благословением. Но так думать нельзя, ибо еретик, чужой и предатель
            не заслуживают подобных благословений. Посвящайте их смерти Владыке
            человечества и не думайте о врагах, которых вы убиваете, ни в каком
            другом ключе, кроме как о жертвах во имя Его вечной славы.”
          </span>{" "}
          - <span class="text-yellow-300"> Святая Целестина</span>, “Размышления
          о природе праведного возмездия”
        </p>
        <br></br>
        <p>Основными Дочерними Орденами являются:</p>
        <div class="flex flex-col items-center mb-30">
          <Order
            name={"Our Martyred Lady -\nФанатизм"}
            imgSrc="martyred-lady.png"
            imgAlt="kurwa ya perdole"
          />
          <Order
            name={"Ebon Chalice -\nЧистота"}
            imgSrc="ebon.png"
            imgAlt="kurwa ya perdole"
          />
          <Order
            name={"Sacred Rose -\nСпокойствие"}
            imgSrc="sacred-rose.png"
            imgAlt="kurwa ya perdole"
          />
          <Order
            name={"Bloody Rose -\nЯрость"}
            imgSrc="bloody-rose.png"
            imgAlt="kurwa ya perdole"
          />
        </div>
        <img src="chupapi.png" alt="" />
        <p>
          Символ Ордена - <span class="text-yellow-300">Fleur de Lys</span>{" "}
          (Лилия), означающая чистоту и жертвенность. Сам по себе символ крайне
          известен. В истории он традиционно ассоциировался с французской
          монархией, чистотой и королевской властью. Но во вселенной Warhammer
          40K его в основном ассоциируют именно с Сёстрами Битвы.
        </p>
        <img src="jutjut.png" alt="" />
        <p>
          Войска Сестёр Битвы тоже по-своему разнообразны.{" "}
          <span class="text-yellow-300">Серафимы</span>, например, являются
          элитными войсками, чья задача - нападать с небес на прыжковых ранцах.
          Их цель - устрашать врага внезапным появлением, давая другим отрядам
          сестёр окно для стрельбы на поражение.
        </p>
        <img src="munana.png" alt="" />
        <p>
          <span class="text-yellow-300">Воздаятельницы</span> - безумно
          интересная часть Адепта. Их рутина по выкашиванию ереси
          специализируется на работе с Тяжёлыми Болтерами, Огнемётами и
          Мульти-Мельтами. На этих карателей ложится тяжкая ответственность за
          оказание прицельной огневой поддержки их наступающим сёстрам. Несмотря
          на их бронебойность и сильное влияние на исход боя, они являются
          одними из самых уравновешенных и невозмутимых воительниц, хоть и не
          менее кровожадных. Учитывая умение Сестёр мастерски определять
          приоритетные цели и слабые места противника, отделение Воздаятельниц,
          с их разрушительным вооружением, делает их ужасающе мощной боевой
          единицей на поле боя.
        </p>
        <img src="kurgan.png" alt="" />
        <p>
          <span class="text-yellow-300">Сёстры Репентии</span>, однако, не так
          хорошо видны на фоне остальных. Не все сёстры полностью защищены верой
          от влияния грязных рук Хаоса и холодных сомнений. Репентией может
          стать любая, вне зависимости от статуса. Задача и смысл жизни Репентий
          - покаяться за грехи перед Императором, или умереть во имя его славы.
          Лысые, одетые в лохмотья, с единственным оружием в руках - цепным
          мечом - каждая Репентия рвётся в бой с ощущением, что она подвела
          своих сестёр, свой орден и Императора лично. Репентии известны тем,
          что на поле боя ведут себя невероятно агрессивно. Они не заботятся о
          собственной жизни - они существуют ради искупления и убийств врагов
          своей веры, поэтому рвутся в самую гущу битвы, лишь бы убить как можно
          больше во славу имени <span class="text-yellow-300">Его</span>.
        </p>
      </div>
      <br></br>
      <br></br>

      {/* Обратная связь */}
      <div
        class="bg-linear-to-b from-[#433434] to-[#A98383] p-2 m-2 rounded-2xl"
        id="puhelinnumero"
      >
        <span class="font-spectral-cs">
          <p class="text-center">ОБРАТНАЯ СВЯЗЬ</p>
          <p>Почта: defaduptus@gmail.com</p>
          <p>Телефон: +79989483645</p>
          <p>Telegram: @killyourself_dept</p>
        </span>
        <p>======================================</p>
        <p>
          Возникли проблемы во время или после покупки? Напишите нам и
          расскажите свою проблему! Также разрешается предлагать идеи для
          дополнения страницы с лором. Ну, так, на всякий случай.
        </p>
      </div>
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
      {/* корзина */}
      <img
        src="cart.svg"
        alt="корзина"
        class="bg-secondary rounded-2xl fixed bottom-4.5 right-4.5"
        onclick={() => {
          setCartOpen(true);
        }}
      />
      {/* всплывашка корзины */}
      <Presence>
        <Show when={cartOpen()}>
          <Motion class="fixed bottom-5 right-5 h-50 w-50 bg-accent">
            
          </Motion>
        </Show>
      </Presence>
    </main>
  );
}

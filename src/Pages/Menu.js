import f1 from "../assets/images/f1.png";
import f2 from "../assets/images/f2.png";
import f3 from "../assets/images/f3.png";
import f4 from "../assets/images/f4.png";
import f5 from "../assets/images/f5.png";
import f6 from "../assets/images/f6.png";
import f7 from "../assets/images/f7.png";
import f8 from "../assets/images/f8.png";
import f9 from "../assets/images/f9.png";
import breadBarrel from "../assets/img/menu/bread-barrel.jpg";
import caesar from "../assets/img/menu/caesar.jpg";
import cake from "../assets/img/menu/cake.jpg";
import greekSalad from "../assets/img/menu/greek-salad.jpg";
import lobsterBisque from "../assets/img/menu/lobster-bisque.jpg";
import lobsterRoll from "../assets/img/menu/lobster-roll.jpg";
import mozzarella from "../assets/img/menu/mozzarella.jpg";
import spinachSalad from "../assets/img/menu/spinach-salad.jpg";
import tuscanGrilled from "../assets/img/menu/tuscan-grilled.jpg";
import { useState } from "react";
import "../assets/css/Menu.css";
export default function Menu() {
  const [filter, setFilter] = useState("All");
  const menuItems = [
    // Pizzas
    {
      id: 1,
      name: "Pizza Délicieuse",
      description:
        "Un vrai plaisir gourmand, préparé avec soin pour ravir tous les amateurs de saveurs.",
      src: f1,
      type: "Pizza",
      price: "70DH",
    },
    {
      id: 3,
      name: "Pizza Classique",
      description:
        "Pizza préparée avec sauce tomate, fromage fondant et garnitures fraîches.",
      src: f3,
      type: "Pizza",
      price: "70DH",
    },
    {
      id: 4,
      name: "Pâtes Délicieuses",
      description:
        "Des pâtes savoureuses préparées avec une sauce riche et des ingrédients frais pour un plaisir garanti.",
      src: f4,
      type: "Pasta",
      price: "40DH",
    },

    // Burgers
    {
      id: 2,
      name: "Burger Délicieux",
      description:
        "Un burger juteux et savoureux, préparé avec des ingrédients frais pour satisfaire tous les gourmands.",
      src: f2,
      type: "Burger",
      price: "60DH",
    },
    {
      id: 7,
      name: "Burger Savoureux",
      description:
        "Un burger juteux et gourmand, préparé avec des ingrédients frais pour satisfaire tous les amateurs de saveurs.",
      src: f7,
      type: "Burger",
      price: "70DH",
    },
    {
      id: 8,
      name: "Burger Gourmand",
      description:
        "Burger avec viande tendre, fromage fondant et légumes frais pour un goût exceptionnel.",
      src: f8,
      type: "Burger",
      price: "80DH",
    },

    // Salades / Accompagnements
    {
      id: 5,
      name: "Frites Maison",
      description:
        "Des frites croustillantes à l’extérieur et fondantes à l’intérieur, préparées à partir de pommes de terre fraîches pour un vrai régal.",
      src: f5,
      type: "Salad",
      price: "15DH",
    },
    {
      id: 6,
      name: "Pizza Spéciale",
      description:
        "Pizza garnie de fromage, légumes et herbes aromatiques pour un goût unique.",
      src: f6,
      type: "Pizza",
      price: "80DH",
    },
    {
      id: 9,
      name: "Pâtes à la Bolognaise",
      description:
        "Pâtes savoureuses accompagnées d’une sauce bolognaise maison riche en goût.",
      src: f9,
      type: "Pasta",
      price: "70DH",
    },

    // Menu classique
    {
      id: 10,
      name: "Pain Baril",
      description:
        "Pain artisanal croustillant, idéal pour accompagner vos plats.",
      src: breadBarrel,
      type: "Bread",
      price: "20DH",
    },
    {
      id: 11,
      name: "Salade César",
      description:
        "Une salade classique avec laitue croquante, parmesan et croûtons dorés, assaisonnée d'une délicieuse sauce César.",
      src: caesar,
      type: "Salad",
      price: "40DH",
    },
    {
      id: 12,
      name: "Gâteau au Chocolat",
      description:
        "Moelleux et fondant, ce gâteau au chocolat ravira les plus gourmands.",
      src: cake,
      type: "Dessert",
      price: "60DH",
    },
    {
      id: 13,
      name: "Salade Grecque",
      description:
        "Tomates, concombres, olives et feta, assaisonnés d’huile d’olive pour une explosion de saveurs méditerranéennes.",
      src: greekSalad,
      type: "Salad",
      price: "45DH",
    },
    {
      id: 14,
      name: "Bisque de Homard",
      description:
        "Velouté riche et savoureux à base de homard, parfait pour les amateurs de fruits de mer.",
      src: lobsterBisque,
      type: "Soup",
      price: "80DH",
    },
    {
      id: 15,
      name: "Rouleau de Homard",
      description:
        "Pain moelleux garni de homard frais et de condiments savoureux.",
      src: lobsterRoll,
      type: "Seafood",
      price: "70DH",
    },
    {
      id: 16,
      name: "Mozzarella Fraîche",
      description:
        "Fromage mozzarella onctueux, parfait pour vos salades et pizzas.",
      src: mozzarella,
      type: "Cheese",
      price: "80DH",
    },
    {
      id: 17,
      name: "Salade d’Épinards",
      description:
        "Épinards frais, assaisonnés avec une vinaigrette légère et ingrédients croquants.",
      src: spinachSalad,
      type: "Salad",
      price: "40DH",
    },
    {
      id: 18,
      name: "Poulet Grillé à la Toscane",
      description:
        "Poulet tendre grillé avec des herbes aromatiques à l’italienne.",
      src: tuscanGrilled,
      type: "Main",
      price: "90DH",
    },
  ];

  const types = ["All", ...new Set(menuItems.map((item) => item.type))];

  const filteredItems =
    filter === "All"
      ? menuItems
      : menuItems.filter((item) => item.type === filter);

  return (
    <div style={{ marginTop: "60px" }} className="menu-container">
      {/* Buttons */}
      <div className="menu-buttons">
        {types.map((btn) => (
          <button
            key={btn}
            onClick={() => setFilter(btn)}
            className={filter === btn ? "active" : ""}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      {filteredItems.map((item) => (
        <div key={item.id} className="menu-item">
          <img src={item.src} alt={item.name} />
          <div className="menu-item-info">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>
              <strong>{item.price}</strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

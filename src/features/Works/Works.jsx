import "./works.style.css";
import ItemImg from "../../assets/hool.png";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Candle",
    description: "Creative Candle Light1",
    image: ItemImg,
    category: "ux_design",
  },
  {
    id: 2,
    title: "Paint",
    description: "Creative Candle Light2",
    image: ItemImg,
    category: "html",
  },
  {
    id: 3,
    title: "UX/UI sample",
    description: "Creative Candle Light3",
    image: ItemImg,
    category: "react",
  },
  {
    id: 4,
    title: "Packet",
    description: "Creative Candle Light4",
    image: ItemImg,
    category: "node",
  },
  {
    id: 5,
    title: "Packet",
    description: "Creative Candle Light5",
    image: ItemImg,
    category: "ux_design",
  },
  {
    id: 6,
    title: "Cream",
    description: "Creative Candle Light6",
    image: ItemImg,
    category: "linux_design",
  },
];

const Works = () => {
  const [filter, setFilter] = useState("all");

  const getFilterData = () => {
    return filter === "all"
      ? data
      : data.filter((item) => item.category === filter);
  };
  return (
    <div className="works_holder">
      <h1>WORKS</h1>
      <div className="works_navigation">
        <span
          onClick={() => setFilter("all")}
          className={filter === "all" && "active"}
        >
          ALL
        </span>
        <span
          onClick={() => setFilter("linux_design")}
          className={filter === "linux_design" && "active"}
        >
          LINUX
        </span>
        <span
          onClick={() => setFilter("html")}
          className={filter === "html" && "active"}
        >
          HTML & CSS
        </span>
        <span
          onClick={() => setFilter("react")}
          className={filter === "react" && "active"}
        >
          REACT JS
        </span>
        <span
          onClick={() => setFilter("node")}
          className={filter === "node" && "active"}
        >
          NODE JS
        </span>
      </div>
      <div className="items_holder">
        {getFilterData().map((item) => {
          return (
            <div className="item">
              <img src={item.image} />
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};
export default Works;

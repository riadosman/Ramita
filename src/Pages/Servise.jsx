import React from "react";
import { useParams } from "react-router-dom";
import Main from "../Components/Main/Main";
import { ServiseCards } from "../data/data";
const Servise = () => {
  const { id } = useParams();
  return (
    <div>
      <Main
        title={ServiseCards[id - 1].title}
        description={ServiseCards[id - 1].describtion}
        img={ServiseCards[id - 1].img}
        arr={ServiseCards[id - 1].arr}
        button={false}
      />
    </div>
  );
};

export default Servise;

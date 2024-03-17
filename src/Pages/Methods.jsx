import React from "react";
import { useParams } from "react-router-dom";
import { MethodsCard } from "../data/data";
import Main from "../Components/Main/Main";
import img5 from "../images/02.jpg";
import img6 from "../images/7.jpg";
import img7 from "../images/6.jpg";
const Methods = () => {
  const imgs = [img5,img6,img7];
  const { id } = useParams();
  return (
    <div className="methods" dir="ltr">
      <Main
        title={MethodsCard[id - 1].title}
        description={MethodsCard[id - 1].describtion}
        button={true}
        arr={MethodsCard[id - 1].arr}
        img={imgs[id - 1]}
      />
    </div>
  );
};

export default Methods;

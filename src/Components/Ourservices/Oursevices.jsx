import React from "react";
import OursevicesCard from "../OursevicesCard";
import "./Oursevices.css";
import firstimg from "../../images/marketing.jpg";
import secimg from "../../images/fullimgs.jpg";
import thirdimg from "../../images/webdesign.jpg";
import fourthimg from "../../images/costumerservice.jpg";
import { Link } from "react-router-dom";
// خدماتنا كل الكروت
const Oursevices = () => {
  const data = [
    [firstimg, "التسويق الرقمي"],
    [secimg, "تصميم الهوية البصرية"],
    [thirdimg, "تصميم مواقع الويب"],
  ];
  return (
    <div className="container Oursevices-cards" id="Services">
      {data.map((e, i) => {
        return (
          <Link to={`/Methods/${i + 1}`} key={i}>
            <OursevicesCard costum={e} />
          </Link>
        );
      })}
      <Link to="/Contact">
        <OursevicesCard
          costum={[fourthimg, "هل تحتاج فقط إلى الأساسيات؟ ابدأ مجانًا."]}
        />
      </Link>
    </div>
  );
};

export default Oursevices;

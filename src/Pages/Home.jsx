import React from "react";
import Main from "../Components/Main/Main";
import MethodsCard from "../Components/MethodsCard/MethodsCard";
import Titlecom from "../Components/TItle/Titlecom";
import Oursevices from "../Components/Ourservices/Oursevices";
import Footer from "../Components/footer/Footer";
import { Link } from "react-router-dom";
import mainImg from "../images/main.jpg";
const Home = () => {
  const data = [
    {
      title: "تحليل الجمهور",
      description: "تحديد جمهورك المستهدف وتجزئته واكتشاف تفضيلات المستهلك",
      img: <i className="fa-solid fa-people-group"></i>,
    },
    {
      title: "تحديد المنافسين",
      description:
        "دراسة المنافسين ونقاط قوتهم وضعفهم والتهديدات التي قد تواجهها",
      img: <i className="fa-solid fa-map-location"></i>,
    },
    {
      title: "اختبار الإعلان",
      description: "مقارنة نسختين مختلفتين من الإعلان لتحديد أيهما أكثر فعالية",
      img: <i className="fa-solid fa-magnifying-glass"></i>,
    },
    {
      title: "قياس نتائج الحملة",
      description:
        "تحليل بيانات الحملة يساعدك في اتخاذ قرارات بشأن حملتك المستقبلية",
      img: <i className="fa-solid fa-chart-pie"></i>,
    },
  ];
  return (
    <div className="Home">
      <Main
        title="أنشئ حملات تسويقية ناجحة ونمّ عملك عن طريق تحليل البيانات والأداء والسوق"
        description="أنشئ حملات تسويقية قوية لجذب عملاء جدد تعرف على ما يريده السوق المستهدف حتى تتمكن من تطوير خطط تسويقية أكثر فاعلية لمواكبة اتجاهات السوق والوصول إلى العملاء المحتملين وتحقيق أفضل النتائج"
        button={true}
        arr={[]}
        img={mainImg}
      />
      <hr className="bg-main" />
      <Titlecom text="بعض الطرق التي نستخدمها للحصول على افضل النتائج" />
      <div className="cards">
        {data.map((e, i) => {
          return (
            <Link to={`/Servise/${i + 1}`} key={i}>
              <MethodsCard
                title={e.title}
                description={e.description}
                img={e.img}
              />
            </Link>
          );
        })}
      </div>

      <Titlecom text="خدماتنا" />
      <Oursevices />
      <Footer />
    </div>
  );
};

export default Home;

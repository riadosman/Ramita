import "./Main.css";
import { Link } from "react-router-dom";
const Main = (props) => {
  return (
    <main className="container">
      <div className="main-img">
        <img src={props.img} alt="img" />
      </div>
      <div className="content">
        <p>{props.title}</p>
        <p>{props.description}</p>
        {props.arr && (
          <ul className="arr-list">
            {props.arr.map((e) => {
              return <li>{e}</li>;
            })}
          </ul>
        )}
        {props.button && (
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow" />
            </span>
            <Link to="/Contact" className="button-text">
              ابدء الان
            </Link>
          </button>
        )}
      </div>
    </main>
  );
};

export default Main;

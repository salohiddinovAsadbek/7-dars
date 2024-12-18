import { useEffect, useState } from "react";
import "./style.css";
function Main() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((req) => req.json())
      .then((res) => {
        setData(res.slice(0, 10));
        console.log(res);
      });
  }, []);
  return (
    <div className="Card">
      {data?.map((e) => {
        return <div>{e.title}</div>;
      })}
    </div>
  );
}
export default Main;

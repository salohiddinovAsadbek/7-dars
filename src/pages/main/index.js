import { useEffect, useState } from "react";
import "./style.css";
function Main() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((req) => req.json())
      .then((res) => {
        console.log(res);
        setData(res?.slice(0, 10));
      });
  }, [data]);
  return (
    <div className="card">
      {data?.map((e) => {
        return <div className="card-item" key={e?.id}>
                <img src={e?.images[0]} alt={e.title} />

            <h2>{e?.title}</h2>
        </div>;
      })}
    </div>
  );
}
export default Main;

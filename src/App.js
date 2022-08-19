import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [pazeSize, setPazeSize] = useState(20);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {data.length && <h2>{data.length}</h2>}
      <Pagination data={data} pazeSize={pazeSize} />
      <button onClick={() => setPazeSize((prev) => prev + 1)}>Inc</button>
      <button onClick={() => setPazeSize((prev) => prev - 1)}>Dec</button>
      <h2>{pazeSize * 2}</h2>
    </div>
  );
}

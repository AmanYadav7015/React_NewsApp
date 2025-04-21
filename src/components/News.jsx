import Navbar from "./Navbar";
import NewsBoard from "./NewsBoard";
import { useState } from "react";

const News = () => {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory}></Navbar>
      <NewsBoard category={category}/>
    </>
  );
};
export default News;

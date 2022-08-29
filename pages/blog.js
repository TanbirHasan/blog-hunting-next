import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import * as fs from "fs";

const Blog = (props) => {
  const [data, setData] = useState(props.allblogs);
  const [count, setCount] = useState(3);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 3}`);
    setCount(count + 3);

    let blogs = await d.json();
    console.log(blogs);
    setData(blogs);
  };

  console.log(data);
  return (
    <div className={styles.blog}>
      <InfiniteScroll
        dataLength={data.length} //This is important field to render the next data
        next={fetchData}
        hasMore={props.allcount !== data.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {data?.map((data, index) => (
          <div className={styles.blogitem} key={index}>
            <h4>Author : {data.author}</h4>
            <Link href={"blogpost/JavaScript"}>
              <h3 className={styles.title}>{data.title}</h3>
            </Link>
            <p>{data.answer}</p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  // let data = await fetch("http://localhost:3000/api/blogs");
  // let finaldata = await data.json();

  let data = await fs.promises.readdir("blogdata");
  let allcount = data.length;

  let myfile;
  let allblogs = [];
  for (var i = 0; i < 3; i++) {
    const item = data[i];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    console.log(myfile);
    allblogs.push(JSON.parse(myfile));
  }

  return {
    props: {
      allblogs,
      allcount,
    },
  };
}

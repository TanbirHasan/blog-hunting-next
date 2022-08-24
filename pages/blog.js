import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const blog = ({ data }) => {
  return (
    <div className={styles.blog}>
      {data.map((data, index) => (
        <div className={styles.blogitem} key={index}>
          <Link href={"blogpost/learn-javascript"}>
            <h3 className={styles.title}>{data.title}</h3>
          </Link>

          {/* <p>{data.answer}</p> */}
        </div>
      ))}
    </div>
  );
};

export default blog;

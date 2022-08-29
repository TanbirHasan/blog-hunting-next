import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Slug = (props) => {
  const router = useRouter();
  console.log(router.query.slug);

  const [blog, setBlog] = useState(props.finaldata);

  return (
    <div className="dynamicblog">
      <div>
        <h2>Title of the page is {blog?.title}</h2>
        <hr />
        <p>{blog?.answer}</p>
      </div>
    </div>
  );
};

export default Slug;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let finaldata = await data.json();

  return {
    props: {
      finaldata,
    },
  };
}

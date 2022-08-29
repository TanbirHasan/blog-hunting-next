import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="mt-10">
      <div className={styles.container}>
        <Head>
          <title>Hunting Blog</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.homecontent}>
          <div className={styles.hometextcontent}>
            <h1 style={{ fontSize: "50px", fontWeight: "600" }}>
              Hunting Blog
            </h1>
            <p>
              Do you want to be a part of hunting blog. Join us and be a member.
            </p>
          </div>

          <Image src="/coder.jpg" width="600" height="400" alt="coder" />
        </main>

        <h3 className="text-4xl text-center py-5">The Latest Blog</h3>

        <div>
          <div className="blog mx-5 my-5">
            <div
              className="blog"
              style={{
                textAlign: "center",
                padding: "20px",
                border: "1px solid black",
              }}
            >
              <h2>This is the hunt blog project</h2>
              <p>Here we will post the hunt prject details</p>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5">
                Read More
              </button>
            </div>
          </div>

          <div className="blog mx-5 my-5">
            <div
              className="blog"
              style={{
                textAlign: "center",
                padding: "20px",
                border: "1px solid black",
              }}
            >
              <h2>This is the hunt blog project</h2>
              <p>Here we will post the hunt prject details</p>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5">
                Read More
              </button>
            </div>
          </div>

          <div className="blog mx-5 my-5">
            <div
              className="blog"
              style={{
                textAlign: "center",
                padding: "20px",
                border: "1px solid black",
              }}
            >
              <h2>This is the hunt blog project</h2>
              <p>Here we will post the hunt prject details</p>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5">
                Read More
              </button>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </div>
  );
}

import Head from "next/head";
// import Image from "next/image";
import "../styles/Home.module.scss";
import { motion } from "framer-motion";

export default function Home() {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const cardVariants = {
    from: { y: 50 },
    to: { y: 0 },
  };

  const hoverCard = {
    scale: 1.1,
    transition: { duration: 1 },
    color: "#0070f3",
    borderColor: "#a243ce",
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Zaky Arifudin</title>
        <meta name="description" content="Zaky Arifudin Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <motion.h1
          initial={{
            x: -90,
          }}
          animate={{
            x: 0,
          }}
          transition={{ ease: "circOut", duration: 2 }}
          className={styles.title}
        >
          Welcome to <a>Zaky Arifudin </a>
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
          variants={variants}
        >
          <p className={styles.description}>
            Get started by editing
            <code className={styles.code}>pages/index.js</code>
          </p>
        </motion.div>

        <motion.div
          initial="from"
          animate="to"
          transition={{ duration: 2, ease: "easeOut" }}
          variants={cardVariants}
          className={styles.grid}
        >
          <motion.a
            initial={{
              y: 90,
            }}
            animate={{
              y: 0,
            }}
            transition={{ duration: 1.5 }}
            whileHover={hoverCard}
            href="https://nextjs.org/docs"
            className={styles.card}
          >
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </motion.a>

          <motion.a
            initial={{
              y: 90,
            }}
            animate={{
              y: 0,
            }}
            transition={{ duration: 1.5 }}
            whileHover={hoverCard}
            href="https://nextjs.org/learn"
            className={styles.card}
          >
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </motion.a>

          <motion.a
            whileHover={hoverCard}
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </motion.a>

          <motion.a
            whileHover={hoverCard}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </motion.a>
        </motion.div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>
    </div>
  );
}

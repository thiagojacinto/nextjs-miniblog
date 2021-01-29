import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/Layout";

export default function firstAttempt() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>{firstAttempt.name}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="title">This is my first attempt with NextJS</h1>

        <p className="description">
          First of all, it was clear how easy is to create a new page: fast as
          creating another js file. The route is auto-generated and it respects
          the path of the file. To exemplify what was just said, if you have a
          file placed in a NextJS project as{" "}
          <code className="code">pages/posts/first-attempt.js</code> and run it,
          you'll find a page already available at
          localhost:3000/posts/first-attempt. Just like that.
        </p>

        <p className="description">
          A bunch of useful libs are loaded with NextJS and one of the
          highlights are that ones used for Styling. By the way, style is a
          great deal here too. NextJS comes with Sass and a minor CSS-in-JS lib
          called <code className="code">styled-jsx</code> that does what is
          called means: applying css directly in JSX comeponents (documentation
          can be found{" "}
          <Link href="https://github.com/vercel/styled-jsx">here</Link>). Two
          approuches are recommended by the tutorial: use of CSS Modules to
          handle component styling (with optimization for lazy loading and so
          on) and importing global CSS file directly in{" "}
          <code className="code">/pages/_app.js</code>.
        </p>
      </div>
    </Layout>
  );
}

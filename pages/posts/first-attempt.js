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

        <p className="description">
          An strategy for styling tested here was: use <code className="code">pages/index.js</code> with styles from almost original Home.module.css while posts will be follow component Layout style guide. That way, lazy loading of Layout component will kick in, bringing loading advantages with it 'auto-magic-ly', as I like to say.
        </p>

        <p className="description">
          Another interesting feature of NextJS is obviously Server Side Rendering and Static Site Generator. It gives the oportunity of analyze the best situations to deliver static pages, rendered by user request OR rendered at build time. The tutorial also indicate a way of handling data request, by creating markdown content to be read and populate a list - of blog posts - and sending it to index.js with <code className="code">getStaticProps</code>. The result is a list of blogs viewed at home page of this blog. Click at back button to visualize it if you didn't pay attention to it in the first place.
        </p>
      </div>
    </Layout>
  );
}

import Head from "next/head";
import { NavBar } from "../ui";

type LayoutProps = {
  children: JSX.Element | JSX.Element[],
  title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Franco Ferrari" />
        <meta name="description" content={`Información sobre el Pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <NavBar />

      <main style={{
        padding: '0 20px',
      }}>
        {children}
      </main>

    </>
  );
}
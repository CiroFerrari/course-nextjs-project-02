import Head from "next/head";

type LayoutProps = {
  children: JSX.Element | JSX.Element[],
  title?: string
}

export const Layout = ({ children, title }: LayoutProps) => {
  return ( 
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="Franco Ferrari" />
        <meta name="description" content={`Información sobre el Pokemon ${ title }`} />
        <meta name="keywords" content={`${ title }, pokemon, pokedex`} />
      </Head>

      {/* NavBar */}

      <main>
        { children }
      </main>

    </>
  );
}
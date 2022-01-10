import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Layout({ children, page }) {
  return (
    <div className='bg-blue-50 pt-5 text-center min-h-screen'>
      <Head>
        <title>{page}</title>
        {/* possibilité d'ajouter des balises méta pour optimiser le référencement naturel */}
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>

      <header className='container-lg'>
        <h1 className='text-5xl mb-2'>CRYPTO WATCH</h1>
        <div className='inlin-grid grid-cols-2 gap-x-10 p-4'>
          <Link href='/' passHref>
            <button className='bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300'>
              Accueil
            </button>
          </Link>
          <Link href='/about' passHref>
            <button className='bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300'>
              À propos
            </button>
          </Link>
        </div>
        <div>
          <Image
            src='/main.jpg'
            alt='fotter-pic'
            width='400'
            height='25'
            className='rounded-3xl object-cover'
            quality={100}
          />
        </div>
      </header>

      <main className='pt-4 mx-20'>{children}</main>

      <footer className='p-10'>
        <Image
          src='/main.jpg'
          alt='fotter-pic'
          width='1000'
          height='30'
          className='rounded-3xl object-cover'
          quality={100}
        />
        <ul className='pt-10 pb-4 flex justify-around'>
          <li>À propos</li>
          <li>Qui sommes nous</li>
          <li>Yann H. - 2021</li>
        </ul>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          in. Consequuntur itaque saepe corporis officiis dicta quidem sed
          iusto! Eius quos commodi nostrum illo ratione et recusandae accusamus
          nihil excepturi, eveniet, quam temporibus earum officiis consequuntur
          atque reprehenderit in nisi.
        </p>
      </footer>

      {/* css uniquement pour ce composant */}
      <style jsx>{`
        p {
          color: grey;
        }
      `}</style>
    </div>
  );
}

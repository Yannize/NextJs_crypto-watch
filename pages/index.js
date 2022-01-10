import Link from 'next/link';
import Layout from '../components/Layout';

const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
require('dayjs/locale/fr');
dayjs.locale('fr');
dayjs().format();

export default function Home({ res }) {
  console.log('home : ', res);
  return (
    <Layout page={'Crytpo Watch - Accueil'} res={res}>
      <ul className='flex justify-around py-10'>
        {res.map((crypto) => (
          <Link href={`/${crypto.name.toLowerCase()}`} passHref key={crypto.id}>
            <li className='relative hover:shadow-md p-8 border border-blue-300 rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5 cursor-pointer rounded-md text-center'>
              <img
                src={crypto.image}
                alt={crypto.name}
                className='w-20 h-20 mx-auto'
              />
              <h2 className='text-2xl mb-6 uppercase tracking-wider'>
                {crypto.name}
              </h2>
              <h3 className='font-bold text-2xl mb-4'>
                {parseFloat(crypto.current_price).toFixed(2)} USD
              </h3>
              <p>
                1 heure :
                <span className='font-bold'>
                  {parseFloat(
                    crypto.price_change_percentage_1h_in_currency
                  ).toFixed(2)}
                  %
                  {parseFloat(
                    crypto.price_change_percentage_1h_in_currency
                  ).toFixed(2) < 0 ? (
                    <span className='text-red-500'> &#x2798;</span>
                  ) : (
                    <span className='text-green-500'> &#x279A;</span>
                  )}
                </span>
              </p>

              <p>
                1 jour :
                <span className='font-bold'>
                  {parseFloat(crypto.price_change_percentage_24h).toFixed(2)}%
                  {parseFloat(crypto.price_change_percentage_24h).toFixed(2) <
                  0 ? (
                    <span className='text-red-500'> &#x2798;</span>
                  ) : (
                    <span className='text-green-500'> &#x279A;</span>
                  )}
                </span>
              </p>

              <p>
                1 mois :
                <span className='font-bold'>
                  {parseFloat(
                    crypto.price_change_percentage_30d_in_currency
                  ).toFixed(2)}
                  %
                  {parseFloat(
                    crypto.price_change_percentage_30d_in_currency
                  ).toFixed(2) < 0 ? (
                    <span className='text-red-500'> &#x2798;</span>
                  ) : (
                    <span className='text-green-500'> &#x279A;</span>
                  )}
                </span>
              </p>

              <p>
                1 an :
                <span className='font-bold'>
                  {parseFloat(
                    crypto.price_change_percentage_1y_in_currency
                  ).toFixed(2)}
                  %
                  {parseFloat(
                    crypto.price_change_percentage_1y_in_currency
                  ).toFixed(2) < 0 ? (
                    <span className='text-red-500'> &#x2798;</span>
                  ) : (
                    <span className='text-green-500'> &#x279A;</span>
                  )}
                </span>
              </p>

              <p className='pt-4'>
                dernière mise à jour : {dayjs(crypto.last_updated).from()}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </Layout>
  );
}

// server side rendering
export async function getStaticProps(context) {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false&price_change_percentage=1h%2C30d%2C1y`
    ).then((res) => res.json());

    return {
      props: { res },
    };
  } catch (error) {
    console.error(error);
  }
}

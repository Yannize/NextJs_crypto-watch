import Layout from '../components/Layout';
import DOMPurify from 'isomorphic-dompurify';

export default function Currency({ currency }) {
  const cleanDescription = DOMPurify.sanitize(currency.description.fr);
  return (
    <Layout page={`Crypto Watch - ${currency.name}`}>
      <div className='relative hover:shadow md p-8 border border-blue-300 sm:rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5'>
        <div className='text-center'>
          <img
            src={currency.image.large}
            alt={currency.name}
            className='w-40 h-40 mx-auto mb-6'
          />
          <h2 className='text-3xl mb-6 uppercase tracking-wider'>
            {currency.name}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: cleanDescription }} />
        </div>
      </div>

      <style jsx>
        {`
          :global(a) {
            color: blue;
            text-decoration: underline;
          }
        `}
      </style>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${query.currency}`
    );
    const data = await res.json();
    return {
      props: { currency: data },
    };
  } catch (error) {
    console.error(error);
  }
}

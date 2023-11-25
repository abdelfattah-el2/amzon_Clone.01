import Banner from "@/components/Banner";
import Produt from "@/components/Product/Product";

export default function Home({ productData }) {
  return (
    <main>
      <div className=" max-w-screen-2xl mx-auto">
        <Banner />
        <div className=" relative md:-mt-20 xl:-mt-60 z-20 mb-10 lgl:-mt-32">
          <Produt product={productData} />
        </div>
      </div>
    </main>
  );
}

// ssr for data Fetching
export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech").catch(
    (erro) => {
      console.log(erro);
    }
  );
  const productData = await res.json();
  return { props: { productData } };
}

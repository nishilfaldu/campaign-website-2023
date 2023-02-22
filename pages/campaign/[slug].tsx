import Image from 'next/image'
import { campaignPoints } from '../../utils/campaign';

let data = campaignPoints;

export default function Product({ campaignPoint }) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="mx-auto mt-16 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto flex flex-col sm:flex-row">
          <Image
            alt="coffee"
            className="rounded-lg"
            src={campaignPoint.imgURL}
            width={560}
            height={640}
          />
          <div className="mt-10 flex flex-col sm:mt-0 sm:ml-10">
            <h1 className="mt-1 text-4xl font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              {campaignPoint.name}
            </h1>
            {/* <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
              {campaignPoint.shortDescription}
            </h1> */}
            <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
              Description
            </div>
            <p className="max-w-xl">{campaignPoint.longDescription}</p>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  // const searchResults = await getProducts(params.slug)
  // console.log(typeof params.slug);
  const searchResult = await data[Number.parseInt(params.slug) - 1];
  // const coffeeProduct = searchResults[0]
  console.log(searchResult);


  return {
    props: {
      campaignPoint: searchResult,
    },
  }
}

export async function getStaticPaths() {
  // const coffeeProducts = await getProducts('coffee')
  const allCampaignPoints = await data;
  let fullPaths = []

  for (let campaignPoint of allCampaignPoints) {
    fullPaths.push({ params: { slug: campaignPoint.id.toString() } })
  }

  return {
    paths: fullPaths,
    fallback: 'blocking',
  }
}

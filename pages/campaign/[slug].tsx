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
            <p className="max-w-xl">{campaignPoint.longDescription}</p><br/>
            {
              campaignPoint.id === 10 &&
              (<div>
                <p><strong>Day 1: Diversity Day</strong><br/>
                An opportunity for students from different communities to set up stalls and showcase their culture through dances, clothing, food, etc.</p>
                <p><strong>Day 2: Reverse Career Fair</strong><br/>
                Imagine a casual career fair out in the open where, instead of you giving your elevator pitch, the company talks to you about their values, mission, and why you should join them</p>
                <p><strong>Day 3: College of the Year</strong><br/>
                A set of contests between the selected representatives of every college to take part in to win the trophy for their college</p>
                <p><strong>Day 4: A Pageant Show & Award Ceremony</strong><br/>
                A Pageant show to crown the Mr. & Ms. UC and a closing award ceremony to commemorate the winners of various competitions during the week</p>
                <p><strong>Day 5: A Concert</strong><br/>
                A concert by a famous artist for our students to have a good time and mark the end of the fest.</p>
                <br/><iframe width="560" height="315" src="https://www.youtube.com/embed/7F_Zu0VtEtk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
              )
            }
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

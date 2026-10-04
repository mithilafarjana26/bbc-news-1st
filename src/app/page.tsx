import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import NewsCard from "@/components/NewsCard";
import Image from "next/image";

export default async function Home() {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
    const data =  await res.json()
    const sections = data.data
    const mainNews = sections[0].articles
    console.log(mainNews)
    const othersNews = sections.slice(1)
    console.log(othersNews)
  return (
    <div>
     {/* <Marquee></Marquee> */}
     <div className="grid grid-cols-3">

      <div className=" col-span-2">
<MainNews news={mainNews}></MainNews>
<div>
  {
    othersNews.map(on=><div className="border-b-2 border-red-700" key={on.curationId}>
      <h1 className="font-bold">{on.title}</h1>
     <div className="grid grid-cols-3 gap-3.5">
       {
        on.articles.slice(0,2).map(news=><NewsCard key={news.id} news={news}></NewsCard>)
      }
     </div>
    </div>)
  }
</div>
      </div>
      <div className="bg-green-600 col-span-1">

      </div>
      {/* news section */}
     </div>
    </div>
  );
}

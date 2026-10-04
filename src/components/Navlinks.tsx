import Link from "next/link";

interface Category {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const Navlinks = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/categories"
  );

  const data = await res.json();

  const nav: Category[] = data.data;

  const navsFilter = nav.filter((n) => n.scrapable);

  return (
    <div className="flex gap-5 justify-center mt-5">
      <Link href="/">হোম</Link>

      {navsFilter.map((n) => (
        <Link key={n.slug} href={n.slug}>
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
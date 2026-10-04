export default interface Category  {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
};
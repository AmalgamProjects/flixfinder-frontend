export interface IMovie {
  title: string;
  id: string;
  url?: string;
  imageUrl: string;
  user: string; // this is firebase uid
}

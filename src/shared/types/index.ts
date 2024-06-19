export type TLink = {
  label: string;
  href: string;
};

export type TIcon = {
  fillColor?: string;
  className?: string;
  width?: string;
  height?: string;
};

export type TCurrency = {
  name: string;
  value: number | null;
};

export type TNews = {
  urlToImage: string | null;
  title: string | null;
  url: string;
  description: string | null;
};

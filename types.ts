export type PageView = 'home' | 'menu' | 'contact';

export interface NavItem {
  id: PageView;
  label: string;
}

export interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  image: string;
  availability?: string;
}

export interface FlavorStat {
  name: string;
  popularity: number;
  description: string;
}
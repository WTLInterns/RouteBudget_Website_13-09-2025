import Blog from '../../components/Blog';

export const metadata = {
  title: 'Blog | Route Budget - Fleet Management Insights & Guides',
  description: 'Stay updated with the latest fleet management insights, tips, and guides. Learn how RouteBudget is transforming transportation businesses across India with expert articles and industry trends.',
  keywords: 'fleet management blog, transportation insights, RouteBudget guides, fleet software tips, India transport industry, cab management articles',
  alternates: {
    canonical: 'https://routebudget.com/blog',
  },
};

export default function BlogPage() {
  return <Blog />;
}

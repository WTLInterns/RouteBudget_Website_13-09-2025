export async function GET() {
  const baseUrl = "https://routebudget.com";

  const routes = [
    "", // Home
    "/features",
    "/solutions",
    "/pricing",
    "/blog",
    "/blog/fleet-management-software-india",
    "/blog/types-of-fleet-management-software",
    "/blog/online-fleet-management-software-india-2025",
    "/blog/best-vehicle-fleet-management-software-india",
    "/testimonials",
    "/faq",
    "/contact",
    // "/AdminDashboard",
    "/AddCab",
    "/CabInfo",
    "/DriverDetails",
    "/Expensive",
    "/Servicing",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map(
        (route) => `
      <url>
        <loc>${baseUrl}${route}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

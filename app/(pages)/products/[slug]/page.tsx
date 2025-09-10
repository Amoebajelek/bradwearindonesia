import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";

import Products from "@/utils/db.json";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      {/* Navbar */}
      <Navbar />
      {/* End Navbar */}

      {/* Contents */}
      <div className="flex flex-col h-lvh w-full px-6 py-12 lg:p-20 justify-start gap-5">
        <ul>
          {Products.map((product) => (
            <li key={slug}>
              <h2>{product.name}</h2>
              <p>{product.desc}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* End Content */}

      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}

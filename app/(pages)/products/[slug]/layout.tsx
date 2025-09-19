export const metadata = {
  title: "Detail Produk | Bradwear Indonesia",
  description: "Products Page",
};

export default function DetailProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
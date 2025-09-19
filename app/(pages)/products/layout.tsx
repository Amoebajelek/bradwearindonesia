export const metadata = {
  title: "Katalog | Bradwear Indonesia",
  description: "Products Page",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}

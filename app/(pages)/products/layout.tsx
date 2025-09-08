export const metadata = {
  title: "Products | Bradwear Indonesia",
  description: "Products Page",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}



export default function BusinessDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <div>
      <h1>Business Detail Page</h1>
      <p>ID or Slug: {slug}</p>
    </div>
  );
}

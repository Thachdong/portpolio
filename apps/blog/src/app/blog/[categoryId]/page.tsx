type TCategoryDetailProps = {
  params: {
    categoryId: string;
  };
};

export default async function CategoryDetailPage({
  params: { categoryId },
}: Readonly<TCategoryDetailProps>) {
  return (
    <div>
      <div>breadcump</div>
    </div>
  );
}

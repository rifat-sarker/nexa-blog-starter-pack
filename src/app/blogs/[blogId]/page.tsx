import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();

  return <BlogDetailsCard blog={blog} />;
}

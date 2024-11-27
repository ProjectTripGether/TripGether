import BlogContent from "@/components/home_page/blog_content/BlogContent";
import HomeContent from "@/components/home_page/home_content/HomeContent";
import Welcome from "@/components/home_page/welcome_content/Welcome";

export default function Home() {
  return (
    <>
      <HomeContent />
      <div className="h-full bg-white">
        <Welcome />
        <BlogContent />
      </div>
    </>
  );
}

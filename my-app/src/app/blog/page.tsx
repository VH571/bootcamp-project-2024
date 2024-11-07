import style from "./blog.module.css";
import Link from "next/link";
import blogs from '@/app/blogData';
import BlogPreview from '@/components/blogPreview';
export default function Blog() {
    return (
        <main> 
            <h1 className={style.pagetitle}>Blogs</h1>
            <div className={style.blogSection}>
            <h2 className={style.pageTitle}>My Blog Posts</h2>
            {blogs.map(blog => 
            <BlogPreview key={blog.slug} {...blog} />
            )}
        </div>
        </main>
    ) 
  }
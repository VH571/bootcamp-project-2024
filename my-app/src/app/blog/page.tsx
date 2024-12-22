import style from "./blog.module.css";
import Link from "next/link";
import BlogPreview from '@/components/blogPreview';
import connectDB from "@/database/db";
import BlogObject from "@/database/blogSchema"
async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await BlogObject.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
      console.log(`error: ${err}`);
      return []; // needs to return nothing
	    
	}
}

export default async function Blog() {
    const blogList : BlogObject[] = await getBlogs();

    return (
        <main> 
            <h1 className={style.pagetitle}>Blogs</h1>
            <div className={style.blogSection}>
            <h2 className={style.pageTitle}>My Blog Posts</h2>
            {blogList.map(blog => 
                <BlogPreview 
                key = {blog.title}
                title={blog.title}
                slug={blog.slug}
                date={blog.date}
                description={blog.description}
                content={blog.content}
                image={blog.image}
                imageAlt={blog.imageAlt}
                comments = {blog.comments}
                />
               )}
        </div>
        </main>
    ) 
  }
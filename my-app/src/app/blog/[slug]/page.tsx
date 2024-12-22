import connectDB from "@/database/db"
import blogSchema from "@/database/blogSchema"
import style from "./blog.module.css";
import Comment from "@/components/comment"
type Props = {
    params: { slug: string }
}


export default async function Blog({ params }: Props) {
    const { slug } = await params;
    async function getBlog(slug: string) {
        try {
            const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
                cache: "no-store",
            })

            if (!res.ok) {
                throw new Error("Failed to fetch blog");
            }
            return res.json();
        } catch (err: unknown) {
            console.log(`error: ${err}`);
            return null;
        }
    }

    const blog: blogSchema = await getBlog(slug);

    if (!blog) {
        return (
            <div>
                <p> This Page doesnt exist </p>
            </div>
        )
    }

    return (

        <div className={style.blogContainer}>
            <div className={style.blog}>
                <h1 className={style.blogTitle} >
                    {blog?.title}
                </h1>
                <div className={style.blogSection}>
                    <p>{blog?.content}</p>
                </div>
            </div>

            <h2 className={style.blogCommentsTitle}>
                Comments
            </h2>
            <div className={style.blogComments}>
                {blog.comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div>


        </div>
    )
}
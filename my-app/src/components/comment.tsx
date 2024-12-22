
import type {IComment} from "@/database/blogSchema"
import style from "./comment.module.css"
type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}


function Comment({ comment }: CommentProps) {
    return (
        <div className={style.CommentContainer}>
            <div className={style.CommentInfo}>
                <h4 className={style.CommentUser}>
                    {comment.user}
                </h4>
                <span className={style.CommentDate}>
                    {new Date(comment.time).toDateString()}
                </span>
            </div>
            <p className={style.Comment}>
                {comment.comment}
            </p>
            
        </div>
    );
}

export default Comment;
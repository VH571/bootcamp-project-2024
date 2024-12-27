import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

type IParams = {
  params: Promise<{
    slug: string;
  }>;
};


// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest, context: IParams) {
  await connectDB(); // function from db.ts before
  const { slug } = await context.params; // another destructure

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json("Blog not found: " + err, { status: 404 });
  }
}

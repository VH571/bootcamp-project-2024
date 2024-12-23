import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = await params;
  try {
    const { user, comment } = await req.json();

    if (!user || !comment) {
      return NextResponse.json(
        { error: "Enter a user and comment" },
        { status: 400 }
      );
    }

    const blogUpdated = await Blog.findOneAndUpdate(
      { slug },
      { $push: { comments: { user, comment, time: new Date() } } },
      { new: true }
    );
    if (!blogUpdated) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Comment was added successfully", blog: blogUpdated },
      { status: 201 }
    );
  } catch (error) {
    console.error("error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

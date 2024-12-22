import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './blogPreview.module.css';
import type BlogObject from '@/database/blogSchema'; 

export default function BlogPreview({ title, date, description, image, imageAlt, slug , comments}: BlogObject) {
  return (
    <Link href={`/blog/${slug}`} className='blog-container'>
    <div className="blog-post">
      <h3>{title}</h3>
      <div>
        <Image 
          src={image}
          alt={imageAlt || "Default alt text"}
          width={500}
          height={300}
          priority
        />
        <p>{description}</p>
        <p>Posted on {date.toDateString()}</p>
      </div>
    </div>
    </Link>
  );
}
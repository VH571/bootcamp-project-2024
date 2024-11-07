import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './blogPreview.module.css';
import type { Blog } from '@/app/blogData'; 

export default function BlogPreview({ title, date, description, image, imageAlt, slug }: Blog) {
  return (
    <Link href={`/blogs/${slug}`} className='blog-container'>
    <div className="blog-post">
      <h3>{title}</h3>
      <div>
        <Image 
          src={image}
          alt={imageAlt}
          width={500}
          height={300}
          priority
        />
        <p>{description}</p>
        <p>Posted on {date}</p>
      </div>
    </div>
    </Link>
  );
}
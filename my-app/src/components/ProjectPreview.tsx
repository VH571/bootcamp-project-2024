import React from 'react';
import Image from 'next/image';
import styles from './ProjectPreview.module.css';
import type ProjectObject from '@/database/projectSchema'; 

export default function ProjectPreview({ name, description, image, imageAlt, link }: ProjectObject) {
  return (
    <div className="project">
      <Image 
      src={image}
      alt={imageAlt}
      width={0}
      height={0}
      sizes="100%"
      className="project-image "
      priority
        />
      <div className="project-details">
        <p className="project-name">{name}</p>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}
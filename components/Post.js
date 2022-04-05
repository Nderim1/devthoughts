import React from 'react'
import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div>
      {/* <img src={post.frontmatter.cover_image} alt="" /> */}
      <h3>{post.frontmatter.title}</h3>
      <Link href={`/blog/${post.slug}/`}>hello there link</Link>
    </div>
  )
}

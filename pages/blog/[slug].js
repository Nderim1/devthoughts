
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'

export default function PostPage({ frontmatter, slug, content }) {
  return (<>
    <h2>{frontmatter.title}</h2>
    <img src={frontmatter.cover_image} alt="" />
    <h6>{slug}</h6>
    <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
  </>)
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta)
  console.log(content)
  return {
    props: {
      frontmatter,
      slug,
      content
    }
  }
}
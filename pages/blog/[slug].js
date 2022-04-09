
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export default function PostPage({ frontmatter, slug, content }) {
  return (<>
    <h2 className='text-3xl pb-10'>{frontmatter.title}</h2>

    <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
  </>)
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta)
  console.log(frontmatter)
  return {
    props: {
      frontmatter,
      slug,
      content
    }
  }
}
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '/components/Post'
// import styles from '../styles/Home.module.css'
import { sortByDate } from '/utils/'

export default function Home({ posts }) {
  return (
    <div >
      <Head>
        {/* <title>dev thoughts</title> */}
        <meta name="description" content="dev thoughts blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* {posts} */}
        <div className="posts">
          {posts.map((post, index) => {
            return <Post key={index} post={post} />
          })}
        </div>
      </main>


    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '/components/Post'
import { sortByDate } from '/utils/'
import Link from 'next/link'


export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>dev thoughts</title>
        <meta name="description" content="dev thoughts blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="posts">
          <span className='text-xl'>Hey! :) Welcome! 👋</span>
          <br />
          <br />

          Just a developer sharing his thoughts with the world on coding, hobbies, books, crypto, earth, life, the universe and Javascript ecosystem.

          <br />
          <br />

          <span className='text-tiny'>
            Take everything with a grain of salt! :P 🧂
          </span>
          <div className='p-10 mt-10 border mainBoxes'>
            <h2 className='text-2xl pb-5'>Latest Posts</h2>
            {posts.map((post, index) => {
              return <div key={index} className='p-2 postLink'>
                <Link href={`/blog/${post.filename}/`}>{`- ${post.title}`}</Link>
              </div>
            })}
          </div>
          {/* <div className='p-10 mt-10 border mainBoxes'>
            <h2 className='text-2xl pb-5'>Projects</h2>
            <Projects />
          </div> */}
        </div>
      </main>


    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontmatter, content } = matter(markdownWithMeta)
    return { ...frontmatter, filename: filename.split('.mdx')[0] }
  })

  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}
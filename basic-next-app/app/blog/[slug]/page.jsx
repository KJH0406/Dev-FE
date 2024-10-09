const BlogPostPage = ({ params }) => {
  console.log(params)
  // { slug: 'post-1' }
  // { slug: 'post-2' }
  return (
    <main>
      <h1>BlogPostPage</h1>
      <p>{params.slug}</p> {/* post-1 */} {/* post-2 */}
    </main>
  )
}

export default BlogPostPage

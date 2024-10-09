const SlugPage = ({ params }) => {
  return (
    <main>
      <h1>SlugPage</h1>
      <p>{params.slug}</p>
    </main>
  )
}

export default SlugPage

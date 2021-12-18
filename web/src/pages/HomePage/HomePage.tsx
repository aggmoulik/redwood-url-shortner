// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import FindBySlugCell from 'src/components/FindBySlugCell/FindBySlugCell'

const HomePage = ({ slug }: { slug: string }) => {
  console.log('homepage', slug)
  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
      </p>
      {slug && <FindBySlugCell slug={slug} />}
    </>
  )
}

export default HomePage

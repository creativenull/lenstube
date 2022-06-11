import Layout from '@components/Common/Layout'
import MetaTags from '@components/Common/MetaTags'
import ExploreFeed from '@components/Explore/Feed'
import useAppStore from '@lib/store'
import useIsMounted from '@utils/hooks/useIsMounted'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Recommended = dynamic(() => import('./Recommended'))
const HomeFeed = dynamic(() => import('./Feed'))

const Home: NextPage = () => {
  const { isAuthenticated } = useAppStore()

  const isMounted = useIsMounted()

  return (
    <Layout>
      <MetaTags />
      <Recommended />
      <div className="md:my-5">
        {isMounted() && <>{isAuthenticated ? <HomeFeed /> : <ExploreFeed />}</>}
      </div>
    </Layout>
  )
}

export default Home

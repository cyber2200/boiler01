import type { NextPage } from 'next'
import {useState} from "react";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const [loadingState, setLoadingState] = useState(false)
  return (
    <Layout>
      Index
    </Layout>
  )
}

export default Home

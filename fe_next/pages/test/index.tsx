import type { NextPage } from 'next'
import {useState} from "react";
import Layout from "../../components/Layout";
import axios from 'axios'
import Core from '../../models/Core'

const Test: NextPage = () => {
  console.log("Test Render")

  const [formName, setFormName] = useState("")
  const [loadingState, setLoadingState] = useState(false)

  const sendForm = async (e) => {
    console.log(formName)
    e.preventDefault()
    setLoadingState(true)
    let core = new Core()
    try {
      let axios_res: any = await axios.post(core.getBaseUrl() + '/next_form_hanlder', {formName})
    } catch (err) {
      setLoadingState(false)
      console.log(err)
    }
    setLoadingState(false)
  }

  return (
    <Layout loadingState={loadingState}>
      <div>
        <form onSubmit={sendForm}>
          <input onChange={(e) => setFormName(e.target.value)} type="text" value={formName} />
          <input type="submit" />
        </form>
      </div>
    </Layout>
  )
}

export default Test

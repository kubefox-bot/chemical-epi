import axios from "axios"

import { defineEventHandler, getQuery } from "h3"
import { raw } from "./mocked"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const cas = typeof query.cas === "string" ? query.cas : ""

  // TODO: Replace mock with real API call when you're ready.
  // Example (returns real JSON):
  // const response = await axios.post(
  //   "https://episuite.dev/EpiWebSuite/api/submit",
  //   { cas }
  // )
  // const data = response.data

  
 
  const data = raw;

  return {
    cas,
    data,
  }
})

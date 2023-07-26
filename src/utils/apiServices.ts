import axios from "axios"

import { IRepoData } from "./types"

export async function getGithubDetails(): Promise<IRepoData | undefined> {
  try {
    const { data } = await axios.get(`https://api.github.com/repos/DungLe2912/my-portfolio`)
    return data
  } catch (err) {
    return undefined
  }
}

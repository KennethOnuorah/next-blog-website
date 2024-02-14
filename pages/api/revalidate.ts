//On-Demand Revalidation
//The 'path=/' means that Next.js will revalidate the homepage

// **This can only be tested out in build, not in dev mode**

//https://localhost:3000/api/revalidate?secret=<token>
//http://localhost:3000/api/revalidate?path=/&secret=b0cf09c298873efce76ec40ce4147942

import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.query.secret !== process.env.MY_SECRET_TOKEN) 
    return res.status(401).json({message: 'Invalid Token'})

  const path = req.query.path as string
  await res.revalidate(path) //This will trigger the revalidation
  return res.json({revalidated: true})
}
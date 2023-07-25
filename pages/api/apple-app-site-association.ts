// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log("Se entró al endpoint iOS");
  
  res.status(200).json({
    applinks: {
        apps: [],
        details: [
            {
                "appID": "UA8F39F9KD.com.lumston.ios.gap.mobile",
                "paths": ["/bot/*"]
            }
        ]
    }
})
}

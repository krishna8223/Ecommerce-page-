// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import DB from "../../helpers/db"
DB()


export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

DB()
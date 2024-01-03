// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  //  Update status into Orders table after cheking the transaction status
  // Intiate Shiping
  // Redirect user to the oreder confirmation page
  res.status(200).json({ body: req.body })

}
  
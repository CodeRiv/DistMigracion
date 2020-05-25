import 'module-alias/register';
import dbConnect from '@utils/dbConnect';
import People from '@models/People';
import Cors from 'cors';

const cors = Cors({
    methods: ['GET', 'HEAD'],
  })

  function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
  }


dbConnect();
export default async (req, res) => {
    await runMiddleware(req, res, cors)

    const { method } = req;

    switch(method) {

        case 'GET':
            try {
                const people = await People.find({});

                res.status(200).json({success: true, data: people})
            } catch (error) {
                res.status(400).json({success: false}); 
            }
            break;
        case 'POST':
            try {
                const people = await People.create(req.body);

                res.status(201).json({ success: true, data: people})
            }  catch (error) {
                res.status(400).json ({success: false, error: error});
            }  
            break;
            default:

    }
}
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

    const {
        query: { id, DPI },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const people = await People.find({DPI: DPI});
                var results = people[0];
                if (results.segundoapellido == null){
                }
                res.status(200).json({ success: true, data: people });
            } catch (error) {
                res.status(400).json({ success: false, data: "No existe registro en la base de datos" });
            }
            break;
    }
}

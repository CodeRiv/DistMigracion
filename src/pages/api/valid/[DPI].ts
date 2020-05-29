import 'module-alias/register';
import dbConnect from '@utils/dbConnect';
import People from '@models/People';
import Cors from 'cors';

var ts = new Date(Date.now()).toISOString();


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
                const date = await People.find({ DPI: DPI})

                var results = date[0].fechaexpiracion.toISOString();
                console.log(results);

                if (results >= ts)
                {
                    res.status(200).json({DPI: DPI, status: "valid"})
                }

                else
                {
                    res.status(200).json({DPI: DPI, status: "expired"})

                }
            } catch (error) {
                res.status(200).json({ DPI: DPI, status: "Not Valid"});
            }
            break;
    }
}

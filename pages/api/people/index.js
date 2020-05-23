import dbConnect from '../../../utils/dbconnect';
import People from '../../../models/People'

dbConnect();
export default async (req, res) => {
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

                res.status(201).json({ success: true, data: note})
            }  catch (error) {
                res.status(400).json ({success: false, error: error});
            }  
            break;
            default:

    }
}
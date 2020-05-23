import dbConnect from '../../utils/dbconnect';

dbConnect();

export default async (req, res) => {

    res.json({test: 'test'});
}
import dbConnect from '../../utils/dbConnect';
import People from '../../models/People';

dbConnect();

export default async (req, res) => {
    const {
        query: { id, DPI },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const people = await People.find({DPI: DPI});
                res.status(200).json({ success: true, data: people });
            } catch (error) {
                res.status(400).json({ success: false, data: "Error desconocido" });
            }
            break;
    }
}

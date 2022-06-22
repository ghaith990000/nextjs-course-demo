import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://ghaith_9:*Ghaith736617681@ghaith.rwimy.mongodb.net/meetups?retryWrites=true&w=majority";
// POST /api/new-meetup
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(uri);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;

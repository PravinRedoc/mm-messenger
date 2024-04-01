// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import query from "@/lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from 'firebase-admin'
import { admindb } from "@/firebaseAdmin";

type Data = {
  answer: string;
};

export default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

   const {prompt, chatId, model, session}  = req.body;
   if(!prompt){
    res.status(400).json({answer:'Please provide a prompt'})
    return;
   }
   if(!chatId){
    res.status(400).json({answer:'Please provide a valid chat ID'})
    return;

   }

   //ChatGpt in action
   const response = await query(prompt,chatId,model)

   const message : Message = {
    text: response || "ChatGPT could not find the message",
    createdAt: admin.firestore.Timestamp.now(),
    user :{
        _id: 'ChatGPT',
        name: 'ChatGPT',
        avatar: 'https://links.papareact.com/89k'


    }
   }

   await admindb
   .collection("users")
   .doc(session?.user?.email)
   .collection("chats")
   .doc(chatId)
   .collection("messages")
   .add(message);

  res.status(200).json({ answer: message.text });
}

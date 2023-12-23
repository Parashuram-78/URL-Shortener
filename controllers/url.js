import shortid from "shortid";
import URL from "../models/url.js";
export const urlshort= async (req, res)=>{
    const body = req.body;
    if(!body.url) return res.status(400).json({message: 'Invalid URL', success: false});
    const shortId=shortid();
    await URL.create({
        shortId: shortId,
        reDirectUrl: body.url,
        visitHistory:[]
    });
    return res.json({id: shortId});
};
export const analyse = async (req, res) => {
    const userId = req.params.shortId;
    const analysis=await URL.findOne({shortId: userId});
    res.json({
        totalClicks: analysis.visitHistory.length,
        analysis: analysis.visitHistory
    })
};

export const getURL = async(req, res)=>{
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate({
       shortId}
       ,{
            $push:{
                visitHistory:{
                    timestamp:Date.now(),
                }
            }
        });
        
        res.redirect(entry.reDirectUrl);
}
import Listing from "../models/listing.model.js"

export const createListing = async(req,res,next) =>{
    try {
        const data = await Listing.create(req.body)
        res.status(200).json({success:true, data})
    } catch (error) {
        next(error)
    }
}
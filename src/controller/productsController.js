import Phones from '../models/phoneModel.js';

const addPhones = async (req,res) =>{
    try {
        const phones = new Phones(req.body);
        await phones.save();
        res.status(200).json(phones);
    } catch (error) {
        res.status(400).json({message:'Failed to add the phones'},{error:error.message})
    }
}

const getAllPhones = async(req,res) =>{
    try {
        
    } catch (error) {
        console.log('Failed to fetch the data:',error);
    }
}

export  {addPhones,getAllPhones};
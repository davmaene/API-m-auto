import Panier from "../models/panier.model";

const panierController = {
    findOne: async(req, res) => {
        let panier = await Panier.findAll({
            where:{
                id: req.params.panierId
            }
        }).then((data) => {
            res.status(200).json({
                status:'200',
                panier: data
            })
        }).catch(error => console.log(error)
        );
    }
}


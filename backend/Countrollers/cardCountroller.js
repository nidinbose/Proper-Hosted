import Card from '../modeles/card.model.js'


export async function addCard(req,res){
    try {
        const {cardName,cardSlung,joiningFee,annualFee,cardPhoto,cardType,categoryName,providerName,service,payout,commission,cardLink,cardStatus,rating,reviewHeading,ratingDescription,forignTransactionPlanning,annualPersentageRate,
            minCreditScore,maxCreditScore,minAge,maxAge,minMonthlyIncome,maxMonthlyIncome,loungeService,fraudLiability,features,welcomeOffers,publishedBy,publishedAt,payouts,seoTitle,seoPhoto,seoDescription,seoKeywords

        }=req.body

        if(!cardName&&cardSlung&&joiningFee&&annualFee&&cardImage&&cardPhoto)
            return res.status(401).json({message:"missing some fields"})

        const data=await Card.create({cardName,cardSlung,joiningFee,annualFee,cardPhoto,cardType,categoryName,providerName,service,payout,commission,cardLink,cardStatus,rating,reviewHeading,ratingDescription,
            forignTransactionPlanning,annualPersentageRate,
            minCreditScore,maxCreditScore,minAge,maxAge,minMonthlyIncome,maxMonthlyIncome,loungeService,fraudLiability,features,welcomeOffers,publishedBy,publishedAt,payouts,seoTitle,seoPhoto,seoDescription,seoKeywords
        })
        if(!data){
            return res.status(401).json({message:"Data adding aborted"})
        }else{
            return res.status(200).json({message:"data added successfully"})
        }
    } catch (error) {
       return res.status(500).json({message:"internal error in adding function"}) 
    }
}


export async function editCard(req,res){
    try {
        const {id}=req.params
        const data =await Card.findOne({_id:id})
        if(!data){
            return res.status(404).json({message:"No card data found"})  
        }else{
            return res.status(200).send(data) 
        }
    } catch (error) {
        return res.status(500).json({message:"internal error in fetching function"}) 
    }
}


export async function updateCard(req, res) {
    const { id } = req.params;
    const { form } = req.body;
      if (!form) {
      return res.status(400).json({ message: 'Value is required' });
    }
      try {
          const result = await Card.updateOne(
        { _id: id },
        { $set: { form } }
      );
      if (result.nModified === 0) {
        return res.status(404).json({ message: 'Card not found or value unchanged' });
      }
      res.status(200).json({ message: 'Card updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
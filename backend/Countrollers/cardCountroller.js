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
    const {
      cardName, cardSlung, joiningFee, annualFee, cardPhoto, cardType, categoryName, providerName,
      service, payout, commission, cardLink, cardStatus, rating, reviewHeading, ratingDescription,
      forignTransactionPlanning, annualPersentageRate, minCreditScore, maxCreditScore, minAge, maxAge,
      minMonthlyIncome, maxMonthlyIncome, loungeService, fraudLiability, features, welcomeOffers,
      publishedBy, publishedAt, payouts, seoTitle, seoPhoto, seoDescription, seoKeywords
    } = req.body;
  
    try {
      const result = await Card.updateOne(
        { _id: id },
        {
          $set: {
            cardName, cardSlung, joiningFee, annualFee, cardPhoto, cardType, categoryName, providerName,
            service, payout, commission, cardLink, cardStatus, rating, reviewHeading, ratingDescription,
            forignTransactionPlanning, annualPersentageRate, minCreditScore, maxCreditScore, minAge, maxAge,
            minMonthlyIncome, maxMonthlyIncome, loungeService, fraudLiability, features, welcomeOffers,
            publishedBy, publishedAt, payouts, seoTitle, seoPhoto, seoDescription, seoKeywords
          }
        }
      );
  
      if (result.modifiedCount === 0) {
        return res.status(404).json({ message: 'Card not found or data unchanged' });
      }
  
      res.status(200).json({ message: 'Card updated successfully' });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  

  export async function getCard(req,res){
    try {
        const data=await Card.find({})
        if(!data){
            return res.status(404).send("no data available")
        }else{
            return res.status(200).send(data)
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
  }


  export async function deleteCard(req,res){
    try {
        const {id}=req.params
        const data=await Card.deleteOne({_id:id})
        if(!data){
            return res.status(404).send("Error in deletion")  
        }else{
            return res.status(200).send("successfully deleted") 
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
  }
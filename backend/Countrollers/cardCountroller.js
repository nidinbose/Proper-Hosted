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
import { Router } from "express";
import * as Card from '../Countrollers/cardCountroller.js'
const router=Router()

router.route('/addCard').post(Card.addCard)
router.route('/getCards').get(Card.getCard)  
router.route('/getCard/:id').get(Card.editCard)
router.route('/updateCard/:id').put(Card.updateCard)
router.route('/deleteCard/:id').delete(Card.deleteCard)   

export default router
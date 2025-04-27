import { Router } from "express";
import * as Card from '../Countrollers/cardCountroller.js'
const router=Router()

router.route('/addCard').post(Card.addCard) 

export default router
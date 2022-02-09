import { Request, Response } from 'express';

import { Product } from '../models/Product';

//testando o Model do MongoDB criado em aula
import User from '../models/User';

export const home = async (req: Request, res: Response)=>{
    
    //testando o model que criamos da collection do MongoDB
    let usuarios = await User.find({});
    console.log("Usuarios ", usuarios);

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};
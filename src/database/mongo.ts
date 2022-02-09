//criando a função que realizará a conexão com o MongoDB

import { connect } from 'mongoose'; //importando o connect do mongoose

import dotenv from 'dotenv'; //importando .env para acessar a constante do Mongo que está lá no .env

dotenv.config(); //inicializando .env

export const mongoConnect = async () => {
    try {

        console.log("Conectando ao MongoDB...");
        await connect(process.env.MONGO_URL as string);

        console.log("MongoDB conectado com sucesso!");

    } catch(error) {
        console.log("Erro Conexão MongoDB: ", error);
    }
}
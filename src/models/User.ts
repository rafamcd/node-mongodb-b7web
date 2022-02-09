import { Schema, model, connection } from 'mongoose'; //importando as coisas do mongoose que preciso pra criar o model

//criando os typs igualzinho esta lá no Mongo DB Compass
type UserType = {
    email: string,
    idade: number,
    interesses: [string],
    name: {
        primeiroNome: string,
        nomeDoMeio: string
    }
}

//preciso criar um Schema igual está no banco também (Mas é aqui que defino campos obrigatórios e mais detalhes)
const schema = new Schema<UserType>({
    email: { type: String, required: true },
    idade: Number,
    interesses: [String],
    name: {
        primeiroNome: { type: String, required: true },
        nomeDoMeio: String
    }
});

//agora sim criando o Model
const modelName: string = 'User';

//exportando o model caso ele exista e caso não exista cria ele
export default (connection && connection.models[modelName]) ? connection.models[modelName] : model<UserType>(modelName,schema);
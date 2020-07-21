import {API, Deck, Draw, CardEntity} from "./api";
export class User {
    DeckId: string;
    api: API;
    Hand: (CardEntity)[] = [];
    constructor() {
        this.api = new API();
        this.DeckId = '';
    }
    async CreateDeck(){
        this.DeckId = await this.api.GetDeck();
    }
    async DrawCard():Promise<Draw>{
        const NewCard = await this.api.DrawCard(this.DeckId);
        this.Hand.push(NewCard.cards[0]);
        return NewCard;
    }
}

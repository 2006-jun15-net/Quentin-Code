interface Deck{
    success: boolean,
    deck_id: string,
    shuffled: boolean,
    remaining: number
}
interface Draw {
    success: boolean;
    cards: (CardEntity)[];
    deck_id: string;
    remaining: number;
  }
interface CardEntity {
    image: string;
    value: string;
    suit: string;
    code: string;
  }
  
class API
{
    async GetData<T>(endpoint:string): Promise<T>{
    let response = await fetch(endpoint);
    const body = await response.json();
    return body;
    }
    async GetDeck(){
        let _ = await this.GetData<Deck>("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
        return _.deck_id;
    }
    async DrawCard(deckId:string){
        let _ = await this.GetData<Draw>(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        return <Draw>{
            success: _.success,
            cards : _.cards,
            deck_id:_.deck_id,
            remaining:_.remaining
        }
    }
}

export {
    Deck,
    Draw,
    CardEntity,
    API
}

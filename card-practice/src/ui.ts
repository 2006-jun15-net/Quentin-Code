import { User } from './user';
import { Draw } from './api';

export class UI{
    CardContainer: HTMLElement;
    user:User;
    DisplayHand(Card:Draw){
        let card = Card.cards[0]
        let _ = `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${card.image}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${card.suit}</h5>
        <p class="card-text">${card.value}</p>
        </div>
        </div>`
        this.CardContainer.insertAdjacentHTML('beforeend',_);
    }
    async Draw(){
        let _ = await this.user.DrawCard();
        this.DisplayHand(_);
    }
    Init()
    {
        let _ = document.createElement('button');
        _.classList.add("SuperButton", "btn-primary")
        console.log("inited")
        _.innerText = "Draw A Card";
        _.onclick=()=>{
            this.Draw()
        }
        document.body.appendChild(this.CardContainer)
        document.body.appendChild(_);
    }
    constructor() {
        this.CardContainer = document.createElement('div');
        this.CardContainer.classList.add('CardContainer')
        this.user = new User();
        this.user.CreateDeck();
    }
}
let ui  = new UI();
ui.Init();
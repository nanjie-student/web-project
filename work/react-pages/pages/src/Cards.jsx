import "./Cards.css";
function Cards(){
    return (
        <div className="Cards">
            <div class="card">
                <h2 class="card_title">Cat's club</h2>
				<img class="card_pic" src="https://placekitten.com/100?image=2" alt="Group of cats" />
				<p class="card__text">I love this soft and furry world, like being trapped in a warm, fluffy dream.</p>
                <button class="open" type="button">Subscribe</button>
            </div>
            <div class="card">
                <h2 class="card_title">Black Cat</h2>
				<img class="card_pic" src="https://placekitten.com/100?image=3" alt="little black kitty" />
				<p class="card__text">If possible, it seems good to be a meow that wakes up after eating and continues to eat.</p>
                <button class="open" type="button">Subscribe</button>
            </div>
            <div class="card">
                <h2 class="card_title">Wheat Cat</h2>
				<img class="card_pic" src="https://placekitten.com/100?image=4" alt="wheat kitty" />
				<p class="card__text">If there is a meow planet, it will probably look like this, fluffy and fleshy</p>
                <button class="open" type="button">Subscribe</button>
            </div>
        </div>
    );
}
export default Cards;
const portfolioItems = document.querySelector('.portfolio__items');
const portfolioItem = document.querySelectorAll('.portfolio__item');
const portfolioBottom = document.querySelector('.portfolio__bottom');
let prodQuantity = 2;
let dataLength = null;

if (portfolioItems) {
    const loadPortfolio = (quantity = 2) => {
        fetch('../resources/data/portfolio.json')
		.then((response) => {
			return response.json();
		})
		.then((data) => {

			dataLength = data.length;

			portfolioItems.innerHTML = '';

			for (let i = 0; i < dataLength; i++) {
				if (i < quantity) {
				 	let item = data[i];

            		portfolioItems.innerHTML += `

            	        <article data-pid="${item.id}" class="portfolio__item item-portfolio ${item.class}">
					        <a href="${item.route}" class="portfolio__img">
						        <img src="${item.image}" alt="Картинка сделанного сайта">
								<div class="portfolio__img-mask"></div>
								<span class="portfolio__img-text">Посмотреть</span>
					        </a>
					        <div class="portfolio__body">
						        <div class="portfolio__content">
							        <h3 class="portfolio__content-title">${item.title}</h3>
						        </div>
					        </div>
			            </article>

            		`;
				}
			}
		})
    };

    loadPortfolio(prodQuantity);

    portfolioBottom.addEventListener('click', () => {
		prodQuantity = prodQuantity + 2;

		loadPortfolio(prodQuantity);
		if (prodQuantity >= dataLength) {
			portfolioBottom.style.display = 'none';
		} else {
			portfolioBottom.style.display = 'block';
		}
	});	
		
}



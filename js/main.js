const btnContactEl = document.querySelector('#btn-contact');
const inputBrand = document.querySelector('#brand-phone');
const inputModel = document.querySelector('#model-phone');
const textInputProblemEl = document.querySelector('#problem-description');

btnContactEl.addEventListener('click', (event) => {
    event.preventDefault();

    const brand = inputBrand.value
    const model = inputModel.value
    const problem = textInputProblemEl.value

    window.open(`https://api.whatsapp.com/send?phone=5511960248973&text=Olá, gostaria de solicitar um orçamento. Marca: ${brand}, Modelo: ${model}, Problema: ${problem}`)
})

class App {
    #map;
    #mapZoomLevel = 13;

    constructor() {
        this._loadMap();
    }

    _loadMap() {
        const coords = [-23.539814444594814, -46.63796747335957];

        this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

        L.marker(coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
        })
      )
      .setPopupContent(
        '🛠️ R. Santa Ifigênia, 198 - Loja 30B - Santa Ifigênia, São Paulo'
      )
      .openPopup();
 
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map);

        this.#map.on('click', this._showForm.bind(this));
    }
}

const app = new App();

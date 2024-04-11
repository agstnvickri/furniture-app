export class Animation {
      constructor () {
            this.heading = document.querySelectorAll('section .heading');
            this.card = document.querySelectorAll('section .card');
      }

      scrollHeading () {
            this.heading.forEach((item) => {
                  item.dataset.aos = 'fade-down';
                  item.dataset.duration = 1000;
            })
      }
      scrollCard () {
            this.card.forEach((item) => {
                  item.dataset.aos = 'zoom-in';
                  item.dataset.duration = 1000;
            })
      }
}
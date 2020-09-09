This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To build the examples locally, run:

```bash
npm install
npm start
```

Then open [`localhost:3000`](http://localhost:3000) in a browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### Game rules & demo

First, you have to login only with your name. The name must be longer than 2 characters and shorter than 30. Special characters are not allowed.

![Captura de pantalla de 2020-09-09 17-45-57](https://user-images.githubusercontent.com/43348411/92654577-66c73880-f2c6-11ea-97b4-86f46e1a6697.png)

Your session will remain active unless you either win, lose or click the Exit button.

## How to play?

Select one card and click End Turn.

The monster effect will be displayed with a toaster on the top section of the page.  to you 

You have to defeat the monster by using your DAMAGE cards, defend yourself by using SHIELD o heal using HEAL cards.

![Captura de pantalla de 2020-09-09 17-46-16](https://user-images.githubusercontent.com/43348411/92654822-cc1b2980-f2c6-11ea-91ac-fa58a7ba2662.png)
![Captura de pantalla de 2020-09-09 17-46-19](https://user-images.githubusercontent.com/43348411/92654832-cfaeb080-f2c6-11ea-9e71-5efcd30baaae.png)
![Captura de pantalla de 2020-09-09 17-46-22](https://user-images.githubusercontent.com/43348411/92654844-d3dace00-f2c6-11ea-88a3-fc97681c8d95.png)
![Captura de pantalla de 2020-09-09 17-46-27](https://user-images.githubusercontent.com/43348411/92654943-f967d780-f2c6-11ea-9989-0e2e04f23e12.png)


If the monster throws you an horror effect, you lose one turn and you must click End turn without selecting any cards.

![Captura de pantalla de 2020-09-09 17-46-37](https://user-images.githubusercontent.com/43348411/92654961-ff5db880-f2c6-11ea-9b2a-0376c313586a.png)

Otherwise, you will allways need to select a card in order to enable End Turn button.

Finally, if you run out of turns or your hp reaches 0, you Lose. If you defeat the monster before all the previous things occur, you win!

![Captura de pantalla de 2020-09-09 17-47-30](https://user-images.githubusercontent.com/43348411/92654969-0258a900-f2c7-11ea-96c2-6e4ea1cf0e7b.png)

Good luck!

### Additional comments

- Ya sea que estando logueada ingreso a un game que cerre la pestaña, o bien luego de que el endpoint de get cards no me retorne cards porque tengo horror effect, el siguiente paso es retornarme una card extra, por eso hago un slice en cards para que siempre me envie las primeras tres. 
- Horror effect segun las especificaciones, te deja sin un turno, consecuencia que handleo desde el client side. 
  Sin embargo viene con un valor el cual no sabia si significaba que tenia que hacer la misma logica que hace el back para el calculo del daño o no. 
- Realice loadings separados por si se quiere que se muestren en un futuro spinners de carga por bloques. 
Falto realizar:
- responsive
- shape de proptypes object y arrayOf. 
- manejar todos los llamados a la api desde el reducer utilizando middleware. A modo de ejemplo lo hice con Create game.


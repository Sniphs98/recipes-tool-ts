import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

class Recipe {

  steps:[{
      amount: number
      unit_of_measurement: Unit
      name: String
      preparation: String
  }] 

  constructor(){
    console.log("test")
  }

}


// TABLESPOON = 'Esslöffel', so sollte der auf bau des Enums sein
enum Unit {
  ML = 'ml',
  TL = 'TL',
  SHOT = 'Schuss',
  PICE = 'Stück',
  PRAISE = 'Priese'
}


export default app

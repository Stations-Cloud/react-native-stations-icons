import createIconsComponent from "../../helpers/createIconsComponent";
import IconesGeneral from './json/Teste_04Config.json'
import font from '../../fonts/Teste_04.ttf'

console.log("***font", font)
const General = createIconsComponent("Teste_04", IconesGeneral, font)

export default General


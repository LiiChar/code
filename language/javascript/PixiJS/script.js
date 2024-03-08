import * as px from 'pixi.js'

// создаем рендерер (отрисовщик?) и задаем размеры
// по умолчанию, пикси будет использовать WebGL
// если браузер такого не умеет, то откатится на тормозной канвас
const renderer = px.autoDetectRenderer({
  height: 400,
  width: 400,
})

// добавляем созданный канвас на страницу
document.body.appendChild(renderer.view)

// создаем контейнер для сцены
const stage = new px.Container()

const render = () => {
  renderer.render(stage)
}

// отрисовываем сцену на канвасе
render()
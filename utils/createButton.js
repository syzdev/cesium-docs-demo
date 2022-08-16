/**
 * @description: 为页面添加一个按钮
 * @param {String} link 点击按钮所跳转的链接 _blank
 * @param {String} mode 按钮明亮模式或黑暗模式
 * @return {*}
 */
function createButton(link, mode) {
  // TODO：使用Object.assign()重写样式属性赋值
  let btnDiv = document.createElement('div')
  btnDiv.innerHTML = 'GitHub'
  btnDiv.style.width = '80px'
  btnDiv.style.textAlign = 'center'
  btnDiv.style.lineHeight = '35px'
  btnDiv.style.height = '35px'
  btnDiv.style.position = 'absolute'
  btnDiv.style.top = '40px'
  btnDiv.style.left = '50px'
  btnDiv.style.borderRadius = '10px'
  btnDiv.style.boxShadow = '0px 10px 14px -7px #cdcdcd'
  btnDiv.style.background = mode === 'light' ? '#fff' : '#000'
  btnDiv.style.color = mode === 'light' ? '#000' : '#fff'

  btnDiv.addEventListener('click', () => {
    window.open(link)
  })
  btnDiv.addEventListener('mouseover', () => {
    btnDiv.style.cursor = 'pointer'
  })
  
  document.body.appendChild(btnDiv)
}

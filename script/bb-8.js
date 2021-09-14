/* Written by Ye Liu */

var dW = document.getElementById('bb8').offsetWidth
var myPos = 0.8 * document.body.clientWidth
var movingRight = true
var dSpeed = 1
var dPos = 0
var dRot = 0

var roll = function () {
  if (document.body.clientWidth > 767) {
    if (myPos > dPos + dW - 100) {
      // moving right
      if (!movingRight) {
        movingRight = true
        document.getElementsByClassName('antennaes')[0].classList.remove('left')
        document.getElementsByClassName('outer-eye')[0].classList.remove('left')
        document.getElementsByClassName('bulls-eye')[0].classList.remove('left')
      }
      if (myPos - dPos - dW > 0 && dSpeed < 5) {
        // speed up
        dSpeed = dSpeed * 1.05
      } else if (myPos - dPos - dW < 0 && dSpeed > 1) {
        // slow down
        dSpeed = dSpeed / 1.05
      }
      dPos = dPos + dSpeed
      dRot = dRot + dSpeed
    } else if (myPos < dPos + dW - 110) {
      // moving left
      if (movingRight) {
        movingRight = false
        document.getElementsByClassName('antennaes')[0].classList.add('left')
        document.getElementsByClassName('outer-eye')[0].classList.add('left')
        document.getElementsByClassName('bulls-eye')[0].classList.add('left')
      }
      if (dPos + dW - myPos > 210 && dSpeed < 5) {
        // speed up
        dSpeed = dSpeed * 1.05
      } else if (dPos + dW - myPos < 210 && dSpeed > 1) {
        // slow down
        dSpeed = dSpeed / 1.05
      }
      dPos = dPos - dSpeed
      dRot = dRot - dSpeed
    }
    document.getElementById('bb8').style.setProperty('left', dPos + 'px')
    document.getElementsByClassName('body')[0].style.setProperty('transform', 'rotate(' + dRot + 'deg)')
  } else {
    document.getElementById('bb8').style.setProperty('left', '0')
    document.getElementById('bb8').style.setProperty('top', 'auto')
  }
}

setInterval(roll, 10)

document.onmousemove = function (e) {
  myPos = e.pageX
}

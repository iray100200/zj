import React, { useEffect } from 'react'

export default function () {
  useEffect(() => {
    var focusLi = $('.focus').find('li')
    var fCount = focusLi.length
    var fNum = 0
    var timer

    for (var i = 0; i < fCount; i++) {
      var dot = '<span></span>'
      $('.dots').append(dot)
    }
    function focusMove() {
      focusLi.eq(fNum).fadeIn().siblings().fadeOut()
      $('.dots').find('span').eq(fNum).addClass('active').siblings().removeClass('active')
    }
    focusMove()
    $('.dots').on('click', 'span', function () {
      fNum = $(this).index()
      focusMove()
    });
    timer = setInterval(function () {
      fNum++
      fNum %= fCount
      focusMove()
    }, 5000)

    var equ = $('.equipment')
    var equUl = equ.find('ul')
    var equLi = equUl.find('li')
    var equCount = equLi.length
    var equPrev = $('.equPrev')
    var equNext = $('.equNext')
    var equMax = 5
    var space = 236
    var equNum = 0

    equUl.width(space * equCount);
    if (equCount > equMax) {
      equNext.show()
    }
    function equMove() {
      if (!equUl.is(':animated')) {
        equUl.animate({ left: -space * equNum }, 400)
      }
    }
    equNext.on('click', function () {
      if (equNum == equCount - equMax) {
        equNext.hide()
        return false
      } else {
        equNum++
      }
      equMove()
      equPrev.show()
    });
    equPrev.on('click', function () {
      if (equNum == 0) {
        equPrev.hide()
        return false
      } else {
        equNum--
      }
      equMove();
      equNext.show()
    })
  })

  return null
}
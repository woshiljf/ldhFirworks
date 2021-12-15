var timeId1 = null
startDateTime()

function startDateTime() {
  if (timeId1) return
  timeId1 = setInterval(function () {
    var date = new Date()
    var year = date.getFullYear() //获取当前年份
    var mon = date.getMonth() + 1 //获取当前月份
    var day = date.getDate() //获取当前日
    var week = date.getDay() //获取当前星期几
    var h = date.getHours() //获取小时
    var m = date.getMinutes() //获取分钟

    var s = date.getSeconds() //获取秒

    h = h > 9 ? h : '0' + h
    m = m > 9 ? m : '0' + m
    s = s > 9 ? s : '0' + s

    var d = document.getElementById('date')
    var time = document.getElementById('time')
    time.innerHTML = h + ':' + m + ':' + s
    d.innerHTML = year + '年' + mon + '月' + day + '日' + '星期' + week
  }, 1000)
}

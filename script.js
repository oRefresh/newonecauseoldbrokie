
function draw() {
    con.clearRect(0, 0, WIDTH, HEIGHT);
    for (var a = 0; a < pxs.length; a++) pxs[a].fade(), pxs[a].move(), pxs[a].draw()
  }
  
  function Circle() {
    this.s = {
      ttl: 8e3,
      xmax: 5,
      ymax: 2,
      rmax: 10,
      rt: 1,
      xdef: 960,
      ydef: 540,
      xdrift: 4,
      ydrift: 4,
      random: !0,
      blink: !0
    }, this.reset = function() {
      this.x = this.s.random ? WIDTH * Math.random() : this.s.xdef, this.y = this.s.random ? HEIGHT * Math.random() : this.s.ydef, this.r = (this.s.rmax - 1) * Math.random() + 1, this.dx = Math.random() * this.s.xmax * (Math.random() < .5 ? -1 : 1), this.dy = Math.random() * this.s.ymax * (Math.random() < .5 ? -1 : 1), this.hl = this.s.ttl / rint * (this.r / this.s.rmax), this.rt = Math.random() * this.hl, this.s.rt = Math.random() + 1, this.stop = .2 * Math.random() + .4, this.s.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1), this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1)
    }, this.fade = function() {
      this.rt += this.s.rt
    }, this.draw = function() {
      this.s.blink && (this.rt <= 0 || this.rt >= this.hl) ? this.s.rt = -1 * this.s.rt : this.rt >= this.hl && this.reset();
      var a = 1 - this.rt / this.hl;
      con.beginPath(), con.arc(this.x, this.y, this.r, 0, 2 * Math.PI, !0), con.closePath();
      var b = this.r * a;
      g = con.createRadialGradient(this.x, this.y, 0, this.x, this.y, b <= 0 ? 1 : b), g.addColorStop(0, "rgba(232,226,213," + a + ")"), g.addColorStop(this.stop, "rgba(232,226,213," + .2 * a + ")"), g.addColorStop(1, "rgba(232,226,213,0)"), con.fillStyle = g, con.fill()
    }, this.move = function() {
      this.x += this.rt / this.hl * this.dx, this.y += this.rt / this.hl * this.dy, (this.x > WIDTH || this.x < 0) && (this.dx *= -1), (this.y > HEIGHT || this.y < 0) && (this.dy *= -1)
    }, this.getX = function() {
      return this.x
    }, this.getY = function() {
      return this.y
    }
  }
  var WIDTH, HEIGHT, canvas, con, g, pxs = new Array,
    rint = 50;
  $(document).ready(function() {
    WIDTH = window.innerWidth, HEIGHT = window.innerHeight, canvas = document.getElementById("pixie"), $(canvas).attr("width", WIDTH).attr("height", HEIGHT), $(canvas).attr("display", "inline-block"), con = canvas.getContext("2d");
    for (var a = 0; a < 25; a++) pxs[a] = new Circle, pxs[a].reset();
    setInterval(draw, rint)
  }), $('a[href^="#"]').on("click", function(a) {
    var b = $(this.getAttribute("href"));
    b.length && (a.preventDefault(), $("html, body").stop().animate({
      scrollTop: b.offset().top
    }, 1e3))
  }), 
  document.getElementById("home").onclick = function() {
    window.location.href = "minigame.html"
  }, window.onbeforeunload = function() {
    window.scrollTo && window.scrollTo(0, 0)
  }, history && history.scrollRestoration && (history.scrollRestoration = "manual");
  var s = 0;
  window.onload = function a() {
    var b = 100,
      c = "Yusif Shawish";
    s < c.length && (document.getElementById("abc").innerHTML += c.charAt(s), s++, setTimeout(a, b))
  };
  var i = 0;
  setTimeout(function b() {
    var a = 100,
      c = "Front End Developer";
    i < c.length && (document.getElementById("cba").innerHTML += c.charAt(i), i++, setTimeout(b, a))
  }, 1850);
  var l = 0;
  setTimeout(function c() {
    var a = 120,
      b = "Check Down Below";
    l < b.length && (document.getElementById("below").innerHTML += b.charAt(l), l++, setTimeout(c, a))
  }, 3770);
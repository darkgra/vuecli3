!(function(s) {
  var e,
    n =
      '<svg><symbol id="icon-user" viewBox="0 0 1024 1024"><path d="M652.8 467.2C723.2 422.4 768 345.6 768 256c0-140.8-115.2-256-256-256S256 115.2 256 256c0 89.6 44.8 166.4 115.2 211.2C192 518.4 64 665.6 64 832c0 166.4 198.4 192 448 192 249.6 0 448-19.2 448-192C960 665.6 832 518.4 652.8 467.2zM320 256c0-108.8 83.2-192 192-192s192 83.2 192 192S620.8 448 512 448 320 364.8 320 256zM512 960c-211.2 0-384-19.2-384-128 0-179.2 172.8-320 384-320 211.2 0 384 140.8 384 320C896 940.8 723.2 960 512 960z"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName("script"))[
      e.length - 1
    ].getAttribute("data-injectcss");
  if (t && !s.__iconfont__svg__cssinject__) {
    s.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  !(function(e) {
    if (document.addEventListener)
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState))
        setTimeout(e, 0);
      else {
        var t = function() {
          document.removeEventListener("DOMContentLoaded", t, !1), e();
        };
        document.addEventListener("DOMContentLoaded", t, !1);
      }
    else
      document.attachEvent &&
        ((n = e),
        (o = s.document),
        (i = !1),
        (c = function() {
          i || ((i = !0), n());
        }),
        (d = function() {
          try {
            o.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(d, 50);
          }
          c();
        })(),
        (o.onreadystatechange = function() {
          "complete" == o.readyState && ((o.onreadystatechange = null), c());
        }));
    var n, o, i, c, d;
  })(function() {
    var e, t;
    ((e = document.createElement("div")).innerHTML = n),
      (n = null),
      (t = e.getElementsByTagName("svg")[0]) &&
        (t.setAttribute("aria-hidden", "true"),
        (t.style.position = "absolute"),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = "hidden"),
        (function(e, t) {
          t.firstChild
            ? (function(e, t) {
                t.parentNode.insertBefore(e, t);
              })(e, t.firstChild)
            : t.appendChild(e);
        })(t, document.body));
  });
})(window);

! function(e, t) {
  if ("object" == typeof exports && "object" == typeof module) module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var n = t();
    for (var o in n)("object" == typeof exports ? exports : e)[o] = n[o]
  }
}(this, function() {
  return function(e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var r = n[o] = {
        exports: {},
        id: o,
        loaded: !1
      };
      return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "/", t(0)
  }([function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var r = n(7),
      a = o(r);
    e.exports = {
      InputTag: a["default"]
    }
  }, function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(2),
      a = o(r);
    t["default"] = {
      name: "InputTag",
      props: {
        tags: {
          type: Array,
          "default": function() {
            return []
          }
        },
        placeholder: {
          type: String,
          "default": ""
        },
        onChange: {
          type: Function
        },
        readOnly: {
          type: Boolean,
          "default": !1
        }
      },
      data: function() {
        return {
          newTag: ""
        }
      },
      methods: {
        focusNewTag: function() {
          this.readOnly || this.$el.querySelector(".new-tag").focus()
        },
        addNew: function(e) {
          e && !this.tags.includes(e) && (this.tags.push(e), this.tagChange()), this.newTag = ""
        },
        remove: function(e) {
          this.tags.splice(e, 1), this.tagChange()
        },
        removeLastTag: function() {
          this.newTag || (this.tagChange(), this.tags.pop())
        },
        getPlaceholder: function() {
          return this.tags.length ? "" : this.placeholder
        },
        tagChange: function() {
          this.onChange && this.onChange(JSON.parse((0, a["default"])(this.tags)))
        }
      }
    }
  }, function(e, t, n) {
    e.exports = {
      "default": n(3),
      __esModule: !0
    }
  }, function(e, t, n) {
    var o = n(4),
      r = o.JSON || (o.JSON = {
        stringify: JSON.stringify
      });
    e.exports = function(e) {
      return r.stringify.apply(r, arguments)
    }
  }, function(e, t) {
    var n = e.exports = {
      version: "2.4.0"
    };
    "number" == typeof __e && (__e = n)
  }, function(e, t, n) {
    t = e.exports = n(6)(), t.push([e.id, '.vue-input-tag{background-color:#fff;border:1px solid #ccc;overflow:hidden;padding-left:5px;padding-top:5px;cursor:text;height:36px;-webkit-appearance:textfield}.vue-input-tag .tag{background-color:#cde69c;border-radius:2px;border:1px solid #a5d24a;color:#638421;display:inline-block;font-size:13px;font-weight:400;margin-bottom:5px;margin-right:5px;padding:5px}.vue-input-tag .tag .remove{cursor:pointer;font-weight:700;color:#638421}.vue-input-tag .tag .remove:hover{text-decoration:none}.vue-input-tag .tag .remove:before{content:" x"}.vue-input-tag .new-tag{background:transparent;border:0;color:#777;font-size:13px;font-weight:400;margin-bottom:6px;margin-top:1px;outline:none;padding:5px;width:80px}.vue-input-tag.read-only{cursor:default}', "", {
      version: 3,
      sources: ["/./src/InputTag.vue"],
      names: [],
      mappings: "AACA,eAAe,sBAAsB,sBAAsB,gBAAgB,iBAAiB,gBAAgB,YAAY,YAAY,4BAA4B,CAC/J,AACD,oBAAoB,yBAAyB,kBAAkB,yBAAyB,cAAc,qBAAqB,eAAe,gBAAgB,kBAAkB,iBAAiB,WAAW,CACvM,AACD,4BAA4B,eAAe,gBAAiB,aAAa,CACxE,AACD,kCAAkC,oBAAoB,CACrD,AACD,mCAAoC,YAAY,CAC/C,AACD,wBAAwB,uBAAuB,SAAS,WAAW,eAAe,gBAAgB,kBAAkB,eAAe,aAAa,YAAY,UAAU,CACrK,AACD,yBAAyB,cAAc,CACtC",
      file: "InputTag.vue",
      sourcesContent: ['\n.vue-input-tag{background-color:#fff;border:1px solid #ccc;overflow:hidden;padding-left:5px;padding-top:5px;cursor:text;height:36px;-webkit-appearance:textfield\n}\n.vue-input-tag .tag{background-color:#cde69c;border-radius:2px;border:1px solid #a5d24a;color:#638421;display:inline-block;font-size:13px;font-weight:400;margin-bottom:5px;margin-right:5px;padding:5px\n}\n.vue-input-tag .tag .remove{cursor:pointer;font-weight:bold;color:#638421\n}\n.vue-input-tag .tag .remove:hover{text-decoration:none\n}\n.vue-input-tag .tag .remove::before{content:" x"\n}\n.vue-input-tag .new-tag{background:transparent;border:0;color:#777;font-size:13px;font-weight:400;margin-bottom:6px;margin-top:1px;outline:none;padding:5px;width:80px\n}\n.vue-input-tag.read-only{cursor:default\n}\n'],
      sourceRoot: "webpack://"
    }])
  }, function(e, t) {
    e.exports = function() {
      var e = [];
      return e.toString = function() {
        for (var e = [], t = 0; t < this.length; t++) {
          var n = this[t];
          n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
        }
        return e.join("")
      }, e.i = function(t, n) {
        "string" == typeof t && (t = [
          [null, t, ""]
        ]);
        for (var o = {}, r = 0; r < this.length; r++) {
          var a = this[r][0];
          "number" == typeof a && (o[a] = !0)
        }
        for (r = 0; r < t.length; r++) {
          var i = t[r];
          "number" == typeof i[0] && o[i[0]] || (n && !i[2] ? i[2] = n : n && (i[2] = "(" + i[2] + ") and (" + n + ")"), e.push(i))
        }
      }, e
    }
  }, function(e, t, n) {
    var o, r;
    n(10), o = n(1);
    var a = n(8);
    r = o = o || {}, "object" != typeof o["default"] && "function" != typeof o["default"] || (r = o = o["default"]), "function" == typeof r && (r = r.options), r.render = a.render, r.staticRenderFns = a.staticRenderFns, e.exports = o
  }, function(module, exports) {
    module.exports = {
      render: function() {
        with(this) return _h("div", {
          staticClass: "vue-input-tag",
          "class": {
            "read-only": readOnly
          },
          on: {
            click: function(e) {
              focusNewTag()
            }
          }
        }, [_l(tags, function(e, t) {
          return _h("span", {
            staticClass: "tag"
          }, [_h("span", [_s(e)]), readOnly ? _e() : _h("a", {
            staticClass: "remove",
            on: {
              click: function(e) {
                e.preventDefault(), e.stopPropagation(), remove(t)
              }
            }
          })])
        }), readOnly ? _e() : _h("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: newTag,
            expression: "newTag"
          }],
          staticClass: "new-tag",
          attrs: {
            placeholder: getPlaceholder(),
            type: "text"
          },
          domProps: {
            value: _s(newTag)
          },
          on: {
            keydown: [function(e) {
              8 !== e.keyCode && 46 !== e.keyCode || (e.stopPropagation(), removeLastTag())
            }, function(e) {
              13 === e.keyCode && (e.preventDefault(), e.stopPropagation(), addNew(newTag))
            }],
            input: function(e) {
              e.target.composing || (newTag = e.target.value)
            }
          }
        })])
      },
      staticRenderFns: []
    }
  }, function(e, t, n) {
    function o(e, t) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n],
          r = c[o.id];
        if (r) {
          r.refs++;
          for (var a = 0; a < r.parts.length; a++) r.parts[a](o.parts[a]);
          for (; a < o.parts.length; a++) r.parts.push(u(o.parts[a], t))
        } else {
          for (var i = [], a = 0; a < o.parts.length; a++) i.push(u(o.parts[a], t));
          c[o.id] = {
            id: o.id,
            refs: 1,
            parts: i
          }
        }
      }
    }

    function r(e) {
      for (var t = [], n = {}, o = 0; o < e.length; o++) {
        var r = e[o],
          a = r[0],
          i = r[1],
          s = r[2],
          u = r[3],
          p = {
            css: i,
            media: s,
            sourceMap: u
          };
        n[a] ? n[a].parts.push(p) : t.push(n[a] = {
          id: a,
          parts: [p]
        })
      }
      return t
    }

    function a(e, t) {
      var n = g(),
        o = v[v.length - 1];
      if ("top" === e.insertAt) o ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), v.push(t);
      else {
        if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        n.appendChild(t)
      }
    }

    function i(e) {
      e.parentNode.removeChild(e);
      var t = v.indexOf(e);
      t >= 0 && v.splice(t, 1)
    }

    function s(e) {
      var t = document.createElement("style");
      return t.type = "text/css", a(e, t), t
    }

    function u(e, t) {
      var n, o, r;
      if (t.singleton) {
        var a = h++;
        n = A || (A = s(t)), o = p.bind(null, n, a, !1), r = p.bind(null, n, a, !0)
      } else n = s(t), o = d.bind(null, n), r = function() {
        i(n)
      };
      return o(e),
        function(t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
            o(e = t)
          } else r()
        }
    }

    function p(e, t, n, o) {
      var r = n ? "" : o.css;
      if (e.styleSheet) e.styleSheet.cssText = x(t, r);
      else {
        var a = document.createTextNode(r),
          i = e.childNodes;
        i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(a, i[t]) : e.appendChild(a)
      }
    }

    function d(e, t) {
      var n = t.css,
        o = t.media,
        r = t.sourceMap;
      if (o && e.setAttribute("media", o), r && (n += "\n/*# sourceURL=" + r.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;
      else {
        for (; e.firstChild;) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n))
      }
    }
    var c = {},
      f = function(e) {
        var t;
        return function() {
          return "undefined" == typeof t && (t = e.apply(this, arguments)), t
        }
      },
      l = f(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
      }),
      g = f(function() {
        return document.head || document.getElementsByTagName("head")[0]
      }),
      A = null,
      h = 0,
      v = [];
    e.exports = function(e, t) {
      t = t || {}, "undefined" == typeof t.singleton && (t.singleton = l()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
      var n = r(e);
      return o(n, t),
        function(e) {
          for (var a = [], i = 0; i < n.length; i++) {
            var s = n[i],
              u = c[s.id];
            u.refs--, a.push(u)
          }
          if (e) {
            var p = r(e);
            o(p, t)
          }
          for (var i = 0; i < a.length; i++) {
            var u = a[i];
            if (0 === u.refs) {
              for (var d = 0; d < u.parts.length; d++) u.parts[d]();
              delete c[u.id]
            }
          }
        }
    };
    var x = function() {
      var e = [];
      return function(t, n) {
        return e[t] = n, e.filter(Boolean).join("\n")
      }
    }()
  }, function(e, t, n) {
    var o = n(5);
    "string" == typeof o && (o = [
      [e.id, o, ""]
    ]);
    n(9)(o, {});
    o.locals && (e.exports = o.locals)
  }])
});
//# sourceMappingURL=vue-input-tag.js.map

function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,o=!1,r=void 0;try{for(var c,a=e[Symbol.iterator]();!(i=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);i=!0);}catch(s){o=!0,r=s}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+1zh":function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),o=n("NFeN"),r=n("XNiG"),c=n("itXk"),a=n("7Hc7"),s=n("1G5W"),l=n("HDdC"),u=n("Y7HM"),d=function(e){function t(e){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.a;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this))).source=e,n.delayTime=i,n.scheduler=o,(!Object(u.a)(i)||i<0)&&(n.delayTime=0),o&&"function"==typeof o.schedule||(n.scheduler=a.a),n}return _inherits(t,e),_createClass(t,[{key:"_subscribe",value:function(e){return this.scheduler.schedule(t.dispatch,this.delayTime,{source:this.source,subscriber:e})}}],[{key:"create",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.a;return new t(e,n,i)}},{key:"dispatch",value:function(e){var t=e.source,n=e.subscriber;return this.add(t.subscribe(n))}}]),t}(l.a);function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){return n.lift(new p(e,t))}}var p=function(){function e(t,n){_classCallCheck(this,e),this.scheduler=t,this.delay=n}return _createClass(e,[{key:"call",value:function(e,t){return new d(t,this.delay,this.scheduler).subscribe(e)}}]),e}(),f=n("JX91"),h=n("fXoL"),y=n("Faly"),v=n("TNhP"),m=["tocItem"];function g(e,t){1&e&&(h.Vb(0,"div",7),h.Gc(1," \u76ee\u5f55 "),h.Tb())}function _(e,t){if(1&e){var n=h.Wb();h.Vb(0,"button",8),h.dc("click",(function(e){return h.vc(n),h.hc(2).toggle(!1)})),h.Gc(1," \u76ee\u5f55 "),h.Qb(2,"mat-icon",9),h.Tb()}if(2&e){var i=h.hc(2);h.Cb("aria-pressed",!i.isCollapsed),h.Ab(2),h.Fb("collapsed",i.isCollapsed)}}function E(e,t){if(1&e&&(h.Vb(0,"li",11,12),h.Qb(2,"a",13),h.Tb()),2&e){var n=h.hc(),i=n.$implicit,o=n.index,r=h.hc(2);h.Db(i.level),h.Fb("secondary","EmbeddedExpandable"===r.type&&o>=r.primaryMax),h.Fb("active",o===r.activeIndex),h.nc("title",i.title),h.Ab(2),h.mc("href",i.href,h.xc)("innerHTML",i.content,h.wc)}}function C(e,t){if(1&e&&(h.Sb(0),h.Ec(1,E,3,8,"li",10),h.Rb()),2&e){var n=t.$implicit,i=h.hc(2);h.Ab(1),h.mc("ngIf","Floating"===i.type||"h1"!==n.level)}}function O(e,t){if(1&e){var n=h.Wb();h.Vb(0,"button",14),h.dc("click",(function(e){return h.vc(n),h.hc(2).toggle()})),h.Tb()}if(2&e){var i=h.hc(2);h.Fb("collapsed",i.isCollapsed),h.Cb("aria-pressed",!i.isCollapsed)}}function k(e,t){if(1&e&&(h.Vb(0,"div",1),h.Ec(1,g,2,0,"div",2),h.Ec(2,_,3,2,"button",3),h.Vb(3,"ul",4),h.Ec(4,C,2,1,"ng-container",5),h.Tb(),h.Ec(5,O,1,2,"button",6),h.Tb()),2&e){var n=h.hc();h.Fb("collapsed",n.isCollapsed),h.Ab(1),h.mc("ngIf","EmbeddedSimple"===n.type),h.Ab(1),h.mc("ngIf","EmbeddedExpandable"===n.type),h.Ab(1),h.Fb("embedded","Floating"!==n.type),h.Ab(1),h.mc("ngForOf",n.tocList),h.Ab(1),h.mc("ngIf","EmbeddedExpandable"===n.type)}}var w,T=((w=function(){function e(t,n,i){_classCallCheck(this,e),this.scrollService=t,this.tocService=i,this.activeIndex=null,this.type="None",this.isCollapsed=!0,this.isEmbedded=!1,this.onDestroy=new r.a,this.primaryMax=4,this.isEmbedded=-1!==n.nativeElement.className.indexOf("embedded")}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.tocService.tocList.pipe(Object(s.a)(this.onDestroy)).subscribe((function(t){e.tocList=t;var n=e.tocList.reduce((function(e,t){return function(e){return"h1"!==e.level}(t)?e+1:e}),0);e.type=n>0?e.isEmbedded?n>e.primaryMax?"EmbeddedExpandable":"EmbeddedSimple":"Floating":"None"}))}},{key:"ngAfterViewInit",value:function(){var e=this;this.isEmbedded||Object(c.a)([this.tocService.activeItemIndex.pipe(b(a.a)),this.items.changes.pipe(Object(f.a)(this.items))]).pipe(Object(s.a)(this.onDestroy)).subscribe((function(t){var n=_slicedToArray(t,2),i=n[0],o=n[1];if(e.activeIndex=i,!(null===i||i>=o.length)){var r=o.toArray()[i].nativeElement,c=r.offsetParent,a=r.getBoundingClientRect(),s=c.getBoundingClientRect();a.top>=s.top&&a.bottom<=s.bottom||(c.scrollTop+=a.top-s.top-c.clientHeight/2)}}))}},{key:"ngOnDestroy",value:function(){this.onDestroy.next()}},{key:"toggle",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.isCollapsed=!this.isCollapsed,e&&this.isCollapsed&&this.toTop()}},{key:"toTop",value:function(){this.scrollService.scrollToTop()}}]),e}()).\u0275fac=function(e){return new(e||w)(h.Pb(y.a),h.Pb(h.k),h.Pb(v.a))},w.\u0275cmp=h.Jb({type:w,selectors:[["aio-toc"]],viewQuery:function(e,t){var n;1&e&&h.Lc(m,!0),2&e&&h.rc(n=h.ec())&&(t.items=n)},decls:1,vars:1,consts:[["class","toc-inner no-print",3,"collapsed",4,"ngIf"],[1,"toc-inner","no-print"],["class","toc-heading embedded",4,"ngIf"],["type","button","class","toc-heading embedded secondary","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"click",4,"ngIf"],[1,"toc-list"],[4,"ngFor","ngForOf"],["type","button","class","toc-more-items embedded material-icons","title","Expand/collapse contents","aria-label","Expand/collapse contents",3,"collapsed","click",4,"ngIf"],[1,"toc-heading","embedded"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-heading","embedded","secondary",3,"click"],["svgIcon","keyboard_arrow_right",1,"rotating-icon"],[3,"title","class","secondary","active",4,"ngIf"],[3,"title"],["tocItem",""],[3,"href","innerHTML"],["type","button","title","Expand/collapse contents","aria-label","Expand/collapse contents",1,"toc-more-items","embedded","material-icons",3,"click"]],template:function(e,t){1&e&&h.Ec(0,k,6,6,"div",0),2&e&&h.mc("ngIf","None"!==t.type)},directives:[i.k,i.j,o.a],encapsulation:2}),w);n.d(t,"TocModule",(function(){return I}));var x,I=((x=function e(){_classCallCheck(this,e),this.customElementComponent=T}).\u0275mod=h.Nb({type:x}),x.\u0275inj=h.Mb({factory:function(e){return new(e||x)},imports:[[i.c,o.b]]}),x)}}]);
//# sourceMappingURL=toc-toc-module-es5.8afb6664570994d226ab.js.map
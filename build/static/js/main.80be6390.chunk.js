(this.webpackJsonpjson2class=this.webpackJsonpjson2class||[]).push([[0],{29:function(e,t,n){},58:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var o=n(2),c=n(0),a=n.n(c),s=n(22),r=n.n(s),i=(n(29),n(6)),l=n(23),d=n.n(l),j=n(11),u=n.n(j),m=(n(58),{String:"String",Number:"Number",Null:"Null",Undefined:"Undefined",Array:"Array",Object:Object}),b=function(e,t){return Object.prototype.toString.call(e)==="[object ".concat(t,"]")},h=function(e){return/\d{13}/.test(e)};n(59),n(60),n(61),n(62);var O=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),l=r[0],j=r[1],O=Object(c.useState)(""),p=Object(i.a)(O,2),f=p[0],g=p[1],N=Object(c.useState)(""),v=Object(i.a)(N,2),x=v[0],S=(v[1],Object(c.useRef)(!1)),y=d.a.compile("\n    import { makeAutoObservable, toJS } from 'mobx';\n    {{#if needDateFormat}}\n    import dayjs from 'dayjs';\n    import { dateFormat } from '@config/index';\n    {{/if}}\n\n    /**\n     * {{modelName}}\n     */\n    export default class {{modelName}} {\n      {{#each json}}\n      {{{@key}}} = {{{@this}}};\n      {{/each}}\n      // \u4f60\u53ef\u4ee5\u7cbe\u7ec6\u7684\u63a7\u5236\u8d4b\u503c\u7684\u8fc7\u7a0b\n      constructor(json) {\n        makeAutoObservable(this);\n        // const {id} = json;\n        // this.id = id;\n        Object.assign(this, json);\n      }\n\n      {{#each computed}}\n      {{{@key}}} = {{{@this}}};\n      {{/each}}\n      // \u4f60\u53ef\u4ee5\u7cbe\u7ec6\u7684\u63a7\u5236\u8d4b\u503c\u7684\u8fc7\u7a0b\n      updateFromJson(json) {\n        // const {id} = json;\n        // this.id = id;\n        // ...\n        Object.assign(this, json);\n      }\n      toJSON() {\n        return toJS(this);\n      }\n    }\n    "),k=Object(c.useCallback)((function(e){console.log(e,"origin--");var t,n={};for(var o in e){console.log(o,"key"),S.current=!1;var c=e[o];h(c)?(e[o]="'--'",n["get computed".concat((t=o,"string"!==typeof t?"":t.charAt(0).toUpperCase()+t.slice(1)))]="() {\n          return dayjs(this.".concat(o,").format(dateFormat)\n        };"),S.current=!0):b(c,m.Array)?e[o]="[]":b(c,m.Null)||b(c,m.Object)?e[o]="{}":e[o]="'--'"}return n}),[]);return Object(c.useEffect)((function(){if(l)try{var e=JSON.parse(l),t=k(e),n=y({json:e,computed:t,modelName:f,needDateFormat:S.current});console.log(n,e,"newCode"),a(n)}catch(o){console.log(o)}return function(){}}),[l,y,f,k]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("p",{className:"App-header",children:"Generate Mobx Model class with JSON."}),Object(o.jsx)("p",{children:x.message}),Object(o.jsx)("input",{className:"form-control",type:"text",value:f,placeholder:"input your model name e.g TestModel",onChange:function(e){g(e.target.value)}}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)(u.a,{width:"100%",mode:"json",theme:"solarized_dark",onChange:function(e){j(e)},name:"UNIQUE_ID_OF_DIV",editorProps:{$blockScrolling:!0}})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsx)(u.a,{width:"100%",mode:"javascript",value:n,theme:"solarized_light",name:"UNIQUE_ID_OF_DIV_2",editorProps:{$blockScrolling:!0}})})]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),o(e),c(e),a(e),s(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),p()}},[[63,1,2]]]);
//# sourceMappingURL=main.80be6390.chunk.js.map
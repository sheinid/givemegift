var yy=Object.defineProperty;var Ay=(i,n,t)=>n in i?yy(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var Fe=(i,n,t)=>Ay(i,typeof n!="symbol"?n+"":n,t);import{s as Se,d as H,c as Ae,q as an,I as zu,n as nn,b as zo,l as Ro,t as ko,a2 as gs,D as et,v as vd,E as nt,F as tt,G as it,ae as br,j as Me,k as je,o as Ne,f as gn,e as It,g as xo,m as Uo,ah as Ty,ai as Py,ak as Ru,K as vy}from"./scheduler.BRkQt4do.js";import{S as Re,i as ke,t as ae,a as ee,g as bt,e as wt,d as Jt,b as Gt,m as Yt,c as hi}from"./index.BzjUemo1.js";import{b as Ey}from"./control.DecYz-Qa.js";function lt(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Ed(i,n){const t={},r={},a={$$scope:1};let o=i.length;for(;o--;){const c=i[o],d=n[o];if(d){for(const _ in c)_ in d||(r[_]=1);for(const _ in d)a[_]||(t[_]=d[_],a[_]=1);i[o]=d}else for(const _ in c)a[_]=1}for(const c in r)c in t||(t[c]=void 0);return t}function Dv(i){return typeof i=="object"&&i!==null?i:{}}function ku(i){let n,t,r;var a=i[1][i[0].type];function o(c,d){return{props:{token:c[0],options:c[2],renderers:c[1],$$slots:{default:[wy]},$$scope:{ctx:c}}}}return a&&(n=zu(a,o(i))),{c(){n&&Gt(n.$$.fragment),t=an()},l(c){n&&hi(n.$$.fragment,c),t=an()},m(c,d){n&&Yt(n,c,d),Ae(c,t,d),r=!0},p(c,d){if(d&3&&a!==(a=c[1][c[0].type])){if(n){bt();const _=n;ae(_.$$.fragment,1,0,()=>{Jt(_,1)}),wt()}a?(n=zu(a,o(c)),Gt(n.$$.fragment),ee(n.$$.fragment,1),Yt(n,t.parentNode,t)):n=null}else if(a){const _={};d&1&&(_.token=c[0]),d&4&&(_.options=c[2]),d&2&&(_.renderers=c[1]),d&15&&(_.$$scope={dirty:d,ctx:c}),n.$set(_)}},i(c){r||(n&&ee(n.$$.fragment,c),r=!0)},o(c){n&&ae(n.$$.fragment,c),r=!1},d(c){c&&H(t),n&&Jt(n,c)}}}function Iy(i){let n=i[0].raw+"",t;return{c(){t=ko(n)},l(r){t=Ro(r,n)},m(r,a){Ae(r,t,a)},p(r,a){a&1&&n!==(n=r[0].raw+"")&&zo(t,n)},i:nn,o:nn,d(r){r&&H(t)}}}function by(i){let n,t;return n=new xr({props:{tokens:i[0].tokens,renderers:i[1],options:i[2]}}),{c(){Gt(n.$$.fragment)},l(r){hi(n.$$.fragment,r)},m(r,a){Yt(n,r,a),t=!0},p(r,a){const o={};a&1&&(o.tokens=r[0].tokens),a&2&&(o.renderers=r[1]),a&4&&(o.options=r[2]),n.$set(o)},i(r){t||(ee(n.$$.fragment,r),t=!0)},o(r){ae(n.$$.fragment,r),t=!1},d(r){Jt(n,r)}}}function wy(i){let n,t,r,a;const o=[by,Iy],c=[];function d(_,m){return"tokens"in _[0]&&_[0].tokens?0:1}return n=d(i),t=c[n]=o[n](i),{c(){t.c(),r=an()},l(_){t.l(_),r=an()},m(_,m){c[n].m(_,m),Ae(_,r,m),a=!0},p(_,m){let g=n;n=d(_),n===g?c[n].p(_,m):(bt(),ae(c[g],1,1,()=>{c[g]=null}),wt(),t=c[n],t?t.p(_,m):(t=c[n]=o[n](_),t.c()),ee(t,1),t.m(r.parentNode,r))},i(_){a||(ee(t),a=!0)},o(_){ae(t),a=!1},d(_){_&&H(r),c[n].d(_)}}}function Sy(i){let n,t,r=i[1][i[0].type]&&ku(i);return{c(){r&&r.c(),n=an()},l(a){r&&r.l(a),n=an()},m(a,o){r&&r.m(a,o),Ae(a,n,o),t=!0},p(a,[o]){a[1][a[0].type]?r?(r.p(a,o),o&3&&ee(r,1)):(r=ku(a),r.c(),ee(r,1),r.m(n.parentNode,n)):r&&(bt(),ae(r,1,1,()=>{r=null}),wt())},i(a){t||(ee(r),t=!0)},o(a){ae(r),t=!1},d(a){a&&H(n),r&&r.d(a)}}}function By(i,n,t){let{token:r}=n,{renderers:a}=n,{options:o}=n;return i.$$set=c=>{"token"in c&&t(0,r=c.token),"renderers"in c&&t(1,a=c.renderers),"options"in c&&t(2,o=c.options)},[r,a,o]}class Id extends Re{constructor(n){super(),ke(this,n,By,Sy,Se,{token:0,renderers:1,options:2})}}function xu(i,n,t){const r=i.slice();return r[3]=n[t],r}function Uu(i){let n,t,r=lt(i[0]),a=[];for(let c=0;c<r.length;c+=1)a[c]=Lu(xu(i,r,c));const o=c=>ae(a[c],1,1,()=>{a[c]=null});return{c(){for(let c=0;c<a.length;c+=1)a[c].c();n=an()},l(c){for(let d=0;d<a.length;d+=1)a[d].l(c);n=an()},m(c,d){for(let _=0;_<a.length;_+=1)a[_]&&a[_].m(c,d);Ae(c,n,d),t=!0},p(c,d){if(d&7){r=lt(c[0]);let _;for(_=0;_<r.length;_+=1){const m=xu(c,r,_);a[_]?(a[_].p(m,d),ee(a[_],1)):(a[_]=Lu(m),a[_].c(),ee(a[_],1),a[_].m(n.parentNode,n))}for(bt(),_=r.length;_<a.length;_+=1)o(_);wt()}},i(c){if(!t){for(let d=0;d<r.length;d+=1)ee(a[d]);t=!0}},o(c){a=a.filter(Boolean);for(let d=0;d<a.length;d+=1)ae(a[d]);t=!1},d(c){c&&H(n),gs(a,c)}}}function Lu(i){let n,t;return n=new Id({props:{token:i[3],renderers:i[1],options:i[2]}}),{c(){Gt(n.$$.fragment)},l(r){hi(n.$$.fragment,r)},m(r,a){Yt(n,r,a),t=!0},p(r,a){const o={};a&1&&(o.token=r[3]),a&2&&(o.renderers=r[1]),a&4&&(o.options=r[2]),n.$set(o)},i(r){t||(ee(n.$$.fragment,r),t=!0)},o(r){ae(n.$$.fragment,r),t=!1},d(r){Jt(n,r)}}}function My(i){let n,t,r=i[0]&&Uu(i);return{c(){r&&r.c(),n=an()},l(a){r&&r.l(a),n=an()},m(a,o){r&&r.m(a,o),Ae(a,n,o),t=!0},p(a,[o]){a[0]?r?(r.p(a,o),o&1&&ee(r,1)):(r=Uu(a),r.c(),ee(r,1),r.m(n.parentNode,n)):r&&(bt(),ae(r,1,1,()=>{r=null}),wt())},i(a){t||(ee(r),t=!0)},o(a){ae(r),t=!1},d(a){a&&H(n),r&&r.d(a)}}}function Ny(i,n,t){let{tokens:r}=n,{renderers:a}=n,{options:o}=n;return i.$$set=c=>{"tokens"in c&&t(0,r=c.tokens),"renderers"in c&&t(1,a=c.renderers),"options"in c&&t(2,o=c.options)},[r,a,o]}class xr extends Re{constructor(n){super(),ke(this,n,Ny,My,Se,{tokens:0,renderers:1,options:2})}}function Fs(...i){return`/${i.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}`}function Ds(i){return i.startsWith("/")||i.startsWith("#")}function bd(i,n){return n.slug(i).replace(/--+/g,"-")}function go(i){let n,t;const r=i[5].default,a=et(r,i,i[4],null);let o=[{id:i[1]}],c={};for(let d=0;d<o.length;d+=1)c=vd(c,o[d]);return{c(){n=Ne(`h${i[0].depth}`),a&&a.c(),this.h()},l(d){n=Me(d,(`h${i[0].depth}`||"null").toUpperCase(),{id:!0});var _=je(n);a&&a.l(_),_.forEach(H),this.h()},h(){br(`h${i[0].depth}`)(n,c)},m(d,_){Ae(d,n,_),a&&a.m(n,null),t=!0},p(d,_){a&&a.p&&(!t||_&16)&&nt(a,r,d,d[4],t?it(r,d[4],_,null):tt(d[4]),null),br(`h${d[0].depth}`)(n,c=Ed(o,[(!t||_&2)&&{id:d[1]}]))},i(d){t||(ee(a,d),t=!0)},o(d){ae(a,d),t=!1},d(d){d&&H(n),a&&a.d(d)}}}function Oy(i){let n=`h${i[0].depth}`,t,r,a=`h${i[0].depth}`&&go(i);return{c(){a&&a.c(),t=an()},l(o){a&&a.l(o),t=an()},m(o,c){a&&a.m(o,c),Ae(o,t,c),r=!0},p(o,[c]){`h${o[0].depth}`?n?Se(n,`h${o[0].depth}`)?(a.d(1),a=go(o),n=`h${o[0].depth}`,a.c(),a.m(t.parentNode,t)):a.p(o,c):(a=go(o),n=`h${o[0].depth}`,a.c(),a.m(t.parentNode,t)):n&&(a.d(1),a=null,n=`h${o[0].depth}`)},i(o){r||(ee(a,o),r=!0)},o(o){ae(a,o),r=!1},d(o){o&&H(t),a&&a.d(o)}}}function Cy(i,n,t){let{$$slots:r={},$$scope:a}=n,{token:o}=n,{options:c}=n;const d=void 0;let _;return i.$$set=m=>{"token"in m&&t(0,o=m.token),"options"in m&&t(2,c=m.options),"$$scope"in m&&t(4,a=m.$$scope)},i.$$.update=()=>{i.$$.dirty&5&&t(1,_=bd(o.text,c.slugger))},[o,_,c,d,a,r]}class zy extends Re{constructor(n){super(),ke(this,n,Cy,Oy,Se,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function Ry(i){let n,t;const r=i[4].default,a=et(r,i,i[3],null);return{c(){n=Ne("blockquote"),a&&a.c()},l(o){n=Me(o,"BLOCKQUOTE",{});var c=je(n);a&&a.l(c),c.forEach(H)},m(o,c){Ae(o,n,c),a&&a.m(n,null),t=!0},p(o,[c]){a&&a.p&&(!t||c&8)&&nt(a,r,o,o[3],t?it(r,o[3],c,null):tt(o[3]),null)},i(o){t||(ee(a,o),t=!0)},o(o){ae(a,o),t=!1},d(o){o&&H(n),a&&a.d(o)}}}function ky(i,n,t){let{$$slots:r={},$$scope:a}=n;const o=void 0,c=void 0,d=void 0;return i.$$set=_=>{"$$scope"in _&&t(3,a=_.$$scope)},[o,c,d,a,r]}class xy extends Re{constructor(n){super(),ke(this,n,ky,Ry,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function $u(i,n,t){const r=i.slice();return r[4]=n[t],r}function qu(i){let n,t;return n=new Id({props:{token:{...i[4]},options:i[1],renderers:i[2]}}),{c(){Gt(n.$$.fragment)},l(r){hi(n.$$.fragment,r)},m(r,a){Yt(n,r,a),t=!0},p(r,a){const o={};a&1&&(o.token={...r[4]}),a&2&&(o.options=r[1]),a&4&&(o.renderers=r[2]),n.$set(o)},i(r){t||(ee(n.$$.fragment,r),t=!0)},o(r){ae(n.$$.fragment,r),t=!1},d(r){Jt(n,r)}}}function Fo(i){let n,t,r,a=lt(i[0].items),o=[];for(let m=0;m<a.length;m+=1)o[m]=qu($u(i,a,m));const c=m=>ae(o[m],1,1,()=>{o[m]=null});let d=[{start:t=i[0].start||1}],_={};for(let m=0;m<d.length;m+=1)_=vd(_,d[m]);return{c(){n=Ne(i[3]);for(let m=0;m<o.length;m+=1)o[m].c();this.h()},l(m){n=Me(m,(i[3]||"null").toUpperCase(),{start:!0});var g=je(n);for(let D=0;D<o.length;D+=1)o[D].l(g);g.forEach(H),this.h()},h(){br(i[3])(n,_)},m(m,g){Ae(m,n,g);for(let D=0;D<o.length;D+=1)o[D]&&o[D].m(n,null);r=!0},p(m,g){if(g&7){a=lt(m[0].items);let D;for(D=0;D<a.length;D+=1){const N=$u(m,a,D);o[D]?(o[D].p(N,g),ee(o[D],1)):(o[D]=qu(N),o[D].c(),ee(o[D],1),o[D].m(n,null))}for(bt(),D=a.length;D<o.length;D+=1)c(D);wt()}br(m[3])(n,_=Ed(d,[(!r||g&1&&t!==(t=m[0].start||1))&&{start:t}]))},i(m){if(!r){for(let g=0;g<a.length;g+=1)ee(o[g]);r=!0}},o(m){o=o.filter(Boolean);for(let g=0;g<o.length;g+=1)ae(o[g]);r=!1},d(m){m&&H(n),gs(o,m)}}}function Uy(i){let n=i[3],t,r=i[3]&&Fo(i);return{c(){r&&r.c(),t=an()},l(a){r&&r.l(a),t=an()},m(a,o){r&&r.m(a,o),Ae(a,t,o)},p(a,[o]){a[3]?n?Se(n,a[3])?(r.d(1),r=Fo(a),n=a[3],r.c(),r.m(t.parentNode,t)):r.p(a,o):(r=Fo(a),n=a[3],r.c(),r.m(t.parentNode,t)):n&&(r.d(1),r=null,n=a[3])},i:nn,o(a){ae(r,a)},d(a){a&&H(t),r&&r.d(a)}}}function Ly(i,n,t){let{token:r}=n,{options:a}=n,{renderers:o}=n,c;return i.$$set=d=>{"token"in d&&t(0,r=d.token),"options"in d&&t(1,a=d.options),"renderers"in d&&t(2,o=d.renderers)},i.$$.update=()=>{i.$$.dirty&1&&t(3,c=r.ordered?"ol":"ul")},[r,a,o,c]}class $y extends Re{constructor(n){super(),ke(this,n,Ly,Uy,Se,{token:0,options:1,renderers:2})}}function qy(i){let n,t;const r=i[4].default,a=et(r,i,i[3],null);return{c(){n=Ne("li"),a&&a.c()},l(o){n=Me(o,"LI",{});var c=je(n);a&&a.l(c),c.forEach(H)},m(o,c){Ae(o,n,c),a&&a.m(n,null),t=!0},p(o,[c]){a&&a.p&&(!t||c&8)&&nt(a,r,o,o[3],t?it(r,o[3],c,null):tt(o[3]),null)},i(o){t||(ee(a,o),t=!0)},o(o){ae(a,o),t=!1},d(o){o&&H(n),a&&a.d(o)}}}function Vy(i,n,t){let{$$slots:r={},$$scope:a}=n;const o=void 0,c=void 0,d=void 0;return i.$$set=_=>{"$$scope"in _&&t(3,a=_.$$scope)},[o,c,d,a,r]}class jy extends Re{constructor(n){super(),ke(this,n,Vy,qy,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Jy(i){let n;return{c(){n=Ne("br")},l(t){n=Me(t,"BR",{})},m(t,r){Ae(t,n,r)},p:nn,i:nn,o:nn,d(t){t&&H(n)}}}function Gy(i,n,t){return[void 0,void 0,void 0]}class Yy extends Re{constructor(n){super(),ke(this,n,Gy,Jy,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Wy(i){let n,t,r=i[0].text+"",a,o;return{c(){n=Ne("pre"),t=Ne("code"),a=ko(r),this.h()},l(c){n=Me(c,"PRE",{});var d=je(n);t=Me(d,"CODE",{class:!0});var _=je(t);a=Ro(_,r),_.forEach(H),d.forEach(H),this.h()},h(){gn(t,"class",o=`lang-${i[0].lang}`)},m(c,d){Ae(c,n,d),It(n,t),It(t,a)},p(c,[d]){d&1&&r!==(r=c[0].text+"")&&zo(a,r),d&1&&o!==(o=`lang-${c[0].lang}`)&&gn(t,"class",o)},i:nn,o:nn,d(c){c&&H(n)}}}function Qy(i,n,t){let{token:r}=n;const a=void 0,o=void 0;return i.$$set=c=>{"token"in c&&t(0,r=c.token)},[r,a,o]}class Hy extends Re{constructor(n){super(),ke(this,n,Qy,Wy,Se,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Xy(i){let n,t=i[0].raw.slice(1,i[0].raw.length-1)+"",r;return{c(){n=Ne("code"),r=ko(t)},l(a){n=Me(a,"CODE",{});var o=je(n);r=Ro(o,t),o.forEach(H)},m(a,o){Ae(a,n,o),It(n,r)},p(a,[o]){o&1&&t!==(t=a[0].raw.slice(1,a[0].raw.length-1)+"")&&zo(r,t)},i:nn,o:nn,d(a){a&&H(n)}}}function Zy(i,n,t){let{token:r}=n;const a=void 0,o=void 0;return i.$$set=c=>{"token"in c&&t(0,r=c.token)},[r,a,o]}class Ky extends Re{constructor(n){super(),ke(this,n,Zy,Xy,Se,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Vu(i,n,t){const r=i.slice();return r[3]=n[t],r}function ju(i,n,t){const r=i.slice();return r[6]=n[t],r}function Ju(i,n,t){const r=i.slice();return r[9]=n[t],r}function Gu(i){let n,t,r,a;return t=new xr({props:{tokens:i[9].tokens,options:i[1],renderers:i[2]}}),{c(){n=Ne("th"),Gt(t.$$.fragment),r=Uo(),this.h()},l(o){n=Me(o,"TH",{scope:!0});var c=je(n);hi(t.$$.fragment,c),r=xo(c),c.forEach(H),this.h()},h(){gn(n,"scope","col")},m(o,c){Ae(o,n,c),Yt(t,n,null),It(n,r),a=!0},p(o,c){const d={};c&1&&(d.tokens=o[9].tokens),c&2&&(d.options=o[1]),c&4&&(d.renderers=o[2]),t.$set(d)},i(o){a||(ee(t.$$.fragment,o),a=!0)},o(o){ae(t.$$.fragment,o),a=!1},d(o){o&&H(n),Jt(t)}}}function Yu(i){let n,t,r;return t=new xr({props:{tokens:i[6].tokens,options:i[1],renderers:i[2]}}),{c(){n=Ne("td"),Gt(t.$$.fragment)},l(a){n=Me(a,"TD",{});var o=je(n);hi(t.$$.fragment,o),o.forEach(H)},m(a,o){Ae(a,n,o),Yt(t,n,null),r=!0},p(a,o){const c={};o&1&&(c.tokens=a[6].tokens),o&2&&(c.options=a[1]),o&4&&(c.renderers=a[2]),t.$set(c)},i(a){r||(ee(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){a&&H(n),Jt(t)}}}function Wu(i){let n,t,r,a=lt(i[3]),o=[];for(let d=0;d<a.length;d+=1)o[d]=Yu(ju(i,a,d));const c=d=>ae(o[d],1,1,()=>{o[d]=null});return{c(){n=Ne("tr");for(let d=0;d<o.length;d+=1)o[d].c();t=Uo()},l(d){n=Me(d,"TR",{});var _=je(n);for(let m=0;m<o.length;m+=1)o[m].l(_);t=xo(_),_.forEach(H)},m(d,_){Ae(d,n,_);for(let m=0;m<o.length;m+=1)o[m]&&o[m].m(n,null);It(n,t),r=!0},p(d,_){if(_&7){a=lt(d[3]);let m;for(m=0;m<a.length;m+=1){const g=ju(d,a,m);o[m]?(o[m].p(g,_),ee(o[m],1)):(o[m]=Yu(g),o[m].c(),ee(o[m],1),o[m].m(n,t))}for(bt(),m=a.length;m<o.length;m+=1)c(m);wt()}},i(d){if(!r){for(let _=0;_<a.length;_+=1)ee(o[_]);r=!0}},o(d){o=o.filter(Boolean);for(let _=0;_<o.length;_+=1)ae(o[_]);r=!1},d(d){d&&H(n),gs(o,d)}}}function eA(i){let n,t,r,a,o,c,d=lt(i[0].header),_=[];for(let b=0;b<d.length;b+=1)_[b]=Gu(Ju(i,d,b));const m=b=>ae(_[b],1,1,()=>{_[b]=null});let g=lt(i[0].rows),D=[];for(let b=0;b<g.length;b+=1)D[b]=Wu(Vu(i,g,b));const N=b=>ae(D[b],1,1,()=>{D[b]=null});return{c(){n=Ne("table"),t=Ne("thead"),r=Ne("tr");for(let b=0;b<_.length;b+=1)_[b].c();a=Uo(),o=Ne("tbody");for(let b=0;b<D.length;b+=1)D[b].c()},l(b){n=Me(b,"TABLE",{});var w=je(n);t=Me(w,"THEAD",{});var R=je(t);r=Me(R,"TR",{});var J=je(r);for(let Ie=0;Ie<_.length;Ie+=1)_[Ie].l(J);J.forEach(H),R.forEach(H),a=xo(w),o=Me(w,"TBODY",{});var ue=je(o);for(let Ie=0;Ie<D.length;Ie+=1)D[Ie].l(ue);ue.forEach(H),w.forEach(H)},m(b,w){Ae(b,n,w),It(n,t),It(t,r);for(let R=0;R<_.length;R+=1)_[R]&&_[R].m(r,null);It(n,a),It(n,o);for(let R=0;R<D.length;R+=1)D[R]&&D[R].m(o,null);c=!0},p(b,[w]){if(w&7){d=lt(b[0].header);let R;for(R=0;R<d.length;R+=1){const J=Ju(b,d,R);_[R]?(_[R].p(J,w),ee(_[R],1)):(_[R]=Gu(J),_[R].c(),ee(_[R],1),_[R].m(r,null))}for(bt(),R=d.length;R<_.length;R+=1)m(R);wt()}if(w&7){g=lt(b[0].rows);let R;for(R=0;R<g.length;R+=1){const J=Vu(b,g,R);D[R]?(D[R].p(J,w),ee(D[R],1)):(D[R]=Wu(J),D[R].c(),ee(D[R],1),D[R].m(o,null))}for(bt(),R=g.length;R<D.length;R+=1)N(R);wt()}},i(b){if(!c){for(let w=0;w<d.length;w+=1)ee(_[w]);for(let w=0;w<g.length;w+=1)ee(D[w]);c=!0}},o(b){_=_.filter(Boolean);for(let w=0;w<_.length;w+=1)ae(_[w]);D=D.filter(Boolean);for(let w=0;w<D.length;w+=1)ae(D[w]);c=!1},d(b){b&&H(n),gs(_,b),gs(D,b)}}}function nA(i,n,t){let{token:r}=n,{options:a}=n,{renderers:o}=n;return i.$$set=c=>{"token"in c&&t(0,r=c.token),"options"in c&&t(1,a=c.options),"renderers"in c&&t(2,o=c.renderers)},[r,a,o]}class tA extends Re{constructor(n){super(),ke(this,n,nA,eA,Se,{token:0,options:1,renderers:2})}}function iA(i){let n,t=i[0].text+"",r;return{c(){n=new Py(!1),r=an(),this.h()},l(a){n=Ty(a,!1),r=an(),this.h()},h(){n.a=r},m(a,o){n.m(t,a,o),Ae(a,r,o)},p(a,[o]){o&1&&t!==(t=a[0].text+"")&&n.p(t)},i:nn,o:nn,d(a){a&&(H(r),n.d())}}}function sA(i,n,t){let{token:r}=n;const a=void 0,o=void 0;return i.$$set=c=>{"token"in c&&t(0,r=c.token)},[r,a,o]}class rA extends Re{constructor(n){super(),ke(this,n,sA,iA,Se,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function aA(i){let n,t;const r=i[4].default,a=et(r,i,i[3],null);return{c(){n=Ne("p"),a&&a.c()},l(o){n=Me(o,"P",{});var c=je(n);a&&a.l(c),c.forEach(H)},m(o,c){Ae(o,n,c),a&&a.m(n,null),t=!0},p(o,[c]){a&&a.p&&(!t||c&8)&&nt(a,r,o,o[3],t?it(r,o[3],c,null):tt(o[3]),null)},i(o){t||(ee(a,o),t=!0)},o(o){ae(a,o),t=!1},d(o){o&&H(n),a&&a.d(o)}}}function oA(i,n,t){let{$$slots:r={},$$scope:a}=n;const o=void 0,c=void 0,d=void 0;return i.$$set=_=>{"$$scope"in _&&t(3,a=_.$$scope)},[o,c,d,a,r]}class lA extends Re{constructor(n){super(),ke(this,n,oA,aA,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function cA(i){let n,t,r,a;const o=i[4].default,c=et(o,i,i[3],null);return{c(){n=Ne("a"),c&&c.c(),this.h()},l(d){n=Me(d,"A",{href:!0,title:!0});var _=je(n);c&&c.l(_),_.forEach(H),this.h()},h(){gn(n,"href",t=Ds(i[0].href)?Fs(i[1].baseUrl,i[0].href):i[0].href),gn(n,"title",r=i[0].title)},m(d,_){Ae(d,n,_),c&&c.m(n,null),a=!0},p(d,[_]){c&&c.p&&(!a||_&8)&&nt(c,o,d,d[3],a?it(o,d[3],_,null):tt(d[3]),null),(!a||_&3&&t!==(t=Ds(d[0].href)?Fs(d[1].baseUrl,d[0].href):d[0].href))&&gn(n,"href",t),(!a||_&1&&r!==(r=d[0].title))&&gn(n,"title",r)},i(d){a||(ee(c,d),a=!0)},o(d){ae(c,d),a=!1},d(d){d&&H(n),c&&c.d(d)}}}function uA(i,n,t){let{$$slots:r={},$$scope:a}=n,{token:o}=n,{options:c}=n;const d=void 0;return i.$$set=_=>{"token"in _&&t(0,o=_.token),"options"in _&&t(1,c=_.options),"$$scope"in _&&t(3,a=_.$$scope)},[o,c,d,a,r]}class dA extends Re{constructor(n){super(),ke(this,n,uA,cA,Se,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function _A(i){let n;const t=i[4].default,r=et(t,i,i[3],null);return{c(){r&&r.c()},l(a){r&&r.l(a)},m(a,o){r&&r.m(a,o),n=!0},p(a,[o]){r&&r.p&&(!n||o&8)&&nt(r,t,a,a[3],n?it(t,a[3],o,null):tt(a[3]),null)},i(a){n||(ee(r,a),n=!0)},o(a){ae(r,a),n=!1},d(a){r&&r.d(a)}}}function pA(i,n,t){let{$$slots:r={},$$scope:a}=n;const o=void 0,c=void 0,d=void 0;return i.$$set=_=>{"$$scope"in _&&t(3,a=_.$$scope)},[o,c,d,a,r]}class fA extends Re{constructor(n){super(),ke(this,n,pA,_A,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function hA(i){let n,t;const r=i[4].default,a=et(r,i,i[3],null);return{c(){n=Ne("dfn"),a&&a.c()},l(o){n=Me(o,"DFN",{});var c=je(n);a&&a.l(c),c.forEach(H)},m(o,c){Ae(o,n,c),a&&a.m(n,null),t=!0},p(o,[c]){a&&a.p&&(!t||c&8)&&nt(a,r,o,o[3],t?it(r,o[3],c,null):tt(o[3]),null)},i(o){t||(ee(a,o),t=!0)},o(o){ae(a,o),t=!1},d(o){o&&H(n),a&&a.d(o)}}}function mA(i,n,t){let{$$slots:r={},$$scope:a}=n;const o=void 0,c=void 0,d=void 0;return i.$$set=_=>{"$$scope"in _&&t(3,a=_.$$scope)},[o,c,d,a,r]}class gA extends Re{constructor(n){super(),ke(this,n,mA,hA,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function FA(i){let n,t;const r=i[4].default,a=et(r,i,i[3],null);return{c(){n=Ne("del"),a&&a.c()},l(o){n=Me(o,"DEL",{});var c=je(n);a&&a.l(c),c.forEach(H)},m(o,c){Ae(o,n,c),a&&a.m(n,null),t=!0},p(o,[c]){a&&a.p&&(!t||c&8)&&nt(a,r,o,o[3],t?it(r,o[3],c,null):tt(o[3]),null)},i(o){t||(ee(a,o),t=!0)},o(o){ae(a,o),t=!1},d(o){o&&H(n),a&&a.d(o)}}}function DA(i,n,t){let{$$slots:r={},$$scope:a}=n;const o=void 0,c=void 0,d=void 0;return i.$$set=_=>{"$$scope"in _&&t(3,a=_.$$scope)},[o,c,d,a,r]}class yA extends Re{constructor(n){super(),ke(this,n,DA,FA,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function AA(i){let n,t;const r=i[4].default,a=et(r,i,i[3],null);return{c(){n=Ne("em"),a&&a.c()},l(o){n=Me(o,"EM",{});var c=je(n);a&&a.l(c),c.forEach(H)},m(o,c){Ae(o,n,c),a&&a.m(n,null),t=!0},p(o,[c]){a&&a.p&&(!t||c&8)&&nt(a,r,o,o[3],t?it(r,o[3],c,null):tt(o[3]),null)},i(o){t||(ee(a,o),t=!0)},o(o){ae(a,o),t=!1},d(o){o&&H(n),a&&a.d(o)}}}function TA(i,n,t){let{$$slots:r={},$$scope:a}=n;const o=void 0,c=void 0,d=void 0;return i.$$set=_=>{"$$scope"in _&&t(3,a=_.$$scope)},[o,c,d,a,r]}class PA extends Re{constructor(n){super(),ke(this,n,TA,AA,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function vA(i){let n;return{c(){n=Ne("hr")},l(t){n=Me(t,"HR",{})},m(t,r){Ae(t,n,r)},p:nn,i:nn,o:nn,d(t){t&&H(n)}}}function EA(i,n,t){return[void 0,void 0,void 0]}class IA extends Re{constructor(n){super(),ke(this,n,EA,vA,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function bA(i){let n,t;const r=i[4].default,a=et(r,i,i[3],null);return{c(){n=Ne("strong"),a&&a.c()},l(o){n=Me(o,"STRONG",{});var c=je(n);a&&a.l(c),c.forEach(H)},m(o,c){Ae(o,n,c),a&&a.m(n,null),t=!0},p(o,[c]){a&&a.p&&(!t||c&8)&&nt(a,r,o,o[3],t?it(r,o[3],c,null):tt(o[3]),null)},i(o){t||(ee(a,o),t=!0)},o(o){ae(a,o),t=!1},d(o){o&&H(n),a&&a.d(o)}}}function wA(i,n,t){let{$$slots:r={},$$scope:a}=n;const o=void 0,c=void 0,d=void 0;return i.$$set=_=>{"$$scope"in _&&t(3,a=_.$$scope)},[o,c,d,a,r]}class SA extends Re{constructor(n){super(),ke(this,n,wA,bA,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function BA(i){let n,t,r,a;return{c(){n=Ne("img"),this.h()},l(o){n=Me(o,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){Ru(n.src,t=Ds(i[0].href)?Fs(i[1].baseUrl,i[0].href):i[0].href)||gn(n,"src",t),gn(n,"title",r=i[0].title),gn(n,"alt",a=i[0].text),gn(n,"class","markdown-image svelte-z38cge")},m(o,c){Ae(o,n,c)},p(o,[c]){c&3&&!Ru(n.src,t=Ds(o[0].href)?Fs(o[1].baseUrl,o[0].href):o[0].href)&&gn(n,"src",t),c&1&&r!==(r=o[0].title)&&gn(n,"title",r),c&1&&a!==(a=o[0].text)&&gn(n,"alt",a)},i:nn,o:nn,d(o){o&&H(n)}}}function MA(i,n,t){let{token:r}=n,{options:a}=n;const o=void 0;return i.$$set=c=>{"token"in c&&t(0,r=c.token),"options"in c&&t(1,a=c.options)},[r,a,o]}class NA extends Re{constructor(n){super(),ke(this,n,MA,BA,Se,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function OA(i){let n;const t=i[4].default,r=et(t,i,i[3],null);return{c(){r&&r.c()},l(a){r&&r.l(a)},m(a,o){r&&r.m(a,o),n=!0},p(a,[o]){r&&r.p&&(!n||o&8)&&nt(r,t,a,a[3],n?it(t,a[3],o,null):tt(a[3]),null)},i(a){n||(ee(r,a),n=!0)},o(a){ae(r,a),n=!1},d(a){r&&r.d(a)}}}function CA(i,n,t){let{$$slots:r={},$$scope:a}=n;const o=void 0,c=void 0,d=void 0;return i.$$set=_=>{"$$scope"in _&&t(3,a=_.$$scope)},[o,c,d,a,r]}class Qu extends Re{constructor(n){super(),ke(this,n,CA,OA,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}const zA=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,RA=Object.hasOwnProperty;class wd{constructor(){this.occurrences,this.reset()}slug(n,t){const r=this;let a=kA(n,t===!0);const o=a;for(;RA.call(r.occurrences,a);)r.occurrences[o]++,a=o+"-"+r.occurrences[o];return r.occurrences[a]=0,a}reset(){this.occurrences=Object.create(null)}}function kA(i,n){return typeof i!="string"?"":(n||(i=i.toLowerCase()),i.replace(zA,"").replace(/ /g,"-"))}function Lo(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let mi=Lo();function Sd(i){mi=i}const Bd=/[&<>"']/,xA=new RegExp(Bd.source,"g"),Md=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,UA=new RegExp(Md.source,"g"),LA={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Hu=i=>LA[i];function bn(i,n){if(n){if(Bd.test(i))return i.replace(xA,Hu)}else if(Md.test(i))return i.replace(UA,Hu);return i}const $A=/(^|[^\[])\^/g;function ye(i,n){let t=typeof i=="string"?i:i.source;n=n||"";const r={replace:(a,o)=>{let c=typeof o=="string"?o:o.source;return c=c.replace($A,"$1"),t=t.replace(a,c),r},getRegex:()=>new RegExp(t,n)};return r}function Xu(i){try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const ps={exec:()=>null};function Zu(i,n){const t=i.replace(/\|/g,(o,c,d)=>{let _=!1,m=c;for(;--m>=0&&d[m]==="\\";)_=!_;return _?"|":" |"}),r=t.split(/ \|/);let a=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),n)if(r.length>n)r.splice(n);else for(;r.length<n;)r.push("");for(;a<r.length;a++)r[a]=r[a].trim().replace(/\\\|/g,"|");return r}function os(i,n,t){const r=i.length;if(r===0)return"";let a=0;for(;a<r&&i.charAt(r-a-1)===n;)a++;return i.slice(0,r-a)}function qA(i,n){if(i.indexOf(n[1])===-1)return-1;let t=0;for(let r=0;r<i.length;r++)if(i[r]==="\\")r++;else if(i[r]===n[0])t++;else if(i[r]===n[1]&&(t--,t<0))return r;return-1}function Ku(i,n,t,r){const a=n.href,o=n.title?bn(n.title):null,c=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){r.state.inLink=!0;const d={type:"link",raw:t,href:a,title:o,text:c,tokens:r.inlineTokens(c)};return r.state.inLink=!1,d}return{type:"image",raw:t,href:a,title:o,text:bn(c)}}function VA(i,n){const t=i.match(/^(\s+)(?:```)/);if(t===null)return n;const r=t[1];return n.split(`
`).map(a=>{const o=a.match(/^\s+/);if(o===null)return a;const[c]=o;return c.length>=r.length?a.slice(r.length):a}).join(`
`)}class wr{constructor(n){Fe(this,"options");Fe(this,"rules");Fe(this,"lexer");this.options=n||mi}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const r=t[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:os(r,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const r=t[0],a=VA(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:a}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let r=t[2].trim();if(/#$/.test(r)){const a=os(r,"#");(this.options.pedantic||!a||/ $/.test(a))&&(r=a.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:os(t[0],`
`)}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){let r=os(t[0],`
`).split(`
`),a="",o="";const c=[];for(;r.length>0;){let d=!1;const _=[];let m;for(m=0;m<r.length;m++)if(/^ {0,3}>/.test(r[m]))_.push(r[m]),d=!0;else if(!d)_.push(r[m]);else break;r=r.slice(m);const g=_.join(`
`),D=g.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");a=a?`${a}
${g}`:g,o=o?`${o}
${D}`:D;const N=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(D,c,!0),this.lexer.state.top=N,r.length===0)break;const b=c[c.length-1];if((b==null?void 0:b.type)==="code")break;if((b==null?void 0:b.type)==="blockquote"){const w=b,R=w.raw+`
`+r.join(`
`),J=this.blockquote(R);c[c.length-1]=J,a=a.substring(0,a.length-w.raw.length)+J.raw,o=o.substring(0,o.length-w.text.length)+J.text;break}else if((b==null?void 0:b.type)==="list"){const w=b,R=w.raw+`
`+r.join(`
`),J=this.list(R);c[c.length-1]=J,a=a.substring(0,a.length-b.raw.length)+J.raw,o=o.substring(0,o.length-w.raw.length)+J.raw,r=R.substring(c[c.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:a,tokens:c,text:o}}}list(n){let t=this.rules.block.list.exec(n);if(t){let r=t[1].trim();const a=r.length>1,o={type:"list",raw:"",ordered:a,start:a?+r.slice(0,-1):"",loose:!1,items:[]};r=a?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=a?r:"[*+-]");const c=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let d=!1;for(;n;){let _=!1,m="",g="";if(!(t=c.exec(n))||this.rules.block.hr.test(n))break;m=t[0],n=n.substring(m.length);let D=t[2].split(`
`,1)[0].replace(/^\t+/,ue=>" ".repeat(3*ue.length)),N=n.split(`
`,1)[0],b=!D.trim(),w=0;if(this.options.pedantic?(w=2,g=D.trimStart()):b?w=t[1].length+1:(w=t[2].search(/[^ ]/),w=w>4?1:w,g=D.slice(w),w+=t[1].length),b&&/^[ \t]*$/.test(N)&&(m+=N+`
`,n=n.substring(N.length+1),_=!0),!_){const ue=new RegExp(`^ {0,${Math.min(3,w-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Ie=new RegExp(`^ {0,${Math.min(3,w-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),ge=new RegExp(`^ {0,${Math.min(3,w-1)}}(?:\`\`\`|~~~)`),Oe=new RegExp(`^ {0,${Math.min(3,w-1)}}#`),Ge=new RegExp(`^ {0,${Math.min(3,w-1)}}<[a-z].*>`,"i");for(;n;){const Qe=n.split(`
`,1)[0];let Ce;if(N=Qe,this.options.pedantic?(N=N.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),Ce=N):Ce=N.replace(/\t/g,"    "),ge.test(N)||Oe.test(N)||Ge.test(N)||ue.test(N)||Ie.test(N))break;if(Ce.search(/[^ ]/)>=w||!N.trim())g+=`
`+Ce.slice(w);else{if(b||D.replace(/\t/g,"    ").search(/[^ ]/)>=4||ge.test(D)||Oe.test(D)||Ie.test(D))break;g+=`
`+N}!b&&!N.trim()&&(b=!0),m+=Qe+`
`,n=n.substring(Qe.length+1),D=Ce.slice(w)}}o.loose||(d?o.loose=!0:/\n[ \t]*\n[ \t]*$/.test(m)&&(d=!0));let R=null,J;this.options.gfm&&(R=/^\[[ xX]\] /.exec(g),R&&(J=R[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:m,task:!!R,checked:J,loose:!1,text:g,tokens:[]}),o.raw+=m}o.items[o.items.length-1].raw=o.items[o.items.length-1].raw.trimEnd(),o.items[o.items.length-1].text=o.items[o.items.length-1].text.trimEnd(),o.raw=o.raw.trimEnd();for(let _=0;_<o.items.length;_++)if(this.lexer.state.top=!1,o.items[_].tokens=this.lexer.blockTokens(o.items[_].text,[]),!o.loose){const m=o.items[_].tokens.filter(D=>D.type==="space"),g=m.length>0&&m.some(D=>/\n.*\n/.test(D.raw));o.loose=g}if(o.loose)for(let _=0;_<o.items.length;_++)o.items[_].loose=!0;return o}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const r=t[1].toLowerCase().replace(/\s+/g," "),a=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:r,raw:t[0],href:a,title:o}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const r=Zu(t[1]),a=t[2].replace(/^\||\| *$/g,"").split("|"),o=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],c={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===a.length){for(const d of a)/^ *-+: *$/.test(d)?c.align.push("right"):/^ *:-+: *$/.test(d)?c.align.push("center"):/^ *:-+ *$/.test(d)?c.align.push("left"):c.align.push(null);for(let d=0;d<r.length;d++)c.header.push({text:r[d],tokens:this.lexer.inline(r[d]),header:!0,align:c.align[d]});for(const d of o)c.rows.push(Zu(d,c.header.length).map((_,m)=>({text:_,tokens:this.lexer.inline(_),header:!1,align:c.align[m]})));return c}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const r=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:bn(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const c=os(r.slice(0,-1),"\\");if((r.length-c.length)%2===0)return}else{const c=qA(t[2],"()");if(c>-1){const _=(t[0].indexOf("!")===0?5:4)+t[1].length+c;t[2]=t[2].substring(0,c),t[0]=t[0].substring(0,_).trim(),t[3]=""}}let a=t[2],o="";if(this.options.pedantic){const c=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);c&&(a=c[1],o=c[3])}else o=t[3]?t[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(this.options.pedantic&&!/>$/.test(r)?a=a.slice(1):a=a.slice(1,-1)),Ku(t,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let r;if((r=this.rules.inline.reflink.exec(n))||(r=this.rules.inline.nolink.exec(n))){const a=(r[2]||r[1]).replace(/\s+/g," "),o=t[a.toLowerCase()];if(!o){const c=r[0].charAt(0);return{type:"text",raw:c,text:c}}return Ku(r,o,r[0],this.lexer)}}emStrong(n,t,r=""){let a=this.rules.inline.emStrongLDelim.exec(n);if(!a||a[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(a[1]||a[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const c=[...a[0]].length-1;let d,_,m=c,g=0;const D=a[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(D.lastIndex=0,t=t.slice(-1*n.length+c);(a=D.exec(t))!=null;){if(d=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!d)continue;if(_=[...d].length,a[3]||a[4]){m+=_;continue}else if((a[5]||a[6])&&c%3&&!((c+_)%3)){g+=_;continue}if(m-=_,m>0)continue;_=Math.min(_,_+m+g);const N=[...a[0]][0].length,b=n.slice(0,c+a.index+N+_);if(Math.min(c,_)%2){const R=b.slice(1,-1);return{type:"em",raw:b,text:R,tokens:this.lexer.inlineTokens(R)}}const w=b.slice(2,-2);return{type:"strong",raw:b,text:w,tokens:this.lexer.inlineTokens(w)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let r=t[2].replace(/\n/g," ");const a=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return a&&o&&(r=r.substring(1,r.length-1)),r=bn(r,!0),{type:"codespan",raw:t[0],text:r}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let r,a;return t[2]==="@"?(r=bn(t[1]),a="mailto:"+r):(r=bn(t[1]),a=r),{type:"link",raw:t[0],text:r,href:a,tokens:[{type:"text",raw:r,text:r}]}}}url(n){var r;let t;if(t=this.rules.inline.url.exec(n)){let a,o;if(t[2]==="@")a=bn(t[0]),o="mailto:"+a;else{let c;do c=t[0],t[0]=((r=this.rules.inline._backpedal.exec(t[0]))==null?void 0:r[0])??"";while(c!==t[0]);a=bn(t[0]),t[1]==="www."?o="http://"+t[0]:o=t[0]}return{type:"link",raw:t[0],text:a,href:o,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let r;return this.lexer.state.inRawBlock?r=t[0]:r=bn(t[0]),{type:"text",raw:t[0],text:r}}}}const jA=/^(?:[ \t]*(?:\n|$))+/,JA=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,GA=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ps=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,YA=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Nd=/(?:[*+-]|\d{1,9}[.)])/,Od=ye(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Nd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),$o=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,WA=/^[^\n]+/,qo=/(?!\s*\])(?:\\.|[^\[\]\\])+/,QA=ye(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",qo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),HA=ye(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Nd).getRegex(),Ur="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Vo=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,XA=ye("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Vo).replace("tag",Ur).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Cd=ye($o).replace("hr",Ps).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ur).getRegex(),ZA=ye(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Cd).getRegex(),jo={blockquote:ZA,code:JA,def:QA,fences:GA,heading:YA,hr:Ps,html:XA,lheading:Od,list:HA,newline:jA,paragraph:Cd,table:ps,text:WA},ed=ye("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ps).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ur).getRegex(),KA={...jo,table:ed,paragraph:ye($o).replace("hr",Ps).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ed).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ur).getRegex()},e0={...jo,html:ye(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Vo).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ps,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ye($o).replace("hr",Ps).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Od).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},zd=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,n0=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Rd=/^( {2,}|\\)\n(?!\s*$)/,t0=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,vs="\\p{P}\\p{S}",i0=ye(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,vs).getRegex(),s0=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,r0=ye(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,vs).getRegex(),a0=ye("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,vs).getRegex(),o0=ye("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,vs).getRegex(),l0=ye(/\\([punct])/,"gu").replace(/punct/g,vs).getRegex(),c0=ye(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),u0=ye(Vo).replace("(?:-->|$)","-->").getRegex(),d0=ye("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",u0).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Sr=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,_0=ye(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Sr).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),kd=ye(/^!?\[(label)\]\[(ref)\]/).replace("label",Sr).replace("ref",qo).getRegex(),xd=ye(/^!?\[(ref)\](?:\[\])?/).replace("ref",qo).getRegex(),p0=ye("reflink|nolink(?!\\()","g").replace("reflink",kd).replace("nolink",xd).getRegex(),Jo={_backpedal:ps,anyPunctuation:l0,autolink:c0,blockSkip:s0,br:Rd,code:n0,del:ps,emStrongLDelim:r0,emStrongRDelimAst:a0,emStrongRDelimUnd:o0,escape:zd,link:_0,nolink:xd,punctuation:i0,reflink:kd,reflinkSearch:p0,tag:d0,text:t0,url:ps},f0={...Jo,link:ye(/^!?\[(label)\]\((.*?)\)/).replace("label",Sr).getRegex(),reflink:ye(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Sr).getRegex()},Eo={...Jo,escape:ye(zd).replace("])","~|])").getRegex(),url:ye(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},h0={...Eo,br:ye(Rd).replace("{2,}","*").getRegex(),text:ye(Eo.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Dr={normal:jo,gfm:KA,pedantic:e0},ls={normal:Jo,gfm:Eo,breaks:h0,pedantic:f0};class wn{constructor(n){Fe(this,"tokens");Fe(this,"options");Fe(this,"state");Fe(this,"tokenizer");Fe(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||mi,this.options.tokenizer=this.options.tokenizer||new wr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Dr.normal,inline:ls.normal};this.options.pedantic?(t.block=Dr.pedantic,t.inline=ls.pedantic):this.options.gfm&&(t.block=Dr.gfm,this.options.breaks?t.inline=ls.breaks:t.inline=ls.gfm),this.tokenizer.rules=t}static get rules(){return{block:Dr,inline:ls}}static lex(n,t){return new wn(t).lex(n)}static lexInline(n,t){return new wn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],r=!1){this.options.pedantic&&(n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""));let a,o,c;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(d=>(a=d.call({lexer:this},n,t))?(n=n.substring(a.raw.length),t.push(a),!0):!1))){if(a=this.tokenizer.space(n)){n=n.substring(a.raw.length),a.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(a);continue}if(a=this.tokenizer.code(n)){n=n.substring(a.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(a);continue}if(a=this.tokenizer.fences(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.heading(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.hr(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.blockquote(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.list(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.html(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.def(n)){n=n.substring(a.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+a.raw,o.text+=`
`+a.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(n)){n=n.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.lheading(n)){n=n.substring(a.raw.length),t.push(a);continue}if(c=n,this.options.extensions&&this.options.extensions.startBlock){let d=1/0;const _=n.slice(1);let m;this.options.extensions.startBlock.forEach(g=>{m=g.call({lexer:this},_),typeof m=="number"&&m>=0&&(d=Math.min(d,m))}),d<1/0&&d>=0&&(c=n.substring(0,d+1))}if(this.state.top&&(a=this.tokenizer.paragraph(c))){o=t[t.length-1],r&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(a),r=c.length!==n.length,n=n.substring(a.raw.length);continue}if(a=this.tokenizer.text(n)){n=n.substring(a.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(a);continue}if(n){const d="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let r,a,o,c=n,d,_,m;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(d=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)g.includes(d[0].slice(d[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,d.index)+"["+"a".repeat(d[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(d=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)c=c.slice(0,d.index)+"["+"a".repeat(d[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(d=this.tokenizer.rules.inline.anyPunctuation.exec(c))!=null;)c=c.slice(0,d.index)+"++"+c.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(_||(m=""),_=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>(r=g.call({lexer:this},n,t))?(n=n.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.escape(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(n)){n=n.substring(r.raw.length),a=t[t.length-1],a&&r.type==="text"&&a.type==="text"?(a.raw+=r.raw,a.text+=r.text):t.push(r);continue}if(r=this.tokenizer.link(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(r.raw.length),a=t[t.length-1],a&&r.type==="text"&&a.type==="text"?(a.raw+=r.raw,a.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(n,c,m)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(n)){n=n.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(n))){n=n.substring(r.raw.length),t.push(r);continue}if(o=n,this.options.extensions&&this.options.extensions.startInline){let g=1/0;const D=n.slice(1);let N;this.options.extensions.startInline.forEach(b=>{N=b.call({lexer:this},D),typeof N=="number"&&N>=0&&(g=Math.min(g,N))}),g<1/0&&g>=0&&(o=n.substring(0,g+1))}if(r=this.tokenizer.inlineText(o)){n=n.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(m=r.raw.slice(-1)),_=!0,a=t[t.length-1],a&&a.type==="text"?(a.raw+=r.raw,a.text+=r.text):t.push(r);continue}if(n){const g="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return t}}class Br{constructor(n){Fe(this,"options");Fe(this,"parser");this.options=n||mi}space(n){return""}code({text:n,lang:t,escaped:r}){var c;const a=(c=(t||"").match(/^\S*/))==null?void 0:c[0],o=n.replace(/\n$/,"")+`
`;return a?'<pre><code class="language-'+bn(a)+'">'+(r?o:bn(o,!0))+`</code></pre>
`:"<pre><code>"+(r?o:bn(o,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:t}){return`<h${t}>${this.parser.parseInline(n)}</h${t}>
`}hr(n){return`<hr>
`}list(n){const t=n.ordered,r=n.start;let a="";for(let d=0;d<n.items.length;d++){const _=n.items[d];a+=this.listitem(_)}const o=t?"ol":"ul",c=t&&r!==1?' start="'+r+'"':"";return"<"+o+c+`>
`+a+"</"+o+`>
`}listitem(n){let t="";if(n.task){const r=this.checkbox({checked:!!n.checked});n.loose?n.tokens.length>0&&n.tokens[0].type==="paragraph"?(n.tokens[0].text=r+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=r+" "+n.tokens[0].tokens[0].text)):n.tokens.unshift({type:"text",raw:r+" ",text:r+" "}):t+=r+" "}return t+=this.parser.parse(n.tokens,!!n.loose),`<li>${t}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let t="",r="";for(let o=0;o<n.header.length;o++)r+=this.tablecell(n.header[o]);t+=this.tablerow({text:r});let a="";for(let o=0;o<n.rows.length;o++){const c=n.rows[o];r="";for(let d=0;d<c.length;d++)r+=this.tablecell(c[d]);a+=this.tablerow({text:r})}return a&&(a=`<tbody>${a}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+a+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const t=this.parser.parseInline(n.tokens),r=n.header?"th":"td";return(n.align?`<${r} align="${n.align}">`:`<${r}>`)+t+`</${r}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${n}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:r}){const a=this.parser.parseInline(r),o=Xu(n);if(o===null)return a;n=o;let c='<a href="'+n+'"';return t&&(c+=' title="'+t+'"'),c+=">"+a+"</a>",c}image({href:n,title:t,text:r}){const a=Xu(n);if(a===null)return r;n=a;let o=`<img src="${n}" alt="${r}"`;return t&&(o+=` title="${t}"`),o+=">",o}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):n.text}}class Go{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}}class Ln{constructor(n){Fe(this,"options");Fe(this,"renderer");Fe(this,"textRenderer");this.options=n||mi,this.options.renderer=this.options.renderer||new Br,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Go}static parse(n,t){return new Ln(t).parse(n)}static parseInline(n,t){return new Ln(t).parseInline(n)}parse(n,t=!0){let r="";for(let a=0;a<n.length;a++){const o=n[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const d=o,_=this.options.extensions.renderers[d.type].call({parser:this},d);if(_!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type)){r+=_||"";continue}}const c=o;switch(c.type){case"space":{r+=this.renderer.space(c);continue}case"hr":{r+=this.renderer.hr(c);continue}case"heading":{r+=this.renderer.heading(c);continue}case"code":{r+=this.renderer.code(c);continue}case"table":{r+=this.renderer.table(c);continue}case"blockquote":{r+=this.renderer.blockquote(c);continue}case"list":{r+=this.renderer.list(c);continue}case"html":{r+=this.renderer.html(c);continue}case"paragraph":{r+=this.renderer.paragraph(c);continue}case"text":{let d=c,_=this.renderer.text(d);for(;a+1<n.length&&n[a+1].type==="text";)d=n[++a],_+=`
`+this.renderer.text(d);t?r+=this.renderer.paragraph({type:"paragraph",raw:_,text:_,tokens:[{type:"text",raw:_,text:_}]}):r+=_;continue}default:{const d='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return r}parseInline(n,t){t=t||this.renderer;let r="";for(let a=0;a<n.length;a++){const o=n[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const d=this.options.extensions.renderers[o.type].call({parser:this},o);if(d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=d||"";continue}}const c=o;switch(c.type){case"escape":{r+=t.text(c);break}case"html":{r+=t.html(c);break}case"link":{r+=t.link(c);break}case"image":{r+=t.image(c);break}case"strong":{r+=t.strong(c);break}case"em":{r+=t.em(c);break}case"codespan":{r+=t.codespan(c);break}case"br":{r+=t.br(c);break}case"del":{r+=t.del(c);break}case"text":{r+=t.text(c);break}default:{const d='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return r}}class fs{constructor(n){Fe(this,"options");Fe(this,"block");this.options=n||mi}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}provideLexer(){return this.block?wn.lex:wn.lexInline}provideParser(){return this.block?Ln.parse:Ln.parseInline}}Fe(fs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class m0{constructor(...n){Fe(this,"defaults",Lo());Fe(this,"options",this.setOptions);Fe(this,"parse",this.parseMarkdown(!0));Fe(this,"parseInline",this.parseMarkdown(!1));Fe(this,"Parser",Ln);Fe(this,"Renderer",Br);Fe(this,"TextRenderer",Go);Fe(this,"Lexer",wn);Fe(this,"Tokenizer",wr);Fe(this,"Hooks",fs);this.use(...n)}walkTokens(n,t){var a,o;let r=[];for(const c of n)switch(r=r.concat(t.call(this,c)),c.type){case"table":{const d=c;for(const _ of d.header)r=r.concat(this.walkTokens(_.tokens,t));for(const _ of d.rows)for(const m of _)r=r.concat(this.walkTokens(m.tokens,t));break}case"list":{const d=c;r=r.concat(this.walkTokens(d.items,t));break}default:{const d=c;(o=(a=this.defaults.extensions)==null?void 0:a.childTokens)!=null&&o[d.type]?this.defaults.extensions.childTokens[d.type].forEach(_=>{const m=d[_].flat(1/0);r=r.concat(this.walkTokens(m,t))}):d.tokens&&(r=r.concat(this.walkTokens(d.tokens,t)))}}return r}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(r=>{const a={...r};if(a.async=this.defaults.async||a.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const c=t.renderers[o.name];c?t.renderers[o.name]=function(...d){let _=o.renderer.apply(this,d);return _===!1&&(_=c.apply(this,d)),_}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const c=t[o.level];c?c.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),a.extensions=t),r.renderer){const o=this.defaults.renderer||new Br(this.defaults);for(const c in r.renderer){if(!(c in o))throw new Error(`renderer '${c}' does not exist`);if(["options","parser"].includes(c))continue;const d=c,_=r.renderer[d],m=o[d];o[d]=(...g)=>{let D=_.apply(o,g);return D===!1&&(D=m.apply(o,g)),D||""}}a.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new wr(this.defaults);for(const c in r.tokenizer){if(!(c in o))throw new Error(`tokenizer '${c}' does not exist`);if(["options","rules","lexer"].includes(c))continue;const d=c,_=r.tokenizer[d],m=o[d];o[d]=(...g)=>{let D=_.apply(o,g);return D===!1&&(D=m.apply(o,g)),D}}a.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new fs;for(const c in r.hooks){if(!(c in o))throw new Error(`hook '${c}' does not exist`);if(["options","block"].includes(c))continue;const d=c,_=r.hooks[d],m=o[d];fs.passThroughHooks.has(c)?o[d]=g=>{if(this.defaults.async)return Promise.resolve(_.call(o,g)).then(N=>m.call(o,N));const D=_.call(o,g);return m.call(o,D)}:o[d]=(...g)=>{let D=_.apply(o,g);return D===!1&&(D=m.apply(o,g)),D}}a.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,c=r.walkTokens;a.walkTokens=function(d){let _=[];return _.push(c.call(this,d)),o&&(_=_.concat(o.call(this,d))),_}}this.defaults={...this.defaults,...a}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return wn.lex(n,t??this.defaults)}parser(n,t){return Ln.parse(n,t??this.defaults)}parseMarkdown(n){return(r,a)=>{const o={...a},c={...this.defaults,...o},d=this.onError(!!c.silent,!!c.async);if(this.defaults.async===!0&&o.async===!1)return d(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return d(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return d(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));c.hooks&&(c.hooks.options=c,c.hooks.block=n);const _=c.hooks?c.hooks.provideLexer():n?wn.lex:wn.lexInline,m=c.hooks?c.hooks.provideParser():n?Ln.parse:Ln.parseInline;if(c.async)return Promise.resolve(c.hooks?c.hooks.preprocess(r):r).then(g=>_(g,c)).then(g=>c.hooks?c.hooks.processAllTokens(g):g).then(g=>c.walkTokens?Promise.all(this.walkTokens(g,c.walkTokens)).then(()=>g):g).then(g=>m(g,c)).then(g=>c.hooks?c.hooks.postprocess(g):g).catch(d);try{c.hooks&&(r=c.hooks.preprocess(r));let g=_(r,c);c.hooks&&(g=c.hooks.processAllTokens(g)),c.walkTokens&&this.walkTokens(g,c.walkTokens);let D=m(g,c);return c.hooks&&(D=c.hooks.postprocess(D)),D}catch(g){return d(g)}}}onError(n,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const a="<p>An error occurred:</p><pre>"+bn(r.message+"",!0)+"</pre>";return t?Promise.resolve(a):a}if(t)return Promise.reject(r);throw r}}}const di=new m0;function De(i,n){return di.parse(i,n)}De.options=De.setOptions=function(i){return di.setOptions(i),De.defaults=di.defaults,Sd(De.defaults),De};De.getDefaults=Lo;De.defaults=mi;De.use=function(...i){return di.use(...i),De.defaults=di.defaults,Sd(De.defaults),De};De.walkTokens=function(i,n){return di.walkTokens(i,n)};De.parseInline=di.parseInline;De.Parser=Ln;De.parser=Ln.parse;De.Renderer=Br;De.TextRenderer=Go;De.Lexer=wn;De.lexer=wn.lex;De.Tokenizer=wr;De.Hooks=fs;De.parse=De;De.options;De.setOptions;De.use;De.walkTokens;De.parseInline;Ln.parse;wn.lex;function g0(i){return new wn().lex(i)}const F0=()=>({heading:zy,blockquote:xy,list:$y,list_item:jy,br:Yy,code:Hy,codespan:Ky,table:tA,html:rA,paragraph:lA,link:dA,text:fA,def:gA,del:yA,em:PA,hr:IA,strong:SA,image:NA,space:Qu,escape:Qu}),D0=()=>({baseUrl:"/",slugger:new wd});function y0(){const i=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||i(n)},vy(()=>{console.warn=i})}function A0(i){let n,t;return n=new xr({props:{tokens:i[0],renderers:i[1],options:i[2]}}),{c(){Gt(n.$$.fragment)},l(r){hi(n.$$.fragment,r)},m(r,a){Yt(n,r,a),t=!0},p(r,[a]){const o={};a&1&&(o.tokens=r[0]),a&2&&(o.renderers=r[1]),a&4&&(o.options=r[2]),n.$set(o)},i(r){t||(ee(n.$$.fragment,r),t=!0)},o(r){ae(n.$$.fragment,r),t=!1},d(r){Jt(n,r)}}}function T0(i,n,t){y0();let{source:r}=n,{options:a={}}=n,{renderers:o={}}=n,c,d,_;return i.$$set=m=>{"source"in m&&t(3,r=m.source),"options"in m&&t(4,a=m.options),"renderers"in m&&t(5,o=m.renderers)},i.$$.update=()=>{i.$$.dirty&56&&(t(0,c=g0(r)),t(1,d={...F0(),...o}),t(2,_={...D0(),...a}))},[c,d,_,r,a,o]}class yv extends Re{constructor(n){super(),ke(this,n,T0,A0,Se,{source:3,options:4,renderers:5})}}const Es={joinUrlPaths:Fs,isRelative:Ds,generatePathSegment:bd};var cs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function P0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Mr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Mr.exports;(function(i,n){(function(){var t,r="4.17.21",a=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",d="Invalid `variable` option passed into `_.template`",_="__lodash_hash_undefined__",m=500,g="__lodash_placeholder__",D=1,N=2,b=4,w=1,R=2,J=1,ue=2,Ie=4,ge=8,Oe=16,Ge=32,Qe=64,Ce=128,pt=256,O=512,X=30,on="...",Ot=800,Ht=16,ws=1,Fi=2,Ss=3,Xt=1/0,ft=9007199254740991,Di=17976931348623157e292,Zt=NaN,Bn=4294967295,E=Bn-1,q=Bn>>>1,x=[["ary",Ce],["bind",J],["bindKey",ue],["curry",ge],["curryRight",Oe],["flip",O],["partial",Ge],["partialRight",Qe],["rearg",pt]],L="[object Arguments]",pe="[object Array]",xe="[object AsyncFunction]",fe="[object Boolean]",Mn="[object Date]",Li="[object DOMException]",Ct="[object Error]",tn="[object Function]",sl="[object GeneratorFunction]",jn="[object Map]",$i="[object Number]",R_="[object Null]",ht="[object Object]",rl="[object Promise]",k_="[object Proxy]",qi="[object RegExp]",Jn="[object Set]",Vi="[object String]",Bs="[object Symbol]",x_="[object Undefined]",ji="[object WeakMap]",U_="[object WeakSet]",Ji="[object ArrayBuffer]",yi="[object DataView]",Qr="[object Float32Array]",Hr="[object Float64Array]",Xr="[object Int8Array]",Zr="[object Int16Array]",Kr="[object Int32Array]",ea="[object Uint8Array]",na="[object Uint8ClampedArray]",ta="[object Uint16Array]",ia="[object Uint32Array]",L_=/\b__p \+= '';/g,$_=/\b(__p \+=) '' \+/g,q_=/(__e\(.*?\)|\b__t\)) \+\n'';/g,al=/&(?:amp|lt|gt|quot|#39);/g,ol=/[&<>"']/g,V_=RegExp(al.source),j_=RegExp(ol.source),J_=/<%-([\s\S]+?)%>/g,G_=/<%([\s\S]+?)%>/g,ll=/<%=([\s\S]+?)%>/g,Y_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W_=/^\w*$/,Q_=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,sa=/[\\^$.*+?()[\]{}|]/g,H_=RegExp(sa.source),ra=/^\s+/,X_=/\s/,Z_=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,K_=/\{\n\/\* \[wrapped with (.+)\] \*/,ep=/,? & /,np=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,tp=/[()=,{}\[\]\/\s]/,ip=/\\(\\)?/g,sp=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,cl=/\w*$/,rp=/^[-+]0x[0-9a-f]+$/i,ap=/^0b[01]+$/i,op=/^\[object .+?Constructor\]$/,lp=/^0o[0-7]+$/i,cp=/^(?:0|[1-9]\d*)$/,up=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ms=/($^)/,dp=/['\n\r\u2028\u2029\\]/g,Ns="\\ud800-\\udfff",_p="\\u0300-\\u036f",pp="\\ufe20-\\ufe2f",fp="\\u20d0-\\u20ff",ul=_p+pp+fp,dl="\\u2700-\\u27bf",_l="a-z\\xdf-\\xf6\\xf8-\\xff",hp="\\xac\\xb1\\xd7\\xf7",mp="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",gp="\\u2000-\\u206f",Fp=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",pl="A-Z\\xc0-\\xd6\\xd8-\\xde",fl="\\ufe0e\\ufe0f",hl=hp+mp+gp+Fp,aa="['’]",Dp="["+Ns+"]",ml="["+hl+"]",Os="["+ul+"]",gl="\\d+",yp="["+dl+"]",Fl="["+_l+"]",Dl="[^"+Ns+hl+gl+dl+_l+pl+"]",oa="\\ud83c[\\udffb-\\udfff]",Ap="(?:"+Os+"|"+oa+")",yl="[^"+Ns+"]",la="(?:\\ud83c[\\udde6-\\uddff]){2}",ca="[\\ud800-\\udbff][\\udc00-\\udfff]",Ai="["+pl+"]",Al="\\u200d",Tl="(?:"+Fl+"|"+Dl+")",Tp="(?:"+Ai+"|"+Dl+")",Pl="(?:"+aa+"(?:d|ll|m|re|s|t|ve))?",vl="(?:"+aa+"(?:D|LL|M|RE|S|T|VE))?",El=Ap+"?",Il="["+fl+"]?",Pp="(?:"+Al+"(?:"+[yl,la,ca].join("|")+")"+Il+El+")*",vp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ep="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",bl=Il+El+Pp,Ip="(?:"+[yp,la,ca].join("|")+")"+bl,bp="(?:"+[yl+Os+"?",Os,la,ca,Dp].join("|")+")",wp=RegExp(aa,"g"),Sp=RegExp(Os,"g"),ua=RegExp(oa+"(?="+oa+")|"+bp+bl,"g"),Bp=RegExp([Ai+"?"+Fl+"+"+Pl+"(?="+[ml,Ai,"$"].join("|")+")",Tp+"+"+vl+"(?="+[ml,Ai+Tl,"$"].join("|")+")",Ai+"?"+Tl+"+"+Pl,Ai+"+"+vl,Ep,vp,gl,Ip].join("|"),"g"),Mp=RegExp("["+Al+Ns+ul+fl+"]"),Np=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Op=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Cp=-1,be={};be[Qr]=be[Hr]=be[Xr]=be[Zr]=be[Kr]=be[ea]=be[na]=be[ta]=be[ia]=!0,be[L]=be[pe]=be[Ji]=be[fe]=be[yi]=be[Mn]=be[Ct]=be[tn]=be[jn]=be[$i]=be[ht]=be[qi]=be[Jn]=be[Vi]=be[ji]=!1;var ve={};ve[L]=ve[pe]=ve[Ji]=ve[yi]=ve[fe]=ve[Mn]=ve[Qr]=ve[Hr]=ve[Xr]=ve[Zr]=ve[Kr]=ve[jn]=ve[$i]=ve[ht]=ve[qi]=ve[Jn]=ve[Vi]=ve[Bs]=ve[ea]=ve[na]=ve[ta]=ve[ia]=!0,ve[Ct]=ve[tn]=ve[ji]=!1;var zp={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Rp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},kp={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},xp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Up=parseFloat,Lp=parseInt,wl=typeof cs=="object"&&cs&&cs.Object===Object&&cs,$p=typeof self=="object"&&self&&self.Object===Object&&self,Ke=wl||$p||Function("return this")(),da=n&&!n.nodeType&&n,Kt=da&&!0&&i&&!i.nodeType&&i,Sl=Kt&&Kt.exports===da,_a=Sl&&wl.process,Nn=function(){try{var T=Kt&&Kt.require&&Kt.require("util").types;return T||_a&&_a.binding&&_a.binding("util")}catch{}}(),Bl=Nn&&Nn.isArrayBuffer,Ml=Nn&&Nn.isDate,Nl=Nn&&Nn.isMap,Ol=Nn&&Nn.isRegExp,Cl=Nn&&Nn.isSet,zl=Nn&&Nn.isTypedArray;function yn(T,I,v){switch(v.length){case 0:return T.call(I);case 1:return T.call(I,v[0]);case 2:return T.call(I,v[0],v[1]);case 3:return T.call(I,v[0],v[1],v[2])}return T.apply(I,v)}function qp(T,I,v,$){for(var Z=-1,_e=T==null?0:T.length;++Z<_e;){var Ye=T[Z];I($,Ye,v(Ye),T)}return $}function On(T,I){for(var v=-1,$=T==null?0:T.length;++v<$&&I(T[v],v,T)!==!1;);return T}function Vp(T,I){for(var v=T==null?0:T.length;v--&&I(T[v],v,T)!==!1;);return T}function Rl(T,I){for(var v=-1,$=T==null?0:T.length;++v<$;)if(!I(T[v],v,T))return!1;return!0}function zt(T,I){for(var v=-1,$=T==null?0:T.length,Z=0,_e=[];++v<$;){var Ye=T[v];I(Ye,v,T)&&(_e[Z++]=Ye)}return _e}function Cs(T,I){var v=T==null?0:T.length;return!!v&&Ti(T,I,0)>-1}function pa(T,I,v){for(var $=-1,Z=T==null?0:T.length;++$<Z;)if(v(I,T[$]))return!0;return!1}function we(T,I){for(var v=-1,$=T==null?0:T.length,Z=Array($);++v<$;)Z[v]=I(T[v],v,T);return Z}function Rt(T,I){for(var v=-1,$=I.length,Z=T.length;++v<$;)T[Z+v]=I[v];return T}function fa(T,I,v,$){var Z=-1,_e=T==null?0:T.length;for($&&_e&&(v=T[++Z]);++Z<_e;)v=I(v,T[Z],Z,T);return v}function jp(T,I,v,$){var Z=T==null?0:T.length;for($&&Z&&(v=T[--Z]);Z--;)v=I(v,T[Z],Z,T);return v}function ha(T,I){for(var v=-1,$=T==null?0:T.length;++v<$;)if(I(T[v],v,T))return!0;return!1}var Jp=ma("length");function Gp(T){return T.split("")}function Yp(T){return T.match(np)||[]}function kl(T,I,v){var $;return v(T,function(Z,_e,Ye){if(I(Z,_e,Ye))return $=_e,!1}),$}function zs(T,I,v,$){for(var Z=T.length,_e=v+($?1:-1);$?_e--:++_e<Z;)if(I(T[_e],_e,T))return _e;return-1}function Ti(T,I,v){return I===I?af(T,I,v):zs(T,xl,v)}function Wp(T,I,v,$){for(var Z=v-1,_e=T.length;++Z<_e;)if($(T[Z],I))return Z;return-1}function xl(T){return T!==T}function Ul(T,I){var v=T==null?0:T.length;return v?Fa(T,I)/v:Zt}function ma(T){return function(I){return I==null?t:I[T]}}function ga(T){return function(I){return T==null?t:T[I]}}function Ll(T,I,v,$,Z){return Z(T,function(_e,Ye,Te){v=$?($=!1,_e):I(v,_e,Ye,Te)}),v}function Qp(T,I){var v=T.length;for(T.sort(I);v--;)T[v]=T[v].value;return T}function Fa(T,I){for(var v,$=-1,Z=T.length;++$<Z;){var _e=I(T[$]);_e!==t&&(v=v===t?_e:v+_e)}return v}function Da(T,I){for(var v=-1,$=Array(T);++v<T;)$[v]=I(v);return $}function Hp(T,I){return we(I,function(v){return[v,T[v]]})}function $l(T){return T&&T.slice(0,Jl(T)+1).replace(ra,"")}function An(T){return function(I){return T(I)}}function ya(T,I){return we(I,function(v){return T[v]})}function Gi(T,I){return T.has(I)}function ql(T,I){for(var v=-1,$=T.length;++v<$&&Ti(I,T[v],0)>-1;);return v}function Vl(T,I){for(var v=T.length;v--&&Ti(I,T[v],0)>-1;);return v}function Xp(T,I){for(var v=T.length,$=0;v--;)T[v]===I&&++$;return $}var Zp=ga(zp),Kp=ga(Rp);function ef(T){return"\\"+xp[T]}function nf(T,I){return T==null?t:T[I]}function Pi(T){return Mp.test(T)}function tf(T){return Np.test(T)}function sf(T){for(var I,v=[];!(I=T.next()).done;)v.push(I.value);return v}function Aa(T){var I=-1,v=Array(T.size);return T.forEach(function($,Z){v[++I]=[Z,$]}),v}function jl(T,I){return function(v){return T(I(v))}}function kt(T,I){for(var v=-1,$=T.length,Z=0,_e=[];++v<$;){var Ye=T[v];(Ye===I||Ye===g)&&(T[v]=g,_e[Z++]=v)}return _e}function Rs(T){var I=-1,v=Array(T.size);return T.forEach(function($){v[++I]=$}),v}function rf(T){var I=-1,v=Array(T.size);return T.forEach(function($){v[++I]=[$,$]}),v}function af(T,I,v){for(var $=v-1,Z=T.length;++$<Z;)if(T[$]===I)return $;return-1}function of(T,I,v){for(var $=v+1;$--;)if(T[$]===I)return $;return $}function vi(T){return Pi(T)?cf(T):Jp(T)}function Gn(T){return Pi(T)?uf(T):Gp(T)}function Jl(T){for(var I=T.length;I--&&X_.test(T.charAt(I)););return I}var lf=ga(kp);function cf(T){for(var I=ua.lastIndex=0;ua.test(T);)++I;return I}function uf(T){return T.match(ua)||[]}function df(T){return T.match(Bp)||[]}var _f=function T(I){I=I==null?Ke:Ei.defaults(Ke.Object(),I,Ei.pick(Ke,Op));var v=I.Array,$=I.Date,Z=I.Error,_e=I.Function,Ye=I.Math,Te=I.Object,Ta=I.RegExp,pf=I.String,Cn=I.TypeError,ks=v.prototype,ff=_e.prototype,Ii=Te.prototype,xs=I["__core-js_shared__"],Us=ff.toString,me=Ii.hasOwnProperty,hf=0,Gl=function(){var e=/[^.]+$/.exec(xs&&xs.keys&&xs.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ls=Ii.toString,mf=Us.call(Te),gf=Ke._,Ff=Ta("^"+Us.call(me).replace(sa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$s=Sl?I.Buffer:t,xt=I.Symbol,qs=I.Uint8Array,Yl=$s?$s.allocUnsafe:t,Vs=jl(Te.getPrototypeOf,Te),Wl=Te.create,Ql=Ii.propertyIsEnumerable,js=ks.splice,Hl=xt?xt.isConcatSpreadable:t,Yi=xt?xt.iterator:t,ei=xt?xt.toStringTag:t,Js=function(){try{var e=ri(Te,"defineProperty");return e({},"",{}),e}catch{}}(),Df=I.clearTimeout!==Ke.clearTimeout&&I.clearTimeout,yf=$&&$.now!==Ke.Date.now&&$.now,Af=I.setTimeout!==Ke.setTimeout&&I.setTimeout,Gs=Ye.ceil,Ys=Ye.floor,Pa=Te.getOwnPropertySymbols,Tf=$s?$s.isBuffer:t,Xl=I.isFinite,Pf=ks.join,vf=jl(Te.keys,Te),We=Ye.max,sn=Ye.min,Ef=$.now,If=I.parseInt,Zl=Ye.random,bf=ks.reverse,va=ri(I,"DataView"),Wi=ri(I,"Map"),Ea=ri(I,"Promise"),bi=ri(I,"Set"),Qi=ri(I,"WeakMap"),Hi=ri(Te,"create"),Ws=Qi&&new Qi,wi={},wf=ai(va),Sf=ai(Wi),Bf=ai(Ea),Mf=ai(bi),Nf=ai(Qi),Qs=xt?xt.prototype:t,Xi=Qs?Qs.valueOf:t,Kl=Qs?Qs.toString:t;function f(e){if(ze(e)&&!K(e)&&!(e instanceof oe)){if(e instanceof zn)return e;if(me.call(e,"__wrapped__"))return eu(e)}return new zn(e)}var Si=function(){function e(){}return function(s){if(!Be(s))return{};if(Wl)return Wl(s);e.prototype=s;var l=new e;return e.prototype=t,l}}();function Hs(){}function zn(e,s){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=t}f.templateSettings={escape:J_,evaluate:G_,interpolate:ll,variable:"",imports:{_:f}},f.prototype=Hs.prototype,f.prototype.constructor=f,zn.prototype=Si(Hs.prototype),zn.prototype.constructor=zn;function oe(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Bn,this.__views__=[]}function Of(){var e=new oe(this.__wrapped__);return e.__actions__=pn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=pn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=pn(this.__views__),e}function Cf(){if(this.__filtered__){var e=new oe(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function zf(){var e=this.__wrapped__.value(),s=this.__dir__,l=K(e),u=s<0,p=l?e.length:0,h=Yh(0,p,this.__views__),F=h.start,y=h.end,P=y-F,S=u?y:F-1,B=this.__iteratees__,C=B.length,k=0,j=sn(P,this.__takeCount__);if(!l||!u&&p==P&&j==P)return Pc(e,this.__actions__);var W=[];e:for(;P--&&k<j;){S+=s;for(var te=-1,Q=e[S];++te<C;){var re=B[te],ce=re.iteratee,vn=re.type,un=ce(Q);if(vn==Fi)Q=un;else if(!un){if(vn==ws)continue e;break e}}W[k++]=Q}return W}oe.prototype=Si(Hs.prototype),oe.prototype.constructor=oe;function ni(e){var s=-1,l=e==null?0:e.length;for(this.clear();++s<l;){var u=e[s];this.set(u[0],u[1])}}function Rf(){this.__data__=Hi?Hi(null):{},this.size=0}function kf(e){var s=this.has(e)&&delete this.__data__[e];return this.size-=s?1:0,s}function xf(e){var s=this.__data__;if(Hi){var l=s[e];return l===_?t:l}return me.call(s,e)?s[e]:t}function Uf(e){var s=this.__data__;return Hi?s[e]!==t:me.call(s,e)}function Lf(e,s){var l=this.__data__;return this.size+=this.has(e)?0:1,l[e]=Hi&&s===t?_:s,this}ni.prototype.clear=Rf,ni.prototype.delete=kf,ni.prototype.get=xf,ni.prototype.has=Uf,ni.prototype.set=Lf;function mt(e){var s=-1,l=e==null?0:e.length;for(this.clear();++s<l;){var u=e[s];this.set(u[0],u[1])}}function $f(){this.__data__=[],this.size=0}function qf(e){var s=this.__data__,l=Xs(s,e);if(l<0)return!1;var u=s.length-1;return l==u?s.pop():js.call(s,l,1),--this.size,!0}function Vf(e){var s=this.__data__,l=Xs(s,e);return l<0?t:s[l][1]}function jf(e){return Xs(this.__data__,e)>-1}function Jf(e,s){var l=this.__data__,u=Xs(l,e);return u<0?(++this.size,l.push([e,s])):l[u][1]=s,this}mt.prototype.clear=$f,mt.prototype.delete=qf,mt.prototype.get=Vf,mt.prototype.has=jf,mt.prototype.set=Jf;function gt(e){var s=-1,l=e==null?0:e.length;for(this.clear();++s<l;){var u=e[s];this.set(u[0],u[1])}}function Gf(){this.size=0,this.__data__={hash:new ni,map:new(Wi||mt),string:new ni}}function Yf(e){var s=cr(this,e).delete(e);return this.size-=s?1:0,s}function Wf(e){return cr(this,e).get(e)}function Qf(e){return cr(this,e).has(e)}function Hf(e,s){var l=cr(this,e),u=l.size;return l.set(e,s),this.size+=l.size==u?0:1,this}gt.prototype.clear=Gf,gt.prototype.delete=Yf,gt.prototype.get=Wf,gt.prototype.has=Qf,gt.prototype.set=Hf;function ti(e){var s=-1,l=e==null?0:e.length;for(this.__data__=new gt;++s<l;)this.add(e[s])}function Xf(e){return this.__data__.set(e,_),this}function Zf(e){return this.__data__.has(e)}ti.prototype.add=ti.prototype.push=Xf,ti.prototype.has=Zf;function Yn(e){var s=this.__data__=new mt(e);this.size=s.size}function Kf(){this.__data__=new mt,this.size=0}function eh(e){var s=this.__data__,l=s.delete(e);return this.size=s.size,l}function nh(e){return this.__data__.get(e)}function th(e){return this.__data__.has(e)}function ih(e,s){var l=this.__data__;if(l instanceof mt){var u=l.__data__;if(!Wi||u.length<a-1)return u.push([e,s]),this.size=++l.size,this;l=this.__data__=new gt(u)}return l.set(e,s),this.size=l.size,this}Yn.prototype.clear=Kf,Yn.prototype.delete=eh,Yn.prototype.get=nh,Yn.prototype.has=th,Yn.prototype.set=ih;function ec(e,s){var l=K(e),u=!l&&oi(e),p=!l&&!u&&Vt(e),h=!l&&!u&&!p&&Oi(e),F=l||u||p||h,y=F?Da(e.length,pf):[],P=y.length;for(var S in e)(s||me.call(e,S))&&!(F&&(S=="length"||p&&(S=="offset"||S=="parent")||h&&(S=="buffer"||S=="byteLength"||S=="byteOffset")||At(S,P)))&&y.push(S);return y}function nc(e){var s=e.length;return s?e[Ra(0,s-1)]:t}function sh(e,s){return ur(pn(e),ii(s,0,e.length))}function rh(e){return ur(pn(e))}function Ia(e,s,l){(l!==t&&!Wn(e[s],l)||l===t&&!(s in e))&&Ft(e,s,l)}function Zi(e,s,l){var u=e[s];(!(me.call(e,s)&&Wn(u,l))||l===t&&!(s in e))&&Ft(e,s,l)}function Xs(e,s){for(var l=e.length;l--;)if(Wn(e[l][0],s))return l;return-1}function ah(e,s,l,u){return Ut(e,function(p,h,F){s(u,p,l(p),F)}),u}function tc(e,s){return e&&at(s,He(s),e)}function oh(e,s){return e&&at(s,hn(s),e)}function Ft(e,s,l){s=="__proto__"&&Js?Js(e,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):e[s]=l}function ba(e,s){for(var l=-1,u=s.length,p=v(u),h=e==null;++l<u;)p[l]=h?t:oo(e,s[l]);return p}function ii(e,s,l){return e===e&&(l!==t&&(e=e<=l?e:l),s!==t&&(e=e>=s?e:s)),e}function Rn(e,s,l,u,p,h){var F,y=s&D,P=s&N,S=s&b;if(l&&(F=p?l(e,u,p,h):l(e)),F!==t)return F;if(!Be(e))return e;var B=K(e);if(B){if(F=Qh(e),!y)return pn(e,F)}else{var C=rn(e),k=C==tn||C==sl;if(Vt(e))return Ic(e,y);if(C==ht||C==L||k&&!p){if(F=P||k?{}:Jc(e),!y)return P?xh(e,oh(F,e)):kh(e,tc(F,e))}else{if(!ve[C])return p?e:{};F=Hh(e,C,y)}}h||(h=new Yn);var j=h.get(e);if(j)return j;h.set(e,F),yu(e)?e.forEach(function(Q){F.add(Rn(Q,s,l,Q,e,h))}):Fu(e)&&e.forEach(function(Q,re){F.set(re,Rn(Q,s,l,re,e,h))});var W=S?P?Ya:Ga:P?hn:He,te=B?t:W(e);return On(te||e,function(Q,re){te&&(re=Q,Q=e[re]),Zi(F,re,Rn(Q,s,l,re,e,h))}),F}function lh(e){var s=He(e);return function(l){return ic(l,e,s)}}function ic(e,s,l){var u=l.length;if(e==null)return!u;for(e=Te(e);u--;){var p=l[u],h=s[p],F=e[p];if(F===t&&!(p in e)||!h(F))return!1}return!0}function sc(e,s,l){if(typeof e!="function")throw new Cn(c);return rs(function(){e.apply(t,l)},s)}function Ki(e,s,l,u){var p=-1,h=Cs,F=!0,y=e.length,P=[],S=s.length;if(!y)return P;l&&(s=we(s,An(l))),u?(h=pa,F=!1):s.length>=a&&(h=Gi,F=!1,s=new ti(s));e:for(;++p<y;){var B=e[p],C=l==null?B:l(B);if(B=u||B!==0?B:0,F&&C===C){for(var k=S;k--;)if(s[k]===C)continue e;P.push(B)}else h(s,C,u)||P.push(B)}return P}var Ut=Mc(rt),rc=Mc(Sa,!0);function ch(e,s){var l=!0;return Ut(e,function(u,p,h){return l=!!s(u,p,h),l}),l}function Zs(e,s,l){for(var u=-1,p=e.length;++u<p;){var h=e[u],F=s(h);if(F!=null&&(y===t?F===F&&!Pn(F):l(F,y)))var y=F,P=h}return P}function uh(e,s,l,u){var p=e.length;for(l=ne(l),l<0&&(l=-l>p?0:p+l),u=u===t||u>p?p:ne(u),u<0&&(u+=p),u=l>u?0:Tu(u);l<u;)e[l++]=s;return e}function ac(e,s){var l=[];return Ut(e,function(u,p,h){s(u,p,h)&&l.push(u)}),l}function en(e,s,l,u,p){var h=-1,F=e.length;for(l||(l=Zh),p||(p=[]);++h<F;){var y=e[h];s>0&&l(y)?s>1?en(y,s-1,l,u,p):Rt(p,y):u||(p[p.length]=y)}return p}var wa=Nc(),oc=Nc(!0);function rt(e,s){return e&&wa(e,s,He)}function Sa(e,s){return e&&oc(e,s,He)}function Ks(e,s){return zt(s,function(l){return Tt(e[l])})}function si(e,s){s=$t(s,e);for(var l=0,u=s.length;e!=null&&l<u;)e=e[ot(s[l++])];return l&&l==u?e:t}function lc(e,s,l){var u=s(e);return K(e)?u:Rt(u,l(e))}function ln(e){return e==null?e===t?x_:R_:ei&&ei in Te(e)?Gh(e):rm(e)}function Ba(e,s){return e>s}function dh(e,s){return e!=null&&me.call(e,s)}function _h(e,s){return e!=null&&s in Te(e)}function ph(e,s,l){return e>=sn(s,l)&&e<We(s,l)}function Ma(e,s,l){for(var u=l?pa:Cs,p=e[0].length,h=e.length,F=h,y=v(h),P=1/0,S=[];F--;){var B=e[F];F&&s&&(B=we(B,An(s))),P=sn(B.length,P),y[F]=!l&&(s||p>=120&&B.length>=120)?new ti(F&&B):t}B=e[0];var C=-1,k=y[0];e:for(;++C<p&&S.length<P;){var j=B[C],W=s?s(j):j;if(j=l||j!==0?j:0,!(k?Gi(k,W):u(S,W,l))){for(F=h;--F;){var te=y[F];if(!(te?Gi(te,W):u(e[F],W,l)))continue e}k&&k.push(W),S.push(j)}}return S}function fh(e,s,l,u){return rt(e,function(p,h,F){s(u,l(p),h,F)}),u}function es(e,s,l){s=$t(s,e),e=Qc(e,s);var u=e==null?e:e[ot(xn(s))];return u==null?t:yn(u,e,l)}function cc(e){return ze(e)&&ln(e)==L}function hh(e){return ze(e)&&ln(e)==Ji}function mh(e){return ze(e)&&ln(e)==Mn}function ns(e,s,l,u,p){return e===s?!0:e==null||s==null||!ze(e)&&!ze(s)?e!==e&&s!==s:gh(e,s,l,u,ns,p)}function gh(e,s,l,u,p,h){var F=K(e),y=K(s),P=F?pe:rn(e),S=y?pe:rn(s);P=P==L?ht:P,S=S==L?ht:S;var B=P==ht,C=S==ht,k=P==S;if(k&&Vt(e)){if(!Vt(s))return!1;F=!0,B=!1}if(k&&!B)return h||(h=new Yn),F||Oi(e)?qc(e,s,l,u,p,h):jh(e,s,P,l,u,p,h);if(!(l&w)){var j=B&&me.call(e,"__wrapped__"),W=C&&me.call(s,"__wrapped__");if(j||W){var te=j?e.value():e,Q=W?s.value():s;return h||(h=new Yn),p(te,Q,l,u,h)}}return k?(h||(h=new Yn),Jh(e,s,l,u,p,h)):!1}function Fh(e){return ze(e)&&rn(e)==jn}function Na(e,s,l,u){var p=l.length,h=p,F=!u;if(e==null)return!h;for(e=Te(e);p--;){var y=l[p];if(F&&y[2]?y[1]!==e[y[0]]:!(y[0]in e))return!1}for(;++p<h;){y=l[p];var P=y[0],S=e[P],B=y[1];if(F&&y[2]){if(S===t&&!(P in e))return!1}else{var C=new Yn;if(u)var k=u(S,B,P,e,s,C);if(!(k===t?ns(B,S,w|R,u,C):k))return!1}}return!0}function uc(e){if(!Be(e)||em(e))return!1;var s=Tt(e)?Ff:op;return s.test(ai(e))}function Dh(e){return ze(e)&&ln(e)==qi}function yh(e){return ze(e)&&rn(e)==Jn}function Ah(e){return ze(e)&&mr(e.length)&&!!be[ln(e)]}function dc(e){return typeof e=="function"?e:e==null?mn:typeof e=="object"?K(e)?fc(e[0],e[1]):pc(e):Ou(e)}function Oa(e){if(!ss(e))return vf(e);var s=[];for(var l in Te(e))me.call(e,l)&&l!="constructor"&&s.push(l);return s}function Th(e){if(!Be(e))return sm(e);var s=ss(e),l=[];for(var u in e)u=="constructor"&&(s||!me.call(e,u))||l.push(u);return l}function Ca(e,s){return e<s}function _c(e,s){var l=-1,u=fn(e)?v(e.length):[];return Ut(e,function(p,h,F){u[++l]=s(p,h,F)}),u}function pc(e){var s=Qa(e);return s.length==1&&s[0][2]?Yc(s[0][0],s[0][1]):function(l){return l===e||Na(l,e,s)}}function fc(e,s){return Xa(e)&&Gc(s)?Yc(ot(e),s):function(l){var u=oo(l,e);return u===t&&u===s?lo(l,e):ns(s,u,w|R)}}function er(e,s,l,u,p){e!==s&&wa(s,function(h,F){if(p||(p=new Yn),Be(h))Ph(e,s,F,l,er,u,p);else{var y=u?u(Ka(e,F),h,F+"",e,s,p):t;y===t&&(y=h),Ia(e,F,y)}},hn)}function Ph(e,s,l,u,p,h,F){var y=Ka(e,l),P=Ka(s,l),S=F.get(P);if(S){Ia(e,l,S);return}var B=h?h(y,P,l+"",e,s,F):t,C=B===t;if(C){var k=K(P),j=!k&&Vt(P),W=!k&&!j&&Oi(P);B=P,k||j||W?K(y)?B=y:Ue(y)?B=pn(y):j?(C=!1,B=Ic(P,!0)):W?(C=!1,B=bc(P,!0)):B=[]:as(P)||oi(P)?(B=y,oi(y)?B=Pu(y):(!Be(y)||Tt(y))&&(B=Jc(P))):C=!1}C&&(F.set(P,B),p(B,P,u,h,F),F.delete(P)),Ia(e,l,B)}function hc(e,s){var l=e.length;if(l)return s+=s<0?l:0,At(s,l)?e[s]:t}function mc(e,s,l){s.length?s=we(s,function(h){return K(h)?function(F){return si(F,h.length===1?h[0]:h)}:h}):s=[mn];var u=-1;s=we(s,An(Y()));var p=_c(e,function(h,F,y){var P=we(s,function(S){return S(h)});return{criteria:P,index:++u,value:h}});return Qp(p,function(h,F){return Rh(h,F,l)})}function vh(e,s){return gc(e,s,function(l,u){return lo(e,u)})}function gc(e,s,l){for(var u=-1,p=s.length,h={};++u<p;){var F=s[u],y=si(e,F);l(y,F)&&ts(h,$t(F,e),y)}return h}function Eh(e){return function(s){return si(s,e)}}function za(e,s,l,u){var p=u?Wp:Ti,h=-1,F=s.length,y=e;for(e===s&&(s=pn(s)),l&&(y=we(e,An(l)));++h<F;)for(var P=0,S=s[h],B=l?l(S):S;(P=p(y,B,P,u))>-1;)y!==e&&js.call(y,P,1),js.call(e,P,1);return e}function Fc(e,s){for(var l=e?s.length:0,u=l-1;l--;){var p=s[l];if(l==u||p!==h){var h=p;At(p)?js.call(e,p,1):Ua(e,p)}}return e}function Ra(e,s){return e+Ys(Zl()*(s-e+1))}function Ih(e,s,l,u){for(var p=-1,h=We(Gs((s-e)/(l||1)),0),F=v(h);h--;)F[u?h:++p]=e,e+=l;return F}function ka(e,s){var l="";if(!e||s<1||s>ft)return l;do s%2&&(l+=e),s=Ys(s/2),s&&(e+=e);while(s);return l}function ie(e,s){return eo(Wc(e,s,mn),e+"")}function bh(e){return nc(Ci(e))}function wh(e,s){var l=Ci(e);return ur(l,ii(s,0,l.length))}function ts(e,s,l,u){if(!Be(e))return e;s=$t(s,e);for(var p=-1,h=s.length,F=h-1,y=e;y!=null&&++p<h;){var P=ot(s[p]),S=l;if(P==="__proto__"||P==="constructor"||P==="prototype")return e;if(p!=F){var B=y[P];S=u?u(B,P,y):t,S===t&&(S=Be(B)?B:At(s[p+1])?[]:{})}Zi(y,P,S),y=y[P]}return e}var Dc=Ws?function(e,s){return Ws.set(e,s),e}:mn,Sh=Js?function(e,s){return Js(e,"toString",{configurable:!0,enumerable:!1,value:uo(s),writable:!0})}:mn;function Bh(e){return ur(Ci(e))}function kn(e,s,l){var u=-1,p=e.length;s<0&&(s=-s>p?0:p+s),l=l>p?p:l,l<0&&(l+=p),p=s>l?0:l-s>>>0,s>>>=0;for(var h=v(p);++u<p;)h[u]=e[u+s];return h}function Mh(e,s){var l;return Ut(e,function(u,p,h){return l=s(u,p,h),!l}),!!l}function nr(e,s,l){var u=0,p=e==null?u:e.length;if(typeof s=="number"&&s===s&&p<=q){for(;u<p;){var h=u+p>>>1,F=e[h];F!==null&&!Pn(F)&&(l?F<=s:F<s)?u=h+1:p=h}return p}return xa(e,s,mn,l)}function xa(e,s,l,u){var p=0,h=e==null?0:e.length;if(h===0)return 0;s=l(s);for(var F=s!==s,y=s===null,P=Pn(s),S=s===t;p<h;){var B=Ys((p+h)/2),C=l(e[B]),k=C!==t,j=C===null,W=C===C,te=Pn(C);if(F)var Q=u||W;else S?Q=W&&(u||k):y?Q=W&&k&&(u||!j):P?Q=W&&k&&!j&&(u||!te):j||te?Q=!1:Q=u?C<=s:C<s;Q?p=B+1:h=B}return sn(h,E)}function yc(e,s){for(var l=-1,u=e.length,p=0,h=[];++l<u;){var F=e[l],y=s?s(F):F;if(!l||!Wn(y,P)){var P=y;h[p++]=F===0?0:F}}return h}function Ac(e){return typeof e=="number"?e:Pn(e)?Zt:+e}function Tn(e){if(typeof e=="string")return e;if(K(e))return we(e,Tn)+"";if(Pn(e))return Kl?Kl.call(e):"";var s=e+"";return s=="0"&&1/e==-1/0?"-0":s}function Lt(e,s,l){var u=-1,p=Cs,h=e.length,F=!0,y=[],P=y;if(l)F=!1,p=pa;else if(h>=a){var S=s?null:qh(e);if(S)return Rs(S);F=!1,p=Gi,P=new ti}else P=s?[]:y;e:for(;++u<h;){var B=e[u],C=s?s(B):B;if(B=l||B!==0?B:0,F&&C===C){for(var k=P.length;k--;)if(P[k]===C)continue e;s&&P.push(C),y.push(B)}else p(P,C,l)||(P!==y&&P.push(C),y.push(B))}return y}function Ua(e,s){return s=$t(s,e),e=Qc(e,s),e==null||delete e[ot(xn(s))]}function Tc(e,s,l,u){return ts(e,s,l(si(e,s)),u)}function tr(e,s,l,u){for(var p=e.length,h=u?p:-1;(u?h--:++h<p)&&s(e[h],h,e););return l?kn(e,u?0:h,u?h+1:p):kn(e,u?h+1:0,u?p:h)}function Pc(e,s){var l=e;return l instanceof oe&&(l=l.value()),fa(s,function(u,p){return p.func.apply(p.thisArg,Rt([u],p.args))},l)}function La(e,s,l){var u=e.length;if(u<2)return u?Lt(e[0]):[];for(var p=-1,h=v(u);++p<u;)for(var F=e[p],y=-1;++y<u;)y!=p&&(h[p]=Ki(h[p]||F,e[y],s,l));return Lt(en(h,1),s,l)}function vc(e,s,l){for(var u=-1,p=e.length,h=s.length,F={};++u<p;){var y=u<h?s[u]:t;l(F,e[u],y)}return F}function $a(e){return Ue(e)?e:[]}function qa(e){return typeof e=="function"?e:mn}function $t(e,s){return K(e)?e:Xa(e,s)?[e]:Kc(he(e))}var Nh=ie;function qt(e,s,l){var u=e.length;return l=l===t?u:l,!s&&l>=u?e:kn(e,s,l)}var Ec=Df||function(e){return Ke.clearTimeout(e)};function Ic(e,s){if(s)return e.slice();var l=e.length,u=Yl?Yl(l):new e.constructor(l);return e.copy(u),u}function Va(e){var s=new e.constructor(e.byteLength);return new qs(s).set(new qs(e)),s}function Oh(e,s){var l=s?Va(e.buffer):e.buffer;return new e.constructor(l,e.byteOffset,e.byteLength)}function Ch(e){var s=new e.constructor(e.source,cl.exec(e));return s.lastIndex=e.lastIndex,s}function zh(e){return Xi?Te(Xi.call(e)):{}}function bc(e,s){var l=s?Va(e.buffer):e.buffer;return new e.constructor(l,e.byteOffset,e.length)}function wc(e,s){if(e!==s){var l=e!==t,u=e===null,p=e===e,h=Pn(e),F=s!==t,y=s===null,P=s===s,S=Pn(s);if(!y&&!S&&!h&&e>s||h&&F&&P&&!y&&!S||u&&F&&P||!l&&P||!p)return 1;if(!u&&!h&&!S&&e<s||S&&l&&p&&!u&&!h||y&&l&&p||!F&&p||!P)return-1}return 0}function Rh(e,s,l){for(var u=-1,p=e.criteria,h=s.criteria,F=p.length,y=l.length;++u<F;){var P=wc(p[u],h[u]);if(P){if(u>=y)return P;var S=l[u];return P*(S=="desc"?-1:1)}}return e.index-s.index}function Sc(e,s,l,u){for(var p=-1,h=e.length,F=l.length,y=-1,P=s.length,S=We(h-F,0),B=v(P+S),C=!u;++y<P;)B[y]=s[y];for(;++p<F;)(C||p<h)&&(B[l[p]]=e[p]);for(;S--;)B[y++]=e[p++];return B}function Bc(e,s,l,u){for(var p=-1,h=e.length,F=-1,y=l.length,P=-1,S=s.length,B=We(h-y,0),C=v(B+S),k=!u;++p<B;)C[p]=e[p];for(var j=p;++P<S;)C[j+P]=s[P];for(;++F<y;)(k||p<h)&&(C[j+l[F]]=e[p++]);return C}function pn(e,s){var l=-1,u=e.length;for(s||(s=v(u));++l<u;)s[l]=e[l];return s}function at(e,s,l,u){var p=!l;l||(l={});for(var h=-1,F=s.length;++h<F;){var y=s[h],P=u?u(l[y],e[y],y,l,e):t;P===t&&(P=e[y]),p?Ft(l,y,P):Zi(l,y,P)}return l}function kh(e,s){return at(e,Ha(e),s)}function xh(e,s){return at(e,Vc(e),s)}function ir(e,s){return function(l,u){var p=K(l)?qp:ah,h=s?s():{};return p(l,e,Y(u,2),h)}}function Bi(e){return ie(function(s,l){var u=-1,p=l.length,h=p>1?l[p-1]:t,F=p>2?l[2]:t;for(h=e.length>3&&typeof h=="function"?(p--,h):t,F&&cn(l[0],l[1],F)&&(h=p<3?t:h,p=1),s=Te(s);++u<p;){var y=l[u];y&&e(s,y,u,h)}return s})}function Mc(e,s){return function(l,u){if(l==null)return l;if(!fn(l))return e(l,u);for(var p=l.length,h=s?p:-1,F=Te(l);(s?h--:++h<p)&&u(F[h],h,F)!==!1;);return l}}function Nc(e){return function(s,l,u){for(var p=-1,h=Te(s),F=u(s),y=F.length;y--;){var P=F[e?y:++p];if(l(h[P],P,h)===!1)break}return s}}function Uh(e,s,l){var u=s&J,p=is(e);function h(){var F=this&&this!==Ke&&this instanceof h?p:e;return F.apply(u?l:this,arguments)}return h}function Oc(e){return function(s){s=he(s);var l=Pi(s)?Gn(s):t,u=l?l[0]:s.charAt(0),p=l?qt(l,1).join(""):s.slice(1);return u[e]()+p}}function Mi(e){return function(s){return fa(Mu(Bu(s).replace(wp,"")),e,"")}}function is(e){return function(){var s=arguments;switch(s.length){case 0:return new e;case 1:return new e(s[0]);case 2:return new e(s[0],s[1]);case 3:return new e(s[0],s[1],s[2]);case 4:return new e(s[0],s[1],s[2],s[3]);case 5:return new e(s[0],s[1],s[2],s[3],s[4]);case 6:return new e(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new e(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=Si(e.prototype),u=e.apply(l,s);return Be(u)?u:l}}function Lh(e,s,l){var u=is(e);function p(){for(var h=arguments.length,F=v(h),y=h,P=Ni(p);y--;)F[y]=arguments[y];var S=h<3&&F[0]!==P&&F[h-1]!==P?[]:kt(F,P);if(h-=S.length,h<l)return xc(e,s,sr,p.placeholder,t,F,S,t,t,l-h);var B=this&&this!==Ke&&this instanceof p?u:e;return yn(B,this,F)}return p}function Cc(e){return function(s,l,u){var p=Te(s);if(!fn(s)){var h=Y(l,3);s=He(s),l=function(y){return h(p[y],y,p)}}var F=e(s,l,u);return F>-1?p[h?s[F]:F]:t}}function zc(e){return yt(function(s){var l=s.length,u=l,p=zn.prototype.thru;for(e&&s.reverse();u--;){var h=s[u];if(typeof h!="function")throw new Cn(c);if(p&&!F&&lr(h)=="wrapper")var F=new zn([],!0)}for(u=F?u:l;++u<l;){h=s[u];var y=lr(h),P=y=="wrapper"?Wa(h):t;P&&Za(P[0])&&P[1]==(Ce|ge|Ge|pt)&&!P[4].length&&P[9]==1?F=F[lr(P[0])].apply(F,P[3]):F=h.length==1&&Za(h)?F[y]():F.thru(h)}return function(){var S=arguments,B=S[0];if(F&&S.length==1&&K(B))return F.plant(B).value();for(var C=0,k=l?s[C].apply(this,S):B;++C<l;)k=s[C].call(this,k);return k}})}function sr(e,s,l,u,p,h,F,y,P,S){var B=s&Ce,C=s&J,k=s&ue,j=s&(ge|Oe),W=s&O,te=k?t:is(e);function Q(){for(var re=arguments.length,ce=v(re),vn=re;vn--;)ce[vn]=arguments[vn];if(j)var un=Ni(Q),En=Xp(ce,un);if(u&&(ce=Sc(ce,u,p,j)),h&&(ce=Bc(ce,h,F,j)),re-=En,j&&re<S){var Le=kt(ce,un);return xc(e,s,sr,Q.placeholder,l,ce,Le,y,P,S-re)}var Qn=C?l:this,vt=k?Qn[e]:e;return re=ce.length,y?ce=am(ce,y):W&&re>1&&ce.reverse(),B&&P<re&&(ce.length=P),this&&this!==Ke&&this instanceof Q&&(vt=te||is(vt)),vt.apply(Qn,ce)}return Q}function Rc(e,s){return function(l,u){return fh(l,e,s(u),{})}}function rr(e,s){return function(l,u){var p;if(l===t&&u===t)return s;if(l!==t&&(p=l),u!==t){if(p===t)return u;typeof l=="string"||typeof u=="string"?(l=Tn(l),u=Tn(u)):(l=Ac(l),u=Ac(u)),p=e(l,u)}return p}}function ja(e){return yt(function(s){return s=we(s,An(Y())),ie(function(l){var u=this;return e(s,function(p){return yn(p,u,l)})})})}function ar(e,s){s=s===t?" ":Tn(s);var l=s.length;if(l<2)return l?ka(s,e):s;var u=ka(s,Gs(e/vi(s)));return Pi(s)?qt(Gn(u),0,e).join(""):u.slice(0,e)}function $h(e,s,l,u){var p=s&J,h=is(e);function F(){for(var y=-1,P=arguments.length,S=-1,B=u.length,C=v(B+P),k=this&&this!==Ke&&this instanceof F?h:e;++S<B;)C[S]=u[S];for(;P--;)C[S++]=arguments[++y];return yn(k,p?l:this,C)}return F}function kc(e){return function(s,l,u){return u&&typeof u!="number"&&cn(s,l,u)&&(l=u=t),s=Pt(s),l===t?(l=s,s=0):l=Pt(l),u=u===t?s<l?1:-1:Pt(u),Ih(s,l,u,e)}}function or(e){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=Un(s),l=Un(l)),e(s,l)}}function xc(e,s,l,u,p,h,F,y,P,S){var B=s&ge,C=B?F:t,k=B?t:F,j=B?h:t,W=B?t:h;s|=B?Ge:Qe,s&=~(B?Qe:Ge),s&Ie||(s&=-4);var te=[e,s,p,j,C,W,k,y,P,S],Q=l.apply(t,te);return Za(e)&&Hc(Q,te),Q.placeholder=u,Xc(Q,e,s)}function Ja(e){var s=Ye[e];return function(l,u){if(l=Un(l),u=u==null?0:sn(ne(u),292),u&&Xl(l)){var p=(he(l)+"e").split("e"),h=s(p[0]+"e"+(+p[1]+u));return p=(he(h)+"e").split("e"),+(p[0]+"e"+(+p[1]-u))}return s(l)}}var qh=bi&&1/Rs(new bi([,-0]))[1]==Xt?function(e){return new bi(e)}:fo;function Uc(e){return function(s){var l=rn(s);return l==jn?Aa(s):l==Jn?rf(s):Hp(s,e(s))}}function Dt(e,s,l,u,p,h,F,y){var P=s&ue;if(!P&&typeof e!="function")throw new Cn(c);var S=u?u.length:0;if(S||(s&=-97,u=p=t),F=F===t?F:We(ne(F),0),y=y===t?y:ne(y),S-=p?p.length:0,s&Qe){var B=u,C=p;u=p=t}var k=P?t:Wa(e),j=[e,s,l,u,p,B,C,h,F,y];if(k&&im(j,k),e=j[0],s=j[1],l=j[2],u=j[3],p=j[4],y=j[9]=j[9]===t?P?0:e.length:We(j[9]-S,0),!y&&s&(ge|Oe)&&(s&=-25),!s||s==J)var W=Uh(e,s,l);else s==ge||s==Oe?W=Lh(e,s,y):(s==Ge||s==(J|Ge))&&!p.length?W=$h(e,s,l,u):W=sr.apply(t,j);var te=k?Dc:Hc;return Xc(te(W,j),e,s)}function Lc(e,s,l,u){return e===t||Wn(e,Ii[l])&&!me.call(u,l)?s:e}function $c(e,s,l,u,p,h){return Be(e)&&Be(s)&&(h.set(s,e),er(e,s,t,$c,h),h.delete(s)),e}function Vh(e){return as(e)?t:e}function qc(e,s,l,u,p,h){var F=l&w,y=e.length,P=s.length;if(y!=P&&!(F&&P>y))return!1;var S=h.get(e),B=h.get(s);if(S&&B)return S==s&&B==e;var C=-1,k=!0,j=l&R?new ti:t;for(h.set(e,s),h.set(s,e);++C<y;){var W=e[C],te=s[C];if(u)var Q=F?u(te,W,C,s,e,h):u(W,te,C,e,s,h);if(Q!==t){if(Q)continue;k=!1;break}if(j){if(!ha(s,function(re,ce){if(!Gi(j,ce)&&(W===re||p(W,re,l,u,h)))return j.push(ce)})){k=!1;break}}else if(!(W===te||p(W,te,l,u,h))){k=!1;break}}return h.delete(e),h.delete(s),k}function jh(e,s,l,u,p,h,F){switch(l){case yi:if(e.byteLength!=s.byteLength||e.byteOffset!=s.byteOffset)return!1;e=e.buffer,s=s.buffer;case Ji:return!(e.byteLength!=s.byteLength||!h(new qs(e),new qs(s)));case fe:case Mn:case $i:return Wn(+e,+s);case Ct:return e.name==s.name&&e.message==s.message;case qi:case Vi:return e==s+"";case jn:var y=Aa;case Jn:var P=u&w;if(y||(y=Rs),e.size!=s.size&&!P)return!1;var S=F.get(e);if(S)return S==s;u|=R,F.set(e,s);var B=qc(y(e),y(s),u,p,h,F);return F.delete(e),B;case Bs:if(Xi)return Xi.call(e)==Xi.call(s)}return!1}function Jh(e,s,l,u,p,h){var F=l&w,y=Ga(e),P=y.length,S=Ga(s),B=S.length;if(P!=B&&!F)return!1;for(var C=P;C--;){var k=y[C];if(!(F?k in s:me.call(s,k)))return!1}var j=h.get(e),W=h.get(s);if(j&&W)return j==s&&W==e;var te=!0;h.set(e,s),h.set(s,e);for(var Q=F;++C<P;){k=y[C];var re=e[k],ce=s[k];if(u)var vn=F?u(ce,re,k,s,e,h):u(re,ce,k,e,s,h);if(!(vn===t?re===ce||p(re,ce,l,u,h):vn)){te=!1;break}Q||(Q=k=="constructor")}if(te&&!Q){var un=e.constructor,En=s.constructor;un!=En&&"constructor"in e&&"constructor"in s&&!(typeof un=="function"&&un instanceof un&&typeof En=="function"&&En instanceof En)&&(te=!1)}return h.delete(e),h.delete(s),te}function yt(e){return eo(Wc(e,t,iu),e+"")}function Ga(e){return lc(e,He,Ha)}function Ya(e){return lc(e,hn,Vc)}var Wa=Ws?function(e){return Ws.get(e)}:fo;function lr(e){for(var s=e.name+"",l=wi[s],u=me.call(wi,s)?l.length:0;u--;){var p=l[u],h=p.func;if(h==null||h==e)return p.name}return s}function Ni(e){var s=me.call(f,"placeholder")?f:e;return s.placeholder}function Y(){var e=f.iteratee||_o;return e=e===_o?dc:e,arguments.length?e(arguments[0],arguments[1]):e}function cr(e,s){var l=e.__data__;return Kh(s)?l[typeof s=="string"?"string":"hash"]:l.map}function Qa(e){for(var s=He(e),l=s.length;l--;){var u=s[l],p=e[u];s[l]=[u,p,Gc(p)]}return s}function ri(e,s){var l=nf(e,s);return uc(l)?l:t}function Gh(e){var s=me.call(e,ei),l=e[ei];try{e[ei]=t;var u=!0}catch{}var p=Ls.call(e);return u&&(s?e[ei]=l:delete e[ei]),p}var Ha=Pa?function(e){return e==null?[]:(e=Te(e),zt(Pa(e),function(s){return Ql.call(e,s)}))}:ho,Vc=Pa?function(e){for(var s=[];e;)Rt(s,Ha(e)),e=Vs(e);return s}:ho,rn=ln;(va&&rn(new va(new ArrayBuffer(1)))!=yi||Wi&&rn(new Wi)!=jn||Ea&&rn(Ea.resolve())!=rl||bi&&rn(new bi)!=Jn||Qi&&rn(new Qi)!=ji)&&(rn=function(e){var s=ln(e),l=s==ht?e.constructor:t,u=l?ai(l):"";if(u)switch(u){case wf:return yi;case Sf:return jn;case Bf:return rl;case Mf:return Jn;case Nf:return ji}return s});function Yh(e,s,l){for(var u=-1,p=l.length;++u<p;){var h=l[u],F=h.size;switch(h.type){case"drop":e+=F;break;case"dropRight":s-=F;break;case"take":s=sn(s,e+F);break;case"takeRight":e=We(e,s-F);break}}return{start:e,end:s}}function Wh(e){var s=e.match(K_);return s?s[1].split(ep):[]}function jc(e,s,l){s=$t(s,e);for(var u=-1,p=s.length,h=!1;++u<p;){var F=ot(s[u]);if(!(h=e!=null&&l(e,F)))break;e=e[F]}return h||++u!=p?h:(p=e==null?0:e.length,!!p&&mr(p)&&At(F,p)&&(K(e)||oi(e)))}function Qh(e){var s=e.length,l=new e.constructor(s);return s&&typeof e[0]=="string"&&me.call(e,"index")&&(l.index=e.index,l.input=e.input),l}function Jc(e){return typeof e.constructor=="function"&&!ss(e)?Si(Vs(e)):{}}function Hh(e,s,l){var u=e.constructor;switch(s){case Ji:return Va(e);case fe:case Mn:return new u(+e);case yi:return Oh(e,l);case Qr:case Hr:case Xr:case Zr:case Kr:case ea:case na:case ta:case ia:return bc(e,l);case jn:return new u;case $i:case Vi:return new u(e);case qi:return Ch(e);case Jn:return new u;case Bs:return zh(e)}}function Xh(e,s){var l=s.length;if(!l)return e;var u=l-1;return s[u]=(l>1?"& ":"")+s[u],s=s.join(l>2?", ":" "),e.replace(Z_,`{
/* [wrapped with `+s+`] */
`)}function Zh(e){return K(e)||oi(e)||!!(Hl&&e&&e[Hl])}function At(e,s){var l=typeof e;return s=s??ft,!!s&&(l=="number"||l!="symbol"&&cp.test(e))&&e>-1&&e%1==0&&e<s}function cn(e,s,l){if(!Be(l))return!1;var u=typeof s;return(u=="number"?fn(l)&&At(s,l.length):u=="string"&&s in l)?Wn(l[s],e):!1}function Xa(e,s){if(K(e))return!1;var l=typeof e;return l=="number"||l=="symbol"||l=="boolean"||e==null||Pn(e)?!0:W_.test(e)||!Y_.test(e)||s!=null&&e in Te(s)}function Kh(e){var s=typeof e;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?e!=="__proto__":e===null}function Za(e){var s=lr(e),l=f[s];if(typeof l!="function"||!(s in oe.prototype))return!1;if(e===l)return!0;var u=Wa(l);return!!u&&e===u[0]}function em(e){return!!Gl&&Gl in e}var nm=xs?Tt:mo;function ss(e){var s=e&&e.constructor,l=typeof s=="function"&&s.prototype||Ii;return e===l}function Gc(e){return e===e&&!Be(e)}function Yc(e,s){return function(l){return l==null?!1:l[e]===s&&(s!==t||e in Te(l))}}function tm(e){var s=fr(e,function(u){return l.size===m&&l.clear(),u}),l=s.cache;return s}function im(e,s){var l=e[1],u=s[1],p=l|u,h=p<(J|ue|Ce),F=u==Ce&&l==ge||u==Ce&&l==pt&&e[7].length<=s[8]||u==(Ce|pt)&&s[7].length<=s[8]&&l==ge;if(!(h||F))return e;u&J&&(e[2]=s[2],p|=l&J?0:Ie);var y=s[3];if(y){var P=e[3];e[3]=P?Sc(P,y,s[4]):y,e[4]=P?kt(e[3],g):s[4]}return y=s[5],y&&(P=e[5],e[5]=P?Bc(P,y,s[6]):y,e[6]=P?kt(e[5],g):s[6]),y=s[7],y&&(e[7]=y),u&Ce&&(e[8]=e[8]==null?s[8]:sn(e[8],s[8])),e[9]==null&&(e[9]=s[9]),e[0]=s[0],e[1]=p,e}function sm(e){var s=[];if(e!=null)for(var l in Te(e))s.push(l);return s}function rm(e){return Ls.call(e)}function Wc(e,s,l){return s=We(s===t?e.length-1:s,0),function(){for(var u=arguments,p=-1,h=We(u.length-s,0),F=v(h);++p<h;)F[p]=u[s+p];p=-1;for(var y=v(s+1);++p<s;)y[p]=u[p];return y[s]=l(F),yn(e,this,y)}}function Qc(e,s){return s.length<2?e:si(e,kn(s,0,-1))}function am(e,s){for(var l=e.length,u=sn(s.length,l),p=pn(e);u--;){var h=s[u];e[u]=At(h,l)?p[h]:t}return e}function Ka(e,s){if(!(s==="constructor"&&typeof e[s]=="function")&&s!="__proto__")return e[s]}var Hc=Zc(Dc),rs=Af||function(e,s){return Ke.setTimeout(e,s)},eo=Zc(Sh);function Xc(e,s,l){var u=s+"";return eo(e,Xh(u,om(Wh(u),l)))}function Zc(e){var s=0,l=0;return function(){var u=Ef(),p=Ht-(u-l);if(l=u,p>0){if(++s>=Ot)return arguments[0]}else s=0;return e.apply(t,arguments)}}function ur(e,s){var l=-1,u=e.length,p=u-1;for(s=s===t?u:s;++l<s;){var h=Ra(l,p),F=e[h];e[h]=e[l],e[l]=F}return e.length=s,e}var Kc=tm(function(e){var s=[];return e.charCodeAt(0)===46&&s.push(""),e.replace(Q_,function(l,u,p,h){s.push(p?h.replace(ip,"$1"):u||l)}),s});function ot(e){if(typeof e=="string"||Pn(e))return e;var s=e+"";return s=="0"&&1/e==-1/0?"-0":s}function ai(e){if(e!=null){try{return Us.call(e)}catch{}try{return e+""}catch{}}return""}function om(e,s){return On(x,function(l){var u="_."+l[0];s&l[1]&&!Cs(e,u)&&e.push(u)}),e.sort()}function eu(e){if(e instanceof oe)return e.clone();var s=new zn(e.__wrapped__,e.__chain__);return s.__actions__=pn(e.__actions__),s.__index__=e.__index__,s.__values__=e.__values__,s}function lm(e,s,l){(l?cn(e,s,l):s===t)?s=1:s=We(ne(s),0);var u=e==null?0:e.length;if(!u||s<1)return[];for(var p=0,h=0,F=v(Gs(u/s));p<u;)F[h++]=kn(e,p,p+=s);return F}function cm(e){for(var s=-1,l=e==null?0:e.length,u=0,p=[];++s<l;){var h=e[s];h&&(p[u++]=h)}return p}function um(){var e=arguments.length;if(!e)return[];for(var s=v(e-1),l=arguments[0],u=e;u--;)s[u-1]=arguments[u];return Rt(K(l)?pn(l):[l],en(s,1))}var dm=ie(function(e,s){return Ue(e)?Ki(e,en(s,1,Ue,!0)):[]}),_m=ie(function(e,s){var l=xn(s);return Ue(l)&&(l=t),Ue(e)?Ki(e,en(s,1,Ue,!0),Y(l,2)):[]}),pm=ie(function(e,s){var l=xn(s);return Ue(l)&&(l=t),Ue(e)?Ki(e,en(s,1,Ue,!0),t,l):[]});function fm(e,s,l){var u=e==null?0:e.length;return u?(s=l||s===t?1:ne(s),kn(e,s<0?0:s,u)):[]}function hm(e,s,l){var u=e==null?0:e.length;return u?(s=l||s===t?1:ne(s),s=u-s,kn(e,0,s<0?0:s)):[]}function mm(e,s){return e&&e.length?tr(e,Y(s,3),!0,!0):[]}function gm(e,s){return e&&e.length?tr(e,Y(s,3),!0):[]}function Fm(e,s,l,u){var p=e==null?0:e.length;return p?(l&&typeof l!="number"&&cn(e,s,l)&&(l=0,u=p),uh(e,s,l,u)):[]}function nu(e,s,l){var u=e==null?0:e.length;if(!u)return-1;var p=l==null?0:ne(l);return p<0&&(p=We(u+p,0)),zs(e,Y(s,3),p)}function tu(e,s,l){var u=e==null?0:e.length;if(!u)return-1;var p=u-1;return l!==t&&(p=ne(l),p=l<0?We(u+p,0):sn(p,u-1)),zs(e,Y(s,3),p,!0)}function iu(e){var s=e==null?0:e.length;return s?en(e,1):[]}function Dm(e){var s=e==null?0:e.length;return s?en(e,Xt):[]}function ym(e,s){var l=e==null?0:e.length;return l?(s=s===t?1:ne(s),en(e,s)):[]}function Am(e){for(var s=-1,l=e==null?0:e.length,u={};++s<l;){var p=e[s];u[p[0]]=p[1]}return u}function su(e){return e&&e.length?e[0]:t}function Tm(e,s,l){var u=e==null?0:e.length;if(!u)return-1;var p=l==null?0:ne(l);return p<0&&(p=We(u+p,0)),Ti(e,s,p)}function Pm(e){var s=e==null?0:e.length;return s?kn(e,0,-1):[]}var vm=ie(function(e){var s=we(e,$a);return s.length&&s[0]===e[0]?Ma(s):[]}),Em=ie(function(e){var s=xn(e),l=we(e,$a);return s===xn(l)?s=t:l.pop(),l.length&&l[0]===e[0]?Ma(l,Y(s,2)):[]}),Im=ie(function(e){var s=xn(e),l=we(e,$a);return s=typeof s=="function"?s:t,s&&l.pop(),l.length&&l[0]===e[0]?Ma(l,t,s):[]});function bm(e,s){return e==null?"":Pf.call(e,s)}function xn(e){var s=e==null?0:e.length;return s?e[s-1]:t}function wm(e,s,l){var u=e==null?0:e.length;if(!u)return-1;var p=u;return l!==t&&(p=ne(l),p=p<0?We(u+p,0):sn(p,u-1)),s===s?of(e,s,p):zs(e,xl,p,!0)}function Sm(e,s){return e&&e.length?hc(e,ne(s)):t}var Bm=ie(ru);function ru(e,s){return e&&e.length&&s&&s.length?za(e,s):e}function Mm(e,s,l){return e&&e.length&&s&&s.length?za(e,s,Y(l,2)):e}function Nm(e,s,l){return e&&e.length&&s&&s.length?za(e,s,t,l):e}var Om=yt(function(e,s){var l=e==null?0:e.length,u=ba(e,s);return Fc(e,we(s,function(p){return At(p,l)?+p:p}).sort(wc)),u});function Cm(e,s){var l=[];if(!(e&&e.length))return l;var u=-1,p=[],h=e.length;for(s=Y(s,3);++u<h;){var F=e[u];s(F,u,e)&&(l.push(F),p.push(u))}return Fc(e,p),l}function no(e){return e==null?e:bf.call(e)}function zm(e,s,l){var u=e==null?0:e.length;return u?(l&&typeof l!="number"&&cn(e,s,l)?(s=0,l=u):(s=s==null?0:ne(s),l=l===t?u:ne(l)),kn(e,s,l)):[]}function Rm(e,s){return nr(e,s)}function km(e,s,l){return xa(e,s,Y(l,2))}function xm(e,s){var l=e==null?0:e.length;if(l){var u=nr(e,s);if(u<l&&Wn(e[u],s))return u}return-1}function Um(e,s){return nr(e,s,!0)}function Lm(e,s,l){return xa(e,s,Y(l,2),!0)}function $m(e,s){var l=e==null?0:e.length;if(l){var u=nr(e,s,!0)-1;if(Wn(e[u],s))return u}return-1}function qm(e){return e&&e.length?yc(e):[]}function Vm(e,s){return e&&e.length?yc(e,Y(s,2)):[]}function jm(e){var s=e==null?0:e.length;return s?kn(e,1,s):[]}function Jm(e,s,l){return e&&e.length?(s=l||s===t?1:ne(s),kn(e,0,s<0?0:s)):[]}function Gm(e,s,l){var u=e==null?0:e.length;return u?(s=l||s===t?1:ne(s),s=u-s,kn(e,s<0?0:s,u)):[]}function Ym(e,s){return e&&e.length?tr(e,Y(s,3),!1,!0):[]}function Wm(e,s){return e&&e.length?tr(e,Y(s,3)):[]}var Qm=ie(function(e){return Lt(en(e,1,Ue,!0))}),Hm=ie(function(e){var s=xn(e);return Ue(s)&&(s=t),Lt(en(e,1,Ue,!0),Y(s,2))}),Xm=ie(function(e){var s=xn(e);return s=typeof s=="function"?s:t,Lt(en(e,1,Ue,!0),t,s)});function Zm(e){return e&&e.length?Lt(e):[]}function Km(e,s){return e&&e.length?Lt(e,Y(s,2)):[]}function eg(e,s){return s=typeof s=="function"?s:t,e&&e.length?Lt(e,t,s):[]}function to(e){if(!(e&&e.length))return[];var s=0;return e=zt(e,function(l){if(Ue(l))return s=We(l.length,s),!0}),Da(s,function(l){return we(e,ma(l))})}function au(e,s){if(!(e&&e.length))return[];var l=to(e);return s==null?l:we(l,function(u){return yn(s,t,u)})}var ng=ie(function(e,s){return Ue(e)?Ki(e,s):[]}),tg=ie(function(e){return La(zt(e,Ue))}),ig=ie(function(e){var s=xn(e);return Ue(s)&&(s=t),La(zt(e,Ue),Y(s,2))}),sg=ie(function(e){var s=xn(e);return s=typeof s=="function"?s:t,La(zt(e,Ue),t,s)}),rg=ie(to);function ag(e,s){return vc(e||[],s||[],Zi)}function og(e,s){return vc(e||[],s||[],ts)}var lg=ie(function(e){var s=e.length,l=s>1?e[s-1]:t;return l=typeof l=="function"?(e.pop(),l):t,au(e,l)});function ou(e){var s=f(e);return s.__chain__=!0,s}function cg(e,s){return s(e),e}function dr(e,s){return s(e)}var ug=yt(function(e){var s=e.length,l=s?e[0]:0,u=this.__wrapped__,p=function(h){return ba(h,e)};return s>1||this.__actions__.length||!(u instanceof oe)||!At(l)?this.thru(p):(u=u.slice(l,+l+(s?1:0)),u.__actions__.push({func:dr,args:[p],thisArg:t}),new zn(u,this.__chain__).thru(function(h){return s&&!h.length&&h.push(t),h}))});function dg(){return ou(this)}function _g(){return new zn(this.value(),this.__chain__)}function pg(){this.__values__===t&&(this.__values__=Au(this.value()));var e=this.__index__>=this.__values__.length,s=e?t:this.__values__[this.__index__++];return{done:e,value:s}}function fg(){return this}function hg(e){for(var s,l=this;l instanceof Hs;){var u=eu(l);u.__index__=0,u.__values__=t,s?p.__wrapped__=u:s=u;var p=u;l=l.__wrapped__}return p.__wrapped__=e,s}function mg(){var e=this.__wrapped__;if(e instanceof oe){var s=e;return this.__actions__.length&&(s=new oe(this)),s=s.reverse(),s.__actions__.push({func:dr,args:[no],thisArg:t}),new zn(s,this.__chain__)}return this.thru(no)}function gg(){return Pc(this.__wrapped__,this.__actions__)}var Fg=ir(function(e,s,l){me.call(e,l)?++e[l]:Ft(e,l,1)});function Dg(e,s,l){var u=K(e)?Rl:ch;return l&&cn(e,s,l)&&(s=t),u(e,Y(s,3))}function yg(e,s){var l=K(e)?zt:ac;return l(e,Y(s,3))}var Ag=Cc(nu),Tg=Cc(tu);function Pg(e,s){return en(_r(e,s),1)}function vg(e,s){return en(_r(e,s),Xt)}function Eg(e,s,l){return l=l===t?1:ne(l),en(_r(e,s),l)}function lu(e,s){var l=K(e)?On:Ut;return l(e,Y(s,3))}function cu(e,s){var l=K(e)?Vp:rc;return l(e,Y(s,3))}var Ig=ir(function(e,s,l){me.call(e,l)?e[l].push(s):Ft(e,l,[s])});function bg(e,s,l,u){e=fn(e)?e:Ci(e),l=l&&!u?ne(l):0;var p=e.length;return l<0&&(l=We(p+l,0)),gr(e)?l<=p&&e.indexOf(s,l)>-1:!!p&&Ti(e,s,l)>-1}var wg=ie(function(e,s,l){var u=-1,p=typeof s=="function",h=fn(e)?v(e.length):[];return Ut(e,function(F){h[++u]=p?yn(s,F,l):es(F,s,l)}),h}),Sg=ir(function(e,s,l){Ft(e,l,s)});function _r(e,s){var l=K(e)?we:_c;return l(e,Y(s,3))}function Bg(e,s,l,u){return e==null?[]:(K(s)||(s=s==null?[]:[s]),l=u?t:l,K(l)||(l=l==null?[]:[l]),mc(e,s,l))}var Mg=ir(function(e,s,l){e[l?0:1].push(s)},function(){return[[],[]]});function Ng(e,s,l){var u=K(e)?fa:Ll,p=arguments.length<3;return u(e,Y(s,4),l,p,Ut)}function Og(e,s,l){var u=K(e)?jp:Ll,p=arguments.length<3;return u(e,Y(s,4),l,p,rc)}function Cg(e,s){var l=K(e)?zt:ac;return l(e,hr(Y(s,3)))}function zg(e){var s=K(e)?nc:bh;return s(e)}function Rg(e,s,l){(l?cn(e,s,l):s===t)?s=1:s=ne(s);var u=K(e)?sh:wh;return u(e,s)}function kg(e){var s=K(e)?rh:Bh;return s(e)}function xg(e){if(e==null)return 0;if(fn(e))return gr(e)?vi(e):e.length;var s=rn(e);return s==jn||s==Jn?e.size:Oa(e).length}function Ug(e,s,l){var u=K(e)?ha:Mh;return l&&cn(e,s,l)&&(s=t),u(e,Y(s,3))}var Lg=ie(function(e,s){if(e==null)return[];var l=s.length;return l>1&&cn(e,s[0],s[1])?s=[]:l>2&&cn(s[0],s[1],s[2])&&(s=[s[0]]),mc(e,en(s,1),[])}),pr=yf||function(){return Ke.Date.now()};function $g(e,s){if(typeof s!="function")throw new Cn(c);return e=ne(e),function(){if(--e<1)return s.apply(this,arguments)}}function uu(e,s,l){return s=l?t:s,s=e&&s==null?e.length:s,Dt(e,Ce,t,t,t,t,s)}function du(e,s){var l;if(typeof s!="function")throw new Cn(c);return e=ne(e),function(){return--e>0&&(l=s.apply(this,arguments)),e<=1&&(s=t),l}}var io=ie(function(e,s,l){var u=J;if(l.length){var p=kt(l,Ni(io));u|=Ge}return Dt(e,u,s,l,p)}),_u=ie(function(e,s,l){var u=J|ue;if(l.length){var p=kt(l,Ni(_u));u|=Ge}return Dt(s,u,e,l,p)});function pu(e,s,l){s=l?t:s;var u=Dt(e,ge,t,t,t,t,t,s);return u.placeholder=pu.placeholder,u}function fu(e,s,l){s=l?t:s;var u=Dt(e,Oe,t,t,t,t,t,s);return u.placeholder=fu.placeholder,u}function hu(e,s,l){var u,p,h,F,y,P,S=0,B=!1,C=!1,k=!0;if(typeof e!="function")throw new Cn(c);s=Un(s)||0,Be(l)&&(B=!!l.leading,C="maxWait"in l,h=C?We(Un(l.maxWait)||0,s):h,k="trailing"in l?!!l.trailing:k);function j(Le){var Qn=u,vt=p;return u=p=t,S=Le,F=e.apply(vt,Qn),F}function W(Le){return S=Le,y=rs(re,s),B?j(Le):F}function te(Le){var Qn=Le-P,vt=Le-S,Cu=s-Qn;return C?sn(Cu,h-vt):Cu}function Q(Le){var Qn=Le-P,vt=Le-S;return P===t||Qn>=s||Qn<0||C&&vt>=h}function re(){var Le=pr();if(Q(Le))return ce(Le);y=rs(re,te(Le))}function ce(Le){return y=t,k&&u?j(Le):(u=p=t,F)}function vn(){y!==t&&Ec(y),S=0,u=P=p=y=t}function un(){return y===t?F:ce(pr())}function En(){var Le=pr(),Qn=Q(Le);if(u=arguments,p=this,P=Le,Qn){if(y===t)return W(P);if(C)return Ec(y),y=rs(re,s),j(P)}return y===t&&(y=rs(re,s)),F}return En.cancel=vn,En.flush=un,En}var qg=ie(function(e,s){return sc(e,1,s)}),Vg=ie(function(e,s,l){return sc(e,Un(s)||0,l)});function jg(e){return Dt(e,O)}function fr(e,s){if(typeof e!="function"||s!=null&&typeof s!="function")throw new Cn(c);var l=function(){var u=arguments,p=s?s.apply(this,u):u[0],h=l.cache;if(h.has(p))return h.get(p);var F=e.apply(this,u);return l.cache=h.set(p,F)||h,F};return l.cache=new(fr.Cache||gt),l}fr.Cache=gt;function hr(e){if(typeof e!="function")throw new Cn(c);return function(){var s=arguments;switch(s.length){case 0:return!e.call(this);case 1:return!e.call(this,s[0]);case 2:return!e.call(this,s[0],s[1]);case 3:return!e.call(this,s[0],s[1],s[2])}return!e.apply(this,s)}}function Jg(e){return du(2,e)}var Gg=Nh(function(e,s){s=s.length==1&&K(s[0])?we(s[0],An(Y())):we(en(s,1),An(Y()));var l=s.length;return ie(function(u){for(var p=-1,h=sn(u.length,l);++p<h;)u[p]=s[p].call(this,u[p]);return yn(e,this,u)})}),so=ie(function(e,s){var l=kt(s,Ni(so));return Dt(e,Ge,t,s,l)}),mu=ie(function(e,s){var l=kt(s,Ni(mu));return Dt(e,Qe,t,s,l)}),Yg=yt(function(e,s){return Dt(e,pt,t,t,t,s)});function Wg(e,s){if(typeof e!="function")throw new Cn(c);return s=s===t?s:ne(s),ie(e,s)}function Qg(e,s){if(typeof e!="function")throw new Cn(c);return s=s==null?0:We(ne(s),0),ie(function(l){var u=l[s],p=qt(l,0,s);return u&&Rt(p,u),yn(e,this,p)})}function Hg(e,s,l){var u=!0,p=!0;if(typeof e!="function")throw new Cn(c);return Be(l)&&(u="leading"in l?!!l.leading:u,p="trailing"in l?!!l.trailing:p),hu(e,s,{leading:u,maxWait:s,trailing:p})}function Xg(e){return uu(e,1)}function Zg(e,s){return so(qa(s),e)}function Kg(){if(!arguments.length)return[];var e=arguments[0];return K(e)?e:[e]}function eF(e){return Rn(e,b)}function nF(e,s){return s=typeof s=="function"?s:t,Rn(e,b,s)}function tF(e){return Rn(e,D|b)}function iF(e,s){return s=typeof s=="function"?s:t,Rn(e,D|b,s)}function sF(e,s){return s==null||ic(e,s,He(s))}function Wn(e,s){return e===s||e!==e&&s!==s}var rF=or(Ba),aF=or(function(e,s){return e>=s}),oi=cc(function(){return arguments}())?cc:function(e){return ze(e)&&me.call(e,"callee")&&!Ql.call(e,"callee")},K=v.isArray,oF=Bl?An(Bl):hh;function fn(e){return e!=null&&mr(e.length)&&!Tt(e)}function Ue(e){return ze(e)&&fn(e)}function lF(e){return e===!0||e===!1||ze(e)&&ln(e)==fe}var Vt=Tf||mo,cF=Ml?An(Ml):mh;function uF(e){return ze(e)&&e.nodeType===1&&!as(e)}function dF(e){if(e==null)return!0;if(fn(e)&&(K(e)||typeof e=="string"||typeof e.splice=="function"||Vt(e)||Oi(e)||oi(e)))return!e.length;var s=rn(e);if(s==jn||s==Jn)return!e.size;if(ss(e))return!Oa(e).length;for(var l in e)if(me.call(e,l))return!1;return!0}function _F(e,s){return ns(e,s)}function pF(e,s,l){l=typeof l=="function"?l:t;var u=l?l(e,s):t;return u===t?ns(e,s,t,l):!!u}function ro(e){if(!ze(e))return!1;var s=ln(e);return s==Ct||s==Li||typeof e.message=="string"&&typeof e.name=="string"&&!as(e)}function fF(e){return typeof e=="number"&&Xl(e)}function Tt(e){if(!Be(e))return!1;var s=ln(e);return s==tn||s==sl||s==xe||s==k_}function gu(e){return typeof e=="number"&&e==ne(e)}function mr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ft}function Be(e){var s=typeof e;return e!=null&&(s=="object"||s=="function")}function ze(e){return e!=null&&typeof e=="object"}var Fu=Nl?An(Nl):Fh;function hF(e,s){return e===s||Na(e,s,Qa(s))}function mF(e,s,l){return l=typeof l=="function"?l:t,Na(e,s,Qa(s),l)}function gF(e){return Du(e)&&e!=+e}function FF(e){if(nm(e))throw new Z(o);return uc(e)}function DF(e){return e===null}function yF(e){return e==null}function Du(e){return typeof e=="number"||ze(e)&&ln(e)==$i}function as(e){if(!ze(e)||ln(e)!=ht)return!1;var s=Vs(e);if(s===null)return!0;var l=me.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Us.call(l)==mf}var ao=Ol?An(Ol):Dh;function AF(e){return gu(e)&&e>=-9007199254740991&&e<=ft}var yu=Cl?An(Cl):yh;function gr(e){return typeof e=="string"||!K(e)&&ze(e)&&ln(e)==Vi}function Pn(e){return typeof e=="symbol"||ze(e)&&ln(e)==Bs}var Oi=zl?An(zl):Ah;function TF(e){return e===t}function PF(e){return ze(e)&&rn(e)==ji}function vF(e){return ze(e)&&ln(e)==U_}var EF=or(Ca),IF=or(function(e,s){return e<=s});function Au(e){if(!e)return[];if(fn(e))return gr(e)?Gn(e):pn(e);if(Yi&&e[Yi])return sf(e[Yi]());var s=rn(e),l=s==jn?Aa:s==Jn?Rs:Ci;return l(e)}function Pt(e){if(!e)return e===0?e:0;if(e=Un(e),e===Xt||e===-1/0){var s=e<0?-1:1;return s*Di}return e===e?e:0}function ne(e){var s=Pt(e),l=s%1;return s===s?l?s-l:s:0}function Tu(e){return e?ii(ne(e),0,Bn):0}function Un(e){if(typeof e=="number")return e;if(Pn(e))return Zt;if(Be(e)){var s=typeof e.valueOf=="function"?e.valueOf():e;e=Be(s)?s+"":s}if(typeof e!="string")return e===0?e:+e;e=$l(e);var l=ap.test(e);return l||lp.test(e)?Lp(e.slice(2),l?2:8):rp.test(e)?Zt:+e}function Pu(e){return at(e,hn(e))}function bF(e){return e?ii(ne(e),-9007199254740991,ft):e===0?e:0}function he(e){return e==null?"":Tn(e)}var wF=Bi(function(e,s){if(ss(s)||fn(s)){at(s,He(s),e);return}for(var l in s)me.call(s,l)&&Zi(e,l,s[l])}),vu=Bi(function(e,s){at(s,hn(s),e)}),Fr=Bi(function(e,s,l,u){at(s,hn(s),e,u)}),SF=Bi(function(e,s,l,u){at(s,He(s),e,u)}),BF=yt(ba);function MF(e,s){var l=Si(e);return s==null?l:tc(l,s)}var NF=ie(function(e,s){e=Te(e);var l=-1,u=s.length,p=u>2?s[2]:t;for(p&&cn(s[0],s[1],p)&&(u=1);++l<u;)for(var h=s[l],F=hn(h),y=-1,P=F.length;++y<P;){var S=F[y],B=e[S];(B===t||Wn(B,Ii[S])&&!me.call(e,S))&&(e[S]=h[S])}return e}),OF=ie(function(e){return e.push(t,$c),yn(Eu,t,e)});function CF(e,s){return kl(e,Y(s,3),rt)}function zF(e,s){return kl(e,Y(s,3),Sa)}function RF(e,s){return e==null?e:wa(e,Y(s,3),hn)}function kF(e,s){return e==null?e:oc(e,Y(s,3),hn)}function xF(e,s){return e&&rt(e,Y(s,3))}function UF(e,s){return e&&Sa(e,Y(s,3))}function LF(e){return e==null?[]:Ks(e,He(e))}function $F(e){return e==null?[]:Ks(e,hn(e))}function oo(e,s,l){var u=e==null?t:si(e,s);return u===t?l:u}function qF(e,s){return e!=null&&jc(e,s,dh)}function lo(e,s){return e!=null&&jc(e,s,_h)}var VF=Rc(function(e,s,l){s!=null&&typeof s.toString!="function"&&(s=Ls.call(s)),e[s]=l},uo(mn)),jF=Rc(function(e,s,l){s!=null&&typeof s.toString!="function"&&(s=Ls.call(s)),me.call(e,s)?e[s].push(l):e[s]=[l]},Y),JF=ie(es);function He(e){return fn(e)?ec(e):Oa(e)}function hn(e){return fn(e)?ec(e,!0):Th(e)}function GF(e,s){var l={};return s=Y(s,3),rt(e,function(u,p,h){Ft(l,s(u,p,h),u)}),l}function YF(e,s){var l={};return s=Y(s,3),rt(e,function(u,p,h){Ft(l,p,s(u,p,h))}),l}var WF=Bi(function(e,s,l){er(e,s,l)}),Eu=Bi(function(e,s,l,u){er(e,s,l,u)}),QF=yt(function(e,s){var l={};if(e==null)return l;var u=!1;s=we(s,function(h){return h=$t(h,e),u||(u=h.length>1),h}),at(e,Ya(e),l),u&&(l=Rn(l,D|N|b,Vh));for(var p=s.length;p--;)Ua(l,s[p]);return l});function HF(e,s){return Iu(e,hr(Y(s)))}var XF=yt(function(e,s){return e==null?{}:vh(e,s)});function Iu(e,s){if(e==null)return{};var l=we(Ya(e),function(u){return[u]});return s=Y(s),gc(e,l,function(u,p){return s(u,p[0])})}function ZF(e,s,l){s=$t(s,e);var u=-1,p=s.length;for(p||(p=1,e=t);++u<p;){var h=e==null?t:e[ot(s[u])];h===t&&(u=p,h=l),e=Tt(h)?h.call(e):h}return e}function KF(e,s,l){return e==null?e:ts(e,s,l)}function eD(e,s,l,u){return u=typeof u=="function"?u:t,e==null?e:ts(e,s,l,u)}var bu=Uc(He),wu=Uc(hn);function nD(e,s,l){var u=K(e),p=u||Vt(e)||Oi(e);if(s=Y(s,4),l==null){var h=e&&e.constructor;p?l=u?new h:[]:Be(e)?l=Tt(h)?Si(Vs(e)):{}:l={}}return(p?On:rt)(e,function(F,y,P){return s(l,F,y,P)}),l}function tD(e,s){return e==null?!0:Ua(e,s)}function iD(e,s,l){return e==null?e:Tc(e,s,qa(l))}function sD(e,s,l,u){return u=typeof u=="function"?u:t,e==null?e:Tc(e,s,qa(l),u)}function Ci(e){return e==null?[]:ya(e,He(e))}function rD(e){return e==null?[]:ya(e,hn(e))}function aD(e,s,l){return l===t&&(l=s,s=t),l!==t&&(l=Un(l),l=l===l?l:0),s!==t&&(s=Un(s),s=s===s?s:0),ii(Un(e),s,l)}function oD(e,s,l){return s=Pt(s),l===t?(l=s,s=0):l=Pt(l),e=Un(e),ph(e,s,l)}function lD(e,s,l){if(l&&typeof l!="boolean"&&cn(e,s,l)&&(s=l=t),l===t&&(typeof s=="boolean"?(l=s,s=t):typeof e=="boolean"&&(l=e,e=t)),e===t&&s===t?(e=0,s=1):(e=Pt(e),s===t?(s=e,e=0):s=Pt(s)),e>s){var u=e;e=s,s=u}if(l||e%1||s%1){var p=Zl();return sn(e+p*(s-e+Up("1e-"+((p+"").length-1))),s)}return Ra(e,s)}var cD=Mi(function(e,s,l){return s=s.toLowerCase(),e+(l?Su(s):s)});function Su(e){return co(he(e).toLowerCase())}function Bu(e){return e=he(e),e&&e.replace(up,Zp).replace(Sp,"")}function uD(e,s,l){e=he(e),s=Tn(s);var u=e.length;l=l===t?u:ii(ne(l),0,u);var p=l;return l-=s.length,l>=0&&e.slice(l,p)==s}function dD(e){return e=he(e),e&&j_.test(e)?e.replace(ol,Kp):e}function _D(e){return e=he(e),e&&H_.test(e)?e.replace(sa,"\\$&"):e}var pD=Mi(function(e,s,l){return e+(l?"-":"")+s.toLowerCase()}),fD=Mi(function(e,s,l){return e+(l?" ":"")+s.toLowerCase()}),hD=Oc("toLowerCase");function mD(e,s,l){e=he(e),s=ne(s);var u=s?vi(e):0;if(!s||u>=s)return e;var p=(s-u)/2;return ar(Ys(p),l)+e+ar(Gs(p),l)}function gD(e,s,l){e=he(e),s=ne(s);var u=s?vi(e):0;return s&&u<s?e+ar(s-u,l):e}function FD(e,s,l){e=he(e),s=ne(s);var u=s?vi(e):0;return s&&u<s?ar(s-u,l)+e:e}function DD(e,s,l){return l||s==null?s=0:s&&(s=+s),If(he(e).replace(ra,""),s||0)}function yD(e,s,l){return(l?cn(e,s,l):s===t)?s=1:s=ne(s),ka(he(e),s)}function AD(){var e=arguments,s=he(e[0]);return e.length<3?s:s.replace(e[1],e[2])}var TD=Mi(function(e,s,l){return e+(l?"_":"")+s.toLowerCase()});function PD(e,s,l){return l&&typeof l!="number"&&cn(e,s,l)&&(s=l=t),l=l===t?Bn:l>>>0,l?(e=he(e),e&&(typeof s=="string"||s!=null&&!ao(s))&&(s=Tn(s),!s&&Pi(e))?qt(Gn(e),0,l):e.split(s,l)):[]}var vD=Mi(function(e,s,l){return e+(l?" ":"")+co(s)});function ED(e,s,l){return e=he(e),l=l==null?0:ii(ne(l),0,e.length),s=Tn(s),e.slice(l,l+s.length)==s}function ID(e,s,l){var u=f.templateSettings;l&&cn(e,s,l)&&(s=t),e=he(e),s=Fr({},s,u,Lc);var p=Fr({},s.imports,u.imports,Lc),h=He(p),F=ya(p,h),y,P,S=0,B=s.interpolate||Ms,C="__p += '",k=Ta((s.escape||Ms).source+"|"+B.source+"|"+(B===ll?sp:Ms).source+"|"+(s.evaluate||Ms).source+"|$","g"),j="//# sourceURL="+(me.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Cp+"]")+`
`;e.replace(k,function(Q,re,ce,vn,un,En){return ce||(ce=vn),C+=e.slice(S,En).replace(dp,ef),re&&(y=!0,C+=`' +
__e(`+re+`) +
'`),un&&(P=!0,C+=`';
`+un+`;
__p += '`),ce&&(C+=`' +
((__t = (`+ce+`)) == null ? '' : __t) +
'`),S=En+Q.length,Q}),C+=`';
`;var W=me.call(s,"variable")&&s.variable;if(!W)C=`with (obj) {
`+C+`
}
`;else if(tp.test(W))throw new Z(d);C=(P?C.replace(L_,""):C).replace($_,"$1").replace(q_,"$1;"),C="function("+(W||"obj")+`) {
`+(W?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(y?", __e = _.escape":"")+(P?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+C+`return __p
}`;var te=Nu(function(){return _e(h,j+"return "+C).apply(t,F)});if(te.source=C,ro(te))throw te;return te}function bD(e){return he(e).toLowerCase()}function wD(e){return he(e).toUpperCase()}function SD(e,s,l){if(e=he(e),e&&(l||s===t))return $l(e);if(!e||!(s=Tn(s)))return e;var u=Gn(e),p=Gn(s),h=ql(u,p),F=Vl(u,p)+1;return qt(u,h,F).join("")}function BD(e,s,l){if(e=he(e),e&&(l||s===t))return e.slice(0,Jl(e)+1);if(!e||!(s=Tn(s)))return e;var u=Gn(e),p=Vl(u,Gn(s))+1;return qt(u,0,p).join("")}function MD(e,s,l){if(e=he(e),e&&(l||s===t))return e.replace(ra,"");if(!e||!(s=Tn(s)))return e;var u=Gn(e),p=ql(u,Gn(s));return qt(u,p).join("")}function ND(e,s){var l=X,u=on;if(Be(s)){var p="separator"in s?s.separator:p;l="length"in s?ne(s.length):l,u="omission"in s?Tn(s.omission):u}e=he(e);var h=e.length;if(Pi(e)){var F=Gn(e);h=F.length}if(l>=h)return e;var y=l-vi(u);if(y<1)return u;var P=F?qt(F,0,y).join(""):e.slice(0,y);if(p===t)return P+u;if(F&&(y+=P.length-y),ao(p)){if(e.slice(y).search(p)){var S,B=P;for(p.global||(p=Ta(p.source,he(cl.exec(p))+"g")),p.lastIndex=0;S=p.exec(B);)var C=S.index;P=P.slice(0,C===t?y:C)}}else if(e.indexOf(Tn(p),y)!=y){var k=P.lastIndexOf(p);k>-1&&(P=P.slice(0,k))}return P+u}function OD(e){return e=he(e),e&&V_.test(e)?e.replace(al,lf):e}var CD=Mi(function(e,s,l){return e+(l?" ":"")+s.toUpperCase()}),co=Oc("toUpperCase");function Mu(e,s,l){return e=he(e),s=l?t:s,s===t?tf(e)?df(e):Yp(e):e.match(s)||[]}var Nu=ie(function(e,s){try{return yn(e,t,s)}catch(l){return ro(l)?l:new Z(l)}}),zD=yt(function(e,s){return On(s,function(l){l=ot(l),Ft(e,l,io(e[l],e))}),e});function RD(e){var s=e==null?0:e.length,l=Y();return e=s?we(e,function(u){if(typeof u[1]!="function")throw new Cn(c);return[l(u[0]),u[1]]}):[],ie(function(u){for(var p=-1;++p<s;){var h=e[p];if(yn(h[0],this,u))return yn(h[1],this,u)}})}function kD(e){return lh(Rn(e,D))}function uo(e){return function(){return e}}function xD(e,s){return e==null||e!==e?s:e}var UD=zc(),LD=zc(!0);function mn(e){return e}function _o(e){return dc(typeof e=="function"?e:Rn(e,D))}function $D(e){return pc(Rn(e,D))}function qD(e,s){return fc(e,Rn(s,D))}var VD=ie(function(e,s){return function(l){return es(l,e,s)}}),jD=ie(function(e,s){return function(l){return es(e,l,s)}});function po(e,s,l){var u=He(s),p=Ks(s,u);l==null&&!(Be(s)&&(p.length||!u.length))&&(l=s,s=e,e=this,p=Ks(s,He(s)));var h=!(Be(l)&&"chain"in l)||!!l.chain,F=Tt(e);return On(p,function(y){var P=s[y];e[y]=P,F&&(e.prototype[y]=function(){var S=this.__chain__;if(h||S){var B=e(this.__wrapped__),C=B.__actions__=pn(this.__actions__);return C.push({func:P,args:arguments,thisArg:e}),B.__chain__=S,B}return P.apply(e,Rt([this.value()],arguments))})}),e}function JD(){return Ke._===this&&(Ke._=gf),this}function fo(){}function GD(e){return e=ne(e),ie(function(s){return hc(s,e)})}var YD=ja(we),WD=ja(Rl),QD=ja(ha);function Ou(e){return Xa(e)?ma(ot(e)):Eh(e)}function HD(e){return function(s){return e==null?t:si(e,s)}}var XD=kc(),ZD=kc(!0);function ho(){return[]}function mo(){return!1}function KD(){return{}}function ey(){return""}function ny(){return!0}function ty(e,s){if(e=ne(e),e<1||e>ft)return[];var l=Bn,u=sn(e,Bn);s=Y(s),e-=Bn;for(var p=Da(u,s);++l<e;)s(l);return p}function iy(e){return K(e)?we(e,ot):Pn(e)?[e]:pn(Kc(he(e)))}function sy(e){var s=++hf;return he(e)+s}var ry=rr(function(e,s){return e+s},0),ay=Ja("ceil"),oy=rr(function(e,s){return e/s},1),ly=Ja("floor");function cy(e){return e&&e.length?Zs(e,mn,Ba):t}function uy(e,s){return e&&e.length?Zs(e,Y(s,2),Ba):t}function dy(e){return Ul(e,mn)}function _y(e,s){return Ul(e,Y(s,2))}function py(e){return e&&e.length?Zs(e,mn,Ca):t}function fy(e,s){return e&&e.length?Zs(e,Y(s,2),Ca):t}var hy=rr(function(e,s){return e*s},1),my=Ja("round"),gy=rr(function(e,s){return e-s},0);function Fy(e){return e&&e.length?Fa(e,mn):0}function Dy(e,s){return e&&e.length?Fa(e,Y(s,2)):0}return f.after=$g,f.ary=uu,f.assign=wF,f.assignIn=vu,f.assignInWith=Fr,f.assignWith=SF,f.at=BF,f.before=du,f.bind=io,f.bindAll=zD,f.bindKey=_u,f.castArray=Kg,f.chain=ou,f.chunk=lm,f.compact=cm,f.concat=um,f.cond=RD,f.conforms=kD,f.constant=uo,f.countBy=Fg,f.create=MF,f.curry=pu,f.curryRight=fu,f.debounce=hu,f.defaults=NF,f.defaultsDeep=OF,f.defer=qg,f.delay=Vg,f.difference=dm,f.differenceBy=_m,f.differenceWith=pm,f.drop=fm,f.dropRight=hm,f.dropRightWhile=mm,f.dropWhile=gm,f.fill=Fm,f.filter=yg,f.flatMap=Pg,f.flatMapDeep=vg,f.flatMapDepth=Eg,f.flatten=iu,f.flattenDeep=Dm,f.flattenDepth=ym,f.flip=jg,f.flow=UD,f.flowRight=LD,f.fromPairs=Am,f.functions=LF,f.functionsIn=$F,f.groupBy=Ig,f.initial=Pm,f.intersection=vm,f.intersectionBy=Em,f.intersectionWith=Im,f.invert=VF,f.invertBy=jF,f.invokeMap=wg,f.iteratee=_o,f.keyBy=Sg,f.keys=He,f.keysIn=hn,f.map=_r,f.mapKeys=GF,f.mapValues=YF,f.matches=$D,f.matchesProperty=qD,f.memoize=fr,f.merge=WF,f.mergeWith=Eu,f.method=VD,f.methodOf=jD,f.mixin=po,f.negate=hr,f.nthArg=GD,f.omit=QF,f.omitBy=HF,f.once=Jg,f.orderBy=Bg,f.over=YD,f.overArgs=Gg,f.overEvery=WD,f.overSome=QD,f.partial=so,f.partialRight=mu,f.partition=Mg,f.pick=XF,f.pickBy=Iu,f.property=Ou,f.propertyOf=HD,f.pull=Bm,f.pullAll=ru,f.pullAllBy=Mm,f.pullAllWith=Nm,f.pullAt=Om,f.range=XD,f.rangeRight=ZD,f.rearg=Yg,f.reject=Cg,f.remove=Cm,f.rest=Wg,f.reverse=no,f.sampleSize=Rg,f.set=KF,f.setWith=eD,f.shuffle=kg,f.slice=zm,f.sortBy=Lg,f.sortedUniq=qm,f.sortedUniqBy=Vm,f.split=PD,f.spread=Qg,f.tail=jm,f.take=Jm,f.takeRight=Gm,f.takeRightWhile=Ym,f.takeWhile=Wm,f.tap=cg,f.throttle=Hg,f.thru=dr,f.toArray=Au,f.toPairs=bu,f.toPairsIn=wu,f.toPath=iy,f.toPlainObject=Pu,f.transform=nD,f.unary=Xg,f.union=Qm,f.unionBy=Hm,f.unionWith=Xm,f.uniq=Zm,f.uniqBy=Km,f.uniqWith=eg,f.unset=tD,f.unzip=to,f.unzipWith=au,f.update=iD,f.updateWith=sD,f.values=Ci,f.valuesIn=rD,f.without=ng,f.words=Mu,f.wrap=Zg,f.xor=tg,f.xorBy=ig,f.xorWith=sg,f.zip=rg,f.zipObject=ag,f.zipObjectDeep=og,f.zipWith=lg,f.entries=bu,f.entriesIn=wu,f.extend=vu,f.extendWith=Fr,po(f,f),f.add=ry,f.attempt=Nu,f.camelCase=cD,f.capitalize=Su,f.ceil=ay,f.clamp=aD,f.clone=eF,f.cloneDeep=tF,f.cloneDeepWith=iF,f.cloneWith=nF,f.conformsTo=sF,f.deburr=Bu,f.defaultTo=xD,f.divide=oy,f.endsWith=uD,f.eq=Wn,f.escape=dD,f.escapeRegExp=_D,f.every=Dg,f.find=Ag,f.findIndex=nu,f.findKey=CF,f.findLast=Tg,f.findLastIndex=tu,f.findLastKey=zF,f.floor=ly,f.forEach=lu,f.forEachRight=cu,f.forIn=RF,f.forInRight=kF,f.forOwn=xF,f.forOwnRight=UF,f.get=oo,f.gt=rF,f.gte=aF,f.has=qF,f.hasIn=lo,f.head=su,f.identity=mn,f.includes=bg,f.indexOf=Tm,f.inRange=oD,f.invoke=JF,f.isArguments=oi,f.isArray=K,f.isArrayBuffer=oF,f.isArrayLike=fn,f.isArrayLikeObject=Ue,f.isBoolean=lF,f.isBuffer=Vt,f.isDate=cF,f.isElement=uF,f.isEmpty=dF,f.isEqual=_F,f.isEqualWith=pF,f.isError=ro,f.isFinite=fF,f.isFunction=Tt,f.isInteger=gu,f.isLength=mr,f.isMap=Fu,f.isMatch=hF,f.isMatchWith=mF,f.isNaN=gF,f.isNative=FF,f.isNil=yF,f.isNull=DF,f.isNumber=Du,f.isObject=Be,f.isObjectLike=ze,f.isPlainObject=as,f.isRegExp=ao,f.isSafeInteger=AF,f.isSet=yu,f.isString=gr,f.isSymbol=Pn,f.isTypedArray=Oi,f.isUndefined=TF,f.isWeakMap=PF,f.isWeakSet=vF,f.join=bm,f.kebabCase=pD,f.last=xn,f.lastIndexOf=wm,f.lowerCase=fD,f.lowerFirst=hD,f.lt=EF,f.lte=IF,f.max=cy,f.maxBy=uy,f.mean=dy,f.meanBy=_y,f.min=py,f.minBy=fy,f.stubArray=ho,f.stubFalse=mo,f.stubObject=KD,f.stubString=ey,f.stubTrue=ny,f.multiply=hy,f.nth=Sm,f.noConflict=JD,f.noop=fo,f.now=pr,f.pad=mD,f.padEnd=gD,f.padStart=FD,f.parseInt=DD,f.random=lD,f.reduce=Ng,f.reduceRight=Og,f.repeat=yD,f.replace=AD,f.result=ZF,f.round=my,f.runInContext=T,f.sample=zg,f.size=xg,f.snakeCase=TD,f.some=Ug,f.sortedIndex=Rm,f.sortedIndexBy=km,f.sortedIndexOf=xm,f.sortedLastIndex=Um,f.sortedLastIndexBy=Lm,f.sortedLastIndexOf=$m,f.startCase=vD,f.startsWith=ED,f.subtract=gy,f.sum=Fy,f.sumBy=Dy,f.template=ID,f.times=ty,f.toFinite=Pt,f.toInteger=ne,f.toLength=Tu,f.toLower=bD,f.toNumber=Un,f.toSafeInteger=bF,f.toString=he,f.toUpper=wD,f.trim=SD,f.trimEnd=BD,f.trimStart=MD,f.truncate=ND,f.unescape=OD,f.uniqueId=sy,f.upperCase=CD,f.upperFirst=co,f.each=lu,f.eachRight=cu,f.first=su,po(f,function(){var e={};return rt(f,function(s,l){me.call(f.prototype,l)||(e[l]=s)}),e}(),{chain:!1}),f.VERSION=r,On(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){f[e].placeholder=f}),On(["drop","take"],function(e,s){oe.prototype[e]=function(l){l=l===t?1:We(ne(l),0);var u=this.__filtered__&&!s?new oe(this):this.clone();return u.__filtered__?u.__takeCount__=sn(l,u.__takeCount__):u.__views__.push({size:sn(l,Bn),type:e+(u.__dir__<0?"Right":"")}),u},oe.prototype[e+"Right"]=function(l){return this.reverse()[e](l).reverse()}}),On(["filter","map","takeWhile"],function(e,s){var l=s+1,u=l==ws||l==Ss;oe.prototype[e]=function(p){var h=this.clone();return h.__iteratees__.push({iteratee:Y(p,3),type:l}),h.__filtered__=h.__filtered__||u,h}}),On(["head","last"],function(e,s){var l="take"+(s?"Right":"");oe.prototype[e]=function(){return this[l](1).value()[0]}}),On(["initial","tail"],function(e,s){var l="drop"+(s?"":"Right");oe.prototype[e]=function(){return this.__filtered__?new oe(this):this[l](1)}}),oe.prototype.compact=function(){return this.filter(mn)},oe.prototype.find=function(e){return this.filter(e).head()},oe.prototype.findLast=function(e){return this.reverse().find(e)},oe.prototype.invokeMap=ie(function(e,s){return typeof e=="function"?new oe(this):this.map(function(l){return es(l,e,s)})}),oe.prototype.reject=function(e){return this.filter(hr(Y(e)))},oe.prototype.slice=function(e,s){e=ne(e);var l=this;return l.__filtered__&&(e>0||s<0)?new oe(l):(e<0?l=l.takeRight(-e):e&&(l=l.drop(e)),s!==t&&(s=ne(s),l=s<0?l.dropRight(-s):l.take(s-e)),l)},oe.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},oe.prototype.toArray=function(){return this.take(Bn)},rt(oe.prototype,function(e,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),u=/^(?:head|last)$/.test(s),p=f[u?"take"+(s=="last"?"Right":""):s],h=u||/^find/.test(s);p&&(f.prototype[s]=function(){var F=this.__wrapped__,y=u?[1]:arguments,P=F instanceof oe,S=y[0],B=P||K(F),C=function(re){var ce=p.apply(f,Rt([re],y));return u&&k?ce[0]:ce};B&&l&&typeof S=="function"&&S.length!=1&&(P=B=!1);var k=this.__chain__,j=!!this.__actions__.length,W=h&&!k,te=P&&!j;if(!h&&B){F=te?F:new oe(this);var Q=e.apply(F,y);return Q.__actions__.push({func:dr,args:[C],thisArg:t}),new zn(Q,k)}return W&&te?e.apply(this,y):(Q=this.thru(C),W?u?Q.value()[0]:Q.value():Q)})}),On(["pop","push","shift","sort","splice","unshift"],function(e){var s=ks[e],l=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",u=/^(?:pop|shift)$/.test(e);f.prototype[e]=function(){var p=arguments;if(u&&!this.__chain__){var h=this.value();return s.apply(K(h)?h:[],p)}return this[l](function(F){return s.apply(K(F)?F:[],p)})}}),rt(oe.prototype,function(e,s){var l=f[s];if(l){var u=l.name+"";me.call(wi,u)||(wi[u]=[]),wi[u].push({name:s,func:l})}}),wi[sr(t,ue).name]=[{name:"wrapper",func:t}],oe.prototype.clone=Of,oe.prototype.reverse=Cf,oe.prototype.value=zf,f.prototype.at=ug,f.prototype.chain=dg,f.prototype.commit=_g,f.prototype.next=pg,f.prototype.plant=hg,f.prototype.reverse=mg,f.prototype.toJSON=f.prototype.valueOf=f.prototype.value=gg,f.prototype.first=f.prototype.head,Yi&&(f.prototype[Yi]=fg),f},Ei=_f();Kt?((Kt.exports=Ei)._=Ei,da._=Ei):Ke._=Ei}).call(cs)})(Mr,Mr.exports);var v0=Mr.exports;const St=P0(v0);function E0(){return{convert:i=>{if(i===null||i===void 0)return null;switch(typeof i){case"boolean":return i;case"string":{const n=i.toLowerCase().trim();return n==="true"||n==="t"||n==="1"}case"number":return i!==0;default:return null}},asString:i=>String(i),type:i=>i.boolean().optional()}}function In(i,n){const t=r=>n.convert(r[i]);return{name:I0(i),key:i,asEnv:r=>({[i]:n.asString(r)}),zod:{type:n.type},get:t,getOrDefault:(r,a)=>t(r)??a}}function I0(i){return i.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}In("MAGIDOC_GENERATE",E0());function yr(i){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(i(n)).optional()}}function nd(i){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(i(n).optional()).optional()}}function Ar(){return{convert:i=>i==null||i===""?null:String(i),asString:i=>String(i),type:i=>i.string().optional()}}function td(i){return{convert:n=>n==null||!i.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(i).optional()}}var Lr={APP_LOGO:In("APP_LOGO",Ar()),APP_TITLE:In("APP_TITLE",Ar()),APP_FAVICON:In("APP_FAVICON",Ar()),SITE_ROOT:In("SITE_ROOT",Ar()),SITE_META:In("SITE_META",nd(i=>i.string())),CUSTOM_STYLES:In("CUSTOM_STYLES",yr(i=>i.string())),FIELDS_SORTING:In("FIELDS_SORTING",td(["default","alphabetical"])),ARGUMENTS_SORTING:In("ARGUMENTS_SORTING",td(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:In("QUERY_GENERATION_FACTORIES",nd(i=>i.union([i.string(),i.boolean(),i.number(),i.null(),i.record(i.unknown())]))),PAGES:In("PAGES",yr(i=>{const n=i.lazy(()=>i.object({title:i.string().min(1),content:i.union([i.array(n),i.string().min(1)])}));return n})),EXTERNAL_LINKS:In("EXTERNAL_LINKS",yr(i=>i.object({label:i.string().min(1),href:i.string().min(1),position:i.union([i.literal("header"),i.literal("navigation")]).optional(),kind:i.string().min(1).optional(),group:i.string().min(1).optional()}))),DIRECTIVES:In("DIRECTIVES",yr(i=>i.object({name:i.string().min(1),args:i.array(i.string())})))};const b0=`{"EmailAddress":"foo@foo.com","JSONObject":"{ foo: 'bar' }"}`,w0="true",Ud={QUERY_GENERATION_FACTORIES:b0,MAGIDOC_GENERATE:w0};function Av(i){return i.get(Ud)}function $r(i,n){return i.getOrDefault(Ud,n)}function qr(){return $r(Lr.SITE_ROOT,Ey)}class S0{constructor(n){Fe(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var hs;(function(i){i.UNION="union",i.ARGUMENT="argument",i.FIELD="field"})(hs||(hs={}));function de(i,n){if(!!!i)throw new Error(n)}function Bt(i){return typeof i=="object"&&i!==null}function Zn(i,n){if(!!!i)throw new Error(n??"Unexpected invariant triggered.")}const B0=/\r\n|[\n\r]/g;function Io(i,n){let t=0,r=1;for(const a of i.body.matchAll(B0)){if(typeof a.index=="number"||Zn(!1),a.index>=n)break;t=a.index+a[0].length,r+=1}return{line:r,column:n+1-t}}function M0(i){return Ld(i.source,Io(i.source,i.start))}function Ld(i,n){const t=i.locationOffset.column-1,r="".padStart(t)+i.body,a=n.line-1,o=i.locationOffset.line-1,c=n.line+o,d=n.line===1?t:0,_=n.column+d,m=`${i.name}:${c}:${_}
`,g=r.split(/\r\n|[\n\r]/g),D=g[a];if(D.length>120){const N=Math.floor(_/80),b=_%80,w=[];for(let R=0;R<D.length;R+=80)w.push(D.slice(R,R+80));return m+id([[`${c} |`,w[0]],...w.slice(1,N+1).map(R=>["|",R]),["|","^".padStart(b)],["|",w[N+1]]])}return m+id([[`${c-1} |`,g[a-1]],[`${c} |`,D],["|","^".padStart(_)],[`${c+1} |`,g[a+1]]])}function id(i){const n=i.filter(([r,a])=>a!==void 0),t=Math.max(...n.map(([r])=>r.length));return n.map(([r,a])=>r.padStart(t)+(a?" "+a:"")).join(`
`)}function N0(i){const n=i[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:i[1],positions:i[2],path:i[3],originalError:i[4],extensions:i[5]}:n}class z extends Error{constructor(n,...t){var r,a,o;const{nodes:c,source:d,positions:_,path:m,originalError:g,extensions:D}=N0(t);super(n),this.name="GraphQLError",this.path=m??void 0,this.originalError=g??void 0,this.nodes=sd(Array.isArray(c)?c:c?[c]:void 0);const N=sd((r=this.nodes)===null||r===void 0?void 0:r.map(w=>w.loc).filter(w=>w!=null));this.source=d??(N==null||(a=N[0])===null||a===void 0?void 0:a.source),this.positions=_??(N==null?void 0:N.map(w=>w.start)),this.locations=_&&d?_.map(w=>Io(d,w)):N==null?void 0:N.map(w=>Io(w.source,w.start));const b=Bt(g==null?void 0:g.extensions)?g==null?void 0:g.extensions:void 0;this.extensions=(o=D??b)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),g!=null&&g.stack?Object.defineProperty(this,"stack",{value:g.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,z):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+M0(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+Ld(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function sd(i){return i===void 0||i.length===0?void 0:i}function Xe(i,n,t){return new z(`Syntax Error: ${t}`,{source:i,positions:[n]})}class O0{constructor(n,t,r){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class $d{constructor(n,t,r,a,o,c){this.kind=n,this.start=t,this.end=r,this.line=a,this.column=o,this.value=c,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const qd={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},C0=new Set(Object.keys(qd));function rd(i){const n=i==null?void 0:i.kind;return typeof n=="string"&&C0.has(n)}var $n;(function(i){i.QUERY="query",i.MUTATION="mutation",i.SUBSCRIPTION="subscription"})($n||($n={}));var G;(function(i){i.QUERY="QUERY",i.MUTATION="MUTATION",i.SUBSCRIPTION="SUBSCRIPTION",i.FIELD="FIELD",i.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",i.FRAGMENT_SPREAD="FRAGMENT_SPREAD",i.INLINE_FRAGMENT="INLINE_FRAGMENT",i.VARIABLE_DEFINITION="VARIABLE_DEFINITION",i.SCHEMA="SCHEMA",i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.FIELD_DEFINITION="FIELD_DEFINITION",i.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.ENUM_VALUE="ENUM_VALUE",i.INPUT_OBJECT="INPUT_OBJECT",i.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(G||(G={}));var A;(function(i){i.NAME="Name",i.DOCUMENT="Document",i.OPERATION_DEFINITION="OperationDefinition",i.VARIABLE_DEFINITION="VariableDefinition",i.SELECTION_SET="SelectionSet",i.FIELD="Field",i.ARGUMENT="Argument",i.FRAGMENT_SPREAD="FragmentSpread",i.INLINE_FRAGMENT="InlineFragment",i.FRAGMENT_DEFINITION="FragmentDefinition",i.VARIABLE="Variable",i.INT="IntValue",i.FLOAT="FloatValue",i.STRING="StringValue",i.BOOLEAN="BooleanValue",i.NULL="NullValue",i.ENUM="EnumValue",i.LIST="ListValue",i.OBJECT="ObjectValue",i.OBJECT_FIELD="ObjectField",i.DIRECTIVE="Directive",i.NAMED_TYPE="NamedType",i.LIST_TYPE="ListType",i.NON_NULL_TYPE="NonNullType",i.SCHEMA_DEFINITION="SchemaDefinition",i.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",i.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",i.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",i.FIELD_DEFINITION="FieldDefinition",i.INPUT_VALUE_DEFINITION="InputValueDefinition",i.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",i.UNION_TYPE_DEFINITION="UnionTypeDefinition",i.ENUM_TYPE_DEFINITION="EnumTypeDefinition",i.ENUM_VALUE_DEFINITION="EnumValueDefinition",i.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",i.DIRECTIVE_DEFINITION="DirectiveDefinition",i.SCHEMA_EXTENSION="SchemaExtension",i.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",i.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",i.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",i.UNION_TYPE_EXTENSION="UnionTypeExtension",i.ENUM_TYPE_EXTENSION="EnumTypeExtension",i.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(A||(A={}));function bo(i){return i===9||i===32}function ys(i){return i>=48&&i<=57}function Vd(i){return i>=97&&i<=122||i>=65&&i<=90}function Yo(i){return Vd(i)||i===95}function jd(i){return Vd(i)||ys(i)||i===95}function z0(i){var n;let t=Number.MAX_SAFE_INTEGER,r=null,a=-1;for(let c=0;c<i.length;++c){var o;const d=i[c],_=R0(d);_!==d.length&&(r=(o=r)!==null&&o!==void 0?o:c,a=c,c!==0&&_<t&&(t=_))}return i.map((c,d)=>d===0?c:c.slice(t)).slice((n=r)!==null&&n!==void 0?n:0,a+1)}function R0(i){let n=0;for(;n<i.length&&bo(i.charCodeAt(n));)++n;return n}function k0(i,n){const t=i.replace(/"""/g,'\\"""'),r=t.split(/\r\n|[\n\r]/g),a=r.length===1,o=r.length>1&&r.slice(1).every(b=>b.length===0||bo(b.charCodeAt(0))),c=t.endsWith('\\"""'),d=i.endsWith('"')&&!c,_=i.endsWith("\\"),m=d||_,g=!a||i.length>70||m||o||c;let D="";const N=a&&bo(i.charCodeAt(0));return(g&&!N||o)&&(D+=`
`),D+=t,(g||m)&&(D+=`
`),'"""'+D+'"""'}var M;(function(i){i.SOF="<SOF>",i.EOF="<EOF>",i.BANG="!",i.DOLLAR="$",i.AMP="&",i.PAREN_L="(",i.PAREN_R=")",i.SPREAD="...",i.COLON=":",i.EQUALS="=",i.AT="@",i.BRACKET_L="[",i.BRACKET_R="]",i.BRACE_L="{",i.PIPE="|",i.BRACE_R="}",i.NAME="Name",i.INT="Int",i.FLOAT="Float",i.STRING="String",i.BLOCK_STRING="BlockString",i.COMMENT="Comment"})(M||(M={}));class x0{constructor(n){const t=new $d(M.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==M.EOF)do if(n.next)n=n.next;else{const t=L0(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===M.COMMENT);return n}}function U0(i){return i===M.BANG||i===M.DOLLAR||i===M.AMP||i===M.PAREN_L||i===M.PAREN_R||i===M.SPREAD||i===M.COLON||i===M.EQUALS||i===M.AT||i===M.BRACKET_L||i===M.BRACKET_R||i===M.BRACE_L||i===M.PIPE||i===M.BRACE_R}function xi(i){return i>=0&&i<=55295||i>=57344&&i<=1114111}function Vr(i,n){return Jd(i.charCodeAt(n))&&Gd(i.charCodeAt(n+1))}function Jd(i){return i>=55296&&i<=56319}function Gd(i){return i>=56320&&i<=57343}function _i(i,n){const t=i.source.body.codePointAt(n);if(t===void 0)return M.EOF;if(t>=32&&t<=126){const r=String.fromCodePoint(t);return r==='"'?`'"'`:`"${r}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function Ve(i,n,t,r,a){const o=i.line,c=1+t-i.lineStart;return new $d(n,t,r,o,c,a)}function L0(i,n){const t=i.source.body,r=t.length;let a=n;for(;a<r;){const o=t.charCodeAt(a);switch(o){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++i.line,i.lineStart=a;continue;case 13:t.charCodeAt(a+1)===10?a+=2:++a,++i.line,i.lineStart=a;continue;case 35:return $0(i,a);case 33:return Ve(i,M.BANG,a,a+1);case 36:return Ve(i,M.DOLLAR,a,a+1);case 38:return Ve(i,M.AMP,a,a+1);case 40:return Ve(i,M.PAREN_L,a,a+1);case 41:return Ve(i,M.PAREN_R,a,a+1);case 46:if(t.charCodeAt(a+1)===46&&t.charCodeAt(a+2)===46)return Ve(i,M.SPREAD,a,a+3);break;case 58:return Ve(i,M.COLON,a,a+1);case 61:return Ve(i,M.EQUALS,a,a+1);case 64:return Ve(i,M.AT,a,a+1);case 91:return Ve(i,M.BRACKET_L,a,a+1);case 93:return Ve(i,M.BRACKET_R,a,a+1);case 123:return Ve(i,M.BRACE_L,a,a+1);case 124:return Ve(i,M.PIPE,a,a+1);case 125:return Ve(i,M.BRACE_R,a,a+1);case 34:return t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34?Y0(i,a):V0(i,a)}if(ys(o)||o===45)return q0(i,a,o);if(Yo(o))return W0(i,a);throw Xe(i.source,a,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:xi(o)||Vr(t,a)?`Unexpected character: ${_i(i,a)}.`:`Invalid character: ${_i(i,a)}.`)}return Ve(i,M.EOF,r,r)}function $0(i,n){const t=i.source.body,r=t.length;let a=n+1;for(;a<r;){const o=t.charCodeAt(a);if(o===10||o===13)break;if(xi(o))++a;else if(Vr(t,a))a+=2;else break}return Ve(i,M.COMMENT,n,a,t.slice(n+1,a))}function q0(i,n,t){const r=i.source.body;let a=n,o=t,c=!1;if(o===45&&(o=r.charCodeAt(++a)),o===48){if(o=r.charCodeAt(++a),ys(o))throw Xe(i.source,a,`Invalid number, unexpected digit after 0: ${_i(i,a)}.`)}else a=Do(i,a,o),o=r.charCodeAt(a);if(o===46&&(c=!0,o=r.charCodeAt(++a),a=Do(i,a,o),o=r.charCodeAt(a)),(o===69||o===101)&&(c=!0,o=r.charCodeAt(++a),(o===43||o===45)&&(o=r.charCodeAt(++a)),a=Do(i,a,o),o=r.charCodeAt(a)),o===46||Yo(o))throw Xe(i.source,a,`Invalid number, expected digit but got: ${_i(i,a)}.`);return Ve(i,c?M.FLOAT:M.INT,n,a,r.slice(n,a))}function Do(i,n,t){if(!ys(t))throw Xe(i.source,n,`Invalid number, expected digit but got: ${_i(i,n)}.`);const r=i.source.body;let a=n+1;for(;ys(r.charCodeAt(a));)++a;return a}function V0(i,n){const t=i.source.body,r=t.length;let a=n+1,o=a,c="";for(;a<r;){const d=t.charCodeAt(a);if(d===34)return c+=t.slice(o,a),Ve(i,M.STRING,n,a+1,c);if(d===92){c+=t.slice(o,a);const _=t.charCodeAt(a+1)===117?t.charCodeAt(a+2)===123?j0(i,a):J0(i,a):G0(i,a);c+=_.value,a+=_.size,o=a;continue}if(d===10||d===13)break;if(xi(d))++a;else if(Vr(t,a))a+=2;else throw Xe(i.source,a,`Invalid character within String: ${_i(i,a)}.`)}throw Xe(i.source,a,"Unterminated string.")}function j0(i,n){const t=i.source.body;let r=0,a=3;for(;a<12;){const o=t.charCodeAt(n+a++);if(o===125){if(a<5||!xi(r))break;return{value:String.fromCodePoint(r),size:a}}if(r=r<<4|us(o),r<0)break}throw Xe(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+a)}".`)}function J0(i,n){const t=i.source.body,r=ad(t,n+2);if(xi(r))return{value:String.fromCodePoint(r),size:6};if(Jd(r)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const a=ad(t,n+8);if(Gd(a))return{value:String.fromCodePoint(r,a),size:12}}throw Xe(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function ad(i,n){return us(i.charCodeAt(n))<<12|us(i.charCodeAt(n+1))<<8|us(i.charCodeAt(n+2))<<4|us(i.charCodeAt(n+3))}function us(i){return i>=48&&i<=57?i-48:i>=65&&i<=70?i-55:i>=97&&i<=102?i-87:-1}function G0(i,n){const t=i.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Xe(i.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function Y0(i,n){const t=i.source.body,r=t.length;let a=i.lineStart,o=n+3,c=o,d="";const _=[];for(;o<r;){const m=t.charCodeAt(o);if(m===34&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34){d+=t.slice(c,o),_.push(d);const g=Ve(i,M.BLOCK_STRING,n,o+3,z0(_).join(`
`));return i.line+=_.length-1,i.lineStart=a,g}if(m===92&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34&&t.charCodeAt(o+3)===34){d+=t.slice(c,o),c=o+1,o+=4;continue}if(m===10||m===13){d+=t.slice(c,o),_.push(d),m===13&&t.charCodeAt(o+1)===10?o+=2:++o,d="",c=o,a=o;continue}if(xi(m))++o;else if(Vr(t,o))o+=2;else throw Xe(i.source,o,`Invalid character within String: ${_i(i,o)}.`)}throw Xe(i.source,o,"Unterminated string.")}function W0(i,n){const t=i.source.body,r=t.length;let a=n+1;for(;a<r;){const o=t.charCodeAt(a);if(jd(o))++a;else break}return Ve(i,M.NAME,n,a,t.slice(n,a))}const Q0=10,Yd=2;function U(i){return jr(i,[])}function jr(i,n){switch(typeof i){case"string":return JSON.stringify(i);case"function":return i.name?`[function ${i.name}]`:"[function]";case"object":return H0(i,n);default:return String(i)}}function H0(i,n){if(i===null)return"null";if(n.includes(i))return"[Circular]";const t=[...n,i];if(X0(i)){const r=i.toJSON();if(r!==i)return typeof r=="string"?r:jr(r,t)}else if(Array.isArray(i))return K0(i,t);return Z0(i,t)}function X0(i){return typeof i.toJSON=="function"}function Z0(i,n){const t=Object.entries(i);return t.length===0?"{}":n.length>Yd?"["+eT(i)+"]":"{ "+t.map(([a,o])=>a+": "+jr(o,n)).join(", ")+" }"}function K0(i,n){if(i.length===0)return"[]";if(n.length>Yd)return"[Array]";const t=Math.min(Q0,i.length),r=i.length-t,a=[];for(let o=0;o<t;++o)a.push(jr(i[o],n));return r===1?a.push("... 1 more item"):r>1&&a.push(`... ${r} more items`),"["+a.join(", ")+"]"}function eT(i){const n=Object.prototype.toString.call(i).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof i.constructor=="function"){const t=i.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const nT=globalThis.process&&!0,_t=nT?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var r;const a=t.prototype[Symbol.toStringTag],o=Symbol.toStringTag in n?n[Symbol.toStringTag]:(r=n.constructor)===null||r===void 0?void 0:r.name;if(a===o){const c=U(n);throw new Error(`Cannot use ${a} "${c}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class Wd{constructor(n,t="GraphQL request",r={line:1,column:1}){typeof n=="string"||de(!1,`Body must be a string. Received: ${U(n)}.`),this.body=n,this.name=t,this.locationOffset=r,this.locationOffset.line>0||de(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||de(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function tT(i){return _t(i,Wd)}function iT(i,n){return new Qd(i,n).parseDocument()}function sT(i,n){const t=new Qd(i,n);t.expectToken(M.SOF);const r=t.parseValueLiteral(!1);return t.expectToken(M.EOF),r}class Qd{constructor(n,t={}){const r=tT(n)?n:new Wd(n);this._lexer=new x0(r),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(M.NAME);return this.node(n,{kind:A.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:A.DOCUMENT,definitions:this.many(M.SOF,this.parseDefinition,M.EOF)})}parseDefinition(){if(this.peek(M.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===M.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw Xe(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(M.BRACE_L))return this.node(n,{kind:A.OPERATION_DEFINITION,operation:$n.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let r;return this.peek(M.NAME)&&(r=this.parseName()),this.node(n,{kind:A.OPERATION_DEFINITION,operation:t,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(M.NAME);switch(n.value){case"query":return $n.QUERY;case"mutation":return $n.MUTATION;case"subscription":return $n.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(M.PAREN_L,this.parseVariableDefinition,M.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:A.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(M.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(M.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(M.DOLLAR),this.node(n,{kind:A.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:A.SELECTION_SET,selections:this.many(M.BRACE_L,this.parseSelection,M.BRACE_R)})}parseSelection(){return this.peek(M.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let r,a;return this.expectOptionalToken(M.COLON)?(r=t,a=this.parseName()):a=t,this.node(n,{kind:A.FIELD,alias:r,name:a,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(M.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(M.PAREN_L,t,M.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,r=this.parseName();return this.expectToken(M.COLON),this.node(t,{kind:A.ARGUMENT,name:r,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(M.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(M.NAME)?this.node(n,{kind:A.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:A.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:A.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:A.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case M.BRACKET_L:return this.parseList(n);case M.BRACE_L:return this.parseObject(n);case M.INT:return this.advanceLexer(),this.node(t,{kind:A.INT,value:t.value});case M.FLOAT:return this.advanceLexer(),this.node(t,{kind:A.FLOAT,value:t.value});case M.STRING:case M.BLOCK_STRING:return this.parseStringLiteral();case M.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:A.BOOLEAN,value:!0});case"false":return this.node(t,{kind:A.BOOLEAN,value:!1});case"null":return this.node(t,{kind:A.NULL});default:return this.node(t,{kind:A.ENUM,value:t.value})}case M.DOLLAR:if(n)if(this.expectToken(M.DOLLAR),this._lexer.token.kind===M.NAME){const r=this._lexer.token.value;throw Xe(this._lexer.source,t.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:A.STRING,value:n.value,block:n.kind===M.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:A.LIST,values:this.any(M.BRACKET_L,t,M.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:A.OBJECT,fields:this.any(M.BRACE_L,t,M.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,r=this.parseName();return this.expectToken(M.COLON),this.node(t,{kind:A.OBJECT_FIELD,name:r,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(M.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(M.AT),this.node(t,{kind:A.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(M.BRACKET_L)){const r=this.parseTypeReference();this.expectToken(M.BRACKET_R),t=this.node(n,{kind:A.LIST_TYPE,type:r})}else t=this.parseNamedType();return this.expectOptionalToken(M.BANG)?this.node(n,{kind:A.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:A.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(M.STRING)||this.peek(M.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const r=this.parseConstDirectives(),a=this.many(M.BRACE_L,this.parseOperationTypeDefinition,M.BRACE_R);return this.node(n,{kind:A.SCHEMA_DEFINITION,description:t,directives:r,operationTypes:a})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(M.COLON);const r=this.parseNamedType();return this.node(n,{kind:A.OPERATION_TYPE_DEFINITION,operation:t,type:r})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const r=this.parseName(),a=this.parseConstDirectives();return this.node(n,{kind:A.SCALAR_TYPE_DEFINITION,description:t,name:r,directives:a})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const r=this.parseName(),a=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(n,{kind:A.OBJECT_TYPE_DEFINITION,description:t,name:r,interfaces:a,directives:o,fields:c})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(M.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(M.BRACE_L,this.parseFieldDefinition,M.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),r=this.parseName(),a=this.parseArgumentDefs();this.expectToken(M.COLON);const o=this.parseTypeReference(),c=this.parseConstDirectives();return this.node(n,{kind:A.FIELD_DEFINITION,description:t,name:r,arguments:a,type:o,directives:c})}parseArgumentDefs(){return this.optionalMany(M.PAREN_L,this.parseInputValueDef,M.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),r=this.parseName();this.expectToken(M.COLON);const a=this.parseTypeReference();let o;this.expectOptionalToken(M.EQUALS)&&(o=this.parseConstValueLiteral());const c=this.parseConstDirectives();return this.node(n,{kind:A.INPUT_VALUE_DEFINITION,description:t,name:r,type:a,defaultValue:o,directives:c})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const r=this.parseName(),a=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(n,{kind:A.INTERFACE_TYPE_DEFINITION,description:t,name:r,interfaces:a,directives:o,fields:c})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const r=this.parseName(),a=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(n,{kind:A.UNION_TYPE_DEFINITION,description:t,name:r,directives:a,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(M.EQUALS)?this.delimitedMany(M.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const r=this.parseName(),a=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(n,{kind:A.ENUM_TYPE_DEFINITION,description:t,name:r,directives:a,values:o})}parseEnumValuesDefinition(){return this.optionalMany(M.BRACE_L,this.parseEnumValueDefinition,M.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),r=this.parseEnumValueName(),a=this.parseConstDirectives();return this.node(n,{kind:A.ENUM_VALUE_DEFINITION,description:t,name:r,directives:a})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Xe(this._lexer.source,this._lexer.token.start,`${Tr(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const r=this.parseName(),a=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(n,{kind:A.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:r,directives:a,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(M.BRACE_L,this.parseInputValueDef,M.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===M.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),r=this.optionalMany(M.BRACE_L,this.parseOperationTypeDefinition,M.BRACE_R);if(t.length===0&&r.length===0)throw this.unexpected();return this.node(n,{kind:A.SCHEMA_EXTENSION,directives:t,operationTypes:r})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(n,{kind:A.SCALAR_TYPE_EXTENSION,name:t,directives:r})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),r=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(r.length===0&&a.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:A.OBJECT_TYPE_EXTENSION,name:t,interfaces:r,directives:a,fields:o})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),r=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(r.length===0&&a.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:A.INTERFACE_TYPE_EXTENSION,name:t,interfaces:r,directives:a,fields:o})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),r=this.parseConstDirectives(),a=this.parseUnionMemberTypes();if(r.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:A.UNION_TYPE_EXTENSION,name:t,directives:r,types:a})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),r=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();if(r.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:A.ENUM_TYPE_EXTENSION,name:t,directives:r,values:a})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),r=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();if(r.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:A.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:r,fields:a})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(M.AT);const r=this.parseName(),a=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const c=this.parseDirectiveLocations();return this.node(n,{kind:A.DIRECTIVE_DEFINITION,description:t,name:r,arguments:a,repeatable:o,locations:c})}parseDirectiveLocations(){return this.delimitedMany(M.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(G,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new O0(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw Xe(this._lexer.source,t.start,`Expected ${Hd(n)}, found ${Tr(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===M.NAME&&t.value===n)this.advanceLexer();else throw Xe(this._lexer.source,t.start,`Expected "${n}", found ${Tr(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===M.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return Xe(this._lexer.source,t.start,`Unexpected ${Tr(t)}.`)}any(n,t,r){this.expectToken(n);const a=[];for(;!this.expectOptionalToken(r);)a.push(t.call(this));return a}optionalMany(n,t,r){if(this.expectOptionalToken(n)){const a=[];do a.push(t.call(this));while(!this.expectOptionalToken(r));return a}return[]}many(n,t,r){this.expectToken(n);const a=[];do a.push(t.call(this));while(!this.expectOptionalToken(r));return a}delimitedMany(n,t){this.expectOptionalToken(n);const r=[];do r.push(t.call(this));while(this.expectOptionalToken(n));return r}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==M.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw Xe(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function Tr(i){const n=i.value;return Hd(i.kind)+(n!=null?` "${n}"`:"")}function Hd(i){return U0(i)?`"${i}"`:i}const rT=5;function Wt(i,n){const[t,r]=n?[i,n]:[void 0,i];let a=" Did you mean ";t&&(a+=t+" ");const o=r.map(_=>`"${_}"`);switch(o.length){case 0:return"";case 1:return a+o[0]+"?";case 2:return a+o[0]+" or "+o[1]+"?"}const c=o.slice(0,rT),d=c.pop();return a+c.join(", ")+", or "+d+"?"}function od(i){return i}function pi(i,n){const t=Object.create(null);for(const r of i)t[n(r)]=r;return t}function ci(i,n,t){const r=Object.create(null);for(const a of i)r[n(a)]=t(a);return r}function Et(i,n){const t=Object.create(null);for(const r of Object.keys(i))t[r]=n(i[r],r);return t}function Wo(i,n){let t=0,r=0;for(;t<i.length&&r<n.length;){let a=i.charCodeAt(t),o=n.charCodeAt(r);if(Pr(a)&&Pr(o)){let c=0;do++t,c=c*10+a-wo,a=i.charCodeAt(t);while(Pr(a)&&c>0);let d=0;do++r,d=d*10+o-wo,o=n.charCodeAt(r);while(Pr(o)&&d>0);if(c<d)return-1;if(c>d)return 1}else{if(a<o)return-1;if(a>o)return 1;++t,++r}}return i.length-n.length}const wo=48,aT=57;function Pr(i){return!isNaN(i)&&wo<=i&&i<=aT}function gi(i,n){const t=Object.create(null),r=new oT(i),a=Math.floor(i.length*.4)+1;for(const o of n){const c=r.measure(o,a);c!==void 0&&(t[o]=c)}return Object.keys(t).sort((o,c)=>{const d=t[o]-t[c];return d!==0?d:Wo(o,c)})}class oT{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=ld(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const r=n.toLowerCase();if(this._inputLowerCase===r)return 1;let a=ld(r),o=this._inputArray;if(a.length<o.length){const g=a;a=o,o=g}const c=a.length,d=o.length;if(c-d>t)return;const _=this._rows;for(let g=0;g<=d;g++)_[0][g]=g;for(let g=1;g<=c;g++){const D=_[(g-1)%3],N=_[g%3];let b=N[0]=g;for(let w=1;w<=d;w++){const R=a[g-1]===o[w-1]?0:1;let J=Math.min(D[w]+1,N[w-1]+1,D[w-1]+R);if(g>1&&w>1&&a[g-1]===o[w-2]&&a[g-2]===o[w-1]){const ue=_[(g-2)%3][w-2];J=Math.min(J,ue+1)}J<b&&(b=J),N[w]=J}if(b>t)return}const m=_[c%3][d];return m<=t?m:void 0}}function ld(i){const n=i.length,t=new Array(n);for(let r=0;r<n;++r)t[r]=i.charCodeAt(r);return t}function Vn(i){if(i==null)return Object.create(null);if(Object.getPrototypeOf(i)===null)return i;const n=Object.create(null);for(const[t,r]of Object.entries(i))n[t]=r;return n}function lT(i){return`"${i.replace(cT,uT)}"`}const cT=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function uT(i){return dT[i.charCodeAt(0)]}const dT=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],ds=Object.freeze({});function Xd(i,n,t=qd){const r=new Map;for(const ue of Object.values(A))r.set(ue,Zd(n,ue));let a,o=Array.isArray(i),c=[i],d=-1,_=[],m=i,g,D;const N=[],b=[];do{d++;const ue=d===c.length,Ie=ue&&_.length!==0;if(ue){if(g=b.length===0?void 0:N[N.length-1],m=D,D=b.pop(),Ie)if(o){m=m.slice();let Oe=0;for(const[Ge,Qe]of _){const Ce=Ge-Oe;Qe===null?(m.splice(Ce,1),Oe++):m[Ce]=Qe}}else{m=Object.defineProperties({},Object.getOwnPropertyDescriptors(m));for(const[Oe,Ge]of _)m[Oe]=Ge}d=a.index,c=a.keys,_=a.edits,o=a.inArray,a=a.prev}else if(D){if(g=o?d:c[d],m=D[g],m==null)continue;N.push(g)}let ge;if(!Array.isArray(m)){var w,R;rd(m)||de(!1,`Invalid AST Node: ${U(m)}.`);const Oe=ue?(w=r.get(m.kind))===null||w===void 0?void 0:w.leave:(R=r.get(m.kind))===null||R===void 0?void 0:R.enter;if(ge=Oe==null?void 0:Oe.call(n,m,g,D,N,b),ge===ds)break;if(ge===!1){if(!ue){N.pop();continue}}else if(ge!==void 0&&(_.push([g,ge]),!ue))if(rd(ge))m=ge;else{N.pop();continue}}if(ge===void 0&&Ie&&_.push([g,m]),ue)N.pop();else{var J;a={inArray:o,index:d,keys:c,edits:_,prev:a},o=Array.isArray(m),c=o?m:(J=t[m.kind])!==null&&J!==void 0?J:[],d=-1,_=[],D&&b.push(D),D=m}}while(a!==void 0);return _.length!==0?_[_.length-1][1]:i}function _T(i){const n=new Array(i.length).fill(null),t=Object.create(null);for(const r of Object.values(A)){let a=!1;const o=new Array(i.length).fill(void 0),c=new Array(i.length).fill(void 0);for(let _=0;_<i.length;++_){const{enter:m,leave:g}=Zd(i[_],r);a||(a=m!=null||g!=null),o[_]=m,c[_]=g}if(!a)continue;const d={enter(..._){const m=_[0];for(let D=0;D<i.length;D++)if(n[D]===null){var g;const N=(g=o[D])===null||g===void 0?void 0:g.apply(i[D],_);if(N===!1)n[D]=m;else if(N===ds)n[D]=ds;else if(N!==void 0)return N}},leave(..._){const m=_[0];for(let D=0;D<i.length;D++)if(n[D]===null){var g;const N=(g=c[D])===null||g===void 0?void 0:g.apply(i[D],_);if(N===ds)n[D]=ds;else if(N!==void 0&&N!==!1)return N}else n[D]===m&&(n[D]=null)}};t[r]=d}return t}function Zd(i,n){const t=i[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:i.enter,leave:i.leave}}function Ze(i){return Xd(i,fT)}const pT=80,fT={Name:{leave:i=>i.value},Variable:{leave:i=>"$"+i.name},Document:{leave:i=>V(i.definitions,`

`)},OperationDefinition:{leave(i){const n=le("(",V(i.variableDefinitions,", "),")"),t=V([i.operation,V([i.name,n]),V(i.directives," ")]," ");return(t==="query"?"":t+" ")+i.selectionSet}},VariableDefinition:{leave:({variable:i,type:n,defaultValue:t,directives:r})=>i+": "+n+le(" = ",t)+le(" ",V(r," "))},SelectionSet:{leave:({selections:i})=>Hn(i)},Field:{leave({alias:i,name:n,arguments:t,directives:r,selectionSet:a}){const o=le("",i,": ")+n;let c=o+le("(",V(t,", "),")");return c.length>pT&&(c=o+le(`(
`,Ir(V(t,`
`)),`
)`)),V([c,V(r," "),a]," ")}},Argument:{leave:({name:i,value:n})=>i+": "+n},FragmentSpread:{leave:({name:i,directives:n})=>"..."+i+le(" ",V(n," "))},InlineFragment:{leave:({typeCondition:i,directives:n,selectionSet:t})=>V(["...",le("on ",i),V(n," "),t]," ")},FragmentDefinition:{leave:({name:i,typeCondition:n,variableDefinitions:t,directives:r,selectionSet:a})=>`fragment ${i}${le("(",V(t,", "),")")} on ${n} ${le("",V(r," ")," ")}`+a},IntValue:{leave:({value:i})=>i},FloatValue:{leave:({value:i})=>i},StringValue:{leave:({value:i,block:n})=>n?k0(i):lT(i)},BooleanValue:{leave:({value:i})=>i?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:i})=>i},ListValue:{leave:({values:i})=>"["+V(i,", ")+"]"},ObjectValue:{leave:({fields:i})=>"{"+V(i,", ")+"}"},ObjectField:{leave:({name:i,value:n})=>i+": "+n},Directive:{leave:({name:i,arguments:n})=>"@"+i+le("(",V(n,", "),")")},NamedType:{leave:({name:i})=>i},ListType:{leave:({type:i})=>"["+i+"]"},NonNullType:{leave:({type:i})=>i+"!"},SchemaDefinition:{leave:({description:i,directives:n,operationTypes:t})=>le("",i,`
`)+V(["schema",V(n," "),Hn(t)]," ")},OperationTypeDefinition:{leave:({operation:i,type:n})=>i+": "+n},ScalarTypeDefinition:{leave:({description:i,name:n,directives:t})=>le("",i,`
`)+V(["scalar",n,V(t," ")]," ")},ObjectTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:r,fields:a})=>le("",i,`
`)+V(["type",n,le("implements ",V(t," & ")),V(r," "),Hn(a)]," ")},FieldDefinition:{leave:({description:i,name:n,arguments:t,type:r,directives:a})=>le("",i,`
`)+n+(cd(t)?le(`(
`,Ir(V(t,`
`)),`
)`):le("(",V(t,", "),")"))+": "+r+le(" ",V(a," "))},InputValueDefinition:{leave:({description:i,name:n,type:t,defaultValue:r,directives:a})=>le("",i,`
`)+V([n+": "+t,le("= ",r),V(a," ")]," ")},InterfaceTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:r,fields:a})=>le("",i,`
`)+V(["interface",n,le("implements ",V(t," & ")),V(r," "),Hn(a)]," ")},UnionTypeDefinition:{leave:({description:i,name:n,directives:t,types:r})=>le("",i,`
`)+V(["union",n,V(t," "),le("= ",V(r," | "))]," ")},EnumTypeDefinition:{leave:({description:i,name:n,directives:t,values:r})=>le("",i,`
`)+V(["enum",n,V(t," "),Hn(r)]," ")},EnumValueDefinition:{leave:({description:i,name:n,directives:t})=>le("",i,`
`)+V([n,V(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:i,name:n,directives:t,fields:r})=>le("",i,`
`)+V(["input",n,V(t," "),Hn(r)]," ")},DirectiveDefinition:{leave:({description:i,name:n,arguments:t,repeatable:r,locations:a})=>le("",i,`
`)+"directive @"+n+(cd(t)?le(`(
`,Ir(V(t,`
`)),`
)`):le("(",V(t,", "),")"))+(r?" repeatable":"")+" on "+V(a," | ")},SchemaExtension:{leave:({directives:i,operationTypes:n})=>V(["extend schema",V(i," "),Hn(n)]," ")},ScalarTypeExtension:{leave:({name:i,directives:n})=>V(["extend scalar",i,V(n," ")]," ")},ObjectTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:r})=>V(["extend type",i,le("implements ",V(n," & ")),V(t," "),Hn(r)]," ")},InterfaceTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:r})=>V(["extend interface",i,le("implements ",V(n," & ")),V(t," "),Hn(r)]," ")},UnionTypeExtension:{leave:({name:i,directives:n,types:t})=>V(["extend union",i,V(n," "),le("= ",V(t," | "))]," ")},EnumTypeExtension:{leave:({name:i,directives:n,values:t})=>V(["extend enum",i,V(n," "),Hn(t)]," ")},InputObjectTypeExtension:{leave:({name:i,directives:n,fields:t})=>V(["extend input",i,V(n," "),Hn(t)]," ")}};function V(i,n=""){var t;return(t=i==null?void 0:i.filter(r=>r).join(n))!==null&&t!==void 0?t:""}function Hn(i){return le(`{
`,Ir(V(i,`
`)),`
}`)}function le(i,n,t=""){return n!=null&&n!==""?i+n+t:""}function Ir(i){return le("  ",i.replace(/\n/g,`
  `))}function cd(i){var n;return(n=i==null?void 0:i.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function So(i,n){switch(i.kind){case A.NULL:return null;case A.INT:return parseInt(i.value,10);case A.FLOAT:return parseFloat(i.value);case A.STRING:case A.ENUM:case A.BOOLEAN:return i.value;case A.LIST:return i.values.map(t=>So(t,n));case A.OBJECT:return ci(i.fields,t=>t.name.value,t=>So(t.value,n));case A.VARIABLE:return n==null?void 0:n[i.name.value]}}function st(i){if(i!=null||de(!1,"Must provide name."),typeof i=="string"||de(!1,"Expected name to be a string."),i.length===0)throw new z("Expected name to be a non-empty string.");for(let n=1;n<i.length;++n)if(!jd(i.charCodeAt(n)))throw new z(`Names must only contain [_a-zA-Z0-9] but "${i}" does not.`);if(!Yo(i.charCodeAt(0)))throw new z(`Names must start with [_a-zA-Z] but "${i}" does not.`);return i}function hT(i){if(i==="true"||i==="false"||i==="null")throw new z(`Enum values cannot be named: ${i}`);return st(i)}function Qo(i){return Qt(i)||Je(i)||qe(i)||qn(i)||Kn(i)||Fn(i)||Dn(i)||Ee(i)}function Qt(i){return _t(i,Mt)}function Je(i){return _t(i,ut)}function mT(i){if(!Je(i))throw new Error(`Expected ${U(i)} to be a GraphQL Object type.`);return i}function qe(i){return _t(i,Nr)}function gT(i){if(!qe(i))throw new Error(`Expected ${U(i)} to be a GraphQL Interface type.`);return i}function qn(i){return _t(i,Or)}function Kn(i){return _t(i,ki)}function Fn(i){return _t(i,Cr)}function Dn(i){return _t(i,dn)}function Ee(i){return _t(i,se)}function Ho(i){return Qt(i)||Kn(i)||Fn(i)||Xo(i)&&Ho(i.ofType)}function Kd(i){return Qt(i)||Je(i)||qe(i)||qn(i)||Kn(i)||Xo(i)&&Kd(i.ofType)}function Ri(i){return Qt(i)||Kn(i)}function As(i){return Je(i)||qe(i)||qn(i)}function ui(i){return qe(i)||qn(i)}class dn{constructor(n){Qo(n)||de(!1,`Expected ${U(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class se{constructor(n){e_(n)||de(!1,`Expected ${U(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Xo(i){return Dn(i)||Ee(i)}function e_(i){return Qo(i)&&!Ee(i)}function FT(i){if(!e_(i))throw new Error(`Expected ${U(i)} to be a GraphQL nullable type.`);return i}function DT(i){if(i)return Ee(i)?i.ofType:i}function Tv(i){return Qt(i)||Je(i)||qe(i)||qn(i)||Kn(i)||Fn(i)}function fi(i){if(i){let n=i;for(;Xo(n);)n=n.ofType;return n}}function n_(i){return typeof i=="function"?i():i}function t_(i){return typeof i=="function"?i():i}class Mt{constructor(n){var t,r,a,o;const c=(t=n.parseValue)!==null&&t!==void 0?t:od;this.name=st(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(r=n.serialize)!==null&&r!==void 0?r:od,this.parseValue=c,this.parseLiteral=(a=n.parseLiteral)!==null&&a!==void 0?a:(d,_)=>c(So(d,_)),this.extensions=Vn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(o=n.extensionASTNodes)!==null&&o!==void 0?o:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||de(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${U(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||de(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||de(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class ut{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=Vn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>s_(n),this._interfaces=()=>i_(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||de(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${U(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:a_(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function i_(i){var n;const t=n_((n=i.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||de(!1,`${i.name} interfaces must be an Array or a function which returns an Array.`),t}function s_(i){const n=t_(i.fields);return zi(n)||de(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),Et(n,(t,r)=>{var a;zi(t)||de(!1,`${i.name}.${r} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||de(!1,`${i.name}.${r} field resolver must be a function if provided, but got: ${U(t.resolve)}.`);const o=(a=t.args)!==null&&a!==void 0?a:{};return zi(o)||de(!1,`${i.name}.${r} args must be an object with argument names as keys.`),{name:st(r),description:t.description,type:t.type,args:r_(o),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Vn(t.extensions),astNode:t.astNode}})}function r_(i){return Object.entries(i).map(([n,t])=>({name:st(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Vn(t.extensions),astNode:t.astNode}))}function zi(i){return Bt(i)&&!Array.isArray(i)}function a_(i){return Et(i,n=>({description:n.description,type:n.type,args:o_(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function o_(i){return ci(i,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function l_(i){return Ee(i.type)&&i.defaultValue===void 0}class Nr{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Vn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=s_.bind(void 0,n),this._interfaces=i_.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||de(!1,`${this.name} must provide "resolveType" as a function, but got: ${U(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:a_(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Or{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Vn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=yT.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||de(!1,`${this.name} must provide "resolveType" as a function, but got: ${U(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function yT(i){const n=n_(i.types);return Array.isArray(n)||de(!1,`Must provide Array of types or a function which returns such an array for Union ${i.name}.`),n}class ki{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.extensions=Vn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=typeof n.values=="function"?n.values:ud(this.name,n.values),this._valueLookup=null,this._nameLookup=null}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return typeof this._values=="function"&&(this._values=ud(this.name,this._values())),this._values}getValue(n){return this._nameLookup===null&&(this._nameLookup=pi(this.getValues(),t=>t.name)),this._nameLookup[n]}serialize(n){this._valueLookup===null&&(this._valueLookup=new Map(this.getValues().map(r=>[r.value,r])));const t=this._valueLookup.get(n);if(t===void 0)throw new z(`Enum "${this.name}" cannot represent value: ${U(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const r=U(n);throw new z(`Enum "${this.name}" cannot represent non-string value: ${r}.`+vr(this,r))}const t=this.getValue(n);if(t==null)throw new z(`Value "${n}" does not exist in "${this.name}" enum.`+vr(this,n));return t.value}parseLiteral(n,t){if(n.kind!==A.ENUM){const a=Ze(n);throw new z(`Enum "${this.name}" cannot represent non-enum value: ${a}.`+vr(this,a),{nodes:n})}const r=this.getValue(n.value);if(r==null){const a=Ze(n);throw new z(`Value "${a}" does not exist in "${this.name}" enum.`+vr(this,a),{nodes:n})}return r.value}toConfig(){const n=ci(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function vr(i,n){const t=i.getValues().map(a=>a.name),r=gi(n,t);return Wt("the enum value",r)}function ud(i,n){return zi(n)||de(!1,`${i} values must be an object with value names as keys.`),Object.entries(n).map(([t,r])=>(zi(r)||de(!1,`${i}.${t} must refer to an object with a "value" key representing an internal value but got: ${U(r)}.`),{name:hT(t),description:r.description,value:r.value!==void 0?r.value:t,deprecationReason:r.deprecationReason,extensions:Vn(r.extensions),astNode:r.astNode}))}class Cr{constructor(n){var t,r;this.name=st(n.name),this.description=n.description,this.extensions=Vn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this.isOneOf=(r=n.isOneOf)!==null&&r!==void 0?r:!1,this._fields=AT.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=Et(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,isOneOf:this.isOneOf}}toString(){return this.name}toJSON(){return this.toString()}}function AT(i){const n=t_(i.fields);return zi(n)||de(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),Et(n,(t,r)=>(!("resolve"in t)||de(!1,`${i.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`),{name:st(r),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Vn(t.extensions),astNode:t.astNode}))}function TT(i){return Ee(i.type)&&i.defaultValue===void 0}function ms(i,n,t){return n===t?!0:Ee(t)?Ee(n)?ms(i,n.ofType,t.ofType):!1:Ee(n)?ms(i,n.ofType,t):Dn(t)?Dn(n)?ms(i,n.ofType,t.ofType):!1:Dn(n)?!1:ui(t)&&(qe(n)||Je(n))&&i.isSubType(t,n)}function dd(i,n,t){return n===t?!0:ui(n)?ui(t)?i.getPossibleTypes(n).some(r=>i.isSubType(t,r)):i.isSubType(n,t):ui(t)?i.isSubType(t,n):!1}const yo=2147483647,Ao=-2147483648,PT=new Mt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(i){const n=Is(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new z(`Int cannot represent non-integer value: ${U(n)}`);if(t>yo||t<Ao)throw new z("Int cannot represent non 32-bit signed integer value: "+U(n));return t},parseValue(i){if(typeof i!="number"||!Number.isInteger(i))throw new z(`Int cannot represent non-integer value: ${U(i)}`);if(i>yo||i<Ao)throw new z(`Int cannot represent non 32-bit signed integer value: ${i}`);return i},parseLiteral(i){if(i.kind!==A.INT)throw new z(`Int cannot represent non-integer value: ${Ze(i)}`,{nodes:i});const n=parseInt(i.value,10);if(n>yo||n<Ao)throw new z(`Int cannot represent non 32-bit signed integer value: ${i.value}`,{nodes:i});return n}}),vT=new Mt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(i){const n=Is(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new z(`Float cannot represent non numeric value: ${U(n)}`);return t},parseValue(i){if(typeof i!="number"||!Number.isFinite(i))throw new z(`Float cannot represent non numeric value: ${U(i)}`);return i},parseLiteral(i){if(i.kind!==A.FLOAT&&i.kind!==A.INT)throw new z(`Float cannot represent non numeric value: ${Ze(i)}`,i);return parseFloat(i.value)}}),$e=new Mt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(i){const n=Is(i);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new z(`String cannot represent value: ${U(i)}`)},parseValue(i){if(typeof i!="string")throw new z(`String cannot represent a non string value: ${U(i)}`);return i},parseLiteral(i){if(i.kind!==A.STRING)throw new z(`String cannot represent a non string value: ${Ze(i)}`,{nodes:i});return i.value}}),Sn=new Mt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(i){const n=Is(i);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new z(`Boolean cannot represent a non boolean value: ${U(n)}`)},parseValue(i){if(typeof i!="boolean")throw new z(`Boolean cannot represent a non boolean value: ${U(i)}`);return i},parseLiteral(i){if(i.kind!==A.BOOLEAN)throw new z(`Boolean cannot represent a non boolean value: ${Ze(i)}`,{nodes:i});return i.value}}),c_=new Mt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(i){const n=Is(i);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new z(`ID cannot represent value: ${U(i)}`)},parseValue(i){if(typeof i=="string")return i;if(typeof i=="number"&&Number.isInteger(i))return i.toString();throw new z(`ID cannot represent value: ${U(i)}`)},parseLiteral(i){if(i.kind!==A.STRING&&i.kind!==A.INT)throw new z("ID cannot represent a non-string and non-integer value: "+Ze(i),{nodes:i});return i.value}}),Jr=Object.freeze([$e,PT,vT,Sn,c_]);function ET(i){return Jr.some(({name:n})=>i.name===n)}function Is(i){if(Bt(i)){if(typeof i.valueOf=="function"){const n=i.valueOf();if(!Bt(n))return n}if(typeof i.toJSON=="function")return i.toJSON()}return i}function IT(i){return _t(i,Nt)}class Nt{constructor(n){var t,r;this.name=st(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Vn(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||de(!1,`@${n.name} locations must be an Array.`);const a=(r=n.args)!==null&&r!==void 0?r:{};Bt(a)&&!Array.isArray(a)||de(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=r_(a)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:o_(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const u_=new Nt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[G.FIELD,G.FRAGMENT_SPREAD,G.INLINE_FRAGMENT],args:{if:{type:new se(Sn),description:"Included when true."}}}),d_=new Nt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[G.FIELD,G.FRAGMENT_SPREAD,G.INLINE_FRAGMENT],args:{if:{type:new se(Sn),description:"Skipped when true."}}}),bT="No longer supported",__=new Nt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[G.FIELD_DEFINITION,G.ARGUMENT_DEFINITION,G.INPUT_FIELD_DEFINITION,G.ENUM_VALUE],args:{reason:{type:$e,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:bT}}}),p_=new Nt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[G.SCALAR],args:{url:{type:new se($e),description:"The URL that specifies the behavior of this scalar."}}}),f_=new Nt({name:"oneOf",description:"Indicates exactly one field must be supplied and this field must not be `null`.",locations:[G.INPUT_OBJECT],args:{}}),Ui=Object.freeze([u_,d_,__,p_,f_]);function wT(i){return typeof i=="object"&&typeof(i==null?void 0:i[Symbol.iterator])=="function"}function _s(i,n){if(Ee(n)){const t=_s(i,n.ofType);return(t==null?void 0:t.kind)===A.NULL?null:t}if(i===null)return{kind:A.NULL};if(i===void 0)return null;if(Dn(n)){const t=n.ofType;if(wT(i)){const r=[];for(const a of i){const o=_s(a,t);o!=null&&r.push(o)}return{kind:A.LIST,values:r}}return _s(i,t)}if(Fn(n)){if(!Bt(i))return null;const t=[];for(const r of Object.values(n.getFields())){const a=_s(i[r.name],r.type);a&&t.push({kind:A.OBJECT_FIELD,name:{kind:A.NAME,value:r.name},value:a})}return{kind:A.OBJECT,fields:t}}if(Ri(n)){const t=n.serialize(i);if(t==null)return null;if(typeof t=="boolean")return{kind:A.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const r=String(t);return _d.test(r)?{kind:A.INT,value:r}:{kind:A.FLOAT,value:r}}if(typeof t=="string")return Kn(n)?{kind:A.ENUM,value:t}:n===c_&&_d.test(t)?{kind:A.INT,value:t}:{kind:A.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${U(t)}.`)}Zn(!1,"Unexpected input type: "+U(n))}const _d=/^-?(?:0|[1-9][0-9]*)$/,Zo=new ut({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:$e,resolve:i=>i.description},types:{description:"A list of all types supported by this server.",type:new se(new dn(new se(ct))),resolve(i){return Object.values(i.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new se(ct),resolve:i=>i.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:ct,resolve:i=>i.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:ct,resolve:i=>i.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new se(new dn(new se(h_))),resolve:i=>i.getDirectives()}})}),h_=new ut({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new se($e),resolve:i=>i.name},description:{type:$e,resolve:i=>i.description},isRepeatable:{type:new se(Sn),resolve:i=>i.isRepeatable},locations:{type:new se(new dn(new se(m_))),resolve:i=>i.locations},args:{type:new se(new dn(new se(Gr))),args:{includeDeprecated:{type:Sn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}}})}),m_=new ki({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:G.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:G.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:G.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:G.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:G.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:G.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:G.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:G.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:G.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:G.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:G.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:G.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:G.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:G.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:G.UNION,description:"Location adjacent to a union definition."},ENUM:{value:G.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:G.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:G.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:G.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),ct=new ut({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new se(D_),resolve(i){if(Qt(i))return Pe.SCALAR;if(Je(i))return Pe.OBJECT;if(qe(i))return Pe.INTERFACE;if(qn(i))return Pe.UNION;if(Kn(i))return Pe.ENUM;if(Fn(i))return Pe.INPUT_OBJECT;if(Dn(i))return Pe.LIST;if(Ee(i))return Pe.NON_NULL;Zn(!1,`Unexpected type: "${U(i)}".`)}},name:{type:$e,resolve:i=>"name"in i?i.name:void 0},description:{type:$e,resolve:i=>"description"in i?i.description:void 0},specifiedByURL:{type:$e,resolve:i=>"specifiedByURL"in i?i.specifiedByURL:void 0},fields:{type:new dn(new se(g_)),args:{includeDeprecated:{type:Sn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(Je(i)||qe(i)){const t=Object.values(i.getFields());return n?t:t.filter(r=>r.deprecationReason==null)}}},interfaces:{type:new dn(new se(ct)),resolve(i){if(Je(i)||qe(i))return i.getInterfaces()}},possibleTypes:{type:new dn(new se(ct)),resolve(i,n,t,{schema:r}){if(ui(i))return r.getPossibleTypes(i)}},enumValues:{type:new dn(new se(F_)),args:{includeDeprecated:{type:Sn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(Kn(i)){const t=i.getValues();return n?t:t.filter(r=>r.deprecationReason==null)}}},inputFields:{type:new dn(new se(Gr)),args:{includeDeprecated:{type:Sn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(Fn(i)){const t=Object.values(i.getFields());return n?t:t.filter(r=>r.deprecationReason==null)}}},ofType:{type:ct,resolve:i=>"ofType"in i?i.ofType:void 0},isOneOf:{type:Sn,resolve:i=>{if(Fn(i))return i.isOneOf}}})}),g_=new ut({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new se($e),resolve:i=>i.name},description:{type:$e,resolve:i=>i.description},args:{type:new se(new dn(new se(Gr))),args:{includeDeprecated:{type:Sn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}},type:{type:new se(ct),resolve:i=>i.type},isDeprecated:{type:new se(Sn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:$e,resolve:i=>i.deprecationReason}})}),Gr=new ut({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new se($e),resolve:i=>i.name},description:{type:$e,resolve:i=>i.description},type:{type:new se(ct),resolve:i=>i.type},defaultValue:{type:$e,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(i){const{type:n,defaultValue:t}=i,r=_s(t,n);return r?Ze(r):null}},isDeprecated:{type:new se(Sn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:$e,resolve:i=>i.deprecationReason}})}),F_=new ut({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new se($e),resolve:i=>i.name},description:{type:$e,resolve:i=>i.description},isDeprecated:{type:new se(Sn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:$e,resolve:i=>i.deprecationReason}})});var Pe;(function(i){i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.INPUT_OBJECT="INPUT_OBJECT",i.LIST="LIST",i.NON_NULL="NON_NULL"})(Pe||(Pe={}));const D_=new ki({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:Pe.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:Pe.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:Pe.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:Pe.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:Pe.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:Pe.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:Pe.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:Pe.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new se(Zo);new se($e);new se($e);const Yr=Object.freeze([Zo,h_,m_,ct,g_,Gr,F_,D_]);function ST(i){return Yr.some(({name:n})=>i.name===n)}class y_{constructor(n){var t,r;this.__validationErrors=n.assumeValid===!0?[]:void 0,Bt(n)||de(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||de(!1,`"types" must be Array if provided but got: ${U(n.types)}.`),!n.directives||Array.isArray(n.directives)||de(!1,`"directives" must be Array if provided but got: ${U(n.directives)}.`),this.description=n.description,this.extensions=Vn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(r=n.directives)!==null&&r!==void 0?r:Ui;const a=new Set(n.types);if(n.types!=null)for(const o of n.types)a.delete(o),Xn(o,a);this._queryType!=null&&Xn(this._queryType,a),this._mutationType!=null&&Xn(this._mutationType,a),this._subscriptionType!=null&&Xn(this._subscriptionType,a);for(const o of this._directives)if(IT(o))for(const c of o.args)Xn(c.type,a);Xn(Zo,a),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const o of a){if(o==null)continue;const c=o.name;if(c||de(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[c]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${c}".`);if(this._typeMap[c]=o,qe(o)){for(const d of o.getInterfaces())if(qe(d)){let _=this._implementationsMap[d.name];_===void 0&&(_=this._implementationsMap[d.name]={objects:[],interfaces:[]}),_.interfaces.push(o)}}else if(Je(o)){for(const d of o.getInterfaces())if(qe(d)){let _=this._implementationsMap[d.name];_===void 0&&(_=this._implementationsMap[d.name]={objects:[],interfaces:[]}),_.objects.push(o)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case $n.QUERY:return this.getQueryType();case $n.MUTATION:return this.getMutationType();case $n.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return qn(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let r=this._subTypeMap[n.name];if(r===void 0){if(r=Object.create(null),qn(n))for(const a of n.getTypes())r[a.name]=!0;else{const a=this.getImplementations(n);for(const o of a.objects)r[o.name]=!0;for(const o of a.interfaces)r[o.name]=!0}this._subTypeMap[n.name]=r}return r[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Xn(i,n){const t=fi(i);if(!n.has(t)){if(n.add(t),qn(t))for(const r of t.getTypes())Xn(r,n);else if(Je(t)||qe(t)){for(const r of t.getInterfaces())Xn(r,n);for(const r of Object.values(t.getFields())){Xn(r.type,n);for(const a of r.args)Xn(a.type,n)}}else if(Fn(t))for(const r of Object.values(t.getFields()))Xn(r.type,n)}return n}function dt(i,n){switch(n.kind){case A.LIST_TYPE:{const t=dt(i,n.type);return t&&new dn(t)}case A.NON_NULL_TYPE:{const t=dt(i,n.type);return t&&new se(t)}case A.NAMED_TYPE:return i.getType(n.name.value)}}function BT(i){return i.kind===A.OPERATION_DEFINITION||i.kind===A.FRAGMENT_DEFINITION}function MT(i){return i.kind===A.SCHEMA_DEFINITION||bs(i)||i.kind===A.DIRECTIVE_DEFINITION}function bs(i){return i.kind===A.SCALAR_TYPE_DEFINITION||i.kind===A.OBJECT_TYPE_DEFINITION||i.kind===A.INTERFACE_TYPE_DEFINITION||i.kind===A.UNION_TYPE_DEFINITION||i.kind===A.ENUM_TYPE_DEFINITION||i.kind===A.INPUT_OBJECT_TYPE_DEFINITION}function NT(i){return i.kind===A.SCHEMA_EXTENSION||Ko(i)}function Ko(i){return i.kind===A.SCALAR_TYPE_EXTENSION||i.kind===A.OBJECT_TYPE_EXTENSION||i.kind===A.INTERFACE_TYPE_EXTENSION||i.kind===A.UNION_TYPE_EXTENSION||i.kind===A.ENUM_TYPE_EXTENSION||i.kind===A.INPUT_OBJECT_TYPE_EXTENSION}function OT(i){return{Document(n){for(const t of n.definitions)if(!BT(t)){const r=t.kind===A.SCHEMA_DEFINITION||t.kind===A.SCHEMA_EXTENSION?"schema":'"'+t.name.value+'"';i.reportError(new z(`The ${r} definition is not executable.`,{nodes:t}))}return!1}}}function CT(i){return{Field(n){const t=i.getParentType();if(t&&!i.getFieldDef()){const a=i.getSchema(),o=n.name.value;let c=Wt("to use an inline fragment on",zT(a,t,o));c===""&&(c=Wt(RT(t,o))),i.reportError(new z(`Cannot query field "${o}" on type "${t.name}".`+c,{nodes:n}))}}}}function zT(i,n,t){if(!ui(n))return[];const r=new Set,a=Object.create(null);for(const c of i.getPossibleTypes(n))if(c.getFields()[t]){r.add(c),a[c.name]=1;for(const d of c.getInterfaces()){var o;d.getFields()[t]&&(r.add(d),a[d.name]=((o=a[d.name])!==null&&o!==void 0?o:0)+1)}}return[...r].sort((c,d)=>{const _=a[d.name]-a[c.name];return _!==0?_:qe(c)&&i.isSubType(c,d)?-1:qe(d)&&i.isSubType(d,c)?1:Wo(c.name,d.name)}).map(c=>c.name)}function RT(i,n){if(Je(i)||qe(i)){const t=Object.keys(i.getFields());return gi(n,t)}return[]}function kT(i){return{InlineFragment(n){const t=n.typeCondition;if(t){const r=dt(i.getSchema(),t);if(r&&!As(r)){const a=Ze(t);i.reportError(new z(`Fragment cannot condition on non composite type "${a}".`,{nodes:t}))}}},FragmentDefinition(n){const t=dt(i.getSchema(),n.typeCondition);if(t&&!As(t)){const r=Ze(n.typeCondition);i.reportError(new z(`Fragment "${n.name.value}" cannot condition on non composite type "${r}".`,{nodes:n.typeCondition}))}}}}function xT(i){return{...A_(i),Argument(n){const t=i.getArgument(),r=i.getFieldDef(),a=i.getParentType();if(!t&&r&&a){const o=n.name.value,c=r.args.map(_=>_.name),d=gi(o,c);i.reportError(new z(`Unknown argument "${o}" on field "${a.name}.${r.name}".`+Wt(d),{nodes:n}))}}}}function A_(i){const n=Object.create(null),t=i.getSchema(),r=t?t.getDirectives():Ui;for(const c of r)n[c.name]=c.args.map(d=>d.name);const a=i.getDocument().definitions;for(const c of a)if(c.kind===A.DIRECTIVE_DEFINITION){var o;const d=(o=c.arguments)!==null&&o!==void 0?o:[];n[c.name.value]=d.map(_=>_.name.value)}return{Directive(c){const d=c.name.value,_=n[d];if(c.arguments&&_)for(const m of c.arguments){const g=m.name.value;if(!_.includes(g)){const D=gi(g,_);i.reportError(new z(`Unknown argument "${g}" on directive "@${d}".`+Wt(D),{nodes:m}))}}return!1}}}function T_(i){const n=Object.create(null),t=i.getSchema(),r=t?t.getDirectives():Ui;for(const o of r)n[o.name]=o.locations;const a=i.getDocument().definitions;for(const o of a)o.kind===A.DIRECTIVE_DEFINITION&&(n[o.name.value]=o.locations.map(c=>c.value));return{Directive(o,c,d,_,m){const g=o.name.value,D=n[g];if(!D){i.reportError(new z(`Unknown directive "@${g}".`,{nodes:o}));return}const N=UT(m);N&&!D.includes(N)&&i.reportError(new z(`Directive "@${g}" may not be used on ${N}.`,{nodes:o}))}}}function UT(i){const n=i[i.length-1];switch("kind"in n||Zn(!1),n.kind){case A.OPERATION_DEFINITION:return LT(n.operation);case A.FIELD:return G.FIELD;case A.FRAGMENT_SPREAD:return G.FRAGMENT_SPREAD;case A.INLINE_FRAGMENT:return G.INLINE_FRAGMENT;case A.FRAGMENT_DEFINITION:return G.FRAGMENT_DEFINITION;case A.VARIABLE_DEFINITION:return G.VARIABLE_DEFINITION;case A.SCHEMA_DEFINITION:case A.SCHEMA_EXTENSION:return G.SCHEMA;case A.SCALAR_TYPE_DEFINITION:case A.SCALAR_TYPE_EXTENSION:return G.SCALAR;case A.OBJECT_TYPE_DEFINITION:case A.OBJECT_TYPE_EXTENSION:return G.OBJECT;case A.FIELD_DEFINITION:return G.FIELD_DEFINITION;case A.INTERFACE_TYPE_DEFINITION:case A.INTERFACE_TYPE_EXTENSION:return G.INTERFACE;case A.UNION_TYPE_DEFINITION:case A.UNION_TYPE_EXTENSION:return G.UNION;case A.ENUM_TYPE_DEFINITION:case A.ENUM_TYPE_EXTENSION:return G.ENUM;case A.ENUM_VALUE_DEFINITION:return G.ENUM_VALUE;case A.INPUT_OBJECT_TYPE_DEFINITION:case A.INPUT_OBJECT_TYPE_EXTENSION:return G.INPUT_OBJECT;case A.INPUT_VALUE_DEFINITION:{const t=i[i.length-3];return"kind"in t||Zn(!1),t.kind===A.INPUT_OBJECT_TYPE_DEFINITION?G.INPUT_FIELD_DEFINITION:G.ARGUMENT_DEFINITION}default:Zn(!1,"Unexpected kind: "+U(n.kind))}}function LT(i){switch(i){case $n.QUERY:return G.QUERY;case $n.MUTATION:return G.MUTATION;case $n.SUBSCRIPTION:return G.SUBSCRIPTION}}function $T(i){return{FragmentSpread(n){const t=n.name.value;i.getFragment(t)||i.reportError(new z(`Unknown fragment "${t}".`,{nodes:n.name}))}}}function P_(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),r=Object.create(null);for(const o of i.getDocument().definitions)bs(o)&&(r[o.name.value]=!0);const a=[...Object.keys(t),...Object.keys(r)];return{NamedType(o,c,d,_,m){const g=o.name.value;if(!t[g]&&!r[g]){var D;const N=(D=m[2])!==null&&D!==void 0?D:d,b=N!=null&&qT(N);if(b&&pd.includes(g))return;const w=gi(g,b?pd.concat(a):a);i.reportError(new z(`Unknown type "${g}".`+Wt(w),{nodes:o}))}}}}const pd=[...Jr,...Yr].map(i=>i.name);function qT(i){return"kind"in i&&(MT(i)||NT(i))}function VT(i){let n=0;return{Document(t){n=t.definitions.filter(r=>r.kind===A.OPERATION_DEFINITION).length},OperationDefinition(t){!t.name&&n>1&&i.reportError(new z("This anonymous operation must be the only defined operation.",{nodes:t}))}}}function jT(i){var n,t,r;const a=i.getSchema(),o=(n=(t=(r=a==null?void 0:a.astNode)!==null&&r!==void 0?r:a==null?void 0:a.getQueryType())!==null&&t!==void 0?t:a==null?void 0:a.getMutationType())!==null&&n!==void 0?n:a==null?void 0:a.getSubscriptionType();let c=0;return{SchemaDefinition(d){if(o){i.reportError(new z("Cannot define a new schema within a schema extension.",{nodes:d}));return}c>0&&i.reportError(new z("Must provide only one schema definition.",{nodes:d})),++c}}}const JT=3;function GT(i){function n(t,r=Object.create(null),a=0){if(t.kind===A.FRAGMENT_SPREAD){const o=t.name.value;if(r[o]===!0)return!1;const c=i.getFragment(o);if(!c)return!1;try{return r[o]=!0,n(c,r,a)}finally{r[o]=void 0}}if(t.kind===A.FIELD&&(t.name.value==="fields"||t.name.value==="interfaces"||t.name.value==="possibleTypes"||t.name.value==="inputFields")&&(a++,a>=JT))return!0;if("selectionSet"in t&&t.selectionSet){for(const o of t.selectionSet.selections)if(n(o,r,a))return!0}return!1}return{Field(t){if((t.name.value==="__schema"||t.name.value==="__type")&&n(t))return i.reportError(new z("Maximum introspection depth exceeded",{nodes:[t]})),!1}}}function YT(i){const n=Object.create(null),t=[],r=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(o){return a(o),!1}};function a(o){if(n[o.name.value])return;const c=o.name.value;n[c]=!0;const d=i.getFragmentSpreads(o.selectionSet);if(d.length!==0){r[c]=t.length;for(const _ of d){const m=_.name.value,g=r[m];if(t.push(_),g===void 0){const D=i.getFragment(m);D&&a(D)}else{const D=t.slice(g),N=D.slice(0,-1).map(b=>'"'+b.name.value+'"').join(", ");i.reportError(new z(`Cannot spread fragment "${m}" within itself`+(N!==""?` via ${N}.`:"."),{nodes:D}))}t.pop()}r[c]=void 0}}}function WT(i){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const r=i.getRecursiveVariableUsages(t);for(const{node:a}of r){const o=a.name.value;n[o]!==!0&&i.reportError(new z(t.name?`Variable "$${o}" is not defined by operation "${t.name.value}".`:`Variable "$${o}" is not defined.`,{nodes:[a,t]}))}}},VariableDefinition(t){n[t.variable.name.value]=!0}}}function QT(i){const n=[],t=[];return{OperationDefinition(r){return n.push(r),!1},FragmentDefinition(r){return t.push(r),!1},Document:{leave(){const r=Object.create(null);for(const a of n)for(const o of i.getRecursivelyReferencedFragments(a))r[o.name.value]=!0;for(const a of t){const o=a.name.value;r[o]!==!0&&i.reportError(new z(`Fragment "${o}" is never used.`,{nodes:a}))}}}}}function HT(i){let n=[];return{OperationDefinition:{enter(){n=[]},leave(t){const r=Object.create(null),a=i.getRecursiveVariableUsages(t);for(const{node:o}of a)r[o.name.value]=!0;for(const o of n){const c=o.variable.name.value;r[c]!==!0&&i.reportError(new z(t.name?`Variable "$${c}" is never used in operation "${t.name.value}".`:`Variable "$${c}" is never used.`,{nodes:o}))}}},VariableDefinition(t){n.push(t)}}}function el(i){switch(i.kind){case A.OBJECT:return{...i,fields:XT(i.fields)};case A.LIST:return{...i,values:i.values.map(el)};case A.INT:case A.FLOAT:case A.STRING:case A.BOOLEAN:case A.NULL:case A.ENUM:case A.VARIABLE:return i}}function XT(i){return i.map(n=>({...n,value:el(n.value)})).sort((n,t)=>Wo(n.name.value,t.name.value))}function v_(i){return Array.isArray(i)?i.map(([n,t])=>`subfields "${n}" conflict because `+v_(t)).join(" and "):i}function ZT(i){const n=new sP,t=new Map;return{SelectionSet(r){const a=KT(i,t,n,i.getParentType(),r);for(const[[o,c],d,_]of a){const m=v_(c);i.reportError(new z(`Fields "${o}" conflict because ${m}. Use different aliases on the fields to fetch both if this was intentional.`,{nodes:d.concat(_)}))}}}}function KT(i,n,t,r,a){const o=[],[c,d]=kr(i,n,r,a);if(nP(i,o,n,t,c),d.length!==0)for(let _=0;_<d.length;_++){zr(i,o,n,t,!1,c,d[_]);for(let m=_+1;m<d.length;m++)Rr(i,o,n,t,!1,d[_],d[m])}return o}function zr(i,n,t,r,a,o,c){const d=i.getFragment(c);if(!d)return;const[_,m]=Mo(i,t,d);if(o!==_){nl(i,n,t,r,a,o,_);for(const g of m)r.has(g,c,a)||(r.add(g,c,a),zr(i,n,t,r,a,o,g))}}function Rr(i,n,t,r,a,o,c){if(o===c||r.has(o,c,a))return;r.add(o,c,a);const d=i.getFragment(o),_=i.getFragment(c);if(!d||!_)return;const[m,g]=Mo(i,t,d),[D,N]=Mo(i,t,_);nl(i,n,t,r,a,m,D);for(const b of N)Rr(i,n,t,r,a,o,b);for(const b of g)Rr(i,n,t,r,a,b,c)}function eP(i,n,t,r,a,o,c,d){const _=[],[m,g]=kr(i,n,a,o),[D,N]=kr(i,n,c,d);nl(i,_,n,t,r,m,D);for(const b of N)zr(i,_,n,t,r,m,b);for(const b of g)zr(i,_,n,t,r,D,b);for(const b of g)for(const w of N)Rr(i,_,n,t,r,b,w);return _}function nP(i,n,t,r,a){for(const[o,c]of Object.entries(a))if(c.length>1)for(let d=0;d<c.length;d++)for(let _=d+1;_<c.length;_++){const m=E_(i,t,r,!1,o,c[d],c[_]);m&&n.push(m)}}function nl(i,n,t,r,a,o,c){for(const[d,_]of Object.entries(o)){const m=c[d];if(m)for(const g of _)for(const D of m){const N=E_(i,t,r,a,d,g,D);N&&n.push(N)}}}function E_(i,n,t,r,a,o,c){const[d,_,m]=o,[g,D,N]=c,b=r||d!==g&&Je(d)&&Je(g);if(!b){const Ie=_.name.value,ge=D.name.value;if(Ie!==ge)return[[a,`"${Ie}" and "${ge}" are different fields`],[_],[D]];if(!tP(_,D))return[[a,"they have differing arguments"],[_],[D]]}const w=m==null?void 0:m.type,R=N==null?void 0:N.type;if(w&&R&&Bo(w,R))return[[a,`they return conflicting types "${U(w)}" and "${U(R)}"`],[_],[D]];const J=_.selectionSet,ue=D.selectionSet;if(J&&ue){const Ie=eP(i,n,t,b,fi(w),J,fi(R),ue);return iP(Ie,a,_,D)}}function tP(i,n){const t=i.arguments,r=n.arguments;if(t===void 0||t.length===0)return r===void 0||r.length===0;if(r===void 0||r.length===0||t.length!==r.length)return!1;const a=new Map(r.map(({name:o,value:c})=>[o.value,c]));return t.every(o=>{const c=o.value,d=a.get(o.name.value);return d===void 0?!1:fd(c)===fd(d)})}function fd(i){return Ze(el(i))}function Bo(i,n){return Dn(i)?Dn(n)?Bo(i.ofType,n.ofType):!0:Dn(n)?!0:Ee(i)?Ee(n)?Bo(i.ofType,n.ofType):!0:Ee(n)?!0:Ri(i)||Ri(n)?i!==n:!1}function kr(i,n,t,r){const a=n.get(r);if(a)return a;const o=Object.create(null),c=Object.create(null);I_(i,t,r,o,c);const d=[o,Object.keys(c)];return n.set(r,d),d}function Mo(i,n,t){const r=n.get(t.selectionSet);if(r)return r;const a=dt(i.getSchema(),t.typeCondition);return kr(i,n,a,t.selectionSet)}function I_(i,n,t,r,a){for(const o of t.selections)switch(o.kind){case A.FIELD:{const c=o.name.value;let d;(Je(n)||qe(n))&&(d=n.getFields()[c]);const _=o.alias?o.alias.value:c;r[_]||(r[_]=[]),r[_].push([n,o,d]);break}case A.FRAGMENT_SPREAD:a[o.name.value]=!0;break;case A.INLINE_FRAGMENT:{const c=o.typeCondition,d=c?dt(i.getSchema(),c):n;I_(i,d,o.selectionSet,r,a);break}}}function iP(i,n,t,r){if(i.length>0)return[[n,i.map(([a])=>a)],[t,...i.map(([,a])=>a).flat()],[r,...i.map(([,,a])=>a).flat()]]}class sP{constructor(){this._data=new Map}has(n,t,r){var a;const[o,c]=n<t?[n,t]:[t,n],d=(a=this._data.get(o))===null||a===void 0?void 0:a.get(c);return d===void 0?!1:r?!0:r===d}add(n,t,r){const[a,o]=n<t?[n,t]:[t,n],c=this._data.get(a);c===void 0?this._data.set(a,new Map([[o,r]])):c.set(o,r)}}function rP(i){return{InlineFragment(n){const t=i.getType(),r=i.getParentType();if(As(t)&&As(r)&&!dd(i.getSchema(),t,r)){const a=U(r),o=U(t);i.reportError(new z(`Fragment cannot be spread here as objects of type "${a}" can never be of type "${o}".`,{nodes:n}))}},FragmentSpread(n){const t=n.name.value,r=aP(i,t),a=i.getParentType();if(r&&a&&!dd(i.getSchema(),r,a)){const o=U(a),c=U(r);i.reportError(new z(`Fragment "${t}" cannot be spread here as objects of type "${o}" can never be of type "${c}".`,{nodes:n}))}}}}function aP(i,n){const t=i.getFragment(n);if(t){const r=dt(i.getSchema(),t.typeCondition);if(As(r))return r}}function oP(i){const n=i.getSchema(),t=Object.create(null);for(const a of i.getDocument().definitions)bs(a)&&(t[a.name.value]=a);return{ScalarTypeExtension:r,ObjectTypeExtension:r,InterfaceTypeExtension:r,UnionTypeExtension:r,EnumTypeExtension:r,InputObjectTypeExtension:r};function r(a){const o=a.name.value,c=t[o],d=n==null?void 0:n.getType(o);let _;if(c?_=lP[c.kind]:d&&(_=cP(d)),_){if(_!==a.kind){const m=uP(a.kind);i.reportError(new z(`Cannot extend non-${m} type "${o}".`,{nodes:c?[c,a]:a}))}}else{const m=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),g=gi(o,m);i.reportError(new z(`Cannot extend type "${o}" because it is not defined.`+Wt(g),{nodes:a.name}))}}}const lP={[A.SCALAR_TYPE_DEFINITION]:A.SCALAR_TYPE_EXTENSION,[A.OBJECT_TYPE_DEFINITION]:A.OBJECT_TYPE_EXTENSION,[A.INTERFACE_TYPE_DEFINITION]:A.INTERFACE_TYPE_EXTENSION,[A.UNION_TYPE_DEFINITION]:A.UNION_TYPE_EXTENSION,[A.ENUM_TYPE_DEFINITION]:A.ENUM_TYPE_EXTENSION,[A.INPUT_OBJECT_TYPE_DEFINITION]:A.INPUT_OBJECT_TYPE_EXTENSION};function cP(i){if(Qt(i))return A.SCALAR_TYPE_EXTENSION;if(Je(i))return A.OBJECT_TYPE_EXTENSION;if(qe(i))return A.INTERFACE_TYPE_EXTENSION;if(qn(i))return A.UNION_TYPE_EXTENSION;if(Kn(i))return A.ENUM_TYPE_EXTENSION;if(Fn(i))return A.INPUT_OBJECT_TYPE_EXTENSION;Zn(!1,"Unexpected type: "+U(i))}function uP(i){switch(i){case A.SCALAR_TYPE_EXTENSION:return"scalar";case A.OBJECT_TYPE_EXTENSION:return"object";case A.INTERFACE_TYPE_EXTENSION:return"interface";case A.UNION_TYPE_EXTENSION:return"union";case A.ENUM_TYPE_EXTENSION:return"enum";case A.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Zn(!1,"Unexpected kind: "+U(i))}}function dP(i){return{...b_(i),Field:{leave(n){var t;const r=i.getFieldDef();if(!r)return!1;const a=new Set((t=n.arguments)===null||t===void 0?void 0:t.map(o=>o.name.value));for(const o of r.args)if(!a.has(o.name)&&l_(o)){const c=U(o.type);i.reportError(new z(`Field "${r.name}" argument "${o.name}" of type "${c}" is required, but it was not provided.`,{nodes:n}))}}}}}function b_(i){var n;const t=Object.create(null),r=i.getSchema(),a=(n=r==null?void 0:r.getDirectives())!==null&&n!==void 0?n:Ui;for(const d of a)t[d.name]=pi(d.args.filter(l_),_=>_.name);const o=i.getDocument().definitions;for(const d of o)if(d.kind===A.DIRECTIVE_DEFINITION){var c;const _=(c=d.arguments)!==null&&c!==void 0?c:[];t[d.name.value]=pi(_.filter(_P),m=>m.name.value)}return{Directive:{leave(d){const _=d.name.value,m=t[_];if(m){var g;const D=(g=d.arguments)!==null&&g!==void 0?g:[],N=new Set(D.map(b=>b.name.value));for(const[b,w]of Object.entries(m))if(!N.has(b)){const R=Qo(w.type)?U(w.type):Ze(w.type);i.reportError(new z(`Directive "@${_}" argument "${b}" of type "${R}" is required, but it was not provided.`,{nodes:d}))}}}}}}function _P(i){return i.type.kind===A.NON_NULL_TYPE&&i.defaultValue==null}function pP(i){return{Field(n){const t=i.getType(),r=n.selectionSet;if(t){if(Ri(fi(t))){if(r){const a=n.name.value,o=U(t);i.reportError(new z(`Field "${a}" must not have a selection since type "${o}" has no subfields.`,{nodes:r}))}}else if(!r){const a=n.name.value,o=U(t);i.reportError(new z(`Field "${a}" of type "${o}" must have a selection of subfields. Did you mean "${a} { ... }"?`,{nodes:n}))}}}}}function jt(i,n,t){if(i){if(i.kind===A.VARIABLE){const r=i.name.value;if(t==null||t[r]===void 0)return;const a=t[r];return a===null&&Ee(n)?void 0:a}if(Ee(n))return i.kind===A.NULL?void 0:jt(i,n.ofType,t);if(i.kind===A.NULL)return null;if(Dn(n)){const r=n.ofType;if(i.kind===A.LIST){const o=[];for(const c of i.values)if(hd(c,t)){if(Ee(r))return;o.push(null)}else{const d=jt(c,r,t);if(d===void 0)return;o.push(d)}return o}const a=jt(i,r,t);return a===void 0?void 0:[a]}if(Fn(n)){if(i.kind!==A.OBJECT)return;const r=Object.create(null),a=pi(i.fields,o=>o.name.value);for(const o of Object.values(n.getFields())){const c=a[o.name];if(!c||hd(c.value,t)){if(o.defaultValue!==void 0)r[o.name]=o.defaultValue;else if(Ee(o.type))return;continue}const d=jt(c.value,o.type,t);if(d===void 0)return;r[o.name]=d}if(n.isOneOf){const o=Object.keys(r);if(o.length!==1||r[o[0]]===null)return}return r}if(Ri(n)){let r;try{r=n.parseLiteral(i,t)}catch{return}return r===void 0?void 0:r}Zn(!1,"Unexpected input type: "+U(n))}}function hd(i,n){return i.kind===A.VARIABLE&&(n==null||n[i.name.value]===void 0)}function fP(i,n,t){var r;const a={},o=(r=n.arguments)!==null&&r!==void 0?r:[],c=pi(o,d=>d.name.value);for(const d of i.args){const _=d.name,m=d.type,g=c[_];if(!g){if(d.defaultValue!==void 0)a[_]=d.defaultValue;else if(Ee(m))throw new z(`Argument "${_}" of required type "${U(m)}" was not provided.`,{nodes:n});continue}const D=g.value;let N=D.kind===A.NULL;if(D.kind===A.VARIABLE){const w=D.name.value;if(t==null||!hP(t,w)){if(d.defaultValue!==void 0)a[_]=d.defaultValue;else if(Ee(m))throw new z(`Argument "${_}" of required type "${U(m)}" was provided the variable "$${w}" which was not provided a runtime value.`,{nodes:D});continue}N=t[w]==null}if(N&&Ee(m))throw new z(`Argument "${_}" of non-null type "${U(m)}" must not be null.`,{nodes:D});const b=jt(D,m,t);if(b===void 0)throw new z(`Argument "${_}" has invalid value ${Ze(D)}.`,{nodes:D});a[_]=b}return a}function Ts(i,n,t){var r;const a=(r=n.directives)===null||r===void 0?void 0:r.find(o=>o.name.value===i.name);if(a)return fP(i,a,t)}function hP(i,n){return Object.prototype.hasOwnProperty.call(i,n)}function mP(i,n,t,r,a){const o=new Map;return No(i,n,t,r,a,o,new Set),o}function No(i,n,t,r,a,o,c){for(const d of a.selections)switch(d.kind){case A.FIELD:{if(!To(t,d))continue;const _=gP(d),m=o.get(_);m!==void 0?m.push(d):o.set(_,[d]);break}case A.INLINE_FRAGMENT:{if(!To(t,d)||!md(i,d,r))continue;No(i,n,t,r,d.selectionSet,o,c);break}case A.FRAGMENT_SPREAD:{const _=d.name.value;if(c.has(_)||!To(t,d))continue;c.add(_);const m=n[_];if(!m||!md(i,m,r))continue;No(i,n,t,r,m.selectionSet,o,c);break}}}function To(i,n){const t=Ts(d_,n,i);if((t==null?void 0:t.if)===!0)return!1;const r=Ts(u_,n,i);return(r==null?void 0:r.if)!==!1}function md(i,n,t){const r=n.typeCondition;if(!r)return!0;const a=dt(i,r);return a===t?!0:ui(a)?i.isSubType(a,t):!1}function gP(i){return i.alias?i.alias.value:i.name.value}function FP(i){return{OperationDefinition(n){if(n.operation==="subscription"){const t=i.getSchema(),r=t.getSubscriptionType();if(r){const a=n.name?n.name.value:null,o=Object.create(null),c=i.getDocument(),d=Object.create(null);for(const m of c.definitions)m.kind===A.FRAGMENT_DEFINITION&&(d[m.name.value]=m);const _=mP(t,d,o,r,n.selectionSet);if(_.size>1){const D=[..._.values()].slice(1).flat();i.reportError(new z(a!=null?`Subscription "${a}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",{nodes:D}))}for(const m of _.values())m[0].name.value.startsWith("__")&&i.reportError(new z(a!=null?`Subscription "${a}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",{nodes:m}))}}}}}function tl(i,n){const t=new Map;for(const r of i){const a=n(r),o=t.get(a);o===void 0?t.set(a,[r]):o.push(r)}return t}function DP(i){return{DirectiveDefinition(r){var a;const o=(a=r.arguments)!==null&&a!==void 0?a:[];return t(`@${r.name.value}`,o)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(r){var a;const o=r.name.value,c=(a=r.fields)!==null&&a!==void 0?a:[];for(const _ of c){var d;const m=_.name.value,g=(d=_.arguments)!==null&&d!==void 0?d:[];t(`${o}.${m}`,g)}return!1}function t(r,a){const o=tl(a,c=>c.name.value);for(const[c,d]of o)d.length>1&&i.reportError(new z(`Argument "${r}(${c}:)" can only be defined once.`,{nodes:d.map(_=>_.name)}));return!1}}function w_(i){return{Field:n,Directive:n};function n(t){var r;const a=(r=t.arguments)!==null&&r!==void 0?r:[],o=tl(a,c=>c.name.value);for(const[c,d]of o)d.length>1&&i.reportError(new z(`There can be only one argument named "${c}".`,{nodes:d.map(_=>_.name)}))}}function yP(i){const n=Object.create(null),t=i.getSchema();return{DirectiveDefinition(r){const a=r.name.value;if(t!=null&&t.getDirective(a)){i.reportError(new z(`Directive "@${a}" already exists in the schema. It cannot be redefined.`,{nodes:r.name}));return}return n[a]?i.reportError(new z(`There can be only one directive named "@${a}".`,{nodes:[n[a],r.name]})):n[a]=r.name,!1}}}function S_(i){const n=Object.create(null),t=i.getSchema(),r=t?t.getDirectives():Ui;for(const d of r)n[d.name]=!d.isRepeatable;const a=i.getDocument().definitions;for(const d of a)d.kind===A.DIRECTIVE_DEFINITION&&(n[d.name.value]=!d.repeatable);const o=Object.create(null),c=Object.create(null);return{enter(d){if(!("directives"in d)||!d.directives)return;let _;if(d.kind===A.SCHEMA_DEFINITION||d.kind===A.SCHEMA_EXTENSION)_=o;else if(bs(d)||Ko(d)){const m=d.name.value;_=c[m],_===void 0&&(c[m]=_=Object.create(null))}else _=Object.create(null);for(const m of d.directives){const g=m.name.value;n[g]&&(_[g]?i.reportError(new z(`The directive "@${g}" can only be used once at this location.`,{nodes:[_[g],m]})):_[g]=m)}}}}function AP(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),r=Object.create(null);return{EnumTypeDefinition:a,EnumTypeExtension:a};function a(o){var c;const d=o.name.value;r[d]||(r[d]=Object.create(null));const _=(c=o.values)!==null&&c!==void 0?c:[],m=r[d];for(const g of _){const D=g.name.value,N=t[d];Kn(N)&&N.getValue(D)?i.reportError(new z(`Enum value "${d}.${D}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:g.name})):m[D]?i.reportError(new z(`Enum value "${d}.${D}" can only be defined once.`,{nodes:[m[D],g.name]})):m[D]=g.name}return!1}}function TP(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),r=Object.create(null);return{InputObjectTypeDefinition:a,InputObjectTypeExtension:a,InterfaceTypeDefinition:a,InterfaceTypeExtension:a,ObjectTypeDefinition:a,ObjectTypeExtension:a};function a(o){var c;const d=o.name.value;r[d]||(r[d]=Object.create(null));const _=(c=o.fields)!==null&&c!==void 0?c:[],m=r[d];for(const g of _){const D=g.name.value;PP(t[d],D)?i.reportError(new z(`Field "${d}.${D}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:g.name})):m[D]?i.reportError(new z(`Field "${d}.${D}" can only be defined once.`,{nodes:[m[D],g.name]})):m[D]=g.name}return!1}}function PP(i,n){return Je(i)||qe(i)||Fn(i)?i.getFields()[n]!=null:!1}function vP(i){const n=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(t){const r=t.name.value;return n[r]?i.reportError(new z(`There can be only one fragment named "${r}".`,{nodes:[n[r],t.name]})):n[r]=t.name,!1}}}function B_(i){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const r=n.pop();r||Zn(!1),t=r}},ObjectField(r){const a=r.name.value;t[a]?i.reportError(new z(`There can be only one input field named "${a}".`,{nodes:[t[a],r.name]})):t[a]=r.name}}}function EP(i){const n=Object.create(null);return{OperationDefinition(t){const r=t.name;return r&&(n[r.value]?i.reportError(new z(`There can be only one operation named "${r.value}".`,{nodes:[n[r.value],r]})):n[r.value]=r),!1},FragmentDefinition:()=>!1}}function IP(i){const n=i.getSchema(),t=Object.create(null),r=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:a,SchemaExtension:a};function a(o){var c;const d=(c=o.operationTypes)!==null&&c!==void 0?c:[];for(const _ of d){const m=_.operation,g=t[m];r[m]?i.reportError(new z(`Type for ${m} already defined in the schema. It cannot be redefined.`,{nodes:_})):g?i.reportError(new z(`There can be only one ${m} type in schema.`,{nodes:[g,_]})):t[m]=_}return!1}}function bP(i){const n=Object.create(null),t=i.getSchema();return{ScalarTypeDefinition:r,ObjectTypeDefinition:r,InterfaceTypeDefinition:r,UnionTypeDefinition:r,EnumTypeDefinition:r,InputObjectTypeDefinition:r};function r(a){const o=a.name.value;if(t!=null&&t.getType(o)){i.reportError(new z(`Type "${o}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:a.name}));return}return n[o]?i.reportError(new z(`There can be only one type named "${o}".`,{nodes:[n[o],a.name]})):n[o]=a.name,!1}}function wP(i){return{OperationDefinition(n){var t;const r=(t=n.variableDefinitions)!==null&&t!==void 0?t:[],a=tl(r,o=>o.variable.name.value);for(const[o,c]of a)c.length>1&&i.reportError(new z(`There can be only one variable named "$${o}".`,{nodes:c.map(d=>d.variable.name)}))}}}function SP(i){let n={};return{OperationDefinition:{enter(){n={}}},VariableDefinition(t){n[t.variable.name.value]=t},ListValue(t){const r=DT(i.getParentInputType());if(!Dn(r))return li(i,t),!1},ObjectValue(t){const r=fi(i.getInputType());if(!Fn(r))return li(i,t),!1;const a=pi(t.fields,o=>o.name.value);for(const o of Object.values(r.getFields()))if(!a[o.name]&&TT(o)){const d=U(o.type);i.reportError(new z(`Field "${r.name}.${o.name}" of required type "${d}" was not provided.`,{nodes:t}))}r.isOneOf&&BP(i,t,r,a,n)},ObjectField(t){const r=fi(i.getParentInputType());if(!i.getInputType()&&Fn(r)){const o=gi(t.name.value,Object.keys(r.getFields()));i.reportError(new z(`Field "${t.name.value}" is not defined by type "${r.name}".`+Wt(o),{nodes:t}))}},NullValue(t){const r=i.getInputType();Ee(r)&&i.reportError(new z(`Expected value of type "${U(r)}", found ${Ze(t)}.`,{nodes:t}))},EnumValue:t=>li(i,t),IntValue:t=>li(i,t),FloatValue:t=>li(i,t),StringValue:t=>li(i,t),BooleanValue:t=>li(i,t)}}function li(i,n){const t=i.getInputType();if(!t)return;const r=fi(t);if(!Ri(r)){const a=U(t);i.reportError(new z(`Expected value of type "${a}", found ${Ze(n)}.`,{nodes:n}));return}try{if(r.parseLiteral(n,void 0)===void 0){const o=U(t);i.reportError(new z(`Expected value of type "${o}", found ${Ze(n)}.`,{nodes:n}))}}catch(a){const o=U(t);a instanceof z?i.reportError(a):i.reportError(new z(`Expected value of type "${o}", found ${Ze(n)}; `+a.message,{nodes:n,originalError:a}))}}function BP(i,n,t,r,a){var o;const c=Object.keys(r);if(c.length!==1){i.reportError(new z(`OneOf Input Object "${t.name}" must specify exactly one key.`,{nodes:[n]}));return}const _=(o=r[c[0]])===null||o===void 0?void 0:o.value,m=!_||_.kind===A.NULL,g=(_==null?void 0:_.kind)===A.VARIABLE;if(m){i.reportError(new z(`Field "${t.name}.${c[0]}" must be non-null.`,{nodes:[n]}));return}if(g){const D=_.name.value;a[D].type.kind!==A.NON_NULL_TYPE&&i.reportError(new z(`Variable "${D}" must be non-nullable to be used for OneOf Input Object "${t.name}".`,{nodes:[n]}))}}function MP(i){return{VariableDefinition(n){const t=dt(i.getSchema(),n.type);if(t!==void 0&&!Ho(t)){const r=n.variable.name.value,a=Ze(n.type);i.reportError(new z(`Variable "$${r}" cannot be non-input type "${a}".`,{nodes:n.type}))}}}}function NP(i){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const r=i.getRecursiveVariableUsages(t);for(const{node:a,type:o,defaultValue:c}of r){const d=a.name.value,_=n[d];if(_&&o){const m=i.getSchema(),g=dt(m,_.type);if(g&&!OP(m,g,_.defaultValue,o,c)){const D=U(g),N=U(o);i.reportError(new z(`Variable "$${d}" of type "${D}" used in position expecting type "${N}".`,{nodes:[_,a]}))}}}}},VariableDefinition(t){n[t.variable.name.value]=t}}}function OP(i,n,t,r,a){if(Ee(r)&&!Ee(n)){if(!(t!=null&&t.kind!==A.NULL)&&!(a!==void 0))return!1;const d=r.ofType;return ms(i,n,d)}return ms(i,n,r)}const CP=Object.freeze([GT]);Object.freeze([OT,EP,VT,FP,P_,kT,MP,pP,CT,vP,$T,QT,rP,YT,wP,WT,HT,T_,S_,xT,w_,SP,dP,NP,ZT,B_,...CP]);const zP=Object.freeze([jT,IP,bP,AP,TP,DP,yP,P_,T_,S_,oP,A_,w_,B_,b_]);class RP{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const r of this.getDocument().definitions)r.kind===A.FRAGMENT_DEFINITION&&(t[r.name.value]=r);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const r=[n];let a;for(;a=r.pop();)for(const o of a.selections)o.kind===A.FRAGMENT_SPREAD?t.push(o):o.selectionSet&&r.push(o.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const r=Object.create(null),a=[n.selectionSet];let o;for(;o=a.pop();)for(const c of this.getFragmentSpreads(o)){const d=c.name.value;if(r[d]!==!0){r[d]=!0;const _=this.getFragment(d);_&&(t.push(_),a.push(_.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class kP extends RP{constructor(n,t,r){super(n,r),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function xP(i,n,t=zP){const r=[],a=new kP(i,n,c=>{r.push(c)}),o=t.map(c=>c(a));return Xd(i,_T(o)),r}function UP(i){const n=xP(i);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function LP(i,n){Bt(i)&&Bt(i.__schema)||de(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${U(i)}.`);const t=i.__schema,r=ci(t.types,O=>O.name,O=>N(O));for(const O of[...Jr,...Yr])r[O.name]&&(r[O.name]=O);const a=t.queryType?g(t.queryType):null,o=t.mutationType?g(t.mutationType):null,c=t.subscriptionType?g(t.subscriptionType):null,d=t.directives?t.directives.map(pt):[];return new y_({description:t.description,query:a,mutation:o,subscription:c,types:Object.values(r),directives:d,assumeValid:void 0});function _(O){if(O.kind===Pe.LIST){const X=O.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");return new dn(_(X))}if(O.kind===Pe.NON_NULL){const X=O.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");const on=_(X);return new se(FT(on))}return m(O)}function m(O){const X=O.name;if(!X)throw new Error(`Unknown type reference: ${U(O)}.`);const on=r[X];if(!on)throw new Error(`Invalid or incomplete schema, unknown type: ${X}. Ensure that a full introspection query is used in order to build a client schema.`);return on}function g(O){return mT(m(O))}function D(O){return gT(m(O))}function N(O){if(O!=null&&O.name!=null&&O.kind!=null)switch(O.kind){case Pe.SCALAR:return b(O);case Pe.OBJECT:return R(O);case Pe.INTERFACE:return J(O);case Pe.UNION:return ue(O);case Pe.ENUM:return Ie(O);case Pe.INPUT_OBJECT:return ge(O)}const X=U(O);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${X}.`)}function b(O){return new Mt({name:O.name,description:O.description,specifiedByURL:O.specifiedByURL})}function w(O){if(O.interfaces===null&&O.kind===Pe.INTERFACE)return[];if(!O.interfaces){const X=U(O);throw new Error(`Introspection result missing interfaces: ${X}.`)}return O.interfaces.map(D)}function R(O){return new ut({name:O.name,description:O.description,interfaces:()=>w(O),fields:()=>Oe(O)})}function J(O){return new Nr({name:O.name,description:O.description,interfaces:()=>w(O),fields:()=>Oe(O)})}function ue(O){if(!O.possibleTypes){const X=U(O);throw new Error(`Introspection result missing possibleTypes: ${X}.`)}return new Or({name:O.name,description:O.description,types:()=>O.possibleTypes.map(g)})}function Ie(O){if(!O.enumValues){const X=U(O);throw new Error(`Introspection result missing enumValues: ${X}.`)}return new ki({name:O.name,description:O.description,values:ci(O.enumValues,X=>X.name,X=>({description:X.description,deprecationReason:X.deprecationReason}))})}function ge(O){if(!O.inputFields){const X=U(O);throw new Error(`Introspection result missing inputFields: ${X}.`)}return new Cr({name:O.name,description:O.description,fields:()=>Qe(O.inputFields),isOneOf:O.isOneOf})}function Oe(O){if(!O.fields)throw new Error(`Introspection result missing fields: ${U(O)}.`);return ci(O.fields,X=>X.name,Ge)}function Ge(O){const X=_(O.type);if(!Kd(X)){const on=U(X);throw new Error(`Introspection must provide output type for fields, but received: ${on}.`)}if(!O.args){const on=U(O);throw new Error(`Introspection result missing field args: ${on}.`)}return{description:O.description,deprecationReason:O.deprecationReason,type:X,args:Qe(O.args)}}function Qe(O){return ci(O,X=>X.name,Ce)}function Ce(O){const X=_(O.type);if(!Ho(X)){const Ot=U(X);throw new Error(`Introspection must provide input type for arguments, but received: ${Ot}.`)}const on=O.defaultValue!=null?jt(sT(O.defaultValue),X):void 0;return{description:O.description,type:X,defaultValue:on,deprecationReason:O.deprecationReason}}function pt(O){if(!O.args){const X=U(O);throw new Error(`Introspection result missing directive args: ${X}.`)}if(!O.locations){const X=U(O);throw new Error(`Introspection result missing directive locations: ${X}.`)}return new Nt({name:O.name,description:O.description,isRepeatable:O.isRepeatable,locations:O.locations.slice(),args:Qe(O.args)})}}function $P(i,n,t){var r,a,o,c;const d=[],_=Object.create(null),m=[];let g;const D=[];for(const E of n.definitions)if(E.kind===A.SCHEMA_DEFINITION)g=E;else if(E.kind===A.SCHEMA_EXTENSION)D.push(E);else if(bs(E))d.push(E);else if(Ko(E)){const q=E.name.value,x=_[q];_[q]=x?x.concat([E]):[E]}else E.kind===A.DIRECTIVE_DEFINITION&&m.push(E);if(Object.keys(_).length===0&&d.length===0&&m.length===0&&D.length===0&&g==null)return i;const N=Object.create(null);for(const E of i.types)N[E.name]=Ie(E);for(const E of d){var b;const q=E.name.value;N[q]=(b=gd[q])!==null&&b!==void 0?b:Bn(E)}const w={query:i.query&&J(i.query),mutation:i.mutation&&J(i.mutation),subscription:i.subscription&&J(i.subscription),...g&&on([g]),...on(D)};return{description:(r=g)===null||r===void 0||(a=r.description)===null||a===void 0?void 0:a.value,...w,types:Object.values(N),directives:[...i.directives.map(ue),...m.map(ws)],extensions:Object.create(null),astNode:(o=g)!==null&&o!==void 0?o:i.astNode,extensionASTNodes:i.extensionASTNodes.concat(D),assumeValid:(c=t==null?void 0:t.assumeValid)!==null&&c!==void 0?c:!1};function R(E){return Dn(E)?new dn(R(E.ofType)):Ee(E)?new se(R(E.ofType)):J(E)}function J(E){return N[E.name]}function ue(E){const q=E.toConfig();return new Nt({...q,args:Et(q.args,X)})}function Ie(E){if(ST(E)||ET(E))return E;if(Qt(E))return Ge(E);if(Je(E))return Qe(E);if(qe(E))return Ce(E);if(qn(E))return pt(E);if(Kn(E))return Oe(E);if(Fn(E))return ge(E);Zn(!1,"Unexpected type: "+U(E))}function ge(E){var q;const x=E.toConfig(),L=(q=_[x.name])!==null&&q!==void 0?q:[];return new Cr({...x,fields:()=>({...Et(x.fields,pe=>({...pe,type:R(pe.type)})),...Xt(L)}),extensionASTNodes:x.extensionASTNodes.concat(L)})}function Oe(E){var q;const x=E.toConfig(),L=(q=_[E.name])!==null&&q!==void 0?q:[];return new ki({...x,values:{...x.values,...ft(L)},extensionASTNodes:x.extensionASTNodes.concat(L)})}function Ge(E){var q;const x=E.toConfig(),L=(q=_[x.name])!==null&&q!==void 0?q:[];let pe=x.specifiedByURL;for(const fe of L){var xe;pe=(xe=Fd(fe))!==null&&xe!==void 0?xe:pe}return new Mt({...x,specifiedByURL:pe,extensionASTNodes:x.extensionASTNodes.concat(L)})}function Qe(E){var q;const x=E.toConfig(),L=(q=_[x.name])!==null&&q!==void 0?q:[];return new ut({...x,interfaces:()=>[...E.getInterfaces().map(J),...Di(L)],fields:()=>({...Et(x.fields,O),...Fi(L)}),extensionASTNodes:x.extensionASTNodes.concat(L)})}function Ce(E){var q;const x=E.toConfig(),L=(q=_[x.name])!==null&&q!==void 0?q:[];return new Nr({...x,interfaces:()=>[...E.getInterfaces().map(J),...Di(L)],fields:()=>({...Et(x.fields,O),...Fi(L)}),extensionASTNodes:x.extensionASTNodes.concat(L)})}function pt(E){var q;const x=E.toConfig(),L=(q=_[x.name])!==null&&q!==void 0?q:[];return new Or({...x,types:()=>[...E.getTypes().map(J),...Zt(L)],extensionASTNodes:x.extensionASTNodes.concat(L)})}function O(E){return{...E,type:R(E.type),args:E.args&&Et(E.args,X)}}function X(E){return{...E,type:R(E.type)}}function on(E){const q={};for(const L of E){var x;const pe=(x=L.operationTypes)!==null&&x!==void 0?x:[];for(const xe of pe)q[xe.operation]=Ot(xe.type)}return q}function Ot(E){var q;const x=E.name.value,L=(q=gd[x])!==null&&q!==void 0?q:N[x];if(L===void 0)throw new Error(`Unknown type: "${x}".`);return L}function Ht(E){return E.kind===A.LIST_TYPE?new dn(Ht(E.type)):E.kind===A.NON_NULL_TYPE?new se(Ht(E.type)):Ot(E)}function ws(E){var q;return new Nt({name:E.name.value,description:(q=E.description)===null||q===void 0?void 0:q.value,locations:E.locations.map(({value:x})=>x),isRepeatable:E.repeatable,args:Ss(E.arguments),astNode:E})}function Fi(E){const q=Object.create(null);for(const pe of E){var x;const xe=(x=pe.fields)!==null&&x!==void 0?x:[];for(const fe of xe){var L;q[fe.name.value]={type:Ht(fe.type),description:(L=fe.description)===null||L===void 0?void 0:L.value,args:Ss(fe.arguments),deprecationReason:Er(fe),astNode:fe}}}return q}function Ss(E){const q=E??[],x=Object.create(null);for(const pe of q){var L;const xe=Ht(pe.type);x[pe.name.value]={type:xe,description:(L=pe.description)===null||L===void 0?void 0:L.value,defaultValue:jt(pe.defaultValue,xe),deprecationReason:Er(pe),astNode:pe}}return x}function Xt(E){const q=Object.create(null);for(const pe of E){var x;const xe=(x=pe.fields)!==null&&x!==void 0?x:[];for(const fe of xe){var L;const Mn=Ht(fe.type);q[fe.name.value]={type:Mn,description:(L=fe.description)===null||L===void 0?void 0:L.value,defaultValue:jt(fe.defaultValue,Mn),deprecationReason:Er(fe),astNode:fe}}}return q}function ft(E){const q=Object.create(null);for(const pe of E){var x;const xe=(x=pe.values)!==null&&x!==void 0?x:[];for(const fe of xe){var L;q[fe.name.value]={description:(L=fe.description)===null||L===void 0?void 0:L.value,deprecationReason:Er(fe),astNode:fe}}}return q}function Di(E){return E.flatMap(q=>{var x,L;return(x=(L=q.interfaces)===null||L===void 0?void 0:L.map(Ot))!==null&&x!==void 0?x:[]})}function Zt(E){return E.flatMap(q=>{var x,L;return(x=(L=q.types)===null||L===void 0?void 0:L.map(Ot))!==null&&x!==void 0?x:[]})}function Bn(E){var q;const x=E.name.value,L=(q=_[x])!==null&&q!==void 0?q:[];switch(E.kind){case A.OBJECT_TYPE_DEFINITION:{var pe;const tn=[E,...L];return new ut({name:x,description:(pe=E.description)===null||pe===void 0?void 0:pe.value,interfaces:()=>Di(tn),fields:()=>Fi(tn),astNode:E,extensionASTNodes:L})}case A.INTERFACE_TYPE_DEFINITION:{var xe;const tn=[E,...L];return new Nr({name:x,description:(xe=E.description)===null||xe===void 0?void 0:xe.value,interfaces:()=>Di(tn),fields:()=>Fi(tn),astNode:E,extensionASTNodes:L})}case A.ENUM_TYPE_DEFINITION:{var fe;const tn=[E,...L];return new ki({name:x,description:(fe=E.description)===null||fe===void 0?void 0:fe.value,values:ft(tn),astNode:E,extensionASTNodes:L})}case A.UNION_TYPE_DEFINITION:{var Mn;const tn=[E,...L];return new Or({name:x,description:(Mn=E.description)===null||Mn===void 0?void 0:Mn.value,types:()=>Zt(tn),astNode:E,extensionASTNodes:L})}case A.SCALAR_TYPE_DEFINITION:{var Li;return new Mt({name:x,description:(Li=E.description)===null||Li===void 0?void 0:Li.value,specifiedByURL:Fd(E),astNode:E,extensionASTNodes:L})}case A.INPUT_OBJECT_TYPE_DEFINITION:{var Ct;const tn=[E,...L];return new Cr({name:x,description:(Ct=E.description)===null||Ct===void 0?void 0:Ct.value,fields:()=>Xt(tn),astNode:E,extensionASTNodes:L,isOneOf:qP(E)})}}}}const gd=pi([...Jr,...Yr],i=>i.name);function Er(i){const n=Ts(__,i);return n==null?void 0:n.reason}function Fd(i){const n=Ts(p_,i);return n==null?void 0:n.url}function qP(i){return!!Ts(f_,i)}function VP(i,n){i!=null&&i.kind===A.DOCUMENT||de(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&UP(i);const r=$P({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},i,n);if(r.astNode==null)for(const o of r.types)switch(o.name){case"Query":r.query=o;break;case"Mutation":r.mutation=o;break;case"Subscription":r.subscription=o;break}const a=[...r.directives,...Ui.filter(o=>r.directives.every(c=>c.name!==o.name))];return new y_({...r,directives:a})}function jP(i,n){const t=iT(i,{noLocation:void 0,allowLegacyFragmentVariables:void 0});return VP(t,{assumeValidSDL:void 0,assumeValid:void 0})}function JP(i){const n=new Map;return GP(i,t=>{Je(t)&&YP(t,r=>{const a=Oo(r.type);Po(n,a).references.push({kind:hs.FIELD,parent:t,by:r}),WP(r,c=>{const d=Oo(c.type);Po(n,d).references.push({kind:hs.ARGUMENT,field:r,type:t,by:c})})}),qn(t)&&t.getTypes().forEach(r=>{Po(n,r).references.push({kind:hs.UNION,by:t})})}),new S0(n)}function GP(i,n){Object.entries(i.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function YP(i,n){Object.entries(i.getFields()).forEach(([,t])=>{n(t)})}function WP(i,n){Object.entries(i.args).forEach(([,t])=>{n(t)})}function Po(i,n){let t=i.get(n.name);return t||(t={references:[]},i.set(n.name,t)),t}function Oo(i){return Ee(i)||Dn(i)?Oo(i.ofType):i}const Dd=`type Query {
  User(id: Int!, draft: Boolean): User
  Users(draft: Boolean, where: User_where, limit: Int, page: Int, sort: String): Users
  docAccessUser(id: Int!): usersDocAccess
  meUser: usersMe
  initializedUser: Boolean
  Product(id: Int!, draft: Boolean): Product
  Products(draft: Boolean, where: Product_where, limit: Int, page: Int, sort: String): Products
  docAccessProduct(id: Int!): productsDocAccess
  Media(id: Int!, draft: Boolean): Media
  allMedia(draft: Boolean, where: Media_where, limit: Int, page: Int, sort: String): allMedia
  docAccessMedia(id: Int!): mediaDocAccess
  Order(id: Int!, draft: Boolean): Order
  Orders(draft: Boolean, where: Order_where, limit: Int, page: Int, sort: String): Orders
  docAccessOrder(id: Int!): ordersDocAccess
  Product_receipt(id: Int!, draft: Boolean): Product_receipt
  Product_receipts(draft: Boolean, where: Product_receipt_where, limit: Int, page: Int, sort: String): Product_receipts
  docAccessProduct_receipt(id: Int!): product_receiptDocAccess
  PayloadPreference(id: Int!, draft: Boolean): PayloadPreference
  PayloadPreferences(draft: Boolean, where: PayloadPreference_where, limit: Int, page: Int, sort: String): PayloadPreferences
  docAccessPayloadPreference(id: Int!): payload_preferencesDocAccess
  Access: Access
}

type User {
  id: Int
  role: User_role!
  updatedAt: DateTime
  createdAt: DateTime
  email: EmailAddress!
  resetPasswordToken: String
  resetPasswordExpiration: DateTime
  salt: String
  hash: String
  _verified: Boolean
  _verificationToken: String
  loginAttempts: Float
  lockUntil: DateTime
  password: String!
}

enum User_role {
  admin
  user
}

"""
A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the \`date-time\` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
"""
scalar DateTime

"""
A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address.
"""
scalar EmailAddress

type Users {
  docs: [User]
  hasNextPage: Boolean
  hasPrevPage: Boolean
  limit: Int
  nextPage: Int
  offset: Int
  page: Int
  pagingCounter: Int
  prevPage: Int
  totalDocs: Int
  totalPages: Int
}

input User_where {
  role: User_role_operator
  updatedAt: User_updatedAt_operator
  createdAt: User_createdAt_operator
  email: User_email_operator
  _verified: User__verified_operator
  id: User_id_operator
  AND: [User_where_and]
  OR: [User_where_or]
}

input User_role_operator {
  equals: User_role_Input
  not_equals: User_role_Input
  in: [User_role_Input]
  not_in: [User_role_Input]
  all: [User_role_Input]
}

enum User_role_Input {
  admin
  user
}

input User_updatedAt_operator {
  equals: DateTime
  not_equals: DateTime
  greater_than_equal: DateTime
  greater_than: DateTime
  less_than_equal: DateTime
  less_than: DateTime
  like: DateTime
  exists: Boolean
}

input User_createdAt_operator {
  equals: DateTime
  not_equals: DateTime
  greater_than_equal: DateTime
  greater_than: DateTime
  less_than_equal: DateTime
  less_than: DateTime
  like: DateTime
  exists: Boolean
}

input User_email_operator {
  equals: EmailAddress
  not_equals: EmailAddress
  like: EmailAddress
  contains: EmailAddress
  in: [EmailAddress]
  not_in: [EmailAddress]
  all: [EmailAddress]
}

input User__verified_operator {
  equals: Boolean
  not_equals: Boolean
  exists: Boolean
}

input User_id_operator {
  equals: Int
  not_equals: Int
  greater_than_equal: Int
  greater_than: Int
  less_than_equal: Int
  less_than: Int
  exists: Boolean
}

input User_where_and {
  role: User_role_operator
  updatedAt: User_updatedAt_operator
  createdAt: User_createdAt_operator
  email: User_email_operator
  _verified: User__verified_operator
  id: User_id_operator
  AND: [User_where_and]
  OR: [User_where_or]
}

input User_where_or {
  role: User_role_operator
  updatedAt: User_updatedAt_operator
  createdAt: User_createdAt_operator
  email: User_email_operator
  _verified: User__verified_operator
  id: User_id_operator
  AND: [User_where_and]
  OR: [User_where_or]
}

type usersDocAccess {
  fields: UsersDocAccessFields
  create: UsersCreateDocAccess
  read: UsersReadDocAccess
  update: UsersUpdateDocAccess
  delete: UsersDeleteDocAccess
  unlock: UsersUnlockDocAccess
}

type UsersDocAccessFields {
  role: UsersDocAccessFields_role
  updatedAt: UsersDocAccessFields_updatedAt
  createdAt: UsersDocAccessFields_createdAt
  email: UsersDocAccessFields_email
  _verified: UsersDocAccessFields__verified
  password: UsersDocAccessFields_password
}

type UsersDocAccessFields_role {
  create: UsersDocAccessFields_role_Create
  read: UsersDocAccessFields_role_Read
  update: UsersDocAccessFields_role_Update
  delete: UsersDocAccessFields_role_Delete
}

type UsersDocAccessFields_role_Create {
  permission: Boolean!
}

type UsersDocAccessFields_role_Read {
  permission: Boolean!
}

type UsersDocAccessFields_role_Update {
  permission: Boolean!
}

type UsersDocAccessFields_role_Delete {
  permission: Boolean!
}

type UsersDocAccessFields_updatedAt {
  create: UsersDocAccessFields_updatedAt_Create
  read: UsersDocAccessFields_updatedAt_Read
  update: UsersDocAccessFields_updatedAt_Update
  delete: UsersDocAccessFields_updatedAt_Delete
}

type UsersDocAccessFields_updatedAt_Create {
  permission: Boolean!
}

type UsersDocAccessFields_updatedAt_Read {
  permission: Boolean!
}

type UsersDocAccessFields_updatedAt_Update {
  permission: Boolean!
}

type UsersDocAccessFields_updatedAt_Delete {
  permission: Boolean!
}

type UsersDocAccessFields_createdAt {
  create: UsersDocAccessFields_createdAt_Create
  read: UsersDocAccessFields_createdAt_Read
  update: UsersDocAccessFields_createdAt_Update
  delete: UsersDocAccessFields_createdAt_Delete
}

type UsersDocAccessFields_createdAt_Create {
  permission: Boolean!
}

type UsersDocAccessFields_createdAt_Read {
  permission: Boolean!
}

type UsersDocAccessFields_createdAt_Update {
  permission: Boolean!
}

type UsersDocAccessFields_createdAt_Delete {
  permission: Boolean!
}

type UsersDocAccessFields_email {
  create: UsersDocAccessFields_email_Create
  read: UsersDocAccessFields_email_Read
  update: UsersDocAccessFields_email_Update
  delete: UsersDocAccessFields_email_Delete
}

type UsersDocAccessFields_email_Create {
  permission: Boolean!
}

type UsersDocAccessFields_email_Read {
  permission: Boolean!
}

type UsersDocAccessFields_email_Update {
  permission: Boolean!
}

type UsersDocAccessFields_email_Delete {
  permission: Boolean!
}

type UsersDocAccessFields__verified {
  create: UsersDocAccessFields__verified_Create
  read: UsersDocAccessFields__verified_Read
  update: UsersDocAccessFields__verified_Update
  delete: UsersDocAccessFields__verified_Delete
}

type UsersDocAccessFields__verified_Create {
  permission: Boolean!
}

type UsersDocAccessFields__verified_Read {
  permission: Boolean!
}

type UsersDocAccessFields__verified_Update {
  permission: Boolean!
}

type UsersDocAccessFields__verified_Delete {
  permission: Boolean!
}

type UsersDocAccessFields_password {
  create: UsersDocAccessFields_password_Create
  read: UsersDocAccessFields_password_Read
  update: UsersDocAccessFields_password_Update
  delete: UsersDocAccessFields_password_Delete
}

type UsersDocAccessFields_password_Create {
  permission: Boolean!
}

type UsersDocAccessFields_password_Read {
  permission: Boolean!
}

type UsersDocAccessFields_password_Update {
  permission: Boolean!
}

type UsersDocAccessFields_password_Delete {
  permission: Boolean!
}

type UsersCreateDocAccess {
  permission: Boolean!
  where: JSONObject
}

"""
The \`JSONObject\` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
"""
scalar JSONObject

type UsersReadDocAccess {
  permission: Boolean!
  where: JSONObject
}

type UsersUpdateDocAccess {
  permission: Boolean!
  where: JSONObject
}

type UsersDeleteDocAccess {
  permission: Boolean!
  where: JSONObject
}

type UsersUnlockDocAccess {
  permission: Boolean!
  where: JSONObject
}

type usersMe {
  collection: String
  exp: Int
  token: String
  user: User
}

type Product {
  id: Int
  user: User
  name: String!
  description: String
  price: Float!
  category: Product_category!
  product_receipt: Product_receipt!
  approvedForSale: Product_approvedForSale
  priceId: String
  stripeId: String
  images: [Product_Images!]!
  updatedAt: DateTime
  createdAt: DateTime
}

enum Product_category {
  flowers
  sets
}

type Product_receipt {
  id: Int
  user: User
  product: Product
  updatedAt: DateTime
  createdAt: DateTime
  url: String
  filename: String
  mimeType: String
  filesize: Float
  width: Float
  height: Float
}

enum Product_approvedForSale {
  pending
  approved
  rejected
}

type Product_Images {
  image(where: Product_Images_Image_where): Media
  id: String
}

type Media {
  id: Int
  alt: String
  user: User
  updatedAt: DateTime
  createdAt: DateTime
  url: String
  filename: String
  mimeType: String
  filesize: Float
  width: Float
  height: Float
  sizes: Media_Sizes
}

type Media_Sizes {
  thumbnail: Media_Sizes_Thumbnail
  card: Media_Sizes_Card
  table: Media_Sizes_Table
}

type Media_Sizes_Thumbnail {
  url: String
  width: Float
  height: Float
  mimeType: String
  filesize: Float
  filename: String
}

type Media_Sizes_Card {
  url: String
  width: Float
  height: Float
  mimeType: String
  filesize: Float
  filename: String
}

type Media_Sizes_Table {
  url: String
  width: Float
  height: Float
  mimeType: String
  filesize: Float
  filename: String
}

input Product_Images_Image_where {
  alt: Product_Images_Image_alt_operator
  user: Product_Images_Image_user_operator
  updatedAt: Product_Images_Image_updatedAt_operator
  createdAt: Product_Images_Image_createdAt_operator
  url: Product_Images_Image_url_operator
  filename: Product_Images_Image_filename_operator
  mimeType: Product_Images_Image_mimeType_operator
  filesize: Product_Images_Image_filesize_operator
  width: Product_Images_Image_width_operator
  height: Product_Images_Image_height_operator
  sizes__thumbnail__url: Product_Images_Image_sizes__thumbnail__url_operator
  sizes__thumbnail__width: Product_Images_Image_sizes__thumbnail__width_operator
  sizes__thumbnail__height: Product_Images_Image_sizes__thumbnail__height_operator
  sizes__thumbnail__mimeType: Product_Images_Image_sizes__thumbnail__mimeType_operator
  sizes__thumbnail__filesize: Product_Images_Image_sizes__thumbnail__filesize_operator
  sizes__thumbnail__filename: Product_Images_Image_sizes__thumbnail__filename_operator
  sizes__card__url: Product_Images_Image_sizes__card__url_operator
  sizes__card__width: Product_Images_Image_sizes__card__width_operator
  sizes__card__height: Product_Images_Image_sizes__card__height_operator
  sizes__card__mimeType: Product_Images_Image_sizes__card__mimeType_operator
  sizes__card__filesize: Product_Images_Image_sizes__card__filesize_operator
  sizes__card__filename: Product_Images_Image_sizes__card__filename_operator
  sizes__table__url: Product_Images_Image_sizes__table__url_operator
  sizes__table__width: Product_Images_Image_sizes__table__width_operator
  sizes__table__height: Product_Images_Image_sizes__table__height_operator
  sizes__table__mimeType: Product_Images_Image_sizes__table__mimeType_operator
  sizes__table__filesize: Product_Images_Image_sizes__table__filesize_operator
  sizes__table__filename: Product_Images_Image_sizes__table__filename_operator
  id: Product_Images_Image_id_operator
  AND: [Product_Images_Image_where_and]
  OR: [Product_Images_Image_where_or]
}

input Product_Images_Image_alt_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_Images_Image_user_operator {
  equals: JSON
  not_equals: JSON
  in: [JSON]
  not_in: [JSON]
  all: [JSON]
}

"""
The \`JSON\` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
"""
scalar JSON

input Product_Images_Image_updatedAt_operator {
  equals: DateTime
  not_equals: DateTime
  greater_than_equal: DateTime
  greater_than: DateTime
  less_than_equal: DateTime
  less_than: DateTime
  like: DateTime
  exists: Boolean
}

input Product_Images_Image_createdAt_operator {
  equals: DateTime
  not_equals: DateTime
  greater_than_equal: DateTime
  greater_than: DateTime
  less_than_equal: DateTime
  less_than: DateTime
  like: DateTime
  exists: Boolean
}

input Product_Images_Image_url_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_Images_Image_filename_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_Images_Image_mimeType_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_Images_Image_filesize_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Product_Images_Image_width_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Product_Images_Image_height_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Product_Images_Image_sizes__thumbnail__url_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_Images_Image_sizes__thumbnail__width_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Product_Images_Image_sizes__thumbnail__height_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Product_Images_Image_sizes__thumbnail__mimeType_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_Images_Image_sizes__thumbnail__filesize_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Product_Images_Image_sizes__thumbnail__filename_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_Images_Image_sizes__card__url_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_Images_Image_sizes__card__width_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Product_Images_Image_sizes__card__height_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Product_Images_Image_sizes__card__mimeType_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_Images_Image_sizes__card__filesize_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Product_Images_Image_sizes__card__filename_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_Images_Image_sizes__table__url_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_Images_Image_sizes__table__width_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Product_Images_Image_sizes__table__height_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Product_Images_Image_sizes__table__mimeType_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_Images_Image_sizes__table__filesize_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Product_Images_Image_sizes__table__filename_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_Images_Image_id_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_Images_Image_where_and {
  alt: Product_Images_Image_alt_operator
  user: Product_Images_Image_user_operator
  updatedAt: Product_Images_Image_updatedAt_operator
  createdAt: Product_Images_Image_createdAt_operator
  url: Product_Images_Image_url_operator
  filename: Product_Images_Image_filename_operator
  mimeType: Product_Images_Image_mimeType_operator
  filesize: Product_Images_Image_filesize_operator
  width: Product_Images_Image_width_operator
  height: Product_Images_Image_height_operator
  sizes__thumbnail__url: Product_Images_Image_sizes__thumbnail__url_operator
  sizes__thumbnail__width: Product_Images_Image_sizes__thumbnail__width_operator
  sizes__thumbnail__height: Product_Images_Image_sizes__thumbnail__height_operator
  sizes__thumbnail__mimeType: Product_Images_Image_sizes__thumbnail__mimeType_operator
  sizes__thumbnail__filesize: Product_Images_Image_sizes__thumbnail__filesize_operator
  sizes__thumbnail__filename: Product_Images_Image_sizes__thumbnail__filename_operator
  sizes__card__url: Product_Images_Image_sizes__card__url_operator
  sizes__card__width: Product_Images_Image_sizes__card__width_operator
  sizes__card__height: Product_Images_Image_sizes__card__height_operator
  sizes__card__mimeType: Product_Images_Image_sizes__card__mimeType_operator
  sizes__card__filesize: Product_Images_Image_sizes__card__filesize_operator
  sizes__card__filename: Product_Images_Image_sizes__card__filename_operator
  sizes__table__url: Product_Images_Image_sizes__table__url_operator
  sizes__table__width: Product_Images_Image_sizes__table__width_operator
  sizes__table__height: Product_Images_Image_sizes__table__height_operator
  sizes__table__mimeType: Product_Images_Image_sizes__table__mimeType_operator
  sizes__table__filesize: Product_Images_Image_sizes__table__filesize_operator
  sizes__table__filename: Product_Images_Image_sizes__table__filename_operator
  id: Product_Images_Image_id_operator
  AND: [Product_Images_Image_where_and]
  OR: [Product_Images_Image_where_or]
}

input Product_Images_Image_where_or {
  alt: Product_Images_Image_alt_operator
  user: Product_Images_Image_user_operator
  updatedAt: Product_Images_Image_updatedAt_operator
  createdAt: Product_Images_Image_createdAt_operator
  url: Product_Images_Image_url_operator
  filename: Product_Images_Image_filename_operator
  mimeType: Product_Images_Image_mimeType_operator
  filesize: Product_Images_Image_filesize_operator
  width: Product_Images_Image_width_operator
  height: Product_Images_Image_height_operator
  sizes__thumbnail__url: Product_Images_Image_sizes__thumbnail__url_operator
  sizes__thumbnail__width: Product_Images_Image_sizes__thumbnail__width_operator
  sizes__thumbnail__height: Product_Images_Image_sizes__thumbnail__height_operator
  sizes__thumbnail__mimeType: Product_Images_Image_sizes__thumbnail__mimeType_operator
  sizes__thumbnail__filesize: Product_Images_Image_sizes__thumbnail__filesize_operator
  sizes__thumbnail__filename: Product_Images_Image_sizes__thumbnail__filename_operator
  sizes__card__url: Product_Images_Image_sizes__card__url_operator
  sizes__card__width: Product_Images_Image_sizes__card__width_operator
  sizes__card__height: Product_Images_Image_sizes__card__height_operator
  sizes__card__mimeType: Product_Images_Image_sizes__card__mimeType_operator
  sizes__card__filesize: Product_Images_Image_sizes__card__filesize_operator
  sizes__card__filename: Product_Images_Image_sizes__card__filename_operator
  sizes__table__url: Product_Images_Image_sizes__table__url_operator
  sizes__table__width: Product_Images_Image_sizes__table__width_operator
  sizes__table__height: Product_Images_Image_sizes__table__height_operator
  sizes__table__mimeType: Product_Images_Image_sizes__table__mimeType_operator
  sizes__table__filesize: Product_Images_Image_sizes__table__filesize_operator
  sizes__table__filename: Product_Images_Image_sizes__table__filename_operator
  id: Product_Images_Image_id_operator
  AND: [Product_Images_Image_where_and]
  OR: [Product_Images_Image_where_or]
}

type Products {
  docs: [Product]
  hasNextPage: Boolean
  hasPrevPage: Boolean
  limit: Int
  nextPage: Int
  offset: Int
  page: Int
  pagingCounter: Int
  prevPage: Int
  totalDocs: Int
  totalPages: Int
}

input Product_where {
  user: Product_user_operator
  name: Product_name_operator
  description: Product_description_operator
  price: Product_price_operator
  category: Product_category_operator
  product_receipt: Product_product_receipt_operator
  approvedForSale: Product_approvedForSale_operator
  priceId: Product_priceId_operator
  stripeId: Product_stripeId_operator
  images__image: Product_images__image_operator
  images__id: Product_images__id_operator
  updatedAt: Product_updatedAt_operator
  createdAt: Product_createdAt_operator
  id: Product_id_operator
  AND: [Product_where_and]
  OR: [Product_where_or]
}

input Product_user_operator {
  equals: JSON
  not_equals: JSON
  in: [JSON]
  not_in: [JSON]
  all: [JSON]
}

input Product_name_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
}

input Product_description_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  exists: Boolean
}

input Product_price_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
}

input Product_category_operator {
  equals: Product_category_Input
  not_equals: Product_category_Input
  in: [Product_category_Input]
  not_in: [Product_category_Input]
  all: [Product_category_Input]
}

enum Product_category_Input {
  flowers
  sets
}

input Product_product_receipt_operator {
  equals: JSON
  not_equals: JSON
  in: [JSON]
  not_in: [JSON]
  all: [JSON]
}

input Product_approvedForSale_operator {
  equals: Product_approvedForSale_Input
  not_equals: Product_approvedForSale_Input
  in: [Product_approvedForSale_Input]
  not_in: [Product_approvedForSale_Input]
  all: [Product_approvedForSale_Input]
  exists: Boolean
}

enum Product_approvedForSale_Input {
  pending
  approved
  rejected
}

input Product_priceId_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_stripeId_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_images__image_operator {
  equals: String
  not_equals: String
}

input Product_images__id_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_updatedAt_operator {
  equals: DateTime
  not_equals: DateTime
  greater_than_equal: DateTime
  greater_than: DateTime
  less_than_equal: DateTime
  less_than: DateTime
  like: DateTime
  exists: Boolean
}

input Product_createdAt_operator {
  equals: DateTime
  not_equals: DateTime
  greater_than_equal: DateTime
  greater_than: DateTime
  less_than_equal: DateTime
  less_than: DateTime
  like: DateTime
  exists: Boolean
}

input Product_id_operator {
  equals: Int
  not_equals: Int
  greater_than_equal: Int
  greater_than: Int
  less_than_equal: Int
  less_than: Int
  exists: Boolean
}

input Product_where_and {
  user: Product_user_operator
  name: Product_name_operator
  description: Product_description_operator
  price: Product_price_operator
  category: Product_category_operator
  product_receipt: Product_product_receipt_operator
  approvedForSale: Product_approvedForSale_operator
  priceId: Product_priceId_operator
  stripeId: Product_stripeId_operator
  images__image: Product_images__image_operator
  images__id: Product_images__id_operator
  updatedAt: Product_updatedAt_operator
  createdAt: Product_createdAt_operator
  id: Product_id_operator
  AND: [Product_where_and]
  OR: [Product_where_or]
}

input Product_where_or {
  user: Product_user_operator
  name: Product_name_operator
  description: Product_description_operator
  price: Product_price_operator
  category: Product_category_operator
  product_receipt: Product_product_receipt_operator
  approvedForSale: Product_approvedForSale_operator
  priceId: Product_priceId_operator
  stripeId: Product_stripeId_operator
  images__image: Product_images__image_operator
  images__id: Product_images__id_operator
  updatedAt: Product_updatedAt_operator
  createdAt: Product_createdAt_operator
  id: Product_id_operator
  AND: [Product_where_and]
  OR: [Product_where_or]
}

type productsDocAccess {
  fields: ProductsDocAccessFields
  create: ProductsCreateDocAccess
  read: ProductsReadDocAccess
  update: ProductsUpdateDocAccess
  delete: ProductsDeleteDocAccess
}

type ProductsDocAccessFields {
  user: ProductsDocAccessFields_user
  name: ProductsDocAccessFields_name
  description: ProductsDocAccessFields_description
  price: ProductsDocAccessFields_price
  category: ProductsDocAccessFields_category
  product_receipt: ProductsDocAccessFields_product_receipt
  approvedForSale: ProductsDocAccessFields_approvedForSale
  priceId: ProductsDocAccessFields_priceId
  stripeId: ProductsDocAccessFields_stripeId
  images: ProductsDocAccessFields_images
  updatedAt: ProductsDocAccessFields_updatedAt
  createdAt: ProductsDocAccessFields_createdAt
}

type ProductsDocAccessFields_user {
  create: ProductsDocAccessFields_user_Create
  read: ProductsDocAccessFields_user_Read
  update: ProductsDocAccessFields_user_Update
  delete: ProductsDocAccessFields_user_Delete
}

type ProductsDocAccessFields_user_Create {
  permission: Boolean!
}

type ProductsDocAccessFields_user_Read {
  permission: Boolean!
}

type ProductsDocAccessFields_user_Update {
  permission: Boolean!
}

type ProductsDocAccessFields_user_Delete {
  permission: Boolean!
}

type ProductsDocAccessFields_name {
  create: ProductsDocAccessFields_name_Create
  read: ProductsDocAccessFields_name_Read
  update: ProductsDocAccessFields_name_Update
  delete: ProductsDocAccessFields_name_Delete
}

type ProductsDocAccessFields_name_Create {
  permission: Boolean!
}

type ProductsDocAccessFields_name_Read {
  permission: Boolean!
}

type ProductsDocAccessFields_name_Update {
  permission: Boolean!
}

type ProductsDocAccessFields_name_Delete {
  permission: Boolean!
}

type ProductsDocAccessFields_description {
  create: ProductsDocAccessFields_description_Create
  read: ProductsDocAccessFields_description_Read
  update: ProductsDocAccessFields_description_Update
  delete: ProductsDocAccessFields_description_Delete
}

type ProductsDocAccessFields_description_Create {
  permission: Boolean!
}

type ProductsDocAccessFields_description_Read {
  permission: Boolean!
}

type ProductsDocAccessFields_description_Update {
  permission: Boolean!
}

type ProductsDocAccessFields_description_Delete {
  permission: Boolean!
}

type ProductsDocAccessFields_price {
  create: ProductsDocAccessFields_price_Create
  read: ProductsDocAccessFields_price_Read
  update: ProductsDocAccessFields_price_Update
  delete: ProductsDocAccessFields_price_Delete
}

type ProductsDocAccessFields_price_Create {
  permission: Boolean!
}

type ProductsDocAccessFields_price_Read {
  permission: Boolean!
}

type ProductsDocAccessFields_price_Update {
  permission: Boolean!
}

type ProductsDocAccessFields_price_Delete {
  permission: Boolean!
}

type ProductsDocAccessFields_category {
  create: ProductsDocAccessFields_category_Create
  read: ProductsDocAccessFields_category_Read
  update: ProductsDocAccessFields_category_Update
  delete: ProductsDocAccessFields_category_Delete
}

type ProductsDocAccessFields_category_Create {
  permission: Boolean!
}

type ProductsDocAccessFields_category_Read {
  permission: Boolean!
}

type ProductsDocAccessFields_category_Update {
  permission: Boolean!
}

type ProductsDocAccessFields_category_Delete {
  permission: Boolean!
}

type ProductsDocAccessFields_product_receipt {
  create: ProductsDocAccessFields_product_receipt_Create
  read: ProductsDocAccessFields_product_receipt_Read
  update: ProductsDocAccessFields_product_receipt_Update
  delete: ProductsDocAccessFields_product_receipt_Delete
}

type ProductsDocAccessFields_product_receipt_Create {
  permission: Boolean!
}

type ProductsDocAccessFields_product_receipt_Read {
  permission: Boolean!
}

type ProductsDocAccessFields_product_receipt_Update {
  permission: Boolean!
}

type ProductsDocAccessFields_product_receipt_Delete {
  permission: Boolean!
}

type ProductsDocAccessFields_approvedForSale {
  create: ProductsDocAccessFields_approvedForSale_Create
  read: ProductsDocAccessFields_approvedForSale_Read
  update: ProductsDocAccessFields_approvedForSale_Update
  delete: ProductsDocAccessFields_approvedForSale_Delete
}

type ProductsDocAccessFields_approvedForSale_Create {
  permission: Boolean!
}

type ProductsDocAccessFields_approvedForSale_Read {
  permission: Boolean!
}

type ProductsDocAccessFields_approvedForSale_Update {
  permission: Boolean!
}

type ProductsDocAccessFields_approvedForSale_Delete {
  permission: Boolean!
}

type ProductsDocAccessFields_priceId {
  create: ProductsDocAccessFields_priceId_Create
  read: ProductsDocAccessFields_priceId_Read
  update: ProductsDocAccessFields_priceId_Update
  delete: ProductsDocAccessFields_priceId_Delete
}

type ProductsDocAccessFields_priceId_Create {
  permission: Boolean!
}

type ProductsDocAccessFields_priceId_Read {
  permission: Boolean!
}

type ProductsDocAccessFields_priceId_Update {
  permission: Boolean!
}

type ProductsDocAccessFields_priceId_Delete {
  permission: Boolean!
}

type ProductsDocAccessFields_stripeId {
  create: ProductsDocAccessFields_stripeId_Create
  read: ProductsDocAccessFields_stripeId_Read
  update: ProductsDocAccessFields_stripeId_Update
  delete: ProductsDocAccessFields_stripeId_Delete
}

type ProductsDocAccessFields_stripeId_Create {
  permission: Boolean!
}

type ProductsDocAccessFields_stripeId_Read {
  permission: Boolean!
}

type ProductsDocAccessFields_stripeId_Update {
  permission: Boolean!
}

type ProductsDocAccessFields_stripeId_Delete {
  permission: Boolean!
}

type ProductsDocAccessFields_images {
  create: ProductsDocAccessFields_images_Create
  read: ProductsDocAccessFields_images_Read
  update: ProductsDocAccessFields_images_Update
  delete: ProductsDocAccessFields_images_Delete
  fields: ProductsDocAccessFields_images_Fields
}

type ProductsDocAccessFields_images_Create {
  permission: Boolean!
}

type ProductsDocAccessFields_images_Read {
  permission: Boolean!
}

type ProductsDocAccessFields_images_Update {
  permission: Boolean!
}

type ProductsDocAccessFields_images_Delete {
  permission: Boolean!
}

type ProductsDocAccessFields_images_Fields {
  image: ProductsDocAccessFields_images_image
  id: ProductsDocAccessFields_images_id
}

type ProductsDocAccessFields_images_image {
  create: ProductsDocAccessFields_images_image_Create
  read: ProductsDocAccessFields_images_image_Read
  update: ProductsDocAccessFields_images_image_Update
  delete: ProductsDocAccessFields_images_image_Delete
}

type ProductsDocAccessFields_images_image_Create {
  permission: Boolean!
}

type ProductsDocAccessFields_images_image_Read {
  permission: Boolean!
}

type ProductsDocAccessFields_images_image_Update {
  permission: Boolean!
}

type ProductsDocAccessFields_images_image_Delete {
  permission: Boolean!
}

type ProductsDocAccessFields_images_id {
  create: ProductsDocAccessFields_images_id_Create
  read: ProductsDocAccessFields_images_id_Read
  update: ProductsDocAccessFields_images_id_Update
  delete: ProductsDocAccessFields_images_id_Delete
}

type ProductsDocAccessFields_images_id_Create {
  permission: Boolean!
}

type ProductsDocAccessFields_images_id_Read {
  permission: Boolean!
}

type ProductsDocAccessFields_images_id_Update {
  permission: Boolean!
}

type ProductsDocAccessFields_images_id_Delete {
  permission: Boolean!
}

type ProductsDocAccessFields_updatedAt {
  create: ProductsDocAccessFields_updatedAt_Create
  read: ProductsDocAccessFields_updatedAt_Read
  update: ProductsDocAccessFields_updatedAt_Update
  delete: ProductsDocAccessFields_updatedAt_Delete
}

type ProductsDocAccessFields_updatedAt_Create {
  permission: Boolean!
}

type ProductsDocAccessFields_updatedAt_Read {
  permission: Boolean!
}

type ProductsDocAccessFields_updatedAt_Update {
  permission: Boolean!
}

type ProductsDocAccessFields_updatedAt_Delete {
  permission: Boolean!
}

type ProductsDocAccessFields_createdAt {
  create: ProductsDocAccessFields_createdAt_Create
  read: ProductsDocAccessFields_createdAt_Read
  update: ProductsDocAccessFields_createdAt_Update
  delete: ProductsDocAccessFields_createdAt_Delete
}

type ProductsDocAccessFields_createdAt_Create {
  permission: Boolean!
}

type ProductsDocAccessFields_createdAt_Read {
  permission: Boolean!
}

type ProductsDocAccessFields_createdAt_Update {
  permission: Boolean!
}

type ProductsDocAccessFields_createdAt_Delete {
  permission: Boolean!
}

type ProductsCreateDocAccess {
  permission: Boolean!
  where: JSONObject
}

type ProductsReadDocAccess {
  permission: Boolean!
  where: JSONObject
}

type ProductsUpdateDocAccess {
  permission: Boolean!
  where: JSONObject
}

type ProductsDeleteDocAccess {
  permission: Boolean!
  where: JSONObject
}

type allMedia {
  docs: [Media]
  hasNextPage: Boolean
  hasPrevPage: Boolean
  limit: Int
  nextPage: Int
  offset: Int
  page: Int
  pagingCounter: Int
  prevPage: Int
  totalDocs: Int
  totalPages: Int
}

input Media_where {
  alt: Media_alt_operator
  user: Media_user_operator
  updatedAt: Media_updatedAt_operator
  createdAt: Media_createdAt_operator
  url: Media_url_operator
  filename: Media_filename_operator
  mimeType: Media_mimeType_operator
  filesize: Media_filesize_operator
  width: Media_width_operator
  height: Media_height_operator
  sizes__thumbnail__url: Media_sizes__thumbnail__url_operator
  sizes__thumbnail__width: Media_sizes__thumbnail__width_operator
  sizes__thumbnail__height: Media_sizes__thumbnail__height_operator
  sizes__thumbnail__mimeType: Media_sizes__thumbnail__mimeType_operator
  sizes__thumbnail__filesize: Media_sizes__thumbnail__filesize_operator
  sizes__thumbnail__filename: Media_sizes__thumbnail__filename_operator
  sizes__card__url: Media_sizes__card__url_operator
  sizes__card__width: Media_sizes__card__width_operator
  sizes__card__height: Media_sizes__card__height_operator
  sizes__card__mimeType: Media_sizes__card__mimeType_operator
  sizes__card__filesize: Media_sizes__card__filesize_operator
  sizes__card__filename: Media_sizes__card__filename_operator
  sizes__table__url: Media_sizes__table__url_operator
  sizes__table__width: Media_sizes__table__width_operator
  sizes__table__height: Media_sizes__table__height_operator
  sizes__table__mimeType: Media_sizes__table__mimeType_operator
  sizes__table__filesize: Media_sizes__table__filesize_operator
  sizes__table__filename: Media_sizes__table__filename_operator
  id: Media_id_operator
  AND: [Media_where_and]
  OR: [Media_where_or]
}

input Media_alt_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Media_user_operator {
  equals: JSON
  not_equals: JSON
  in: [JSON]
  not_in: [JSON]
  all: [JSON]
}

input Media_updatedAt_operator {
  equals: DateTime
  not_equals: DateTime
  greater_than_equal: DateTime
  greater_than: DateTime
  less_than_equal: DateTime
  less_than: DateTime
  like: DateTime
  exists: Boolean
}

input Media_createdAt_operator {
  equals: DateTime
  not_equals: DateTime
  greater_than_equal: DateTime
  greater_than: DateTime
  less_than_equal: DateTime
  less_than: DateTime
  like: DateTime
  exists: Boolean
}

input Media_url_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Media_filename_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Media_mimeType_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Media_filesize_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Media_width_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Media_height_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Media_sizes__thumbnail__url_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Media_sizes__thumbnail__width_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Media_sizes__thumbnail__height_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Media_sizes__thumbnail__mimeType_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Media_sizes__thumbnail__filesize_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Media_sizes__thumbnail__filename_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Media_sizes__card__url_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Media_sizes__card__width_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Media_sizes__card__height_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Media_sizes__card__mimeType_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Media_sizes__card__filesize_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Media_sizes__card__filename_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Media_sizes__table__url_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Media_sizes__table__width_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Media_sizes__table__height_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Media_sizes__table__mimeType_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Media_sizes__table__filesize_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Media_sizes__table__filename_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Media_id_operator {
  equals: Int
  not_equals: Int
  greater_than_equal: Int
  greater_than: Int
  less_than_equal: Int
  less_than: Int
  exists: Boolean
}

input Media_where_and {
  alt: Media_alt_operator
  user: Media_user_operator
  updatedAt: Media_updatedAt_operator
  createdAt: Media_createdAt_operator
  url: Media_url_operator
  filename: Media_filename_operator
  mimeType: Media_mimeType_operator
  filesize: Media_filesize_operator
  width: Media_width_operator
  height: Media_height_operator
  sizes__thumbnail__url: Media_sizes__thumbnail__url_operator
  sizes__thumbnail__width: Media_sizes__thumbnail__width_operator
  sizes__thumbnail__height: Media_sizes__thumbnail__height_operator
  sizes__thumbnail__mimeType: Media_sizes__thumbnail__mimeType_operator
  sizes__thumbnail__filesize: Media_sizes__thumbnail__filesize_operator
  sizes__thumbnail__filename: Media_sizes__thumbnail__filename_operator
  sizes__card__url: Media_sizes__card__url_operator
  sizes__card__width: Media_sizes__card__width_operator
  sizes__card__height: Media_sizes__card__height_operator
  sizes__card__mimeType: Media_sizes__card__mimeType_operator
  sizes__card__filesize: Media_sizes__card__filesize_operator
  sizes__card__filename: Media_sizes__card__filename_operator
  sizes__table__url: Media_sizes__table__url_operator
  sizes__table__width: Media_sizes__table__width_operator
  sizes__table__height: Media_sizes__table__height_operator
  sizes__table__mimeType: Media_sizes__table__mimeType_operator
  sizes__table__filesize: Media_sizes__table__filesize_operator
  sizes__table__filename: Media_sizes__table__filename_operator
  id: Media_id_operator
  AND: [Media_where_and]
  OR: [Media_where_or]
}

input Media_where_or {
  alt: Media_alt_operator
  user: Media_user_operator
  updatedAt: Media_updatedAt_operator
  createdAt: Media_createdAt_operator
  url: Media_url_operator
  filename: Media_filename_operator
  mimeType: Media_mimeType_operator
  filesize: Media_filesize_operator
  width: Media_width_operator
  height: Media_height_operator
  sizes__thumbnail__url: Media_sizes__thumbnail__url_operator
  sizes__thumbnail__width: Media_sizes__thumbnail__width_operator
  sizes__thumbnail__height: Media_sizes__thumbnail__height_operator
  sizes__thumbnail__mimeType: Media_sizes__thumbnail__mimeType_operator
  sizes__thumbnail__filesize: Media_sizes__thumbnail__filesize_operator
  sizes__thumbnail__filename: Media_sizes__thumbnail__filename_operator
  sizes__card__url: Media_sizes__card__url_operator
  sizes__card__width: Media_sizes__card__width_operator
  sizes__card__height: Media_sizes__card__height_operator
  sizes__card__mimeType: Media_sizes__card__mimeType_operator
  sizes__card__filesize: Media_sizes__card__filesize_operator
  sizes__card__filename: Media_sizes__card__filename_operator
  sizes__table__url: Media_sizes__table__url_operator
  sizes__table__width: Media_sizes__table__width_operator
  sizes__table__height: Media_sizes__table__height_operator
  sizes__table__mimeType: Media_sizes__table__mimeType_operator
  sizes__table__filesize: Media_sizes__table__filesize_operator
  sizes__table__filename: Media_sizes__table__filename_operator
  id: Media_id_operator
  AND: [Media_where_and]
  OR: [Media_where_or]
}

type mediaDocAccess {
  fields: MediaDocAccessFields
  create: MediaCreateDocAccess
  read: MediaReadDocAccess
  update: MediaUpdateDocAccess
  delete: MediaDeleteDocAccess
}

type MediaDocAccessFields {
  alt: MediaDocAccessFields_alt
  user: MediaDocAccessFields_user
  updatedAt: MediaDocAccessFields_updatedAt
  createdAt: MediaDocAccessFields_createdAt
  url: MediaDocAccessFields_url
  filename: MediaDocAccessFields_filename
  mimeType: MediaDocAccessFields_mimeType
  filesize: MediaDocAccessFields_filesize
  width: MediaDocAccessFields_width
  height: MediaDocAccessFields_height
  sizes: MediaDocAccessFields_sizes
}

type MediaDocAccessFields_alt {
  create: MediaDocAccessFields_alt_Create
  read: MediaDocAccessFields_alt_Read
  update: MediaDocAccessFields_alt_Update
  delete: MediaDocAccessFields_alt_Delete
}

type MediaDocAccessFields_alt_Create {
  permission: Boolean!
}

type MediaDocAccessFields_alt_Read {
  permission: Boolean!
}

type MediaDocAccessFields_alt_Update {
  permission: Boolean!
}

type MediaDocAccessFields_alt_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_user {
  create: MediaDocAccessFields_user_Create
  read: MediaDocAccessFields_user_Read
  update: MediaDocAccessFields_user_Update
  delete: MediaDocAccessFields_user_Delete
}

type MediaDocAccessFields_user_Create {
  permission: Boolean!
}

type MediaDocAccessFields_user_Read {
  permission: Boolean!
}

type MediaDocAccessFields_user_Update {
  permission: Boolean!
}

type MediaDocAccessFields_user_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_updatedAt {
  create: MediaDocAccessFields_updatedAt_Create
  read: MediaDocAccessFields_updatedAt_Read
  update: MediaDocAccessFields_updatedAt_Update
  delete: MediaDocAccessFields_updatedAt_Delete
}

type MediaDocAccessFields_updatedAt_Create {
  permission: Boolean!
}

type MediaDocAccessFields_updatedAt_Read {
  permission: Boolean!
}

type MediaDocAccessFields_updatedAt_Update {
  permission: Boolean!
}

type MediaDocAccessFields_updatedAt_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_createdAt {
  create: MediaDocAccessFields_createdAt_Create
  read: MediaDocAccessFields_createdAt_Read
  update: MediaDocAccessFields_createdAt_Update
  delete: MediaDocAccessFields_createdAt_Delete
}

type MediaDocAccessFields_createdAt_Create {
  permission: Boolean!
}

type MediaDocAccessFields_createdAt_Read {
  permission: Boolean!
}

type MediaDocAccessFields_createdAt_Update {
  permission: Boolean!
}

type MediaDocAccessFields_createdAt_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_url {
  create: MediaDocAccessFields_url_Create
  read: MediaDocAccessFields_url_Read
  update: MediaDocAccessFields_url_Update
  delete: MediaDocAccessFields_url_Delete
}

type MediaDocAccessFields_url_Create {
  permission: Boolean!
}

type MediaDocAccessFields_url_Read {
  permission: Boolean!
}

type MediaDocAccessFields_url_Update {
  permission: Boolean!
}

type MediaDocAccessFields_url_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_filename {
  create: MediaDocAccessFields_filename_Create
  read: MediaDocAccessFields_filename_Read
  update: MediaDocAccessFields_filename_Update
  delete: MediaDocAccessFields_filename_Delete
}

type MediaDocAccessFields_filename_Create {
  permission: Boolean!
}

type MediaDocAccessFields_filename_Read {
  permission: Boolean!
}

type MediaDocAccessFields_filename_Update {
  permission: Boolean!
}

type MediaDocAccessFields_filename_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_mimeType {
  create: MediaDocAccessFields_mimeType_Create
  read: MediaDocAccessFields_mimeType_Read
  update: MediaDocAccessFields_mimeType_Update
  delete: MediaDocAccessFields_mimeType_Delete
}

type MediaDocAccessFields_mimeType_Create {
  permission: Boolean!
}

type MediaDocAccessFields_mimeType_Read {
  permission: Boolean!
}

type MediaDocAccessFields_mimeType_Update {
  permission: Boolean!
}

type MediaDocAccessFields_mimeType_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_filesize {
  create: MediaDocAccessFields_filesize_Create
  read: MediaDocAccessFields_filesize_Read
  update: MediaDocAccessFields_filesize_Update
  delete: MediaDocAccessFields_filesize_Delete
}

type MediaDocAccessFields_filesize_Create {
  permission: Boolean!
}

type MediaDocAccessFields_filesize_Read {
  permission: Boolean!
}

type MediaDocAccessFields_filesize_Update {
  permission: Boolean!
}

type MediaDocAccessFields_filesize_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_width {
  create: MediaDocAccessFields_width_Create
  read: MediaDocAccessFields_width_Read
  update: MediaDocAccessFields_width_Update
  delete: MediaDocAccessFields_width_Delete
}

type MediaDocAccessFields_width_Create {
  permission: Boolean!
}

type MediaDocAccessFields_width_Read {
  permission: Boolean!
}

type MediaDocAccessFields_width_Update {
  permission: Boolean!
}

type MediaDocAccessFields_width_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_height {
  create: MediaDocAccessFields_height_Create
  read: MediaDocAccessFields_height_Read
  update: MediaDocAccessFields_height_Update
  delete: MediaDocAccessFields_height_Delete
}

type MediaDocAccessFields_height_Create {
  permission: Boolean!
}

type MediaDocAccessFields_height_Read {
  permission: Boolean!
}

type MediaDocAccessFields_height_Update {
  permission: Boolean!
}

type MediaDocAccessFields_height_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes {
  create: MediaDocAccessFields_sizes_Create
  read: MediaDocAccessFields_sizes_Read
  update: MediaDocAccessFields_sizes_Update
  delete: MediaDocAccessFields_sizes_Delete
  fields: MediaDocAccessFields_sizes_Fields
}

type MediaDocAccessFields_sizes_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_Fields {
  thumbnail: MediaDocAccessFields_sizes_thumbnail
  card: MediaDocAccessFields_sizes_card
  table: MediaDocAccessFields_sizes_table
}

type MediaDocAccessFields_sizes_thumbnail {
  create: MediaDocAccessFields_sizes_thumbnail_Create
  read: MediaDocAccessFields_sizes_thumbnail_Read
  update: MediaDocAccessFields_sizes_thumbnail_Update
  delete: MediaDocAccessFields_sizes_thumbnail_Delete
  fields: MediaDocAccessFields_sizes_thumbnail_Fields
}

type MediaDocAccessFields_sizes_thumbnail_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_Fields {
  url: MediaDocAccessFields_sizes_thumbnail_url
  width: MediaDocAccessFields_sizes_thumbnail_width
  height: MediaDocAccessFields_sizes_thumbnail_height
  mimeType: MediaDocAccessFields_sizes_thumbnail_mimeType
  filesize: MediaDocAccessFields_sizes_thumbnail_filesize
  filename: MediaDocAccessFields_sizes_thumbnail_filename
}

type MediaDocAccessFields_sizes_thumbnail_url {
  create: MediaDocAccessFields_sizes_thumbnail_url_Create
  read: MediaDocAccessFields_sizes_thumbnail_url_Read
  update: MediaDocAccessFields_sizes_thumbnail_url_Update
  delete: MediaDocAccessFields_sizes_thumbnail_url_Delete
}

type MediaDocAccessFields_sizes_thumbnail_url_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_url_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_url_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_url_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_width {
  create: MediaDocAccessFields_sizes_thumbnail_width_Create
  read: MediaDocAccessFields_sizes_thumbnail_width_Read
  update: MediaDocAccessFields_sizes_thumbnail_width_Update
  delete: MediaDocAccessFields_sizes_thumbnail_width_Delete
}

type MediaDocAccessFields_sizes_thumbnail_width_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_width_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_width_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_width_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_height {
  create: MediaDocAccessFields_sizes_thumbnail_height_Create
  read: MediaDocAccessFields_sizes_thumbnail_height_Read
  update: MediaDocAccessFields_sizes_thumbnail_height_Update
  delete: MediaDocAccessFields_sizes_thumbnail_height_Delete
}

type MediaDocAccessFields_sizes_thumbnail_height_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_height_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_height_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_height_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_mimeType {
  create: MediaDocAccessFields_sizes_thumbnail_mimeType_Create
  read: MediaDocAccessFields_sizes_thumbnail_mimeType_Read
  update: MediaDocAccessFields_sizes_thumbnail_mimeType_Update
  delete: MediaDocAccessFields_sizes_thumbnail_mimeType_Delete
}

type MediaDocAccessFields_sizes_thumbnail_mimeType_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_mimeType_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_mimeType_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_mimeType_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_filesize {
  create: MediaDocAccessFields_sizes_thumbnail_filesize_Create
  read: MediaDocAccessFields_sizes_thumbnail_filesize_Read
  update: MediaDocAccessFields_sizes_thumbnail_filesize_Update
  delete: MediaDocAccessFields_sizes_thumbnail_filesize_Delete
}

type MediaDocAccessFields_sizes_thumbnail_filesize_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_filesize_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_filesize_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_filesize_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_filename {
  create: MediaDocAccessFields_sizes_thumbnail_filename_Create
  read: MediaDocAccessFields_sizes_thumbnail_filename_Read
  update: MediaDocAccessFields_sizes_thumbnail_filename_Update
  delete: MediaDocAccessFields_sizes_thumbnail_filename_Delete
}

type MediaDocAccessFields_sizes_thumbnail_filename_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_filename_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_filename_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_thumbnail_filename_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card {
  create: MediaDocAccessFields_sizes_card_Create
  read: MediaDocAccessFields_sizes_card_Read
  update: MediaDocAccessFields_sizes_card_Update
  delete: MediaDocAccessFields_sizes_card_Delete
  fields: MediaDocAccessFields_sizes_card_Fields
}

type MediaDocAccessFields_sizes_card_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_Fields {
  url: MediaDocAccessFields_sizes_card_url
  width: MediaDocAccessFields_sizes_card_width
  height: MediaDocAccessFields_sizes_card_height
  mimeType: MediaDocAccessFields_sizes_card_mimeType
  filesize: MediaDocAccessFields_sizes_card_filesize
  filename: MediaDocAccessFields_sizes_card_filename
}

type MediaDocAccessFields_sizes_card_url {
  create: MediaDocAccessFields_sizes_card_url_Create
  read: MediaDocAccessFields_sizes_card_url_Read
  update: MediaDocAccessFields_sizes_card_url_Update
  delete: MediaDocAccessFields_sizes_card_url_Delete
}

type MediaDocAccessFields_sizes_card_url_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_url_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_url_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_url_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_width {
  create: MediaDocAccessFields_sizes_card_width_Create
  read: MediaDocAccessFields_sizes_card_width_Read
  update: MediaDocAccessFields_sizes_card_width_Update
  delete: MediaDocAccessFields_sizes_card_width_Delete
}

type MediaDocAccessFields_sizes_card_width_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_width_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_width_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_width_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_height {
  create: MediaDocAccessFields_sizes_card_height_Create
  read: MediaDocAccessFields_sizes_card_height_Read
  update: MediaDocAccessFields_sizes_card_height_Update
  delete: MediaDocAccessFields_sizes_card_height_Delete
}

type MediaDocAccessFields_sizes_card_height_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_height_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_height_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_height_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_mimeType {
  create: MediaDocAccessFields_sizes_card_mimeType_Create
  read: MediaDocAccessFields_sizes_card_mimeType_Read
  update: MediaDocAccessFields_sizes_card_mimeType_Update
  delete: MediaDocAccessFields_sizes_card_mimeType_Delete
}

type MediaDocAccessFields_sizes_card_mimeType_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_mimeType_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_mimeType_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_mimeType_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_filesize {
  create: MediaDocAccessFields_sizes_card_filesize_Create
  read: MediaDocAccessFields_sizes_card_filesize_Read
  update: MediaDocAccessFields_sizes_card_filesize_Update
  delete: MediaDocAccessFields_sizes_card_filesize_Delete
}

type MediaDocAccessFields_sizes_card_filesize_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_filesize_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_filesize_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_filesize_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_filename {
  create: MediaDocAccessFields_sizes_card_filename_Create
  read: MediaDocAccessFields_sizes_card_filename_Read
  update: MediaDocAccessFields_sizes_card_filename_Update
  delete: MediaDocAccessFields_sizes_card_filename_Delete
}

type MediaDocAccessFields_sizes_card_filename_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_filename_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_filename_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_card_filename_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table {
  create: MediaDocAccessFields_sizes_table_Create
  read: MediaDocAccessFields_sizes_table_Read
  update: MediaDocAccessFields_sizes_table_Update
  delete: MediaDocAccessFields_sizes_table_Delete
  fields: MediaDocAccessFields_sizes_table_Fields
}

type MediaDocAccessFields_sizes_table_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_Fields {
  url: MediaDocAccessFields_sizes_table_url
  width: MediaDocAccessFields_sizes_table_width
  height: MediaDocAccessFields_sizes_table_height
  mimeType: MediaDocAccessFields_sizes_table_mimeType
  filesize: MediaDocAccessFields_sizes_table_filesize
  filename: MediaDocAccessFields_sizes_table_filename
}

type MediaDocAccessFields_sizes_table_url {
  create: MediaDocAccessFields_sizes_table_url_Create
  read: MediaDocAccessFields_sizes_table_url_Read
  update: MediaDocAccessFields_sizes_table_url_Update
  delete: MediaDocAccessFields_sizes_table_url_Delete
}

type MediaDocAccessFields_sizes_table_url_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_url_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_url_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_url_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_width {
  create: MediaDocAccessFields_sizes_table_width_Create
  read: MediaDocAccessFields_sizes_table_width_Read
  update: MediaDocAccessFields_sizes_table_width_Update
  delete: MediaDocAccessFields_sizes_table_width_Delete
}

type MediaDocAccessFields_sizes_table_width_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_width_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_width_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_width_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_height {
  create: MediaDocAccessFields_sizes_table_height_Create
  read: MediaDocAccessFields_sizes_table_height_Read
  update: MediaDocAccessFields_sizes_table_height_Update
  delete: MediaDocAccessFields_sizes_table_height_Delete
}

type MediaDocAccessFields_sizes_table_height_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_height_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_height_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_height_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_mimeType {
  create: MediaDocAccessFields_sizes_table_mimeType_Create
  read: MediaDocAccessFields_sizes_table_mimeType_Read
  update: MediaDocAccessFields_sizes_table_mimeType_Update
  delete: MediaDocAccessFields_sizes_table_mimeType_Delete
}

type MediaDocAccessFields_sizes_table_mimeType_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_mimeType_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_mimeType_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_mimeType_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_filesize {
  create: MediaDocAccessFields_sizes_table_filesize_Create
  read: MediaDocAccessFields_sizes_table_filesize_Read
  update: MediaDocAccessFields_sizes_table_filesize_Update
  delete: MediaDocAccessFields_sizes_table_filesize_Delete
}

type MediaDocAccessFields_sizes_table_filesize_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_filesize_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_filesize_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_filesize_Delete {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_filename {
  create: MediaDocAccessFields_sizes_table_filename_Create
  read: MediaDocAccessFields_sizes_table_filename_Read
  update: MediaDocAccessFields_sizes_table_filename_Update
  delete: MediaDocAccessFields_sizes_table_filename_Delete
}

type MediaDocAccessFields_sizes_table_filename_Create {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_filename_Read {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_filename_Update {
  permission: Boolean!
}

type MediaDocAccessFields_sizes_table_filename_Delete {
  permission: Boolean!
}

type MediaCreateDocAccess {
  permission: Boolean!
  where: JSONObject
}

type MediaReadDocAccess {
  permission: Boolean!
  where: JSONObject
}

type MediaUpdateDocAccess {
  permission: Boolean!
  where: JSONObject
}

type MediaDeleteDocAccess {
  permission: Boolean!
  where: JSONObject
}

type Order {
  id: Int
  _isPaid: Boolean
  user: User!
  products: [Product!]!
  updatedAt: DateTime
  createdAt: DateTime
}

type Orders {
  docs: [Order]
  hasNextPage: Boolean
  hasPrevPage: Boolean
  limit: Int
  nextPage: Int
  offset: Int
  page: Int
  pagingCounter: Int
  prevPage: Int
  totalDocs: Int
  totalPages: Int
}

input Order_where {
  _isPaid: Order__isPaid_operator
  user: Order_user_operator
  products: Order_products_operator
  updatedAt: Order_updatedAt_operator
  createdAt: Order_createdAt_operator
  id: Order_id_operator
  AND: [Order_where_and]
  OR: [Order_where_or]
}

input Order__isPaid_operator {
  equals: Boolean
  not_equals: Boolean
}

input Order_user_operator {
  equals: JSON
  not_equals: JSON
  in: [JSON]
  not_in: [JSON]
  all: [JSON]
}

input Order_products_operator {
  equals: JSON
  not_equals: JSON
  in: [JSON]
  not_in: [JSON]
  all: [JSON]
}

input Order_updatedAt_operator {
  equals: DateTime
  not_equals: DateTime
  greater_than_equal: DateTime
  greater_than: DateTime
  less_than_equal: DateTime
  less_than: DateTime
  like: DateTime
  exists: Boolean
}

input Order_createdAt_operator {
  equals: DateTime
  not_equals: DateTime
  greater_than_equal: DateTime
  greater_than: DateTime
  less_than_equal: DateTime
  less_than: DateTime
  like: DateTime
  exists: Boolean
}

input Order_id_operator {
  equals: Int
  not_equals: Int
  greater_than_equal: Int
  greater_than: Int
  less_than_equal: Int
  less_than: Int
  exists: Boolean
}

input Order_where_and {
  _isPaid: Order__isPaid_operator
  user: Order_user_operator
  products: Order_products_operator
  updatedAt: Order_updatedAt_operator
  createdAt: Order_createdAt_operator
  id: Order_id_operator
  AND: [Order_where_and]
  OR: [Order_where_or]
}

input Order_where_or {
  _isPaid: Order__isPaid_operator
  user: Order_user_operator
  products: Order_products_operator
  updatedAt: Order_updatedAt_operator
  createdAt: Order_createdAt_operator
  id: Order_id_operator
  AND: [Order_where_and]
  OR: [Order_where_or]
}

type ordersDocAccess {
  fields: OrdersDocAccessFields
  create: OrdersCreateDocAccess
  read: OrdersReadDocAccess
  update: OrdersUpdateDocAccess
  delete: OrdersDeleteDocAccess
}

type OrdersDocAccessFields {
  _isPaid: OrdersDocAccessFields__isPaid
  user: OrdersDocAccessFields_user
  products: OrdersDocAccessFields_products
  updatedAt: OrdersDocAccessFields_updatedAt
  createdAt: OrdersDocAccessFields_createdAt
}

type OrdersDocAccessFields__isPaid {
  create: OrdersDocAccessFields__isPaid_Create
  read: OrdersDocAccessFields__isPaid_Read
  update: OrdersDocAccessFields__isPaid_Update
  delete: OrdersDocAccessFields__isPaid_Delete
}

type OrdersDocAccessFields__isPaid_Create {
  permission: Boolean!
}

type OrdersDocAccessFields__isPaid_Read {
  permission: Boolean!
}

type OrdersDocAccessFields__isPaid_Update {
  permission: Boolean!
}

type OrdersDocAccessFields__isPaid_Delete {
  permission: Boolean!
}

type OrdersDocAccessFields_user {
  create: OrdersDocAccessFields_user_Create
  read: OrdersDocAccessFields_user_Read
  update: OrdersDocAccessFields_user_Update
  delete: OrdersDocAccessFields_user_Delete
}

type OrdersDocAccessFields_user_Create {
  permission: Boolean!
}

type OrdersDocAccessFields_user_Read {
  permission: Boolean!
}

type OrdersDocAccessFields_user_Update {
  permission: Boolean!
}

type OrdersDocAccessFields_user_Delete {
  permission: Boolean!
}

type OrdersDocAccessFields_products {
  create: OrdersDocAccessFields_products_Create
  read: OrdersDocAccessFields_products_Read
  update: OrdersDocAccessFields_products_Update
  delete: OrdersDocAccessFields_products_Delete
}

type OrdersDocAccessFields_products_Create {
  permission: Boolean!
}

type OrdersDocAccessFields_products_Read {
  permission: Boolean!
}

type OrdersDocAccessFields_products_Update {
  permission: Boolean!
}

type OrdersDocAccessFields_products_Delete {
  permission: Boolean!
}

type OrdersDocAccessFields_updatedAt {
  create: OrdersDocAccessFields_updatedAt_Create
  read: OrdersDocAccessFields_updatedAt_Read
  update: OrdersDocAccessFields_updatedAt_Update
  delete: OrdersDocAccessFields_updatedAt_Delete
}

type OrdersDocAccessFields_updatedAt_Create {
  permission: Boolean!
}

type OrdersDocAccessFields_updatedAt_Read {
  permission: Boolean!
}

type OrdersDocAccessFields_updatedAt_Update {
  permission: Boolean!
}

type OrdersDocAccessFields_updatedAt_Delete {
  permission: Boolean!
}

type OrdersDocAccessFields_createdAt {
  create: OrdersDocAccessFields_createdAt_Create
  read: OrdersDocAccessFields_createdAt_Read
  update: OrdersDocAccessFields_createdAt_Update
  delete: OrdersDocAccessFields_createdAt_Delete
}

type OrdersDocAccessFields_createdAt_Create {
  permission: Boolean!
}

type OrdersDocAccessFields_createdAt_Read {
  permission: Boolean!
}

type OrdersDocAccessFields_createdAt_Update {
  permission: Boolean!
}

type OrdersDocAccessFields_createdAt_Delete {
  permission: Boolean!
}

type OrdersCreateDocAccess {
  permission: Boolean!
  where: JSONObject
}

type OrdersReadDocAccess {
  permission: Boolean!
  where: JSONObject
}

type OrdersUpdateDocAccess {
  permission: Boolean!
  where: JSONObject
}

type OrdersDeleteDocAccess {
  permission: Boolean!
  where: JSONObject
}

type Product_receipts {
  docs: [Product_receipt]
  hasNextPage: Boolean
  hasPrevPage: Boolean
  limit: Int
  nextPage: Int
  offset: Int
  page: Int
  pagingCounter: Int
  prevPage: Int
  totalDocs: Int
  totalPages: Int
}

input Product_receipt_where {
  user: Product_receipt_user_operator
  product: Product_receipt_product_operator
  updatedAt: Product_receipt_updatedAt_operator
  createdAt: Product_receipt_createdAt_operator
  url: Product_receipt_url_operator
  filename: Product_receipt_filename_operator
  mimeType: Product_receipt_mimeType_operator
  filesize: Product_receipt_filesize_operator
  width: Product_receipt_width_operator
  height: Product_receipt_height_operator
  id: Product_receipt_id_operator
  AND: [Product_receipt_where_and]
  OR: [Product_receipt_where_or]
}

input Product_receipt_user_operator {
  equals: JSON
  not_equals: JSON
  in: [JSON]
  not_in: [JSON]
  all: [JSON]
}

input Product_receipt_product_operator {
  equals: JSON
  not_equals: JSON
  in: [JSON]
  not_in: [JSON]
  all: [JSON]
}

input Product_receipt_updatedAt_operator {
  equals: DateTime
  not_equals: DateTime
  greater_than_equal: DateTime
  greater_than: DateTime
  less_than_equal: DateTime
  less_than: DateTime
  like: DateTime
  exists: Boolean
}

input Product_receipt_createdAt_operator {
  equals: DateTime
  not_equals: DateTime
  greater_than_equal: DateTime
  greater_than: DateTime
  less_than_equal: DateTime
  less_than: DateTime
  like: DateTime
  exists: Boolean
}

input Product_receipt_url_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_receipt_filename_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_receipt_mimeType_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input Product_receipt_filesize_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Product_receipt_width_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Product_receipt_height_operator {
  equals: Float
  not_equals: Float
  greater_than_equal: Float
  greater_than: Float
  less_than_equal: Float
  less_than: Float
  exists: Boolean
}

input Product_receipt_id_operator {
  equals: Int
  not_equals: Int
  greater_than_equal: Int
  greater_than: Int
  less_than_equal: Int
  less_than: Int
  exists: Boolean
}

input Product_receipt_where_and {
  user: Product_receipt_user_operator
  product: Product_receipt_product_operator
  updatedAt: Product_receipt_updatedAt_operator
  createdAt: Product_receipt_createdAt_operator
  url: Product_receipt_url_operator
  filename: Product_receipt_filename_operator
  mimeType: Product_receipt_mimeType_operator
  filesize: Product_receipt_filesize_operator
  width: Product_receipt_width_operator
  height: Product_receipt_height_operator
  id: Product_receipt_id_operator
  AND: [Product_receipt_where_and]
  OR: [Product_receipt_where_or]
}

input Product_receipt_where_or {
  user: Product_receipt_user_operator
  product: Product_receipt_product_operator
  updatedAt: Product_receipt_updatedAt_operator
  createdAt: Product_receipt_createdAt_operator
  url: Product_receipt_url_operator
  filename: Product_receipt_filename_operator
  mimeType: Product_receipt_mimeType_operator
  filesize: Product_receipt_filesize_operator
  width: Product_receipt_width_operator
  height: Product_receipt_height_operator
  id: Product_receipt_id_operator
  AND: [Product_receipt_where_and]
  OR: [Product_receipt_where_or]
}

type product_receiptDocAccess {
  fields: Product_receiptDocAccessFields
  create: Product_receiptCreateDocAccess
  read: Product_receiptReadDocAccess
  update: Product_receiptUpdateDocAccess
  delete: Product_receiptDeleteDocAccess
}

type Product_receiptDocAccessFields {
  user: Product_receiptDocAccessFields_user
  product: Product_receiptDocAccessFields_product
  updatedAt: Product_receiptDocAccessFields_updatedAt
  createdAt: Product_receiptDocAccessFields_createdAt
  url: Product_receiptDocAccessFields_url
  filename: Product_receiptDocAccessFields_filename
  mimeType: Product_receiptDocAccessFields_mimeType
  filesize: Product_receiptDocAccessFields_filesize
  width: Product_receiptDocAccessFields_width
  height: Product_receiptDocAccessFields_height
}

type Product_receiptDocAccessFields_user {
  create: Product_receiptDocAccessFields_user_Create
  read: Product_receiptDocAccessFields_user_Read
  update: Product_receiptDocAccessFields_user_Update
  delete: Product_receiptDocAccessFields_user_Delete
}

type Product_receiptDocAccessFields_user_Create {
  permission: Boolean!
}

type Product_receiptDocAccessFields_user_Read {
  permission: Boolean!
}

type Product_receiptDocAccessFields_user_Update {
  permission: Boolean!
}

type Product_receiptDocAccessFields_user_Delete {
  permission: Boolean!
}

type Product_receiptDocAccessFields_product {
  create: Product_receiptDocAccessFields_product_Create
  read: Product_receiptDocAccessFields_product_Read
  update: Product_receiptDocAccessFields_product_Update
  delete: Product_receiptDocAccessFields_product_Delete
}

type Product_receiptDocAccessFields_product_Create {
  permission: Boolean!
}

type Product_receiptDocAccessFields_product_Read {
  permission: Boolean!
}

type Product_receiptDocAccessFields_product_Update {
  permission: Boolean!
}

type Product_receiptDocAccessFields_product_Delete {
  permission: Boolean!
}

type Product_receiptDocAccessFields_updatedAt {
  create: Product_receiptDocAccessFields_updatedAt_Create
  read: Product_receiptDocAccessFields_updatedAt_Read
  update: Product_receiptDocAccessFields_updatedAt_Update
  delete: Product_receiptDocAccessFields_updatedAt_Delete
}

type Product_receiptDocAccessFields_updatedAt_Create {
  permission: Boolean!
}

type Product_receiptDocAccessFields_updatedAt_Read {
  permission: Boolean!
}

type Product_receiptDocAccessFields_updatedAt_Update {
  permission: Boolean!
}

type Product_receiptDocAccessFields_updatedAt_Delete {
  permission: Boolean!
}

type Product_receiptDocAccessFields_createdAt {
  create: Product_receiptDocAccessFields_createdAt_Create
  read: Product_receiptDocAccessFields_createdAt_Read
  update: Product_receiptDocAccessFields_createdAt_Update
  delete: Product_receiptDocAccessFields_createdAt_Delete
}

type Product_receiptDocAccessFields_createdAt_Create {
  permission: Boolean!
}

type Product_receiptDocAccessFields_createdAt_Read {
  permission: Boolean!
}

type Product_receiptDocAccessFields_createdAt_Update {
  permission: Boolean!
}

type Product_receiptDocAccessFields_createdAt_Delete {
  permission: Boolean!
}

type Product_receiptDocAccessFields_url {
  create: Product_receiptDocAccessFields_url_Create
  read: Product_receiptDocAccessFields_url_Read
  update: Product_receiptDocAccessFields_url_Update
  delete: Product_receiptDocAccessFields_url_Delete
}

type Product_receiptDocAccessFields_url_Create {
  permission: Boolean!
}

type Product_receiptDocAccessFields_url_Read {
  permission: Boolean!
}

type Product_receiptDocAccessFields_url_Update {
  permission: Boolean!
}

type Product_receiptDocAccessFields_url_Delete {
  permission: Boolean!
}

type Product_receiptDocAccessFields_filename {
  create: Product_receiptDocAccessFields_filename_Create
  read: Product_receiptDocAccessFields_filename_Read
  update: Product_receiptDocAccessFields_filename_Update
  delete: Product_receiptDocAccessFields_filename_Delete
}

type Product_receiptDocAccessFields_filename_Create {
  permission: Boolean!
}

type Product_receiptDocAccessFields_filename_Read {
  permission: Boolean!
}

type Product_receiptDocAccessFields_filename_Update {
  permission: Boolean!
}

type Product_receiptDocAccessFields_filename_Delete {
  permission: Boolean!
}

type Product_receiptDocAccessFields_mimeType {
  create: Product_receiptDocAccessFields_mimeType_Create
  read: Product_receiptDocAccessFields_mimeType_Read
  update: Product_receiptDocAccessFields_mimeType_Update
  delete: Product_receiptDocAccessFields_mimeType_Delete
}

type Product_receiptDocAccessFields_mimeType_Create {
  permission: Boolean!
}

type Product_receiptDocAccessFields_mimeType_Read {
  permission: Boolean!
}

type Product_receiptDocAccessFields_mimeType_Update {
  permission: Boolean!
}

type Product_receiptDocAccessFields_mimeType_Delete {
  permission: Boolean!
}

type Product_receiptDocAccessFields_filesize {
  create: Product_receiptDocAccessFields_filesize_Create
  read: Product_receiptDocAccessFields_filesize_Read
  update: Product_receiptDocAccessFields_filesize_Update
  delete: Product_receiptDocAccessFields_filesize_Delete
}

type Product_receiptDocAccessFields_filesize_Create {
  permission: Boolean!
}

type Product_receiptDocAccessFields_filesize_Read {
  permission: Boolean!
}

type Product_receiptDocAccessFields_filesize_Update {
  permission: Boolean!
}

type Product_receiptDocAccessFields_filesize_Delete {
  permission: Boolean!
}

type Product_receiptDocAccessFields_width {
  create: Product_receiptDocAccessFields_width_Create
  read: Product_receiptDocAccessFields_width_Read
  update: Product_receiptDocAccessFields_width_Update
  delete: Product_receiptDocAccessFields_width_Delete
}

type Product_receiptDocAccessFields_width_Create {
  permission: Boolean!
}

type Product_receiptDocAccessFields_width_Read {
  permission: Boolean!
}

type Product_receiptDocAccessFields_width_Update {
  permission: Boolean!
}

type Product_receiptDocAccessFields_width_Delete {
  permission: Boolean!
}

type Product_receiptDocAccessFields_height {
  create: Product_receiptDocAccessFields_height_Create
  read: Product_receiptDocAccessFields_height_Read
  update: Product_receiptDocAccessFields_height_Update
  delete: Product_receiptDocAccessFields_height_Delete
}

type Product_receiptDocAccessFields_height_Create {
  permission: Boolean!
}

type Product_receiptDocAccessFields_height_Read {
  permission: Boolean!
}

type Product_receiptDocAccessFields_height_Update {
  permission: Boolean!
}

type Product_receiptDocAccessFields_height_Delete {
  permission: Boolean!
}

type Product_receiptCreateDocAccess {
  permission: Boolean!
  where: JSONObject
}

type Product_receiptReadDocAccess {
  permission: Boolean!
  where: JSONObject
}

type Product_receiptUpdateDocAccess {
  permission: Boolean!
  where: JSONObject
}

type Product_receiptDeleteDocAccess {
  permission: Boolean!
  where: JSONObject
}

type PayloadPreference {
  id: Int
  user: PayloadPreference_User_Relationship!
  key: String
  value: JSON
  updatedAt: DateTime
  createdAt: DateTime
}

type PayloadPreference_User_Relationship {
  relationTo: PayloadPreference_User_RelationTo
  value: PayloadPreference_User
}

enum PayloadPreference_User_RelationTo {
  users
}

union PayloadPreference_User = User

type PayloadPreferences {
  docs: [PayloadPreference]
  hasNextPage: Boolean
  hasPrevPage: Boolean
  limit: Int
  nextPage: Int
  offset: Int
  page: Int
  pagingCounter: Int
  prevPage: Int
  totalDocs: Int
  totalPages: Int
}

input PayloadPreference_where {
  user: PayloadPreference_user_Relation
  key: PayloadPreference_key_operator
  value: PayloadPreference_value_operator
  updatedAt: PayloadPreference_updatedAt_operator
  createdAt: PayloadPreference_createdAt_operator
  id: PayloadPreference_id_operator
  AND: [PayloadPreference_where_and]
  OR: [PayloadPreference_where_or]
}

input PayloadPreference_user_Relation {
  relationTo: PayloadPreference_user_Relation_RelationTo
  value: JSON
}

enum PayloadPreference_user_Relation_RelationTo {
  users
}

input PayloadPreference_key_operator {
  equals: String
  not_equals: String
  like: String
  contains: String
  in: [String]
  not_in: [String]
  all: [String]
  exists: Boolean
}

input PayloadPreference_value_operator {
  equals: JSON
  not_equals: JSON
  like: JSON
  contains: JSON
  within: JSON
  intersects: JSON
  exists: Boolean
}

input PayloadPreference_updatedAt_operator {
  equals: DateTime
  not_equals: DateTime
  greater_than_equal: DateTime
  greater_than: DateTime
  less_than_equal: DateTime
  less_than: DateTime
  like: DateTime
  exists: Boolean
}

input PayloadPreference_createdAt_operator {
  equals: DateTime
  not_equals: DateTime
  greater_than_equal: DateTime
  greater_than: DateTime
  less_than_equal: DateTime
  less_than: DateTime
  like: DateTime
  exists: Boolean
}

input PayloadPreference_id_operator {
  equals: Int
  not_equals: Int
  greater_than_equal: Int
  greater_than: Int
  less_than_equal: Int
  less_than: Int
  exists: Boolean
}

input PayloadPreference_where_and {
  user: PayloadPreference_user_Relation
  key: PayloadPreference_key_operator
  value: PayloadPreference_value_operator
  updatedAt: PayloadPreference_updatedAt_operator
  createdAt: PayloadPreference_createdAt_operator
  id: PayloadPreference_id_operator
  AND: [PayloadPreference_where_and]
  OR: [PayloadPreference_where_or]
}

input PayloadPreference_where_or {
  user: PayloadPreference_user_Relation
  key: PayloadPreference_key_operator
  value: PayloadPreference_value_operator
  updatedAt: PayloadPreference_updatedAt_operator
  createdAt: PayloadPreference_createdAt_operator
  id: PayloadPreference_id_operator
  AND: [PayloadPreference_where_and]
  OR: [PayloadPreference_where_or]
}

type payload_preferencesDocAccess {
  fields: PayloadPreferencesDocAccessFields
  create: PayloadPreferencesCreateDocAccess
  read: PayloadPreferencesReadDocAccess
  update: PayloadPreferencesUpdateDocAccess
  delete: PayloadPreferencesDeleteDocAccess
}

type PayloadPreferencesDocAccessFields {
  user: PayloadPreferencesDocAccessFields_user
  key: PayloadPreferencesDocAccessFields_key
  value: PayloadPreferencesDocAccessFields_value
  updatedAt: PayloadPreferencesDocAccessFields_updatedAt
  createdAt: PayloadPreferencesDocAccessFields_createdAt
}

type PayloadPreferencesDocAccessFields_user {
  create: PayloadPreferencesDocAccessFields_user_Create
  read: PayloadPreferencesDocAccessFields_user_Read
  update: PayloadPreferencesDocAccessFields_user_Update
  delete: PayloadPreferencesDocAccessFields_user_Delete
}

type PayloadPreferencesDocAccessFields_user_Create {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_user_Read {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_user_Update {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_user_Delete {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_key {
  create: PayloadPreferencesDocAccessFields_key_Create
  read: PayloadPreferencesDocAccessFields_key_Read
  update: PayloadPreferencesDocAccessFields_key_Update
  delete: PayloadPreferencesDocAccessFields_key_Delete
}

type PayloadPreferencesDocAccessFields_key_Create {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_key_Read {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_key_Update {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_key_Delete {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_value {
  create: PayloadPreferencesDocAccessFields_value_Create
  read: PayloadPreferencesDocAccessFields_value_Read
  update: PayloadPreferencesDocAccessFields_value_Update
  delete: PayloadPreferencesDocAccessFields_value_Delete
}

type PayloadPreferencesDocAccessFields_value_Create {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_value_Read {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_value_Update {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_value_Delete {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_updatedAt {
  create: PayloadPreferencesDocAccessFields_updatedAt_Create
  read: PayloadPreferencesDocAccessFields_updatedAt_Read
  update: PayloadPreferencesDocAccessFields_updatedAt_Update
  delete: PayloadPreferencesDocAccessFields_updatedAt_Delete
}

type PayloadPreferencesDocAccessFields_updatedAt_Create {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_updatedAt_Read {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_updatedAt_Update {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_updatedAt_Delete {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_createdAt {
  create: PayloadPreferencesDocAccessFields_createdAt_Create
  read: PayloadPreferencesDocAccessFields_createdAt_Read
  update: PayloadPreferencesDocAccessFields_createdAt_Update
  delete: PayloadPreferencesDocAccessFields_createdAt_Delete
}

type PayloadPreferencesDocAccessFields_createdAt_Create {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_createdAt_Read {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_createdAt_Update {
  permission: Boolean!
}

type PayloadPreferencesDocAccessFields_createdAt_Delete {
  permission: Boolean!
}

type PayloadPreferencesCreateDocAccess {
  permission: Boolean!
  where: JSONObject
}

type PayloadPreferencesReadDocAccess {
  permission: Boolean!
  where: JSONObject
}

type PayloadPreferencesUpdateDocAccess {
  permission: Boolean!
  where: JSONObject
}

type PayloadPreferencesDeleteDocAccess {
  permission: Boolean!
  where: JSONObject
}

type Access {
  canAccessAdmin: Boolean!
  users: usersAccess
  products: productsAccess
  media: mediaAccess
  orders: ordersAccess
  product_receipt: product_receiptAccess
  payload_preferences: payload_preferencesAccess
}

type usersAccess {
  fields: UsersFields
  create: UsersCreateAccess
  read: UsersReadAccess
  update: UsersUpdateAccess
  delete: UsersDeleteAccess
  unlock: UsersUnlockAccess
}

type UsersFields {
  role: UsersFields_role
  updatedAt: UsersFields_updatedAt
  createdAt: UsersFields_createdAt
  email: UsersFields_email
  _verified: UsersFields__verified
  password: UsersFields_password
}

type UsersFields_role {
  create: UsersFields_role_Create
  read: UsersFields_role_Read
  update: UsersFields_role_Update
  delete: UsersFields_role_Delete
}

type UsersFields_role_Create {
  permission: Boolean!
}

type UsersFields_role_Read {
  permission: Boolean!
}

type UsersFields_role_Update {
  permission: Boolean!
}

type UsersFields_role_Delete {
  permission: Boolean!
}

type UsersFields_updatedAt {
  create: UsersFields_updatedAt_Create
  read: UsersFields_updatedAt_Read
  update: UsersFields_updatedAt_Update
  delete: UsersFields_updatedAt_Delete
}

type UsersFields_updatedAt_Create {
  permission: Boolean!
}

type UsersFields_updatedAt_Read {
  permission: Boolean!
}

type UsersFields_updatedAt_Update {
  permission: Boolean!
}

type UsersFields_updatedAt_Delete {
  permission: Boolean!
}

type UsersFields_createdAt {
  create: UsersFields_createdAt_Create
  read: UsersFields_createdAt_Read
  update: UsersFields_createdAt_Update
  delete: UsersFields_createdAt_Delete
}

type UsersFields_createdAt_Create {
  permission: Boolean!
}

type UsersFields_createdAt_Read {
  permission: Boolean!
}

type UsersFields_createdAt_Update {
  permission: Boolean!
}

type UsersFields_createdAt_Delete {
  permission: Boolean!
}

type UsersFields_email {
  create: UsersFields_email_Create
  read: UsersFields_email_Read
  update: UsersFields_email_Update
  delete: UsersFields_email_Delete
}

type UsersFields_email_Create {
  permission: Boolean!
}

type UsersFields_email_Read {
  permission: Boolean!
}

type UsersFields_email_Update {
  permission: Boolean!
}

type UsersFields_email_Delete {
  permission: Boolean!
}

type UsersFields__verified {
  create: UsersFields__verified_Create
  read: UsersFields__verified_Read
  update: UsersFields__verified_Update
  delete: UsersFields__verified_Delete
}

type UsersFields__verified_Create {
  permission: Boolean!
}

type UsersFields__verified_Read {
  permission: Boolean!
}

type UsersFields__verified_Update {
  permission: Boolean!
}

type UsersFields__verified_Delete {
  permission: Boolean!
}

type UsersFields_password {
  create: UsersFields_password_Create
  read: UsersFields_password_Read
  update: UsersFields_password_Update
  delete: UsersFields_password_Delete
}

type UsersFields_password_Create {
  permission: Boolean!
}

type UsersFields_password_Read {
  permission: Boolean!
}

type UsersFields_password_Update {
  permission: Boolean!
}

type UsersFields_password_Delete {
  permission: Boolean!
}

type UsersCreateAccess {
  permission: Boolean!
  where: JSONObject
}

type UsersReadAccess {
  permission: Boolean!
  where: JSONObject
}

type UsersUpdateAccess {
  permission: Boolean!
  where: JSONObject
}

type UsersDeleteAccess {
  permission: Boolean!
  where: JSONObject
}

type UsersUnlockAccess {
  permission: Boolean!
  where: JSONObject
}

type productsAccess {
  fields: ProductsFields
  create: ProductsCreateAccess
  read: ProductsReadAccess
  update: ProductsUpdateAccess
  delete: ProductsDeleteAccess
}

type ProductsFields {
  user: ProductsFields_user
  name: ProductsFields_name
  description: ProductsFields_description
  price: ProductsFields_price
  category: ProductsFields_category
  product_receipt: ProductsFields_product_receipt
  approvedForSale: ProductsFields_approvedForSale
  priceId: ProductsFields_priceId
  stripeId: ProductsFields_stripeId
  images: ProductsFields_images
  updatedAt: ProductsFields_updatedAt
  createdAt: ProductsFields_createdAt
}

type ProductsFields_user {
  create: ProductsFields_user_Create
  read: ProductsFields_user_Read
  update: ProductsFields_user_Update
  delete: ProductsFields_user_Delete
}

type ProductsFields_user_Create {
  permission: Boolean!
}

type ProductsFields_user_Read {
  permission: Boolean!
}

type ProductsFields_user_Update {
  permission: Boolean!
}

type ProductsFields_user_Delete {
  permission: Boolean!
}

type ProductsFields_name {
  create: ProductsFields_name_Create
  read: ProductsFields_name_Read
  update: ProductsFields_name_Update
  delete: ProductsFields_name_Delete
}

type ProductsFields_name_Create {
  permission: Boolean!
}

type ProductsFields_name_Read {
  permission: Boolean!
}

type ProductsFields_name_Update {
  permission: Boolean!
}

type ProductsFields_name_Delete {
  permission: Boolean!
}

type ProductsFields_description {
  create: ProductsFields_description_Create
  read: ProductsFields_description_Read
  update: ProductsFields_description_Update
  delete: ProductsFields_description_Delete
}

type ProductsFields_description_Create {
  permission: Boolean!
}

type ProductsFields_description_Read {
  permission: Boolean!
}

type ProductsFields_description_Update {
  permission: Boolean!
}

type ProductsFields_description_Delete {
  permission: Boolean!
}

type ProductsFields_price {
  create: ProductsFields_price_Create
  read: ProductsFields_price_Read
  update: ProductsFields_price_Update
  delete: ProductsFields_price_Delete
}

type ProductsFields_price_Create {
  permission: Boolean!
}

type ProductsFields_price_Read {
  permission: Boolean!
}

type ProductsFields_price_Update {
  permission: Boolean!
}

type ProductsFields_price_Delete {
  permission: Boolean!
}

type ProductsFields_category {
  create: ProductsFields_category_Create
  read: ProductsFields_category_Read
  update: ProductsFields_category_Update
  delete: ProductsFields_category_Delete
}

type ProductsFields_category_Create {
  permission: Boolean!
}

type ProductsFields_category_Read {
  permission: Boolean!
}

type ProductsFields_category_Update {
  permission: Boolean!
}

type ProductsFields_category_Delete {
  permission: Boolean!
}

type ProductsFields_product_receipt {
  create: ProductsFields_product_receipt_Create
  read: ProductsFields_product_receipt_Read
  update: ProductsFields_product_receipt_Update
  delete: ProductsFields_product_receipt_Delete
}

type ProductsFields_product_receipt_Create {
  permission: Boolean!
}

type ProductsFields_product_receipt_Read {
  permission: Boolean!
}

type ProductsFields_product_receipt_Update {
  permission: Boolean!
}

type ProductsFields_product_receipt_Delete {
  permission: Boolean!
}

type ProductsFields_approvedForSale {
  create: ProductsFields_approvedForSale_Create
  read: ProductsFields_approvedForSale_Read
  update: ProductsFields_approvedForSale_Update
  delete: ProductsFields_approvedForSale_Delete
}

type ProductsFields_approvedForSale_Create {
  permission: Boolean!
}

type ProductsFields_approvedForSale_Read {
  permission: Boolean!
}

type ProductsFields_approvedForSale_Update {
  permission: Boolean!
}

type ProductsFields_approvedForSale_Delete {
  permission: Boolean!
}

type ProductsFields_priceId {
  create: ProductsFields_priceId_Create
  read: ProductsFields_priceId_Read
  update: ProductsFields_priceId_Update
  delete: ProductsFields_priceId_Delete
}

type ProductsFields_priceId_Create {
  permission: Boolean!
}

type ProductsFields_priceId_Read {
  permission: Boolean!
}

type ProductsFields_priceId_Update {
  permission: Boolean!
}

type ProductsFields_priceId_Delete {
  permission: Boolean!
}

type ProductsFields_stripeId {
  create: ProductsFields_stripeId_Create
  read: ProductsFields_stripeId_Read
  update: ProductsFields_stripeId_Update
  delete: ProductsFields_stripeId_Delete
}

type ProductsFields_stripeId_Create {
  permission: Boolean!
}

type ProductsFields_stripeId_Read {
  permission: Boolean!
}

type ProductsFields_stripeId_Update {
  permission: Boolean!
}

type ProductsFields_stripeId_Delete {
  permission: Boolean!
}

type ProductsFields_images {
  create: ProductsFields_images_Create
  read: ProductsFields_images_Read
  update: ProductsFields_images_Update
  delete: ProductsFields_images_Delete
  fields: ProductsFields_images_Fields
}

type ProductsFields_images_Create {
  permission: Boolean!
}

type ProductsFields_images_Read {
  permission: Boolean!
}

type ProductsFields_images_Update {
  permission: Boolean!
}

type ProductsFields_images_Delete {
  permission: Boolean!
}

type ProductsFields_images_Fields {
  image: ProductsFields_images_image
  id: ProductsFields_images_id
}

type ProductsFields_images_image {
  create: ProductsFields_images_image_Create
  read: ProductsFields_images_image_Read
  update: ProductsFields_images_image_Update
  delete: ProductsFields_images_image_Delete
}

type ProductsFields_images_image_Create {
  permission: Boolean!
}

type ProductsFields_images_image_Read {
  permission: Boolean!
}

type ProductsFields_images_image_Update {
  permission: Boolean!
}

type ProductsFields_images_image_Delete {
  permission: Boolean!
}

type ProductsFields_images_id {
  create: ProductsFields_images_id_Create
  read: ProductsFields_images_id_Read
  update: ProductsFields_images_id_Update
  delete: ProductsFields_images_id_Delete
}

type ProductsFields_images_id_Create {
  permission: Boolean!
}

type ProductsFields_images_id_Read {
  permission: Boolean!
}

type ProductsFields_images_id_Update {
  permission: Boolean!
}

type ProductsFields_images_id_Delete {
  permission: Boolean!
}

type ProductsFields_updatedAt {
  create: ProductsFields_updatedAt_Create
  read: ProductsFields_updatedAt_Read
  update: ProductsFields_updatedAt_Update
  delete: ProductsFields_updatedAt_Delete
}

type ProductsFields_updatedAt_Create {
  permission: Boolean!
}

type ProductsFields_updatedAt_Read {
  permission: Boolean!
}

type ProductsFields_updatedAt_Update {
  permission: Boolean!
}

type ProductsFields_updatedAt_Delete {
  permission: Boolean!
}

type ProductsFields_createdAt {
  create: ProductsFields_createdAt_Create
  read: ProductsFields_createdAt_Read
  update: ProductsFields_createdAt_Update
  delete: ProductsFields_createdAt_Delete
}

type ProductsFields_createdAt_Create {
  permission: Boolean!
}

type ProductsFields_createdAt_Read {
  permission: Boolean!
}

type ProductsFields_createdAt_Update {
  permission: Boolean!
}

type ProductsFields_createdAt_Delete {
  permission: Boolean!
}

type ProductsCreateAccess {
  permission: Boolean!
  where: JSONObject
}

type ProductsReadAccess {
  permission: Boolean!
  where: JSONObject
}

type ProductsUpdateAccess {
  permission: Boolean!
  where: JSONObject
}

type ProductsDeleteAccess {
  permission: Boolean!
  where: JSONObject
}

type mediaAccess {
  fields: MediaFields
  create: MediaCreateAccess
  read: MediaReadAccess
  update: MediaUpdateAccess
  delete: MediaDeleteAccess
}

type MediaFields {
  alt: MediaFields_alt
  user: MediaFields_user
  updatedAt: MediaFields_updatedAt
  createdAt: MediaFields_createdAt
  url: MediaFields_url
  filename: MediaFields_filename
  mimeType: MediaFields_mimeType
  filesize: MediaFields_filesize
  width: MediaFields_width
  height: MediaFields_height
  sizes: MediaFields_sizes
}

type MediaFields_alt {
  create: MediaFields_alt_Create
  read: MediaFields_alt_Read
  update: MediaFields_alt_Update
  delete: MediaFields_alt_Delete
}

type MediaFields_alt_Create {
  permission: Boolean!
}

type MediaFields_alt_Read {
  permission: Boolean!
}

type MediaFields_alt_Update {
  permission: Boolean!
}

type MediaFields_alt_Delete {
  permission: Boolean!
}

type MediaFields_user {
  create: MediaFields_user_Create
  read: MediaFields_user_Read
  update: MediaFields_user_Update
  delete: MediaFields_user_Delete
}

type MediaFields_user_Create {
  permission: Boolean!
}

type MediaFields_user_Read {
  permission: Boolean!
}

type MediaFields_user_Update {
  permission: Boolean!
}

type MediaFields_user_Delete {
  permission: Boolean!
}

type MediaFields_updatedAt {
  create: MediaFields_updatedAt_Create
  read: MediaFields_updatedAt_Read
  update: MediaFields_updatedAt_Update
  delete: MediaFields_updatedAt_Delete
}

type MediaFields_updatedAt_Create {
  permission: Boolean!
}

type MediaFields_updatedAt_Read {
  permission: Boolean!
}

type MediaFields_updatedAt_Update {
  permission: Boolean!
}

type MediaFields_updatedAt_Delete {
  permission: Boolean!
}

type MediaFields_createdAt {
  create: MediaFields_createdAt_Create
  read: MediaFields_createdAt_Read
  update: MediaFields_createdAt_Update
  delete: MediaFields_createdAt_Delete
}

type MediaFields_createdAt_Create {
  permission: Boolean!
}

type MediaFields_createdAt_Read {
  permission: Boolean!
}

type MediaFields_createdAt_Update {
  permission: Boolean!
}

type MediaFields_createdAt_Delete {
  permission: Boolean!
}

type MediaFields_url {
  create: MediaFields_url_Create
  read: MediaFields_url_Read
  update: MediaFields_url_Update
  delete: MediaFields_url_Delete
}

type MediaFields_url_Create {
  permission: Boolean!
}

type MediaFields_url_Read {
  permission: Boolean!
}

type MediaFields_url_Update {
  permission: Boolean!
}

type MediaFields_url_Delete {
  permission: Boolean!
}

type MediaFields_filename {
  create: MediaFields_filename_Create
  read: MediaFields_filename_Read
  update: MediaFields_filename_Update
  delete: MediaFields_filename_Delete
}

type MediaFields_filename_Create {
  permission: Boolean!
}

type MediaFields_filename_Read {
  permission: Boolean!
}

type MediaFields_filename_Update {
  permission: Boolean!
}

type MediaFields_filename_Delete {
  permission: Boolean!
}

type MediaFields_mimeType {
  create: MediaFields_mimeType_Create
  read: MediaFields_mimeType_Read
  update: MediaFields_mimeType_Update
  delete: MediaFields_mimeType_Delete
}

type MediaFields_mimeType_Create {
  permission: Boolean!
}

type MediaFields_mimeType_Read {
  permission: Boolean!
}

type MediaFields_mimeType_Update {
  permission: Boolean!
}

type MediaFields_mimeType_Delete {
  permission: Boolean!
}

type MediaFields_filesize {
  create: MediaFields_filesize_Create
  read: MediaFields_filesize_Read
  update: MediaFields_filesize_Update
  delete: MediaFields_filesize_Delete
}

type MediaFields_filesize_Create {
  permission: Boolean!
}

type MediaFields_filesize_Read {
  permission: Boolean!
}

type MediaFields_filesize_Update {
  permission: Boolean!
}

type MediaFields_filesize_Delete {
  permission: Boolean!
}

type MediaFields_width {
  create: MediaFields_width_Create
  read: MediaFields_width_Read
  update: MediaFields_width_Update
  delete: MediaFields_width_Delete
}

type MediaFields_width_Create {
  permission: Boolean!
}

type MediaFields_width_Read {
  permission: Boolean!
}

type MediaFields_width_Update {
  permission: Boolean!
}

type MediaFields_width_Delete {
  permission: Boolean!
}

type MediaFields_height {
  create: MediaFields_height_Create
  read: MediaFields_height_Read
  update: MediaFields_height_Update
  delete: MediaFields_height_Delete
}

type MediaFields_height_Create {
  permission: Boolean!
}

type MediaFields_height_Read {
  permission: Boolean!
}

type MediaFields_height_Update {
  permission: Boolean!
}

type MediaFields_height_Delete {
  permission: Boolean!
}

type MediaFields_sizes {
  create: MediaFields_sizes_Create
  read: MediaFields_sizes_Read
  update: MediaFields_sizes_Update
  delete: MediaFields_sizes_Delete
  fields: MediaFields_sizes_Fields
}

type MediaFields_sizes_Create {
  permission: Boolean!
}

type MediaFields_sizes_Read {
  permission: Boolean!
}

type MediaFields_sizes_Update {
  permission: Boolean!
}

type MediaFields_sizes_Delete {
  permission: Boolean!
}

type MediaFields_sizes_Fields {
  thumbnail: MediaFields_sizes_thumbnail
  card: MediaFields_sizes_card
  table: MediaFields_sizes_table
}

type MediaFields_sizes_thumbnail {
  create: MediaFields_sizes_thumbnail_Create
  read: MediaFields_sizes_thumbnail_Read
  update: MediaFields_sizes_thumbnail_Update
  delete: MediaFields_sizes_thumbnail_Delete
  fields: MediaFields_sizes_thumbnail_Fields
}

type MediaFields_sizes_thumbnail_Create {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_Read {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_Update {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_Delete {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_Fields {
  url: MediaFields_sizes_thumbnail_url
  width: MediaFields_sizes_thumbnail_width
  height: MediaFields_sizes_thumbnail_height
  mimeType: MediaFields_sizes_thumbnail_mimeType
  filesize: MediaFields_sizes_thumbnail_filesize
  filename: MediaFields_sizes_thumbnail_filename
}

type MediaFields_sizes_thumbnail_url {
  create: MediaFields_sizes_thumbnail_url_Create
  read: MediaFields_sizes_thumbnail_url_Read
  update: MediaFields_sizes_thumbnail_url_Update
  delete: MediaFields_sizes_thumbnail_url_Delete
}

type MediaFields_sizes_thumbnail_url_Create {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_url_Read {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_url_Update {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_url_Delete {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_width {
  create: MediaFields_sizes_thumbnail_width_Create
  read: MediaFields_sizes_thumbnail_width_Read
  update: MediaFields_sizes_thumbnail_width_Update
  delete: MediaFields_sizes_thumbnail_width_Delete
}

type MediaFields_sizes_thumbnail_width_Create {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_width_Read {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_width_Update {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_width_Delete {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_height {
  create: MediaFields_sizes_thumbnail_height_Create
  read: MediaFields_sizes_thumbnail_height_Read
  update: MediaFields_sizes_thumbnail_height_Update
  delete: MediaFields_sizes_thumbnail_height_Delete
}

type MediaFields_sizes_thumbnail_height_Create {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_height_Read {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_height_Update {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_height_Delete {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_mimeType {
  create: MediaFields_sizes_thumbnail_mimeType_Create
  read: MediaFields_sizes_thumbnail_mimeType_Read
  update: MediaFields_sizes_thumbnail_mimeType_Update
  delete: MediaFields_sizes_thumbnail_mimeType_Delete
}

type MediaFields_sizes_thumbnail_mimeType_Create {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_mimeType_Read {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_mimeType_Update {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_mimeType_Delete {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_filesize {
  create: MediaFields_sizes_thumbnail_filesize_Create
  read: MediaFields_sizes_thumbnail_filesize_Read
  update: MediaFields_sizes_thumbnail_filesize_Update
  delete: MediaFields_sizes_thumbnail_filesize_Delete
}

type MediaFields_sizes_thumbnail_filesize_Create {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_filesize_Read {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_filesize_Update {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_filesize_Delete {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_filename {
  create: MediaFields_sizes_thumbnail_filename_Create
  read: MediaFields_sizes_thumbnail_filename_Read
  update: MediaFields_sizes_thumbnail_filename_Update
  delete: MediaFields_sizes_thumbnail_filename_Delete
}

type MediaFields_sizes_thumbnail_filename_Create {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_filename_Read {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_filename_Update {
  permission: Boolean!
}

type MediaFields_sizes_thumbnail_filename_Delete {
  permission: Boolean!
}

type MediaFields_sizes_card {
  create: MediaFields_sizes_card_Create
  read: MediaFields_sizes_card_Read
  update: MediaFields_sizes_card_Update
  delete: MediaFields_sizes_card_Delete
  fields: MediaFields_sizes_card_Fields
}

type MediaFields_sizes_card_Create {
  permission: Boolean!
}

type MediaFields_sizes_card_Read {
  permission: Boolean!
}

type MediaFields_sizes_card_Update {
  permission: Boolean!
}

type MediaFields_sizes_card_Delete {
  permission: Boolean!
}

type MediaFields_sizes_card_Fields {
  url: MediaFields_sizes_card_url
  width: MediaFields_sizes_card_width
  height: MediaFields_sizes_card_height
  mimeType: MediaFields_sizes_card_mimeType
  filesize: MediaFields_sizes_card_filesize
  filename: MediaFields_sizes_card_filename
}

type MediaFields_sizes_card_url {
  create: MediaFields_sizes_card_url_Create
  read: MediaFields_sizes_card_url_Read
  update: MediaFields_sizes_card_url_Update
  delete: MediaFields_sizes_card_url_Delete
}

type MediaFields_sizes_card_url_Create {
  permission: Boolean!
}

type MediaFields_sizes_card_url_Read {
  permission: Boolean!
}

type MediaFields_sizes_card_url_Update {
  permission: Boolean!
}

type MediaFields_sizes_card_url_Delete {
  permission: Boolean!
}

type MediaFields_sizes_card_width {
  create: MediaFields_sizes_card_width_Create
  read: MediaFields_sizes_card_width_Read
  update: MediaFields_sizes_card_width_Update
  delete: MediaFields_sizes_card_width_Delete
}

type MediaFields_sizes_card_width_Create {
  permission: Boolean!
}

type MediaFields_sizes_card_width_Read {
  permission: Boolean!
}

type MediaFields_sizes_card_width_Update {
  permission: Boolean!
}

type MediaFields_sizes_card_width_Delete {
  permission: Boolean!
}

type MediaFields_sizes_card_height {
  create: MediaFields_sizes_card_height_Create
  read: MediaFields_sizes_card_height_Read
  update: MediaFields_sizes_card_height_Update
  delete: MediaFields_sizes_card_height_Delete
}

type MediaFields_sizes_card_height_Create {
  permission: Boolean!
}

type MediaFields_sizes_card_height_Read {
  permission: Boolean!
}

type MediaFields_sizes_card_height_Update {
  permission: Boolean!
}

type MediaFields_sizes_card_height_Delete {
  permission: Boolean!
}

type MediaFields_sizes_card_mimeType {
  create: MediaFields_sizes_card_mimeType_Create
  read: MediaFields_sizes_card_mimeType_Read
  update: MediaFields_sizes_card_mimeType_Update
  delete: MediaFields_sizes_card_mimeType_Delete
}

type MediaFields_sizes_card_mimeType_Create {
  permission: Boolean!
}

type MediaFields_sizes_card_mimeType_Read {
  permission: Boolean!
}

type MediaFields_sizes_card_mimeType_Update {
  permission: Boolean!
}

type MediaFields_sizes_card_mimeType_Delete {
  permission: Boolean!
}

type MediaFields_sizes_card_filesize {
  create: MediaFields_sizes_card_filesize_Create
  read: MediaFields_sizes_card_filesize_Read
  update: MediaFields_sizes_card_filesize_Update
  delete: MediaFields_sizes_card_filesize_Delete
}

type MediaFields_sizes_card_filesize_Create {
  permission: Boolean!
}

type MediaFields_sizes_card_filesize_Read {
  permission: Boolean!
}

type MediaFields_sizes_card_filesize_Update {
  permission: Boolean!
}

type MediaFields_sizes_card_filesize_Delete {
  permission: Boolean!
}

type MediaFields_sizes_card_filename {
  create: MediaFields_sizes_card_filename_Create
  read: MediaFields_sizes_card_filename_Read
  update: MediaFields_sizes_card_filename_Update
  delete: MediaFields_sizes_card_filename_Delete
}

type MediaFields_sizes_card_filename_Create {
  permission: Boolean!
}

type MediaFields_sizes_card_filename_Read {
  permission: Boolean!
}

type MediaFields_sizes_card_filename_Update {
  permission: Boolean!
}

type MediaFields_sizes_card_filename_Delete {
  permission: Boolean!
}

type MediaFields_sizes_table {
  create: MediaFields_sizes_table_Create
  read: MediaFields_sizes_table_Read
  update: MediaFields_sizes_table_Update
  delete: MediaFields_sizes_table_Delete
  fields: MediaFields_sizes_table_Fields
}

type MediaFields_sizes_table_Create {
  permission: Boolean!
}

type MediaFields_sizes_table_Read {
  permission: Boolean!
}

type MediaFields_sizes_table_Update {
  permission: Boolean!
}

type MediaFields_sizes_table_Delete {
  permission: Boolean!
}

type MediaFields_sizes_table_Fields {
  url: MediaFields_sizes_table_url
  width: MediaFields_sizes_table_width
  height: MediaFields_sizes_table_height
  mimeType: MediaFields_sizes_table_mimeType
  filesize: MediaFields_sizes_table_filesize
  filename: MediaFields_sizes_table_filename
}

type MediaFields_sizes_table_url {
  create: MediaFields_sizes_table_url_Create
  read: MediaFields_sizes_table_url_Read
  update: MediaFields_sizes_table_url_Update
  delete: MediaFields_sizes_table_url_Delete
}

type MediaFields_sizes_table_url_Create {
  permission: Boolean!
}

type MediaFields_sizes_table_url_Read {
  permission: Boolean!
}

type MediaFields_sizes_table_url_Update {
  permission: Boolean!
}

type MediaFields_sizes_table_url_Delete {
  permission: Boolean!
}

type MediaFields_sizes_table_width {
  create: MediaFields_sizes_table_width_Create
  read: MediaFields_sizes_table_width_Read
  update: MediaFields_sizes_table_width_Update
  delete: MediaFields_sizes_table_width_Delete
}

type MediaFields_sizes_table_width_Create {
  permission: Boolean!
}

type MediaFields_sizes_table_width_Read {
  permission: Boolean!
}

type MediaFields_sizes_table_width_Update {
  permission: Boolean!
}

type MediaFields_sizes_table_width_Delete {
  permission: Boolean!
}

type MediaFields_sizes_table_height {
  create: MediaFields_sizes_table_height_Create
  read: MediaFields_sizes_table_height_Read
  update: MediaFields_sizes_table_height_Update
  delete: MediaFields_sizes_table_height_Delete
}

type MediaFields_sizes_table_height_Create {
  permission: Boolean!
}

type MediaFields_sizes_table_height_Read {
  permission: Boolean!
}

type MediaFields_sizes_table_height_Update {
  permission: Boolean!
}

type MediaFields_sizes_table_height_Delete {
  permission: Boolean!
}

type MediaFields_sizes_table_mimeType {
  create: MediaFields_sizes_table_mimeType_Create
  read: MediaFields_sizes_table_mimeType_Read
  update: MediaFields_sizes_table_mimeType_Update
  delete: MediaFields_sizes_table_mimeType_Delete
}

type MediaFields_sizes_table_mimeType_Create {
  permission: Boolean!
}

type MediaFields_sizes_table_mimeType_Read {
  permission: Boolean!
}

type MediaFields_sizes_table_mimeType_Update {
  permission: Boolean!
}

type MediaFields_sizes_table_mimeType_Delete {
  permission: Boolean!
}

type MediaFields_sizes_table_filesize {
  create: MediaFields_sizes_table_filesize_Create
  read: MediaFields_sizes_table_filesize_Read
  update: MediaFields_sizes_table_filesize_Update
  delete: MediaFields_sizes_table_filesize_Delete
}

type MediaFields_sizes_table_filesize_Create {
  permission: Boolean!
}

type MediaFields_sizes_table_filesize_Read {
  permission: Boolean!
}

type MediaFields_sizes_table_filesize_Update {
  permission: Boolean!
}

type MediaFields_sizes_table_filesize_Delete {
  permission: Boolean!
}

type MediaFields_sizes_table_filename {
  create: MediaFields_sizes_table_filename_Create
  read: MediaFields_sizes_table_filename_Read
  update: MediaFields_sizes_table_filename_Update
  delete: MediaFields_sizes_table_filename_Delete
}

type MediaFields_sizes_table_filename_Create {
  permission: Boolean!
}

type MediaFields_sizes_table_filename_Read {
  permission: Boolean!
}

type MediaFields_sizes_table_filename_Update {
  permission: Boolean!
}

type MediaFields_sizes_table_filename_Delete {
  permission: Boolean!
}

type MediaCreateAccess {
  permission: Boolean!
  where: JSONObject
}

type MediaReadAccess {
  permission: Boolean!
  where: JSONObject
}

type MediaUpdateAccess {
  permission: Boolean!
  where: JSONObject
}

type MediaDeleteAccess {
  permission: Boolean!
  where: JSONObject
}

type ordersAccess {
  fields: OrdersFields
  create: OrdersCreateAccess
  read: OrdersReadAccess
  update: OrdersUpdateAccess
  delete: OrdersDeleteAccess
}

type OrdersFields {
  _isPaid: OrdersFields__isPaid
  user: OrdersFields_user
  products: OrdersFields_products
  updatedAt: OrdersFields_updatedAt
  createdAt: OrdersFields_createdAt
}

type OrdersFields__isPaid {
  create: OrdersFields__isPaid_Create
  read: OrdersFields__isPaid_Read
  update: OrdersFields__isPaid_Update
  delete: OrdersFields__isPaid_Delete
}

type OrdersFields__isPaid_Create {
  permission: Boolean!
}

type OrdersFields__isPaid_Read {
  permission: Boolean!
}

type OrdersFields__isPaid_Update {
  permission: Boolean!
}

type OrdersFields__isPaid_Delete {
  permission: Boolean!
}

type OrdersFields_user {
  create: OrdersFields_user_Create
  read: OrdersFields_user_Read
  update: OrdersFields_user_Update
  delete: OrdersFields_user_Delete
}

type OrdersFields_user_Create {
  permission: Boolean!
}

type OrdersFields_user_Read {
  permission: Boolean!
}

type OrdersFields_user_Update {
  permission: Boolean!
}

type OrdersFields_user_Delete {
  permission: Boolean!
}

type OrdersFields_products {
  create: OrdersFields_products_Create
  read: OrdersFields_products_Read
  update: OrdersFields_products_Update
  delete: OrdersFields_products_Delete
}

type OrdersFields_products_Create {
  permission: Boolean!
}

type OrdersFields_products_Read {
  permission: Boolean!
}

type OrdersFields_products_Update {
  permission: Boolean!
}

type OrdersFields_products_Delete {
  permission: Boolean!
}

type OrdersFields_updatedAt {
  create: OrdersFields_updatedAt_Create
  read: OrdersFields_updatedAt_Read
  update: OrdersFields_updatedAt_Update
  delete: OrdersFields_updatedAt_Delete
}

type OrdersFields_updatedAt_Create {
  permission: Boolean!
}

type OrdersFields_updatedAt_Read {
  permission: Boolean!
}

type OrdersFields_updatedAt_Update {
  permission: Boolean!
}

type OrdersFields_updatedAt_Delete {
  permission: Boolean!
}

type OrdersFields_createdAt {
  create: OrdersFields_createdAt_Create
  read: OrdersFields_createdAt_Read
  update: OrdersFields_createdAt_Update
  delete: OrdersFields_createdAt_Delete
}

type OrdersFields_createdAt_Create {
  permission: Boolean!
}

type OrdersFields_createdAt_Read {
  permission: Boolean!
}

type OrdersFields_createdAt_Update {
  permission: Boolean!
}

type OrdersFields_createdAt_Delete {
  permission: Boolean!
}

type OrdersCreateAccess {
  permission: Boolean!
  where: JSONObject
}

type OrdersReadAccess {
  permission: Boolean!
  where: JSONObject
}

type OrdersUpdateAccess {
  permission: Boolean!
  where: JSONObject
}

type OrdersDeleteAccess {
  permission: Boolean!
  where: JSONObject
}

type product_receiptAccess {
  fields: Product_receiptFields
  create: Product_receiptCreateAccess
  read: Product_receiptReadAccess
  update: Product_receiptUpdateAccess
  delete: Product_receiptDeleteAccess
}

type Product_receiptFields {
  user: Product_receiptFields_user
  product: Product_receiptFields_product
  updatedAt: Product_receiptFields_updatedAt
  createdAt: Product_receiptFields_createdAt
  url: Product_receiptFields_url
  filename: Product_receiptFields_filename
  mimeType: Product_receiptFields_mimeType
  filesize: Product_receiptFields_filesize
  width: Product_receiptFields_width
  height: Product_receiptFields_height
}

type Product_receiptFields_user {
  create: Product_receiptFields_user_Create
  read: Product_receiptFields_user_Read
  update: Product_receiptFields_user_Update
  delete: Product_receiptFields_user_Delete
}

type Product_receiptFields_user_Create {
  permission: Boolean!
}

type Product_receiptFields_user_Read {
  permission: Boolean!
}

type Product_receiptFields_user_Update {
  permission: Boolean!
}

type Product_receiptFields_user_Delete {
  permission: Boolean!
}

type Product_receiptFields_product {
  create: Product_receiptFields_product_Create
  read: Product_receiptFields_product_Read
  update: Product_receiptFields_product_Update
  delete: Product_receiptFields_product_Delete
}

type Product_receiptFields_product_Create {
  permission: Boolean!
}

type Product_receiptFields_product_Read {
  permission: Boolean!
}

type Product_receiptFields_product_Update {
  permission: Boolean!
}

type Product_receiptFields_product_Delete {
  permission: Boolean!
}

type Product_receiptFields_updatedAt {
  create: Product_receiptFields_updatedAt_Create
  read: Product_receiptFields_updatedAt_Read
  update: Product_receiptFields_updatedAt_Update
  delete: Product_receiptFields_updatedAt_Delete
}

type Product_receiptFields_updatedAt_Create {
  permission: Boolean!
}

type Product_receiptFields_updatedAt_Read {
  permission: Boolean!
}

type Product_receiptFields_updatedAt_Update {
  permission: Boolean!
}

type Product_receiptFields_updatedAt_Delete {
  permission: Boolean!
}

type Product_receiptFields_createdAt {
  create: Product_receiptFields_createdAt_Create
  read: Product_receiptFields_createdAt_Read
  update: Product_receiptFields_createdAt_Update
  delete: Product_receiptFields_createdAt_Delete
}

type Product_receiptFields_createdAt_Create {
  permission: Boolean!
}

type Product_receiptFields_createdAt_Read {
  permission: Boolean!
}

type Product_receiptFields_createdAt_Update {
  permission: Boolean!
}

type Product_receiptFields_createdAt_Delete {
  permission: Boolean!
}

type Product_receiptFields_url {
  create: Product_receiptFields_url_Create
  read: Product_receiptFields_url_Read
  update: Product_receiptFields_url_Update
  delete: Product_receiptFields_url_Delete
}

type Product_receiptFields_url_Create {
  permission: Boolean!
}

type Product_receiptFields_url_Read {
  permission: Boolean!
}

type Product_receiptFields_url_Update {
  permission: Boolean!
}

type Product_receiptFields_url_Delete {
  permission: Boolean!
}

type Product_receiptFields_filename {
  create: Product_receiptFields_filename_Create
  read: Product_receiptFields_filename_Read
  update: Product_receiptFields_filename_Update
  delete: Product_receiptFields_filename_Delete
}

type Product_receiptFields_filename_Create {
  permission: Boolean!
}

type Product_receiptFields_filename_Read {
  permission: Boolean!
}

type Product_receiptFields_filename_Update {
  permission: Boolean!
}

type Product_receiptFields_filename_Delete {
  permission: Boolean!
}

type Product_receiptFields_mimeType {
  create: Product_receiptFields_mimeType_Create
  read: Product_receiptFields_mimeType_Read
  update: Product_receiptFields_mimeType_Update
  delete: Product_receiptFields_mimeType_Delete
}

type Product_receiptFields_mimeType_Create {
  permission: Boolean!
}

type Product_receiptFields_mimeType_Read {
  permission: Boolean!
}

type Product_receiptFields_mimeType_Update {
  permission: Boolean!
}

type Product_receiptFields_mimeType_Delete {
  permission: Boolean!
}

type Product_receiptFields_filesize {
  create: Product_receiptFields_filesize_Create
  read: Product_receiptFields_filesize_Read
  update: Product_receiptFields_filesize_Update
  delete: Product_receiptFields_filesize_Delete
}

type Product_receiptFields_filesize_Create {
  permission: Boolean!
}

type Product_receiptFields_filesize_Read {
  permission: Boolean!
}

type Product_receiptFields_filesize_Update {
  permission: Boolean!
}

type Product_receiptFields_filesize_Delete {
  permission: Boolean!
}

type Product_receiptFields_width {
  create: Product_receiptFields_width_Create
  read: Product_receiptFields_width_Read
  update: Product_receiptFields_width_Update
  delete: Product_receiptFields_width_Delete
}

type Product_receiptFields_width_Create {
  permission: Boolean!
}

type Product_receiptFields_width_Read {
  permission: Boolean!
}

type Product_receiptFields_width_Update {
  permission: Boolean!
}

type Product_receiptFields_width_Delete {
  permission: Boolean!
}

type Product_receiptFields_height {
  create: Product_receiptFields_height_Create
  read: Product_receiptFields_height_Read
  update: Product_receiptFields_height_Update
  delete: Product_receiptFields_height_Delete
}

type Product_receiptFields_height_Create {
  permission: Boolean!
}

type Product_receiptFields_height_Read {
  permission: Boolean!
}

type Product_receiptFields_height_Update {
  permission: Boolean!
}

type Product_receiptFields_height_Delete {
  permission: Boolean!
}

type Product_receiptCreateAccess {
  permission: Boolean!
  where: JSONObject
}

type Product_receiptReadAccess {
  permission: Boolean!
  where: JSONObject
}

type Product_receiptUpdateAccess {
  permission: Boolean!
  where: JSONObject
}

type Product_receiptDeleteAccess {
  permission: Boolean!
  where: JSONObject
}

type payload_preferencesAccess {
  fields: PayloadPreferencesFields
  create: PayloadPreferencesCreateAccess
  read: PayloadPreferencesReadAccess
  update: PayloadPreferencesUpdateAccess
  delete: PayloadPreferencesDeleteAccess
}

type PayloadPreferencesFields {
  user: PayloadPreferencesFields_user
  key: PayloadPreferencesFields_key
  value: PayloadPreferencesFields_value
  updatedAt: PayloadPreferencesFields_updatedAt
  createdAt: PayloadPreferencesFields_createdAt
}

type PayloadPreferencesFields_user {
  create: PayloadPreferencesFields_user_Create
  read: PayloadPreferencesFields_user_Read
  update: PayloadPreferencesFields_user_Update
  delete: PayloadPreferencesFields_user_Delete
}

type PayloadPreferencesFields_user_Create {
  permission: Boolean!
}

type PayloadPreferencesFields_user_Read {
  permission: Boolean!
}

type PayloadPreferencesFields_user_Update {
  permission: Boolean!
}

type PayloadPreferencesFields_user_Delete {
  permission: Boolean!
}

type PayloadPreferencesFields_key {
  create: PayloadPreferencesFields_key_Create
  read: PayloadPreferencesFields_key_Read
  update: PayloadPreferencesFields_key_Update
  delete: PayloadPreferencesFields_key_Delete
}

type PayloadPreferencesFields_key_Create {
  permission: Boolean!
}

type PayloadPreferencesFields_key_Read {
  permission: Boolean!
}

type PayloadPreferencesFields_key_Update {
  permission: Boolean!
}

type PayloadPreferencesFields_key_Delete {
  permission: Boolean!
}

type PayloadPreferencesFields_value {
  create: PayloadPreferencesFields_value_Create
  read: PayloadPreferencesFields_value_Read
  update: PayloadPreferencesFields_value_Update
  delete: PayloadPreferencesFields_value_Delete
}

type PayloadPreferencesFields_value_Create {
  permission: Boolean!
}

type PayloadPreferencesFields_value_Read {
  permission: Boolean!
}

type PayloadPreferencesFields_value_Update {
  permission: Boolean!
}

type PayloadPreferencesFields_value_Delete {
  permission: Boolean!
}

type PayloadPreferencesFields_updatedAt {
  create: PayloadPreferencesFields_updatedAt_Create
  read: PayloadPreferencesFields_updatedAt_Read
  update: PayloadPreferencesFields_updatedAt_Update
  delete: PayloadPreferencesFields_updatedAt_Delete
}

type PayloadPreferencesFields_updatedAt_Create {
  permission: Boolean!
}

type PayloadPreferencesFields_updatedAt_Read {
  permission: Boolean!
}

type PayloadPreferencesFields_updatedAt_Update {
  permission: Boolean!
}

type PayloadPreferencesFields_updatedAt_Delete {
  permission: Boolean!
}

type PayloadPreferencesFields_createdAt {
  create: PayloadPreferencesFields_createdAt_Create
  read: PayloadPreferencesFields_createdAt_Read
  update: PayloadPreferencesFields_createdAt_Update
  delete: PayloadPreferencesFields_createdAt_Delete
}

type PayloadPreferencesFields_createdAt_Create {
  permission: Boolean!
}

type PayloadPreferencesFields_createdAt_Read {
  permission: Boolean!
}

type PayloadPreferencesFields_createdAt_Update {
  permission: Boolean!
}

type PayloadPreferencesFields_createdAt_Delete {
  permission: Boolean!
}

type PayloadPreferencesCreateAccess {
  permission: Boolean!
  where: JSONObject
}

type PayloadPreferencesReadAccess {
  permission: Boolean!
  where: JSONObject
}

type PayloadPreferencesUpdateAccess {
  permission: Boolean!
  where: JSONObject
}

type PayloadPreferencesDeleteAccess {
  permission: Boolean!
  where: JSONObject
}

type Mutation {
  createUser(data: mutationUserInput!, draft: Boolean): User
  updateUser(id: Int!, autosave: Boolean, data: mutationUserUpdateInput!, draft: Boolean): User
  deleteUser(id: Int!): User
  refreshTokenUser(token: String): usersRefreshedUser
  logoutUser: String
  unlockUser(email: String!): Boolean!
  loginUser(email: String, password: String): usersLoginResult
  forgotPasswordUser(disableEmail: Boolean, email: String!, expiration: Int): Boolean!
  resetPasswordUser(password: String, token: String): usersResetPassword
  verifyEmailUser(token: String): Boolean
  createProduct(data: mutationProductInput!, draft: Boolean): Product
  updateProduct(id: Int!, autosave: Boolean, data: mutationProductUpdateInput!, draft: Boolean): Product
  deleteProduct(id: Int!): Product
  createMedia(data: mutationMediaInput!, draft: Boolean): Media
  updateMedia(id: Int!, autosave: Boolean, data: mutationMediaUpdateInput!, draft: Boolean): Media
  deleteMedia(id: Int!): Media
  createOrder(data: mutationOrderInput!, draft: Boolean): Order
  updateOrder(id: Int!, autosave: Boolean, data: mutationOrderUpdateInput!, draft: Boolean): Order
  deleteOrder(id: Int!): Order
  createProduct_receipt(data: mutationProduct_receiptInput!, draft: Boolean): Product_receipt
  updateProduct_receipt(id: Int!, autosave: Boolean, data: mutationProduct_receiptUpdateInput!, draft: Boolean): Product_receipt
  deleteProduct_receipt(id: Int!): Product_receipt
  createPayloadPreference(data: mutationPayloadPreferenceInput!, draft: Boolean): PayloadPreference
  updatePayloadPreference(id: Int!, autosave: Boolean, data: mutationPayloadPreferenceUpdateInput!, draft: Boolean): PayloadPreference
  deletePayloadPreference(id: Int!): PayloadPreference
}

input mutationUserInput {
  role: User_role_MutationInput!
  updatedAt: String
  createdAt: String
  email: String!
  resetPasswordToken: String
  resetPasswordExpiration: String
  salt: String
  hash: String
  _verified: Boolean
  _verificationToken: String
  loginAttempts: Float
  lockUntil: String
  password: String!
}

enum User_role_MutationInput {
  admin
  user
}

input mutationUserUpdateInput {
  role: UserUpdate_role_MutationInput
  updatedAt: String
  createdAt: String
  email: String
  resetPasswordToken: String
  resetPasswordExpiration: String
  salt: String
  hash: String
  _verified: Boolean
  _verificationToken: String
  loginAttempts: Float
  lockUntil: String
  password: String
}

enum UserUpdate_role_MutationInput {
  admin
  user
}

type usersRefreshedUser {
  exp: Int
  refreshedToken: String
  user: usersJWT
}

type usersJWT {
  email: EmailAddress!
  collection: String!
}

type usersLoginResult {
  exp: Int
  token: String
  user: User
}

type usersResetPassword {
  token: String
  user: User
}

input mutationProductInput {
  user: Int
  name: String!
  description: String
  price: Float!
  category: Product_category_MutationInput!
  product_receipt: Int
  approvedForSale: Product_approvedForSale_MutationInput
  priceId: String
  stripeId: String
  images: [mutationProduct_ImagesInput!]
  updatedAt: String
  createdAt: String
}

enum Product_category_MutationInput {
  flowers
  sets
}

enum Product_approvedForSale_MutationInput {
  pending
  approved
  rejected
}

input mutationProduct_ImagesInput {
  image: String!
  id: String
}

input mutationProductUpdateInput {
  user: Int
  name: String
  description: String
  price: Float
  category: ProductUpdate_category_MutationInput
  product_receipt: Int
  approvedForSale: ProductUpdate_approvedForSale_MutationInput
  priceId: String
  stripeId: String
  images: [mutationProductUpdate_ImagesInput]
  updatedAt: String
  createdAt: String
}

enum ProductUpdate_category_MutationInput {
  flowers
  sets
}

enum ProductUpdate_approvedForSale_MutationInput {
  pending
  approved
  rejected
}

input mutationProductUpdate_ImagesInput {
  image: String!
  id: String
}

input mutationMediaInput {
  alt: String
  user: Int
  updatedAt: String
  createdAt: String
  url: String
  filename: String
  mimeType: String
  filesize: Float
  width: Float
  height: Float
  sizes: mutationMedia_SizesInput
}

input mutationMedia_SizesInput {
  thumbnail: mutationMedia_Sizes_ThumbnailInput
  card: mutationMedia_Sizes_CardInput
  table: mutationMedia_Sizes_TableInput
}

input mutationMedia_Sizes_ThumbnailInput {
  url: String
  width: Float
  height: Float
  mimeType: String
  filesize: Float
  filename: String
}

input mutationMedia_Sizes_CardInput {
  url: String
  width: Float
  height: Float
  mimeType: String
  filesize: Float
  filename: String
}

input mutationMedia_Sizes_TableInput {
  url: String
  width: Float
  height: Float
  mimeType: String
  filesize: Float
  filename: String
}

input mutationMediaUpdateInput {
  alt: String
  user: Int
  updatedAt: String
  createdAt: String
  url: String
  filename: String
  mimeType: String
  filesize: Float
  width: Float
  height: Float
  sizes: mutationMediaUpdate_SizesInput
}

input mutationMediaUpdate_SizesInput {
  thumbnail: mutationMediaUpdate_Sizes_ThumbnailInput
  card: mutationMediaUpdate_Sizes_CardInput
  table: mutationMediaUpdate_Sizes_TableInput
}

input mutationMediaUpdate_Sizes_ThumbnailInput {
  url: String
  width: Float
  height: Float
  mimeType: String
  filesize: Float
  filename: String
}

input mutationMediaUpdate_Sizes_CardInput {
  url: String
  width: Float
  height: Float
  mimeType: String
  filesize: Float
  filename: String
}

input mutationMediaUpdate_Sizes_TableInput {
  url: String
  width: Float
  height: Float
  mimeType: String
  filesize: Float
  filename: String
}

input mutationOrderInput {
  _isPaid: Boolean
  user: Int
  products: [Int]
  updatedAt: String
  createdAt: String
}

input mutationOrderUpdateInput {
  _isPaid: Boolean
  user: Int
  products: [Int]
  updatedAt: String
  createdAt: String
}

input mutationProduct_receiptInput {
  user: Int
  product: Int
  updatedAt: String
  createdAt: String
  url: String
  filename: String
  mimeType: String
  filesize: Float
  width: Float
  height: Float
}

input mutationProduct_receiptUpdateInput {
  user: Int
  product: Int
  updatedAt: String
  createdAt: String
  url: String
  filename: String
  mimeType: String
  filesize: Float
  width: Float
  height: Float
}

input mutationPayloadPreferenceInput {
  user: PayloadPreference_UserRelationshipInput
  key: String
  value: JSON
  updatedAt: String
  createdAt: String
}

input PayloadPreference_UserRelationshipInput {
  relationTo: PayloadPreference_UserRelationshipInputRelationTo
  value: JSON
}

enum PayloadPreference_UserRelationshipInputRelationTo {
  users
}

input mutationPayloadPreferenceUpdateInput {
  user: PayloadPreferenceUpdate_UserRelationshipInput
  key: String
  value: JSON
  updatedAt: String
  createdAt: String
}

input PayloadPreferenceUpdate_UserRelationshipInput {
  relationTo: PayloadPreferenceUpdate_UserRelationshipInputRelationTo
  value: JSON
}

enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  users
}`,_n=ov(),Co=$r(Lr.DIRECTIVES,[]);var Ad;const QP=Wr((Ad=_n.getQueryType())==null?void 0:Ad.getFields());var Td;const HP=Wr((Td=_n.getMutationType())==null?void 0:Td.getFields());var Pd;const XP=Wr((Pd=_n.getSubscriptionType())==null?void 0:Pd.getFields()),il=St.keyBy(N_(),i=>i.name.toLocaleLowerCase()),ZP=St.mapValues(il,i=>{const n=Co.find(t=>(t==null?void 0:t.name)===i.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?i.args:n.args.map(t=>i.args.find(r=>r.name===t)).filter(t=>!!t):[]}),KP=Wr(_n.getTypeMap()),ev=JP(_n);function Wr(i){return St.mapKeys(i||{},(n,t)=>t.toLocaleLowerCase())}function nv(){return St.size(_n.getTypeMap())<=10}function tv(){return[vo("Queries",_n.getQueryType()),vo("Mutations",_n.getMutationType()),vo("Subscriptions",_n.getSubscriptionType()),lv(),rv()].filter(i=>!!i)}function vo(i,n){return sv(i,iv(n))}function iv(i){return St.sortBy((i==null?void 0:i.getFields())||{},n=>n.name)}function sv(i,n){return n.length===0?null:{type:"menu",title:i,children:n.map(t=>({type:"page",title:t.name,section:i,deprecated:!!t.deprecationReason,href:Es.joinUrlPaths(qr(),i.toLocaleLowerCase(),t.name)}))}}function rv(){return nv()?null:{type:"menu",title:"Types",children:St.sortBy(St.map(_n.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:Es.joinUrlPaths(qr(),"types",n.name)}))}}function Pv(){return!!_n.getQueryType()}function vv(i){return QP[i.toLocaleLowerCase()]}function Ev(){return!!_n.getMutationType()}function Iv(i){return HP[i.toLocaleLowerCase()]}function bv(){return!!_n.getSubscriptionType()}function wv(i){return XP[i.toLocaleLowerCase()]}function Sv(i){return KP[i.toLocaleLowerCase()]}function av(i){return il[i.toLocaleLowerCase()]}function Bv(i){return av(i.name)!==void 0}function Mv(){return St.size(il)>0}function Nv(i){return ZP[i.name.toLocaleLowerCase()]||[]}function Ov(i){if(i)return ev.getFor(i)}function Cv(i){return St.flatMap(i.getFields(),n=>({field:n,possibleDescriptions:M_(n,i)}))}function M_(i,n){return i?i.description?[{description:i.description,from:n}]:Je(n)?n.getInterfaces().flatMap(t=>M_(t.getFields()[i.name],t)):[]:[]}function N_(){return Co.some(i=>(i==null?void 0:i.name)==="*")?_n.getDirectives().filter(i=>!["include","skip","deprecated","specifiedBy"].includes(i.name)):Co.filter(i=>!!(i!=null&&i.name)).map(({name:i})=>i?_n.getDirective(i):void 0).filter(i=>!!i)}function ov(){return Dd.trim().length===0?LP(JSON.parse(JSON.stringify({__schema:{types:[]}}))):jP(Dd)}function lv(){const i=N_();return i.length===0?null:{type:"menu",title:"Directives",children:i.map(n=>({type:"page",title:n.name,href:Es.joinUrlPaths(qr(),"directives",n.name),section:"Directives"}))}}const zv=$r(Lr.APP_TITLE,"GraphQL Documentation"),O_=uv().concat(tv());_v(O_);const cv=Object.freeze(O_),Rv=dv();function uv(){return $r(Lr.PAGES,fv()).filter(n=>!!n).map(n=>z_([],n))}function dv(){const i=pv();if(i)return i.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function _v(i){function n(r,a){for(const o of r){if(o.type==="page"){a(o);continue}o.type==="menu"&&n(o.children,a)}}let t;n(i,r=>{t&&(t.next={title:r.title,section:r.section,href:r.href},r.previous={title:t.title,section:t.section,href:t.href}),t=r})}function pv(){return C_(()=>!0)}function kv(i){return C_(n=>n.href.toLocaleLowerCase()===i.toLocaleLowerCase())}function C_(i){function n(t){for(const r of t){if(r.type==="page"&&i(r))return r;if(r.type==="menu"){const a=n(r.children);if(a)return a}}return null}return n(cv)}function z_(i,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:Es.joinUrlPaths(qr(),...i,yd(n.title))};const t=i.concat([yd(n.title)]);return{type:"menu",title:n.title,children:n.content.map(r=>({...z_(t,r),section:n.title}))}}function yd(i){return Es.generatePathSegment(i,new wd)}function fv(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(i=>i.trim()).join(`
`)}]}]}export{P0 as A,nv as B,Sv as C,Ov as D,Qt as E,Kn as F,qe as G,qn as H,Je as I,Fn as J,A as K,Cv as L,fi as M,Ri as N,Av as O,xr as P,Id as Q,hs as R,yv as S,wd as T,De as U,wn as V,zv as W,St as _,Ev as a,Pv as b,vv as c,bv as d,wv as e,kv as f,Iv as g,Rv as h,Ed as i,Dv as j,Mv as k,av as l,Nv as m,Bv as n,qr as o,cv as p,lt as q,e_ as r,_n as s,Dn as t,Es as u,Ee as v,Tv as w,$r as x,Lr as y,cs as z};

(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(c){if(c.ep)return;c.ep=!0;const h=s(c);fetch(c.href,h)}})();function Lf(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ya={exports:{}},si={},Qa={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah;function lg(){if(ah)return oe;ah=1;var r=Symbol.for("react.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,A={};function E(I,D,ie){this.props=I,this.context=D,this.refs=A,this.updater=ie||C}E.prototype.isReactComponent={},E.prototype.setState=function(I,D){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,D,"setState")},E.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function _(){}_.prototype=E.prototype;function H(I,D,ie){this.props=I,this.context=D,this.refs=A,this.updater=ie||C}var G=H.prototype=new _;G.constructor=H,F(G,E.prototype),G.isPureReactComponent=!0;var X=Array.isArray,z=Object.prototype.hasOwnProperty,V={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function K(I,D,ie){var le,ce={},de=null,ye=null;if(D!=null)for(le in D.ref!==void 0&&(ye=D.ref),D.key!==void 0&&(de=""+D.key),D)z.call(D,le)&&!U.hasOwnProperty(le)&&(ce[le]=D[le]);var me=arguments.length-2;if(me===1)ce.children=ie;else if(1<me){for(var ke=Array(me),lt=0;lt<me;lt++)ke[lt]=arguments[lt+2];ce.children=ke}if(I&&I.defaultProps)for(le in me=I.defaultProps,me)ce[le]===void 0&&(ce[le]=me[le]);return{$$typeof:r,type:I,key:de,ref:ye,props:ce,_owner:V.current}}function fe(I,D){return{$$typeof:r,type:I.type,key:D,ref:I.ref,props:I.props,_owner:I._owner}}function Pe(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function Je(I){var D={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ie){return D[ie]})}var at=/\/+/g;function Ye(I,D){return typeof I=="object"&&I!==null&&I.key!=null?Je(""+I.key):D.toString(36)}function et(I,D,ie,le,ce){var de=typeof I;(de==="undefined"||de==="boolean")&&(I=null);var ye=!1;if(I===null)ye=!0;else switch(de){case"string":case"number":ye=!0;break;case"object":switch(I.$$typeof){case r:case i:ye=!0}}if(ye)return ye=I,ce=ce(ye),I=le===""?"."+Ye(ye,0):le,X(ce)?(ie="",I!=null&&(ie=I.replace(at,"$&/")+"/"),et(ce,D,ie,"",function(lt){return lt})):ce!=null&&(Pe(ce)&&(ce=fe(ce,ie+(!ce.key||ye&&ye.key===ce.key?"":(""+ce.key).replace(at,"$&/")+"/")+I)),D.push(ce)),1;if(ye=0,le=le===""?".":le+":",X(I))for(var me=0;me<I.length;me++){de=I[me];var ke=le+Ye(de,me);ye+=et(de,D,ie,ke,ce)}else if(ke=S(I),typeof ke=="function")for(I=ke.call(I),me=0;!(de=I.next()).done;)de=de.value,ke=le+Ye(de,me++),ye+=et(de,D,ie,ke,ce);else if(de==="object")throw D=String(I),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return ye}function bt(I,D,ie){if(I==null)return I;var le=[],ce=0;return et(I,le,"","",function(de){return D.call(ie,de,ce++)}),le}function Qe(I){if(I._status===-1){var D=I._result;D=D(),D.then(function(ie){(I._status===0||I._status===-1)&&(I._status=1,I._result=ie)},function(ie){(I._status===0||I._status===-1)&&(I._status=2,I._result=ie)}),I._status===-1&&(I._status=0,I._result=D)}if(I._status===1)return I._result.default;throw I._result}var se={current:null},O={transition:null},J={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:O,ReactCurrentOwner:V};function $(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:bt,forEach:function(I,D,ie){bt(I,function(){D.apply(this,arguments)},ie)},count:function(I){var D=0;return bt(I,function(){D++}),D},toArray:function(I){return bt(I,function(D){return D})||[]},only:function(I){if(!Pe(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},oe.Component=E,oe.Fragment=s,oe.Profiler=c,oe.PureComponent=H,oe.StrictMode=a,oe.Suspense=y,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,oe.act=$,oe.cloneElement=function(I,D,ie){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var le=F({},I.props),ce=I.key,de=I.ref,ye=I._owner;if(D!=null){if(D.ref!==void 0&&(de=D.ref,ye=V.current),D.key!==void 0&&(ce=""+D.key),I.type&&I.type.defaultProps)var me=I.type.defaultProps;for(ke in D)z.call(D,ke)&&!U.hasOwnProperty(ke)&&(le[ke]=D[ke]===void 0&&me!==void 0?me[ke]:D[ke])}var ke=arguments.length-2;if(ke===1)le.children=ie;else if(1<ke){me=Array(ke);for(var lt=0;lt<ke;lt++)me[lt]=arguments[lt+2];le.children=me}return{$$typeof:r,type:I.type,key:ce,ref:de,props:le,_owner:ye}},oe.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:h,_context:I},I.Consumer=I},oe.createElement=K,oe.createFactory=function(I){var D=K.bind(null,I);return D.type=I,D},oe.createRef=function(){return{current:null}},oe.forwardRef=function(I){return{$$typeof:m,render:I}},oe.isValidElement=Pe,oe.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:Qe}},oe.memo=function(I,D){return{$$typeof:g,type:I,compare:D===void 0?null:D}},oe.startTransition=function(I){var D=O.transition;O.transition={};try{I()}finally{O.transition=D}},oe.unstable_act=$,oe.useCallback=function(I,D){return se.current.useCallback(I,D)},oe.useContext=function(I){return se.current.useContext(I)},oe.useDebugValue=function(){},oe.useDeferredValue=function(I){return se.current.useDeferredValue(I)},oe.useEffect=function(I,D){return se.current.useEffect(I,D)},oe.useId=function(){return se.current.useId()},oe.useImperativeHandle=function(I,D,ie){return se.current.useImperativeHandle(I,D,ie)},oe.useInsertionEffect=function(I,D){return se.current.useInsertionEffect(I,D)},oe.useLayoutEffect=function(I,D){return se.current.useLayoutEffect(I,D)},oe.useMemo=function(I,D){return se.current.useMemo(I,D)},oe.useReducer=function(I,D,ie){return se.current.useReducer(I,D,ie)},oe.useRef=function(I){return se.current.useRef(I)},oe.useState=function(I){return se.current.useState(I)},oe.useSyncExternalStore=function(I,D,ie){return se.current.useSyncExternalStore(I,D,ie)},oe.useTransition=function(){return se.current.useTransition()},oe.version="18.3.1",oe}var lh;function Dl(){return lh||(lh=1,Qa.exports=lg()),Qa.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh;function ug(){if(uh)return si;uh=1;var r=Dl(),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function d(m,y,g){var v,x={},S=null,C=null;g!==void 0&&(S=""+g),y.key!==void 0&&(S=""+y.key),y.ref!==void 0&&(C=y.ref);for(v in y)a.call(y,v)&&!h.hasOwnProperty(v)&&(x[v]=y[v]);if(m&&m.defaultProps)for(v in y=m.defaultProps,y)x[v]===void 0&&(x[v]=y[v]);return{$$typeof:i,type:m,key:S,ref:C,props:x,_owner:c.current}}return si.Fragment=s,si.jsx=d,si.jsxs=d,si}var ch;function cg(){return ch||(ch=1,Ya.exports=ug()),Ya.exports}var f=cg(),B=Dl();const dg=Lf(B);var Ms={},Xa={exports:{}},ot={},Za={exports:{}},Ja={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function hg(){return dh||(dh=1,(function(r){function i(O,J){var $=O.length;O.push(J);e:for(;0<$;){var I=$-1>>>1,D=O[I];if(0<c(D,J))O[I]=J,O[$]=D,$=I;else break e}}function s(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var J=O[0],$=O.pop();if($!==J){O[0]=$;e:for(var I=0,D=O.length,ie=D>>>1;I<ie;){var le=2*(I+1)-1,ce=O[le],de=le+1,ye=O[de];if(0>c(ce,$))de<D&&0>c(ye,ce)?(O[I]=ye,O[de]=$,I=de):(O[I]=ce,O[le]=$,I=le);else if(de<D&&0>c(ye,$))O[I]=ye,O[de]=$,I=de;else break e}}return J}function c(O,J){var $=O.sortIndex-J.sortIndex;return $!==0?$:O.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var d=Date,m=d.now();r.unstable_now=function(){return d.now()-m}}var y=[],g=[],v=1,x=null,S=3,C=!1,F=!1,A=!1,E=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(O){for(var J=s(g);J!==null;){if(J.callback===null)a(g);else if(J.startTime<=O)a(g),J.sortIndex=J.expirationTime,i(y,J);else break;J=s(g)}}function X(O){if(A=!1,G(O),!F)if(s(y)!==null)F=!0,Qe(z);else{var J=s(g);J!==null&&se(X,J.startTime-O)}}function z(O,J){F=!1,A&&(A=!1,_(K),K=-1),C=!0;var $=S;try{for(G(J),x=s(y);x!==null&&(!(x.expirationTime>J)||O&&!Je());){var I=x.callback;if(typeof I=="function"){x.callback=null,S=x.priorityLevel;var D=I(x.expirationTime<=J);J=r.unstable_now(),typeof D=="function"?x.callback=D:x===s(y)&&a(y),G(J)}else a(y);x=s(y)}if(x!==null)var ie=!0;else{var le=s(g);le!==null&&se(X,le.startTime-J),ie=!1}return ie}finally{x=null,S=$,C=!1}}var V=!1,U=null,K=-1,fe=5,Pe=-1;function Je(){return!(r.unstable_now()-Pe<fe)}function at(){if(U!==null){var O=r.unstable_now();Pe=O;var J=!0;try{J=U(!0,O)}finally{J?Ye():(V=!1,U=null)}}else V=!1}var Ye;if(typeof H=="function")Ye=function(){H(at)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,bt=et.port2;et.port1.onmessage=at,Ye=function(){bt.postMessage(null)}}else Ye=function(){E(at,0)};function Qe(O){U=O,V||(V=!0,Ye())}function se(O,J){K=E(function(){O(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_continueExecution=function(){F||C||(F=!0,Qe(z))},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return s(y)},r.unstable_next=function(O){switch(S){case 1:case 2:case 3:var J=3;break;default:J=S}var $=S;S=J;try{return O()}finally{S=$}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(O,J){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=S;S=O;try{return J()}finally{S=$}},r.unstable_scheduleCallback=function(O,J,$){var I=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?I+$:I):$=I,O){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=$+D,O={id:v++,callback:J,priorityLevel:O,startTime:$,expirationTime:D,sortIndex:-1},$>I?(O.sortIndex=$,i(g,O),s(y)===null&&O===s(g)&&(A?(_(K),K=-1):A=!0,se(X,$-I))):(O.sortIndex=D,i(y,O),F||C||(F=!0,Qe(z))),O},r.unstable_shouldYield=Je,r.unstable_wrapCallback=function(O){var J=S;return function(){var $=S;S=J;try{return O.apply(this,arguments)}finally{S=$}}}})(Ja)),Ja}var hh;function fg(){return hh||(hh=1,Za.exports=hg()),Za.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function mg(){if(fh)return ot;fh=1;var r=Dl(),i=fg();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,c={};function h(e,t){d(e,t),d(e+"Capture",t)}function d(e,t){for(c[e]=t,e=0;e<t.length;e++)a.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function S(e){return y.call(x,e)?!0:y.call(v,e)?!1:g.test(e)?x[e]=!0:(v[e]=!0,!1)}function C(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F(e,t,n,o){if(t===null||typeof t>"u"||C(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,n,o,l,u,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=p}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){E[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];E[t]=new A(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){E[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){E[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){E[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){E[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){E[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){E[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){E[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function H(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_,H);E[t]=new A(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_,H);E[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_,H);E[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){E[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),E.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){E[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function G(e,t,n,o){var l=E.hasOwnProperty(t)?E[t]:null;(l!==null?l.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(F(t,n,l,o)&&(n=null),o||l===null?S(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,o=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var X=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),V=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),fe=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),Je=Symbol.for("react.context"),at=Symbol.for("react.forward_ref"),Ye=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),bt=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),O=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,I;function D(e){if(I===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return`
`+I+e}var ie=!1;function le(e,t){if(!e||ie)return"";ie=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(P){var o=P}Reflect.construct(e,[],t)}else{try{t.call()}catch(P){o=P}e.call(t.prototype)}else{try{throw Error()}catch(P){o=P}e()}}catch(P){if(P&&o&&typeof P.stack=="string"){for(var l=P.stack.split(`
`),u=o.stack.split(`
`),p=l.length-1,w=u.length-1;1<=p&&0<=w&&l[p]!==u[w];)w--;for(;1<=p&&0<=w;p--,w--)if(l[p]!==u[w]){if(p!==1||w!==1)do if(p--,w--,0>w||l[p]!==u[w]){var k=`
`+l[p].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=p&&0<=w);break}}}finally{ie=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function ce(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case V:return"Portal";case fe:return"Profiler";case K:return"StrictMode";case Ye:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Je:return(e.displayName||"Context")+".Consumer";case Pe:return(e._context.displayName||"Context")+".Provider";case at:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bt:return t=e.displayName||null,t!==null?t:de(e.type)||"Memo";case Qe:t=e._payload,e=e._init;try{return de(e(t))}catch{}}return null}function ye(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(t);case 8:return t===K?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lt(e){var t=ke(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(p){o=""+p,u.call(this,p)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(p){o=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bi(e){e._valueTracker||(e._valueTracker=lt(e))}function fu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=ke(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function to(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mu(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=me(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pu(e,t){t=t.checked,t!=null&&G(e,"checked",t,!1)}function no(e,t){pu(e,t);var n=me(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ro(e,t.type,n):t.hasOwnProperty("defaultValue")&&ro(e,t.type,me(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ro(e,t,n){(t!=="number"||Ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xr=Array.isArray;function On(e,t,n,o){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&o&&(e[n].defaultSelected=!0)}else{for(n=""+me(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function io(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(xr(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:me(n)}}function vu(e,t){var n=me(t.value),o=me(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function wu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function so(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ti,ku=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ti=Ti||document.createElement("div"),Ti.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ti.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hp=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){hp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sr[t]=Sr[e]})});function Su(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+t).trim():t+"px"}function bu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,l=Su(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,l):e[n]=l}}var fp=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oo(e,t){if(t){if(fp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function ao(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lo=null;function uo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var co=null,Bn=null,zn=null;function Iu(e){if(e=Ur(e)){if(typeof co!="function")throw Error(s(280));var t=e.stateNode;t&&(t=qi(t),co(e.stateNode,e.type,t))}}function Tu(e){Bn?zn?zn.push(e):zn=[e]:Bn=e}function Nu(){if(Bn){var e=Bn,t=zn;if(zn=Bn=null,Iu(e),t)for(e=0;e<t.length;e++)Iu(t[e])}}function Pu(e,t){return e(t)}function Cu(){}var ho=!1;function Au(e,t,n){if(ho)return e(t,n);ho=!0;try{return Pu(e,t,n)}finally{ho=!1,(Bn!==null||zn!==null)&&(Cu(),Nu())}}function br(e,t){var n=e.stateNode;if(n===null)return null;var o=qi(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var fo=!1;if(m)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){fo=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{fo=!1}function mp(e,t,n,o,l,u,p,w,k){var P=Array.prototype.slice.call(arguments,3);try{t.apply(n,P)}catch(M){this.onError(M)}}var Tr=!1,Ni=null,Pi=!1,mo=null,pp={onError:function(e){Tr=!0,Ni=e}};function yp(e,t,n,o,l,u,p,w,k){Tr=!1,Ni=null,mp.apply(pp,arguments)}function gp(e,t,n,o,l,u,p,w,k){if(yp.apply(this,arguments),Tr){if(Tr){var P=Ni;Tr=!1,Ni=null}else throw Error(s(198));Pi||(Pi=!0,mo=P)}}function xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ju(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Eu(e){if(xn(e)!==e)throw Error(s(188))}function vp(e){var t=e.alternate;if(!t){if(t=xn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,o=t;;){var l=n.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){n=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===n)return Eu(l),e;if(u===o)return Eu(l),t;u=u.sibling}throw Error(s(188))}if(n.return!==o.return)n=l,o=u;else{for(var p=!1,w=l.child;w;){if(w===n){p=!0,n=l,o=u;break}if(w===o){p=!0,o=l,n=u;break}w=w.sibling}if(!p){for(w=u.child;w;){if(w===n){p=!0,n=u,o=l;break}if(w===o){p=!0,o=u,n=l;break}w=w.sibling}if(!p)throw Error(s(189))}}if(n.alternate!==o)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function Du(e){return e=vp(e),e!==null?Mu(e):null}function Mu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mu(e);if(t!==null)return t;e=e.sibling}return null}var Fu=i.unstable_scheduleCallback,Lu=i.unstable_cancelCallback,wp=i.unstable_shouldYield,xp=i.unstable_requestPaint,je=i.unstable_now,kp=i.unstable_getCurrentPriorityLevel,po=i.unstable_ImmediatePriority,Ru=i.unstable_UserBlockingPriority,Ci=i.unstable_NormalPriority,Sp=i.unstable_LowPriority,Vu=i.unstable_IdlePriority,Ai=null,Dt=null;function bp(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Ai,e,void 0,(e.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:Np,Ip=Math.log,Tp=Math.LN2;function Np(e){return e>>>=0,e===0?32:31-(Ip(e)/Tp|0)|0}var ji=64,Ei=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Di(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,l=e.suspendedLanes,u=e.pingedLanes,p=n&268435455;if(p!==0){var w=p&~l;w!==0?o=Nr(w):(u&=p,u!==0&&(o=Nr(u)))}else p=n&~l,p!==0?o=Nr(p):u!==0&&(o=Nr(u));if(o===0)return 0;if(t!==0&&t!==o&&(t&l)===0&&(l=o&-o,u=t&-t,l>=u||l===16&&(u&4194240)!==0))return t;if((o&4)!==0&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-It(t),l=1<<n,o|=e[n],t&=~l;return o}function Pp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cp(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes;0<u;){var p=31-It(u),w=1<<p,k=l[p];k===-1?((w&n)===0||(w&o)!==0)&&(l[p]=Pp(w,t)):k<=t&&(e.expiredLanes|=w),u&=~w}}function yo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _u(){var e=ji;return ji<<=1,(ji&4194240)===0&&(ji=64),e}function go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-It(t),e[t]=n}function Ap(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-It(n),u=1<<l;t[l]=0,o[l]=-1,e[l]=-1,n&=~u}}function vo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-It(n),l=1<<o;l&t|e[o]&t&&(e[o]|=t),n&=~l}}var pe=0;function Ou(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Bu,wo,zu,Hu,Wu,xo=!1,Mi=[],Qt=null,Xt=null,Zt=null,Cr=new Map,Ar=new Map,Jt=[],jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uu(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Cr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(t.pointerId)}}function jr(e,t,n,o,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Ur(t),t!==null&&wo(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ep(e,t,n,o,l){switch(t){case"focusin":return Qt=jr(Qt,e,t,n,o,l),!0;case"dragenter":return Xt=jr(Xt,e,t,n,o,l),!0;case"mouseover":return Zt=jr(Zt,e,t,n,o,l),!0;case"pointerover":var u=l.pointerId;return Cr.set(u,jr(Cr.get(u)||null,e,t,n,o,l)),!0;case"gotpointercapture":return u=l.pointerId,Ar.set(u,jr(Ar.get(u)||null,e,t,n,o,l)),!0}return!1}function $u(e){var t=kn(e.target);if(t!==null){var n=xn(t);if(n!==null){if(t=n.tag,t===13){if(t=ju(n),t!==null){e.blockedOn=t,Wu(e.priority,function(){zu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=So(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);lo=o,n.target.dispatchEvent(o),lo=null}else return t=Ur(n),t!==null&&wo(t),e.blockedOn=n,!1;t.shift()}return!0}function Ku(e,t,n){Fi(e)&&n.delete(t)}function Dp(){xo=!1,Qt!==null&&Fi(Qt)&&(Qt=null),Xt!==null&&Fi(Xt)&&(Xt=null),Zt!==null&&Fi(Zt)&&(Zt=null),Cr.forEach(Ku),Ar.forEach(Ku)}function Er(e,t){e.blockedOn===t&&(e.blockedOn=null,xo||(xo=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Dp)))}function Dr(e){function t(l){return Er(l,e)}if(0<Mi.length){Er(Mi[0],e);for(var n=1;n<Mi.length;n++){var o=Mi[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Qt!==null&&Er(Qt,e),Xt!==null&&Er(Xt,e),Zt!==null&&Er(Zt,e),Cr.forEach(t),Ar.forEach(t),n=0;n<Jt.length;n++)o=Jt[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)$u(n),n.blockedOn===null&&Jt.shift()}var Hn=X.ReactCurrentBatchConfig,Li=!0;function Mp(e,t,n,o){var l=pe,u=Hn.transition;Hn.transition=null;try{pe=1,ko(e,t,n,o)}finally{pe=l,Hn.transition=u}}function Fp(e,t,n,o){var l=pe,u=Hn.transition;Hn.transition=null;try{pe=4,ko(e,t,n,o)}finally{pe=l,Hn.transition=u}}function ko(e,t,n,o){if(Li){var l=So(e,t,n,o);if(l===null)Oo(e,t,o,Ri,n),Uu(e,o);else if(Ep(l,e,t,n,o))o.stopPropagation();else if(Uu(e,o),t&4&&-1<jp.indexOf(e)){for(;l!==null;){var u=Ur(l);if(u!==null&&Bu(u),u=So(e,t,n,o),u===null&&Oo(e,t,o,Ri,n),u===l)break;l=u}l!==null&&o.stopPropagation()}else Oo(e,t,o,null,n)}}var Ri=null;function So(e,t,n,o){if(Ri=null,e=uo(o),e=kn(e),e!==null)if(t=xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ju(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ri=e,null}function Gu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kp()){case po:return 1;case Ru:return 4;case Ci:case Sp:return 16;case Vu:return 536870912;default:return 16}default:return 16}}var en=null,bo=null,Vi=null;function qu(){if(Vi)return Vi;var e,t=bo,n=t.length,o,l="value"in en?en.value:en.textContent,u=l.length;for(e=0;e<n&&t[e]===l[e];e++);var p=n-e;for(o=1;o<=p&&t[n-o]===l[u-o];o++);return Vi=l.slice(e,1<o?1-o:void 0)}function _i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function Yu(){return!1}function ut(e){function t(n,o,l,u,p){this._reactName=n,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=p,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(n=e[w],this[w]=n?n(u):u[w]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Oi:Yu,this.isPropagationStopped=Yu,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Io=ut(Wn),Mr=$({},Wn,{view:0,detail:0}),Lp=ut(Mr),To,No,Fr,Bi=$({},Mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(To=e.screenX-Fr.screenX,No=e.screenY-Fr.screenY):No=To=0,Fr=e),To)},movementY:function(e){return"movementY"in e?e.movementY:No}}),Qu=ut(Bi),Rp=$({},Bi,{dataTransfer:0}),Vp=ut(Rp),_p=$({},Mr,{relatedTarget:0}),Po=ut(_p),Op=$({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Bp=ut(Op),zp=$({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hp=ut(zp),Wp=$({},Wn,{data:0}),Xu=ut(Wp),Up={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$p={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kp[e])?!!t[e]:!1}function Co(){return Gp}var qp=$({},Mr,{key:function(e){if(e.key){var t=Up[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$p[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Co,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yp=ut(qp),Qp=$({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zu=ut(Qp),Xp=$({},Mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Co}),Zp=ut(Xp),Jp=$({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ey=ut(Jp),ty=$({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ny=ut(ty),ry=[9,13,27,32],Ao=m&&"CompositionEvent"in window,Lr=null;m&&"documentMode"in document&&(Lr=document.documentMode);var iy=m&&"TextEvent"in window&&!Lr,Ju=m&&(!Ao||Lr&&8<Lr&&11>=Lr),ec=" ",tc=!1;function nc(e,t){switch(e){case"keyup":return ry.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function sy(e,t){switch(e){case"compositionend":return rc(t);case"keypress":return t.which!==32?null:(tc=!0,ec);case"textInput":return e=t.data,e===ec&&tc?null:e;default:return null}}function oy(e,t){if(Un)return e==="compositionend"||!Ao&&nc(e,t)?(e=qu(),Vi=bo=en=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ju&&t.locale!=="ko"?null:t.data;default:return null}}var ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ic(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ay[e.type]:t==="textarea"}function sc(e,t,n,o){Tu(o),t=$i(t,"onChange"),0<t.length&&(n=new Io("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Rr=null,Vr=null;function ly(e){bc(e,0)}function zi(e){var t=Yn(e);if(fu(t))return e}function uy(e,t){if(e==="change")return t}var oc=!1;if(m){var jo;if(m){var Eo="oninput"in document;if(!Eo){var ac=document.createElement("div");ac.setAttribute("oninput","return;"),Eo=typeof ac.oninput=="function"}jo=Eo}else jo=!1;oc=jo&&(!document.documentMode||9<document.documentMode)}function lc(){Rr&&(Rr.detachEvent("onpropertychange",uc),Vr=Rr=null)}function uc(e){if(e.propertyName==="value"&&zi(Vr)){var t=[];sc(t,Vr,e,uo(e)),Au(ly,t)}}function cy(e,t,n){e==="focusin"?(lc(),Rr=t,Vr=n,Rr.attachEvent("onpropertychange",uc)):e==="focusout"&&lc()}function dy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zi(Vr)}function hy(e,t){if(e==="click")return zi(t)}function fy(e,t){if(e==="input"||e==="change")return zi(t)}function my(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:my;function _r(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var l=n[o];if(!y.call(t,l)||!Tt(e[l],t[l]))return!1}return!0}function cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dc(e,t){var n=cc(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cc(n)}}function hc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fc(){for(var e=window,t=Ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ii(e.document)}return t}function Do(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function py(e){var t=fc(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hc(n.ownerDocument.documentElement,n)){if(o!==null&&Do(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,u=Math.min(o.start,l);o=o.end===void 0?u:Math.min(o.end,l),!e.extend&&u>o&&(l=o,o=u,u=l),l=dc(n,u);var p=dc(n,o);l&&p&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),u>o?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yy=m&&"documentMode"in document&&11>=document.documentMode,$n=null,Mo=null,Or=null,Fo=!1;function mc(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fo||$n==null||$n!==Ii(o)||(o=$n,"selectionStart"in o&&Do(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Or&&_r(Or,o)||(Or=o,o=$i(Mo,"onSelect"),0<o.length&&(t=new Io("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=$n)))}function Hi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kn={animationend:Hi("Animation","AnimationEnd"),animationiteration:Hi("Animation","AnimationIteration"),animationstart:Hi("Animation","AnimationStart"),transitionend:Hi("Transition","TransitionEnd")},Lo={},pc={};m&&(pc=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function Wi(e){if(Lo[e])return Lo[e];if(!Kn[e])return e;var t=Kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pc)return Lo[e]=t[n];return e}var yc=Wi("animationend"),gc=Wi("animationiteration"),vc=Wi("animationstart"),wc=Wi("transitionend"),xc=new Map,kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){xc.set(e,t),h(t,[e])}for(var Ro=0;Ro<kc.length;Ro++){var Vo=kc[Ro],gy=Vo.toLowerCase(),vy=Vo[0].toUpperCase()+Vo.slice(1);tn(gy,"on"+vy)}tn(yc,"onAnimationEnd"),tn(gc,"onAnimationIteration"),tn(vc,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(wc,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Sc(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,gp(o,t,void 0,e),e.currentTarget=null}function bc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],l=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var p=o.length-1;0<=p;p--){var w=o[p],k=w.instance,P=w.currentTarget;if(w=w.listener,k!==u&&l.isPropagationStopped())break e;Sc(l,w,P),u=k}else for(p=0;p<o.length;p++){if(w=o[p],k=w.instance,P=w.currentTarget,w=w.listener,k!==u&&l.isPropagationStopped())break e;Sc(l,w,P),u=k}}}if(Pi)throw e=mo,Pi=!1,mo=null,e}function ve(e,t){var n=t[$o];n===void 0&&(n=t[$o]=new Set);var o=e+"__bubble";n.has(o)||(Ic(t,e,2,!1),n.add(o))}function _o(e,t,n){var o=0;t&&(o|=4),Ic(n,e,o,t)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function zr(e){if(!e[Ui]){e[Ui]=!0,a.forEach(function(n){n!=="selectionchange"&&(wy.has(n)||_o(n,!1,e),_o(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ui]||(t[Ui]=!0,_o("selectionchange",!1,t))}}function Ic(e,t,n,o){switch(Gu(t)){case 1:var l=Mp;break;case 4:l=Fp;break;default:l=ko}n=l.bind(null,t,n,e),l=void 0,!fo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Oo(e,t,n,o,l){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var p=o.tag;if(p===3||p===4){var w=o.stateNode.containerInfo;if(w===l||w.nodeType===8&&w.parentNode===l)break;if(p===4)for(p=o.return;p!==null;){var k=p.tag;if((k===3||k===4)&&(k=p.stateNode.containerInfo,k===l||k.nodeType===8&&k.parentNode===l))return;p=p.return}for(;w!==null;){if(p=kn(w),p===null)return;if(k=p.tag,k===5||k===6){o=u=p;continue e}w=w.parentNode}}o=o.return}Au(function(){var P=u,M=uo(n),L=[];e:{var j=xc.get(e);if(j!==void 0){var W=Io,Y=e;switch(e){case"keypress":if(_i(n)===0)break e;case"keydown":case"keyup":W=Yp;break;case"focusin":Y="focus",W=Po;break;case"focusout":Y="blur",W=Po;break;case"beforeblur":case"afterblur":W=Po;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=Qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=Vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=Zp;break;case yc:case gc:case vc:W=Bp;break;case wc:W=ey;break;case"scroll":W=Lp;break;case"wheel":W=ny;break;case"copy":case"cut":case"paste":W=Hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=Zu}var Q=(t&4)!==0,Ee=!Q&&e==="scroll",T=Q?j!==null?j+"Capture":null:j;Q=[];for(var b=P,N;b!==null;){N=b;var R=N.stateNode;if(N.tag===5&&R!==null&&(N=R,T!==null&&(R=br(b,T),R!=null&&Q.push(Hr(b,R,N)))),Ee)break;b=b.return}0<Q.length&&(j=new W(j,Y,null,n,M),L.push({event:j,listeners:Q}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",j&&n!==lo&&(Y=n.relatedTarget||n.fromElement)&&(kn(Y)||Y[Ot]))break e;if((W||j)&&(j=M.window===M?M:(j=M.ownerDocument)?j.defaultView||j.parentWindow:window,W?(Y=n.relatedTarget||n.toElement,W=P,Y=Y?kn(Y):null,Y!==null&&(Ee=xn(Y),Y!==Ee||Y.tag!==5&&Y.tag!==6)&&(Y=null)):(W=null,Y=P),W!==Y)){if(Q=Qu,R="onMouseLeave",T="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(Q=Zu,R="onPointerLeave",T="onPointerEnter",b="pointer"),Ee=W==null?j:Yn(W),N=Y==null?j:Yn(Y),j=new Q(R,b+"leave",W,n,M),j.target=Ee,j.relatedTarget=N,R=null,kn(M)===P&&(Q=new Q(T,b+"enter",Y,n,M),Q.target=N,Q.relatedTarget=Ee,R=Q),Ee=R,W&&Y)t:{for(Q=W,T=Y,b=0,N=Q;N;N=Gn(N))b++;for(N=0,R=T;R;R=Gn(R))N++;for(;0<b-N;)Q=Gn(Q),b--;for(;0<N-b;)T=Gn(T),N--;for(;b--;){if(Q===T||T!==null&&Q===T.alternate)break t;Q=Gn(Q),T=Gn(T)}Q=null}else Q=null;W!==null&&Tc(L,j,W,Q,!1),Y!==null&&Ee!==null&&Tc(L,Ee,Y,Q,!0)}}e:{if(j=P?Yn(P):window,W=j.nodeName&&j.nodeName.toLowerCase(),W==="select"||W==="input"&&j.type==="file")var Z=uy;else if(ic(j))if(oc)Z=fy;else{Z=dy;var ee=cy}else(W=j.nodeName)&&W.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(Z=hy);if(Z&&(Z=Z(e,P))){sc(L,Z,n,M);break e}ee&&ee(e,j,P),e==="focusout"&&(ee=j._wrapperState)&&ee.controlled&&j.type==="number"&&ro(j,"number",j.value)}switch(ee=P?Yn(P):window,e){case"focusin":(ic(ee)||ee.contentEditable==="true")&&($n=ee,Mo=P,Or=null);break;case"focusout":Or=Mo=$n=null;break;case"mousedown":Fo=!0;break;case"contextmenu":case"mouseup":case"dragend":Fo=!1,mc(L,n,M);break;case"selectionchange":if(yy)break;case"keydown":case"keyup":mc(L,n,M)}var te;if(Ao)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else Un?nc(e,n)&&(re="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(re="onCompositionStart");re&&(Ju&&n.locale!=="ko"&&(Un||re!=="onCompositionStart"?re==="onCompositionEnd"&&Un&&(te=qu()):(en=M,bo="value"in en?en.value:en.textContent,Un=!0)),ee=$i(P,re),0<ee.length&&(re=new Xu(re,e,null,n,M),L.push({event:re,listeners:ee}),te?re.data=te:(te=rc(n),te!==null&&(re.data=te)))),(te=iy?sy(e,n):oy(e,n))&&(P=$i(P,"onBeforeInput"),0<P.length&&(M=new Xu("onBeforeInput","beforeinput",null,n,M),L.push({event:M,listeners:P}),M.data=te))}bc(L,t)})}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $i(e,t){for(var n=t+"Capture",o=[];e!==null;){var l=e,u=l.stateNode;l.tag===5&&u!==null&&(l=u,u=br(e,n),u!=null&&o.unshift(Hr(e,u,l)),u=br(e,t),u!=null&&o.push(Hr(e,u,l))),e=e.return}return o}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tc(e,t,n,o,l){for(var u=t._reactName,p=[];n!==null&&n!==o;){var w=n,k=w.alternate,P=w.stateNode;if(k!==null&&k===o)break;w.tag===5&&P!==null&&(w=P,l?(k=br(n,u),k!=null&&p.unshift(Hr(n,k,w))):l||(k=br(n,u),k!=null&&p.push(Hr(n,k,w)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var xy=/\r\n?/g,ky=/\u0000|\uFFFD/g;function Nc(e){return(typeof e=="string"?e:""+e).replace(xy,`
`).replace(ky,"")}function Ki(e,t,n){if(t=Nc(t),Nc(e)!==t&&n)throw Error(s(425))}function Gi(){}var Bo=null,zo=null;function Ho(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wo=typeof setTimeout=="function"?setTimeout:void 0,Sy=typeof clearTimeout=="function"?clearTimeout:void 0,Pc=typeof Promise=="function"?Promise:void 0,by=typeof queueMicrotask=="function"?queueMicrotask:typeof Pc<"u"?function(e){return Pc.resolve(null).then(e).catch(Iy)}:Wo;function Iy(e){setTimeout(function(){throw e})}function Uo(e,t){var n=t,o=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(o===0){e.removeChild(l),Dr(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=l}while(n);Dr(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qn=Math.random().toString(36).slice(2),Mt="__reactFiber$"+qn,Wr="__reactProps$"+qn,Ot="__reactContainer$"+qn,$o="__reactEvents$"+qn,Ty="__reactListeners$"+qn,Ny="__reactHandles$"+qn;function kn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cc(e);e!==null;){if(n=e[Mt])return n;e=Cc(e)}return t}e=n,n=e.parentNode}return null}function Ur(e){return e=e[Mt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function qi(e){return e[Wr]||null}var Ko=[],Qn=-1;function rn(e){return{current:e}}function we(e){0>Qn||(e.current=Ko[Qn],Ko[Qn]=null,Qn--)}function ge(e,t){Qn++,Ko[Qn]=e.current,e.current=t}var sn={},We=rn(sn),tt=rn(!1),Sn=sn;function Xn(e,t){var n=e.type.contextTypes;if(!n)return sn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var l={},u;for(u in n)l[u]=t[u];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function nt(e){return e=e.childContextTypes,e!=null}function Yi(){we(tt),we(We)}function Ac(e,t,n){if(We.current!==sn)throw Error(s(168));ge(We,t),ge(tt,n)}function jc(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var l in o)if(!(l in t))throw Error(s(108,ye(e)||"Unknown",l));return $({},n,o)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,Sn=We.current,ge(We,e),ge(tt,tt.current),!0}function Ec(e,t,n){var o=e.stateNode;if(!o)throw Error(s(169));n?(e=jc(e,t,Sn),o.__reactInternalMemoizedMergedChildContext=e,we(tt),we(We),ge(We,e)):we(tt),ge(tt,n)}var Bt=null,Xi=!1,Go=!1;function Dc(e){Bt===null?Bt=[e]:Bt.push(e)}function Py(e){Xi=!0,Dc(e)}function on(){if(!Go&&Bt!==null){Go=!0;var e=0,t=pe;try{var n=Bt;for(pe=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Bt=null,Xi=!1}catch(l){throw Bt!==null&&(Bt=Bt.slice(e+1)),Fu(po,on),l}finally{pe=t,Go=!1}}return null}var Zn=[],Jn=0,Zi=null,Ji=0,pt=[],yt=0,bn=null,zt=1,Ht="";function In(e,t){Zn[Jn++]=Ji,Zn[Jn++]=Zi,Zi=e,Ji=t}function Mc(e,t,n){pt[yt++]=zt,pt[yt++]=Ht,pt[yt++]=bn,bn=e;var o=zt;e=Ht;var l=32-It(o)-1;o&=~(1<<l),n+=1;var u=32-It(t)+l;if(30<u){var p=l-l%5;u=(o&(1<<p)-1).toString(32),o>>=p,l-=p,zt=1<<32-It(t)+l|n<<l|o,Ht=u+e}else zt=1<<u|n<<l|o,Ht=e}function qo(e){e.return!==null&&(In(e,1),Mc(e,1,0))}function Yo(e){for(;e===Zi;)Zi=Zn[--Jn],Zn[Jn]=null,Ji=Zn[--Jn],Zn[Jn]=null;for(;e===bn;)bn=pt[--yt],pt[yt]=null,Ht=pt[--yt],pt[yt]=null,zt=pt[--yt],pt[yt]=null}var ct=null,dt=null,Se=!1,Nt=null;function Fc(e,t){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,dt=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bn!==null?{id:zt,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,dt=null,!0):!1;default:return!1}}function Qo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xo(e){if(Se){var t=dt;if(t){var n=t;if(!Lc(e,t)){if(Qo(e))throw Error(s(418));t=nn(n.nextSibling);var o=ct;t&&Lc(e,t)?Fc(o,n):(e.flags=e.flags&-4097|2,Se=!1,ct=e)}}else{if(Qo(e))throw Error(s(418));e.flags=e.flags&-4097|2,Se=!1,ct=e}}}function Rc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function es(e){if(e!==ct)return!1;if(!Se)return Rc(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ho(e.type,e.memoizedProps)),t&&(t=dt)){if(Qo(e))throw Vc(),Error(s(418));for(;t;)Fc(e,t),t=nn(t.nextSibling)}if(Rc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dt=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ct?nn(e.stateNode.nextSibling):null;return!0}function Vc(){for(var e=dt;e;)e=nn(e.nextSibling)}function er(){dt=ct=null,Se=!1}function Zo(e){Nt===null?Nt=[e]:Nt.push(e)}var Cy=X.ReactCurrentBatchConfig;function $r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var o=n.stateNode}if(!o)throw Error(s(147,e));var l=o,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(p){var w=l.refs;p===null?delete w[u]:w[u]=p},t._stringRef=u,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function ts(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _c(e){var t=e._init;return t(e._payload)}function Oc(e){function t(T,b){if(e){var N=T.deletions;N===null?(T.deletions=[b],T.flags|=16):N.push(b)}}function n(T,b){if(!e)return null;for(;b!==null;)t(T,b),b=b.sibling;return null}function o(T,b){for(T=new Map;b!==null;)b.key!==null?T.set(b.key,b):T.set(b.index,b),b=b.sibling;return T}function l(T,b){return T=mn(T,b),T.index=0,T.sibling=null,T}function u(T,b,N){return T.index=N,e?(N=T.alternate,N!==null?(N=N.index,N<b?(T.flags|=2,b):N):(T.flags|=2,b)):(T.flags|=1048576,b)}function p(T){return e&&T.alternate===null&&(T.flags|=2),T}function w(T,b,N,R){return b===null||b.tag!==6?(b=Wa(N,T.mode,R),b.return=T,b):(b=l(b,N),b.return=T,b)}function k(T,b,N,R){var Z=N.type;return Z===U?M(T,b,N.props.children,R,N.key):b!==null&&(b.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Qe&&_c(Z)===b.type)?(R=l(b,N.props),R.ref=$r(T,b,N),R.return=T,R):(R=Ts(N.type,N.key,N.props,null,T.mode,R),R.ref=$r(T,b,N),R.return=T,R)}function P(T,b,N,R){return b===null||b.tag!==4||b.stateNode.containerInfo!==N.containerInfo||b.stateNode.implementation!==N.implementation?(b=Ua(N,T.mode,R),b.return=T,b):(b=l(b,N.children||[]),b.return=T,b)}function M(T,b,N,R,Z){return b===null||b.tag!==7?(b=Dn(N,T.mode,R,Z),b.return=T,b):(b=l(b,N),b.return=T,b)}function L(T,b,N){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Wa(""+b,T.mode,N),b.return=T,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case z:return N=Ts(b.type,b.key,b.props,null,T.mode,N),N.ref=$r(T,null,b),N.return=T,N;case V:return b=Ua(b,T.mode,N),b.return=T,b;case Qe:var R=b._init;return L(T,R(b._payload),N)}if(xr(b)||J(b))return b=Dn(b,T.mode,N,null),b.return=T,b;ts(T,b)}return null}function j(T,b,N,R){var Z=b!==null?b.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return Z!==null?null:w(T,b,""+N,R);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case z:return N.key===Z?k(T,b,N,R):null;case V:return N.key===Z?P(T,b,N,R):null;case Qe:return Z=N._init,j(T,b,Z(N._payload),R)}if(xr(N)||J(N))return Z!==null?null:M(T,b,N,R,null);ts(T,N)}return null}function W(T,b,N,R,Z){if(typeof R=="string"&&R!==""||typeof R=="number")return T=T.get(N)||null,w(b,T,""+R,Z);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case z:return T=T.get(R.key===null?N:R.key)||null,k(b,T,R,Z);case V:return T=T.get(R.key===null?N:R.key)||null,P(b,T,R,Z);case Qe:var ee=R._init;return W(T,b,N,ee(R._payload),Z)}if(xr(R)||J(R))return T=T.get(N)||null,M(b,T,R,Z,null);ts(b,R)}return null}function Y(T,b,N,R){for(var Z=null,ee=null,te=b,re=b=0,Oe=null;te!==null&&re<N.length;re++){te.index>re?(Oe=te,te=null):Oe=te.sibling;var he=j(T,te,N[re],R);if(he===null){te===null&&(te=Oe);break}e&&te&&he.alternate===null&&t(T,te),b=u(he,b,re),ee===null?Z=he:ee.sibling=he,ee=he,te=Oe}if(re===N.length)return n(T,te),Se&&In(T,re),Z;if(te===null){for(;re<N.length;re++)te=L(T,N[re],R),te!==null&&(b=u(te,b,re),ee===null?Z=te:ee.sibling=te,ee=te);return Se&&In(T,re),Z}for(te=o(T,te);re<N.length;re++)Oe=W(te,T,re,N[re],R),Oe!==null&&(e&&Oe.alternate!==null&&te.delete(Oe.key===null?re:Oe.key),b=u(Oe,b,re),ee===null?Z=Oe:ee.sibling=Oe,ee=Oe);return e&&te.forEach(function(pn){return t(T,pn)}),Se&&In(T,re),Z}function Q(T,b,N,R){var Z=J(N);if(typeof Z!="function")throw Error(s(150));if(N=Z.call(N),N==null)throw Error(s(151));for(var ee=Z=null,te=b,re=b=0,Oe=null,he=N.next();te!==null&&!he.done;re++,he=N.next()){te.index>re?(Oe=te,te=null):Oe=te.sibling;var pn=j(T,te,he.value,R);if(pn===null){te===null&&(te=Oe);break}e&&te&&pn.alternate===null&&t(T,te),b=u(pn,b,re),ee===null?Z=pn:ee.sibling=pn,ee=pn,te=Oe}if(he.done)return n(T,te),Se&&In(T,re),Z;if(te===null){for(;!he.done;re++,he=N.next())he=L(T,he.value,R),he!==null&&(b=u(he,b,re),ee===null?Z=he:ee.sibling=he,ee=he);return Se&&In(T,re),Z}for(te=o(T,te);!he.done;re++,he=N.next())he=W(te,T,re,he.value,R),he!==null&&(e&&he.alternate!==null&&te.delete(he.key===null?re:he.key),b=u(he,b,re),ee===null?Z=he:ee.sibling=he,ee=he);return e&&te.forEach(function(ag){return t(T,ag)}),Se&&In(T,re),Z}function Ee(T,b,N,R){if(typeof N=="object"&&N!==null&&N.type===U&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case z:e:{for(var Z=N.key,ee=b;ee!==null;){if(ee.key===Z){if(Z=N.type,Z===U){if(ee.tag===7){n(T,ee.sibling),b=l(ee,N.props.children),b.return=T,T=b;break e}}else if(ee.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Qe&&_c(Z)===ee.type){n(T,ee.sibling),b=l(ee,N.props),b.ref=$r(T,ee,N),b.return=T,T=b;break e}n(T,ee);break}else t(T,ee);ee=ee.sibling}N.type===U?(b=Dn(N.props.children,T.mode,R,N.key),b.return=T,T=b):(R=Ts(N.type,N.key,N.props,null,T.mode,R),R.ref=$r(T,b,N),R.return=T,T=R)}return p(T);case V:e:{for(ee=N.key;b!==null;){if(b.key===ee)if(b.tag===4&&b.stateNode.containerInfo===N.containerInfo&&b.stateNode.implementation===N.implementation){n(T,b.sibling),b=l(b,N.children||[]),b.return=T,T=b;break e}else{n(T,b);break}else t(T,b);b=b.sibling}b=Ua(N,T.mode,R),b.return=T,T=b}return p(T);case Qe:return ee=N._init,Ee(T,b,ee(N._payload),R)}if(xr(N))return Y(T,b,N,R);if(J(N))return Q(T,b,N,R);ts(T,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,b!==null&&b.tag===6?(n(T,b.sibling),b=l(b,N),b.return=T,T=b):(n(T,b),b=Wa(N,T.mode,R),b.return=T,T=b),p(T)):n(T,b)}return Ee}var tr=Oc(!0),Bc=Oc(!1),ns=rn(null),rs=null,nr=null,Jo=null;function ea(){Jo=nr=rs=null}function ta(e){var t=ns.current;we(ns),e._currentValue=t}function na(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function rr(e,t){rs=e,Jo=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(rt=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Jo!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(rs===null)throw Error(s(308));nr=e,rs.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var Tn=null;function ra(e){Tn===null?Tn=[e]:Tn.push(e)}function zc(e,t,n,o){var l=t.interleaved;return l===null?(n.next=n,ra(t)):(n.next=l.next,l.next=n),t.interleaved=n,Wt(e,o)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var an=!1;function ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ln(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ue&2)!==0){var l=o.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),o.pending=t,Wt(e,n)}return l=o.interleaved,l===null?(t.next=t,ra(o)):(t.next=l.next,l.next=t),o.interleaved=t,Wt(e,n)}function is(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,vo(e,n)}}function Wc(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var l=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var p={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?l=u=p:u=u.next=p,n=n.next}while(n!==null);u===null?l=u=t:u=u.next=t}else l=u=t;n={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ss(e,t,n,o){var l=e.updateQueue;an=!1;var u=l.firstBaseUpdate,p=l.lastBaseUpdate,w=l.shared.pending;if(w!==null){l.shared.pending=null;var k=w,P=k.next;k.next=null,p===null?u=P:p.next=P,p=k;var M=e.alternate;M!==null&&(M=M.updateQueue,w=M.lastBaseUpdate,w!==p&&(w===null?M.firstBaseUpdate=P:w.next=P,M.lastBaseUpdate=k))}if(u!==null){var L=l.baseState;p=0,M=P=k=null,w=u;do{var j=w.lane,W=w.eventTime;if((o&j)===j){M!==null&&(M=M.next={eventTime:W,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var Y=e,Q=w;switch(j=t,W=n,Q.tag){case 1:if(Y=Q.payload,typeof Y=="function"){L=Y.call(W,L,j);break e}L=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=Q.payload,j=typeof Y=="function"?Y.call(W,L,j):Y,j==null)break e;L=$({},L,j);break e;case 2:an=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,j=l.effects,j===null?l.effects=[w]:j.push(w))}else W={eventTime:W,lane:j,tag:w.tag,payload:w.payload,callback:w.callback,next:null},M===null?(P=M=W,k=L):M=M.next=W,p|=j;if(w=w.next,w===null){if(w=l.shared.pending,w===null)break;j=w,w=j.next,j.next=null,l.lastBaseUpdate=j,l.shared.pending=null}}while(!0);if(M===null&&(k=L),l.baseState=k,l.firstBaseUpdate=P,l.lastBaseUpdate=M,t=l.shared.interleaved,t!==null){l=t;do p|=l.lane,l=l.next;while(l!==t)}else u===null&&(l.shared.lanes=0);Cn|=p,e.lanes=p,e.memoizedState=L}}function Uc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],l=o.callback;if(l!==null){if(o.callback=null,o=n,typeof l!="function")throw Error(s(191,l));l.call(o)}}}var Kr={},Ft=rn(Kr),Gr=rn(Kr),qr=rn(Kr);function Nn(e){if(e===Kr)throw Error(s(174));return e}function sa(e,t){switch(ge(qr,t),ge(Gr,e),ge(Ft,Kr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:so(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=so(t,e)}we(Ft),ge(Ft,t)}function ir(){we(Ft),we(Gr),we(qr)}function $c(e){Nn(qr.current);var t=Nn(Ft.current),n=so(t,e.type);t!==n&&(ge(Gr,e),ge(Ft,n))}function oa(e){Gr.current===e&&(we(Ft),we(Gr))}var Ie=rn(0);function os(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var aa=[];function la(){for(var e=0;e<aa.length;e++)aa[e]._workInProgressVersionPrimary=null;aa.length=0}var as=X.ReactCurrentDispatcher,ua=X.ReactCurrentBatchConfig,Pn=0,Te=null,Le=null,Ve=null,ls=!1,Yr=!1,Qr=0,Ay=0;function Ue(){throw Error(s(321))}function ca(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function da(e,t,n,o,l,u){if(Pn=u,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,as.current=e===null||e.memoizedState===null?My:Fy,e=n(o,l),Yr){u=0;do{if(Yr=!1,Qr=0,25<=u)throw Error(s(301));u+=1,Ve=Le=null,t.updateQueue=null,as.current=Ly,e=n(o,l)}while(Yr)}if(as.current=ds,t=Le!==null&&Le.next!==null,Pn=0,Ve=Le=Te=null,ls=!1,t)throw Error(s(300));return e}function ha(){var e=Qr!==0;return Qr=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Te.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function vt(){if(Le===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Ve===null?Te.memoizedState:Ve.next;if(t!==null)Ve=t,Le=e;else{if(e===null)throw Error(s(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ve===null?Te.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Xr(e,t){return typeof t=="function"?t(e):t}function fa(e){var t=vt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var o=Le,l=o.baseQueue,u=n.pending;if(u!==null){if(l!==null){var p=l.next;l.next=u.next,u.next=p}o.baseQueue=l=u,n.pending=null}if(l!==null){u=l.next,o=o.baseState;var w=p=null,k=null,P=u;do{var M=P.lane;if((Pn&M)===M)k!==null&&(k=k.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),o=P.hasEagerState?P.eagerState:e(o,P.action);else{var L={lane:M,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};k===null?(w=k=L,p=o):k=k.next=L,Te.lanes|=M,Cn|=M}P=P.next}while(P!==null&&P!==u);k===null?p=o:k.next=w,Tt(o,t.memoizedState)||(rt=!0),t.memoizedState=o,t.baseState=p,t.baseQueue=k,n.lastRenderedState=o}if(e=n.interleaved,e!==null){l=e;do u=l.lane,Te.lanes|=u,Cn|=u,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ma(e){var t=vt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var o=n.dispatch,l=n.pending,u=t.memoizedState;if(l!==null){n.pending=null;var p=l=l.next;do u=e(u,p.action),p=p.next;while(p!==l);Tt(u,t.memoizedState)||(rt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,o]}function Kc(){}function Gc(e,t){var n=Te,o=vt(),l=t(),u=!Tt(o.memoizedState,l);if(u&&(o.memoizedState=l,rt=!0),o=o.queue,pa(Qc.bind(null,n,o,e),[e]),o.getSnapshot!==t||u||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Zr(9,Yc.bind(null,n,o,l,t),void 0,null),_e===null)throw Error(s(349));(Pn&30)!==0||qc(n,t,l)}return l}function qc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yc(e,t,n,o){t.value=n,t.getSnapshot=o,Xc(t)&&Zc(e)}function Qc(e,t,n){return n(function(){Xc(t)&&Zc(e)})}function Xc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function Zc(e){var t=Wt(e,1);t!==null&&jt(t,e,1,-1)}function Jc(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:e},t.queue=e,e=e.dispatch=Dy.bind(null,Te,e),[t.memoizedState,e]}function Zr(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function ed(){return vt().memoizedState}function us(e,t,n,o){var l=Lt();Te.flags|=e,l.memoizedState=Zr(1|t,n,void 0,o===void 0?null:o)}function cs(e,t,n,o){var l=vt();o=o===void 0?null:o;var u=void 0;if(Le!==null){var p=Le.memoizedState;if(u=p.destroy,o!==null&&ca(o,p.deps)){l.memoizedState=Zr(t,n,u,o);return}}Te.flags|=e,l.memoizedState=Zr(1|t,n,u,o)}function td(e,t){return us(8390656,8,e,t)}function pa(e,t){return cs(2048,8,e,t)}function nd(e,t){return cs(4,2,e,t)}function rd(e,t){return cs(4,4,e,t)}function id(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sd(e,t,n){return n=n!=null?n.concat([e]):null,cs(4,4,id.bind(null,t,e),n)}function ya(){}function od(e,t){var n=vt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&ca(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function ad(e,t){var n=vt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&ca(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function ld(e,t,n){return(Pn&21)===0?(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n):(Tt(n,t)||(n=_u(),Te.lanes|=n,Cn|=n,e.baseState=!0),t)}function jy(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var o=ua.transition;ua.transition={};try{e(!1),t()}finally{pe=n,ua.transition=o}}function ud(){return vt().memoizedState}function Ey(e,t,n){var o=hn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},cd(e))dd(t,n);else if(n=zc(e,t,n,o),n!==null){var l=Ze();jt(n,e,o,l),hd(n,t,o)}}function Dy(e,t,n){var o=hn(e),l={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(cd(e))dd(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var p=t.lastRenderedState,w=u(p,n);if(l.hasEagerState=!0,l.eagerState=w,Tt(w,p)){var k=t.interleaved;k===null?(l.next=l,ra(t)):(l.next=k.next,k.next=l),t.interleaved=l;return}}catch{}finally{}n=zc(e,t,l,o),n!==null&&(l=Ze(),jt(n,e,o,l),hd(n,t,o))}}function cd(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function dd(e,t){Yr=ls=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hd(e,t,n){if((n&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,vo(e,n)}}var ds={readContext:gt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},My={readContext:gt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:td,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,us(4194308,4,id.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){return us(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=Lt();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Ey.bind(null,Te,e),[o.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:Jc,useDebugValue:ya,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=Jc(!1),t=e[0];return e=jy.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Te,l=Lt();if(Se){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),_e===null)throw Error(s(349));(Pn&30)!==0||qc(o,t,n)}l.memoizedState=n;var u={value:n,getSnapshot:t};return l.queue=u,td(Qc.bind(null,o,u,e),[e]),o.flags|=2048,Zr(9,Yc.bind(null,o,u,n,t),void 0,null),n},useId:function(){var e=Lt(),t=_e.identifierPrefix;if(Se){var n=Ht,o=zt;n=(o&~(1<<32-It(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ay++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fy={readContext:gt,useCallback:od,useContext:gt,useEffect:pa,useImperativeHandle:sd,useInsertionEffect:nd,useLayoutEffect:rd,useMemo:ad,useReducer:fa,useRef:ed,useState:function(){return fa(Xr)},useDebugValue:ya,useDeferredValue:function(e){var t=vt();return ld(t,Le.memoizedState,e)},useTransition:function(){var e=fa(Xr)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Kc,useSyncExternalStore:Gc,useId:ud,unstable_isNewReconciler:!1},Ly={readContext:gt,useCallback:od,useContext:gt,useEffect:pa,useImperativeHandle:sd,useInsertionEffect:nd,useLayoutEffect:rd,useMemo:ad,useReducer:ma,useRef:ed,useState:function(){return ma(Xr)},useDebugValue:ya,useDeferredValue:function(e){var t=vt();return Le===null?t.memoizedState=e:ld(t,Le.memoizedState,e)},useTransition:function(){var e=ma(Xr)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Kc,useSyncExternalStore:Gc,useId:ud,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ga(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hs={isMounted:function(e){return(e=e._reactInternals)?xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Ze(),l=hn(e),u=Ut(o,l);u.payload=t,n!=null&&(u.callback=n),t=ln(e,u,l),t!==null&&(jt(t,e,l,o),is(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Ze(),l=hn(e),u=Ut(o,l);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=ln(e,u,l),t!==null&&(jt(t,e,l,o),is(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),o=hn(e),l=Ut(n,o);l.tag=2,t!=null&&(l.callback=t),t=ln(e,l,o),t!==null&&(jt(t,e,o,n),is(t,e,o))}};function fd(e,t,n,o,l,u,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,p):t.prototype&&t.prototype.isPureReactComponent?!_r(n,o)||!_r(l,u):!0}function md(e,t,n){var o=!1,l=sn,u=t.contextType;return typeof u=="object"&&u!==null?u=gt(u):(l=nt(t)?Sn:We.current,o=t.contextTypes,u=(o=o!=null)?Xn(e,l):sn),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hs,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=u),t}function pd(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&hs.enqueueReplaceState(t,t.state,null)}function va(e,t,n,o){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ia(e);var u=t.contextType;typeof u=="object"&&u!==null?l.context=gt(u):(u=nt(t)?Sn:We.current,l.context=Xn(e,u)),l.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(ga(e,t,u,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&hs.enqueueReplaceState(l,l.state,null),ss(e,n,l,o),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t){try{var n="",o=t;do n+=ce(o),o=o.return;while(o);var l=n}catch(u){l=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:l,digest:null}}function wa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ry=typeof WeakMap=="function"?WeakMap:Map;function yd(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){ws||(ws=!0,La=o),xa(e,t)},n}function gd(e,t,n){n=Ut(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var l=t.value;n.payload=function(){return o(l)},n.callback=function(){xa(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){xa(e,t),typeof o!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),n}function vd(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Ry;var l=new Set;o.set(t,l)}else l=o.get(t),l===void 0&&(l=new Set,o.set(t,l));l.has(n)||(l.add(n),e=Qy.bind(null,e,t,n),t.then(e,e))}function wd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xd(e,t,n,o,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,ln(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Vy=X.ReactCurrentOwner,rt=!1;function Xe(e,t,n,o){t.child=e===null?Bc(t,null,n,o):tr(t,e.child,n,o)}function kd(e,t,n,o,l){n=n.render;var u=t.ref;return rr(t,l),o=da(e,t,n,o,u,l),n=ha(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,$t(e,t,l)):(Se&&n&&qo(t),t.flags|=1,Xe(e,t,o,l),t.child)}function Sd(e,t,n,o,l){if(e===null){var u=n.type;return typeof u=="function"&&!Ha(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,bd(e,t,u,o,l)):(e=Ts(n.type,null,o,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&l)===0){var p=u.memoizedProps;if(n=n.compare,n=n!==null?n:_r,n(p,o)&&e.ref===t.ref)return $t(e,t,l)}return t.flags|=1,e=mn(u,o),e.ref=t.ref,e.return=t,t.child=e}function bd(e,t,n,o,l){if(e!==null){var u=e.memoizedProps;if(_r(u,o)&&e.ref===t.ref)if(rt=!1,t.pendingProps=o=u,(e.lanes&l)!==0)(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,$t(e,t,l)}return ka(e,t,n,o,l)}function Id(e,t,n){var o=t.pendingProps,l=o.children,u=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(ar,ht),ht|=n;else{if((n&1073741824)===0)return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(ar,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=u!==null?u.baseLanes:n,ge(ar,ht),ht|=o}else u!==null?(o=u.baseLanes|n,t.memoizedState=null):o=n,ge(ar,ht),ht|=o;return Xe(e,t,l,n),t.child}function Td(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ka(e,t,n,o,l){var u=nt(n)?Sn:We.current;return u=Xn(t,u),rr(t,l),n=da(e,t,n,o,u,l),o=ha(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,$t(e,t,l)):(Se&&o&&qo(t),t.flags|=1,Xe(e,t,n,l),t.child)}function Nd(e,t,n,o,l){if(nt(n)){var u=!0;Qi(t)}else u=!1;if(rr(t,l),t.stateNode===null)ms(e,t),md(t,n,o),va(t,n,o,l),o=!0;else if(e===null){var p=t.stateNode,w=t.memoizedProps;p.props=w;var k=p.context,P=n.contextType;typeof P=="object"&&P!==null?P=gt(P):(P=nt(n)?Sn:We.current,P=Xn(t,P));var M=n.getDerivedStateFromProps,L=typeof M=="function"||typeof p.getSnapshotBeforeUpdate=="function";L||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w!==o||k!==P)&&pd(t,p,o,P),an=!1;var j=t.memoizedState;p.state=j,ss(t,o,p,l),k=t.memoizedState,w!==o||j!==k||tt.current||an?(typeof M=="function"&&(ga(t,n,M,o),k=t.memoizedState),(w=an||fd(t,n,w,o,j,k,P))?(L||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=k),p.props=o,p.state=k,p.context=P,o=w):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{p=t.stateNode,Hc(e,t),w=t.memoizedProps,P=t.type===t.elementType?w:Pt(t.type,w),p.props=P,L=t.pendingProps,j=p.context,k=n.contextType,typeof k=="object"&&k!==null?k=gt(k):(k=nt(n)?Sn:We.current,k=Xn(t,k));var W=n.getDerivedStateFromProps;(M=typeof W=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w!==L||j!==k)&&pd(t,p,o,k),an=!1,j=t.memoizedState,p.state=j,ss(t,o,p,l);var Y=t.memoizedState;w!==L||j!==Y||tt.current||an?(typeof W=="function"&&(ga(t,n,W,o),Y=t.memoizedState),(P=an||fd(t,n,P,o,j,Y,k)||!1)?(M||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(o,Y,k),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(o,Y,k)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||w===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=Y),p.props=o,p.state=Y,p.context=k,o=P):(typeof p.componentDidUpdate!="function"||w===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),o=!1)}return Sa(e,t,n,o,u,l)}function Sa(e,t,n,o,l,u){Td(e,t);var p=(t.flags&128)!==0;if(!o&&!p)return l&&Ec(t,n,!1),$t(e,t,u);o=t.stateNode,Vy.current=t;var w=p&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&p?(t.child=tr(t,e.child,null,u),t.child=tr(t,null,w,u)):Xe(e,t,w,u),t.memoizedState=o.state,l&&Ec(t,n,!0),t.child}function Pd(e){var t=e.stateNode;t.pendingContext?Ac(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ac(e,t.context,!1),sa(e,t.containerInfo)}function Cd(e,t,n,o,l){return er(),Zo(l),t.flags|=256,Xe(e,t,n,o),t.child}var ba={dehydrated:null,treeContext:null,retryLane:0};function Ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ad(e,t,n){var o=t.pendingProps,l=Ie.current,u=!1,p=(t.flags&128)!==0,w;if((w=p)||(w=e!==null&&e.memoizedState===null?!1:(l&2)!==0),w?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ge(Ie,l&1),e===null)return Xo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(p=o.children,e=o.fallback,u?(o=t.mode,u=t.child,p={mode:"hidden",children:p},(o&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=p):u=Ns(p,o,0,null),e=Dn(e,o,n,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=Ia(n),t.memoizedState=ba,e):Ta(t,p));if(l=e.memoizedState,l!==null&&(w=l.dehydrated,w!==null))return _y(e,t,p,o,w,l,n);if(u){u=o.fallback,p=t.mode,l=e.child,w=l.sibling;var k={mode:"hidden",children:o.children};return(p&1)===0&&t.child!==l?(o=t.child,o.childLanes=0,o.pendingProps=k,t.deletions=null):(o=mn(l,k),o.subtreeFlags=l.subtreeFlags&14680064),w!==null?u=mn(w,u):(u=Dn(u,p,n,null),u.flags|=2),u.return=t,o.return=t,o.sibling=u,t.child=o,o=u,u=t.child,p=e.child.memoizedState,p=p===null?Ia(n):{baseLanes:p.baseLanes|n,cachePool:null,transitions:p.transitions},u.memoizedState=p,u.childLanes=e.childLanes&~n,t.memoizedState=ba,o}return u=e.child,e=u.sibling,o=mn(u,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ta(e,t){return t=Ns({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fs(e,t,n,o){return o!==null&&Zo(o),tr(t,e.child,null,n),e=Ta(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _y(e,t,n,o,l,u,p){if(n)return t.flags&256?(t.flags&=-257,o=wa(Error(s(422))),fs(e,t,p,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=o.fallback,l=t.mode,o=Ns({mode:"visible",children:o.children},l,0,null),u=Dn(u,l,p,null),u.flags|=2,o.return=t,u.return=t,o.sibling=u,t.child=o,(t.mode&1)!==0&&tr(t,e.child,null,p),t.child.memoizedState=Ia(p),t.memoizedState=ba,u);if((t.mode&1)===0)return fs(e,t,p,null);if(l.data==="$!"){if(o=l.nextSibling&&l.nextSibling.dataset,o)var w=o.dgst;return o=w,u=Error(s(419)),o=wa(u,o,void 0),fs(e,t,p,o)}if(w=(p&e.childLanes)!==0,rt||w){if(o=_e,o!==null){switch(p&-p){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(o.suspendedLanes|p))!==0?0:l,l!==0&&l!==u.retryLane&&(u.retryLane=l,Wt(e,l),jt(o,e,l,-1))}return za(),o=wa(Error(s(421))),fs(e,t,p,o)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Xy.bind(null,e),l._reactRetry=t,null):(e=u.treeContext,dt=nn(l.nextSibling),ct=t,Se=!0,Nt=null,e!==null&&(pt[yt++]=zt,pt[yt++]=Ht,pt[yt++]=bn,zt=e.id,Ht=e.overflow,bn=t),t=Ta(t,o.children),t.flags|=4096,t)}function jd(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),na(e.return,t,n)}function Na(e,t,n,o,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:l}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=n,u.tailMode=l)}function Ed(e,t,n){var o=t.pendingProps,l=o.revealOrder,u=o.tail;if(Xe(e,t,o.children,n),o=Ie.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jd(e,n,t);else if(e.tag===19)jd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ge(Ie,o),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&os(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Na(t,!1,l,n,u);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&os(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Na(t,!0,n,null,u);break;case"together":Na(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ms(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oy(e,t,n){switch(t.tag){case 3:Pd(t),er();break;case 5:$c(t);break;case 1:nt(t.type)&&Qi(t);break;case 4:sa(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,l=t.memoizedProps.value;ge(ns,o._currentValue),o._currentValue=l;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(ge(Ie,Ie.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ad(e,t,n):(ge(Ie,Ie.current&1),e=$t(e,t,n),e!==null?e.sibling:null);ge(Ie,Ie.current&1);break;case 19:if(o=(n&t.childLanes)!==0,(e.flags&128)!==0){if(o)return Ed(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ge(Ie,Ie.current),o)break;return null;case 22:case 23:return t.lanes=0,Id(e,t,n)}return $t(e,t,n)}var Dd,Pa,Md,Fd;Dd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Pa=function(){},Md=function(e,t,n,o){var l=e.memoizedProps;if(l!==o){e=t.stateNode,Nn(Ft.current);var u=null;switch(n){case"input":l=to(e,l),o=to(e,o),u=[];break;case"select":l=$({},l,{value:void 0}),o=$({},o,{value:void 0}),u=[];break;case"textarea":l=io(e,l),o=io(e,o),u=[];break;default:typeof l.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Gi)}oo(n,o);var p;n=null;for(P in l)if(!o.hasOwnProperty(P)&&l.hasOwnProperty(P)&&l[P]!=null)if(P==="style"){var w=l[P];for(p in w)w.hasOwnProperty(p)&&(n||(n={}),n[p]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(c.hasOwnProperty(P)?u||(u=[]):(u=u||[]).push(P,null));for(P in o){var k=o[P];if(w=l!=null?l[P]:void 0,o.hasOwnProperty(P)&&k!==w&&(k!=null||w!=null))if(P==="style")if(w){for(p in w)!w.hasOwnProperty(p)||k&&k.hasOwnProperty(p)||(n||(n={}),n[p]="");for(p in k)k.hasOwnProperty(p)&&w[p]!==k[p]&&(n||(n={}),n[p]=k[p])}else n||(u||(u=[]),u.push(P,n)),n=k;else P==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,w=w?w.__html:void 0,k!=null&&w!==k&&(u=u||[]).push(P,k)):P==="children"?typeof k!="string"&&typeof k!="number"||(u=u||[]).push(P,""+k):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(c.hasOwnProperty(P)?(k!=null&&P==="onScroll"&&ve("scroll",e),u||w===k||(u=[])):(u=u||[]).push(P,k))}n&&(u=u||[]).push("style",n);var P=u;(t.updateQueue=P)&&(t.flags|=4)}},Fd=function(e,t,n,o){n!==o&&(t.flags|=4)};function Jr(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags&14680064,o|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function By(e,t,n){var o=t.pendingProps;switch(Yo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return nt(t.type)&&Yi(),$e(t),null;case 3:return o=t.stateNode,ir(),we(tt),we(We),la(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(es(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nt!==null&&(_a(Nt),Nt=null))),Pa(e,t),$e(t),null;case 5:oa(t);var l=Nn(qr.current);if(n=t.type,e!==null&&t.stateNode!=null)Md(e,t,n,o,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(s(166));return $e(t),null}if(e=Nn(Ft.current),es(t)){o=t.stateNode,n=t.type;var u=t.memoizedProps;switch(o[Mt]=t,o[Wr]=u,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",o),ve("close",o);break;case"iframe":case"object":case"embed":ve("load",o);break;case"video":case"audio":for(l=0;l<Br.length;l++)ve(Br[l],o);break;case"source":ve("error",o);break;case"img":case"image":case"link":ve("error",o),ve("load",o);break;case"details":ve("toggle",o);break;case"input":mu(o,u),ve("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!u.multiple},ve("invalid",o);break;case"textarea":gu(o,u),ve("invalid",o)}oo(n,u),l=null;for(var p in u)if(u.hasOwnProperty(p)){var w=u[p];p==="children"?typeof w=="string"?o.textContent!==w&&(u.suppressHydrationWarning!==!0&&Ki(o.textContent,w,e),l=["children",w]):typeof w=="number"&&o.textContent!==""+w&&(u.suppressHydrationWarning!==!0&&Ki(o.textContent,w,e),l=["children",""+w]):c.hasOwnProperty(p)&&w!=null&&p==="onScroll"&&ve("scroll",o)}switch(n){case"input":bi(o),yu(o,u,!0);break;case"textarea":bi(o),wu(o);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(o.onclick=Gi)}o=l,t.updateQueue=o,o!==null&&(t.flags|=4)}else{p=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=p.createElement(n,{is:o.is}):(e=p.createElement(n),n==="select"&&(p=e,o.multiple?p.multiple=!0:o.size&&(p.size=o.size))):e=p.createElementNS(e,n),e[Mt]=t,e[Wr]=o,Dd(e,t,!1,!1),t.stateNode=e;e:{switch(p=ao(n,o),n){case"dialog":ve("cancel",e),ve("close",e),l=o;break;case"iframe":case"object":case"embed":ve("load",e),l=o;break;case"video":case"audio":for(l=0;l<Br.length;l++)ve(Br[l],e);l=o;break;case"source":ve("error",e),l=o;break;case"img":case"image":case"link":ve("error",e),ve("load",e),l=o;break;case"details":ve("toggle",e),l=o;break;case"input":mu(e,o),l=to(e,o),ve("invalid",e);break;case"option":l=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},l=$({},o,{value:void 0}),ve("invalid",e);break;case"textarea":gu(e,o),l=io(e,o),ve("invalid",e);break;default:l=o}oo(n,l),w=l;for(u in w)if(w.hasOwnProperty(u)){var k=w[u];u==="style"?bu(e,k):u==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ku(e,k)):u==="children"?typeof k=="string"?(n!=="textarea"||k!=="")&&kr(e,k):typeof k=="number"&&kr(e,""+k):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?k!=null&&u==="onScroll"&&ve("scroll",e):k!=null&&G(e,u,k,p))}switch(n){case"input":bi(e),yu(e,o,!1);break;case"textarea":bi(e),wu(e);break;case"option":o.value!=null&&e.setAttribute("value",""+me(o.value));break;case"select":e.multiple=!!o.multiple,u=o.value,u!=null?On(e,!!o.multiple,u,!1):o.defaultValue!=null&&On(e,!!o.multiple,o.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Gi)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)Fd(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(s(166));if(n=Nn(qr.current),Nn(Ft.current),es(t)){if(o=t.stateNode,n=t.memoizedProps,o[Mt]=t,(u=o.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:Ki(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ki(o.nodeValue,n,(e.mode&1)!==0)}u&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Mt]=t,t.stateNode=o}return $e(t),null;case 13:if(we(Ie),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Vc(),er(),t.flags|=98560,u=!1;else if(u=es(t),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Mt]=t}else er(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),u=!1}else Nt!==null&&(_a(Nt),Nt=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ie.current&1)!==0?Re===0&&(Re=3):za())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return ir(),Pa(e,t),e===null&&zr(t.stateNode.containerInfo),$e(t),null;case 10:return ta(t.type._context),$e(t),null;case 17:return nt(t.type)&&Yi(),$e(t),null;case 19:if(we(Ie),u=t.memoizedState,u===null)return $e(t),null;if(o=(t.flags&128)!==0,p=u.rendering,p===null)if(o)Jr(u,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(p=os(e),p!==null){for(t.flags|=128,Jr(u,!1),o=p.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)u=n,e=o,u.flags&=14680066,p=u.alternate,p===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=p.childLanes,u.lanes=p.lanes,u.child=p.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=p.memoizedProps,u.memoizedState=p.memoizedState,u.updateQueue=p.updateQueue,u.type=p.type,e=p.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ie,Ie.current&1|2),t.child}e=e.sibling}u.tail!==null&&je()>lr&&(t.flags|=128,o=!0,Jr(u,!1),t.lanes=4194304)}else{if(!o)if(e=os(p),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Jr(u,!0),u.tail===null&&u.tailMode==="hidden"&&!p.alternate&&!Se)return $e(t),null}else 2*je()-u.renderingStartTime>lr&&n!==1073741824&&(t.flags|=128,o=!0,Jr(u,!1),t.lanes=4194304);u.isBackwards?(p.sibling=t.child,t.child=p):(n=u.last,n!==null?n.sibling=p:t.child=p,u.last=p)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=je(),t.sibling=null,n=Ie.current,ge(Ie,o?n&1|2:n&1),t):($e(t),null);case 22:case 23:return Ba(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(ht&1073741824)!==0&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function zy(e,t){switch(Yo(t),t.tag){case 1:return nt(t.type)&&Yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),we(tt),we(We),la(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return oa(t),null;case 13:if(we(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Ie),null;case 4:return ir(),null;case 10:return ta(t.type._context),null;case 22:case 23:return Ba(),null;case 24:return null;default:return null}}var ps=!1,Ke=!1,Hy=typeof WeakSet=="function"?WeakSet:Set,q=null;function or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Ce(e,t,o)}else n.current=null}function Ca(e,t,n){try{n()}catch(o){Ce(e,t,o)}}var Ld=!1;function Wy(e,t){if(Bo=Li,e=fc(),Do(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var p=0,w=-1,k=-1,P=0,M=0,L=e,j=null;t:for(;;){for(var W;L!==n||l!==0&&L.nodeType!==3||(w=p+l),L!==u||o!==0&&L.nodeType!==3||(k=p+o),L.nodeType===3&&(p+=L.nodeValue.length),(W=L.firstChild)!==null;)j=L,L=W;for(;;){if(L===e)break t;if(j===n&&++P===l&&(w=p),j===u&&++M===o&&(k=p),(W=L.nextSibling)!==null)break;L=j,j=L.parentNode}L=W}n=w===-1||k===-1?null:{start:w,end:k}}else n=null}n=n||{start:0,end:0}}else n=null;for(zo={focusedElem:e,selectionRange:n},Li=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var Y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Y!==null){var Q=Y.memoizedProps,Ee=Y.memoizedState,T=t.stateNode,b=T.getSnapshotBeforeUpdate(t.elementType===t.type?Q:Pt(t.type,Q),Ee);T.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var N=t.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(R){Ce(t,t.return,R)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return Y=Ld,Ld=!1,Y}function ei(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&e)===e){var u=l.destroy;l.destroy=void 0,u!==void 0&&Ca(t,n,u)}l=l.next}while(l!==o)}}function ys(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Aa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rd(e){var t=e.alternate;t!==null&&(e.alternate=null,Rd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Wr],delete t[$o],delete t[Ty],delete t[Ny])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vd(e){return e.tag===5||e.tag===3||e.tag===4}function _d(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ja(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gi));else if(o!==4&&(e=e.child,e!==null))for(ja(e,t,n),e=e.sibling;e!==null;)ja(e,t,n),e=e.sibling}function Ea(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ea(e,t,n),e=e.sibling;e!==null;)Ea(e,t,n),e=e.sibling}var Be=null,Ct=!1;function un(e,t,n){for(n=n.child;n!==null;)Od(e,t,n),n=n.sibling}function Od(e,t,n){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Ai,n)}catch{}switch(n.tag){case 5:Ke||or(n,t);case 6:var o=Be,l=Ct;Be=null,un(e,t,n),Be=o,Ct=l,Be!==null&&(Ct?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Ct?(e=Be,n=n.stateNode,e.nodeType===8?Uo(e.parentNode,n):e.nodeType===1&&Uo(e,n),Dr(e)):Uo(Be,n.stateNode));break;case 4:o=Be,l=Ct,Be=n.stateNode.containerInfo,Ct=!0,un(e,t,n),Be=o,Ct=l;break;case 0:case 11:case 14:case 15:if(!Ke&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){l=o=o.next;do{var u=l,p=u.destroy;u=u.tag,p!==void 0&&((u&2)!==0||(u&4)!==0)&&Ca(n,t,p),l=l.next}while(l!==o)}un(e,t,n);break;case 1:if(!Ke&&(or(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(w){Ce(n,t,w)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(Ke=(o=Ke)||n.memoizedState!==null,un(e,t,n),Ke=o):un(e,t,n);break;default:un(e,t,n)}}function Bd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hy),t.forEach(function(o){var l=Zy.bind(null,e,o);n.has(o)||(n.add(o),o.then(l,l))})}}function At(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var l=n[o];try{var u=e,p=t,w=p;e:for(;w!==null;){switch(w.tag){case 5:Be=w.stateNode,Ct=!1;break e;case 3:Be=w.stateNode.containerInfo,Ct=!0;break e;case 4:Be=w.stateNode.containerInfo,Ct=!0;break e}w=w.return}if(Be===null)throw Error(s(160));Od(u,p,l),Be=null,Ct=!1;var k=l.alternate;k!==null&&(k.return=null),l.return=null}catch(P){Ce(l,t,P)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zd(t,e),t=t.sibling}function zd(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(At(t,e),Rt(e),o&4){try{ei(3,e,e.return),ys(3,e)}catch(Q){Ce(e,e.return,Q)}try{ei(5,e,e.return)}catch(Q){Ce(e,e.return,Q)}}break;case 1:At(t,e),Rt(e),o&512&&n!==null&&or(n,n.return);break;case 5:if(At(t,e),Rt(e),o&512&&n!==null&&or(n,n.return),e.flags&32){var l=e.stateNode;try{kr(l,"")}catch(Q){Ce(e,e.return,Q)}}if(o&4&&(l=e.stateNode,l!=null)){var u=e.memoizedProps,p=n!==null?n.memoizedProps:u,w=e.type,k=e.updateQueue;if(e.updateQueue=null,k!==null)try{w==="input"&&u.type==="radio"&&u.name!=null&&pu(l,u),ao(w,p);var P=ao(w,u);for(p=0;p<k.length;p+=2){var M=k[p],L=k[p+1];M==="style"?bu(l,L):M==="dangerouslySetInnerHTML"?ku(l,L):M==="children"?kr(l,L):G(l,M,L,P)}switch(w){case"input":no(l,u);break;case"textarea":vu(l,u);break;case"select":var j=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!u.multiple;var W=u.value;W!=null?On(l,!!u.multiple,W,!1):j!==!!u.multiple&&(u.defaultValue!=null?On(l,!!u.multiple,u.defaultValue,!0):On(l,!!u.multiple,u.multiple?[]:"",!1))}l[Wr]=u}catch(Q){Ce(e,e.return,Q)}}break;case 6:if(At(t,e),Rt(e),o&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,u=e.memoizedProps;try{l.nodeValue=u}catch(Q){Ce(e,e.return,Q)}}break;case 3:if(At(t,e),Rt(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(Q){Ce(e,e.return,Q)}break;case 4:At(t,e),Rt(e);break;case 13:At(t,e),Rt(e),l=e.child,l.flags&8192&&(u=l.memoizedState!==null,l.stateNode.isHidden=u,!u||l.alternate!==null&&l.alternate.memoizedState!==null||(Fa=je())),o&4&&Bd(e);break;case 22:if(M=n!==null&&n.memoizedState!==null,e.mode&1?(Ke=(P=Ke)||M,At(t,e),Ke=P):At(t,e),Rt(e),o&8192){if(P=e.memoizedState!==null,(e.stateNode.isHidden=P)&&!M&&(e.mode&1)!==0)for(q=e,M=e.child;M!==null;){for(L=q=M;q!==null;){switch(j=q,W=j.child,j.tag){case 0:case 11:case 14:case 15:ei(4,j,j.return);break;case 1:or(j,j.return);var Y=j.stateNode;if(typeof Y.componentWillUnmount=="function"){o=j,n=j.return;try{t=o,Y.props=t.memoizedProps,Y.state=t.memoizedState,Y.componentWillUnmount()}catch(Q){Ce(o,n,Q)}}break;case 5:or(j,j.return);break;case 22:if(j.memoizedState!==null){Ud(L);continue}}W!==null?(W.return=j,q=W):Ud(L)}M=M.sibling}e:for(M=null,L=e;;){if(L.tag===5){if(M===null){M=L;try{l=L.stateNode,P?(u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(w=L.stateNode,k=L.memoizedProps.style,p=k!=null&&k.hasOwnProperty("display")?k.display:null,w.style.display=Su("display",p))}catch(Q){Ce(e,e.return,Q)}}}else if(L.tag===6){if(M===null)try{L.stateNode.nodeValue=P?"":L.memoizedProps}catch(Q){Ce(e,e.return,Q)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===e)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===e)break e;for(;L.sibling===null;){if(L.return===null||L.return===e)break e;M===L&&(M=null),L=L.return}M===L&&(M=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:At(t,e),Rt(e),o&4&&Bd(e);break;case 21:break;default:At(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vd(n)){var o=n;break e}n=n.return}throw Error(s(160))}switch(o.tag){case 5:var l=o.stateNode;o.flags&32&&(kr(l,""),o.flags&=-33);var u=_d(e);Ea(e,u,l);break;case 3:case 4:var p=o.stateNode.containerInfo,w=_d(e);ja(e,w,p);break;default:throw Error(s(161))}}catch(k){Ce(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uy(e,t,n){q=e,Hd(e)}function Hd(e,t,n){for(var o=(e.mode&1)!==0;q!==null;){var l=q,u=l.child;if(l.tag===22&&o){var p=l.memoizedState!==null||ps;if(!p){var w=l.alternate,k=w!==null&&w.memoizedState!==null||Ke;w=ps;var P=Ke;if(ps=p,(Ke=k)&&!P)for(q=l;q!==null;)p=q,k=p.child,p.tag===22&&p.memoizedState!==null?$d(l):k!==null?(k.return=p,q=k):$d(l);for(;u!==null;)q=u,Hd(u),u=u.sibling;q=l,ps=w,Ke=P}Wd(e)}else(l.subtreeFlags&8772)!==0&&u!==null?(u.return=l,q=u):Wd(e)}}function Wd(e){for(;q!==null;){var t=q;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ke||ys(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Ke)if(n===null)o.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);o.componentDidUpdate(l,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&Uc(t,u,o);break;case 3:var p=t.updateQueue;if(p!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uc(t,p,n)}break;case 5:var w=t.stateNode;if(n===null&&t.flags&4){n=w;var k=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&n.focus();break;case"img":k.src&&(n.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var P=t.alternate;if(P!==null){var M=P.memoizedState;if(M!==null){var L=M.dehydrated;L!==null&&Dr(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Ke||t.flags&512&&Aa(t)}catch(j){Ce(t,t.return,j)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function Ud(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function $d(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ys(4,t)}catch(k){Ce(t,n,k)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var l=t.return;try{o.componentDidMount()}catch(k){Ce(t,l,k)}}var u=t.return;try{Aa(t)}catch(k){Ce(t,u,k)}break;case 5:var p=t.return;try{Aa(t)}catch(k){Ce(t,p,k)}}}catch(k){Ce(t,t.return,k)}if(t===e){q=null;break}var w=t.sibling;if(w!==null){w.return=t.return,q=w;break}q=t.return}}var $y=Math.ceil,gs=X.ReactCurrentDispatcher,Da=X.ReactCurrentOwner,wt=X.ReactCurrentBatchConfig,ue=0,_e=null,Me=null,ze=0,ht=0,ar=rn(0),Re=0,ti=null,Cn=0,vs=0,Ma=0,ni=null,it=null,Fa=0,lr=1/0,Kt=null,ws=!1,La=null,cn=null,xs=!1,dn=null,ks=0,ri=0,Ra=null,Ss=-1,bs=0;function Ze(){return(ue&6)!==0?je():Ss!==-1?Ss:Ss=je()}function hn(e){return(e.mode&1)===0?1:(ue&2)!==0&&ze!==0?ze&-ze:Cy.transition!==null?(bs===0&&(bs=_u()),bs):(e=pe,e!==0||(e=window.event,e=e===void 0?16:Gu(e.type)),e)}function jt(e,t,n,o){if(50<ri)throw ri=0,Ra=null,Error(s(185));Pr(e,n,o),((ue&2)===0||e!==_e)&&(e===_e&&((ue&2)===0&&(vs|=n),Re===4&&fn(e,ze)),st(e,o),n===1&&ue===0&&(t.mode&1)===0&&(lr=je()+500,Xi&&on()))}function st(e,t){var n=e.callbackNode;Cp(e,t);var o=Di(e,e===_e?ze:0);if(o===0)n!==null&&Lu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Lu(n),t===1)e.tag===0?Py(Gd.bind(null,e)):Dc(Gd.bind(null,e)),by(function(){(ue&6)===0&&on()}),n=null;else{switch(Ou(o)){case 1:n=po;break;case 4:n=Ru;break;case 16:n=Ci;break;case 536870912:n=Vu;break;default:n=Ci}n=th(n,Kd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kd(e,t){if(Ss=-1,bs=0,(ue&6)!==0)throw Error(s(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var o=Di(e,e===_e?ze:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=Is(e,o);else{t=o;var l=ue;ue|=2;var u=Yd();(_e!==e||ze!==t)&&(Kt=null,lr=je()+500,jn(e,t));do try{qy();break}catch(w){qd(e,w)}while(!0);ea(),gs.current=u,ue=l,Me!==null?t=0:(_e=null,ze=0,t=Re)}if(t!==0){if(t===2&&(l=yo(e),l!==0&&(o=l,t=Va(e,l))),t===1)throw n=ti,jn(e,0),fn(e,o),st(e,je()),n;if(t===6)fn(e,o);else{if(l=e.current.alternate,(o&30)===0&&!Ky(l)&&(t=Is(e,o),t===2&&(u=yo(e),u!==0&&(o=u,t=Va(e,u))),t===1))throw n=ti,jn(e,0),fn(e,o),st(e,je()),n;switch(e.finishedWork=l,e.finishedLanes=o,t){case 0:case 1:throw Error(s(345));case 2:En(e,it,Kt);break;case 3:if(fn(e,o),(o&130023424)===o&&(t=Fa+500-je(),10<t)){if(Di(e,0)!==0)break;if(l=e.suspendedLanes,(l&o)!==o){Ze(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Wo(En.bind(null,e,it,Kt),t);break}En(e,it,Kt);break;case 4:if(fn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,l=-1;0<o;){var p=31-It(o);u=1<<p,p=t[p],p>l&&(l=p),o&=~u}if(o=l,o=je()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*$y(o/1960))-o,10<o){e.timeoutHandle=Wo(En.bind(null,e,it,Kt),o);break}En(e,it,Kt);break;case 5:En(e,it,Kt);break;default:throw Error(s(329))}}}return st(e,je()),e.callbackNode===n?Kd.bind(null,e):null}function Va(e,t){var n=ni;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=Is(e,t),e!==2&&(t=it,it=n,t!==null&&_a(t)),e}function _a(e){it===null?it=e:it.push.apply(it,e)}function Ky(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var l=n[o],u=l.getSnapshot;l=l.value;try{if(!Tt(u(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~Ma,t&=~vs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-It(t),o=1<<n;e[n]=-1,t&=~o}}function Gd(e){if((ue&6)!==0)throw Error(s(327));ur();var t=Di(e,0);if((t&1)===0)return st(e,je()),null;var n=Is(e,t);if(e.tag!==0&&n===2){var o=yo(e);o!==0&&(t=o,n=Va(e,o))}if(n===1)throw n=ti,jn(e,0),fn(e,t),st(e,je()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,En(e,it,Kt),st(e,je()),null}function Oa(e,t){var n=ue;ue|=1;try{return e(t)}finally{ue=n,ue===0&&(lr=je()+500,Xi&&on())}}function An(e){dn!==null&&dn.tag===0&&(ue&6)===0&&ur();var t=ue;ue|=1;var n=wt.transition,o=pe;try{if(wt.transition=null,pe=1,e)return e()}finally{pe=o,wt.transition=n,ue=t,(ue&6)===0&&on()}}function Ba(){ht=ar.current,we(ar)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sy(n)),Me!==null)for(n=Me.return;n!==null;){var o=n;switch(Yo(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Yi();break;case 3:ir(),we(tt),we(We),la();break;case 5:oa(o);break;case 4:ir();break;case 13:we(Ie);break;case 19:we(Ie);break;case 10:ta(o.type._context);break;case 22:case 23:Ba()}n=n.return}if(_e=e,Me=e=mn(e.current,null),ze=ht=t,Re=0,ti=null,Ma=vs=Cn=0,it=ni=null,Tn!==null){for(t=0;t<Tn.length;t++)if(n=Tn[t],o=n.interleaved,o!==null){n.interleaved=null;var l=o.next,u=n.pending;if(u!==null){var p=u.next;u.next=l,o.next=p}n.pending=o}Tn=null}return e}function qd(e,t){do{var n=Me;try{if(ea(),as.current=ds,ls){for(var o=Te.memoizedState;o!==null;){var l=o.queue;l!==null&&(l.pending=null),o=o.next}ls=!1}if(Pn=0,Ve=Le=Te=null,Yr=!1,Qr=0,Da.current=null,n===null||n.return===null){Re=1,ti=t,Me=null;break}e:{var u=e,p=n.return,w=n,k=t;if(t=ze,w.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var P=k,M=w,L=M.tag;if((M.mode&1)===0&&(L===0||L===11||L===15)){var j=M.alternate;j?(M.updateQueue=j.updateQueue,M.memoizedState=j.memoizedState,M.lanes=j.lanes):(M.updateQueue=null,M.memoizedState=null)}var W=wd(p);if(W!==null){W.flags&=-257,xd(W,p,w,u,t),W.mode&1&&vd(u,P,t),t=W,k=P;var Y=t.updateQueue;if(Y===null){var Q=new Set;Q.add(k),t.updateQueue=Q}else Y.add(k);break e}else{if((t&1)===0){vd(u,P,t),za();break e}k=Error(s(426))}}else if(Se&&w.mode&1){var Ee=wd(p);if(Ee!==null){(Ee.flags&65536)===0&&(Ee.flags|=256),xd(Ee,p,w,u,t),Zo(sr(k,w));break e}}u=k=sr(k,w),Re!==4&&(Re=2),ni===null?ni=[u]:ni.push(u),u=p;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var T=yd(u,k,t);Wc(u,T);break e;case 1:w=k;var b=u.type,N=u.stateNode;if((u.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(cn===null||!cn.has(N)))){u.flags|=65536,t&=-t,u.lanes|=t;var R=gd(u,w,t);Wc(u,R);break e}}u=u.return}while(u!==null)}Xd(n)}catch(Z){t=Z,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function Yd(){var e=gs.current;return gs.current=ds,e===null?ds:e}function za(){(Re===0||Re===3||Re===2)&&(Re=4),_e===null||(Cn&268435455)===0&&(vs&268435455)===0||fn(_e,ze)}function Is(e,t){var n=ue;ue|=2;var o=Yd();(_e!==e||ze!==t)&&(Kt=null,jn(e,t));do try{Gy();break}catch(l){qd(e,l)}while(!0);if(ea(),ue=n,gs.current=o,Me!==null)throw Error(s(261));return _e=null,ze=0,Re}function Gy(){for(;Me!==null;)Qd(Me)}function qy(){for(;Me!==null&&!wp();)Qd(Me)}function Qd(e){var t=eh(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?Xd(e):Me=t,Da.current=null}function Xd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=By(n,t,ht),n!==null){Me=n;return}}else{if(n=zy(n,t),n!==null){n.flags&=32767,Me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Me=null;return}}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);Re===0&&(Re=5)}function En(e,t,n){var o=pe,l=wt.transition;try{wt.transition=null,pe=1,Yy(e,t,n,o)}finally{wt.transition=l,pe=o}return null}function Yy(e,t,n,o){do ur();while(dn!==null);if((ue&6)!==0)throw Error(s(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var u=n.lanes|n.childLanes;if(Ap(e,u),e===_e&&(Me=_e=null,ze=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||xs||(xs=!0,th(Ci,function(){return ur(),null})),u=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||u){u=wt.transition,wt.transition=null;var p=pe;pe=1;var w=ue;ue|=4,Da.current=null,Wy(e,n),zd(n,e),py(zo),Li=!!Bo,zo=Bo=null,e.current=n,Uy(n),xp(),ue=w,pe=p,wt.transition=u}else e.current=n;if(xs&&(xs=!1,dn=e,ks=l),u=e.pendingLanes,u===0&&(cn=null),bp(n.stateNode),st(e,je()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],o(l.value,{componentStack:l.stack,digest:l.digest});if(ws)throw ws=!1,e=La,La=null,e;return(ks&1)!==0&&e.tag!==0&&ur(),u=e.pendingLanes,(u&1)!==0?e===Ra?ri++:(ri=0,Ra=e):ri=0,on(),null}function ur(){if(dn!==null){var e=Ou(ks),t=wt.transition,n=pe;try{if(wt.transition=null,pe=16>e?16:e,dn===null)var o=!1;else{if(e=dn,dn=null,ks=0,(ue&6)!==0)throw Error(s(331));var l=ue;for(ue|=4,q=e.current;q!==null;){var u=q,p=u.child;if((q.flags&16)!==0){var w=u.deletions;if(w!==null){for(var k=0;k<w.length;k++){var P=w[k];for(q=P;q!==null;){var M=q;switch(M.tag){case 0:case 11:case 15:ei(8,M,u)}var L=M.child;if(L!==null)L.return=M,q=L;else for(;q!==null;){M=q;var j=M.sibling,W=M.return;if(Rd(M),M===P){q=null;break}if(j!==null){j.return=W,q=j;break}q=W}}}var Y=u.alternate;if(Y!==null){var Q=Y.child;if(Q!==null){Y.child=null;do{var Ee=Q.sibling;Q.sibling=null,Q=Ee}while(Q!==null)}}q=u}}if((u.subtreeFlags&2064)!==0&&p!==null)p.return=u,q=p;else e:for(;q!==null;){if(u=q,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:ei(9,u,u.return)}var T=u.sibling;if(T!==null){T.return=u.return,q=T;break e}q=u.return}}var b=e.current;for(q=b;q!==null;){p=q;var N=p.child;if((p.subtreeFlags&2064)!==0&&N!==null)N.return=p,q=N;else e:for(p=b;q!==null;){if(w=q,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:ys(9,w)}}catch(Z){Ce(w,w.return,Z)}if(w===p){q=null;break e}var R=w.sibling;if(R!==null){R.return=w.return,q=R;break e}q=w.return}}if(ue=l,on(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Ai,e)}catch{}o=!0}return o}finally{pe=n,wt.transition=t}}return!1}function Zd(e,t,n){t=sr(n,t),t=yd(e,t,1),e=ln(e,t,1),t=Ze(),e!==null&&(Pr(e,1,t),st(e,t))}function Ce(e,t,n){if(e.tag===3)Zd(e,e,n);else for(;t!==null;){if(t.tag===3){Zd(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(cn===null||!cn.has(o))){e=sr(n,e),e=gd(t,e,1),t=ln(t,e,1),e=Ze(),t!==null&&(Pr(t,1,e),st(t,e));break}}t=t.return}}function Qy(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,_e===e&&(ze&n)===n&&(Re===4||Re===3&&(ze&130023424)===ze&&500>je()-Fa?jn(e,0):Ma|=n),st(e,t)}function Jd(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ei,Ei<<=1,(Ei&130023424)===0&&(Ei=4194304)));var n=Ze();e=Wt(e,t),e!==null&&(Pr(e,t,n),st(e,n))}function Xy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jd(e,n)}function Zy(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(s(314))}o!==null&&o.delete(t),Jd(e,n)}var eh;eh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)rt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return rt=!1,Oy(e,t,n);rt=(e.flags&131072)!==0}else rt=!1,Se&&(t.flags&1048576)!==0&&Mc(t,Ji,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;ms(e,t),e=t.pendingProps;var l=Xn(t,We.current);rr(t,n),l=da(null,t,o,e,l,n);var u=ha();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(o)?(u=!0,Qi(t)):u=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ia(t),l.updater=hs,t.stateNode=l,l._reactInternals=t,va(t,o,e,n),t=Sa(null,t,o,!0,u,n)):(t.tag=0,Se&&u&&qo(t),Xe(null,t,l,n),t=t.child),t;case 16:o=t.elementType;e:{switch(ms(e,t),e=t.pendingProps,l=o._init,o=l(o._payload),t.type=o,l=t.tag=eg(o),e=Pt(o,e),l){case 0:t=ka(null,t,o,e,n);break e;case 1:t=Nd(null,t,o,e,n);break e;case 11:t=kd(null,t,o,e,n);break e;case 14:t=Sd(null,t,o,Pt(o.type,e),n);break e}throw Error(s(306,o,""))}return t;case 0:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:Pt(o,l),ka(e,t,o,l,n);case 1:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:Pt(o,l),Nd(e,t,o,l,n);case 3:e:{if(Pd(t),e===null)throw Error(s(387));o=t.pendingProps,u=t.memoizedState,l=u.element,Hc(e,t),ss(t,o,null,n);var p=t.memoizedState;if(o=p.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){l=sr(Error(s(423)),t),t=Cd(e,t,o,n,l);break e}else if(o!==l){l=sr(Error(s(424)),t),t=Cd(e,t,o,n,l);break e}else for(dt=nn(t.stateNode.containerInfo.firstChild),ct=t,Se=!0,Nt=null,n=Bc(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(er(),o===l){t=$t(e,t,n);break e}Xe(e,t,o,n)}t=t.child}return t;case 5:return $c(t),e===null&&Xo(t),o=t.type,l=t.pendingProps,u=e!==null?e.memoizedProps:null,p=l.children,Ho(o,l)?p=null:u!==null&&Ho(o,u)&&(t.flags|=32),Td(e,t),Xe(e,t,p,n),t.child;case 6:return e===null&&Xo(t),null;case 13:return Ad(e,t,n);case 4:return sa(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=tr(t,null,o,n):Xe(e,t,o,n),t.child;case 11:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:Pt(o,l),kd(e,t,o,l,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,l=t.pendingProps,u=t.memoizedProps,p=l.value,ge(ns,o._currentValue),o._currentValue=p,u!==null)if(Tt(u.value,p)){if(u.children===l.children&&!tt.current){t=$t(e,t,n);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var w=u.dependencies;if(w!==null){p=u.child;for(var k=w.firstContext;k!==null;){if(k.context===o){if(u.tag===1){k=Ut(-1,n&-n),k.tag=2;var P=u.updateQueue;if(P!==null){P=P.shared;var M=P.pending;M===null?k.next=k:(k.next=M.next,M.next=k),P.pending=k}}u.lanes|=n,k=u.alternate,k!==null&&(k.lanes|=n),na(u.return,n,t),w.lanes|=n;break}k=k.next}}else if(u.tag===10)p=u.type===t.type?null:u.child;else if(u.tag===18){if(p=u.return,p===null)throw Error(s(341));p.lanes|=n,w=p.alternate,w!==null&&(w.lanes|=n),na(p,n,t),p=u.sibling}else p=u.child;if(p!==null)p.return=u;else for(p=u;p!==null;){if(p===t){p=null;break}if(u=p.sibling,u!==null){u.return=p.return,p=u;break}p=p.return}u=p}Xe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,o=t.pendingProps.children,rr(t,n),l=gt(l),o=o(l),t.flags|=1,Xe(e,t,o,n),t.child;case 14:return o=t.type,l=Pt(o,t.pendingProps),l=Pt(o.type,l),Sd(e,t,o,l,n);case 15:return bd(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,l=t.pendingProps,l=t.elementType===o?l:Pt(o,l),ms(e,t),t.tag=1,nt(o)?(e=!0,Qi(t)):e=!1,rr(t,n),md(t,o,l),va(t,o,l,n),Sa(null,t,o,!0,e,n);case 19:return Ed(e,t,n);case 22:return Id(e,t,n)}throw Error(s(156,t.tag))};function th(e,t){return Fu(e,t)}function Jy(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,n,o){return new Jy(e,t,n,o)}function Ha(e){return e=e.prototype,!(!e||!e.isReactComponent)}function eg(e){if(typeof e=="function")return Ha(e)?1:0;if(e!=null){if(e=e.$$typeof,e===at)return 11;if(e===bt)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ts(e,t,n,o,l,u){var p=2;if(o=e,typeof e=="function")Ha(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case U:return Dn(n.children,l,u,t);case K:p=8,l|=8;break;case fe:return e=xt(12,n,t,l|2),e.elementType=fe,e.lanes=u,e;case Ye:return e=xt(13,n,t,l),e.elementType=Ye,e.lanes=u,e;case et:return e=xt(19,n,t,l),e.elementType=et,e.lanes=u,e;case se:return Ns(n,l,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pe:p=10;break e;case Je:p=9;break e;case at:p=11;break e;case bt:p=14;break e;case Qe:p=16,o=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=xt(p,n,t,l),t.elementType=e,t.type=o,t.lanes=u,t}function Dn(e,t,n,o){return e=xt(7,e,o,t),e.lanes=n,e}function Ns(e,t,n,o){return e=xt(22,e,o,t),e.elementType=se,e.lanes=n,e.stateNode={isHidden:!1},e}function Wa(e,t,n){return e=xt(6,e,null,t),e.lanes=n,e}function Ua(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tg(e,t,n,o,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=go(0),this.expirationTimes=go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=go(0),this.identifierPrefix=o,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function $a(e,t,n,o,l,u,p,w,k){return e=new tg(e,t,n,w,k),t===1?(t=1,u===!0&&(t|=8)):t=0,u=xt(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ia(u),e}function ng(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function nh(e){if(!e)return sn;e=e._reactInternals;e:{if(xn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(nt(n))return jc(e,n,t)}return t}function rh(e,t,n,o,l,u,p,w,k){return e=$a(n,o,!0,e,l,u,p,w,k),e.context=nh(null),n=e.current,o=Ze(),l=hn(n),u=Ut(o,l),u.callback=t??null,ln(n,u,l),e.current.lanes=l,Pr(e,l,o),st(e,o),e}function Ps(e,t,n,o){var l=t.current,u=Ze(),p=hn(l);return n=nh(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(u,p),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=ln(l,t,p),e!==null&&(jt(e,l,p,u),is(e,l,p)),p}function Cs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ih(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ka(e,t){ih(e,t),(e=e.alternate)&&ih(e,t)}function rg(){return null}var sh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ga(e){this._internalRoot=e}As.prototype.render=Ga.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Ps(e,t,null,null)},As.prototype.unmount=Ga.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;An(function(){Ps(null,e,null,null)}),t[Ot]=null}};function As(e){this._internalRoot=e}As.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&$u(e)}};function qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function oh(){}function ig(e,t,n,o,l){if(l){if(typeof o=="function"){var u=o;o=function(){var P=Cs(p);u.call(P)}}var p=rh(t,o,e,0,null,!1,!1,"",oh);return e._reactRootContainer=p,e[Ot]=p.current,zr(e.nodeType===8?e.parentNode:e),An(),p}for(;l=e.lastChild;)e.removeChild(l);if(typeof o=="function"){var w=o;o=function(){var P=Cs(k);w.call(P)}}var k=$a(e,0,!1,null,null,!1,!1,"",oh);return e._reactRootContainer=k,e[Ot]=k.current,zr(e.nodeType===8?e.parentNode:e),An(function(){Ps(t,k,n,o)}),k}function Es(e,t,n,o,l){var u=n._reactRootContainer;if(u){var p=u;if(typeof l=="function"){var w=l;l=function(){var k=Cs(p);w.call(k)}}Ps(t,p,e,l)}else p=ig(n,t,e,l,o);return Cs(p)}Bu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nr(t.pendingLanes);n!==0&&(vo(t,n|1),st(t,je()),(ue&6)===0&&(lr=je()+500,on()))}break;case 13:An(function(){var o=Wt(e,1);if(o!==null){var l=Ze();jt(o,e,1,l)}}),Ka(e,1)}},wo=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=Ze();jt(t,e,134217728,n)}Ka(e,134217728)}},zu=function(e){if(e.tag===13){var t=hn(e),n=Wt(e,t);if(n!==null){var o=Ze();jt(n,e,t,o)}Ka(e,t)}},Hu=function(){return pe},Wu=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}},co=function(e,t,n){switch(t){case"input":if(no(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var l=qi(o);if(!l)throw Error(s(90));fu(o),no(o,l)}}}break;case"textarea":vu(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}},Pu=Oa,Cu=An;var sg={usingClientEntryPoint:!1,Events:[Ur,Yn,qi,Tu,Nu,Oa]},ii={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},og={bundleType:ii.bundleType,version:ii.version,rendererPackageName:ii.rendererPackageName,rendererConfig:ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:X.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Du(e),e===null?null:e.stateNode},findFiberByHostInstance:ii.findFiberByHostInstance||rg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ds.isDisabled&&Ds.supportsFiber)try{Ai=Ds.inject(og),Dt=Ds}catch{}}return ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sg,ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qa(t))throw Error(s(200));return ng(e,t,null,n)},ot.createRoot=function(e,t){if(!qa(e))throw Error(s(299));var n=!1,o="",l=sh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=$a(e,1,!1,null,null,n,!1,o,l),e[Ot]=t.current,zr(e.nodeType===8?e.parentNode:e),new Ga(t)},ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Du(t),e=e===null?null:e.stateNode,e},ot.flushSync=function(e){return An(e)},ot.hydrate=function(e,t,n){if(!js(t))throw Error(s(200));return Es(null,e,t,!0,n)},ot.hydrateRoot=function(e,t,n){if(!qa(e))throw Error(s(405));var o=n!=null&&n.hydratedSources||null,l=!1,u="",p=sh;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),t=rh(t,null,e,1,n??null,l,!1,u,p),e[Ot]=t.current,zr(e),o)for(e=0;e<o.length;e++)n=o[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new As(t)},ot.render=function(e,t,n){if(!js(t))throw Error(s(200));return Es(null,e,t,!1,n)},ot.unmountComponentAtNode=function(e){if(!js(e))throw Error(s(40));return e._reactRootContainer?(An(function(){Es(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1},ot.unstable_batchedUpdates=Oa,ot.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!js(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Es(e,t,n,!1,o)},ot.version="18.3.1-next-f1338f8080-20240426",ot}var mh;function pg(){if(mh)return Xa.exports;mh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),Xa.exports=mg(),Xa.exports}var ph;function yg(){if(ph)return Ms;ph=1;var r=pg();return Ms.createRoot=r.createRoot,Ms.hydrateRoot=r.hydrateRoot,Ms}var gg=yg();const vg=Lf(gg),Ml=B.createContext({});function Fl(r){const i=B.useRef(null);return i.current===null&&(i.current=r()),i.current}const Ys=B.createContext(null),Ll=B.createContext({transformPagePoint:r=>r,isStatic:!1,reducedMotion:"never"});class wg extends B.Component{getSnapshotBeforeUpdate(i){const s=this.props.childRef.current;if(s&&i.isPresent&&!this.props.isPresent){const a=this.props.sizeRef.current;a.height=s.offsetHeight||0,a.width=s.offsetWidth||0,a.top=s.offsetTop,a.left=s.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function xg({children:r,isPresent:i}){const s=B.useId(),a=B.useRef(null),c=B.useRef({width:0,height:0,top:0,left:0}),{nonce:h}=B.useContext(Ll);return B.useInsertionEffect(()=>{const{width:d,height:m,top:y,left:g}=c.current;if(i||!a.current||!d||!m)return;a.current.dataset.motionPopId=s;const v=document.createElement("style");return h&&(v.nonce=h),document.head.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${m}px !important;
            top: ${y}px !important;
            left: ${g}px !important;
          }
        `),()=>{document.head.removeChild(v)}},[i]),f.jsx(wg,{isPresent:i,childRef:a,sizeRef:c,children:B.cloneElement(r,{ref:a})})}const kg=({children:r,initial:i,isPresent:s,onExitComplete:a,custom:c,presenceAffectsLayout:h,mode:d})=>{const m=Fl(Sg),y=B.useId(),g=B.useCallback(x=>{m.set(x,!0);for(const S of m.values())if(!S)return;a&&a()},[m,a]),v=B.useMemo(()=>({id:y,initial:i,isPresent:s,custom:c,onExitComplete:g,register:x=>(m.set(x,!1),()=>m.delete(x))}),h?[Math.random(),g]:[s,g]);return B.useMemo(()=>{m.forEach((x,S)=>m.set(S,!1))},[s]),B.useEffect(()=>{!s&&!m.size&&a&&a()},[s]),d==="popLayout"&&(r=f.jsx(xg,{isPresent:s,children:r})),f.jsx(Ys.Provider,{value:v,children:r})};function Sg(){return new Map}function Rf(r=!0){const i=B.useContext(Ys);if(i===null)return[!0,null];const{isPresent:s,onExitComplete:a,register:c}=i,h=B.useId();B.useEffect(()=>{r&&c(h)},[r]);const d=B.useCallback(()=>r&&a&&a(h),[h,a,r]);return!s&&a?[!1,d]:[!0]}const Fs=r=>r.key||"";function yh(r){const i=[];return B.Children.forEach(r,s=>{B.isValidElement(s)&&i.push(s)}),i}const Rl=typeof window<"u",Vf=Rl?B.useLayoutEffect:B.useEffect,bg=({children:r,custom:i,initial:s=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:h="sync",propagate:d=!1})=>{const[m,y]=Rf(d),g=B.useMemo(()=>yh(r),[r]),v=d&&!m?[]:g.map(Fs),x=B.useRef(!0),S=B.useRef(g),C=Fl(()=>new Map),[F,A]=B.useState(g),[E,_]=B.useState(g);Vf(()=>{x.current=!1,S.current=g;for(let X=0;X<E.length;X++){const z=Fs(E[X]);v.includes(z)?C.delete(z):C.get(z)!==!0&&C.set(z,!1)}},[E,v.length,v.join("-")]);const H=[];if(g!==F){let X=[...g];for(let z=0;z<E.length;z++){const V=E[z],U=Fs(V);v.includes(U)||(X.splice(z,0,V),H.push(V))}h==="wait"&&H.length&&(X=H),_(yh(X)),A(g);return}const{forceRender:G}=B.useContext(Ml);return f.jsx(f.Fragment,{children:E.map(X=>{const z=Fs(X),V=d&&!m?!1:g===E||v.includes(z),U=()=>{if(C.has(z))C.set(z,!0);else return;let K=!0;C.forEach(fe=>{fe||(K=!1)}),K&&(G==null||G(),_(S.current),d&&(y==null||y()),a&&a())};return f.jsx(kg,{isPresent:V,initial:!x.current||s?void 0:!1,custom:V?void 0:i,presenceAffectsLayout:c,mode:h,onExitComplete:V?void 0:U,children:X},z)})})},ft=r=>r;let _f=ft;function Vl(r){let i;return()=>(i===void 0&&(i=r()),i)}const pr=(r,i,s)=>{const a=i-r;return a===0?1:(s-r)/a},Gt=r=>r*1e3,qt=r=>r/1e3,Ig={useManualTiming:!1};function Tg(r){let i=new Set,s=new Set,a=!1,c=!1;const h=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function m(g){h.has(g)&&(y.schedule(g),r()),g(d)}const y={schedule:(g,v=!1,x=!1)=>{const C=x&&a?i:s;return v&&h.add(g),C.has(g)||C.add(g),g},cancel:g=>{s.delete(g),h.delete(g)},process:g=>{if(d=g,a){c=!0;return}a=!0,[i,s]=[s,i],i.forEach(m),i.clear(),a=!1,c&&(c=!1,y.process(g))}};return y}const Ls=["read","resolveKeyframes","update","preRender","render","postRender"],Ng=40;function Of(r,i){let s=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},h=()=>s=!0,d=Ls.reduce((_,H)=>(_[H]=Tg(h),_),{}),{read:m,resolveKeyframes:y,update:g,preRender:v,render:x,postRender:S}=d,C=()=>{const _=performance.now();s=!1,c.delta=a?1e3/60:Math.max(Math.min(_-c.timestamp,Ng),1),c.timestamp=_,c.isProcessing=!0,m.process(c),y.process(c),g.process(c),v.process(c),x.process(c),S.process(c),c.isProcessing=!1,s&&i&&(a=!1,r(C))},F=()=>{s=!0,a=!0,c.isProcessing||r(C)};return{schedule:Ls.reduce((_,H)=>{const G=d[H];return _[H]=(X,z=!1,V=!1)=>(s||F(),G.schedule(X,z,V)),_},{}),cancel:_=>{for(let H=0;H<Ls.length;H++)d[Ls[H]].cancel(_)},state:c,steps:d}}const{schedule:xe,cancel:gn,state:He,steps:el}=Of(typeof requestAnimationFrame<"u"?requestAnimationFrame:ft,!0),Bf=B.createContext({strict:!1}),gh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},yr={};for(const r in gh)yr[r]={isEnabled:i=>gh[r].some(s=>!!i[s])};function Pg(r){for(const i in r)yr[i]={...yr[i],...r[i]}}const Cg=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Hs(r){return r.startsWith("while")||r.startsWith("drag")&&r!=="draggable"||r.startsWith("layout")||r.startsWith("onTap")||r.startsWith("onPan")||r.startsWith("onLayout")||Cg.has(r)}let zf=r=>!Hs(r);function Ag(r){r&&(zf=i=>i.startsWith("on")?!Hs(i):r(i))}try{Ag(require("@emotion/is-prop-valid").default)}catch{}function jg(r,i,s){const a={};for(const c in r)c==="values"&&typeof r.values=="object"||(zf(c)||s===!0&&Hs(c)||!i&&!Hs(c)||r.draggable&&c.startsWith("onDrag"))&&(a[c]=r[c]);return a}function Eg(r){if(typeof Proxy>"u")return r;const i=new Map,s=(...a)=>r(...a);return new Proxy(s,{get:(a,c)=>c==="create"?r:(i.has(c)||i.set(c,r(c)),i.get(c))})}const Qs=B.createContext({});function mi(r){return typeof r=="string"||Array.isArray(r)}function Xs(r){return r!==null&&typeof r=="object"&&typeof r.start=="function"}const _l=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ol=["initial",..._l];function Zs(r){return Xs(r.animate)||Ol.some(i=>mi(r[i]))}function Hf(r){return!!(Zs(r)||r.variants)}function Dg(r,i){if(Zs(r)){const{initial:s,animate:a}=r;return{initial:s===!1||mi(s)?s:void 0,animate:mi(a)?a:void 0}}return r.inherit!==!1?i:{}}function Mg(r){const{initial:i,animate:s}=Dg(r,B.useContext(Qs));return B.useMemo(()=>({initial:i,animate:s}),[vh(i),vh(s)])}function vh(r){return Array.isArray(r)?r.join(" "):r}const Fg=Symbol.for("motionComponentSymbol");function cr(r){return r&&typeof r=="object"&&Object.prototype.hasOwnProperty.call(r,"current")}function Lg(r,i,s){return B.useCallback(a=>{a&&r.onMount&&r.onMount(a),i&&(a?i.mount(a):i.unmount()),s&&(typeof s=="function"?s(a):cr(s)&&(s.current=a))},[i])}const Bl=r=>r.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Rg="framerAppearId",Wf="data-"+Bl(Rg),{schedule:zl}=Of(queueMicrotask,!1),Uf=B.createContext({});function Vg(r,i,s,a,c){var h,d;const{visualElement:m}=B.useContext(Qs),y=B.useContext(Bf),g=B.useContext(Ys),v=B.useContext(Ll).reducedMotion,x=B.useRef(null);a=a||y.renderer,!x.current&&a&&(x.current=a(r,{visualState:i,parent:m,props:s,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:v}));const S=x.current,C=B.useContext(Uf);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&_g(x.current,s,c,C);const F=B.useRef(!1);B.useInsertionEffect(()=>{S&&F.current&&S.update(s,g)});const A=s[Wf],E=B.useRef(!!A&&!(!((h=window.MotionHandoffIsComplete)===null||h===void 0)&&h.call(window,A))&&((d=window.MotionHasOptimisedAnimation)===null||d===void 0?void 0:d.call(window,A)));return Vf(()=>{S&&(F.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),zl.render(S.render),E.current&&S.animationState&&S.animationState.animateChanges())}),B.useEffect(()=>{S&&(!E.current&&S.animationState&&S.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{var _;(_=window.MotionHandoffMarkAsComplete)===null||_===void 0||_.call(window,A)}),E.current=!1))}),S}function _g(r,i,s,a){const{layoutId:c,layout:h,drag:d,dragConstraints:m,layoutScroll:y,layoutRoot:g}=i;r.projection=new s(r.latestValues,i["data-framer-portal-id"]?void 0:$f(r.parent)),r.projection.setOptions({layoutId:c,layout:h,alwaysMeasureLayout:!!d||m&&cr(m),visualElement:r,animationType:typeof h=="string"?h:"both",initialPromotionConfig:a,layoutScroll:y,layoutRoot:g})}function $f(r){if(r)return r.options.allowProjection!==!1?r.projection:$f(r.parent)}function Og({preloadedFeatures:r,createVisualElement:i,useRender:s,useVisualState:a,Component:c}){var h,d;r&&Pg(r);function m(g,v){let x;const S={...B.useContext(Ll),...g,layoutId:Bg(g)},{isStatic:C}=S,F=Mg(g),A=a(g,C);if(!C&&Rl){zg();const E=Hg(S);x=E.MeasureLayout,F.visualElement=Vg(c,A,S,i,E.ProjectionNode)}return f.jsxs(Qs.Provider,{value:F,children:[x&&F.visualElement?f.jsx(x,{visualElement:F.visualElement,...S}):null,s(c,g,Lg(A,F.visualElement,v),A,C,F.visualElement)]})}m.displayName=`motion.${typeof c=="string"?c:`create(${(d=(h=c.displayName)!==null&&h!==void 0?h:c.name)!==null&&d!==void 0?d:""})`}`;const y=B.forwardRef(m);return y[Fg]=c,y}function Bg({layoutId:r}){const i=B.useContext(Ml).id;return i&&r!==void 0?i+"-"+r:r}function zg(r,i){B.useContext(Bf).strict}function Hg(r){const{drag:i,layout:s}=yr;if(!i&&!s)return{};const a={...i,...s};return{MeasureLayout:i!=null&&i.isEnabled(r)||s!=null&&s.isEnabled(r)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}const Wg=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Hl(r){return typeof r!="string"||r.includes("-")?!1:!!(Wg.indexOf(r)>-1||/[A-Z]/u.test(r))}function wh(r){const i=[{},{}];return r==null||r.values.forEach((s,a)=>{i[0][a]=s.get(),i[1][a]=s.getVelocity()}),i}function Wl(r,i,s,a){if(typeof i=="function"){const[c,h]=wh(a);i=i(s!==void 0?s:r.custom,c,h)}if(typeof i=="string"&&(i=r.variants&&r.variants[i]),typeof i=="function"){const[c,h]=wh(a);i=i(s!==void 0?s:r.custom,c,h)}return i}const pl=r=>Array.isArray(r),Ug=r=>!!(r&&typeof r=="object"&&r.mix&&r.toValue),$g=r=>pl(r)?r[r.length-1]||0:r,qe=r=>!!(r&&r.getVelocity);function Os(r){const i=qe(r)?r.get():r;return Ug(i)?i.toValue():i}function Kg({scrapeMotionValuesFromProps:r,createRenderState:i,onUpdate:s},a,c,h){const d={latestValues:Gg(a,c,h,r),renderState:i()};return s&&(d.onMount=m=>s({props:a,current:m,...d}),d.onUpdate=m=>s(m)),d}const Kf=r=>(i,s)=>{const a=B.useContext(Qs),c=B.useContext(Ys),h=()=>Kg(r,i,a,c);return s?h():Fl(h)};function Gg(r,i,s,a){const c={},h=a(r,{});for(const S in h)c[S]=Os(h[S]);let{initial:d,animate:m}=r;const y=Zs(r),g=Hf(r);i&&g&&!y&&r.inherit!==!1&&(d===void 0&&(d=i.initial),m===void 0&&(m=i.animate));let v=s?s.initial===!1:!1;v=v||d===!1;const x=v?m:d;if(x&&typeof x!="boolean"&&!Xs(x)){const S=Array.isArray(x)?x:[x];for(let C=0;C<S.length;C++){const F=Wl(r,S[C]);if(F){const{transitionEnd:A,transition:E,..._}=F;for(const H in _){let G=_[H];if(Array.isArray(G)){const X=v?G.length-1:0;G=G[X]}G!==null&&(c[H]=G)}for(const H in A)c[H]=A[H]}}}return c}const vr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],_n=new Set(vr),Gf=r=>i=>typeof i=="string"&&i.startsWith(r),qf=Gf("--"),qg=Gf("var(--"),Ul=r=>qg(r)?Yg.test(r.split("/*")[0].trim()):!1,Yg=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Yf=(r,i)=>i&&typeof r=="number"?i.transform(r):r,Yt=(r,i,s)=>s>i?i:s<r?r:s,wr={test:r=>typeof r=="number",parse:parseFloat,transform:r=>r},pi={...wr,transform:r=>Yt(0,1,r)},Rs={...wr,default:1},wi=r=>({test:i=>typeof i=="string"&&i.endsWith(r)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${r}`}),yn=wi("deg"),Vt=wi("%"),ne=wi("px"),Qg=wi("vh"),Xg=wi("vw"),xh={...Vt,parse:r=>Vt.parse(r)/100,transform:r=>Vt.transform(r*100)},Zg={borderWidth:ne,borderTopWidth:ne,borderRightWidth:ne,borderBottomWidth:ne,borderLeftWidth:ne,borderRadius:ne,radius:ne,borderTopLeftRadius:ne,borderTopRightRadius:ne,borderBottomRightRadius:ne,borderBottomLeftRadius:ne,width:ne,maxWidth:ne,height:ne,maxHeight:ne,top:ne,right:ne,bottom:ne,left:ne,padding:ne,paddingTop:ne,paddingRight:ne,paddingBottom:ne,paddingLeft:ne,margin:ne,marginTop:ne,marginRight:ne,marginBottom:ne,marginLeft:ne,backgroundPositionX:ne,backgroundPositionY:ne},Jg={rotate:yn,rotateX:yn,rotateY:yn,rotateZ:yn,scale:Rs,scaleX:Rs,scaleY:Rs,scaleZ:Rs,skew:yn,skewX:yn,skewY:yn,distance:ne,translateX:ne,translateY:ne,translateZ:ne,x:ne,y:ne,z:ne,perspective:ne,transformPerspective:ne,opacity:pi,originX:xh,originY:xh,originZ:ne},kh={...wr,transform:Math.round},$l={...Zg,...Jg,zIndex:kh,size:ne,fillOpacity:pi,strokeOpacity:pi,numOctaves:kh},ev={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},tv=vr.length;function nv(r,i,s){let a="",c=!0;for(let h=0;h<tv;h++){const d=vr[h],m=r[d];if(m===void 0)continue;let y=!0;if(typeof m=="number"?y=m===(d.startsWith("scale")?1:0):y=parseFloat(m)===0,!y||s){const g=Yf(m,$l[d]);if(!y){c=!1;const v=ev[d]||d;a+=`${v}(${g}) `}s&&(i[d]=g)}}return a=a.trim(),s?a=s(i,c?"":a):c&&(a="none"),a}function Kl(r,i,s){const{style:a,vars:c,transformOrigin:h}=r;let d=!1,m=!1;for(const y in i){const g=i[y];if(_n.has(y)){d=!0;continue}else if(qf(y)){c[y]=g;continue}else{const v=Yf(g,$l[y]);y.startsWith("origin")?(m=!0,h[y]=v):a[y]=v}}if(i.transform||(d||s?a.transform=nv(i,r.transform,s):a.transform&&(a.transform="none")),m){const{originX:y="50%",originY:g="50%",originZ:v=0}=h;a.transformOrigin=`${y} ${g} ${v}`}}const rv={offset:"stroke-dashoffset",array:"stroke-dasharray"},iv={offset:"strokeDashoffset",array:"strokeDasharray"};function sv(r,i,s=1,a=0,c=!0){r.pathLength=1;const h=c?rv:iv;r[h.offset]=ne.transform(-a);const d=ne.transform(i),m=ne.transform(s);r[h.array]=`${d} ${m}`}function Sh(r,i,s){return typeof r=="string"?r:ne.transform(i+s*r)}function ov(r,i,s){const a=Sh(i,r.x,r.width),c=Sh(s,r.y,r.height);return`${a} ${c}`}function Gl(r,{attrX:i,attrY:s,attrScale:a,originX:c,originY:h,pathLength:d,pathSpacing:m=1,pathOffset:y=0,...g},v,x){if(Kl(r,g,x),v){r.style.viewBox&&(r.attrs.viewBox=r.style.viewBox);return}r.attrs=r.style,r.style={};const{attrs:S,style:C,dimensions:F}=r;S.transform&&(F&&(C.transform=S.transform),delete S.transform),F&&(c!==void 0||h!==void 0||C.transform)&&(C.transformOrigin=ov(F,c!==void 0?c:.5,h!==void 0?h:.5)),i!==void 0&&(S.x=i),s!==void 0&&(S.y=s),a!==void 0&&(S.scale=a),d!==void 0&&sv(S,d,m,y,!1)}const ql=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Qf=()=>({...ql(),attrs:{}}),Yl=r=>typeof r=="string"&&r.toLowerCase()==="svg";function Xf(r,{style:i,vars:s},a,c){Object.assign(r.style,i,c&&c.getProjectionStyles(a));for(const h in s)r.style.setProperty(h,s[h])}const Zf=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Jf(r,i,s,a){Xf(r,i,void 0,a);for(const c in i.attrs)r.setAttribute(Zf.has(c)?c:Bl(c),i.attrs[c])}const Ws={};function av(r){Object.assign(Ws,r)}function em(r,{layout:i,layoutId:s}){return _n.has(r)||r.startsWith("origin")||(i||s!==void 0)&&(!!Ws[r]||r==="opacity")}function Ql(r,i,s){var a;const{style:c}=r,h={};for(const d in c)(qe(c[d])||i.style&&qe(i.style[d])||em(d,r)||((a=s==null?void 0:s.getValue(d))===null||a===void 0?void 0:a.liveStyle)!==void 0)&&(h[d]=c[d]);return h}function tm(r,i,s){const a=Ql(r,i,s);for(const c in r)if(qe(r[c])||qe(i[c])){const h=vr.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[h]=r[c]}return a}function lv(r,i){try{i.dimensions=typeof r.getBBox=="function"?r.getBBox():r.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}const bh=["x","y","width","height","cx","cy","r"],uv={useVisualState:Kf({scrapeMotionValuesFromProps:tm,createRenderState:Qf,onUpdate:({props:r,prevProps:i,current:s,renderState:a,latestValues:c})=>{if(!s)return;let h=!!r.drag;if(!h){for(const m in c)if(_n.has(m)){h=!0;break}}if(!h)return;let d=!i;if(i)for(let m=0;m<bh.length;m++){const y=bh[m];r[y]!==i[y]&&(d=!0)}d&&xe.read(()=>{lv(s,a),xe.render(()=>{Gl(a,c,Yl(s.tagName),r.transformTemplate),Jf(s,a)})})}})},cv={useVisualState:Kf({scrapeMotionValuesFromProps:Ql,createRenderState:ql})};function nm(r,i,s){for(const a in i)!qe(i[a])&&!em(a,s)&&(r[a]=i[a])}function dv({transformTemplate:r},i){return B.useMemo(()=>{const s=ql();return Kl(s,i,r),Object.assign({},s.vars,s.style)},[i])}function hv(r,i){const s=r.style||{},a={};return nm(a,s,r),Object.assign(a,dv(r,i)),a}function fv(r,i){const s={},a=hv(r,i);return r.drag&&r.dragListener!==!1&&(s.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=r.drag===!0?"none":`pan-${r.drag==="x"?"y":"x"}`),r.tabIndex===void 0&&(r.onTap||r.onTapStart||r.whileTap)&&(s.tabIndex=0),s.style=a,s}function mv(r,i,s,a){const c=B.useMemo(()=>{const h=Qf();return Gl(h,i,Yl(a),r.transformTemplate),{...h.attrs,style:{...h.style}}},[i]);if(r.style){const h={};nm(h,r.style,r),c.style={...h,...c.style}}return c}function pv(r=!1){return(s,a,c,{latestValues:h},d)=>{const y=(Hl(s)?mv:fv)(a,h,d,s),g=jg(a,typeof s=="string",r),v=s!==B.Fragment?{...g,...y,ref:c}:{},{children:x}=a,S=B.useMemo(()=>qe(x)?x.get():x,[x]);return B.createElement(s,{...v,children:S})}}function yv(r,i){return function(a,{forwardMotionProps:c}={forwardMotionProps:!1}){const d={...Hl(a)?uv:cv,preloadedFeatures:r,useRender:pv(c),createVisualElement:i,Component:a};return Og(d)}}function rm(r,i){if(!Array.isArray(i))return!1;const s=i.length;if(s!==r.length)return!1;for(let a=0;a<s;a++)if(i[a]!==r[a])return!1;return!0}function Js(r,i,s){const a=r.getProps();return Wl(a,i,s!==void 0?s:a.custom,r)}const gv=Vl(()=>window.ScrollTimeline!==void 0);class vv{constructor(i){this.stop=()=>this.runAll("stop"),this.animations=i.filter(Boolean)}get finished(){return Promise.all(this.animations.map(i=>"finished"in i?i.finished:i))}getAll(i){return this.animations[0][i]}setAll(i,s){for(let a=0;a<this.animations.length;a++)this.animations[a][i]=s}attachTimeline(i,s){const a=this.animations.map(c=>{if(gv()&&c.attachTimeline)return c.attachTimeline(i);if(typeof s=="function")return s(c)});return()=>{a.forEach((c,h)=>{c&&c(),this.animations[h].stop()})}}get time(){return this.getAll("time")}set time(i){this.setAll("time",i)}get speed(){return this.getAll("speed")}set speed(i){this.setAll("speed",i)}get startTime(){return this.getAll("startTime")}get duration(){let i=0;for(let s=0;s<this.animations.length;s++)i=Math.max(i,this.animations[s].duration);return i}runAll(i){this.animations.forEach(s=>s[i]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class wv extends vv{then(i,s){return Promise.all(this.animations).then(i).catch(s)}}function Xl(r,i){return r?r[i]||r.default||r:void 0}const yl=2e4;function im(r){let i=0;const s=50;let a=r.next(i);for(;!a.done&&i<yl;)i+=s,a=r.next(i);return i>=yl?1/0:i}function Zl(r){return typeof r=="function"}function Ih(r,i){r.timeline=i,r.onfinish=null}const Jl=r=>Array.isArray(r)&&typeof r[0]=="number",xv={linearEasing:void 0};function kv(r,i){const s=Vl(r);return()=>{var a;return(a=xv[i])!==null&&a!==void 0?a:s()}}const Us=kv(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),sm=(r,i,s=10)=>{let a="";const c=Math.max(Math.round(i/s),2);for(let h=0;h<c;h++)a+=r(pr(0,c-1,h))+", ";return`linear(${a.substring(0,a.length-2)})`};function om(r){return!!(typeof r=="function"&&Us()||!r||typeof r=="string"&&(r in gl||Us())||Jl(r)||Array.isArray(r)&&r.every(om))}const ai=([r,i,s,a])=>`cubic-bezier(${r}, ${i}, ${s}, ${a})`,gl={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ai([0,.65,.55,1]),circOut:ai([.55,0,1,.45]),backIn:ai([.31,.01,.66,-.59]),backOut:ai([.33,1.53,.69,.99])};function am(r,i){if(r)return typeof r=="function"&&Us()?sm(r,i):Jl(r)?ai(r):Array.isArray(r)?r.map(s=>am(s,i)||gl.easeOut):gl[r]}const Et={x:!1,y:!1};function lm(){return Et.x||Et.y}function Sv(r,i,s){var a;if(r instanceof Element)return[r];if(typeof r=="string"){let c=document;const h=(a=void 0)!==null&&a!==void 0?a:c.querySelectorAll(r);return h?Array.from(h):[]}return Array.from(r)}function um(r,i){const s=Sv(r),a=new AbortController,c={passive:!0,...i,signal:a.signal};return[s,c,()=>a.abort()]}function Th(r){return i=>{i.pointerType==="touch"||lm()||r(i)}}function bv(r,i,s={}){const[a,c,h]=um(r,s),d=Th(m=>{const{target:y}=m,g=i(m);if(typeof g!="function"||!y)return;const v=Th(x=>{g(x),y.removeEventListener("pointerleave",v)});y.addEventListener("pointerleave",v,c)});return a.forEach(m=>{m.addEventListener("pointerenter",d,c)}),h}const cm=(r,i)=>i?r===i?!0:cm(r,i.parentElement):!1,eu=r=>r.pointerType==="mouse"?typeof r.button!="number"||r.button<=0:r.isPrimary!==!1,Iv=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Tv(r){return Iv.has(r.tagName)||r.tabIndex!==-1}const li=new WeakSet;function Nh(r){return i=>{i.key==="Enter"&&r(i)}}function tl(r,i){r.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const Nv=(r,i)=>{const s=r.currentTarget;if(!s)return;const a=Nh(()=>{if(li.has(s))return;tl(s,"down");const c=Nh(()=>{tl(s,"up")}),h=()=>tl(s,"cancel");s.addEventListener("keyup",c,i),s.addEventListener("blur",h,i)});s.addEventListener("keydown",a,i),s.addEventListener("blur",()=>s.removeEventListener("keydown",a),i)};function Ph(r){return eu(r)&&!lm()}function Pv(r,i,s={}){const[a,c,h]=um(r,s),d=m=>{const y=m.currentTarget;if(!Ph(m)||li.has(y))return;li.add(y);const g=i(m),v=(C,F)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",S),!(!Ph(C)||!li.has(y))&&(li.delete(y),typeof g=="function"&&g(C,{success:F}))},x=C=>{v(C,s.useGlobalTarget||cm(y,C.target))},S=C=>{v(C,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",S,c)};return a.forEach(m=>{!Tv(m)&&m.getAttribute("tabindex")===null&&(m.tabIndex=0),(s.useGlobalTarget?window:m).addEventListener("pointerdown",d,c),m.addEventListener("focus",g=>Nv(g,c),c)}),h}function Cv(r){return r==="x"||r==="y"?Et[r]?null:(Et[r]=!0,()=>{Et[r]=!1}):Et.x||Et.y?null:(Et.x=Et.y=!0,()=>{Et.x=Et.y=!1})}const dm=new Set(["width","height","top","left","right","bottom",...vr]);let Bs;function Av(){Bs=void 0}const _t={now:()=>(Bs===void 0&&_t.set(He.isProcessing||Ig.useManualTiming?He.timestamp:performance.now()),Bs),set:r=>{Bs=r,queueMicrotask(Av)}};function tu(r,i){r.indexOf(i)===-1&&r.push(i)}function nu(r,i){const s=r.indexOf(i);s>-1&&r.splice(s,1)}class ru{constructor(){this.subscriptions=[]}add(i){return tu(this.subscriptions,i),()=>nu(this.subscriptions,i)}notify(i,s,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,s,a);else for(let h=0;h<c;h++){const d=this.subscriptions[h];d&&d(i,s,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function hm(r,i){return i?r*(1e3/i):0}const Ch=30,jv=r=>!isNaN(parseFloat(r));class Ev{constructor(i,s={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,c=!0)=>{const h=_t.now();this.updatedAt!==h&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),c&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=s.owner}setCurrent(i){this.current=i,this.updatedAt=_t.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=jv(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,s){this.events[i]||(this.events[i]=new ru);const a=this.events[i].add(s);return i==="change"?()=>{a(),xe.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,s){this.passiveEffect=i,this.stopPassiveEffect=s}set(i,s=!0){!s||!this.passiveEffect?this.updateAndNotify(i,s):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,s,a){this.set(s),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-a}jump(i,s=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=_t.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>Ch)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,Ch);return hm(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(i){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=i(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function yi(r,i){return new Ev(r,i)}function Dv(r,i,s){r.hasValue(i)?r.getValue(i).set(s):r.addValue(i,yi(s))}function Mv(r,i){const s=Js(r,i);let{transitionEnd:a={},transition:c={},...h}=s||{};h={...h,...a};for(const d in h){const m=$g(h[d]);Dv(r,d,m)}}function Fv(r){return!!(qe(r)&&r.add)}function vl(r,i){const s=r.getValue("willChange");if(Fv(s))return s.add(i)}function fm(r){return r.props[Wf]}const mm=(r,i,s)=>(((1-3*s+3*i)*r+(3*s-6*i))*r+3*i)*r,Lv=1e-7,Rv=12;function Vv(r,i,s,a,c){let h,d,m=0;do d=i+(s-i)/2,h=mm(d,a,c)-r,h>0?s=d:i=d;while(Math.abs(h)>Lv&&++m<Rv);return d}function xi(r,i,s,a){if(r===i&&s===a)return ft;const c=h=>Vv(h,0,1,r,s);return h=>h===0||h===1?h:mm(c(h),i,a)}const pm=r=>i=>i<=.5?r(2*i)/2:(2-r(2*(1-i)))/2,ym=r=>i=>1-r(1-i),gm=xi(.33,1.53,.69,.99),iu=ym(gm),vm=pm(iu),wm=r=>(r*=2)<1?.5*iu(r):.5*(2-Math.pow(2,-10*(r-1))),su=r=>1-Math.sin(Math.acos(r)),xm=ym(su),km=pm(su),Sm=r=>/^0[^.\s]+$/u.test(r);function _v(r){return typeof r=="number"?r===0:r!==null?r==="none"||r==="0"||Sm(r):!0}const ci=r=>Math.round(r*1e5)/1e5,ou=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ov(r){return r==null}const Bv=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,au=(r,i)=>s=>!!(typeof s=="string"&&Bv.test(s)&&s.startsWith(r)||i&&!Ov(s)&&Object.prototype.hasOwnProperty.call(s,i)),bm=(r,i,s)=>a=>{if(typeof a!="string")return a;const[c,h,d,m]=a.match(ou);return{[r]:parseFloat(c),[i]:parseFloat(h),[s]:parseFloat(d),alpha:m!==void 0?parseFloat(m):1}},zv=r=>Yt(0,255,r),nl={...wr,transform:r=>Math.round(zv(r))},Rn={test:au("rgb","red"),parse:bm("red","green","blue"),transform:({red:r,green:i,blue:s,alpha:a=1})=>"rgba("+nl.transform(r)+", "+nl.transform(i)+", "+nl.transform(s)+", "+ci(pi.transform(a))+")"};function Hv(r){let i="",s="",a="",c="";return r.length>5?(i=r.substring(1,3),s=r.substring(3,5),a=r.substring(5,7),c=r.substring(7,9)):(i=r.substring(1,2),s=r.substring(2,3),a=r.substring(3,4),c=r.substring(4,5),i+=i,s+=s,a+=a,c+=c),{red:parseInt(i,16),green:parseInt(s,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const wl={test:au("#"),parse:Hv,transform:Rn.transform},dr={test:au("hsl","hue"),parse:bm("hue","saturation","lightness"),transform:({hue:r,saturation:i,lightness:s,alpha:a=1})=>"hsla("+Math.round(r)+", "+Vt.transform(ci(i))+", "+Vt.transform(ci(s))+", "+ci(pi.transform(a))+")"},Ge={test:r=>Rn.test(r)||wl.test(r)||dr.test(r),parse:r=>Rn.test(r)?Rn.parse(r):dr.test(r)?dr.parse(r):wl.parse(r),transform:r=>typeof r=="string"?r:r.hasOwnProperty("red")?Rn.transform(r):dr.transform(r)},Wv=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Uv(r){var i,s;return isNaN(r)&&typeof r=="string"&&(((i=r.match(ou))===null||i===void 0?void 0:i.length)||0)+(((s=r.match(Wv))===null||s===void 0?void 0:s.length)||0)>0}const Im="number",Tm="color",$v="var",Kv="var(",Ah="${}",Gv=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function gi(r){const i=r.toString(),s=[],a={color:[],number:[],var:[]},c=[];let h=0;const m=i.replace(Gv,y=>(Ge.test(y)?(a.color.push(h),c.push(Tm),s.push(Ge.parse(y))):y.startsWith(Kv)?(a.var.push(h),c.push($v),s.push(y)):(a.number.push(h),c.push(Im),s.push(parseFloat(y))),++h,Ah)).split(Ah);return{values:s,split:m,indexes:a,types:c}}function Nm(r){return gi(r).values}function Pm(r){const{split:i,types:s}=gi(r),a=i.length;return c=>{let h="";for(let d=0;d<a;d++)if(h+=i[d],c[d]!==void 0){const m=s[d];m===Im?h+=ci(c[d]):m===Tm?h+=Ge.transform(c[d]):h+=c[d]}return h}}const qv=r=>typeof r=="number"?0:r;function Yv(r){const i=Nm(r);return Pm(r)(i.map(qv))}const vn={test:Uv,parse:Nm,createTransformer:Pm,getAnimatableNone:Yv},Qv=new Set(["brightness","contrast","saturate","opacity"]);function Xv(r){const[i,s]=r.slice(0,-1).split("(");if(i==="drop-shadow")return r;const[a]=s.match(ou)||[];if(!a)return r;const c=s.replace(a,"");let h=Qv.has(i)?1:0;return a!==s&&(h*=100),i+"("+h+c+")"}const Zv=/\b([a-z-]*)\(.*?\)/gu,xl={...vn,getAnimatableNone:r=>{const i=r.match(Zv);return i?i.map(Xv).join(" "):r}},Jv={...$l,color:Ge,backgroundColor:Ge,outlineColor:Ge,fill:Ge,stroke:Ge,borderColor:Ge,borderTopColor:Ge,borderRightColor:Ge,borderBottomColor:Ge,borderLeftColor:Ge,filter:xl,WebkitFilter:xl},lu=r=>Jv[r];function Cm(r,i){let s=lu(r);return s!==xl&&(s=vn),s.getAnimatableNone?s.getAnimatableNone(i):void 0}const ew=new Set(["auto","none","0"]);function tw(r,i,s){let a=0,c;for(;a<r.length&&!c;){const h=r[a];typeof h=="string"&&!ew.has(h)&&gi(h).values.length&&(c=r[a]),a++}if(c&&s)for(const h of i)r[h]=Cm(s,c)}const jh=r=>r===wr||r===ne,Eh=(r,i)=>parseFloat(r.split(", ")[i]),Dh=(r,i)=>(s,{transform:a})=>{if(a==="none"||!a)return 0;const c=a.match(/^matrix3d\((.+)\)$/u);if(c)return Eh(c[1],i);{const h=a.match(/^matrix\((.+)\)$/u);return h?Eh(h[1],r):0}},nw=new Set(["x","y","z"]),rw=vr.filter(r=>!nw.has(r));function iw(r){const i=[];return rw.forEach(s=>{const a=r.getValue(s);a!==void 0&&(i.push([s,a.get()]),a.set(s.startsWith("scale")?1:0))}),i}const gr={width:({x:r},{paddingLeft:i="0",paddingRight:s="0"})=>r.max-r.min-parseFloat(i)-parseFloat(s),height:({y:r},{paddingTop:i="0",paddingBottom:s="0"})=>r.max-r.min-parseFloat(i)-parseFloat(s),top:(r,{top:i})=>parseFloat(i),left:(r,{left:i})=>parseFloat(i),bottom:({y:r},{top:i})=>parseFloat(i)+(r.max-r.min),right:({x:r},{left:i})=>parseFloat(i)+(r.max-r.min),x:Dh(4,13),y:Dh(5,14)};gr.translateX=gr.x;gr.translateY=gr.y;const Vn=new Set;let kl=!1,Sl=!1;function Am(){if(Sl){const r=Array.from(Vn).filter(a=>a.needsMeasurement),i=new Set(r.map(a=>a.element)),s=new Map;i.forEach(a=>{const c=iw(a);c.length&&(s.set(a,c),a.render())}),r.forEach(a=>a.measureInitialState()),i.forEach(a=>{a.render();const c=s.get(a);c&&c.forEach(([h,d])=>{var m;(m=a.getValue(h))===null||m===void 0||m.set(d)})}),r.forEach(a=>a.measureEndState()),r.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Sl=!1,kl=!1,Vn.forEach(r=>r.complete()),Vn.clear()}function jm(){Vn.forEach(r=>{r.readKeyframes(),r.needsMeasurement&&(Sl=!0)})}function sw(){jm(),Am()}class uu{constructor(i,s,a,c,h,d=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...i],this.onComplete=s,this.name=a,this.motionValue=c,this.element=h,this.isAsync=d}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Vn.add(this),kl||(kl=!0,xe.read(jm),xe.resolveKeyframes(Am))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:s,element:a,motionValue:c}=this;for(let h=0;h<i.length;h++)if(i[h]===null)if(h===0){const d=c==null?void 0:c.get(),m=i[i.length-1];if(d!==void 0)i[0]=d;else if(a&&s){const y=a.readValue(s,m);y!=null&&(i[0]=y)}i[0]===void 0&&(i[0]=m),c&&d===void 0&&c.set(i[0])}else i[h]=i[h-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Vn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Vn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Em=r=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(r),ow=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function aw(r){const i=ow.exec(r);if(!i)return[,];const[,s,a,c]=i;return[`--${s??a}`,c]}function Dm(r,i,s=1){const[a,c]=aw(r);if(!a)return;const h=window.getComputedStyle(i).getPropertyValue(a);if(h){const d=h.trim();return Em(d)?parseFloat(d):d}return Ul(c)?Dm(c,i,s+1):c}const Mm=r=>i=>i.test(r),lw={test:r=>r==="auto",parse:r=>r},Fm=[wr,ne,Vt,yn,Xg,Qg,lw],Mh=r=>Fm.find(Mm(r));class Lm extends uu{constructor(i,s,a,c,h){super(i,s,a,c,h,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:s,name:a}=this;if(!s||!s.current)return;super.readKeyframes();for(let y=0;y<i.length;y++){let g=i[y];if(typeof g=="string"&&(g=g.trim(),Ul(g))){const v=Dm(g,s.current);v!==void 0&&(i[y]=v),y===i.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!dm.has(a)||i.length!==2)return;const[c,h]=i,d=Mh(c),m=Mh(h);if(d!==m)if(jh(d)&&jh(m))for(let y=0;y<i.length;y++){const g=i[y];typeof g=="string"&&(i[y]=parseFloat(g))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:s}=this,a=[];for(let c=0;c<i.length;c++)_v(i[c])&&a.push(c);a.length&&tw(i,a,s)}measureInitialState(){const{element:i,unresolvedKeyframes:s,name:a}=this;if(!i||!i.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=gr[a](i.measureViewportBox(),window.getComputedStyle(i.current)),s[0]=this.measuredOrigin;const c=s[s.length-1];c!==void 0&&i.getValue(a,c).jump(c,!1)}measureEndState(){var i;const{element:s,name:a,unresolvedKeyframes:c}=this;if(!s||!s.current)return;const h=s.getValue(a);h&&h.jump(this.measuredOrigin,!1);const d=c.length-1,m=c[d];c[d]=gr[a](s.measureViewportBox(),window.getComputedStyle(s.current)),m!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=m),!((i=this.removedTransforms)===null||i===void 0)&&i.length&&this.removedTransforms.forEach(([y,g])=>{s.getValue(y).set(g)}),this.resolveNoneKeyframes()}}const Fh=(r,i)=>i==="zIndex"?!1:!!(typeof r=="number"||Array.isArray(r)||typeof r=="string"&&(vn.test(r)||r==="0")&&!r.startsWith("url("));function uw(r){const i=r[0];if(r.length===1)return!0;for(let s=0;s<r.length;s++)if(r[s]!==i)return!0}function cw(r,i,s,a){const c=r[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const h=r[r.length-1],d=Fh(c,i),m=Fh(h,i);return!d||!m?!1:uw(r)||(s==="spring"||Zl(s))&&a}const dw=r=>r!==null;function eo(r,{repeat:i,repeatType:s="loop"},a){const c=r.filter(dw),h=i&&s!=="loop"&&i%2===1?0:c.length-1;return!h||a===void 0?c[h]:a}const hw=40;class Rm{constructor({autoplay:i=!0,delay:s=0,type:a="keyframes",repeat:c=0,repeatDelay:h=0,repeatType:d="loop",...m}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=_t.now(),this.options={autoplay:i,delay:s,type:a,repeat:c,repeatDelay:h,repeatType:d,...m},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>hw?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&sw(),this._resolved}onKeyframesResolved(i,s){this.resolvedAt=_t.now(),this.hasAttemptedResolve=!0;const{name:a,type:c,velocity:h,delay:d,onComplete:m,onUpdate:y,isGenerator:g}=this.options;if(!g&&!cw(i,a,c,h))if(d)this.options.duration=0;else{y&&y(eo(i,this.options,s)),m&&m(),this.resolveFinishedPromise();return}const v=this.initPlayback(i,s);v!==!1&&(this._resolved={keyframes:i,finalKeyframe:s,...v},this.onPostResolved())}onPostResolved(){}then(i,s){return this.currentFinishedPromise.then(i,s)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(i=>{this.resolveFinishedPromise=i})}}const Ne=(r,i,s)=>r+(i-r)*s;function rl(r,i,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?r+(i-r)*6*s:s<1/2?i:s<2/3?r+(i-r)*(2/3-s)*6:r}function fw({hue:r,saturation:i,lightness:s,alpha:a}){r/=360,i/=100,s/=100;let c=0,h=0,d=0;if(!i)c=h=d=s;else{const m=s<.5?s*(1+i):s+i-s*i,y=2*s-m;c=rl(y,m,r+1/3),h=rl(y,m,r),d=rl(y,m,r-1/3)}return{red:Math.round(c*255),green:Math.round(h*255),blue:Math.round(d*255),alpha:a}}function $s(r,i){return s=>s>0?i:r}const il=(r,i,s)=>{const a=r*r,c=s*(i*i-a)+a;return c<0?0:Math.sqrt(c)},mw=[wl,Rn,dr],pw=r=>mw.find(i=>i.test(r));function Lh(r){const i=pw(r);if(!i)return!1;let s=i.parse(r);return i===dr&&(s=fw(s)),s}const Rh=(r,i)=>{const s=Lh(r),a=Lh(i);if(!s||!a)return $s(r,i);const c={...s};return h=>(c.red=il(s.red,a.red,h),c.green=il(s.green,a.green,h),c.blue=il(s.blue,a.blue,h),c.alpha=Ne(s.alpha,a.alpha,h),Rn.transform(c))},yw=(r,i)=>s=>i(r(s)),ki=(...r)=>r.reduce(yw),bl=new Set(["none","hidden"]);function gw(r,i){return bl.has(r)?s=>s<=0?r:i:s=>s>=1?i:r}function vw(r,i){return s=>Ne(r,i,s)}function cu(r){return typeof r=="number"?vw:typeof r=="string"?Ul(r)?$s:Ge.test(r)?Rh:kw:Array.isArray(r)?Vm:typeof r=="object"?Ge.test(r)?Rh:ww:$s}function Vm(r,i){const s=[...r],a=s.length,c=r.map((h,d)=>cu(h)(h,i[d]));return h=>{for(let d=0;d<a;d++)s[d]=c[d](h);return s}}function ww(r,i){const s={...r,...i},a={};for(const c in s)r[c]!==void 0&&i[c]!==void 0&&(a[c]=cu(r[c])(r[c],i[c]));return c=>{for(const h in a)s[h]=a[h](c);return s}}function xw(r,i){var s;const a=[],c={color:0,var:0,number:0};for(let h=0;h<i.values.length;h++){const d=i.types[h],m=r.indexes[d][c[d]],y=(s=r.values[m])!==null&&s!==void 0?s:0;a[h]=y,c[d]++}return a}const kw=(r,i)=>{const s=vn.createTransformer(i),a=gi(r),c=gi(i);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?bl.has(r)&&!c.values.length||bl.has(i)&&!a.values.length?gw(r,i):ki(Vm(xw(a,c),c.values),s):$s(r,i)};function _m(r,i,s){return typeof r=="number"&&typeof i=="number"&&typeof s=="number"?Ne(r,i,s):cu(r)(r,i)}const Sw=5;function Om(r,i,s){const a=Math.max(i-Sw,0);return hm(s-r(a),i-a)}const Ae={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},sl=.001;function bw({duration:r=Ae.duration,bounce:i=Ae.bounce,velocity:s=Ae.velocity,mass:a=Ae.mass}){let c,h,d=1-i;d=Yt(Ae.minDamping,Ae.maxDamping,d),r=Yt(Ae.minDuration,Ae.maxDuration,qt(r)),d<1?(c=g=>{const v=g*d,x=v*r,S=v-s,C=Il(g,d),F=Math.exp(-x);return sl-S/C*F},h=g=>{const x=g*d*r,S=x*s+s,C=Math.pow(d,2)*Math.pow(g,2)*r,F=Math.exp(-x),A=Il(Math.pow(g,2),d);return(-c(g)+sl>0?-1:1)*((S-C)*F)/A}):(c=g=>{const v=Math.exp(-g*r),x=(g-s)*r+1;return-sl+v*x},h=g=>{const v=Math.exp(-g*r),x=(s-g)*(r*r);return v*x});const m=5/r,y=Tw(c,h,m);if(r=Gt(r),isNaN(y))return{stiffness:Ae.stiffness,damping:Ae.damping,duration:r};{const g=Math.pow(y,2)*a;return{stiffness:g,damping:d*2*Math.sqrt(a*g),duration:r}}}const Iw=12;function Tw(r,i,s){let a=s;for(let c=1;c<Iw;c++)a=a-r(a)/i(a);return a}function Il(r,i){return r*Math.sqrt(1-i*i)}const Nw=["duration","bounce"],Pw=["stiffness","damping","mass"];function Vh(r,i){return i.some(s=>r[s]!==void 0)}function Cw(r){let i={velocity:Ae.velocity,stiffness:Ae.stiffness,damping:Ae.damping,mass:Ae.mass,isResolvedFromDuration:!1,...r};if(!Vh(r,Pw)&&Vh(r,Nw))if(r.visualDuration){const s=r.visualDuration,a=2*Math.PI/(s*1.2),c=a*a,h=2*Yt(.05,1,1-(r.bounce||0))*Math.sqrt(c);i={...i,mass:Ae.mass,stiffness:c,damping:h}}else{const s=bw(r);i={...i,...s,mass:Ae.mass},i.isResolvedFromDuration=!0}return i}function Bm(r=Ae.visualDuration,i=Ae.bounce){const s=typeof r!="object"?{visualDuration:r,keyframes:[0,1],bounce:i}:r;let{restSpeed:a,restDelta:c}=s;const h=s.keyframes[0],d=s.keyframes[s.keyframes.length-1],m={done:!1,value:h},{stiffness:y,damping:g,mass:v,duration:x,velocity:S,isResolvedFromDuration:C}=Cw({...s,velocity:-qt(s.velocity||0)}),F=S||0,A=g/(2*Math.sqrt(y*v)),E=d-h,_=qt(Math.sqrt(y/v)),H=Math.abs(E)<5;a||(a=H?Ae.restSpeed.granular:Ae.restSpeed.default),c||(c=H?Ae.restDelta.granular:Ae.restDelta.default);let G;if(A<1){const z=Il(_,A);G=V=>{const U=Math.exp(-A*_*V);return d-U*((F+A*_*E)/z*Math.sin(z*V)+E*Math.cos(z*V))}}else if(A===1)G=z=>d-Math.exp(-_*z)*(E+(F+_*E)*z);else{const z=_*Math.sqrt(A*A-1);G=V=>{const U=Math.exp(-A*_*V),K=Math.min(z*V,300);return d-U*((F+A*_*E)*Math.sinh(K)+z*E*Math.cosh(K))/z}}const X={calculatedDuration:C&&x||null,next:z=>{const V=G(z);if(C)m.done=z>=x;else{let U=0;A<1&&(U=z===0?Gt(F):Om(G,z,V));const K=Math.abs(U)<=a,fe=Math.abs(d-V)<=c;m.done=K&&fe}return m.value=m.done?d:V,m},toString:()=>{const z=Math.min(im(X),yl),V=sm(U=>X.next(z*U).value,z,30);return z+"ms "+V}};return X}function _h({keyframes:r,velocity:i=0,power:s=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:h=500,modifyTarget:d,min:m,max:y,restDelta:g=.5,restSpeed:v}){const x=r[0],S={done:!1,value:x},C=K=>m!==void 0&&K<m||y!==void 0&&K>y,F=K=>m===void 0?y:y===void 0||Math.abs(m-K)<Math.abs(y-K)?m:y;let A=s*i;const E=x+A,_=d===void 0?E:d(E);_!==E&&(A=_-x);const H=K=>-A*Math.exp(-K/a),G=K=>_+H(K),X=K=>{const fe=H(K),Pe=G(K);S.done=Math.abs(fe)<=g,S.value=S.done?_:Pe};let z,V;const U=K=>{C(S.value)&&(z=K,V=Bm({keyframes:[S.value,F(S.value)],velocity:Om(G,K,S.value),damping:c,stiffness:h,restDelta:g,restSpeed:v}))};return U(0),{calculatedDuration:null,next:K=>{let fe=!1;return!V&&z===void 0&&(fe=!0,X(K),U(K)),z!==void 0&&K>=z?V.next(K-z):(!fe&&X(K),S)}}}const Aw=xi(.42,0,1,1),jw=xi(0,0,.58,1),zm=xi(.42,0,.58,1),Ew=r=>Array.isArray(r)&&typeof r[0]!="number",Dw={linear:ft,easeIn:Aw,easeInOut:zm,easeOut:jw,circIn:su,circInOut:km,circOut:xm,backIn:iu,backInOut:vm,backOut:gm,anticipate:wm},Oh=r=>{if(Jl(r)){_f(r.length===4);const[i,s,a,c]=r;return xi(i,s,a,c)}else if(typeof r=="string")return Dw[r];return r};function Mw(r,i,s){const a=[],c=s||_m,h=r.length-1;for(let d=0;d<h;d++){let m=c(r[d],r[d+1]);if(i){const y=Array.isArray(i)?i[d]||ft:i;m=ki(y,m)}a.push(m)}return a}function Fw(r,i,{clamp:s=!0,ease:a,mixer:c}={}){const h=r.length;if(_f(h===i.length),h===1)return()=>i[0];if(h===2&&i[0]===i[1])return()=>i[1];const d=r[0]===r[1];r[0]>r[h-1]&&(r=[...r].reverse(),i=[...i].reverse());const m=Mw(i,a,c),y=m.length,g=v=>{if(d&&v<r[0])return i[0];let x=0;if(y>1)for(;x<r.length-2&&!(v<r[x+1]);x++);const S=pr(r[x],r[x+1],v);return m[x](S)};return s?v=>g(Yt(r[0],r[h-1],v)):g}function Lw(r,i){const s=r[r.length-1];for(let a=1;a<=i;a++){const c=pr(0,i,a);r.push(Ne(s,1,c))}}function Rw(r){const i=[0];return Lw(i,r.length-1),i}function Vw(r,i){return r.map(s=>s*i)}function _w(r,i){return r.map(()=>i||zm).splice(0,r.length-1)}function Ks({duration:r=300,keyframes:i,times:s,ease:a="easeInOut"}){const c=Ew(a)?a.map(Oh):Oh(a),h={done:!1,value:i[0]},d=Vw(s&&s.length===i.length?s:Rw(i),r),m=Fw(d,i,{ease:Array.isArray(c)?c:_w(i,c)});return{calculatedDuration:r,next:y=>(h.value=m(y),h.done=y>=r,h)}}const Ow=r=>{const i=({timestamp:s})=>r(s);return{start:()=>xe.update(i,!0),stop:()=>gn(i),now:()=>He.isProcessing?He.timestamp:_t.now()}},Bw={decay:_h,inertia:_h,tween:Ks,keyframes:Ks,spring:Bm},zw=r=>r/100;class du extends Rm{constructor(i){super(i),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:y}=this.options;y&&y()};const{name:s,motionValue:a,element:c,keyframes:h}=this.options,d=(c==null?void 0:c.KeyframeResolver)||uu,m=(y,g)=>this.onKeyframesResolved(y,g);this.resolver=new d(h,m,s,a,c),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(i){const{type:s="keyframes",repeat:a=0,repeatDelay:c=0,repeatType:h,velocity:d=0}=this.options,m=Zl(s)?s:Bw[s]||Ks;let y,g;m!==Ks&&typeof i[0]!="number"&&(y=ki(zw,_m(i[0],i[1])),i=[0,100]);const v=m({...this.options,keyframes:i});h==="mirror"&&(g=m({...this.options,keyframes:[...i].reverse(),velocity:-d})),v.calculatedDuration===null&&(v.calculatedDuration=im(v));const{calculatedDuration:x}=v,S=x+c,C=S*(a+1)-c;return{generator:v,mirroredGenerator:g,mapPercentToKeyframes:y,calculatedDuration:x,resolvedDuration:S,totalDuration:C}}onPostResolved(){const{autoplay:i=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!i?this.pause():this.state=this.pendingPlayState}tick(i,s=!1){const{resolved:a}=this;if(!a){const{keyframes:K}=this.options;return{done:!0,value:K[K.length-1]}}const{finalKeyframe:c,generator:h,mirroredGenerator:d,mapPercentToKeyframes:m,keyframes:y,calculatedDuration:g,totalDuration:v,resolvedDuration:x}=a;if(this.startTime===null)return h.next(0);const{delay:S,repeat:C,repeatType:F,repeatDelay:A,onUpdate:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-v/this.speed,this.startTime)),s?this.currentTime=i:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(i-this.startTime)*this.speed;const _=this.currentTime-S*(this.speed>=0?1:-1),H=this.speed>=0?_<0:_>v;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=v);let G=this.currentTime,X=h;if(C){const K=Math.min(this.currentTime,v)/x;let fe=Math.floor(K),Pe=K%1;!Pe&&K>=1&&(Pe=1),Pe===1&&fe--,fe=Math.min(fe,C+1),!!(fe%2)&&(F==="reverse"?(Pe=1-Pe,A&&(Pe-=A/x)):F==="mirror"&&(X=d)),G=Yt(0,1,Pe)*x}const z=H?{done:!1,value:y[0]}:X.next(G);m&&(z.value=m(z.value));let{done:V}=z;!H&&g!==null&&(V=this.speed>=0?this.currentTime>=v:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&V);return U&&c!==void 0&&(z.value=eo(y,this.options,c)),E&&E(z.value),U&&this.finish(),z}get duration(){const{resolved:i}=this;return i?qt(i.calculatedDuration):0}get time(){return qt(this.currentTime)}set time(i){i=Gt(i),this.currentTime=i,this.holdTime!==null||this.speed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.speed)}get speed(){return this.playbackSpeed}set speed(i){const s=this.playbackSpeed!==i;this.playbackSpeed=i,s&&(this.time=qt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:i=Ow,onPlay:s,startTime:a}=this.options;this.driver||(this.driver=i(h=>this.tick(h))),s&&s();const c=this.driver.now();this.holdTime!==null?this.startTime=c-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=c):this.startTime=a??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var i;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(i=this.currentTime)!==null&&i!==void 0?i:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:i}=this.options;i&&i()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}}const Hw=new Set(["opacity","clipPath","filter","transform"]);function Ww(r,i,s,{delay:a=0,duration:c=300,repeat:h=0,repeatType:d="loop",ease:m="easeInOut",times:y}={}){const g={[i]:s};y&&(g.offset=y);const v=am(m,c);return Array.isArray(v)&&(g.easing=v),r.animate(g,{delay:a,duration:c,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:h+1,direction:d==="reverse"?"alternate":"normal"})}const Uw=Vl(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Gs=10,$w=2e4;function Kw(r){return Zl(r.type)||r.type==="spring"||!om(r.ease)}function Gw(r,i){const s=new du({...i,keyframes:r,repeat:0,delay:0,isGenerator:!0});let a={done:!1,value:r[0]};const c=[];let h=0;for(;!a.done&&h<$w;)a=s.sample(h),c.push(a.value),h+=Gs;return{times:void 0,keyframes:c,duration:h-Gs,ease:"linear"}}const Hm={anticipate:wm,backInOut:vm,circInOut:km};function qw(r){return r in Hm}class Bh extends Rm{constructor(i){super(i);const{name:s,motionValue:a,element:c,keyframes:h}=this.options;this.resolver=new Lm(h,(d,m)=>this.onKeyframesResolved(d,m),s,a,c),this.resolver.scheduleResolve()}initPlayback(i,s){let{duration:a=300,times:c,ease:h,type:d,motionValue:m,name:y,startTime:g}=this.options;if(!m.owner||!m.owner.current)return!1;if(typeof h=="string"&&Us()&&qw(h)&&(h=Hm[h]),Kw(this.options)){const{onComplete:x,onUpdate:S,motionValue:C,element:F,...A}=this.options,E=Gw(i,A);i=E.keyframes,i.length===1&&(i[1]=i[0]),a=E.duration,c=E.times,h=E.ease,d="keyframes"}const v=Ww(m.owner.current,y,i,{...this.options,duration:a,times:c,ease:h});return v.startTime=g??this.calcStartTime(),this.pendingTimeline?(Ih(v,this.pendingTimeline),this.pendingTimeline=void 0):v.onfinish=()=>{const{onComplete:x}=this.options;m.set(eo(i,this.options,s)),x&&x(),this.cancel(),this.resolveFinishedPromise()},{animation:v,duration:a,times:c,type:d,ease:h,keyframes:i}}get duration(){const{resolved:i}=this;if(!i)return 0;const{duration:s}=i;return qt(s)}get time(){const{resolved:i}=this;if(!i)return 0;const{animation:s}=i;return qt(s.currentTime||0)}set time(i){const{resolved:s}=this;if(!s)return;const{animation:a}=s;a.currentTime=Gt(i)}get speed(){const{resolved:i}=this;if(!i)return 1;const{animation:s}=i;return s.playbackRate}set speed(i){const{resolved:s}=this;if(!s)return;const{animation:a}=s;a.playbackRate=i}get state(){const{resolved:i}=this;if(!i)return"idle";const{animation:s}=i;return s.playState}get startTime(){const{resolved:i}=this;if(!i)return null;const{animation:s}=i;return s.startTime}attachTimeline(i){if(!this._resolved)this.pendingTimeline=i;else{const{resolved:s}=this;if(!s)return ft;const{animation:a}=s;Ih(a,i)}return ft}play(){if(this.isStopped)return;const{resolved:i}=this;if(!i)return;const{animation:s}=i;s.playState==="finished"&&this.updateFinishedPromise(),s.play()}pause(){const{resolved:i}=this;if(!i)return;const{animation:s}=i;s.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:i}=this;if(!i)return;const{animation:s,keyframes:a,duration:c,type:h,ease:d,times:m}=i;if(s.playState==="idle"||s.playState==="finished")return;if(this.time){const{motionValue:g,onUpdate:v,onComplete:x,element:S,...C}=this.options,F=new du({...C,keyframes:a,duration:c,type:h,ease:d,times:m,isGenerator:!0}),A=Gt(this.time);g.setWithVelocity(F.sample(A-Gs).value,F.sample(A).value,Gs)}const{onStop:y}=this.options;y&&y(),this.cancel()}complete(){const{resolved:i}=this;i&&i.animation.finish()}cancel(){const{resolved:i}=this;i&&i.animation.cancel()}static supports(i){const{motionValue:s,name:a,repeatDelay:c,repeatType:h,damping:d,type:m}=i;if(!s||!s.owner||!(s.owner.current instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:g}=s.owner.getProps();return Uw()&&a&&Hw.has(a)&&!y&&!g&&!c&&h!=="mirror"&&d!==0&&m!=="inertia"}}const Yw={type:"spring",stiffness:500,damping:25,restSpeed:10},Qw=r=>({type:"spring",stiffness:550,damping:r===0?2*Math.sqrt(550):30,restSpeed:10}),Xw={type:"keyframes",duration:.8},Zw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Jw=(r,{keyframes:i})=>i.length>2?Xw:_n.has(r)?r.startsWith("scale")?Qw(i[1]):Yw:Zw;function e0({when:r,delay:i,delayChildren:s,staggerChildren:a,staggerDirection:c,repeat:h,repeatType:d,repeatDelay:m,from:y,elapsed:g,...v}){return!!Object.keys(v).length}const hu=(r,i,s,a={},c,h)=>d=>{const m=Xl(a,r)||{},y=m.delay||a.delay||0;let{elapsed:g=0}=a;g=g-Gt(y);let v={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:i.getVelocity(),...m,delay:-g,onUpdate:S=>{i.set(S),m.onUpdate&&m.onUpdate(S)},onComplete:()=>{d(),m.onComplete&&m.onComplete()},name:r,motionValue:i,element:h?void 0:c};e0(m)||(v={...v,...Jw(r,v)}),v.duration&&(v.duration=Gt(v.duration)),v.repeatDelay&&(v.repeatDelay=Gt(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let x=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(v.duration=0,v.delay===0&&(x=!0)),x&&!h&&i.get()!==void 0){const S=eo(v.keyframes,m);if(S!==void 0)return xe.update(()=>{v.onUpdate(S),v.onComplete()}),new wv([])}return!h&&Bh.supports(v)?new Bh(v):new du(v)};function t0({protectedKeys:r,needsAnimating:i},s){const a=r.hasOwnProperty(s)&&i[s]!==!0;return i[s]=!1,a}function Wm(r,i,{delay:s=0,transitionOverride:a,type:c}={}){var h;let{transition:d=r.getDefaultTransition(),transitionEnd:m,...y}=i;a&&(d=a);const g=[],v=c&&r.animationState&&r.animationState.getState()[c];for(const x in y){const S=r.getValue(x,(h=r.latestValues[x])!==null&&h!==void 0?h:null),C=y[x];if(C===void 0||v&&t0(v,x))continue;const F={delay:s,...Xl(d||{},x)};let A=!1;if(window.MotionHandoffAnimation){const _=fm(r);if(_){const H=window.MotionHandoffAnimation(_,x,xe);H!==null&&(F.startTime=H,A=!0)}}vl(r,x),S.start(hu(x,S,C,r.shouldReduceMotion&&dm.has(x)?{type:!1}:F,r,A));const E=S.animation;E&&g.push(E)}return m&&Promise.all(g).then(()=>{xe.update(()=>{m&&Mv(r,m)})}),g}function Tl(r,i,s={}){var a;const c=Js(r,i,s.type==="exit"?(a=r.presenceContext)===null||a===void 0?void 0:a.custom:void 0);let{transition:h=r.getDefaultTransition()||{}}=c||{};s.transitionOverride&&(h=s.transitionOverride);const d=c?()=>Promise.all(Wm(r,c,s)):()=>Promise.resolve(),m=r.variantChildren&&r.variantChildren.size?(g=0)=>{const{delayChildren:v=0,staggerChildren:x,staggerDirection:S}=h;return n0(r,i,v+g,x,S,s)}:()=>Promise.resolve(),{when:y}=h;if(y){const[g,v]=y==="beforeChildren"?[d,m]:[m,d];return g().then(()=>v())}else return Promise.all([d(),m(s.delay)])}function n0(r,i,s=0,a=0,c=1,h){const d=[],m=(r.variantChildren.size-1)*a,y=c===1?(g=0)=>g*a:(g=0)=>m-g*a;return Array.from(r.variantChildren).sort(r0).forEach((g,v)=>{g.notify("AnimationStart",i),d.push(Tl(g,i,{...h,delay:s+y(v)}).then(()=>g.notify("AnimationComplete",i)))}),Promise.all(d)}function r0(r,i){return r.sortNodePosition(i)}function i0(r,i,s={}){r.notify("AnimationStart",i);let a;if(Array.isArray(i)){const c=i.map(h=>Tl(r,h,s));a=Promise.all(c)}else if(typeof i=="string")a=Tl(r,i,s);else{const c=typeof i=="function"?Js(r,i,s.custom):i;a=Promise.all(Wm(r,c,s))}return a.then(()=>{r.notify("AnimationComplete",i)})}const s0=Ol.length;function Um(r){if(!r)return;if(!r.isControllingVariants){const s=r.parent?Um(r.parent)||{}:{};return r.props.initial!==void 0&&(s.initial=r.props.initial),s}const i={};for(let s=0;s<s0;s++){const a=Ol[s],c=r.props[a];(mi(c)||c===!1)&&(i[a]=c)}return i}const o0=[..._l].reverse(),a0=_l.length;function l0(r){return i=>Promise.all(i.map(({animation:s,options:a})=>i0(r,s,a)))}function u0(r){let i=l0(r),s=zh(),a=!0;const c=y=>(g,v)=>{var x;const S=Js(r,v,y==="exit"?(x=r.presenceContext)===null||x===void 0?void 0:x.custom:void 0);if(S){const{transition:C,transitionEnd:F,...A}=S;g={...g,...A,...F}}return g};function h(y){i=y(r)}function d(y){const{props:g}=r,v=Um(r.parent)||{},x=[],S=new Set;let C={},F=1/0;for(let E=0;E<a0;E++){const _=o0[E],H=s[_],G=g[_]!==void 0?g[_]:v[_],X=mi(G),z=_===y?H.isActive:null;z===!1&&(F=E);let V=G===v[_]&&G!==g[_]&&X;if(V&&a&&r.manuallyAnimateOnMount&&(V=!1),H.protectedKeys={...C},!H.isActive&&z===null||!G&&!H.prevProp||Xs(G)||typeof G=="boolean")continue;const U=c0(H.prevProp,G);let K=U||_===y&&H.isActive&&!V&&X||E>F&&X,fe=!1;const Pe=Array.isArray(G)?G:[G];let Je=Pe.reduce(c(_),{});z===!1&&(Je={});const{prevResolvedValues:at={}}=H,Ye={...at,...Je},et=se=>{K=!0,S.has(se)&&(fe=!0,S.delete(se)),H.needsAnimating[se]=!0;const O=r.getValue(se);O&&(O.liveStyle=!1)};for(const se in Ye){const O=Je[se],J=at[se];if(C.hasOwnProperty(se))continue;let $=!1;pl(O)&&pl(J)?$=!rm(O,J):$=O!==J,$?O!=null?et(se):S.add(se):O!==void 0&&S.has(se)?et(se):H.protectedKeys[se]=!0}H.prevProp=G,H.prevResolvedValues=Je,H.isActive&&(C={...C,...Je}),a&&r.blockInitialAnimation&&(K=!1),K&&(!(V&&U)||fe)&&x.push(...Pe.map(se=>({animation:se,options:{type:_}})))}if(S.size){const E={};S.forEach(_=>{const H=r.getBaseTarget(_),G=r.getValue(_);G&&(G.liveStyle=!0),E[_]=H??null}),x.push({animation:E})}let A=!!x.length;return a&&(g.initial===!1||g.initial===g.animate)&&!r.manuallyAnimateOnMount&&(A=!1),a=!1,A?i(x):Promise.resolve()}function m(y,g){var v;if(s[y].isActive===g)return Promise.resolve();(v=r.variantChildren)===null||v===void 0||v.forEach(S=>{var C;return(C=S.animationState)===null||C===void 0?void 0:C.setActive(y,g)}),s[y].isActive=g;const x=d(y);for(const S in s)s[S].protectedKeys={};return x}return{animateChanges:d,setActive:m,setAnimateFunction:h,getState:()=>s,reset:()=>{s=zh(),a=!0}}}function c0(r,i){return typeof i=="string"?i!==r:Array.isArray(i)?!rm(i,r):!1}function Mn(r=!1){return{isActive:r,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function zh(){return{animate:Mn(!0),whileInView:Mn(),whileHover:Mn(),whileTap:Mn(),whileDrag:Mn(),whileFocus:Mn(),exit:Mn()}}class wn{constructor(i){this.isMounted=!1,this.node=i}update(){}}class d0 extends wn{constructor(i){super(i),i.animationState||(i.animationState=u0(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Xs(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:s}=this.node.prevProps||{};i!==s&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)===null||i===void 0||i.call(this)}}let h0=0;class f0 extends wn{constructor(){super(...arguments),this.id=h0++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:s}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===a)return;const c=this.node.animationState.setActive("exit",!i);s&&!i&&c.then(()=>s(this.id))}mount(){const{register:i}=this.node.presenceContext||{};i&&(this.unmount=i(this.id))}unmount(){}}const m0={animation:{Feature:d0},exit:{Feature:f0}};function vi(r,i,s,a={passive:!0}){return r.addEventListener(i,s,a),()=>r.removeEventListener(i,s)}function Si(r){return{point:{x:r.pageX,y:r.pageY}}}const p0=r=>i=>eu(i)&&r(i,Si(i));function di(r,i,s,a){return vi(r,i,p0(s),a)}const Hh=(r,i)=>Math.abs(r-i);function y0(r,i){const s=Hh(r.x,i.x),a=Hh(r.y,i.y);return Math.sqrt(s**2+a**2)}class $m{constructor(i,s,{transformPagePoint:a,contextWindow:c,dragSnapToOrigin:h=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=al(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,C=y0(x.offset,{x:0,y:0})>=3;if(!S&&!C)return;const{point:F}=x,{timestamp:A}=He;this.history.push({...F,timestamp:A});const{onStart:E,onMove:_}=this.handlers;S||(E&&E(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,x)},this.handlePointerMove=(x,S)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=ol(S,this.transformPagePoint),xe.update(this.updatePoint,!0)},this.handlePointerUp=(x,S)=>{this.end();const{onEnd:C,onSessionEnd:F,resumeAnimation:A}=this.handlers;if(this.dragSnapToOrigin&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const E=al(x.type==="pointercancel"?this.lastMoveEventInfo:ol(S,this.transformPagePoint),this.history);this.startEvent&&C&&C(x,E),F&&F(x,E)},!eu(i))return;this.dragSnapToOrigin=h,this.handlers=s,this.transformPagePoint=a,this.contextWindow=c||window;const d=Si(i),m=ol(d,this.transformPagePoint),{point:y}=m,{timestamp:g}=He;this.history=[{...y,timestamp:g}];const{onSessionStart:v}=s;v&&v(i,al(m,this.history)),this.removeListeners=ki(di(this.contextWindow,"pointermove",this.handlePointerMove),di(this.contextWindow,"pointerup",this.handlePointerUp),di(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),gn(this.updatePoint)}}function ol(r,i){return i?{point:i(r.point)}:r}function Wh(r,i){return{x:r.x-i.x,y:r.y-i.y}}function al({point:r},i){return{point:r,delta:Wh(r,Km(i)),offset:Wh(r,g0(i)),velocity:v0(i,.1)}}function g0(r){return r[0]}function Km(r){return r[r.length-1]}function v0(r,i){if(r.length<2)return{x:0,y:0};let s=r.length-1,a=null;const c=Km(r);for(;s>=0&&(a=r[s],!(c.timestamp-a.timestamp>Gt(i)));)s--;if(!a)return{x:0,y:0};const h=qt(c.timestamp-a.timestamp);if(h===0)return{x:0,y:0};const d={x:(c.x-a.x)/h,y:(c.y-a.y)/h};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}const Gm=1e-4,w0=1-Gm,x0=1+Gm,qm=.01,k0=0-qm,S0=0+qm;function mt(r){return r.max-r.min}function b0(r,i,s){return Math.abs(r-i)<=s}function Uh(r,i,s,a=.5){r.origin=a,r.originPoint=Ne(i.min,i.max,r.origin),r.scale=mt(s)/mt(i),r.translate=Ne(s.min,s.max,r.origin)-r.originPoint,(r.scale>=w0&&r.scale<=x0||isNaN(r.scale))&&(r.scale=1),(r.translate>=k0&&r.translate<=S0||isNaN(r.translate))&&(r.translate=0)}function hi(r,i,s,a){Uh(r.x,i.x,s.x,a?a.originX:void 0),Uh(r.y,i.y,s.y,a?a.originY:void 0)}function $h(r,i,s){r.min=s.min+i.min,r.max=r.min+mt(i)}function I0(r,i,s){$h(r.x,i.x,s.x),$h(r.y,i.y,s.y)}function Kh(r,i,s){r.min=i.min-s.min,r.max=r.min+mt(i)}function fi(r,i,s){Kh(r.x,i.x,s.x),Kh(r.y,i.y,s.y)}function T0(r,{min:i,max:s},a){return i!==void 0&&r<i?r=a?Ne(i,r,a.min):Math.max(r,i):s!==void 0&&r>s&&(r=a?Ne(s,r,a.max):Math.min(r,s)),r}function Gh(r,i,s){return{min:i!==void 0?r.min+i:void 0,max:s!==void 0?r.max+s-(r.max-r.min):void 0}}function N0(r,{top:i,left:s,bottom:a,right:c}){return{x:Gh(r.x,s,c),y:Gh(r.y,i,a)}}function qh(r,i){let s=i.min-r.min,a=i.max-r.max;return i.max-i.min<r.max-r.min&&([s,a]=[a,s]),{min:s,max:a}}function P0(r,i){return{x:qh(r.x,i.x),y:qh(r.y,i.y)}}function C0(r,i){let s=.5;const a=mt(r),c=mt(i);return c>a?s=pr(i.min,i.max-a,r.min):a>c&&(s=pr(r.min,r.max-c,i.min)),Yt(0,1,s)}function A0(r,i){const s={};return i.min!==void 0&&(s.min=i.min-r.min),i.max!==void 0&&(s.max=i.max-r.min),s}const Nl=.35;function j0(r=Nl){return r===!1?r=0:r===!0&&(r=Nl),{x:Yh(r,"left","right"),y:Yh(r,"top","bottom")}}function Yh(r,i,s){return{min:Qh(r,i),max:Qh(r,s)}}function Qh(r,i){return typeof r=="number"?r:r[i]||0}const Xh=()=>({translate:0,scale:1,origin:0,originPoint:0}),hr=()=>({x:Xh(),y:Xh()}),Zh=()=>({min:0,max:0}),De=()=>({x:Zh(),y:Zh()});function St(r){return[r("x"),r("y")]}function Ym({top:r,left:i,right:s,bottom:a}){return{x:{min:i,max:s},y:{min:r,max:a}}}function E0({x:r,y:i}){return{top:i.min,right:r.max,bottom:i.max,left:r.min}}function D0(r,i){if(!i)return r;const s=i({x:r.left,y:r.top}),a=i({x:r.right,y:r.bottom});return{top:s.y,left:s.x,bottom:a.y,right:a.x}}function ll(r){return r===void 0||r===1}function Pl({scale:r,scaleX:i,scaleY:s}){return!ll(r)||!ll(i)||!ll(s)}function Fn(r){return Pl(r)||Qm(r)||r.z||r.rotate||r.rotateX||r.rotateY||r.skewX||r.skewY}function Qm(r){return Jh(r.x)||Jh(r.y)}function Jh(r){return r&&r!=="0%"}function qs(r,i,s){const a=r-s,c=i*a;return s+c}function ef(r,i,s,a,c){return c!==void 0&&(r=qs(r,c,a)),qs(r,s,a)+i}function Cl(r,i=0,s=1,a,c){r.min=ef(r.min,i,s,a,c),r.max=ef(r.max,i,s,a,c)}function Xm(r,{x:i,y:s}){Cl(r.x,i.translate,i.scale,i.originPoint),Cl(r.y,s.translate,s.scale,s.originPoint)}const tf=.999999999999,nf=1.0000000000001;function M0(r,i,s,a=!1){const c=s.length;if(!c)return;i.x=i.y=1;let h,d;for(let m=0;m<c;m++){h=s[m],d=h.projectionDelta;const{visualElement:y}=h.options;y&&y.props.style&&y.props.style.display==="contents"||(a&&h.options.layoutScroll&&h.scroll&&h!==h.root&&mr(r,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,Xm(r,d)),a&&Fn(h.latestValues)&&mr(r,h.latestValues))}i.x<nf&&i.x>tf&&(i.x=1),i.y<nf&&i.y>tf&&(i.y=1)}function fr(r,i){r.min=r.min+i,r.max=r.max+i}function rf(r,i,s,a,c=.5){const h=Ne(r.min,r.max,c);Cl(r,i,s,h,a)}function mr(r,i){rf(r.x,i.x,i.scaleX,i.scale,i.originX),rf(r.y,i.y,i.scaleY,i.scale,i.originY)}function Zm(r,i){return Ym(D0(r.getBoundingClientRect(),i))}function F0(r,i,s){const a=Zm(r,s),{scroll:c}=i;return c&&(fr(a.x,c.offset.x),fr(a.y,c.offset.y)),a}const Jm=({current:r})=>r?r.ownerDocument.defaultView:null,L0=new WeakMap;class R0{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=De(),this.visualElement=i}start(i,{snapToCursor:s=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const c=v=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),s&&this.snapToCursor(Si(v).point)},h=(v,x)=>{const{drag:S,dragPropagation:C,onDragStart:F}=this.getProps();if(S&&!C&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Cv(S),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),St(E=>{let _=this.getAxisMotionValue(E).get()||0;if(Vt.test(_)){const{projection:H}=this.visualElement;if(H&&H.layout){const G=H.layout.layoutBox[E];G&&(_=mt(G)*(parseFloat(_)/100))}}this.originPoint[E]=_}),F&&xe.postRender(()=>F(v,x)),vl(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},d=(v,x)=>{const{dragPropagation:S,dragDirectionLock:C,onDirectionLock:F,onDrag:A}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:E}=x;if(C&&this.currentDirection===null){this.currentDirection=V0(E),this.currentDirection!==null&&F&&F(this.currentDirection);return}this.updateAxis("x",x.point,E),this.updateAxis("y",x.point,E),this.visualElement.render(),A&&A(v,x)},m=(v,x)=>this.stop(v,x),y=()=>St(v=>{var x;return this.getAnimationState(v)==="paused"&&((x=this.getAxisMotionValue(v).animation)===null||x===void 0?void 0:x.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new $m(i,{onSessionStart:c,onStart:h,onMove:d,onSessionEnd:m,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,contextWindow:Jm(this.visualElement)})}stop(i,s){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:c}=s;this.startAnimation(c);const{onDragEnd:h}=this.getProps();h&&xe.postRender(()=>h(i,s))}cancel(){this.isDragging=!1;const{projection:i,animationState:s}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}updateAxis(i,s,a){const{drag:c}=this.getProps();if(!a||!Vs(i,c,this.currentDirection))return;const h=this.getAxisMotionValue(i);let d=this.originPoint[i]+a[i];this.constraints&&this.constraints[i]&&(d=T0(d,this.constraints[i],this.elastic[i])),h.set(d)}resolveConstraints(){var i;const{dragConstraints:s,dragElastic:a}=this.getProps(),c=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)===null||i===void 0?void 0:i.layout,h=this.constraints;s&&cr(s)?this.constraints||(this.constraints=this.resolveRefConstraints()):s&&c?this.constraints=N0(c.layoutBox,s):this.constraints=!1,this.elastic=j0(a),h!==this.constraints&&c&&this.constraints&&!this.hasMutatedConstraints&&St(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=A0(c.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:s}=this.getProps();if(!i||!cr(i))return!1;const a=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const h=F0(a,c.root,this.visualElement.getTransformPagePoint());let d=P0(c.layout.layoutBox,h);if(s){const m=s(E0(d));this.hasMutatedConstraints=!!m,m&&(d=Ym(m))}return d}startAnimation(i){const{drag:s,dragMomentum:a,dragElastic:c,dragTransition:h,dragSnapToOrigin:d,onDragTransitionEnd:m}=this.getProps(),y=this.constraints||{},g=St(v=>{if(!Vs(v,s,this.currentDirection))return;let x=y&&y[v]||{};d&&(x={min:0,max:0});const S=c?200:1e6,C=c?40:1e7,F={type:"inertia",velocity:a?i[v]:0,bounceStiffness:S,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...h,...x};return this.startAxisValueAnimation(v,F)});return Promise.all(g).then(m)}startAxisValueAnimation(i,s){const a=this.getAxisMotionValue(i);return vl(this.visualElement,i),a.start(hu(i,a,0,s,this.visualElement,!1))}stopAnimation(){St(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){St(i=>{var s;return(s=this.getAxisMotionValue(i).animation)===null||s===void 0?void 0:s.pause()})}getAnimationState(i){var s;return(s=this.getAxisMotionValue(i).animation)===null||s===void 0?void 0:s.state}getAxisMotionValue(i){const s=`_drag${i.toUpperCase()}`,a=this.visualElement.getProps(),c=a[s];return c||this.visualElement.getValue(i,(a.initial?a.initial[i]:void 0)||0)}snapToCursor(i){St(s=>{const{drag:a}=this.getProps();if(!Vs(s,a,this.currentDirection))return;const{projection:c}=this.visualElement,h=this.getAxisMotionValue(s);if(c&&c.layout){const{min:d,max:m}=c.layout.layoutBox[s];h.set(i[s]-Ne(d,m,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:s}=this.getProps(),{projection:a}=this.visualElement;if(!cr(s)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};St(d=>{const m=this.getAxisMotionValue(d);if(m&&this.constraints!==!1){const y=m.get();c[d]=C0({min:y,max:y},this.constraints[d])}});const{transformTemplate:h}=this.visualElement.getProps();this.visualElement.current.style.transform=h?h({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),St(d=>{if(!Vs(d,i,null))return;const m=this.getAxisMotionValue(d),{min:y,max:g}=this.constraints[d];m.set(Ne(y,g,c[d]))})}addListeners(){if(!this.visualElement.current)return;L0.set(this.visualElement,this);const i=this.visualElement.current,s=di(i,"pointerdown",y=>{const{drag:g,dragListener:v=!0}=this.getProps();g&&v&&this.start(y)}),a=()=>{const{dragConstraints:y}=this.getProps();cr(y)&&y.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,h=c.addEventListener("measure",a);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),xe.read(a);const d=vi(window,"resize",()=>this.scalePositionWithinConstraints()),m=c.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:g})=>{this.isDragging&&g&&(St(v=>{const x=this.getAxisMotionValue(v);x&&(this.originPoint[v]+=y[v].translate,x.set(x.get()+y[v].translate))}),this.visualElement.render())}));return()=>{d(),s(),h(),m&&m()}}getProps(){const i=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:h=!1,dragElastic:d=Nl,dragMomentum:m=!0}=i;return{...i,drag:s,dragDirectionLock:a,dragPropagation:c,dragConstraints:h,dragElastic:d,dragMomentum:m}}}function Vs(r,i,s){return(i===!0||i===r)&&(s===null||s===r)}function V0(r,i=10){let s=null;return Math.abs(r.y)>i?s="y":Math.abs(r.x)>i&&(s="x"),s}class _0 extends wn{constructor(i){super(i),this.removeGroupControls=ft,this.removeListeners=ft,this.controls=new R0(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ft}unmount(){this.removeGroupControls(),this.removeListeners()}}const sf=r=>(i,s)=>{r&&xe.postRender(()=>r(i,s))};class O0 extends wn{constructor(){super(...arguments),this.removePointerDownListener=ft}onPointerDown(i){this.session=new $m(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Jm(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:s,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:sf(i),onStart:sf(s),onMove:a,onEnd:(h,d)=>{delete this.session,c&&xe.postRender(()=>c(h,d))}}}mount(){this.removePointerDownListener=di(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const zs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function of(r,i){return i.max===i.min?0:r/(i.max-i.min)*100}const oi={correct:(r,i)=>{if(!i.target)return r;if(typeof r=="string")if(ne.test(r))r=parseFloat(r);else return r;const s=of(r,i.target.x),a=of(r,i.target.y);return`${s}% ${a}%`}},B0={correct:(r,{treeScale:i,projectionDelta:s})=>{const a=r,c=vn.parse(r);if(c.length>5)return a;const h=vn.createTransformer(r),d=typeof c[0]!="number"?1:0,m=s.x.scale*i.x,y=s.y.scale*i.y;c[0+d]/=m,c[1+d]/=y;const g=Ne(m,y,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),h(c)}};class z0 extends B.Component{componentDidMount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:a,layoutId:c}=this.props,{projection:h}=i;av(H0),h&&(s.group&&s.group.add(h),a&&a.register&&c&&a.register(h),h.root.didUpdate(),h.addEventListener("animationComplete",()=>{this.safeToRemove()}),h.setOptions({...h.options,onExitComplete:()=>this.safeToRemove()})),zs.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:s,visualElement:a,drag:c,isPresent:h}=this.props,d=a.projection;return d&&(d.isPresent=h,c||i.layoutDependency!==s||s===void 0?d.willUpdate():this.safeToRemove(),i.isPresent!==h&&(h?d.promote():d.relegate()||xe.postRender(()=>{const m=d.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),zl.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:a}=this.props,{projection:c}=i;c&&(c.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function ep(r){const[i,s]=Rf(),a=B.useContext(Ml);return f.jsx(z0,{...r,layoutGroup:a,switchLayoutGroup:B.useContext(Uf),isPresent:i,safeToRemove:s})}const H0={borderRadius:{...oi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:oi,borderTopRightRadius:oi,borderBottomLeftRadius:oi,borderBottomRightRadius:oi,boxShadow:B0};function W0(r,i,s){const a=qe(r)?r:yi(r);return a.start(hu("",a,i,s)),a.animation}function U0(r){return r instanceof SVGElement&&r.tagName!=="svg"}const $0=(r,i)=>r.depth-i.depth;class K0{constructor(){this.children=[],this.isDirty=!1}add(i){tu(this.children,i),this.isDirty=!0}remove(i){nu(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort($0),this.isDirty=!1,this.children.forEach(i)}}function G0(r,i){const s=_t.now(),a=({timestamp:c})=>{const h=c-s;h>=i&&(gn(a),r(h-i))};return xe.read(a,!0),()=>gn(a)}const tp=["TopLeft","TopRight","BottomLeft","BottomRight"],q0=tp.length,af=r=>typeof r=="string"?parseFloat(r):r,lf=r=>typeof r=="number"||ne.test(r);function Y0(r,i,s,a,c,h){c?(r.opacity=Ne(0,s.opacity!==void 0?s.opacity:1,Q0(a)),r.opacityExit=Ne(i.opacity!==void 0?i.opacity:1,0,X0(a))):h&&(r.opacity=Ne(i.opacity!==void 0?i.opacity:1,s.opacity!==void 0?s.opacity:1,a));for(let d=0;d<q0;d++){const m=`border${tp[d]}Radius`;let y=uf(i,m),g=uf(s,m);if(y===void 0&&g===void 0)continue;y||(y=0),g||(g=0),y===0||g===0||lf(y)===lf(g)?(r[m]=Math.max(Ne(af(y),af(g),a),0),(Vt.test(g)||Vt.test(y))&&(r[m]+="%")):r[m]=g}(i.rotate||s.rotate)&&(r.rotate=Ne(i.rotate||0,s.rotate||0,a))}function uf(r,i){return r[i]!==void 0?r[i]:r.borderRadius}const Q0=np(0,.5,xm),X0=np(.5,.95,ft);function np(r,i,s){return a=>a<r?0:a>i?1:s(pr(r,i,a))}function cf(r,i){r.min=i.min,r.max=i.max}function kt(r,i){cf(r.x,i.x),cf(r.y,i.y)}function df(r,i){r.translate=i.translate,r.scale=i.scale,r.originPoint=i.originPoint,r.origin=i.origin}function hf(r,i,s,a,c){return r-=i,r=qs(r,1/s,a),c!==void 0&&(r=qs(r,1/c,a)),r}function Z0(r,i=0,s=1,a=.5,c,h=r,d=r){if(Vt.test(i)&&(i=parseFloat(i),i=Ne(d.min,d.max,i/100)-d.min),typeof i!="number")return;let m=Ne(h.min,h.max,a);r===h&&(m-=i),r.min=hf(r.min,i,s,m,c),r.max=hf(r.max,i,s,m,c)}function ff(r,i,[s,a,c],h,d){Z0(r,i[s],i[a],i[c],i.scale,h,d)}const J0=["x","scaleX","originX"],ex=["y","scaleY","originY"];function mf(r,i,s,a){ff(r.x,i,J0,s?s.x:void 0,a?a.x:void 0),ff(r.y,i,ex,s?s.y:void 0,a?a.y:void 0)}function pf(r){return r.translate===0&&r.scale===1}function rp(r){return pf(r.x)&&pf(r.y)}function yf(r,i){return r.min===i.min&&r.max===i.max}function tx(r,i){return yf(r.x,i.x)&&yf(r.y,i.y)}function gf(r,i){return Math.round(r.min)===Math.round(i.min)&&Math.round(r.max)===Math.round(i.max)}function ip(r,i){return gf(r.x,i.x)&&gf(r.y,i.y)}function vf(r){return mt(r.x)/mt(r.y)}function wf(r,i){return r.translate===i.translate&&r.scale===i.scale&&r.originPoint===i.originPoint}class nx{constructor(){this.members=[]}add(i){tu(this.members,i),i.scheduleRender()}remove(i){if(nu(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(i){const s=this.members.findIndex(c=>i===c);if(s===0)return!1;let a;for(let c=s;c>=0;c--){const h=this.members[c];if(h.isPresent!==!1){a=h;break}}return a?(this.promote(a),!0):!1}promote(i,s){const a=this.lead;if(i!==a&&(this.prevLead=a,this.lead=i,i.show(),a)){a.instance&&a.scheduleRender(),i.scheduleRender(),i.resumeFrom=a,s&&(i.resumeFrom.preserveOpacity=!0),a.snapshot&&(i.snapshot=a.snapshot,i.snapshot.latestValues=a.animationValues||a.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:s,resumingFrom:a}=i;s.onExitComplete&&s.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function rx(r,i,s){let a="";const c=r.x.translate/i.x,h=r.y.translate/i.y,d=(s==null?void 0:s.z)||0;if((c||h||d)&&(a=`translate3d(${c}px, ${h}px, ${d}px) `),(i.x!==1||i.y!==1)&&(a+=`scale(${1/i.x}, ${1/i.y}) `),s){const{transformPerspective:g,rotate:v,rotateX:x,rotateY:S,skewX:C,skewY:F}=s;g&&(a=`perspective(${g}px) ${a}`),v&&(a+=`rotate(${v}deg) `),x&&(a+=`rotateX(${x}deg) `),S&&(a+=`rotateY(${S}deg) `),C&&(a+=`skewX(${C}deg) `),F&&(a+=`skewY(${F}deg) `)}const m=r.x.scale*i.x,y=r.y.scale*i.y;return(m!==1||y!==1)&&(a+=`scale(${m}, ${y})`),a||"none"}const Ln={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ui=typeof window<"u"&&window.MotionDebug!==void 0,ul=["","X","Y","Z"],ix={visibility:"hidden"},xf=1e3;let sx=0;function cl(r,i,s,a){const{latestValues:c}=i;c[r]&&(s[r]=c[r],i.setStaticValue(r,0),a&&(a[r]=0))}function sp(r){if(r.hasCheckedOptimisedAppear=!0,r.root===r)return;const{visualElement:i}=r.options;if(!i)return;const s=fm(i);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:c,layoutId:h}=r.options;window.MotionCancelOptimisedAnimation(s,"transform",xe,!(c||h))}const{parent:a}=r;a&&!a.hasCheckedOptimisedAppear&&sp(a)}function op({attachResizeListener:r,defaultParent:i,measureScroll:s,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},m=i==null?void 0:i()){this.id=sx++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ui&&(Ln.totalNodes=Ln.resolvedTargetDeltas=Ln.recalculatedProjection=0),this.nodes.forEach(lx),this.nodes.forEach(fx),this.nodes.forEach(mx),this.nodes.forEach(ux),ui&&window.MotionDebug.record(Ln)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let y=0;y<this.path.length;y++)this.path[y].shouldResetTransform=!0;this.root===this&&(this.nodes=new K0)}addEventListener(d,m){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new ru),this.eventHandlers.get(d).add(m)}notifyListeners(d,...m){const y=this.eventHandlers.get(d);y&&y.notify(...m)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,m=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=U0(d),this.instance=d;const{layoutId:y,layout:g,visualElement:v}=this.options;if(v&&!v.current&&v.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),m&&(g||y)&&(this.isLayoutDirty=!0),r){let x;const S=()=>this.root.updateBlockedByResize=!1;r(d,()=>{this.root.updateBlockedByResize=!0,x&&x(),x=G0(S,250),zs.hasAnimatedSinceResize&&(zs.hasAnimatedSinceResize=!1,this.nodes.forEach(Sf))})}y&&this.root.registerSharedNode(y,this),this.options.animate!==!1&&v&&(y||g)&&this.addEventListener("didUpdate",({delta:x,hasLayoutChanged:S,hasRelativeTargetChanged:C,layout:F})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const A=this.options.transition||v.getDefaultTransition()||wx,{onLayoutAnimationStart:E,onLayoutAnimationComplete:_}=v.getProps(),H=!this.targetLayout||!ip(this.targetLayout,F)||C,G=!S&&C;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||G||S&&(H||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(x,G);const X={...Xl(A,"layout"),onPlay:E,onComplete:_};(v.shouldReduceMotion||this.options.layoutRoot)&&(X.delay=0,X.type=!1),this.startAnimation(X)}else S||Sf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=F})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,gn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(px),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&sp(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const x=this.path[v];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:m,layout:y}=this.options;if(m===void 0&&!y)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(kf);return}this.isUpdating||this.nodes.forEach(dx),this.isUpdating=!1,this.nodes.forEach(hx),this.nodes.forEach(ox),this.nodes.forEach(ax),this.clearAllSnapshots();const m=_t.now();He.delta=Yt(0,1e3/60,m-He.timestamp),He.timestamp=m,He.isProcessing=!0,el.update.process(He),el.preRender.process(He),el.render.process(He),He.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,zl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(cx),this.sharedNodes.forEach(yx)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,xe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){xe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let y=0;y<this.path.length;y++)this.path[y].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=De(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(m=!1),m){const y=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:y,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:y}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!rp(this.projectionDelta),y=this.getTransformTemplate(),g=y?y(this.latestValues,""):void 0,v=g!==this.prevTransformTemplateValue;d&&(m||Fn(this.latestValues)||v)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const m=this.measurePageBox();let y=this.removeElementScroll(m);return d&&(y=this.removeTransform(y)),xx(y),{animationId:this.root.animationId,measuredBox:m,layoutBox:y,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:m}=this.options;if(!m)return De();const y=m.measureViewportBox();if(!(((d=this.scroll)===null||d===void 0?void 0:d.wasRoot)||this.path.some(kx))){const{scroll:v}=this.root;v&&(fr(y.x,v.offset.x),fr(y.y,v.offset.y))}return y}removeElementScroll(d){var m;const y=De();if(kt(y,d),!((m=this.scroll)===null||m===void 0)&&m.wasRoot)return y;for(let g=0;g<this.path.length;g++){const v=this.path[g],{scroll:x,options:S}=v;v!==this.root&&x&&S.layoutScroll&&(x.wasRoot&&kt(y,d),fr(y.x,x.offset.x),fr(y.y,x.offset.y))}return y}applyTransform(d,m=!1){const y=De();kt(y,d);for(let g=0;g<this.path.length;g++){const v=this.path[g];!m&&v.options.layoutScroll&&v.scroll&&v!==v.root&&mr(y,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),Fn(v.latestValues)&&mr(y,v.latestValues)}return Fn(this.latestValues)&&mr(y,this.latestValues),y}removeTransform(d){const m=De();kt(m,d);for(let y=0;y<this.path.length;y++){const g=this.path[y];if(!g.instance||!Fn(g.latestValues))continue;Pl(g.latestValues)&&g.updateSnapshot();const v=De(),x=g.measurePageBox();kt(v,x),mf(m,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,v)}return Fn(this.latestValues)&&mf(m,this.latestValues),m}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==He.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var m;const y=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=y.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=y.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=y.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==y;if(!(d||g&&this.isSharedProjectionDirty||this.isProjectionDirty||!((m=this.parent)===null||m===void 0)&&m.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:x,layoutId:S}=this.options;if(!(!this.layout||!(x||S))){if(this.resolvedRelativeTargetAt=He.timestamp,!this.targetDelta&&!this.relativeTarget){const C=this.getClosestProjectingParent();C&&C.layout&&this.animationProgress!==1?(this.relativeParent=C,this.forceRelativeParentToResolveTarget(),this.relativeTarget=De(),this.relativeTargetOrigin=De(),fi(this.relativeTargetOrigin,this.layout.layoutBox,C.layout.layoutBox),kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=De(),this.targetWithTransforms=De()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),I0(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):kt(this.target,this.layout.layoutBox),Xm(this.target,this.targetDelta)):kt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const C=this.getClosestProjectingParent();C&&!!C.resumingFrom==!!this.resumingFrom&&!C.options.layoutScroll&&C.target&&this.animationProgress!==1?(this.relativeParent=C,this.forceRelativeParentToResolveTarget(),this.relativeTarget=De(),this.relativeTargetOrigin=De(),fi(this.relativeTargetOrigin,this.target,C.target),kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ui&&Ln.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Pl(this.parent.latestValues)||Qm(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const m=this.getLead(),y=!!this.resumingFrom||this!==m;let g=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(g=!1),y&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===He.timestamp&&(g=!1),g)return;const{layout:v,layoutId:x}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(v||x))return;kt(this.layoutCorrected,this.layout.layoutBox);const S=this.treeScale.x,C=this.treeScale.y;M0(this.layoutCorrected,this.treeScale,this.path,y),m.layout&&!m.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(m.target=m.layout.layoutBox,m.targetWithTransforms=De());const{target:F}=m;if(!F){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(df(this.prevProjectionDelta.x,this.projectionDelta.x),df(this.prevProjectionDelta.y,this.projectionDelta.y)),hi(this.projectionDelta,this.layoutCorrected,F,this.latestValues),(this.treeScale.x!==S||this.treeScale.y!==C||!wf(this.projectionDelta.x,this.prevProjectionDelta.x)||!wf(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",F)),ui&&Ln.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var m;if((m=this.options.visualElement)===null||m===void 0||m.scheduleRender(),d){const y=this.getStack();y&&y.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=hr(),this.projectionDelta=hr(),this.projectionDeltaWithTransform=hr()}setAnimationOrigin(d,m=!1){const y=this.snapshot,g=y?y.latestValues:{},v={...this.latestValues},x=hr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const S=De(),C=y?y.source:void 0,F=this.layout?this.layout.source:void 0,A=C!==F,E=this.getStack(),_=!E||E.members.length<=1,H=!!(A&&!_&&this.options.crossfade===!0&&!this.path.some(vx));this.animationProgress=0;let G;this.mixTargetDelta=X=>{const z=X/1e3;bf(x.x,d.x,z),bf(x.y,d.y,z),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fi(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),gx(this.relativeTarget,this.relativeTargetOrigin,S,z),G&&tx(this.relativeTarget,G)&&(this.isProjectionDirty=!1),G||(G=De()),kt(G,this.relativeTarget)),A&&(this.animationValues=v,Y0(v,g,this.latestValues,z,H,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=z},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(gn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=xe.update(()=>{zs.hasAnimatedSinceResize=!0,this.currentAnimation=W0(0,xf,{...d,onUpdate:m=>{this.mixTargetDelta(m),d.onUpdate&&d.onUpdate(m)},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(xf),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:m,target:y,layout:g,latestValues:v}=d;if(!(!m||!y||!g)){if(this!==d&&this.layout&&g&&ap(this.options.animationType,this.layout.layoutBox,g.layoutBox)){y=this.target||De();const x=mt(this.layout.layoutBox.x);y.x.min=d.target.x.min,y.x.max=y.x.min+x;const S=mt(this.layout.layoutBox.y);y.y.min=d.target.y.min,y.y.max=y.y.min+S}kt(m,y),mr(m,v),hi(this.projectionDeltaWithTransform,this.layoutCorrected,m,v)}}registerSharedNode(d,m){this.sharedNodes.has(d)||this.sharedNodes.set(d,new nx),this.sharedNodes.get(d).add(m);const g=m.options.initialPromotionConfig;m.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(m):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:m}=this.options;return m?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:m}=this.options;return m?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:m,preserveFollowOpacity:y}={}){const g=this.getStack();g&&g.promote(this,y),d&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let m=!1;const{latestValues:y}=d;if((y.z||y.rotate||y.rotateX||y.rotateY||y.rotateZ||y.skewX||y.skewY)&&(m=!0),!m)return;const g={};y.z&&cl("z",d,g,this.animationValues);for(let v=0;v<ul.length;v++)cl(`rotate${ul[v]}`,d,g,this.animationValues),cl(`skew${ul[v]}`,d,g,this.animationValues);d.render();for(const v in g)d.setStaticValue(v,g[v]),this.animationValues&&(this.animationValues[v]=g[v]);d.scheduleRender()}getProjectionStyles(d){var m,y;if(!this.instance||this.isSVG)return;if(!this.isVisible)return ix;const g={visibility:""},v=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,g.opacity="",g.pointerEvents=Os(d==null?void 0:d.pointerEvents)||"",g.transform=v?v(this.latestValues,""):"none",g;const x=this.getLead();if(!this.projectionDelta||!this.layout||!x.target){const A={};return this.options.layoutId&&(A.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,A.pointerEvents=Os(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!Fn(this.latestValues)&&(A.transform=v?v({},""):"none",this.hasProjected=!1),A}const S=x.animationValues||x.latestValues;this.applyTransformsToTarget(),g.transform=rx(this.projectionDeltaWithTransform,this.treeScale,S),v&&(g.transform=v(S,g.transform));const{x:C,y:F}=this.projectionDelta;g.transformOrigin=`${C.origin*100}% ${F.origin*100}% 0`,x.animationValues?g.opacity=x===this?(y=(m=S.opacity)!==null&&m!==void 0?m:this.latestValues.opacity)!==null&&y!==void 0?y:1:this.preserveOpacity?this.latestValues.opacity:S.opacityExit:g.opacity=x===this?S.opacity!==void 0?S.opacity:"":S.opacityExit!==void 0?S.opacityExit:0;for(const A in Ws){if(S[A]===void 0)continue;const{correct:E,applyTo:_}=Ws[A],H=g.transform==="none"?S[A]:E(S[A],x);if(_){const G=_.length;for(let X=0;X<G;X++)g[_[X]]=H}else g[A]=H}return this.options.layoutId&&(g.pointerEvents=x===this?Os(d==null?void 0:d.pointerEvents)||"":"none"),g}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var m;return(m=d.currentAnimation)===null||m===void 0?void 0:m.stop()}),this.root.nodes.forEach(kf),this.root.sharedNodes.clear()}}}function ox(r){r.updateLayout()}function ax(r){var i;const s=((i=r.resumeFrom)===null||i===void 0?void 0:i.snapshot)||r.snapshot;if(r.isLead()&&r.layout&&s&&r.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=r.layout,{animationType:h}=r.options,d=s.source!==r.layout.source;h==="size"?St(x=>{const S=d?s.measuredBox[x]:s.layoutBox[x],C=mt(S);S.min=a[x].min,S.max=S.min+C}):ap(h,s.layoutBox,a)&&St(x=>{const S=d?s.measuredBox[x]:s.layoutBox[x],C=mt(a[x]);S.max=S.min+C,r.relativeTarget&&!r.currentAnimation&&(r.isProjectionDirty=!0,r.relativeTarget[x].max=r.relativeTarget[x].min+C)});const m=hr();hi(m,a,s.layoutBox);const y=hr();d?hi(y,r.applyTransform(c,!0),s.measuredBox):hi(y,a,s.layoutBox);const g=!rp(m);let v=!1;if(!r.resumeFrom){const x=r.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:S,layout:C}=x;if(S&&C){const F=De();fi(F,s.layoutBox,S.layoutBox);const A=De();fi(A,a,C.layoutBox),ip(F,A)||(v=!0),x.options.layoutRoot&&(r.relativeTarget=A,r.relativeTargetOrigin=F,r.relativeParent=x)}}}r.notifyListeners("didUpdate",{layout:a,snapshot:s,delta:y,layoutDelta:m,hasLayoutChanged:g,hasRelativeTargetChanged:v})}else if(r.isLead()){const{onExitComplete:a}=r.options;a&&a()}r.options.transition=void 0}function lx(r){ui&&Ln.totalNodes++,r.parent&&(r.isProjecting()||(r.isProjectionDirty=r.parent.isProjectionDirty),r.isSharedProjectionDirty||(r.isSharedProjectionDirty=!!(r.isProjectionDirty||r.parent.isProjectionDirty||r.parent.isSharedProjectionDirty)),r.isTransformDirty||(r.isTransformDirty=r.parent.isTransformDirty))}function ux(r){r.isProjectionDirty=r.isSharedProjectionDirty=r.isTransformDirty=!1}function cx(r){r.clearSnapshot()}function kf(r){r.clearMeasurements()}function dx(r){r.isLayoutDirty=!1}function hx(r){const{visualElement:i}=r.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),r.resetTransform()}function Sf(r){r.finishAnimation(),r.targetDelta=r.relativeTarget=r.target=void 0,r.isProjectionDirty=!0}function fx(r){r.resolveTargetDelta()}function mx(r){r.calcProjection()}function px(r){r.resetSkewAndRotation()}function yx(r){r.removeLeadSnapshot()}function bf(r,i,s){r.translate=Ne(i.translate,0,s),r.scale=Ne(i.scale,1,s),r.origin=i.origin,r.originPoint=i.originPoint}function If(r,i,s,a){r.min=Ne(i.min,s.min,a),r.max=Ne(i.max,s.max,a)}function gx(r,i,s,a){If(r.x,i.x,s.x,a),If(r.y,i.y,s.y,a)}function vx(r){return r.animationValues&&r.animationValues.opacityExit!==void 0}const wx={duration:.45,ease:[.4,0,.1,1]},Tf=r=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(r),Nf=Tf("applewebkit/")&&!Tf("chrome/")?Math.round:ft;function Pf(r){r.min=Nf(r.min),r.max=Nf(r.max)}function xx(r){Pf(r.x),Pf(r.y)}function ap(r,i,s){return r==="position"||r==="preserve-aspect"&&!b0(vf(i),vf(s),.2)}function kx(r){var i;return r!==r.root&&((i=r.scroll)===null||i===void 0?void 0:i.wasRoot)}const Sx=op({attachResizeListener:(r,i)=>vi(r,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),dl={current:void 0},lp=op({measureScroll:r=>({x:r.scrollLeft,y:r.scrollTop}),defaultParent:()=>{if(!dl.current){const r=new Sx({});r.mount(window),r.setOptions({layoutScroll:!0}),dl.current=r}return dl.current},resetTransform:(r,i)=>{r.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:r=>window.getComputedStyle(r).position==="fixed"}),bx={pan:{Feature:O0},drag:{Feature:_0,ProjectionNode:lp,MeasureLayout:ep}};function Cf(r,i,s){const{props:a}=r;r.animationState&&a.whileHover&&r.animationState.setActive("whileHover",s==="Start");const c="onHover"+s,h=a[c];h&&xe.postRender(()=>h(i,Si(i)))}class Ix extends wn{mount(){const{current:i}=this.node;i&&(this.unmount=bv(i,s=>(Cf(this.node,s,"Start"),a=>Cf(this.node,a,"End"))))}unmount(){}}class Tx extends wn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ki(vi(this.node.current,"focus",()=>this.onFocus()),vi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Af(r,i,s){const{props:a}=r;r.animationState&&a.whileTap&&r.animationState.setActive("whileTap",s==="Start");const c="onTap"+(s==="End"?"":s),h=a[c];h&&xe.postRender(()=>h(i,Si(i)))}class Nx extends wn{mount(){const{current:i}=this.node;i&&(this.unmount=Pv(i,s=>(Af(this.node,s,"Start"),(a,{success:c})=>Af(this.node,a,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Al=new WeakMap,hl=new WeakMap,Px=r=>{const i=Al.get(r.target);i&&i(r)},Cx=r=>{r.forEach(Px)};function Ax({root:r,...i}){const s=r||document;hl.has(s)||hl.set(s,{});const a=hl.get(s),c=JSON.stringify(i);return a[c]||(a[c]=new IntersectionObserver(Cx,{root:r,...i})),a[c]}function jx(r,i,s){const a=Ax(i);return Al.set(r,s),a.observe(r),()=>{Al.delete(r),a.unobserve(r)}}const Ex={some:0,all:1};class Dx extends wn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:s,margin:a,amount:c="some",once:h}=i,d={root:s?s.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:Ex[c]},m=y=>{const{isIntersecting:g}=y;if(this.isInView===g||(this.isInView=g,h&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:v,onViewportLeave:x}=this.node.getProps(),S=g?v:x;S&&S(y)};return jx(this.node.current,d,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:s}=this.node;["amount","margin","root"].some(Mx(i,s))&&this.startObserver()}unmount(){}}function Mx({viewport:r={}},{viewport:i={}}={}){return s=>r[s]!==i[s]}const Fx={inView:{Feature:Dx},tap:{Feature:Nx},focus:{Feature:Tx},hover:{Feature:Ix}},Lx={layout:{ProjectionNode:lp,MeasureLayout:ep}},jl={current:null},up={current:!1};function Rx(){if(up.current=!0,!!Rl)if(window.matchMedia){const r=window.matchMedia("(prefers-reduced-motion)"),i=()=>jl.current=r.matches;r.addListener(i),i()}else jl.current=!1}const Vx=[...Fm,Ge,vn],_x=r=>Vx.find(Mm(r)),jf=new WeakMap;function Ox(r,i,s){for(const a in i){const c=i[a],h=s[a];if(qe(c))r.addValue(a,c);else if(qe(h))r.addValue(a,yi(c,{owner:r}));else if(h!==c)if(r.hasValue(a)){const d=r.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=r.getStaticValue(a);r.addValue(a,yi(d!==void 0?d:c,{owner:r}))}}for(const a in s)i[a]===void 0&&r.removeValue(a);return i}const Ef=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Bx{scrapeMotionValuesFromProps(i,s,a){return{}}constructor({parent:i,props:s,presenceContext:a,reducedMotionConfig:c,blockInitialAnimation:h,visualState:d},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=uu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const C=_t.now();this.renderScheduledAt<C&&(this.renderScheduledAt=C,xe.render(this.render,!1,!0))};const{latestValues:y,renderState:g,onUpdate:v}=d;this.onUpdate=v,this.latestValues=y,this.baseTarget={...y},this.initialValues=s.initial?{...y}:{},this.renderState=g,this.parent=i,this.props=s,this.presenceContext=a,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=m,this.blockInitialAnimation=!!h,this.isControllingVariants=Zs(s),this.isVariantNode=Hf(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:x,...S}=this.scrapeMotionValuesFromProps(s,{},this);for(const C in S){const F=S[C];y[C]!==void 0&&qe(F)&&F.set(y[C],!1)}}mount(i){this.current=i,jf.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,a)=>this.bindToMotionValue(a,s)),up.current||Rx(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:jl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){jf.delete(this.current),this.projection&&this.projection.unmount(),gn(this.notifyUpdate),gn(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const s=this.features[i];s&&(s.unmount(),s.isMounted=!1)}this.current=null}bindToMotionValue(i,s){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const a=_n.has(i),c=s.on("change",m=>{this.latestValues[i]=m,this.props.onUpdate&&xe.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),h=s.on("renderRequest",this.scheduleRender);let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,s)),this.valueSubscriptions.set(i,()=>{c(),h(),d&&d(),s.owner&&s.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in yr){const s=yr[i];if(!s)continue;const{isEnabled:a,Feature:c}=s;if(!this.features[i]&&c&&a(this.props)&&(this.features[i]=new c(this)),this.features[i]){const h=this.features[i];h.isMounted?h.update():(h.mount(),h.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):De()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,s){this.latestValues[i]=s}update(i,s){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let a=0;a<Ef.length;a++){const c=Ef[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const h="on"+c,d=i[h];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=Ox(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(i),()=>s.variantChildren.delete(i)}addValue(i,s){const a=this.values.get(i);s!==a&&(a&&this.removeValue(i),this.bindToMotionValue(i,s),this.values.set(i,s),this.latestValues[i]=s.get())}removeValue(i){this.values.delete(i);const s=this.valueSubscriptions.get(i);s&&(s(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,s){if(this.props.values&&this.props.values[i])return this.props.values[i];let a=this.values.get(i);return a===void 0&&s!==void 0&&(a=yi(s===null?void 0:s,{owner:this}),this.addValue(i,a)),a}readValue(i,s){var a;let c=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:(a=this.getBaseTargetFromProps(this.props,i))!==null&&a!==void 0?a:this.readValueFromInstance(this.current,i,this.options);return c!=null&&(typeof c=="string"&&(Em(c)||Sm(c))?c=parseFloat(c):!_x(c)&&vn.test(s)&&(c=Cm(i,s)),this.setBaseTarget(i,qe(c)?c.get():c)),qe(c)?c.get():c}setBaseTarget(i,s){this.baseTarget[i]=s}getBaseTarget(i){var s;const{initial:a}=this.props;let c;if(typeof a=="string"||typeof a=="object"){const d=Wl(this.props,a,(s=this.presenceContext)===null||s===void 0?void 0:s.custom);d&&(c=d[i])}if(a&&c!==void 0)return c;const h=this.getBaseTargetFromProps(this.props,i);return h!==void 0&&!qe(h)?h:this.initialValues[i]!==void 0&&c===void 0?void 0:this.baseTarget[i]}on(i,s){return this.events[i]||(this.events[i]=new ru),this.events[i].add(s)}notify(i,...s){this.events[i]&&this.events[i].notify(...s)}}class cp extends Bx{constructor(){super(...arguments),this.KeyframeResolver=Lm}sortInstanceNodePosition(i,s){return i.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(i,s){return i.style?i.style[s]:void 0}removeValueFromRenderState(i,{vars:s,style:a}){delete s[i],delete a[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;qe(i)&&(this.childSubscription=i.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}function zx(r){return window.getComputedStyle(r)}class Hx extends cp{constructor(){super(...arguments),this.type="html",this.renderInstance=Xf}readValueFromInstance(i,s){if(_n.has(s)){const a=lu(s);return a&&a.default||0}else{const a=zx(i),c=(qf(s)?a.getPropertyValue(s):a[s])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:s}){return Zm(i,s)}build(i,s,a){Kl(i,s,a.transformTemplate)}scrapeMotionValuesFromProps(i,s,a){return Ql(i,s,a)}}class Wx extends cp{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=De}getBaseTargetFromProps(i,s){return i[s]}readValueFromInstance(i,s){if(_n.has(s)){const a=lu(s);return a&&a.default||0}return s=Zf.has(s)?s:Bl(s),i.getAttribute(s)}scrapeMotionValuesFromProps(i,s,a){return tm(i,s,a)}build(i,s,a){Gl(i,s,this.isSVGTag,a.transformTemplate)}renderInstance(i,s,a,c){Jf(i,s,a,c)}mount(i){this.isSVGTag=Yl(i.tagName),super.mount(i)}}const Ux=(r,i)=>Hl(r)?new Wx(i):new Hx(i,{allowProjection:r!==B.Fragment}),$x=yv({...m0,...Fx,...bx,...Lx},Ux),ae=Eg($x);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gx=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,s,a)=>a?a.toUpperCase():s.toLowerCase()),Df=r=>{const i=Gx(r);return i.charAt(0).toUpperCase()+i.slice(1)},dp=(...r)=>r.filter((i,s,a)=>!!i&&i.trim()!==""&&a.indexOf(i)===s).join(" ").trim(),qx=r=>{for(const i in r)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Yx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=B.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:c="",children:h,iconNode:d,...m},y)=>B.createElement("svg",{ref:y,...Yx,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:dp("lucide",c),...!h&&!qx(m)&&{"aria-hidden":"true"},...m},[...d.map(([g,v])=>B.createElement(g,v)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=(r,i)=>{const s=B.forwardRef(({className:a,...c},h)=>B.createElement(Qx,{ref:h,iconNode:i,className:dp(`lucide-${Kx(Df(r))}`,`lucide-${r}`,a),...c}));return s.displayName=Df(r),s};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Zx=Fe("award",Xx);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],e1=Fe("book-open",Jx);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],fl=Fe("check",t1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],r1=Fe("chevron-left",n1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],El=Fe("chevron-right",i1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Mf=Fe("circle-check",s1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],a1=Fe("crown",o1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],u1=Fe("droplets",l1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],d1=Fe("eye",c1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],f1=Fe("globe",h1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],p1=Fe("heart",m1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],g1=Fe("list",y1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],w1=Fe("mail",v1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],ml=Fe("pen-line",x1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],S1=Fe("phone",k1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],I1=Fe("plus",b1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],N1=Fe("save",T1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Ff=Fe("star",P1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],A1=Fe("trash-2",C1);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],E1=Fe("x",j1),D1={title:"Before There Was NUHOUD",subtitle:"A journey through time",author:"Shahid Ahmed — Bu Nuh",coverImage:null,chapters:[{id:1,title:"A Family Shaped by Agarwood",content:`Every family has something that quietly defines them.

For some, it is farming.

For others, it is the sea.

Some families have spent generations making watches, building furniture, or working with horses.

My family was shaped by agarwood.

Long before there was a perfume called Tamed Ghalia...

Long before I ever held a distillation flask in my hands...

Long before the name NUHOUD existed...

There was agarwood.

Not as a luxury.

Not as a business.

But as a way of life.

People often ask me how I became interested in oud.

The truth is, I don't remember becoming interested in it.

It was already there before I was old enough to understand what it was.

Some of my earliest memories are filled with the smell of burning agarwood.

I remember my father sitting quietly, smelling one oud oil after another.

Sometimes he would return to the same bottle several times in a single day.

He wasn't smelling it because he couldn't remember it.

He was studying it.

Listening to it.

Trying to understand it.

As a child, I never understood why.

To me, it was simply something my father always did.

Our home was different from most homes, although I didn't realise it at the time.

Collector-grade agarwood was always around us.

Workers came and went throughout the day.

Some carefully cleaned pieces of wood.

Some sorted them.

Some packed them.

Collectors visited regularly.

Hunters arrived with stories from forests that sounded like places from another world.

Conversations around me were rarely about ordinary things.

Instead, I heard names of regions.

Assam.

Cambodia.

Bangladesh.

Laos.

Indonesia.

Malaysia.

As a child, they were simply names.

Today, every one of those places tells a story.

Looking back, I realise I received an education long before anyone intended to teach me.

Nobody sat me down and explained agarwood.

Nobody gave me lessons.

Nobody told me to become a hunter, a distiller or a perfumer.

Instead, I watched.

Quietly.

Every single day.

Children learn far more by watching than by listening.

Without realising it, I was watching my father make decisions that would later shape my own life.

Sometimes he would reject a piece of agarwood that looked extraordinary to everyone else.

Other times he became excited over a piece that nobody else even noticed.

As a child, I couldn't understand those decisions.

Years later, I realised I had been watching experience.

I had been watching thousands upon thousands of hours of knowledge being applied in silence.

Today people sometimes ask me where my eye for agarwood comes from.

I honestly don't know how to answer that question.

Because I don't remember learning it.

It became part of me little by little, over many years, simply by growing up in that environment.

When I think back to my childhood, I don't first remember money.

I don't remember business.

I remember the smell.

The smell of burning agarwood.

Even today, after everything I have smelled throughout my life, I still believe there is nothing more beautiful than placing an exceptional piece of agarwood onto hot charcoal.

That very first moment.

The first wave of aroma that rises into the air.

For me, nothing has ever surpassed it.

Not a flower.

Not another perfume.

Not another natural material.

That smell is still the most beautiful thing I know.

Perhaps that is why I have spent so much of my life trying to preserve it.

But my family's story with agarwood began long before I was born.

My great grandfather was already hunting agarwood.

My grandfather continued that journey.

Then my father dedicated his own life to it.

Each generation inherited knowledge from the one before it.

But something even more important was passed down.

Respect.

None of them ever spoke about agarwood as though it were simply another product.

It was never treated like a commodity.

It was treated almost like a living part of nature.

Something that deserved understanding before it deserved profit.

That idea stayed with me.

The older I became, the more I realised that my family's greatest inheritance was never the agarwood itself.

It was the way they looked at it.

Curiosity was more important than certainty.

Learning was more important than selling.

Respect was more important than profit.

I believe those values are becoming increasingly rare today.

Perhaps that is one of the reasons I felt such a responsibility to create NUHOUD.

Not because the world needed another perfume house.

Because I didn't want those values to disappear.

Knowledge can disappear in a single generation.

Stories disappear even faster.

If nobody tells them, they are eventually forgotten.

That thought stayed with me for many years.

I realised that one day my own son might ask me the same question people ask today.

"How did all of this begin?"

When that day comes, I don't want to hand him only bottles.

I want to hand him stories.

I want him to understand that before there was NUHOUD...

There was a family.

A family that travelled through forests.

A family that spent generations learning from one of nature's greatest creations.

A family that believed the material always deserved more respect than the market gave it.

This book is my way of making sure those stories are never lost.

Because perfumes eventually evaporate.

Bottles eventually become empty.

Even agarwood itself is becoming harder to find.

But stories...

Stories can survive forever, if someone chooses to preserve them.

And that is where the story of NUHOUD truly begins.`,isPlaceholder:!1},{id:2,title:"The Man I Never Met",content:`There is one person who has had a profound influence on my life, even though I never had the opportunity to meet him.

My grandfather.

Everything I know about him came from my father.

Interestingly, whenever my father spoke about his own father, he rarely began by talking about agarwood.

He rarely spoke about business.

He rarely spoke about money.

He rarely spoke about success.

Instead, he always spoke about the kind of man he was.

My father described him as one of the kindest people he had ever known.

He was a simple man.

Not simple because he lacked knowledge.

Simple because he lived without pretending to be something he wasn't.

He trusted people.

Sometimes more than he probably should have.

He believed what people told him.

He saw the good in others before he looked for the bad.

He loved his family deeply.

Whenever I asked my father about his childhood, I expected to hear stories about discipline or strictness.

Instead, I heard stories about kindness.

I don't remember my father ever telling me that his father beat him.

I don't remember stories of fear.

I remember stories that always ended with admiration.

Looking back today, I realise something very important.

The greatest lessons my grandfather left behind had nothing to do with agarwood.

They had everything to do with character.

Knowledge can be learned.

Skills can be practiced.

Experience comes with time.

Character is different.

Character is what determines how knowledge is used.

My grandfather understood agarwood.

He knew forests.

He knew how to recognise extraordinary material.

But what my father admired most was never his knowledge.

It was the way he treated people.

That tells me everything I need to know about the kind of man he was.

Sometimes I wonder what it would have been like to sit beside him.

To travel with him.

To hear his stories directly instead of through someone else.

I wonder what he would think if he could see how far our family's journey has come.

Would he recognise today's world of perfume?

Would he recognise the forests?

Would he recognise the way agarwood is traded today?

I don't know.

But I hope he would recognise something much more important.

The values.

Because I believe those values have survived.

Not perfectly.

No family is perfect.

But they survived.

They travelled from my grandfather...

To my father...

And eventually...

To me.

People often think an inheritance is something you can hold in your hands.

Money.

Land.

Jewellery.

Businesses.

Those things matter.

But I believe the greatest inheritance is something much harder to see.

It is the way one generation teaches the next how to look at the world.

My grandfather passed that way of seeing to my father.

My father passed it to me.

And today, whether I realise it or not, I am preparing to pass it to my own son.

Perhaps that is how legacies truly survive.

Not through what we own.

But through what we choose to preserve.

One story my father told me has stayed with me for my entire life.

It is a story that, in many ways, explains my grandfather better than any description ever could.

It is not a story about finding extraordinary agarwood.

It is not a story about business.

It is not a story about success.

It is simply a story about honesty.

And it began one afternoon, when my grandfather stopped beside a small village pond to perform his prayer.`,isPlaceholder:!1},{id:3,title:"The Staircase",content:`Many years ago, long before Bangladesh became an independent country, my grandfather was travelling on horseback through the countryside.

Life was very different then.

People travelled slowly.

Villages were small.

If the time for prayer arrived while you were travelling, it was perfectly normal to stop at a nearby home and politely ask for water to perform your ablution.

On that particular day, my grandfather approached the home of a Hindu family.

He greeted them respectfully and asked if he could use the water from their pond before praying.

Without hesitation, they welcomed him.

He tied his horse nearby and walked towards the pond.

Like many village ponds, wooden steps had been built leading down into the water.

As he walked down those steps, something immediately caught his attention.

One of the steps wasn't ordinary timber.

It was agarwood.

The family had no idea.

To them, it was simply another piece of wood.

But my grandfather recognised it instantly.

People sometimes ask me how he could possibly know.

The answer is simple.

Agarwood was already part of his life.

He had spent so much time around it that he recognised it immediately, even after it had been cut, weathered and used as part of a staircase.

He completed his ablution.

He stood and performed his prayer.

Only after he had finished did he return to the owner of the house.

He thanked him for his kindness.

Then he asked a question.

"If I build you a new staircase with stronger wood, would you allow me to take these steps?"

The owner happily agreed.

True to his word, my grandfather replaced the entire staircase before taking the agarwood away.

He never took advantage of the family's lack of knowledge.

He never tried to deceive them.

He never allowed his own knowledge to become an excuse for dishonesty.

That story has stayed with me ever since my father first told it to me.

Not because it is about finding agarwood.

But because it reminds me that knowledge only has value when it is guided by character.

Today, whenever I think about my grandfather, this is the story that comes to mind first.

I never met him.

I never heard his voice.

I never travelled beside him.

Yet somehow, through one simple story, I feel as though I know the kind of man he was.

And perhaps that is the greatest gift stories can give us.

They allow us to meet people we were never fortunate enough to know.`,isPlaceholder:!1},{id:4,title:"An Inheritance Beyond Wood",content:`When people hear the words family legacy, they often imagine land, businesses or wealth.

I don't.

When I think about my family's legacy, I think about something much more difficult to preserve.

A way of seeing.

Looking back today, I realise that my family never taught me to chase agarwood.

They taught me to respect it.

There is a very big difference.

Respect changes the way you make decisions.

Respect teaches patience.

Respect teaches honesty.

Respect teaches you that nature is never something to conquer.

It is something to learn from.

As a child, I didn't understand those lessons.

I wasn't sitting beside my father taking notes.

I wasn't following my grandfather through forests.

Most of what I learned happened without anyone trying to teach me.

It happened while I was simply living.

It happened while watching my father spend hours smelling the same oud oil.

It happened while listening to conversations I was far too young to understand.

It happened while walking through rooms filled with pieces of agarwood that today I would feel privileged just to see again.

At the time, none of it seemed unusual.

It was simply my life.

Only years later did I realise that my education had already begun.

People often ask me how I learned to recognise agarwood.

How I learned to judge quality.

How I developed my nose.

The truth is...

I don't remember learning.

I remember living.

That is the greatest difference.

Knowledge passed through books is valuable.

Knowledge passed through generations becomes part of who you are.

Sometimes I ask myself what my father truly inherited from his father.

Was it agarwood?

Perhaps.

Was it knowledge?

Certainly.

But I think he inherited something even greater.

Curiosity.

The curiosity to keep searching.

The curiosity to question accepted ideas.

The curiosity to travel to another forest simply because someone whispered that something extraordinary had been found there.

That same curiosity eventually found its way into me.

It is the reason I still ask questions today.

Why does this origin smell different?

Why does this oil remind me of the wood while another one doesn't?

Why do some materials move us so deeply?

Those questions have shaped my life far more than answers ever have.

If there is one thing I hope to pass on to my own son one day, it is not simply knowledge.

Knowledge can always be learned.

I hope to pass on curiosity.

Because curiosity is what keeps knowledge alive.

Without curiosity, traditions slowly disappear.

Without curiosity, craftsmanship becomes repetition.

Without curiosity, people stop asking whether something can be done better.

When I chose the name NUHOUD, many people assumed it was simply because it sounded beautiful.

It does.

But the reason is much deeper than that.

The name begins with my son, Nuh.

I wanted every bottle carrying the name NUHOUD to remind me why I am doing this.

Not for myself.

Not even for today.

But for the generations that come after me.

One day, Nuh may ask me,

"Why did you dedicate your life to perfume?"

When that day comes, I don't want to answer by showing him awards.

Or sales figures.

Or beautiful bottles.

I want to hand him this book.

I want him to understand that everything began long before I was born.

I want him to know his great-grandfather recognised agarwood where others saw only wood.

I want him to know his grandfather travelled across forests because knowledge mattered more than comfort.

I want him to know that his own grandfather, my father, built a life around curiosity, kindness and an uncompromising respect for agarwood.

And I want him to understand that my role was never to replace their legacy.

Only to continue it.

Perhaps that is the true meaning of inheritance.

Not receiving something.

But becoming responsible for it.

That responsibility eventually became NUHOUD.

It is not simply a perfume house.

It is not simply a collection of bottles.

It is a promise.

A promise to preserve the knowledge that came before me.

A promise to remain honest to nature.

A promise to continue asking questions.

A promise to keep learning.

And above all...

A promise that when my own son one day continues this journey, he will inherit far more than wood.

He will inherit the values that gave that wood meaning.

Because agarwood, extraordinary as it is, was never the greatest treasure my family passed down.

The greatest treasure was the way they chose to live.

And everything that follows in this book is my attempt to honour that gift.`,isPlaceholder:!1},{id:5,title:"The Boy Who Wore Agarwood",content:`Growing Up in a Different World

One of the strange things about childhood is that you never realise how unusual your life is while you are living it.

Whatever surrounds you every day simply becomes normal.

Only years later do you look back and realise that what felt ordinary to you was something most people would never experience in their lifetime.

That is exactly how I think about my childhood.

When I was young, I didn't think I was growing up in a family with a rare relationship to agarwood.

I thought every family had a father who spent hours smelling oud oils.

I thought every family had workers carrying extraordinary pieces of agarwood in and out of warehouses.

I thought every child knew the smell of fresh agarwood burning on charcoal.

To me, that was simply home.

I remember walking through my father's warehouse and seeing pieces of agarwood that today I would consider museum pieces.

At that time, they were simply pieces of wood lying around.

Workers carefully cleaned them.

Sorted them.

Packed them.

Customers came from different places to see them.

Collectors would spend hours sitting with my father discussing quality, origins and the personalities of different woods.

I never understood those conversations.

I was too young.

But I remember listening.

Without realising it, I was absorbing a language that would later become my own.

Sometimes I think that was my real education.

Not in a classroom.

But sitting quietly in the corner while extraordinary people spoke about extraordinary materials.

I remember watching my father hold a piece of agarwood in his hands.

He never rushed.

He would turn it slowly.

Look at it from different angles.

Sometimes he smelled the wood before saying anything.

Other times he remained completely silent.

As a child I wondered why something that looked like an ordinary piece of wood deserved so much attention.

Today I understand.

He wasn't looking at wood.

He was reading its story.

Every piece had travelled through forests.

Every piece carried years, sometimes decades, of nature's work.

Every piece deserved respect.

That lesson stayed with me.

Long before I understood perfume...

I learned to respect the material.

The Pendant

One of my favourite memories from childhood happened when I was around five or six years old.

Like many young boys, I wanted something to wear around my neck.

A pendant.

Most fathers would probably have taken their son to a jewellery shop.

My father did something completely different.

He walked over to a beautiful piece of dark agarwood and selected a small section from it.

Then he asked one of the craftsmen working with him to carve it into a pendant.

I still remember how proud I was to wear it.

At that age, I had absolutely no idea how valuable that little piece of agarwood really was.

To me, it wasn't rare.

It wasn't precious.

It was simply my necklace.

I wore it everywhere.

Sometimes I became so used to wearing it that I forgot it was even there.

More than once, I left it inside my pocket when my mother washed my clothes.

Every time it came out of the washing machine it looked different.

The rich dark colour had faded.

It almost looked white.

I thought I had ruined it.

But something interesting always happened.

After wearing it again for a few days, after carrying it in my pocket and touching it with my hands, the colour slowly returned.

Little by little it became dark again.

Almost black.

At the time I simply found that interesting.

Today, I realise how beautiful that memory really is.

Even that small piece of agarwood seemed alive.

The Photograph

Many years later, while looking through old family photographs, I came across a picture of myself standing beside an enormous piece of agarwood.

When I first looked at that photograph as an adult, I smiled.

Not because of how young I looked.

Because of what the photograph represented.

To anyone else, that piece of agarwood would be extraordinary.

To me...

It was simply another day.

That single photograph says something words cannot fully explain.

It reminds me that my relationship with agarwood did not begin when I became a distiller.

It did not begin when I created my first perfume.

It did not begin when I started travelling through forests.

It began long before I understood any of those things.

It began in childhood.

Sometimes people tell me,

"You were lucky."

Perhaps they are right.

But I don't think luck alone explains it.

I believe I was entrusted with something.

The opportunity to grow up surrounded by one of nature's greatest creations.

With that opportunity came responsibility.

The responsibility to continue learning.

To continue asking questions.

And one day...

To continue preserving it.

The Craftsmen

Some of my earliest memories are not only of agarwood.

They are of the people who dedicated their lives to it.

Most of the craftsmen who worked for my father came from our own village.

To many people, they were simply workers.

To me, they were artists.

They understood agarwood in a way that very few people ever could.

Every piece that entered my father's warehouse was handled with patience and respect.

Cleaning agarwood is not simply about removing unwanted parts.

It is about revealing the beauty that is already inside the wood.

That was something my father understood better than anyone.

He always believed that if a piece of agarwood was truly beautiful, then the way it was presented should reflect that beauty.

He would walk through the warehouse, stopping beside each craftsman, carefully inspecting the work.

Sometimes he would pick up a finished piece, run his hand across it and quietly hand it back.

"No..."

"It can still be better."

The craftsmen would laugh.

Sometimes they would joke among themselves.

"Uncle wants us to clean it even more."

"It already looks perfect."

"It doesn't need any more work."

But my father never accepted "good enough."

For him, every detail mattered.

I still remember one of his favourite jokes.

Whenever he felt a piece had not been finished properly, he would smile and tell the craftsman,

"Keep polishing it."

"When I come back, I'm going to rub it on your face."

"If it scratches your skin, then you haven't finished your job."

Everyone laughed.

It became one of those jokes that people remembered.

But behind the humour was something much deeper.

He wasn't really talking about someone's face.

He was teaching a philosophy.

Luxury should never feel unfinished.

If you are fortunate enough to work with something extraordinary, then your responsibility is to present it in the most beautiful way possible.

That lesson stayed with me.

Today, whenever I prepare a bottle, choose a piece of agarwood or even think about packaging, I often remember those moments.

Not because I hear my father's voice.

But because I understand what he was trying to teach us.

Respect the material.

Never rush the finishing.

Beauty deserves patience.

That philosophy has followed me far beyond agarwood.

It has followed me into perfumery.

People often ask me why I spend so much time perfecting tiny details that many customers may never even notice.

The answer is simple.

Because someone taught me that details matter.

Not because they make something more expensive.

Because they show respect.

Respect for the material.

Respect for the person who will eventually hold it in their hands.

Sometimes I think the craftsmen believed they were simply cleaning agarwood.

Looking back today, I realise they were helping shape the standards I still carry with me.

The Smell of the Warehouse

Every workshop has its own smell.

A bakery has the smell of fresh bread.

A leather workshop has the smell of leather.

A carpenter's workshop carries the scent of fresh timber.

My father's warehouse had a smell unlike anything I have experienced anywhere else.

Even today, if I walk into an old warehouse in Singapore or Indonesia, especially one filled with high-grade Kalimantan or Malaysian agarwood, I stop for a moment.

I close my eyes.

And for a few seconds...

I am a child again.

It is difficult to describe that smell because it is not the smell most people imagine when they think about agarwood.

It was not the smell of freshly cut wood from the jungle.

It was not the smell of wet earth.

It was not even the smell of burning agarwood.

It was something completely different.

It was the smell of dry, mature, high-grade agarwood quietly filling an entire room.

A deep, clean and comforting aroma.

Dry...

Yet incredibly alive.

The kind of smell that only exists when hundreds of exceptional pieces have rested together for years.

That smell became part of my childhood.

It filled the warehouse every day.

Sometimes there would be craftsmen carving large sculptures from agarwood for important clients.

Sometimes they were polishing collector's pieces.

Sometimes they were preparing gifts that would eventually travel to royal families, collectors and people who truly appreciated exceptional agarwood.

There was always work.

Always conversation.

Always laughter.

Always the sound of sandpaper gently moving across wood.

And always...

That smell.

At the time, I thought every warehouse in the world smelled like that.

Today I know how rare that experience really was.

Perhaps that is why scent has never been just scent to me.

Every smell carries a place.

Every smell carries a memory.

And no smell carries me back to childhood more quickly than walking into a warehouse filled with beautiful agarwood.

Looking Back

As a child, I never imagined that my life would revolve around agarwood.

In fact, there was a time when I believed I would never work in this world.

I wanted to find my own path.

Looking back now, I smile when I think about that.

Because perhaps my path had already begun long before I realised it.

Sometimes life prepares us quietly.

Without announcements.

Without plans.

Without us even noticing.

Years later, when people ask me where my journey with agarwood started, they expect me to tell them about my first distillation or my first successful perfume.

I usually smile.

Because the truth is much simpler.

It started with a little boy...

Who thought every family had agarwood lying around the house.

Who thought every father spent hours smelling oud oils.

Who thought every warehouse was filled with extraordinary wood.

Who proudly wore a pendant carved from agarwood without knowing how rare it really was.

Only much later did that little boy realise...

He hadn't just grown up around agarwood.

He had grown up inside a legacy.`,isPlaceholder:!1},{id:6,title:"The Man Who Taught Me Oud",content:`A Boy Who Chose the Forest

There are people who teach by giving answers.

My father taught by making me ask better questions.

When people ask me where my knowledge of agarwood comes from, they often imagine years of formal training.

They imagine someone sitting beside me, explaining different species, different origins, different grades and different distillation techniques.

That never happened.

My education happened quietly.

Without lessons.

Without notebooks.

Without anyone announcing that I was learning.

It happened simply because I was my father's son.

Every day I watched him.

Every day I listened.

Every day I absorbed things that, at the time, I didn't even realise were important.

Looking back today, I realise that my father never tried to make me love agarwood.

He simply lived his life with such passion that it became impossible not to notice.

He wasn't fascinated by agarwood because it was valuable.

He was fascinated because he believed nature still had secrets waiting to be discovered.

That curiosity defined his entire life.

He wasn't born into wealth.

Everything he built came through hard work.

Long before he became known for exceptional agarwood, he was simply a young boy trying to create a better future.

When he was only thirteen years old, he left what is now Bangladesh and crossed into India.

Life was completely different then.

Borders were different.

Travel was different.

The world itself felt different.

Like many young boys at that time, he worked wherever opportunity appeared.

One of those jobs involved transporting tea across the border.

Many people would remember that period simply as work.

My father remembered something else.

The forests.

It was during those journeys that he began discovering the forests of Assam.

While others saw difficult terrain...

He saw possibility.

He became fascinated by agarwood.

Not simply because it was valuable.

Because he couldn't stop wanting to understand it.

That curiosity never left him.

The more he learned...

The more he wanted to know.

The more forests he visited...

The more he realised every forest had its own story.

Every tree had its own character.

Every piece of agarwood had its own personality.

For many people, that would have been enough.

For my father...

It was only the beginning.

He wasn't interested in becoming someone who simply traded agarwood.

He wanted to become someone who truly understood it.

That difference shaped the rest of his life.

People sometimes ask me why I continue travelling today.

Why I continue searching.

Why I continue asking questions.

The answer is very simple.

Because I inherited more than my father's knowledge.

I inherited his curiosity.

Sometimes I think curiosity is the greatest gift one generation can give the next.

Knowledge eventually becomes old.

Markets change.

Forests change.

Even agarwood changes.

But curiosity continues searching.

And as long as curiosity survives...

Discovery never ends.

Curiosity Above Comfort

There are people who travel because they have to.

There are people who travel because they want to see the world.

My father travelled because he could not stop asking questions.

Whenever someone told him about a new forest, a new region or a new type of agarwood, something inside him came alive.

He simply had to see it for himself.

That curiosity became the compass that guided his entire life.

He was never satisfied with buying agarwood from someone else's collection.

He wanted to know where it came from.

He wanted to see the forest.

He wanted to meet the people who found it.

He wanted to understand why one tree smelled different from another.

For him, the journey was just as important as the destination.

Long before travelling became comfortable, he travelled constantly.

He crossed borders.

He spent days in forests.

He stayed in villages where life was completely different from the cities.

There were no maps.

No mobile phones.

No internet.

Knowledge travelled from person to person.

Story to story.

Forest to forest.

That was the world he belonged to.

One of the stories he often shared with me was about the forests of Bangladesh and Assam.

People often imagine that finding agarwood simply meant walking into a forest and cutting down a tree.

The reality was very different.

Every forest had its own people.

These were the families who had lived there for generations.

They knew every path, every river, every mountain and every tree.

If you wanted to enter their forests and harvest agarwood, you first had to earn their trust.

Money alone was often meaningless to them.

Many of these communities lived deep inside the jungle.

They had little use for wealth in the way people in cities understood it.

Instead, they valued things that were rare to them.

Things that came from another forest.

Things they could not easily find themselves.

My father understood something that many outsiders never did.

He understood that respect opens more doors than money ever will.

Before travelling to the forests of Assam, he would often carry unusual things from the forests of Bangladesh.

Not because they were expensive.

Because they were interesting.

When he reached the people living in Assam, he would exchange these gifts, build friendships and spend time with them.

On another journey, he might do the opposite, taking something from Assam back to people living in Bangladesh.

To many people, these may seem like simple exchanges.

To my father, they were something much greater.

They were relationships.

And relationships were the true key to the forest.

He never spoke about the people of the jungle as though they were simply suppliers.

He respected them.

He admired their knowledge.

He understood that they knew things no map could ever teach.

Without them, many of the greatest agarwood trees would never have been found.

Watching my father, I learned something that had nothing to do with agarwood.

The greatest opportunities in life rarely begin with transactions.

They begin with trust.

Even after he became successful, that never changed.

He never travelled believing he knew everything.

He travelled because he believed there was always something new to learn.

Perhaps that is what made him different.

He wasn't chasing agarwood.

He was chasing understanding.

That same curiosity shaped every stage of his life.

From the forests of Assam...

To the markets of Bombay...

To the collectors of Singapore...

He was always learning.

Always asking.

Always searching.

Looking back today, I realise that curiosity was the greatest inheritance my father ever gave me.

It is the reason I still travel.

It is the reason I still distil.

It is the reason I still ask questions that many people no longer ask.

Whenever someone tells me about a new origin, a forgotten material or a different way of understanding perfume, I feel the same excitement I used to see in my father's eyes.

Sometimes I smile when I notice that.

Because in those moments, I realise that I am not only continuing his work.

I am continuing his curiosity.

And perhaps curiosity is the greatest inheritance a father can ever leave his son.

The Eye That Saw What Others Couldn't

One of the greatest lessons my father ever taught me happened without him even trying to teach me.

I was around ten years old when he took me on my first real buying trip.

It was just the two of us.

We travelled to Singapore.

At that age, I didn't fully understand what we were doing there.

I simply knew that my father was looking for agarwood, and I was excited to be travelling with him.

Looking back today, I realise that this was my first real oud hunting trip.

Singapore was one of the great meeting places for agarwood.

Collectors, traders and hunters from different countries gathered there, bringing extraordinary pieces from all over Southeast Asia.

For my father, it wasn't simply a market.

It was another classroom.

Another opportunity to discover something he had never seen before.

I remember walking into one of the warehouses with him.

There were piles of agarwood everywhere.

Some pieces were beautiful.

Some ordinary.

Some looked almost identical to my inexperienced eyes.

To my father, every piece was different.

He asked the owner a simple question.

"How much is this per kilogram?"

The owner replied,

"Four thousand dollars."

I stood quietly beside my father, expecting him to begin negotiating.

Instead, he surprised me.

Without hesitation he said,

"I'll give you six thousand."

I remember looking at him in complete confusion.

Even as a child, I couldn't understand what had just happened.

Why would anyone offer more than the asking price?

Wasn't the whole point of buying to negotiate a lower price?

For a moment, I genuinely thought my father had made a mistake.

But he hadn't.

He smiled and added one condition.

"I will pay six thousand."

"But I will choose every single piece myself."

The owner agreed.

Then I watched something I would only understand many years later.

My father didn't rush.

He walked slowly through the collection.

He picked up one piece after another.

He turned each one over in his hands.

He smelled some.

He rejected most.

Occasionally he placed one aside.

Then he continued searching.

To me, they all looked like agarwood.

To him, they were completely different.

He wasn't buying a pile of wood.

He was searching for the few pieces that everyone else had overlooked.

Hours passed.

He continued selecting.

Patiently.

Confidently.

Without asking anyone's opinion.

Looking back today, I finally understand what happened.

My father wasn't paying an extra two thousand dollars for agarwood.

He was paying for the opportunity to exercise his knowledge.

He knew that if he could choose freely, the pieces he selected would be worth far more than the additional money he had paid.

He wasn't negotiating price.

He was investing in confidence.

At the time, I thought the lesson was about buying.

Years later, I realised it was about something much deeper.

Knowledge changes the way you see value.

Two people can stand in front of exactly the same collection.

One sees a pile of wood.

The other sees masterpieces hidden among it.

Nothing has changed except the eyes that are looking.

That lesson has stayed with me throughout my own journey.

People often ask me why I spend so much time searching for one particular piece of agarwood.

Why I reject so many pieces before choosing one.

Why I sometimes travel so far only to return with very little.

The answer is simple.

Because extraordinary materials have always been rare.

My father taught me that.

He never believed in buying more.

He believed in buying better.

Quality was never measured by quantity.

It was measured by how close a material came to perfection.

Today, whenever I walk through a warehouse filled with agarwood, I sometimes remember that day in Singapore.

I remember standing beside my father, wondering why he would willingly pay more than he had to.

Now, I smile.

Because I finally understand.

The most expensive thing he bought that day wasn't agarwood.

It was the freedom to trust his own eye.

And that eye was something no amount of money could ever buy.

Looking back today, I realise that what made my father different was not simply his knowledge of agarwood.

It was his confidence.

He trusted his own eyes.

He trusted his own nose.

Most people buy what the market already believes is valuable.

My father was the opposite.

He never waited for the market to tell him what was beautiful.

He decided that for himself.

If he discovered a remarkable piece of agarwood from a region that people ignored, he didn't hesitate.

He bought it.

He studied it.

He believed in it.

He never worried whether people would appreciate it immediately.

He believed that if something was truly extraordinary, appreciation would eventually follow.

That was one of the qualities I admired most about him.

He wasn't chasing opinions.

He wasn't chasing trends.

He was chasing truth.

Over the years, that way of thinking allowed him to introduce people to agarwood they had never experienced before.

Some origins that were almost unknown in our part of the world eventually became appreciated because people like my father believed in them long before anyone else did.

He taught me something I have never forgotten.

Never let the market decide your standards.

Let your standards educate the market.

That lesson has stayed with me throughout my own journey.

Sometimes people ask me why I continue creating perfumes that contain materials many people have never experienced before.

Why I insist on using genuine natural ingredients when there are easier and cheaper alternatives.

Why I spend years developing a single perfume.

The answer is very simple.

Because I inherited the same way of thinking.

I don't want to create what people already expect.

I want to introduce them to something they didn't know was possible.

If I truly believe in a material...

If I truly believe in a perfume...

Then I am willing to wait.

Because appreciation takes time.

My father used to say very little about these things.

He simply lived them.

Today, I often find myself making decisions exactly the way he would have.

Not because I am trying to become him.

But because I finally understand the wisdom behind the way he lived.

Perhaps the greatest lesson he ever taught me was this:

Never ask what the market wants.

Ask what is truly beautiful.

If your answer is honest enough, the market will eventually understand.

That Grade No Longer Exists

Some lessons stay with you because someone explains them.

Others stay with you because you witness them.

This is one of the moments I will never forget.

By this time I had already started my own journey in agarwood.

I had travelled to India, purchased my own wood and was beginning to understand the business for myself.

Like any young man starting out, I was excited.

I believed I had found beautiful Indian agarwood.

I couldn't wait to show it to people.

There was one customer in particular I wanted to meet.

He was one of my father's oldest clients.

A man of very high rank in Dubai.

Someone who had spent decades buying only the finest agarwood.

I remember asking my father,

"Why don't we go and show him what I've bought?"

My father smiled.

Then he looked at me and said,

"I don't think he will like it."

I was surprised.

I looked at the wood again.

To me, it was beautiful.

I asked him why.

He simply replied,

"He is used to a different grade."

At the time, I didn't fully understand what he meant.

I kept insisting until finally he agreed.

"Alright," he said.

"Let's go."

When we arrived at the building, I remember being amazed.

Normally, someone in his position required an appointment.

People waited to meet him.

But my father simply walked inside.

No appointment.

No introductions.

Everyone knew him.

The security greeted him.

The staff greeted him.

It was obvious that he wasn't arriving as a customer.

He was arriving as an old friend.

That was something I had never seen before.

When we entered his office, they greeted each other warmly.

Then, almost immediately, the man looked at my father, smile and said,

"You're a liar."

I remember being completely shocked.

For a second I didn't know how to react.

Then he continued laughing.

"I've been looking for you everywhere."

"Even the Prime Minister has been asking about you."

"You keep promising me another bottle of that Hindi oud oil."

"But every time you disappear."

My father smiled.

He wasn't offended.

He knew exactly what his friend meant.

Then he quietly answered with a sentence I have never forgotten.

"I'm sorry."

"That grade of wood no longer exists."

"How can I make the same oil if the wood itself no longer exists?"

The room became quiet.

At that moment, I didn't fully understand the weight of those words.

Today...

I understand them completely.

My father could easily have made another oil.

He could have called it the same thing.

He could have convinced people it was close enough.

Many people would have done exactly that.

He refused.

Because for him, honesty mattered more than business.

If nature had changed...

Then the truth had changed.

And he was never willing to lie about that.

After a while, my father introduced me.

"This is my son."

"He has brought some Indian agarwood."

The gentleman smiled.

He was kind enough to give me his time.

He selected one of my pieces and placed it on the charcoal.

The room slowly filled with its aroma.

He closed his eyes for a moment.

Smelled it carefully.

Then opened his eyes and smiled.

"I like the smell."

For a moment, I felt relieved.

Then he continued.

"But I don't like how it looks."

He reached across his desk and picked up another piece.

It was almost black.

Dense.

Shining.

It looked as though someone had polished it with oil, yet it was completely natural.

He placed it beside mine.

Then he looked at my father and said,

"This..."

"This is the oud I used to buy from you."

I remember looking at that piece in complete silence.

Until that moment, I had never truly understood the level my father had worked at.

The wood I had proudly brought with me suddenly looked ordinary.

Not because it wasn't beautiful.

Because I had just seen something extraordinary.

That meeting changed me.

It taught me that there are moments when you must be honest enough to admit that something cannot be recreated.

Nature moves forward.

Forests change.

Trees disappear.

Some grades belong to a particular time in history.

Once they are gone...

They are gone.

My father never tried to replace those moments.

He chose to honour them.

Looking back today, I think that is one of the greatest lessons he ever gave me.

Never promise what nature cannot deliver.

Respect what existed.

Protect what still remains.

And never lower your standards simply because the world has forgotten what true quality once looked like.

That lesson has guided every decision I have made since.

When people ask me why I release only limited quantities...

Why I refuse to rush a perfume...

Why I sometimes spend years searching for the right material...

The answer often brings me back to that office.

To that conversation.

And to one sentence that has never left me.

"That grade of wood no longer exists."

Those words taught me something that no book ever could.

The rarest ingredient in perfumery is not oud.

It is honesty.

More Than a Businessman

If you asked people who knew my father what he did for a living, most would probably tell you that he was an agarwood hunter.

Some would say he was a trader.

Others would remember him as a perfumer.

All of those answers would be true.

But none of them would describe who he really was.

To me...

He was simply my father.

The older I become, the more I realise that what made him extraordinary had very little to do with agarwood.

It had everything to do with the way he treated people.

He had a very special way of making everyone feel comfortable.

Whether you were one of his oldest clients, one of his workers, or someone he had just met for the first time, he treated you exactly the same.

He never believed business should create distance between people.

He believed business should create friendship.

That is why so many of his customers eventually became his friends.

Even today, years after he is gone, I still meet people who don't begin by talking about the agarwood they bought from him.

They begin by talking about him.

They remember his smile.

His humour.

His honesty.

The way he made them laugh.

The way he welcomed them.

The way he spoke to them.

That tells me something.

People eventually forget what they bought.

They rarely forget how someone made them feel.

My father understood that without ever trying.

He was also one of the funniest people I have ever known.

His humour was never loud.

It was quiet.

Dry.

Sometimes sarcastic.

Even in the warehouse, while everyone was working, he was always making jokes.

He was teaching them to respect it.

He believed that if nature had created something beautiful, then the person preparing it had a responsibility to present it in the most beautiful way possible.

Nothing should leave the workshop unfinished.

Nothing should look careless.

Luxury begins with respect.

That lesson stayed with me.

Even today, whenever I hold a finished bottle in my hands, I often think about those moments.

Perfection is not an accident.

It is the result of caring about details that many people never notice.

One of the things that makes me proudest of my father has nothing to do with agarwood.

It is the lives he changed.

He came from a humble background.

He knew what it meant to struggle.

Perhaps that is why success never changed him.

As his business grew, he never forgot where he came from.

Many of the people from our village built better lives because of him.

He gave them opportunities.

He trusted them.

He taught them.

He helped them build businesses of their own.

Some of them became very successful themselves.

He never spoke about these things.

He never looked for recognition.

Helping people was simply part of who he was.

Looking back now, I realise something beautiful.

The wealth he created wasn't measured only by what he owned.

It was measured by how many other families were able to build a better future because he chose to help them.

That is a very different kind of success.

When I think about my father today, I don't first remember the rarest agarwood he ever found.

I don't first remember the countries he travelled to.

I don't first remember the extraordinary pieces that passed through his hands.

I remember the man.

A man who remained curious until the very end.

A man who believed honesty was worth more than profit.

A man who never lowered his standards simply because the world had changed.

A man who laughed often.

A man who treated workers with dignity.

A man who treated customers as friends.

A man who believed that if something was worth doing, it was worth doing properly.

Sometimes people ask me what I inherited from him.

Of course, I inherited knowledge.

Of course, I inherited experience.

But those things are not what I value most.

The greatest inheritance my father left me was his character.

Because knowledge can be learned.

Experience comes with time.

Character...

Character is something a father teaches without ever needing to say a word.

Today, whenever I find myself making a difficult decision, I often stop and ask myself a simple question.

"What would my father have done?"

More often than not...

I already know the answer.

Because I spent my whole life watching him live it.

If He Could Smell Tamed Ghalia

People sometimes ask me what the greatest compliment I could ever receive would be.

They expect me to say winning an award.

Being recognised by famous perfumers.

Selling every bottle we produce.

Or hearing someone call it the greatest perfume they have ever smelled.

Those things are wonderful.

But none of them would be my greatest compliment.

If I could choose one moment...

Just one...

I wouldn't choose standing on a stage.

I would choose sitting quietly beside my father.

Just the two of us.

Exactly the way we used to sit when he smelled agarwood.

I wouldn't tell him anything about the perfume.

I wouldn't explain the ingredients.

I wouldn't tell him how long it took me to create it.

I wouldn't even tell him its name.

I would simply place the bottle in his hand.

Then I would wait.

He was never someone who rushed when smelling something important.

He would spray it once.

Smell it.

Wait.

Smell it again.

Sometimes he wouldn't say anything for a while.

I learned from him that silence is often part of smelling.

The material deserves time to speak before we do.

As he continued smelling it, I think I already know what he would be looking for.

Not whether it smelled expensive.

Not whether it was fashionable.

He would be searching for honesty.

He would ask himself one question.

"Is this real?"

Does the oud still feel like oud?

Does the rose still feel like rose?

Do the animalic materials still carry their natural soul?

Has the perfumer respected the materials...

Or tried to force them into becoming something they were never meant to be?

Those are the questions I imagine he would quietly ask himself.

If, after all of that, he looked at me and smiled...

And simply said,

"Give me two bottles."

"One for my collection."

"And one to wear every day."

I think I would consider my work complete.

Not because he was my father.

Because there is nobody in this world whose opinion I value more.

Everything I know about agarwood began with him.

Everything I know about respecting materials began with him.

Everything I know about patience, honesty and quality began with him.

If he approved of my work...

I wouldn't need another compliment.

Sometimes I wonder what he would think if he could see where this journey has taken me.

Would he smile knowing that I became a distiller?

Would he laugh and tell me I still have more to learn?

Would he ask me a hundred questions about every ingredient?

I honestly don't know.

But I do know one thing.

He would never judge the perfume by its price.

He would never judge it by its packaging.

He would never judge it by how many bottles it sold.

He would judge it the only way he ever judged anything.

By closing his eyes...

Taking his time...

And listening to what the perfume had to say.

That thought has stayed with me throughout the creation of every perfume I have made.

Whenever I find myself making a decision, adding another material, removing something, or wondering whether a perfume is truly finished, I often imagine that moment.

I imagine handing the bottle to my father.

If I don't feel proud enough to place it in his hands...

Then it isn't ready.

That has become one of my highest standards.

Not because my father is here to judge my work.

But because the standards he taught me are.

In many ways, every perfume I create is still trying to answer one quiet question.

Would my father be proud of this?

Perhaps I will never hear his answer.

But every time I finish a perfume that truly feels honest...

Every time I smell something that reminds me of the forests, the warehouses, the charcoal and the childhood he gave me...

I like to believe that, somewhere, he already knows.

What He Left Me

When people ask me what my father left behind, they often imagine agarwood.

Or knowledge.

Or a business.

Of course, he left me those things.

But the greatest things he left me cannot be held in my hands.

He left me a way of thinking.

He taught me to question everything.

He taught me to trust my own senses.

He taught me that nature always tells the truth, if we are patient enough to listen.

One lesson has stayed with me more than almost any other.

It is something I still practice today.

When my father wanted to judge an oud oil, he didn't begin by asking for documents.

He didn't have laboratory reports.

There were no GC-MS analyses.

No certificates.

No scientific reports.

In those days, there was only experience.

He would place a small amount of the oil on his skin.

Then he would smell it.

Not casually.

He would take a deep breath.

A very deep breath.

He would inhale the aroma as deeply as he possibly could.

Then he would pay attention to something very few people ever think about.

How did his body respond?

He taught me something I have never forgotten.

If the oil was truly natural...

If nothing foreign had been added...

Your body would accept it.

You could inhale it deeply without discomfort.

Without resistance.

Your body welcomed it.

But if something unnatural had been mixed into the oil...

Something synthetic.

Something that didn't belong there...

Your body would quietly reject it.

Perhaps not dramatically.

Perhaps so subtly that most people would never notice.

But he believed the body always knew.

As a young man, I accepted this because my father taught it to me.

Today, I understand it differently.

The more I learn about perfumery...

The more I work with natural materials...

The more I realise there is wisdom inside that simple observation.

We are part of nature.

Our bodies have evolved surrounded by natural materials.

Perhaps that is why truly natural materials often feel so comfortable to breathe.

Perhaps that is why our senses quietly notice when something does not belong.

I still use that lesson today.

Not only with oud oils.

With rose.

With sandalwood.

With jasmine.

With many natural materials I work with.

Of course, modern science has given us extraordinary tools.

Laboratories can answer many questions that previous generations could not.

I respect those tools.

They are valuable.

But I have also learned that experience remains valuable too.

Sometimes, before I look at any report...

Before I study any analysis...

I simply smell.

I breathe.

I listen.

Just as my father taught me.

That lesson has shaped me far beyond perfumery.

It reminds me that knowledge is not only something we read.

Sometimes...

Knowledge is something we learn by paying attention to what our own senses are trying to tell us.

When I think about everything my father left me, I realise something.

He didn't simply teach me about agarwood.

He taught me how to observe.

How to question.

How to trust nature.

And perhaps that is the greatest inheritance a father can leave his son.`,isPlaceholder:!1},{id:7,title:"The Day Oud Became an Experience",content:`I Never Wanted This Life

One of the biggest surprises in my life is that I once believed I would never work with agarwood.

People often assume that because I grew up surrounded by oud, I must have always dreamed of continuing my family's work.

The truth is exactly the opposite.

As a teenager, I wanted to find my own path.

I respected what my father had built.

I admired the life he had created.

But I wanted to become successful in my own way.

Perhaps that is something many sons feel.

You want to build something that belongs to you.

Not because you reject your father's legacy.

But because you want to prove to yourself that you can create one of your own.

At that time, agarwood was simply part of my everyday life.

It was everywhere.

Because it was everywhere, I rarely stopped to appreciate how extraordinary it really was.

Sometimes, the things we grow up with become almost invisible.

We only realise their value when something changes the way we see them.

For me...

That moment came unexpectedly.

The Piece From Lamding

I still remember the day clearly.

I was around seventeen or eighteen years old.

One day my father called me into his office.

He had a piece of Indian agarwood resting beside a charcoal burner.

It was not an ordinary piece.

It came from the Lamding region of Assam.

A place that has produced some of the finest agarwood the world has ever known.

The story behind that piece made it even more special.

My father told me it had been found by a very poor man.

The tree itself was believed to be one of the oldest and rarest ever discovered in that region.

When my father heard about it, he didn't buy it because he wanted to sell it.

He bought around one hundred grams simply because he wanted to experience it.

To study it.

To understand it.

To wear it.

That was the kind of person he was.

Sometimes he bought agarwood not as a businessman...

But as a student of nature.

As I entered his office, he placed a small piece onto the charcoal.

The room slowly filled with smoke.

He looked at me and said,

"Come here."

"Smell this."

I leaned forward.

He didn't ask me to smell the wood.

He asked me to inhale the smoke itself.

So I did.

I took a deep breath.

It smelled beautiful.

Rich.

Deep.

Comforting.

I nodded.

Then I left.

At that moment, I thought nothing more about it.

I had no idea that the next few hours would quietly change my life.

The Ride Home

A little while later, my friends arrived to pick me up.

Like most teenagers, we climbed into the car and immediately started talking.

Everyone was laughing.

Arguing.

Discussing things that felt incredibly important at that age.

Normally, I would have been right in the middle of those conversations.

But that day...

Something was different.

I remember sitting quietly in the back seat.

Listening.

But not really listening.

My mind was somewhere else.

I could still smell the agarwood.

Not faintly.

Clearly.

It felt as though someone was still burning that same piece of agarwood beside me.

Again and again, I found myself wondering,

"What is this?"

"Why can I still smell it?"

The more I thought about it...

The less interested I became in the conversation happening around me.

That smell refused to leave me.

For the first time in my life, I realised that agarwood was doing something I had never experienced before.

It wasn't simply creating a beautiful smell.

It was changing the way I felt.

I wasn't excited.

I wasn't sleepy.

I wasn't distracted.

I was... somewhere else.

Calm.

Present.

Completely absorbed by something I couldn't explain.

That was the moment everything changed.

It was the first time I understood that perfume is not only about smell.

Perfume is about emotion.

It is about memory.

It is about presence.

It is about the quiet space it creates inside us.

Looking back today, I think that drive home was one of the most important journeys of my life.

Not because of where I travelled.

But because of where my mind travelled.

That afternoon, without anyone intending to teach me...

Agarwood stopped being a material.

It became an experience.

A Different Way of Smelling

That afternoon stayed with me for years.

I never forgot it.

Even now, whenever I smell a truly exceptional piece of agarwood burning on charcoal, I remember that car ride.

I remember the silence.

I remember asking myself why one smell could remain with me long after the smoke had disappeared.

Years later, I finally found my own answer.

The greatest perfumes are not the ones that simply smell beautiful.

They are the ones that change something inside us.

They slow us down.

They create memories.

They make us feel present.

That is why, even today, I still believe there is no smell more beautiful than the very first aroma that rises from an exceptional piece of agarwood placed on hot charcoal.

Everything I have created since...

Every oud oil I have distilled...

Every perfume I have composed...

Has been my own attempt to preserve that moment.

Not just the smell.

The feeling.

Because real oud is not a smell.

It is an experience.`,isPlaceholder:!1},{id:8,title:"The Question That Changed Everything",content:`A Friend With an Extraordinary Nose

There are certain moments in life that seem ordinary while they are happening.

You don't realise they will stay with you forever.

Only years later do you look back and realise that your life quietly changed that day.

For me, one of those moments happened in 2012.

At the time, I was already working with agarwood.

I had travelled.

I had bought and sold oud.

I had spent years around collectors and some of the finest materials in the world.

But I still wasn't a distiller.

I wasn't trying to create oud oil.

I wasn't trying to solve any problem.

I was simply continuing my journey of learning.

One afternoon I went to visit one of my clients in Sharjah.

Today, I don't think of him as a client anymore.

He has become one of my closest friends.

He is older than me, and over the years I have come to respect him immensely.

Not only because of his character, but because he has one of the finest noses I have ever encountered.

Growing up in an Arab family where burning agarwood is part of everyday life gave him a deep understanding of scent.

But beyond that, he had something that cannot be taught.

He could recognise quality almost immediately.

He was never interested in ordinary agarwood.

It was almost impossible to impress him with commercial oud oils.

If he liked something, it meant something.

That is one of the reasons I always valued his opinion.

That day, he had just returned from Mumbai.

We sat together, talking as we usually did.

Then, without saying very much, he reached for a small bottle.

He handed it to me and simply asked,

"What do you think?"

He didn't tell me where it came from.

He didn't tell me who distilled it.

He didn't tell me what species it was.

He simply waited.

"This Is Sri Lankan"

I opened the bottle.

The moment the aroma reached me, I answered almost without thinking.

"This is Sri Lankan."

He smiled.

He hadn't told me anything.

There was no label.

No clue.

Just the smell.

People sometimes ask me how I knew.

The truth is...

I didn't recognise it because it smelled like Sri Lankan oud oil.

I recognised it because it smelled like Sri Lankan agarwood.

The moment I smelled that oil, I was reminded of placing a beautiful piece of Sri Lankan agarwood onto hot charcoal.

That first wave of aroma.

That unmistakable identity.

It was there.

For the first time in my life, I had smelled an oud oil that preserved the character of the wood so faithfully that my mind immediately recognised its origin.

I still remember sitting there thinking,

"This is exactly how it should be."

And then, almost immediately...

Another thought appeared.

One Question

That single bottle gave me a question that refused to leave my mind.

If a Sri Lankan oud oil can smell so faithfully like Sri Lankan agarwood...

Why can't every origin do the same?

Why shouldn't Indian oud oil smell exactly like Indian agarwood burning on charcoal?

Why shouldn't Cambodian oud oil preserve the identity of Cambodian agarwood?

Why shouldn't every origin carry the soul of the tree it came from?

The question seemed so simple.

Yet I couldn't answer it.

I wasn't disappointed.

I was fascinated.

The more I thought about it, the more I realised that perhaps we had accepted something we should have questioned.

Why had so many people become comfortable with oud oils that no longer reminded us of the wood itself?

Why had we accepted that this was simply the way oud oil should smell?

I couldn't stop thinking about it.

A Question That Refused to Leave

Life continued.

I went back to work.

I travelled.

I bought agarwood.

I met collectors.

Business continued exactly as before.

But something had changed inside me.

That question followed me everywhere.

Sometimes it would disappear for weeks.

Then I would smell a beautiful piece of agarwood on charcoal...

And it would return.

Sometimes I would smell an oud oil...

And ask myself the same question again.

"Where is the wood?"

The question wasn't about creating a better perfume.

It wasn't even about creating a better oud oil.

It was about honesty.

If nature had already created something so beautiful...

Why were we moving further away from it instead of closer to it?

For years I carried that question without knowing that one day it would completely change the direction of my life.

Nature Had Already Done the Hard Work

As the years passed, something became clearer and clearer to me.

I wasn't trying to invent a new smell.

Nature had already done that.

I wasn't trying to improve agarwood.

That would be impossible.

The smell I loved most had already been created.

The first aroma that rises from exceptional agarwood placed on charcoal...

Nothing has ever surpassed it for me.

The challenge was never creation.

The challenge was preservation.

How do you preserve that feeling?

How do you preserve that identity?

How do you place the soul of a tree into a bottle without losing what makes it extraordinary?

I didn't know the answer yet.

But I knew one thing.

I wanted to spend the rest of my life searching for it.

That question, born from one bottle handed to me by a friend in Sharjah, quietly became the beginning of everything that followed.

It was no longer just curiosity.

It had become a purpose.`,isPlaceholder:!1},{id:9,title:"The Search for the Perfect Oud Oil",content:`It Was Never the Plan

People often assume that becoming a distiller was always my dream.

The truth is, it wasn't.

If you had asked me years earlier whether I would one day be distilling my own oud oils, I probably would have smiled and said no.

It wasn't part of a carefully written business plan.

It wasn't even something I had seriously thought about.

Like many important moments in my life, it began with a journey.

My brother-in-law and I travelled to Thailand.

The purpose of the trip was simple.

We were there to buy agarwood and oud oil, just as we had done many times before.

During that trip, we visited several distilleries.

We met experienced distillers.

We walked through their factories.

For the first time, we saw every stage of the distillation process with our own eyes.

Naturally, we became excited.

Watching agarwood transform into oil was fascinating.

But the more we watched, the more something began to trouble us.

We looked carefully at the raw material being loaded into the distillation pots.

Then we smelled the finished oils.

Something didn't add up.

The oils we were searching for, the oils that truly moved us, simply didn't seem possible from the material we were seeing.

Neither of us said very much at first.

But I think we were both thinking the same thing.

If this is the material… how can this become the oil we are searching for?

By the time we returned home, we had made a decision.

Not because we had a perfect plan.

Not because we believed we already understood distillation.

Quite the opposite.

We decided to buy our own distillation pot because we wanted to learn.

We wanted to understand what really happened between the tree and the bottle.

More importantly, we wanted complete confidence in what we were offering people.

For me, that mattered deeply.

One of the things I have always believed is that if someone is paying to experience real oud, then they deserve complete honesty.

Oud oil is one of the most difficult products in the world to buy with absolute confidence.

Even if you completely trust the person selling it to you, how can they be certain of every hand that touched it before it reached them?

Perhaps they bought it from another trader.

Perhaps that trader bought it from someone else.

Eventually, you realise that trust becomes more difficult with every step.

I wanted to remove as many of those questions as possible.

I wanted to know exactly what entered my distillation pot.

Only then could I truly know what was inside the bottle.

Looking back today, I realise that our decision was driven far more by curiosity than by confidence.

We had no idea how difficult the journey ahead would become.

If We Were Going To Do It…

From the very beginning, I knew one thing.

If I was going to distill oud oil, I didn't want to do what everyone else was already doing.

A little later, I travelled to Indonesia to buy agarwood.

Originally, the trip had nothing to do with distillation.

I was there to buy agarwood for my trading business.

While sitting with one of my suppliers in his factory, I told him that I had decided to begin distilling my own oils.

He smiled.

Then he pointed towards a pile of agarwood.

"Use this," he said.

"It is perfect for distillation."

It was inexpensive material.

The kind that many distillers would normally choose.

From his point of view, it was sensible advice.

After all, I was a beginner.

Why risk expensive wood while learning?

But I couldn't convince myself to do it.

The question that had been following me ever since 2012 was still alive.

I wasn't trying to discover what ordinary wood could produce.

I wanted to know what extraordinary wood could become.

So instead, I chose material that was already considered unusually expensive for distillation.

Many people thought it was unnecessary.

Some probably thought it was foolish.

Looking back today, I smile at that decision.

Not because they were wrong, but because my own standards have continued to evolve.

The material that once seemed exceptional to me would no longer meet the standards I work with today.

Every year I have spent studying agarwood has quietly changed my definition of excellence.

The more I learned, the more demanding I became.

What once felt extraordinary eventually became my starting point.

That, perhaps, is one of the greatest gifts of experience.

The destination keeps moving.

You never stop searching for something better.

Twenty Kilograms

When I returned to Dubai, our small distillery was ready.

It wasn't a large factory.

It wasn't designed for commercial production.

It was simply the beginning of a journey.

We carefully prepared the still.

Loaded the agarwood.

Filled it with twenty kilograms of material.

Then we waited.

I still remember the excitement.

We weren't simply waiting for oil.

We were waiting for answers.

Days later, the distillation finally came to an end.

We collected the oil.

Then we weighed it.

Less than one tola.

Less than twelve grams.

In fact, it was closer to nine or ten grams.

Twenty kilograms of carefully selected agarwood…

Days of work…

Fire…

Water…

Time…

Patience…

Everything had become less than ten grams of oil.

Anyone looking only at the numbers would probably say exactly the same thing.

"This makes no financial sense."

Perhaps they would have been right.

But then I smelled it.

I still remember that moment as clearly as if it happened yesterday.

Even though the yield was incredibly small, the aroma was extraordinary.

That first distillation produced one of the finest oud oils I had ever smelled.

In that moment, I realised something that has stayed with me ever since.

Perhaps the greatest oud oils are never born from efficiency.

Perhaps they are born from refusing to compromise before the distillation even begins.

That first distillation didn't teach me that I knew how to distill.

It taught me how much I still had to learn.

But more importantly…

It gave me hope.

For the first time, I realised that the answer to the question I had been carrying since 2012 might actually exist.

And from that day onwards, my search truly began.`,isPlaceholder:!1},{id:10,title:"Every Forest Has a Voice",content:`A Different Kind of Hunt

There was a time when I hunted agarwood for a very different reason.

Back then, I was a trader.

Like most traders, I looked for wood that was completely dry.

Dry agarwood was easier to buy.

Easier to transport.

Easier to sell.

There were fewer surprises.

You didn't have to worry about losing weight as it dried.

You didn't have to think about how recently it had been harvested.

It was simply good business.

But something slowly changed after I began distilling.

I stopped looking at agarwood as a product.

I started looking at it as a possibility.

Today, when I search for material to distil, I often find myself drawn towards something that many traders try to avoid.

Freshly harvested agarwood.

Wood that still carries a little moisture.

To many people, that moisture is a disadvantage.

To me, it is a conversation.

If the wood is resinous enough, something extraordinary happens.

Before it ever enters the distillation pot, it begins telling me what kind of oil it wants to become.

The aroma rising from freshly cut resin can reveal things that disappear once the wood has completely dried.

It offers a small glimpse into the soul of the tree.

Whenever I find material like that, I become excited.

Not because I know exactly what the oil will smell like.

But because I know nature has just given me a clue.

From that moment onwards, my responsibility is not to change that aroma.

It is to preserve it.

To refine it.

To reveal it as faithfully as I possibly can.

That has become one of the guiding principles behind every distillation I do.

I don't believe a distiller should force the wood to become something it was never meant to be.

Every forest already has its own voice.

Our responsibility is simply to let it speak.

The Philippines

Around 2019, Filipino oud had become one of the most sought after origins in the market.

It was rare.

It was expensive.

Everyone wanted it.

Naturally, I became curious.

I smelled oils from different people.

Some had distilled the oil themselves.

Others had purchased it from well-known distilleries.

But something didn't feel right.

The oils were pleasant.

Some were even very good.

Yet none of them reminded me of the beautiful Filipino agarwood I already knew so well.

Whenever I burned a piece of high grade Filipino agarwood on charcoal, it filled the room with an aroma unlike anything else.

It had its own identity.

Its own personality.

But when I smelled the oils that were being sold as Filipino oud, that identity seemed to have disappeared.

The same question that had followed me throughout my journey appeared once again.

Why doesn't this oil smell like the wood it came from?

I knew there was only one way to answer it.

I had to distil it myself.

At the time, I had been quietly collecting Filipino material whenever I could find it.

High grade shavings.

Fine dust.

Small pieces that I believed deserved to become oil one day.

Because the material was rare, building enough for a distillation took time.

But patience has always been part of this craft.

Eventually, however, I became impatient.

I wanted the answer.

So I made a decision that made very little financial sense.

I placed around six kilograms of beautiful burning grade Filipino agarwood into my distillation pot.

Even then, it was incredibly expensive material.

The kind of wood that most people would rather sell than distil.

Today, that same quality would be worth many times more.

From a business perspective, it was difficult to justify.

But I wasn't thinking like a businessman.

I was thinking like a student.

I simply wanted to know what real Filipino oud oil was supposed to smell like.

The Answer

When the first drops of oil finally appeared, I knew.

The moment I smelled it, I smiled.

For the first time, I wasn't smelling an oil that claimed to be Filipino.

I was smelling the Philippines itself.

It carried the exact character I had experienced countless times when placing beautiful Leyte agarwood onto hot charcoal.

The same opening.

The same identity.

The same beauty.

At that moment, everything made sense.

I realised that I had never been searching for a famous oil.

I had been searching for an honest one.

Even today, I still believe it was the finest Filipino oud oil I have ever smelled.

Perhaps I am biased because I created it myself.

Or perhaps I simply knew exactly what I was searching for before I ever began.

For a brief moment, I felt incredibly proud.

Not because I believed I had become a great distiller.

But because I had finally answered a question that had been living in my mind for years.

Then another thought immediately replaced it.

How on earth am I ever going to afford doing this again?

I laughed.

Because I realised something.

The greatest discoveries are rarely the most practical ones.

But they are the ones that change the way you see the world forever.

That distillation taught me something I still carry with me today.

I am no longer searching for the best oud oil.

I am searching for the truest expression of every forest.

Because no two forests are the same.

No two trees are the same.

And if we listen carefully enough, every one of them has a story waiting to be told.`,isPlaceholder:!1}]};function M1(){const[r,i]=B.useState(()=>{const V=localStorage.getItem("nuhoud-story");return V?JSON.parse(V):D1}),[s,a]=B.useState("read"),[c,h]=B.useState(0),[d,m]=B.useState(!1),[y,g]=B.useState(null),[v,x]=B.useState(!1),[S,C]=B.useState(!1),F=B.useRef(null);B.useEffect(()=>{localStorage.setItem("nuhoud-story",JSON.stringify(r))},[r]),B.useEffect(()=>{const V=U=>{d||S||((U.key==="ArrowRight"||U.key==="ArrowDown")&&A(),(U.key==="ArrowLeft"||U.key==="ArrowUp")&&E(),U.key==="Escape"&&x(!1))};return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)},[c,d,S]);const A=()=>{c<r.chapters.length-1&&h(V=>V+1)},E=()=>{c>0&&h(V=>V-1)},_=(V,U)=>{const K=[...r.chapters];K[V]={...K[V],...U},i(fe=>({...fe,chapters:K}))},H=()=>{const V={id:r.chapters.length+1,title:`Chapter ${r.chapters.length+1}`,content:"",isPlaceholder:!0};i(U=>({...U,chapters:[...U.chapters,V]})),h(r.chapters.length)},G=V=>{if(r.chapters.length<=1)return;const U=r.chapters.filter((K,fe)=>fe!==V);i(K=>({...K,chapters:U})),c>=U.length&&h(U.length-1)},X=(V,U)=>{i(K=>({...K,[V]:U}))},z=r.chapters[c];return s==="read"?f.jsxs("div",{className:"min-h-screen",style:{background:"#FFFDF7",color:"#2A2018"},children:[f.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4",style:{background:"rgba(255,253,247,0.95)",backdropFilter:"blur(12px)",borderBottom:"1px solid rgba(154,114,53,0.12)"},children:[f.jsx("div",{className:"flex items-center gap-4",children:f.jsxs("button",{onClick:()=>a("edit"),className:"flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all hover:bg-amber-100",style:{color:"#9A7235"},children:[f.jsx(ml,{size:14}),f.jsx("span",{className:"hidden sm:inline",children:"Edit Story"})]})}),f.jsx("div",{className:"font-serif text-lg tracking-tight",style:{fontFamily:"Playfair Display, serif"},children:"NUHOUD"}),f.jsxs("button",{onClick:()=>x(!0),className:"flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all hover:bg-amber-100",style:{color:"#9A7235"},children:[f.jsx(g1,{size:14}),f.jsx("span",{className:"hidden sm:inline",children:"Chapters"})]})]}),f.jsx(bg,{children:v&&f.jsxs(f.Fragment,{children:[f.jsx(ae.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50",style:{background:"rgba(0,0,0,0.4)"},onClick:()=>x(!1)}),f.jsx(ae.div,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:25},className:"fixed right-0 top-0 bottom-0 z-50 w-80 max-w-full overflow-y-auto",style:{background:"#FFFDF7"},children:f.jsxs("div",{className:"p-6 space-y-6",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("h3",{className:"font-serif text-lg",style:{fontFamily:"Playfair Display, serif"},children:"Chapters"}),f.jsx("button",{onClick:()=>x(!1),className:"p-2 rounded-lg hover:bg-amber-50",children:f.jsx(E1,{size:20,style:{color:"#9A7235"}})})]}),f.jsx("div",{className:"space-y-2",children:r.chapters.map((V,U)=>f.jsxs("button",{onClick:()=>{h(U),x(!1)},className:"w-full text-left p-4 rounded-xl transition-all",style:{background:c===U?"rgba(154,114,53,0.1)":"transparent",border:`1px solid ${c===U?"rgba(154,114,53,0.3)":"transparent"}`},children:[f.jsxs("span",{className:"text-xs block mb-1",style:{color:"#9A7235"},children:["Chapter ",U+1]}),f.jsx("span",{className:"font-medium",style:{color:c===U?"#9A7235":"#2A2018"},children:V.title})]},V.id))})]})})]})}),c===0&&!z.content&&f.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center text-center px-8 pt-24 pb-16",children:f.jsxs(ae.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:1},className:"space-y-8 max-w-3xl",children:[f.jsx("p",{className:"text-xs tracking-[0.4em] uppercase",style:{color:"rgba(154,114,53,0.5)"},children:r.author}),f.jsxs("div",{className:"space-y-4",children:[f.jsx("h1",{className:"font-serif leading-none tracking-tight",style:{fontFamily:"Playfair Display, serif",fontSize:"clamp(48px,10vw,100px)",letterSpacing:"-0.02em"},children:r.title}),f.jsx("div",{className:"w-20 h-px mx-auto",style:{background:"linear-gradient(90deg,transparent,rgba(154,114,53,0.4),transparent)"}})]}),f.jsx("p",{className:"font-display italic text-xl",style:{fontFamily:"Cormorant Garamond, serif",color:"#9A7235",fontStyle:"italic"},children:r.subtitle}),r.chapters.length>1&&f.jsx(ae.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},className:"pt-8",children:f.jsxs("button",{onClick:A,className:"flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity",children:[f.jsx("span",{className:"text-xs tracking-widest uppercase",style:{color:"#9A8A78"},children:"Begin Reading"}),f.jsx(El,{size:20,style:{color:"#9A7235",transform:"rotate(90deg)"}})]})})]})}),(c>0||z.content)&&f.jsx("article",{className:"min-h-screen flex flex-col",style:{paddingTop:"80px"},children:f.jsx("div",{className:"flex-1 flex items-center justify-center px-6 py-16",children:f.jsxs(ae.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"max-w-2xl w-full",children:[f.jsxs("header",{className:"text-center mb-12 space-y-4",children:[f.jsxs("span",{className:"text-xs tracking-[0.3em] uppercase block",style:{color:"rgba(154,114,53,0.5)"},children:["Chapter ",c+1]}),f.jsx("h2",{className:"font-serif text-3xl md:text-4xl",style:{fontFamily:"Playfair Display, serif",color:"#2A2018"},children:z.title}),f.jsx("div",{className:"w-16 h-px mx-auto",style:{background:"linear-gradient(90deg,transparent,rgba(154,114,53,0.4),transparent)"}})]}),f.jsx("div",{ref:F,className:"max-w-none",style:{fontFamily:"Cormorant Garamond, serif",fontSize:"19px",lineHeight:"1.7",color:"#3A2A18"},children:z.content.split(`
`).map((V,U)=>f.jsx("p",{style:{margin:"0",padding:"0",whiteSpace:"pre-wrap"},children:V||" "},U))}),f.jsxs("footer",{className:"mt-16 pt-8 flex items-center justify-between",children:[f.jsxs("button",{onClick:E,disabled:c===0,className:"flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all disabled:opacity-30 hover:bg-amber-50",style:{color:"#9A7235"},children:[f.jsx(r1,{size:18}),f.jsx("span",{className:"hidden sm:inline",children:"Previous"})]}),f.jsxs("span",{className:"text-xs",style:{color:"#9A8A78"},children:[c+1," / ",r.chapters.length]}),f.jsxs("button",{onClick:A,disabled:c===r.chapters.length-1,className:"flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all disabled:opacity-30 hover:bg-amber-50",style:{color:"#9A7235"},children:[f.jsx("span",{className:"hidden sm:inline",children:"Next"}),f.jsx(El,{size:18})]})]})]},c)})})]}):f.jsxs("div",{className:"min-h-screen",style:{background:"#FFFDF7",color:"#2A2018"},children:[f.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4",style:{background:"rgba(255,253,247,0.95)",backdropFilter:"blur(12px)",borderBottom:"1px solid rgba(154,114,53,0.12)"},children:[f.jsx("div",{className:"flex items-center gap-4",children:f.jsxs("button",{onClick:()=>a("read"),className:"flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all hover:bg-amber-100",style:{color:"#9A7235"},children:[f.jsx(d1,{size:14}),f.jsx("span",{className:"hidden sm:inline",children:"Preview"})]})}),f.jsx("div",{className:"font-serif text-lg tracking-tight",style:{fontFamily:"Playfair Display, serif"},children:"Edit Story"}),f.jsx("div",{className:"w-20"})]}),f.jsxs("main",{className:"pt-24 px-6 pb-12 max-w-4xl mx-auto",children:[f.jsxs("section",{className:"mb-12 p-6 rounded-2xl",style:{background:"rgba(154,114,53,0.05)",border:"1px solid rgba(154,114,53,0.1)"},children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("h3",{className:"font-serif text-lg",style:{fontFamily:"Playfair Display, serif"},children:"Story Details"}),f.jsxs("button",{onClick:()=>C(!S),className:"flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all hover:bg-amber-100",style:{color:"#9A7235"},children:[f.jsx(ml,{size:14}),S?"Done":"Edit"]})]}),S?f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"text-xs uppercase tracking-wider block mb-2",style:{color:"#9A7235"},children:"Title"}),f.jsx("input",{type:"text",value:r.title,onChange:V=>X("title",V.target.value),className:"w-full px-4 py-3 rounded-lg text-lg font-serif outline-none transition-all",style:{background:"white",border:"1px solid rgba(154,114,53,0.2)",fontFamily:"Playfair Display, serif"}})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs uppercase tracking-wider block mb-2",style:{color:"#9A7235"},children:"Subtitle"}),f.jsx("input",{type:"text",value:r.subtitle,onChange:V=>X("subtitle",V.target.value),className:"w-full px-4 py-3 rounded-lg outline-none transition-all",style:{background:"white",border:"1px solid rgba(154,114,53,0.2)",fontFamily:"Cormorant Garamond, serif",fontSize:"17px"}})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs uppercase tracking-wider block mb-2",style:{color:"#9A7235"},children:"Author"}),f.jsx("input",{type:"text",value:r.author,onChange:V=>X("author",V.target.value),className:"w-full px-4 py-3 rounded-lg outline-none transition-all",style:{background:"white",border:"1px solid rgba(154,114,53,0.2)",fontFamily:"Cormorant Garamond, serif"}})]})]}):f.jsxs("div",{className:"space-y-2",children:[f.jsx("h2",{className:"font-serif text-3xl",style:{fontFamily:"Playfair Display, serif"},children:r.title}),f.jsx("p",{className:"italic",style:{fontFamily:"Cormorant Garamond, serif",color:"#9A7235"},children:r.subtitle}),f.jsx("p",{className:"text-sm",style:{color:"#9A8A78"},children:r.author})]})]}),f.jsxs("section",{className:"space-y-6",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("h3",{className:"font-serif text-lg",style:{fontFamily:"Playfair Display, serif"},children:"Chapters"}),f.jsxs("button",{onClick:H,className:"flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all hover:bg-amber-100",style:{background:"#9A7235",color:"#FFFDF7"},children:[f.jsx(I1,{size:16}),"Add Chapter"]})]}),r.chapters.map((V,U)=>f.jsxs(ae.div,{layout:!0,className:"rounded-2xl overflow-hidden",style:{border:"1px solid rgba(154,114,53,0.15)",background:"white"},children:[f.jsxs("div",{className:"flex items-center justify-between px-6 py-4",style:{background:"rgba(154,114,53,0.05)"},children:[f.jsxs("div",{className:"flex items-center gap-4",children:[f.jsxs("span",{className:"text-xs px-2 py-1 rounded",style:{background:"#9A7235",color:"#FFFDF7"},children:["Chapter ",U+1]}),y===U?f.jsx("input",{type:"text",value:V.title,onChange:K=>_(U,{title:K.target.value}),className:"font-serif text-lg outline-none bg-transparent",style:{fontFamily:"Playfair Display, serif"}}):f.jsx("h4",{className:"font-serif text-lg",style:{fontFamily:"Playfair Display, serif"},children:V.title})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("button",{onClick:()=>g(y===U?null:U),className:"p-2 rounded-lg transition-all hover:bg-amber-50",children:f.jsx(ml,{size:16,style:{color:"#9A7235"}})}),r.chapters.length>1&&f.jsx("button",{onClick:()=>G(U),className:"p-2 rounded-lg transition-all hover:bg-red-50",children:f.jsx(A1,{size:16,style:{color:"#C44"}})})]})]}),f.jsxs("div",{className:"p-6",children:[f.jsx("textarea",{value:V.content,onChange:K=>_(U,{content:K.target.value,isPlaceholder:!1}),placeholder:"Start writing your chapter here... Each line you write will be preserved exactly as you type it.",className:"w-full min-h-[400px] p-4 rounded-lg resize-y outline-none leading-relaxed",style:{fontFamily:"Cormorant Garamond, serif",fontSize:"17px",lineHeight:"1.9",background:"#FFFDF7",border:"1px solid rgba(154,114,53,0.1)"}}),f.jsxs("p",{className:"text-xs mt-2",style:{color:"#9A8A78"},children:[V.content.length," characters · ",V.content.split(`
`).filter(K=>K.trim()).length," lines"]})]})]},V.id))]}),f.jsxs("div",{className:"fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full text-xs",style:{background:"rgba(154,114,53,0.1)",color:"#9A7235"},children:[f.jsx(N1,{size:14}),"Auto-saved"]})]})]})}const _s=[{id:"cover",label:""},{id:"executive",label:"Executive Summary"},{id:"problem",label:"The Problem"},{id:"wins",label:"Why NUHOUD Wins"},{id:"different",label:"What Makes Us Different"},{id:"funds",label:"The Investment"},{id:"model",label:"The Business"},{id:"margins",label:"The Margins"},{id:"story",label:"Why Story Matters"},{id:"community",label:"The Community"},{id:"competitive",label:"Our Position"},{id:"vision",label:"Five Years"},{id:"unique",label:"Why This Is Unique"},{id:"close",label:""}],be={hidden:{opacity:0,y:24},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.25,.46,.45,.94]}}};function F1(){const[r,i]=B.useState(0),[s,a]=B.useState(!1),c=B.useRef(null);B.useEffect(()=>{const d=m=>{(m.key==="ArrowRight"||m.key==="ArrowDown")&&i(y=>Math.min(y+1,_s.length-1)),(m.key==="ArrowLeft"||m.key==="ArrowUp")&&i(y=>Math.max(y-1,0))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[]);const h=d=>{i(d);const m=document.getElementById(_s[d].id);m&&m.scrollIntoView({behavior:"smooth"})};return s?f.jsx(M1,{}):f.jsxs("div",{ref:c,className:"relative",style:{background:"#FFFDF7"},children:[f.jsxs("div",{className:"fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4",style:{background:"rgba(255,253,247,0.92)",backdropFilter:"blur(12px)",borderBottom:"1px solid rgba(154,114,53,0.12)"},children:[f.jsxs("div",{className:"flex items-center gap-4",children:[f.jsx("div",{className:"font-serif text-lg tracking-tight text-charcoal-800",style:{fontFamily:"Playfair Display,serif"},children:"NUHOUD"}),f.jsxs("button",{onClick:()=>a(!0),className:"flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all hover:bg-amber-100",style:{color:"#9A7235"},children:[f.jsx(e1,{size:14}),f.jsx("span",{className:"hidden sm:inline",children:"Story Portal"})]})]}),f.jsx("div",{className:"hidden md:flex items-center gap-1",children:_s.map((d,m)=>d.label&&f.jsx("button",{onClick:()=>h(m),className:"px-2 py-1 text-xs rounded transition-all",style:{background:r===m?"rgba(154,114,53,0.1)":"transparent",color:r===m?"#9A7235":"#9A8A78",letterSpacing:"0.05em"},children:d.label},m))}),f.jsx("button",{onClick:()=>h(_s.length-1),className:"px-4 py-2 rounded-full text-xs font-medium transition-all",style:{background:"#9A7235",color:"#FFFDF7",letterSpacing:"0.08em"},children:"Contact Us"})]}),f.jsxs("section",{id:"cover",className:"min-h-screen flex flex-col items-center justify-center text-center px-8 pt-24 pb-16",style:{scrollSnapAlign:"start"},children:[f.jsxs(ae.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:1},className:"space-y-6 max-w-4xl",children:[f.jsx(ae.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:1},className:"text-xs tracking-[0.4em] uppercase",style:{color:"rgba(154,114,53,0.5)"},children:"Private & Confidential"}),f.jsxs(ae.div,{initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},transition:{delay:.5,duration:1},className:"space-y-4",children:[f.jsx("h1",{className:"font-serif font-light leading-none tracking-tight",style:{fontFamily:"Playfair Display,serif",fontSize:"clamp(72px,14vw,160px)",color:"#2A2018",letterSpacing:"-0.03em"},children:"NUHOUD"}),f.jsx("div",{className:"w-24 h-px mx-auto",style:{background:"linear-gradient(90deg,transparent,rgba(154,114,53,0.4),transparent)"}})]}),f.jsxs(ae.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.8,duration:1},className:"space-y-4",children:[f.jsxs("p",{className:"font-display italic text-2xl md:text-3xl leading-relaxed",style:{fontFamily:"Cormorant Garamond,serif",color:"#5A4A38",fontStyle:"italic",fontWeight:300},children:["Building the World's Leading",f.jsx("br",{}),"Natural Perfumery House"]}),f.jsx("p",{className:"font-display italic text-base",style:{fontFamily:"Cormorant Garamond,serif",color:"#9A8A78",fontStyle:"italic"},children:"A long-term investment in heritage, craftsmanship, and global luxury."})]}),f.jsxs(ae.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.2,duration:1},className:"pt-8 space-y-2",children:[f.jsx("p",{className:"text-xs tracking-[0.25em] uppercase",style:{color:"#9A8A78"},children:"Shahid Ahmed — Bu Nuh"}),f.jsx("p",{className:"text-xs tracking-[0.2em] uppercase",style:{color:"rgba(154,114,53,0.5)"},children:"Fourth Generation Agarwood Expertise · Est. 2009"})]})]}),f.jsx(ae.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:1},className:"absolute bottom-12",children:f.jsxs("button",{onClick:()=>h(1),className:"flex flex-col items-center gap-2 opacity-40 hover:opacity-80 transition-opacity",children:[f.jsx("span",{className:"text-xs tracking-widest uppercase",style:{color:"#9A8A78"},children:"Scroll"}),f.jsx(El,{size:16,style:{color:"#9A7235",transform:"rotate(90deg)"}})]})})]}),f.jsx("section",{id:"executive",className:"min-h-screen flex items-center px-8 py-32",style:{scrollSnapAlign:"start"},children:f.jsx("div",{className:"max-w-5xl mx-auto w-full",children:f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"space-y-16",children:[f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-8 h-px",style:{background:"rgba(154,114,53,0.35)"}}),f.jsx("span",{className:"text-xs tracking-[0.3em] uppercase",style:{color:"rgba(154,114,53,0.5)"},children:"Executive Summary"})]}),f.jsxs("h2",{className:"font-serif leading-tight",style:{fontFamily:"Playfair Display,serif",fontSize:"clamp(36px,5vw,60px)",color:"#2A2018"},children:["We are not selling perfume.",f.jsx("br",{}),f.jsx("span",{className:"italic",style:{color:"#9A7235"},children:"We are building a legacy."})]})]}),f.jsxs("div",{className:"grid md:grid-cols-2 gap-12",children:[f.jsxs("div",{className:"space-y-8",children:[f.jsxs("div",{className:"space-y-3",children:[f.jsx("h3",{className:"text-sm font-medium tracking-wider uppercase",style:{color:"#9A7235"},children:"Why NUHOUD Exists"}),f.jsx("p",{className:"text-base leading-relaxed",style:{color:"#5A4A38",fontFamily:"Cormorant Garamond,serif",fontSize:"17px"},children:"Four generations of agarwood expertise have given us something rare: the knowledge, the relationships, and the reputation to source and distil the world's finest natural raw materials."})]}),f.jsxs("div",{className:"space-y-3",children:[f.jsx("h3",{className:"text-sm font-medium tracking-wider uppercase",style:{color:"#9A7235"},children:"The Global Opportunity"}),f.jsx("p",{className:"text-base leading-relaxed",style:{color:"#5A4A38",fontFamily:"Cormorant Garamond,serif",fontSize:"17px"},children:"The global natural fragrance market is entering a new era. Consumers are rejecting synthetic, mass-produced luxury. They want authenticity. Provenance. Story. These are the foundations NUHOUD was built on — fifteen years ago."})]})]}),f.jsxs("div",{className:"space-y-8",children:[f.jsxs("div",{className:"space-y-3",children:[f.jsx("h3",{className:"text-sm font-medium tracking-wider uppercase",style:{color:"#9A7235"},children:"Why Natural Perfumery Is Entering Its Golden Era"}),f.jsx("p",{className:"text-base leading-relaxed",style:{color:"#5A4A38",fontFamily:"Cormorant Garamond,serif",fontSize:"17px"},children:"Regulatory pressure on synthetics is increasing. Supply of rare natural materials is finite and shrinking. Brands with authentic sourcing relationships and distillation capability are becoming irreplaceable."})]}),f.jsxs("div",{className:"space-y-3",children:[f.jsx("h3",{className:"text-sm font-medium tracking-wider uppercase",style:{color:"#9A7235"},children:"Why Now"}),f.jsx("p",{className:"text-base leading-relaxed",style:{color:"#5A4A38",fontFamily:"Cormorant Garamond,serif",fontSize:"17px"},children:"NUHOUD already has the reputation, the collectors, and the craft. The investment accelerates what already works — expanding distillation, securing rare inventory, and building the storytelling infrastructure that converts collectors into ambassadors."})]})]})]})]})})}),f.jsx("section",{id:"problem",className:"min-h-screen flex items-center px-8 py-32",style:{scrollSnapAlign:"start",background:"#F5EDD8"},children:f.jsx("div",{className:"max-w-5xl mx-auto w-full",children:f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"space-y-16",children:[f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-8 h-px",style:{background:"rgba(154,114,53,0.35)"}}),f.jsx("span",{className:"text-xs tracking-[0.3em] uppercase",style:{color:"rgba(154,114,53,0.5)"},children:"The Problem"})]}),f.jsxs("h2",{className:"font-serif leading-tight",style:{fontFamily:"Playfair Display,serif",fontSize:"clamp(36px,5vw,60px)",color:"#2A2018"},children:["Today's luxury perfume industry",f.jsx("br",{}),f.jsx("span",{className:"italic",style:{color:"#9A7235"},children:"is built on a contradiction."})]})]}),f.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:[{icon:"🧪",title:"Synthetic Ingredients",desc:"The vast majority of luxury fragrance today is synthetic. Mass-market chemistry dressed in luxury packaging."},{icon:"🏭",title:"Mass Production",desc:"Thousands of bottles produced daily. Quality is optimized for cost, not craft."},{icon:"📢",title:"Marketing Without Authenticity",desc:"Brands spend millions on celebrity endorsements and campaigns. The story is fabricated."},{icon:"🌲",title:"Disconnected from Raw Materials",desc:"Most fragrance houses have never touched the wood, the flower, or the source."}].map((d,m)=>f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:m*.1},className:"bg-white rounded-2xl p-8 space-y-3 shadow-sm",style:{border:"1px solid rgba(154,114,53,0.1)"},children:[f.jsx("div",{className:"text-3xl",children:d.icon}),f.jsx("h3",{className:"font-serif text-xl",style:{fontFamily:"Playfair Display,serif",color:"#2A2018"},children:d.title}),f.jsx("p",{className:"text-sm leading-relaxed",style:{color:"#7A6A58",fontFamily:"Cormorant Garamond,serif",fontSize:"16px"},children:d.desc})]},m))}),f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"text-center space-y-4 p-10 rounded-2xl",style:{background:"#9A7235",color:"#FFFDF7"},children:[f.jsxs("p",{className:"font-display italic text-2xl",style:{fontFamily:"Cormorant Garamond,serif",fontStyle:"italic"},children:["Consumers are increasingly seeking authenticity.",f.jsx("br",{}),"They want to know where it came from.",f.jsx("br",{}),"Who made it. Why it matters."]}),f.jsx("div",{className:"w-16 h-px mx-auto opacity-40",style:{background:"#FFFDF7"}}),f.jsx("p",{className:"text-sm font-medium tracking-wider uppercase",style:{letterSpacing:"0.15em"},children:"NUHOUD fills that gap."})]})]})})}),f.jsx("section",{id:"wins",className:"min-h-screen flex items-center px-8 py-32",style:{scrollSnapAlign:"start"},children:f.jsx("div",{className:"max-w-5xl mx-auto w-full",children:f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"space-y-16",children:[f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-8 h-px",style:{background:"rgba(154,114,53,0.35)"}}),f.jsx("span",{className:"text-xs tracking-[0.3em] uppercase",style:{color:"rgba(154,114,53,0.5)"},children:"Competitive Position"})]}),f.jsxs("h2",{className:"font-serif leading-tight",style:{fontFamily:"Playfair Display,serif",fontSize:"clamp(36px,5vw,60px)",color:"#2A2018"},children:["Unlike most brands,",f.jsx("br",{}),f.jsx("span",{className:"italic",style:{color:"#9A7235"},children:"NUHOUD already has"})," the foundations."]})]}),f.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[{icon:f.jsx(u1,{size:20,style:{color:"#9A7235"}}),t:"Real Distillation",d:"We own the craft. Copper stills. Patient process. No shortcuts."},{icon:f.jsx(a1,{size:20,style:{color:"#9A7235"}}),t:"Real Oud Expertise",d:"Four generations of agarwood knowledge cannot be bought or replicated."},{icon:f.jsx(f1,{size:20,style:{color:"#9A7235"}}),t:"Direct Sourcing",d:"Relationships with harvesters and distributors across Sri Lanka, Borneo, Cambodia, India."},{icon:f.jsx(p1,{size:20,style:{color:"#9A7235"}}),t:"Family Legacy",d:"A lineage of expertise passed down — not assembled for marketing purposes."},{icon:f.jsx(Ff,{size:20,style:{color:"#9A7235"}}),t:"Existing Collectors",d:"25,000+ collectors and enthusiasts worldwide, built without a single dirham of advertising."},{icon:f.jsx(Zx,{size:20,style:{color:"#9A7235"}}),t:"Authentic Storytelling",d:"The story is not invented. It is inherited. Every release carries genuine history."}].map((d,m)=>f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:m*.08},className:"bg-white rounded-xl p-6 space-y-3",style:{border:"1px solid rgba(154,114,53,0.1)"},children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("div",{children:d.icon}),f.jsx("h4",{className:"font-serif text-base",style:{fontFamily:"Playfair Display,serif",color:"#2A2018"},children:d.t})]}),f.jsx("p",{className:"text-sm leading-relaxed",style:{color:"#7A6A58",fontFamily:"Cormorant Garamond,serif",fontSize:"15px"},children:d.d})]},m))}),f.jsx(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"text-center p-8 rounded-2xl",style:{background:"rgba(154,114,53,0.06)",border:"1px solid rgba(154,114,53,0.12)"},children:f.jsxs("p",{className:"font-display italic text-xl",style:{fontFamily:"Cormorant Garamond,serif",color:"#5A4A38",fontStyle:"italic"},children:["Very few companies in the world possess all of these simultaneously.",f.jsx("br",{}),"NUHOUD does. This is the foundation of the investment thesis."]})})]})})}),f.jsx("section",{id:"different",className:"min-h-screen flex items-center justify-center px-8 py-32",style:{scrollSnapAlign:"start",background:"#2A2018",color:"#FFFDF7"},children:f.jsx("div",{className:"max-w-5xl mx-auto w-full text-center",children:f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"space-y-16",children:[f.jsxs("div",{className:"space-y-4",children:[f.jsx("p",{className:"text-xs tracking-[0.3em] uppercase",style:{color:"rgba(154,114,53,0.5)"},children:"The Core Differentiator"}),f.jsxs("h2",{className:"font-serif leading-tight",style:{fontFamily:"Playfair Display,serif",fontSize:"clamp(36px,5vw,60px)"},children:["NOT",f.jsx("br",{}),f.jsx("span",{className:"italic",style:{color:"#C4974E"},children:'"We sell perfume."'})]})]}),f.jsxs("div",{className:"space-y-6",children:[f.jsx("p",{className:"font-display italic text-2xl md:text-3xl leading-relaxed",style:{fontFamily:"Cormorant Garamond,serif",fontStyle:"italic",color:"rgba(255,253,247,0.8)"},children:"NUHOUD preserves the complete journey of natural perfumery."}),f.jsx("div",{className:"flex flex-wrap items-center justify-center gap-4 py-6",children:["From tree…","to wood…","to distillation…","to oil…","to perfume…","to collector."].map((d,m)=>f.jsx(ae.div,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:m*.12},className:"px-5 py-2.5 rounded-full text-sm",style:{background:"rgba(154,114,53,0.15)",color:"#C4974E",border:"1px solid rgba(154,114,53,0.25)",fontFamily:"Cormorant Garamond,serif",fontStyle:"italic"},children:d},m))}),f.jsx("p",{className:"font-display italic text-lg",style:{fontFamily:"Cormorant Garamond,serif",color:"rgba(255,253,247,0.5)"},children:"Nobody else in the world tells this story. From beginning to end."})]}),f.jsx("div",{className:"space-y-3 pt-4",children:["We source from specific trees in specific regions.","We distil using traditional copper methods, patiently.","We age oils that deserve aging.","We release in quantities that reflect scarcity, not ambition.","We tell the story — because it is the truth."].map((d,m)=>f.jsxs(ae.div,{initial:{opacity:0,x:-12},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:m*.1},className:"flex items-center gap-4 text-left",children:[f.jsx(fl,{size:14,style:{color:"#C4974E",flexShrink:0}}),f.jsx("p",{className:"text-sm",style:{color:"rgba(255,253,247,0.7)",fontFamily:"Cormorant Garamond,serif",fontSize:"16px"},children:d})]},m))})]})})}),f.jsx("section",{id:"funds",className:"min-h-screen flex items-center px-8 py-32",style:{scrollSnapAlign:"start"},children:f.jsx("div",{className:"max-w-5xl mx-auto w-full",children:f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"space-y-16",children:[f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-8 h-px",style:{background:"rgba(154,114,53,0.35)"}}),f.jsx("span",{className:"text-xs tracking-[0.3em] uppercase",style:{color:"rgba(154,114,53,0.5)"},children:"The Investment"})]}),f.jsxs("h2",{className:"font-serif leading-tight",style:{fontFamily:"Playfair Display,serif",fontSize:"clamp(36px,5vw,60px)",color:"#2A2018"},children:["Why AED 3 Million",f.jsx("br",{}),f.jsx("span",{className:"italic",style:{color:"#9A7235"},children:"Matters."})]}),f.jsx("p",{className:"font-display italic text-lg",style:{fontFamily:"Cormorant Garamond,serif",color:"#5A4A38",fontStyle:"italic",maxWidth:"600px"},children:"The investment does not fund growth from scratch. It accelerates what already works."})]}),f.jsxs("div",{className:"grid md:grid-cols-2 gap-16",children:[f.jsx("div",{className:"space-y-8",children:f.jsxs("div",{className:"p-6 rounded-xl space-y-4",style:{background:"rgba(154,114,53,0.04)",border:"1px solid rgba(154,114,53,0.1)"},children:[f.jsx("h4",{className:"text-sm font-medium tracking-wider uppercase",style:{color:"#9A7235"},children:"Without Investment"}),f.jsx("div",{className:"space-y-2",children:["Limited production runs","Slow and infrequent distillation","Rare materials secured opportunistically","No capacity for continuous storytelling","Constrained inventory"].map((d,m)=>f.jsxs("div",{className:"flex items-center gap-3 text-sm",style:{color:"#7A6A58"},children:[f.jsx("div",{className:"w-1.5 h-1.5 rounded-full opacity-40",style:{background:"#9A7235"}}),f.jsx("span",{style:{fontFamily:"Cormorant Garamond,serif",fontSize:"15px"},children:d})]},m))})]})}),f.jsx("div",{className:"space-y-8",children:f.jsxs("div",{className:"p-6 rounded-xl space-y-4",style:{background:"rgba(154,114,53,0.08)",border:"1px solid rgba(154,114,53,0.2)"},children:[f.jsx("h4",{className:"text-sm font-medium tracking-wider uppercase",style:{color:"#9A7235"},children:"With AED 3 Million"}),f.jsx("div",{className:"space-y-2",children:["Continuous distillation capacity","Ability to acquire rare inventory when it surfaces","Professional storytelling and documentary content","Accelerated brand development","International expansion infrastructure"].map((d,m)=>f.jsxs("div",{className:"flex items-center gap-3 text-sm",style:{color:"#2A2018"},children:[f.jsx(Mf,{size:14,style:{color:"#9A7235",flexShrink:0}}),f.jsx("span",{className:"font-medium",style:{fontFamily:"Cormorant Garamond,serif",fontSize:"15px"},children:d})]},m))})]})})]}),f.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[{title:"Distillation Expansion",items:["Additional copper stills","Expanded production capacity","New experimental distillations","Long aging program"]},{title:"Rare Material Acquisition",items:["Agarwood — premium grades","Deer musk, ambergris","Rare sandalwood, roses","Botanicals — appreciating inventory"]},{title:"Brand & Storytelling",items:["Professional film & documentary","Website & journal","Collector experiences","Educational content"]}].map((d,m)=>f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:m*.08},className:"bg-white rounded-xl p-6 space-y-3",style:{border:"1px solid rgba(154,114,53,0.1)"},children:[f.jsx("h4",{className:"font-serif text-base",style:{fontFamily:"Playfair Display,serif",color:"#2A2018"},children:d.title}),d.items.map(y=>f.jsxs("div",{className:"flex items-center gap-2 text-xs",style:{color:"#7A6A58"},children:[f.jsx("div",{className:"w-1 h-1 rounded-full",style:{background:"#9A7235",opacity:.5}}),f.jsx("span",{style:{fontFamily:"Cormorant Garamond,serif",fontSize:"14px"},children:y})]},y))]},m))})]})})}),f.jsx("section",{id:"model",className:"min-h-screen flex items-center px-8 py-32",style:{scrollSnapAlign:"start",background:"#F5EDD8"},children:f.jsx("div",{className:"max-w-5xl mx-auto w-full",children:f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"space-y-16",children:[f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-8 h-px",style:{background:"rgba(154,114,53,0.35)"}}),f.jsx("span",{className:"text-xs tracking-[0.3em] uppercase",style:{color:"rgba(154,114,53,0.5)"},children:"Revenue Streams"})]}),f.jsxs("h2",{className:"font-serif leading-tight",style:{fontFamily:"Playfair Display,serif",fontSize:"clamp(36px,5vw,60px)",color:"#2A2018"},children:["The NUHOUD",f.jsx("br",{}),f.jsx("span",{className:"italic",style:{color:"#9A7235"},children:"Business Model"})]})]}),f.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:[{title:"Rare Oud Oils",sub:"Core product",desc:"Vintage, aged, single-origin. Limited releases. The anchor of the brand and the collector's first entry point."},{title:"Limited Edition Attars",sub:"Signature collections",desc:"Blended oils of exceptional character. Released annually. Each tied to a story, a place, a season."},{title:"Extrait Perfumes",sub:"Accessible luxury",desc:"Diluted for daily wear. Premium positioning. Allow a wider audience to enter the NUHOUD world."},{title:"Collector Editions",sub:"Flagship releases",desc:"Numbered, aged, documented. Sold once. Never repeated. The releases that build the legend."},{title:"Pre-Order Programmes",sub:"Demand-led production",desc:"Collectors reserve upcoming releases. Confirms demand before production. Zero waste."},{title:"International Distribution",sub:"Wholesale & retail",desc:"Selective partnerships with luxury retailers, duty-free, and specialist perfumery boutiques globally."}].map((d,m)=>f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:m*.08},className:"bg-white rounded-xl p-7 flex gap-5",style:{border:"1px solid rgba(154,114,53,0.1)"},children:[f.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1",style:{background:"rgba(154,114,53,0.1)"},children:f.jsx(fl,{size:16,style:{color:"#9A7235"}})}),f.jsxs("div",{className:"space-y-1",children:[f.jsxs("div",{className:"flex items-baseline gap-2",children:[f.jsx("h4",{className:"font-serif text-base",style:{fontFamily:"Playfair Display,serif",color:"#2A2018"},children:d.title}),f.jsx("span",{className:"text-xs",style:{color:"#9A8A78"},children:d.sub})]}),f.jsx("p",{className:"text-sm leading-relaxed",style:{color:"#7A6A58",fontFamily:"Cormorant Garamond,serif",fontSize:"15px"},children:d.desc})]})]},m))})]})})}),f.jsx("section",{id:"margins",className:"min-h-screen flex items-center px-8 py-32",style:{scrollSnapAlign:"start"},children:f.jsx("div",{className:"max-w-5xl mx-auto w-full",children:f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"space-y-16",children:[f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-8 h-px",style:{background:"rgba(154,114,53,0.35)"}}),f.jsx("span",{className:"text-xs tracking-[0.3em] uppercase",style:{color:"rgba(154,114,53,0.5)"},children:"Unit Economics"})]}),f.jsxs("h2",{className:"font-serif leading-tight",style:{fontFamily:"Playfair Display,serif",fontSize:"clamp(36px,5vw,60px)",color:"#2A2018"},children:["Why margins in natural luxury",f.jsx("br",{}),f.jsx("span",{className:"italic",style:{color:"#9A7235"},children:"can be exceptional."})]})]}),f.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{num:"01",title:"Low Volume, High Value",desc:"We produce in small quantities. Every bottle is deliberate. Scarcity is structural, not manufactured."},{num:"02",title:"High Customer Loyalty",desc:"A collector who has experienced real aged oud rarely returns to synthetic. Loyalty is earned through quality."},{num:"03",title:"Exceptional Repeat Rates",desc:"The nature of natural perfumery means repeat purchase. A collector builds a relationship with the brand over years."},{num:"04",title:"Long Product Lifespan",desc:"Aged oud improves with time. Inventory is an appreciating asset, not a depreciating one."},{num:"05",title:"Scarcity as Default",desc:"We do not manufacture abundance. Every release is finite by design. This is not a strategy — it is the craft."},{num:"06",title:"Premium Positioning",desc:"The price reflects the cost and the rarity. NUHOUD customers understand this. They are paying for authenticity."}].map((d,m)=>f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:m*.08},className:"space-y-4 p-8 rounded-2xl",style:{background:"rgba(154,114,53,0.04)",border:"1px solid rgba(154,114,53,0.1)"},children:[f.jsx("p",{className:"text-5xl font-light",style:{fontFamily:"Playfair Display,serif",color:"rgba(154,114,53,0.15)"},children:d.num}),f.jsx("h4",{className:"font-serif text-lg",style:{fontFamily:"Playfair Display,serif",color:"#2A2018"},children:d.title}),f.jsx("p",{className:"text-sm leading-relaxed",style:{color:"#7A6A58",fontFamily:"Cormorant Garamond,serif",fontSize:"15px"},children:d.desc})]},m))})]})})}),f.jsx("section",{id:"story",className:"min-h-screen flex items-center justify-center px-8 py-32",style:{scrollSnapAlign:"start",background:"#2A2018",color:"#FFFDF7"},children:f.jsx("div",{className:"max-w-5xl mx-auto w-full text-center",children:f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"space-y-16",children:[f.jsxs("div",{className:"space-y-4",children:[f.jsx("p",{className:"text-xs tracking-[0.3em] uppercase",style:{color:"rgba(154,114,53,0.5)"},children:"The Real Product"}),f.jsxs("h2",{className:"font-serif leading-tight",style:{fontFamily:"Playfair Display,serif",fontSize:"clamp(36px,5vw,60px)"},children:["People don't only buy",f.jsx("br",{}),f.jsx("span",{className:"italic",style:{color:"#C4974E"},children:"fragrance."})]}),f.jsx("p",{className:"font-display italic text-xl",style:{fontFamily:"Cormorant Garamond,serif",fontStyle:"italic",color:"rgba(255,253,247,0.6)"},children:"They buy everything that fragrance represents."})]}),f.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[{t:"History",d:"Generations of knowledge in every bottle."},{t:"Craftsmanship",d:"The art of patience over efficiency."},{t:"Authenticity",d:"Provenance that can be verified, not claimed."},{t:"Scarcity",d:"Limited releases that create lasting value."},{t:"Identity",d:"The fragrance you wear says who you are."},{t:"Belonging",d:"A community of people who understand."},{t:"The Founder",d:"A real person with real knowledge."},{t:"The Journey",d:"From forest floor to your skin."}].map((d,m)=>f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:m*.07},className:"p-6 rounded-xl text-left space-y-2",style:{background:"rgba(154,114,53,0.1)",border:"1px solid rgba(154,114,53,0.15)"},children:[f.jsx("h4",{className:"font-serif text-base",style:{fontFamily:"Playfair Display,serif",color:"#C4974E"},children:d.t}),f.jsx("p",{className:"text-sm",style:{color:"rgba(255,253,247,0.6)",fontFamily:"Cormorant Garamond,serif",fontSize:"14px"},children:d.d})]},m))}),f.jsx("p",{className:"font-display italic text-2xl",style:{fontFamily:"Cormorant Garamond,serif",fontStyle:"italic",color:"rgba(255,253,247,0.7)"},children:"NUHOUD sells all of these. The fragrance is the proof."})]})})}),f.jsx("section",{id:"community",className:"min-h-screen flex items-center px-8 py-32",style:{scrollSnapAlign:"start"},children:f.jsx("div",{className:"max-w-5xl mx-auto w-full",children:f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"space-y-16",children:[f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-8 h-px",style:{background:"rgba(154,114,53,0.35)"}}),f.jsx("span",{className:"text-xs tracking-[0.3em] uppercase",style:{color:"rgba(154,114,53,0.5)"},children:"The Collectors"})]}),f.jsxs("h2",{className:"font-serif leading-tight",style:{fontFamily:"Playfair Display,serif",fontSize:"clamp(36px,5vw,60px)",color:"#2A2018"},children:["Not customers.",f.jsx("br",{}),f.jsx("span",{className:"italic",style:{color:"#9A7235"},children:"Collectors."})]})]}),f.jsxs("div",{className:"grid md:grid-cols-2 gap-16",children:[f.jsxs("div",{className:"space-y-6",children:[f.jsx("p",{className:"font-display italic text-lg leading-relaxed",style:{fontFamily:"Cormorant Garamond,serif",color:"#5A4A38",fontStyle:"italic"},children:'NUHOUD does not have "customers." It has collectors — people who wait for releases, track the journal, share the story, and return generation after generation.'}),f.jsx("div",{className:"space-y-4",children:[{t:"People waiting for releases",d:"There are already thousands of people who track NUHOUD releases and buy within hours."},{t:"Educational journal",d:"Ongoing content that builds knowledge and deepens the relationship with the brand."},{t:"Early access",d:"Collectors get priority access to upcoming releases before public announcement."},{t:"Private community",d:"A growing network of enthusiasts who share knowledge, not just purchases."}].map((d,m)=>f.jsxs("div",{className:"flex gap-4",children:[f.jsx("div",{className:"w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",style:{background:"rgba(154,114,53,0.12)"},children:f.jsx(fl,{size:12,style:{color:"#9A7235"}})}),f.jsxs("div",{children:[f.jsx("p",{className:"text-sm font-medium",style:{color:"#2A2018"},children:d.t}),f.jsx("p",{className:"text-sm",style:{color:"#7A6A58",fontFamily:"Cormorant Garamond,serif",fontSize:"14px"},children:d.d})]})]},m))})]}),f.jsx("div",{className:"flex items-center justify-center",children:f.jsxs("div",{className:"text-center space-y-6 p-12 rounded-2xl w-full",style:{background:"rgba(154,114,53,0.05)",border:"1px solid rgba(154,114,53,0.1)"},children:[f.jsx("p",{className:"font-serif text-7xl font-light",style:{fontFamily:"Playfair Display,serif",color:"#9A7235"},children:"25K+"}),f.jsx("p",{className:"text-sm tracking-wider uppercase",style:{color:"#9A8A78"},children:"Collectors Worldwide"}),f.jsx("div",{className:"w-12 h-px mx-auto",style:{background:"rgba(154,114,53,0.2)"}}),f.jsx("p",{className:"text-sm",style:{color:"#7A6A58",fontFamily:"Cormorant Garamond,serif",fontSize:"15px",fontStyle:"italic"},children:"Built organically. Without advertising. Without a single celebrity endorsement."})]})})]})]})})}),f.jsx("section",{id:"competitive",className:"min-h-screen flex items-center justify-center px-8 py-32",style:{scrollSnapAlign:"start",background:"#F5EDD8"},children:f.jsx("div",{className:"max-w-5xl mx-auto w-full text-center",children:f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"space-y-16",children:[f.jsxs("div",{className:"space-y-4",children:[f.jsx("p",{className:"text-xs tracking-[0.3em] uppercase",style:{color:"rgba(154,114,53,0.5)"},children:"Competitive Position"}),f.jsxs("h2",{className:"font-serif leading-tight",style:{fontFamily:"Playfair Display,serif",fontSize:"clamp(36px,5vw,60px)",color:"#2A2018"},children:["Don't compare prices.",f.jsx("br",{}),f.jsx("span",{className:"italic",style:{color:"#9A7235"},children:"Compare philosophies."})]})]}),f.jsx("div",{className:"space-y-4 max-w-xl mx-auto",children:[{label:"Mass Luxury",width:"100%",bg:"rgba(42,32,24,0.08)",color:"#9A8A78"},{label:"Niche Luxury",width:"72%",bg:"rgba(42,32,24,0.15)",color:"#7A6A58"},{label:"Natural Perfumery",width:"48%",bg:"rgba(154,114,53,0.15)",color:"#9A7235"},{label:"NUHOUD",width:"28%",bg:"#9A7235",color:"#FFFDF7"}].map((d,m)=>f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:m*.15},className:"rounded-full overflow-hidden flex items-center",style:{background:d.bg},children:[f.jsx("div",{className:"px-8 py-4 text-left",children:f.jsx("p",{className:"text-sm font-medium",style:{color:d.color},children:d.label})}),f.jsx("div",{className:"flex-1 h-full flex items-center justify-end pr-6",children:f.jsx("div",{className:"w-2 h-2 rounded-full",style:{background:d.color,opacity:.5}})})]},m))}),f.jsx("p",{className:"font-display italic text-lg",style:{fontFamily:"Cormorant Garamond,serif",color:"#5A4A38",fontStyle:"italic",maxWidth:"560px",margin:"0 auto"},children:"Fewer competitors. Higher barriers to entry. Longer lasting advantage."})]})})}),f.jsx("section",{id:"vision",className:"min-h-screen flex items-center px-8 py-32",style:{scrollSnapAlign:"start"},children:f.jsx("div",{className:"max-w-5xl mx-auto w-full",children:f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"space-y-16",children:[f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-8 h-px",style:{background:"rgba(154,114,53,0.35)"}}),f.jsx("span",{className:"text-xs tracking-[0.3em] uppercase",style:{color:"rgba(154,114,53,0.5)"},children:"Five Year Vision"})]}),f.jsxs("h2",{className:"font-serif leading-tight",style:{fontFamily:"Playfair Display,serif",fontSize:"clamp(36px,5vw,60px)",color:"#2A2018"},children:["What success",f.jsx("br",{}),f.jsx("span",{className:"italic",style:{color:"#9A7235"},children:"looks like."})]})]}),f.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:[{t:"Globally Recognised",d:"NUHOUD named alongside the world's most respected natural perfumery houses."},{t:"Collector Community",d:"Tens of thousands of collectors across 50+ countries, waiting for each release."},{t:"Annual Releases",d:"Signature annual collections that become events the community anticipates."},{t:"Distillation Destination",d:"A physical distillation centre that collectors can visit and learn from."},{t:"Educational Destination",d:"The NUHOUD journal and platform become the authoritative voice in natural perfumery."},{t:"International Reputation",d:"Sought out by luxury retailers and distributors across the GCC, Europe, and Asia."}].map((d,m)=>f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:m*.08},className:"flex gap-5 p-6 rounded-xl",style:{background:"rgba(154,114,53,0.04)",border:"1px solid rgba(154,114,53,0.1)"},children:[f.jsx("div",{className:"w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",style:{background:"rgba(154,114,53,0.1)"},children:f.jsx(Ff,{size:14,style:{color:"#9A7235"}})}),f.jsxs("div",{className:"space-y-1",children:[f.jsx("h4",{className:"font-serif text-base",style:{fontFamily:"Playfair Display,serif",color:"#2A2018"},children:d.t}),f.jsx("p",{className:"text-sm",style:{color:"#7A6A58",fontFamily:"Cormorant Garamond,serif",fontSize:"14px"},children:d.d})]})]},m))})]})})}),f.jsx("section",{id:"unique",className:"min-h-screen flex items-center justify-center px-8 py-32",style:{scrollSnapAlign:"start",background:"#2A2018",color:"#FFFDF7"},children:f.jsx("div",{className:"max-w-5xl mx-auto w-full",children:f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"space-y-16",children:[f.jsxs("div",{className:"space-y-4",children:[f.jsx("p",{className:"text-xs tracking-[0.3em] uppercase",style:{color:"rgba(154,114,53,0.5)"},children:"The Opportunity"}),f.jsxs("h2",{className:"font-serif leading-tight",style:{fontFamily:"Playfair Display,serif",fontSize:"clamp(36px,5vw,60px)"},children:["You cannot",f.jsx("br",{}),f.jsx("span",{className:"italic",style:{color:"#C4974E"},children:"buy these things."})]})]}),f.jsx("div",{className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:["Twenty years of hands-on agarwood expertise.","Reputation built across generations.","Sourcing relationships with harvesters.","A collector community that trusts the brand.","The story — inherited, not invented.","The knowledge of what makes a great oil."].map((d,m)=>f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:m*.1},className:"flex items-center gap-4 p-5 rounded-xl",style:{background:"rgba(154,114,53,0.08)",border:"1px solid rgba(154,114,53,0.15)"},children:[f.jsx(Mf,{size:18,style:{color:"#C4974E",flexShrink:0}}),f.jsx("p",{className:"text-base",style:{fontFamily:"Cormorant Garamond,serif",fontSize:"17px",color:"rgba(255,253,247,0.8)"},children:d})]},m))}),f.jsx("div",{className:"text-center p-10 rounded-2xl",style:{background:"rgba(154,114,53,0.1)",border:"1px solid rgba(154,114,53,0.2)"},children:f.jsxs("p",{className:"font-display italic text-xl leading-relaxed",style:{fontFamily:"Cormorant Garamond,serif",fontStyle:"italic",color:"rgba(255,253,247,0.85)"},children:["These already exist.",f.jsx("br",{}),"The investment accelerates what already works."]})})]})})}),f.jsx("section",{id:"close",className:"min-h-screen flex flex-col items-center justify-center text-center px-8 py-32",style:{scrollSnapAlign:"start"},children:f.jsxs(ae.div,{variants:be,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"max-w-4xl space-y-12",children:[f.jsxs("div",{className:"space-y-6",children:[f.jsx("div",{className:"w-16 h-px mx-auto",style:{background:"rgba(154,114,53,0.3)"}}),f.jsxs("h2",{className:"font-serif leading-tight",style:{fontFamily:"Playfair Display,serif",fontSize:"clamp(36px,6vw,72px)",color:"#2A2018"},children:["We are not trying to become",f.jsx("br",{}),"the biggest perfume company."]}),f.jsxs("p",{className:"font-display italic text-2xl",style:{fontFamily:"Cormorant Garamond,serif",color:"#9A7235",fontStyle:"italic",fontWeight:300},children:["We are trying to become",f.jsx("br",{}),"the most respected."]}),f.jsx("div",{className:"w-16 h-px mx-auto",style:{background:"rgba(154,114,53,0.3)"}})]}),f.jsx("div",{className:"p-10 rounded-2xl space-y-4",style:{background:"rgba(154,114,53,0.05)",border:"1px solid rgba(154,114,53,0.1)"},children:f.jsxs("p",{className:"font-display italic text-lg leading-relaxed",style:{fontFamily:"Cormorant Garamond,serif",fontStyle:"italic",color:"#5A4A38"},children:["The financial success will follow",f.jsx("br",{}),"the reputation we build."]})}),f.jsxs("div",{className:"space-y-4",children:[f.jsx("p",{className:"text-xs tracking-[0.3em] uppercase",style:{color:"#9A8A78"},children:"Strategic Investment"}),f.jsx("div",{className:"font-serif text-5xl font-light",style:{fontFamily:"Playfair Display,serif",color:"#9A7235"},children:"AED 3,000,000"}),f.jsx("p",{className:"text-sm",style:{color:"#9A8A78"},children:"Partnership Proposal"})]}),f.jsxs("div",{className:"space-y-3 pt-4",children:[f.jsx("p",{className:"text-sm",style:{color:"#7A6A58"},children:"Shahid Ahmed — Bu Nuh"}),f.jsxs("div",{className:"flex items-center justify-center gap-6",children:[f.jsxs("a",{href:"mailto:shahid@nuhoud.com",className:"flex items-center gap-2 text-sm",style:{color:"#9A7235"},children:[f.jsx(w1,{size:14})," shahid@nuhoud.com"]}),f.jsx("span",{className:"opacity-30",children:"|"}),f.jsxs("span",{className:"flex items-center gap-2 text-sm",style:{color:"#9A7235"},children:[f.jsx(S1,{size:14})," Upon Request"]})]})]})]})})]})}vg.createRoot(document.getElementById("root")).render(f.jsx(dg.StrictMode,{children:f.jsx(F1,{})}));

/*! For license information please see 532.3830059e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_weavingwebs_ww_react=self.webpackChunk_weavingwebs_ww_react||[]).push([[532],{"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/dom-helpers/esm/addEventListener.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,onceSupported:()=>onceSupported,optionsSupported:()=>optionsSupported});var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/dom-helpers/esm/canUseDOM.js"),optionsSupported=!1,onceSupported=!1;try{var options={get passive(){return optionsSupported=!0},get once(){return onceSupported=optionsSupported=!0}};_canUseDOM__WEBPACK_IMPORTED_MODULE_0__.default&&(window.addEventListener("test",options,options),window.removeEventListener("test",options,!0))}catch(e){}const __WEBPACK_DEFAULT_EXPORT__=function addEventListener(node,eventName,handler,options){if(options&&"boolean"!=typeof options&&!onceSupported){var once=options.once,capture=options.capture,wrappedHandler=handler;!onceSupported&&once&&(wrappedHandler=handler.__once||function onceHandler(event){this.removeEventListener(eventName,onceHandler,capture),handler.call(this,event)},handler.__once=wrappedHandler),node.addEventListener(eventName,wrappedHandler,optionsSupported?options:capture)}node.addEventListener(eventName,handler,options)}},"./node_modules/dom-helpers/esm/canUseDOM.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=!("undefined"==typeof window||!window.document||!window.document.createElement)},"./node_modules/dom-helpers/esm/contains.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function contains(context,node){return context.contains?context.contains(node):context.compareDocumentPosition?context===node||!!(16&context.compareDocumentPosition(node)):void 0}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>contains})},"./node_modules/dom-helpers/esm/css.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>css});var ownerDocument=__webpack_require__("./node_modules/dom-helpers/esm/ownerDocument.js");function getComputedStyle(node,psuedoElement){return function ownerWindow(node){var doc=(0,ownerDocument.default)(node);return doc&&doc.defaultView||window}(node).getComputedStyle(node,psuedoElement)}var rUpper=/([A-Z])/g;var msPattern=/^ms-/;function hyphenateStyleName(string){return function hyphenate(string){return string.replace(rUpper,"-$1").toLowerCase()}(string).replace(msPattern,"-ms-")}var supportedTransforms=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;const css=function style(node,property){var css="",transforms="";if("string"==typeof property)return node.style.getPropertyValue(hyphenateStyleName(property))||getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));Object.keys(property).forEach((function(key){var value=property[key];value||0===value?!function isTransform(value){return!(!value||!supportedTransforms.test(value))}(key)?css+=hyphenateStyleName(key)+": "+value+";":transforms+=key+"("+value+") ":node.style.removeProperty(hyphenateStyleName(key))})),transforms&&(css+="transform: "+transforms+";"),node.style.cssText+=";"+css}},"./node_modules/dom-helpers/esm/hasClass.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function hasClass(element,className){return element.classList?!!className&&element.classList.contains(className):-1!==(" "+(element.className.baseVal||element.className)+" ").indexOf(" "+className+" ")}__webpack_require__.d(__webpack_exports__,{Z:()=>hasClass})},"./node_modules/dom-helpers/esm/listen.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _addEventListener__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/dom-helpers/esm/addEventListener.js"),_removeEventListener__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/dom-helpers/esm/removeEventListener.js");const __WEBPACK_DEFAULT_EXPORT__=function listen(node,eventName,handler,options){return(0,_addEventListener__WEBPACK_IMPORTED_MODULE_0__.default)(node,eventName,handler,options),function(){(0,_removeEventListener__WEBPACK_IMPORTED_MODULE_1__.default)(node,eventName,handler,options)}}},"./node_modules/dom-helpers/esm/ownerDocument.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function ownerDocument(node){return node&&node.ownerDocument||document}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>ownerDocument})},"./node_modules/dom-helpers/esm/removeEventListener.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function removeEventListener(node,eventName,handler,options){var capture=options&&"boolean"!=typeof options?options.capture:options;node.removeEventListener(eventName,handler,capture),handler.__once&&node.removeEventListener(eventName,handler.__once,capture)}},"./node_modules/dom-helpers/esm/transitionEnd.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>transitionEnd});var css=__webpack_require__("./node_modules/dom-helpers/esm/css.js"),listen=__webpack_require__("./node_modules/dom-helpers/esm/listen.js");function emulateTransitionEnd(element,duration,padding){void 0===padding&&(padding=5);var called=!1,handle=setTimeout((function(){called||function triggerEvent(node,eventName,bubbles,cancelable){if(void 0===bubbles&&(bubbles=!1),void 0===cancelable&&(cancelable=!0),node){var event=document.createEvent("HTMLEvents");event.initEvent(eventName,bubbles,cancelable),node.dispatchEvent(event)}}(element,"transitionend",!0)}),duration+padding),remove=(0,listen.default)(element,"transitionend",(function(){called=!0}),{once:!0});return function(){clearTimeout(handle),remove()}}function transitionEnd(element,handler,duration,padding){null==duration&&(duration=function parseDuration(node){var str=(0,css.default)(node,"transitionDuration")||"",mult=-1===str.indexOf("ms")?1e3:1;return parseFloat(str)*mult}(element)||0);var removeEmulate=emulateTransitionEnd(element,duration,padding),remove=(0,listen.default)(element,"transitionend",handler);return function(){removeEmulate(),remove()}}},"./node_modules/react-icons/fa6/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z1Y:()=>FaArrowRight,esY:()=>FaCopy,x_l:()=>FaArrowLeft});var _lib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-icons/lib/esm/index.js");function FaArrowLeft(props){return(0,_lib__WEBPACK_IMPORTED_MODULE_0__.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"}}]})(props)}function FaArrowRight(props){return(0,_lib__WEBPACK_IMPORTED_MODULE_0__.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"}}]})(props)}function FaCopy(props){return(0,_lib__WEBPACK_IMPORTED_MODULE_0__.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"}}]})(props)}},"./node_modules/react-icons/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon});var react=__webpack_require__("./node_modules/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}},"./node_modules/react-transition-group/esm/Transition.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ENTERED:()=>ENTERED,ENTERING:()=>ENTERING,EXITED:()=>EXITED,EXITING:()=>EXITING,UNMOUNTED:()=>UNMOUNTED,default:()=>esm_Transition});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js");const config_disabled=!1,TransitionGroupContext=react.createContext(null);var UNMOUNTED="unmounted",EXITED="exited",ENTERING="entering",ENTERED="entered",EXITING="exiting",Transition=function(_React$Component){function Transition(props,context){var _this;_this=_React$Component.call(this,props,context)||this;var initialStatus,appear=context&&!context.isMounting?props.enter:props.appear;return _this.appearStatus=null,props.in?appear?(initialStatus=EXITED,_this.appearStatus=ENTERING):initialStatus=ENTERED:initialStatus=props.unmountOnExit||props.mountOnEnter?UNMOUNTED:EXITED,_this.state={status:initialStatus},_this.nextCallback=null,_this}!function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,_setPrototypeOf(subClass,superClass)}(Transition,_React$Component),Transition.getDerivedStateFromProps=function getDerivedStateFromProps(_ref,prevState){return _ref.in&&prevState.status===UNMOUNTED?{status:EXITED}:null};var _proto=Transition.prototype;return _proto.componentDidMount=function componentDidMount(){this.updateStatus(!0,this.appearStatus)},_proto.componentDidUpdate=function componentDidUpdate(prevProps){var nextStatus=null;if(prevProps!==this.props){var status=this.state.status;this.props.in?status!==ENTERING&&status!==ENTERED&&(nextStatus=ENTERING):status!==ENTERING&&status!==ENTERED||(nextStatus=EXITING)}this.updateStatus(!1,nextStatus)},_proto.componentWillUnmount=function componentWillUnmount(){this.cancelNextCallback()},_proto.getTimeouts=function getTimeouts(){var exit,enter,appear,timeout=this.props.timeout;return exit=enter=appear=timeout,null!=timeout&&"number"!=typeof timeout&&(exit=timeout.exit,enter=timeout.enter,appear=void 0!==timeout.appear?timeout.appear:enter),{exit,enter,appear}},_proto.updateStatus=function updateStatus(mounting,nextStatus){if(void 0===mounting&&(mounting=!1),null!==nextStatus)if(this.cancelNextCallback(),nextStatus===ENTERING){if(this.props.unmountOnExit||this.props.mountOnEnter){var node=this.props.nodeRef?this.props.nodeRef.current:react_dom.findDOMNode(this);node&&function forceReflow(node){node.scrollTop}(node)}this.performEnter(mounting)}else this.performExit();else this.props.unmountOnExit&&this.state.status===EXITED&&this.setState({status:UNMOUNTED})},_proto.performEnter=function performEnter(mounting){var _this2=this,enter=this.props.enter,appearing=this.context?this.context.isMounting:mounting,_ref2=this.props.nodeRef?[appearing]:[react_dom.findDOMNode(this),appearing],maybeNode=_ref2[0],maybeAppearing=_ref2[1],timeouts=this.getTimeouts(),enterTimeout=appearing?timeouts.appear:timeouts.enter;!mounting&&!enter||config_disabled?this.safeSetState({status:ENTERED},(function(){_this2.props.onEntered(maybeNode)})):(this.props.onEnter(maybeNode,maybeAppearing),this.safeSetState({status:ENTERING},(function(){_this2.props.onEntering(maybeNode,maybeAppearing),_this2.onTransitionEnd(enterTimeout,(function(){_this2.safeSetState({status:ENTERED},(function(){_this2.props.onEntered(maybeNode,maybeAppearing)}))}))})))},_proto.performExit=function performExit(){var _this3=this,exit=this.props.exit,timeouts=this.getTimeouts(),maybeNode=this.props.nodeRef?void 0:react_dom.findDOMNode(this);exit&&!config_disabled?(this.props.onExit(maybeNode),this.safeSetState({status:EXITING},(function(){_this3.props.onExiting(maybeNode),_this3.onTransitionEnd(timeouts.exit,(function(){_this3.safeSetState({status:EXITED},(function(){_this3.props.onExited(maybeNode)}))}))}))):this.safeSetState({status:EXITED},(function(){_this3.props.onExited(maybeNode)}))},_proto.cancelNextCallback=function cancelNextCallback(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},_proto.safeSetState=function safeSetState(nextState,callback){callback=this.setNextCallback(callback),this.setState(nextState,callback)},_proto.setNextCallback=function setNextCallback(callback){var _this4=this,active=!0;return this.nextCallback=function(event){active&&(active=!1,_this4.nextCallback=null,callback(event))},this.nextCallback.cancel=function(){active=!1},this.nextCallback},_proto.onTransitionEnd=function onTransitionEnd(timeout,handler){this.setNextCallback(handler);var node=this.props.nodeRef?this.props.nodeRef.current:react_dom.findDOMNode(this),doesNotHaveTimeoutOrListener=null==timeout&&!this.props.addEndListener;if(node&&!doesNotHaveTimeoutOrListener){if(this.props.addEndListener){var _ref3=this.props.nodeRef?[this.nextCallback]:[node,this.nextCallback],maybeNode=_ref3[0],maybeNextCallback=_ref3[1];this.props.addEndListener(maybeNode,maybeNextCallback)}null!=timeout&&setTimeout(this.nextCallback,timeout)}else setTimeout(this.nextCallback,0)},_proto.render=function render(){var status=this.state.status;if(status===UNMOUNTED)return null;var _this$props=this.props,children=_this$props.children,childProps=(_this$props.in,_this$props.mountOnEnter,_this$props.unmountOnExit,_this$props.appear,_this$props.enter,_this$props.exit,_this$props.timeout,_this$props.addEndListener,_this$props.onEnter,_this$props.onEntering,_this$props.onEntered,_this$props.onExit,_this$props.onExiting,_this$props.onExited,_this$props.nodeRef,function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_this$props,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return react.createElement(TransitionGroupContext.Provider,{value:null},"function"==typeof children?children(status,childProps):react.cloneElement(react.Children.only(children),childProps))},Transition}(react.Component);function noop(){}Transition.contextType=TransitionGroupContext,Transition.propTypes={},Transition.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:noop,onEntering:noop,onEntered:noop,onExit:noop,onExiting:noop,onExited:noop},Transition.UNMOUNTED=UNMOUNTED,Transition.EXITED=EXITED,Transition.ENTERING=ENTERING,Transition.ENTERED=ENTERED,Transition.EXITING=EXITING;const esm_Transition=Transition},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
"use strict";(self.webpackChunk_ltht_react_storybook=self.webpackChunk_ltht_react_storybook||[]).push([[4893],{"../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CacheProvider:()=>_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.C,ClassNames:()=>ClassNames,Global:()=>Global,ThemeContext:()=>_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.T,ThemeProvider:()=>_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.a,__unsafe_useEmotionCache:()=>_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__._,createElement:()=>jsx,css:()=>css,jsx:()=>jsx,keyframes:()=>keyframes,useTheme:()=>_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.u,withEmotionCache:()=>_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.w,withTheme:()=>_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.b});var _emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_emotion_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),jsx=(__webpack_require__("../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),function jsx(type,props){var args=arguments;if(null==props||!_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.h.call(props,"css"))return react__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0,args);var argsLength=args.length,createElementArgArray=new Array(argsLength);createElementArgArray[0]=_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.E,createElementArgArray[1]=(0,_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.c)(type,props);for(var i=2;i<argsLength;i++)createElementArgArray[i]=args[i];return react__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(null,createElementArgArray)}),Global=(0,_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.w)((function(props,cache){var styles=props.styles,serialized=(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__.O)([styles],void 0,react__WEBPACK_IMPORTED_MODULE_1__.useContext(_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.T));if(!_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.i){for(var _ref,serializedNames=serialized.name,serializedStyles=serialized.styles,next=serialized.next;void 0!==next;)serializedNames+=" "+next.name,serializedStyles+=next.styles,next=next.next;var shouldCache=!0===cache.compat,rules=cache.insert("",{name:serializedNames,styles:serializedStyles},cache.sheet,shouldCache);return shouldCache?null:react__WEBPACK_IMPORTED_MODULE_1__.createElement("style",((_ref={})["data-emotion"]=cache.key+"-global "+serializedNames,_ref.dangerouslySetInnerHTML={__html:rules},_ref.nonce=cache.sheet.nonce,_ref))}var sheetRef=react__WEBPACK_IMPORTED_MODULE_1__.useRef();return(0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_2__.j)((function(){var key=cache.key+"-global",sheet=new cache.sheet.constructor({key,nonce:cache.sheet.nonce,container:cache.sheet.container,speedy:cache.sheet.isSpeedy}),rehydrating=!1,node=document.querySelector('style[data-emotion="'+key+" "+serialized.name+'"]');return cache.sheet.tags.length&&(sheet.before=cache.sheet.tags[0]),null!==node&&(rehydrating=!0,node.setAttribute("data-emotion",key),sheet.hydrate([node])),sheetRef.current=[sheet,rehydrating],function(){sheet.flush()}}),[cache]),(0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_2__.j)((function(){var sheetRefCurrent=sheetRef.current,sheet=sheetRefCurrent[0];if(sheetRefCurrent[1])sheetRefCurrent[1]=!1;else{if(void 0!==serialized.next&&(0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.My)(cache,serialized.next,!0),sheet.tags.length){var element=sheet.tags[sheet.tags.length-1].nextElementSibling;sheet.before=element,sheet.flush()}cache.insert("",serialized,sheet,!1)}}),[cache,serialized.name]),null}));function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__.O)(args)}var keyframes=function keyframes(){var insertable=css.apply(void 0,arguments),name="animation-"+insertable.name;return{name,styles:"@keyframes "+name+"{"+insertable.styles+"}",anim:1,toString:function toString(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},classnames=function classnames(args){for(var len=args.length,i=0,cls="";i<len;i++){var arg=args[i];if(null!=arg){var toAdd=void 0;switch(typeof arg){case"boolean":break;case"object":if(Array.isArray(arg))toAdd=classnames(arg);else for(var k in toAdd="",arg)arg[k]&&k&&(toAdd&&(toAdd+=" "),toAdd+=k);break;default:toAdd=arg}toAdd&&(cls&&(cls+=" "),cls+=toAdd)}}return cls};var Insertion=function Insertion(_ref){var cache=_ref.cache,serializedArr=_ref.serializedArr;return(0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_2__.L)((function(){for(var i=0;i<serializedArr.length;i++)(0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.My)(cache,serializedArr[i],!1)})),null},ClassNames=(0,_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.w)((function(props,cache){var serializedArr=[],css=function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var serialized=(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__.O)(args,cache.registered);return serializedArr.push(serialized),(0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.hC)(cache,serialized,!1),cache.key+"-"+serialized.name},content={css,cx:function cx(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return function merge(registered,css,className){var registeredStyles=[],rawClassName=(0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.fp)(registered,registeredStyles,className);return registeredStyles.length<2?className:rawClassName+css(registeredStyles)}(cache.registered,css,classnames(args))},theme:react__WEBPACK_IMPORTED_MODULE_1__.useContext(_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.T)},ele=props.children(content);return!0,react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(Insertion,{cache,serializedArr}),ele)}))},"./src/ui/atoms/headers/headers.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PageHeaderStory:()=>PageHeaderStory,SubHeaderStory:()=>SubHeaderStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ltht_react_header__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/styled/header/lib/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const PageHeaderStory=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ltht_react_header__WEBPACK_IMPORTED_MODULE_0__.PageHeader,{children:"Header"});PageHeaderStory.displayName="PageHeaderStory",PageHeaderStory.storyName="Page Header";const SubHeaderStory=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ltht_react_header__WEBPACK_IMPORTED_MODULE_0__.SubHeader,{children:"Sub Header"});SubHeaderStory.displayName="SubHeaderStory",SubHeaderStory.storyName="Sub Header";const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Atoms/Headers"};PageHeaderStory.parameters={...PageHeaderStory.parameters,docs:{...PageHeaderStory.parameters?.docs,source:{originalSource:"() => <PageHeader>Header</PageHeader>",...PageHeaderStory.parameters?.docs?.source}}},SubHeaderStory.parameters={...SubHeaderStory.parameters,docs:{...SubHeaderStory.parameters?.docs,source:{originalSource:"() => <SubHeader>Sub Header</SubHeader>",...SubHeaderStory.parameters?.docs?.source}}};const __namedExportsOrder=["PageHeaderStory","SubHeaderStory"]},"../../components/styled/header/lib/atoms/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SubHeader=exports.PageHeader=void 0;var page_header_1=__webpack_require__("../../components/styled/header/lib/atoms/page-header.js");Object.defineProperty(exports,"PageHeader",{enumerable:!0,get:function(){return __importDefault(page_header_1).default}});var sub_header_1=__webpack_require__("../../components/styled/header/lib/atoms/sub-header.js");Object.defineProperty(exports,"SubHeader",{enumerable:!0,get:function(){return __importDefault(sub_header_1).default}})},"../../components/styled/header/lib/atoms/page-header.js":function(__unused_webpack_module,exports,__webpack_require__){var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,jsx_runtime_1=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_1=__importDefault(__webpack_require__("../../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),styles_1=__webpack_require__("../styles/lib/index.js"),StyledPageHeader=styled_1.default.h1(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  list-style: none;\n  padding-left: 0.5rem;\n  color: ",";\n  text-align: center;\n"],["\n  list-style: none;\n  padding-left: 0.5rem;\n  color: ",";\n  text-align: center;\n"])),styles_1.TEXT_COLOURS.PRIMARY);exports.default=function(_a){var children=_a.children,rest=__rest(_a,["children"]);return(0,jsx_runtime_1.jsx)(StyledPageHeader,__assign({},rest,{children}))}},"../../components/styled/header/lib/atoms/sub-header.js":function(__unused_webpack_module,exports,__webpack_require__){var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,jsx_runtime_1=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_1=__importDefault(__webpack_require__("../../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),styles_1=__webpack_require__("../styles/lib/index.js"),StyledSubHeader=styled_1.default.h3(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  list-style: none;\n  padding-left: 0.5rem;\n  color: ",";\n  text-align: center;\n"],["\n  list-style: none;\n  padding-left: 0.5rem;\n  color: ",";\n  text-align: center;\n"])),styles_1.TEXT_COLOURS.PRIMARY);exports.default=function(_a){var children=_a.children,rest=__rest(_a,["children"]);return(0,jsx_runtime_1.jsx)(StyledSubHeader,__assign({},rest,{children}))}},"../../components/styled/header/lib/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(__webpack_require__("../../components/styled/header/lib/atoms/index.js"),exports)},"../styles/lib/atoms/colours.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0}),exports.BANNER_COLOURS=exports.BTN_COLOURS=exports.SCROLLBAR=exports.TRANSLUCENT_GREY_TABLE=exports.TRANSLUCENT_BRIGHT_BLUE_TABLE=exports.HIGHLIGHT_GREEN=exports.TRANSLUCENT_MID_GREY=exports.TRANSLUCENT_DARK_BLUE=exports.TRANSLUCENT_BRIGHT_BLUE=exports.TRANSLUCENT_WARM_YELLOW=exports.PATIENT_NHS_NUMBER_STATUS_NOT_VERIFIED=exports.PATIENT_NHS_NUMBER_STATUS_VERIFIED=exports.PATIENT_BANNER_LABEL_COLOUR=exports.PATIENT_BANNER_TEXT_COLOUR=exports.PATIENT_BANNER_BACKGROUND_COLOUR=exports.PATIENT_BANNER_DECEASED_BACKGROUND_COLOUR=exports.CARD_LIST_ITEM_SELECTED_BACKGROUND=exports.CARD_LIST_ITEM_BORDER_HOVER=exports.CARD_LIST_ITEM_BORDER_COLOUR=exports.CARD_LIST_ITEM_BACKGROUND_HOVER=exports.CARD_SHADOW_COLOUR=exports.CARD_BORDER_COLOUR=exports.CARD_BACKGROUND_COLOUR_NO_DATA=exports.CARD_BACKGROUND_COLOUR=exports.EFORM_BACKGROUND_COLOUR=exports.TABLE_COLOURS=exports.BADGE_COLOURS=exports.LINK_COLOURS=exports.ICON_COLOURS=exports.TEXT_COLOURS=exports.SELECT_COLOURS=exports.INPUT_COLOURS=void 0;var colours=__importStar(__webpack_require__("../styles/lib/atoms/nhs-colours.js"));exports.INPUT_COLOURS={RADIO_SELECTED:colours.NHS_LIGHT_GREEN.LIGHTER75},exports.SELECT_COLOURS={OPTION_SELECTED:colours.NHS_LIGHT_GREEN.LIGHTER75,OPTION_HOVER:colours.NHS_LIGHT_GREEN.LIGHTER75},exports.TEXT_COLOURS={PRIMARY:colours.NHS_BLACK,SECONDARY:colours.NHS_MID_GREY,DANGER:colours.NHS_DARK_RED,INFO:colours.NHS_DARK_BLUE.VALUE,INDICATORS:{WARN:"#926100"}},exports.ICON_COLOURS={PRIMARY:colours.NHS_BLACK,SECONDARY:colours.NHS_DARK_BLUE.VALUE,INFO:colours.NHS_BRIGHT_BLUE,SUCCESS:colours.NHS_GREEN,WARNING:colours.NHS_ORANGE,DANGER:colours.NHS_EMERGENCY_SERVICES_RED.VALUE,GREY:colours.NHS_MID_GREY,WHITE:colours.NHS_WHITE},exports.LINK_COLOURS={BACKGROUND:{DEFAULT:"rgb(238, 248, 255)",HOVER:"rgba(238, 248, 255, 0.8)"},TEXT:{DEFAULT:"rgb(0, 145, 255)",HOVER:"rgba(0, 145, 255, 0.8)"}},exports.BADGE_COLOURS={PRIMARY:colours.NHS_DARK_BLUE.VALUE,STANDARD:colours.NHS_LIGHT_BLUE.VALUE,WORKFLOW:colours.NHS_GREEN.VALUE,DANGER:colours.NHS_EMERGENCY_SERVICES_RED.VALUE,WARNING:colours.NHS_ORANGE},exports.TABLE_COLOURS={STRIPE_LIGHT:"#FFFFFF",STRIPE_DARK:"#F4FAFF",HEADER:"#F3F6F6",BORDER:"#EEEEEE"},exports.EFORM_BACKGROUND_COLOUR=colours.NHS_WHITE,exports.CARD_BACKGROUND_COLOUR=colours.NHS_WHITE,exports.CARD_BACKGROUND_COLOUR_NO_DATA="#F2F2F2",exports.CARD_BORDER_COLOUR="#b0b0b0",exports.CARD_SHADOW_COLOUR="#666666",exports.CARD_LIST_ITEM_BACKGROUND_HOVER=colours.NHS_PALE_GREY,exports.CARD_LIST_ITEM_BORDER_COLOUR="#d8d8d8",exports.CARD_LIST_ITEM_BORDER_HOVER="#b0b0b0",exports.CARD_LIST_ITEM_SELECTED_BACKGROUND=colours.NHS_LIGHT_GREEN.LIGHTER75,exports.PATIENT_BANNER_DECEASED_BACKGROUND_COLOUR=colours.NHS_BLACK,exports.PATIENT_BANNER_BACKGROUND_COLOUR="#56008c",exports.PATIENT_BANNER_TEXT_COLOUR="#FFF",exports.PATIENT_BANNER_LABEL_COLOUR="#CCC",exports.PATIENT_NHS_NUMBER_STATUS_VERIFIED="#4cc552",exports.PATIENT_NHS_NUMBER_STATUS_NOT_VERIFIED="#f33",exports.TRANSLUCENT_WARM_YELLOW=colours.NHS_TRANSLUCENT_WARM_YELLOW,exports.TRANSLUCENT_BRIGHT_BLUE=colours.NHS_TRANSLUCENT_BRIGHT_BLUE,exports.TRANSLUCENT_DARK_BLUE=colours.NHS_TRANSLUCENT_DARK_BLUE,exports.TRANSLUCENT_MID_GREY=colours.NHS_TRANSLUCENT_MID_GREY,exports.HIGHLIGHT_GREEN=colours.NHS_HIGHLIGHT_GREEN,exports.TRANSLUCENT_BRIGHT_BLUE_TABLE=colours.NHS_TRANSLUCENT_BRIGHT_BLUE_TABLE,exports.TRANSLUCENT_GREY_TABLE=colours.NHS_TRANSLUCENT_MID_GREY_TABLE,exports.SCROLLBAR=colours.NHS_GREY_3,exports.BTN_COLOURS={PRIMARY:{VALUE:colours.NHS_DARK_BLUE.VALUE,DISABLED:colours.NHS_DARK_BLUE.LIGHTER25,HOVER:colours.NHS_DARK_BLUE.DARKER25,TEXT:colours.NHS_WHITE},STANDARD:{VALUE:colours.NHS_LIGHT_BLUE.VALUE,DISABLED:colours.NHS_LIGHT_BLUE.LIGHTER25,HOVER:colours.NHS_LIGHT_BLUE.DARKER25,TEXT:colours.NHS_WHITE},WORKFLOW:{VALUE:colours.NHS_GREEN.VALUE,DISABLED:colours.NHS_GREEN.LIGHTER25,HOVER:colours.NHS_GREEN.DARKER25,TEXT:colours.NHS_WHITE},DANGER:{VALUE:colours.NHS_EMERGENCY_SERVICES_RED.VALUE,DISABLED:colours.NHS_EMERGENCY_SERVICES_RED.LIGHTER25,HOVER:colours.NHS_EMERGENCY_SERVICES_RED.DARKER25,TEXT:colours.NHS_WHITE},CLEAR:{VALUE:colours.NHS_WHITE,DISABLED:colours.NHS_MID_GREY.LIGHTER25,HOVER:colours.NHS_TRANSLUCENT_MID_GREY,TEXT:colours.NHS_BLACK}},exports.BANNER_COLOURS={DEFAULT:{BACKGROUND:"#edecec",TEXT:"#626262",BORDER:"#e4e4e4",ICON:"#919090",HOVER:"#c8c5c5"},INFO:{BACKGROUND:"#cbdbee",TEXT:"#0053c3",BORDER:"#bdd2ec",ICON:"#107dbd",HOVER:"#b2cae6"},WARNING:{BACKGROUND:"#fef3cd",TEXT:"#926100",BORDER:"#faeab4",ICON:"#ffa500",HOVER:"#faeab1"},DANGER:{BACKGROUND:"#eeacbd",TEXT:"#a41e40",BORDER:"#ec9bb0",ICON:"#f50b47",HOVER:"#ea94aa"},HIGHLIGHT:{BACKGROUND:colours.NHS_HIGHLIGHT_GREEN.DARKER25,TEXT:"#0053c3",BORDER:"#bdd2ec",ICON:"#107dbd",HOVER:colours.NHS_HIGHLIGHT_GREEN.DARKER50}}},"../styles/lib/atoms/css-reset.js":function(__unused_webpack_module,exports,__webpack_require__){var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,react_1=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),colours_1=__webpack_require__("../styles/lib/atoms/colours.js"),media_queries_1=__webpack_require__("../styles/lib/atoms/media-queries.js"),CSS_RESET=(0,react_1.css)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  *,\n  ::before,\n  ::after {\n    box-sizing: border-box;\n  }\n\n  color: ",";\n  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 0.8rem;\n\n  & h3 {\n    font-size: 1rem;\n  }\n\n  "," {\n    font-size: 0.9rem;\n  }\n\n  "," {\n    font-size: 0.9rem;\n    & h3 {\n      font-size: 1rem;\n    }\n  }\n\n  "," {\n    font-size: 0.9rem;\n    & h3 {\n      font-size: 1.1rem;\n    }\n  }\n"],["\n  *,\n  ::before,\n  ::after {\n    box-sizing: border-box;\n  }\n\n  color: ",";\n  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 0.8rem;\n\n  & h3 {\n    font-size: 1rem;\n  }\n\n  "," {\n    font-size: 0.9rem;\n  }\n\n  "," {\n    font-size: 0.9rem;\n    & h3 {\n      font-size: 1rem;\n    }\n  }\n\n  "," {\n    font-size: 0.9rem;\n    & h3 {\n      font-size: 1.1rem;\n    }\n  }\n"])),colours_1.TEXT_COLOURS.PRIMARY,media_queries_1.TABLET_ONLY_MEDIA_QUERY,media_queries_1.DESKTOP_ONLY_MEDIA_QUERY,media_queries_1.WIDESCREEN_MINIMUM_MEDIA_QUERY);exports.default=CSS_RESET},"../styles/lib/atoms/icons.js":function(__unused_webpack_module,exports,__webpack_require__){var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked};Object.defineProperty(exports,"__esModule",{value:!0}),exports.calculateIconColor=exports.calculateIconSize=exports.iconTypes=exports.ICON_SIZE_LARGE=exports.ICON_SIZE_MEDIUM=exports.ICON_SIZE_SMALL=void 0;var react_1=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),colours_1=__webpack_require__("../styles/lib/atoms/colours.js");exports.ICON_SIZE_SMALL="1rem",exports.ICON_SIZE_MEDIUM="1rem",exports.ICON_SIZE_LARGE="1rem",exports.iconTypes=["bullseye","calendar","caret-square-down","check","chevron-circle","chevron","circle","clock-rotate-left","column","comment","counter","cross","edit","ellipsis-horizontal","ellipsis-vertical","exclamation","external-link","filter","folder-plus","grid-layout","hamburger","info-circle","keyboard","layer-group","list-layout","pause","play","plus","spinner","star","stop","table","toggle-off","toggle-on","trash","user","users","dot-circle","search","checkbox","square","paper-clip","unlink","link","link-slash","do-not-use!"];exports.calculateIconSize=function(input){switch(input){case"large":return"lg";case"medium":return"sm";case"small":return"xs";default:return"1x"}};var templateObject_1;exports.calculateIconColor=function(color){return(0,react_1.css)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"],["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"])),"black"===color&&"color: ".concat(colours_1.ICON_COLOURS.PRIMARY,";"),"dark-blue"===color&&"color: ".concat(colours_1.ICON_COLOURS.SECONDARY,";"),"link-blue"===color&&"color: ".concat(colours_1.LINK_COLOURS.TEXT.DEFAULT,";"),"grey"===color&&"color: ".concat(colours_1.ICON_COLOURS.GREY.VALUE,";"),"info-blue"===color&&"color: ".concat(colours_1.ICON_COLOURS.INFO,";"),"green"===color&&"color: ".concat(colours_1.ICON_COLOURS.SUCCESS.VALUE,";"),"amber"===color&&"color: ".concat(colours_1.ICON_COLOURS.WARNING,";"),"red"===color&&"color: ".concat(colours_1.ICON_COLOURS.DANGER,";"),"white"===color&&"color: ".concat(colours_1.ICON_COLOURS.WHITE,";"))}},"../styles/lib/atoms/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.CSS_RESET=void 0,__exportStar(__webpack_require__("../styles/lib/atoms/colours.js"),exports);var css_reset_1=__webpack_require__("../styles/lib/atoms/css-reset.js");Object.defineProperty(exports,"CSS_RESET",{enumerable:!0,get:function(){return __importDefault(css_reset_1).default}}),__exportStar(__webpack_require__("../styles/lib/atoms/icons.js"),exports),__exportStar(__webpack_require__("../styles/lib/atoms/media-queries.js"),exports),__exportStar(__webpack_require__("../styles/lib/atoms/inputs.js"),exports),__exportStar(__webpack_require__("../styles/lib/atoms/z-indexes.js"),exports)},"../styles/lib/atoms/inputs.js":function(__unused_webpack_module,exports,__webpack_require__){var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked};Object.defineProperty(exports,"__esModule",{value:!0}),exports.inputBaseStyles=void 0;var templateObject_1,react_1=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js");exports.inputBaseStyles=(0,react_1.css)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  border-color: darkgrey;\n  border-radius: 5px;\n  border-width: 2px !important;\n  border-style: solid;\n"],["\n  border-color: darkgrey;\n  border-radius: 5px;\n  border-width: 2px !important;\n  border-style: solid;\n"])))},"../styles/lib/atoms/media-queries.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.WIDESCREEN_MINIMUM_MEDIA_QUERY=exports.DESKTOP_ONLY_MEDIA_QUERY=exports.DESKTOP_MINIMUM_MEDIA_QUERY=exports.TABLET_ONLY_MEDIA_QUERY=exports.TABLET_MINIMUM_MEDIA_QUERY=exports.MOBILE_MAXIMUM_MEDIA_QUERY=exports.SMALL_SCREEN_MAXIMUM_MEDIA_QUERY=void 0,exports.SMALL_SCREEN_MAXIMUM_MEDIA_QUERY="@media only screen and (max-width: 400px)",exports.MOBILE_MAXIMUM_MEDIA_QUERY="@media only screen and (max-width: 767px)",exports.TABLET_MINIMUM_MEDIA_QUERY="@media only screen and (min-width: 768px)",exports.TABLET_ONLY_MEDIA_QUERY="@media only screen and (min-width: 768px) and (max-width: 1023px)",exports.DESKTOP_MINIMUM_MEDIA_QUERY="@media only screen and (min-width: 1024px)",exports.DESKTOP_ONLY_MEDIA_QUERY="@media only screen and (min-width: 1024px) and (max-width: 1199px)",exports.WIDESCREEN_MINIMUM_MEDIA_QUERY="@media only screen and (min-width: 1200px)"},"../styles/lib/atoms/nhs-colours.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.NHS_TRANSLUCENT_MID_GREY_TABLE=exports.NHS_TRANSLUCENT_BRIGHT_BLUE_TABLE=exports.NHS_TRANSLUCENT_MID_GREY=exports.NHS_TRANSLUCENT_DARK_BLUE=exports.NHS_TRANSLUCENT_BRIGHT_BLUE=exports.NHS_TRANSLUCENT_WARM_YELLOW=exports.NHS_GREY_3=exports.NHS_YELLOW=exports.NHS_WARM_YELLOW=exports.NHS_ORANGE=exports.NHS_DARK_RED=exports.NHS_PINK=exports.NHS_DARK_PINK=exports.NHS_PURPLE=exports.NHS_AQUA_GREEN=exports.NHS_EMERGENCY_SERVICES_RED=exports.NHS_LIGHT_GREEN=exports.NHS_HIGHLIGHT_GREEN=exports.NHS_GREEN=exports.NHS_DARK_GREEN=exports.NHS_WHITE=exports.NHS_PALE_GREY=exports.NHS_MID_GREY=exports.NHS_DARK_GREY=exports.NHS_BLACK=exports.NHS_DARK_BLUE=exports.NHS_LIGHT_BLUE=exports.NHS_BRIGHT_BLUE=exports.NHS_AQUA_BLUE=exports.NHS_BLUE=void 0,exports.NHS_BLUE="#005EB8",exports.NHS_AQUA_BLUE="#00A9CE",exports.NHS_BRIGHT_BLUE="#0072CE",exports.NHS_LIGHT_BLUE={VALUE:"#41B6E6",DARKER25:"#3189ad",LIGHTER25:"#71c8ec"},exports.NHS_DARK_BLUE={VALUE:"#003087",DARKER25:"#002a6e",LIGHTER25:"#406aae",LIGHTER50:"#7FAFFF"},exports.NHS_BLACK="#231f20",exports.NHS_DARK_GREY="#425563",exports.NHS_MID_GREY={VALUE:"#768692",DARKER25:"#59656e",LIGHTER25:"#98a4ad"},exports.NHS_PALE_GREY="#E8EDEE",exports.NHS_WHITE="#FFFFFF",exports.NHS_DARK_GREEN="#006747",exports.NHS_GREEN={VALUE:"#009639",DARKER25:"#00712b",LIGHTER25:"#40b06b"},exports.NHS_HIGHLIGHT_GREEN={VALUE:"#E6FF99",DARKER25:"#cfe589",DARKER50:"#b8cc7a",LIGHTER25:"#ebffad",LIGHTER75:"#f5ffd6"},exports.NHS_LIGHT_GREEN={VALUE:"#78BE20",DARKER25:"#5a8f18",LIGHTER25:"#9ace58",LIGHTER75:"#ddefc7"},exports.NHS_EMERGENCY_SERVICES_RED={VALUE:"rgb(218, 41, 28)",DARKER25:"rgb(165, 37, 25)",LIGHTER25:"rgb(231,77,66)"},exports.NHS_AQUA_GREEN="#00A499",exports.NHS_PURPLE="#330072",exports.NHS_DARK_PINK="#7C2855",exports.NHS_PINK="#AE2573",exports.NHS_DARK_RED="#8A1538",exports.NHS_ORANGE="#ED8B00",exports.NHS_WARM_YELLOW="#FFB81C",exports.NHS_YELLOW="#FAE100",exports.NHS_GREY_3="#AEB7BD",exports.NHS_TRANSLUCENT_WARM_YELLOW="rgba(255, 184, 28, 0.2)",exports.NHS_TRANSLUCENT_BRIGHT_BLUE="rgba(0, 114, 206, 0.2)",exports.NHS_TRANSLUCENT_DARK_BLUE="rgba(0, 48, 135, 0.1)",exports.NHS_TRANSLUCENT_MID_GREY="rgba(118, 134, 146, 0.1)",exports.NHS_TRANSLUCENT_BRIGHT_BLUE_TABLE="rgba(0, 114, 206, 0.05)",exports.NHS_TRANSLUCENT_MID_GREY_TABLE="rgba(118, 134, 146, 0.05)"},"../styles/lib/atoms/z-indexes.js":function(__unused_webpack_module,exports){var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getZIndex=exports.PopUp=exports.Tooltip=exports.TableDataWithPopUp=exports.StickyTableHead=exports.StickyTableData=void 0;exports.StickyTableData="stickyTableData",exports.StickyTableHead="stickyTableHead",exports.TableDataWithPopUp="tableDataWithPopUp",exports.Tooltip="tooltip",exports.PopUp="popup";var zIndexes=[exports.StickyTableData,exports.TableDataWithPopUp,exports.StickyTableHead,exports.Tooltip,exports.PopUp],zIndexProps=zIndexes.reduce((function(agg,layerName,index){var _a;return __assign(__assign({},agg),((_a={})[layerName]=100*(index+1),_a))}),{});exports.getZIndex=function(zIndex){return zIndexProps[zIndex]}},"../styles/lib/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(__webpack_require__("../styles/lib/atoms/index.js"),exports)}}]);
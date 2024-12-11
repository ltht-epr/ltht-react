"use strict";(self.webpackChunk_ltht_react_storybook=self.webpackChunk_ltht_react_storybook||[]).push([[9956],{"./src/ui/molecules/menu/action-menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultActionMenu:()=>DefaultActionMenu,MenuWithButton:()=>MenuWithButton,MenuWithColouredCustomIcon:()=>MenuWithColouredCustomIcon,MenuWithCustomIcon:()=>MenuWithCustomIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>action_menu_stories});var lib=__webpack_require__("../../components/styled/menu/lib/index.js"),lib_default=__webpack_require__.n(lib);const action_menu_mockdata=[{text:"View",clickHandler:()=>{console.log("View was clicked")},leftIcon:{type:"info-circle",size:"medium"},rightIcon:{type:"external-link",size:"medium"}},{text:"Edit",clickHandler:()=>{console.log("Edit was clicked")},leftIcon:{type:"info-circle",size:"medium"},rightIcon:{type:"external-link",size:"medium"}},{text:"Delete",clickHandler:()=>{console.log("Delete was clicked")},leftIcon:{type:"exclamation",size:"medium"},rightIcon:{type:"external-link",size:"medium"}}];var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const DefaultActionMenu=()=>(0,jsx_runtime.jsx)(lib_default(),{actions:action_menu_mockdata});DefaultActionMenu.displayName="DefaultActionMenu";const MenuWithCustomIcon=()=>(0,jsx_runtime.jsx)(lib_default(),{actions:action_menu_mockdata,menuButtonOptions:{type:"icon",iconProps:{type:"hamburger",size:"large"}}});MenuWithCustomIcon.displayName="MenuWithCustomIcon";const MenuWithColouredCustomIcon=()=>(0,jsx_runtime.jsx)(lib_default(),{actions:action_menu_mockdata,menuButtonOptions:{type:"icon",iconProps:{type:"cross",size:"large",status:"red"}}});MenuWithColouredCustomIcon.displayName="MenuWithColouredCustomIcon";const MenuWithButton=()=>(0,jsx_runtime.jsx)(lib_default(),{actions:action_menu_mockdata,menuButtonOptions:{type:"button",buttonProps:{type:"button"},text:"Actions"}});MenuWithButton.displayName="MenuWithButton";const action_menu_stories={title:"UI/Molecules/Menu"};DefaultActionMenu.parameters={...DefaultActionMenu.parameters,docs:{...DefaultActionMenu.parameters?.docs,source:{originalSource:"() => <ActionMenu actions={mockActions} />",...DefaultActionMenu.parameters?.docs?.source}}},MenuWithCustomIcon.parameters={...MenuWithCustomIcon.parameters,docs:{...MenuWithCustomIcon.parameters?.docs,source:{originalSource:"() => <ActionMenu actions={mockActions} menuButtonOptions={{\n  type: 'icon',\n  iconProps: {\n    type: 'hamburger',\n    size: 'large'\n  }\n}} />",...MenuWithCustomIcon.parameters?.docs?.source}}},MenuWithColouredCustomIcon.parameters={...MenuWithColouredCustomIcon.parameters,docs:{...MenuWithColouredCustomIcon.parameters?.docs,source:{originalSource:"() => <ActionMenu actions={mockActions} menuButtonOptions={{\n  type: 'icon',\n  iconProps: {\n    type: 'cross',\n    size: 'large',\n    status: 'red'\n  }\n}} />",...MenuWithColouredCustomIcon.parameters?.docs?.source}}},MenuWithButton.parameters={...MenuWithButton.parameters,docs:{...MenuWithButton.parameters?.docs,source:{originalSource:"() => <ActionMenu actions={mockActions} menuButtonOptions={{\n  type: 'button',\n  buttonProps: {\n    type: 'button'\n  },\n  text: 'Actions'\n}} />",...MenuWithButton.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultActionMenu","MenuWithCustomIcon","MenuWithColouredCustomIcon","MenuWithButton"]},"../../components/styled/button/lib/atoms/button.js":function(__unused_webpack_module,exports,__webpack_require__){var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,templateObject_2,templateObject_3,templateObject_4,templateObject_5,templateObject_6,templateObject_7,templateObject_8,templateObject_9,templateObject_10,templateObject_11,templateObject_12,jsx_runtime_1=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_1=__importDefault(__webpack_require__("../../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),react_1=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),styles_1=__webpack_require__("../styles/lib/index.js"),StyledButton=styled_1.default.button(templateObject_11||(templateObject_11=__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  white-space: nowrap;\n  border: 1px solid transparent;\n  font-size: 0.8rem;\n  font-weight: bold;\n  line-height: 1.5;\n  border-radius: 4px;\n  width: 100%;\n  padding: ",";\n\n  &:hover:not([disabled]) {\n    cursor: pointer;\n  }\n\n  &:disabled {\n    opacity: 0.65;\n    cursor: not-allowed;\n  }\n\n  "," {\n    font-size: 0.9rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: auto;\n  }\n\n  ","\n"],["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  white-space: nowrap;\n  border: 1px solid transparent;\n  font-size: 0.8rem;\n  font-weight: bold;\n  line-height: 1.5;\n  border-radius: 4px;\n  width: 100%;\n  padding: ",";\n\n  &:hover:not([disabled]) {\n    cursor: pointer;\n  }\n\n  &:disabled {\n    opacity: 0.65;\n    cursor: not-allowed;\n  }\n\n  "," {\n    font-size: 0.9rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: auto;\n  }\n\n  ","\n"])),(function(_a){var padding=_a.padding;return null!=padding?padding:"0.375rem 0.75rem"}),styles_1.DESKTOP_MINIMUM_MEDIA_QUERY,(function(_a){var buttonStyle=_a.buttonStyle;return function(buttonStyle){switch(buttonStyle){case"primary":return(0,react_1.css)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n        color: ",";\n        background-color: ",";\n        &:hover {\n          background-color: ",";\n        }\n\n        &:disabled {\n          background-color: ",";\n        }\n      "],["\n        color: ",";\n        background-color: ",";\n        &:hover {\n          background-color: ",";\n        }\n\n        &:disabled {\n          background-color: ",";\n        }\n      "])),styles_1.BTN_COLOURS.PRIMARY.TEXT,styles_1.BTN_COLOURS.PRIMARY.VALUE,styles_1.BTN_COLOURS.PRIMARY.HOVER,styles_1.BTN_COLOURS.PRIMARY.DISABLED);case"standard":return(0,react_1.css)(templateObject_2||(templateObject_2=__makeTemplateObject(["\n        color: ",";\n        background-color: ",";\n        &:hover {\n          background-color: ",";\n        }\n\n        &:disabled {\n          background-color: ",";\n        }\n      "],["\n        color: ",";\n        background-color: ",";\n        &:hover {\n          background-color: ",";\n        }\n\n        &:disabled {\n          background-color: ",";\n        }\n      "])),styles_1.BTN_COLOURS.STANDARD.TEXT,styles_1.BTN_COLOURS.STANDARD.VALUE,styles_1.BTN_COLOURS.STANDARD.HOVER,styles_1.BTN_COLOURS.STANDARD.DISABLED);case"workflow":return(0,react_1.css)(templateObject_3||(templateObject_3=__makeTemplateObject(["\n        color: ",";\n        background-color: ",";\n        &:hover {\n          background-color: ",";\n        }\n\n        &:disabled {\n          background-color: ",";\n        }\n      "],["\n        color: ",";\n        background-color: ",";\n        &:hover {\n          background-color: ",";\n        }\n\n        &:disabled {\n          background-color: ",";\n        }\n      "])),styles_1.BTN_COLOURS.WORKFLOW.TEXT,styles_1.BTN_COLOURS.WORKFLOW.VALUE,styles_1.BTN_COLOURS.WORKFLOW.HOVER,styles_1.BTN_COLOURS.WORKFLOW.DISABLED);case"danger":return(0,react_1.css)(templateObject_4||(templateObject_4=__makeTemplateObject(["\n        color: ",";\n        background-color: ",";\n        &:hover {\n          background-color: ",";\n        }\n\n        &:disabled {\n          background-color: ",";\n        }\n      "],["\n        color: ",";\n        background-color: ",";\n        &:hover {\n          background-color: ",";\n        }\n\n        &:disabled {\n          background-color: ",";\n        }\n      "])),styles_1.BTN_COLOURS.DANGER.TEXT,styles_1.BTN_COLOURS.DANGER.VALUE,styles_1.BTN_COLOURS.DANGER.HOVER,styles_1.BTN_COLOURS.DANGER.DISABLED);case"clear":return(0,react_1.css)(templateObject_5||(templateObject_5=__makeTemplateObject(["\n        color: ",";\n        background-color: ",";\n        &:hover {\n          background-color: ",";\n        }\n\n        &:disabled {\n          background-color: ",";\n        }\n      "],["\n        color: ",";\n        background-color: ",";\n        &:hover {\n          background-color: ",";\n        }\n\n        &:disabled {\n          background-color: ",";\n        }\n      "])),styles_1.BTN_COLOURS.CLEAR.TEXT,styles_1.BTN_COLOURS.CLEAR.VALUE,styles_1.BTN_COLOURS.CLEAR.HOVER,styles_1.BTN_COLOURS.CLEAR.DISABLED);default:return(0,react_1.css)(templateObject_6||(templateObject_6=__makeTemplateObject([""],[""])))}}(null!=buttonStyle?buttonStyle:"primary")})),ButtonIcon=styled_1.default.div(templateObject_12||(templateObject_12=__makeTemplateObject(["\n  display: flex;\n  ","\n  svg {\n    color: ",";\n  }\n"],["\n  display: flex;\n  ","\n  svg {\n    color: ",";\n  }\n"])),(function(_a){return function(placement){switch(placement){case"left":return(0,react_1.css)(templateObject_7||(templateObject_7=__makeTemplateObject(["\n        margin: 0 0.75rem 0 0;\n      "],["\n        margin: 0 0.75rem 0 0;\n      "])));case"right":return(0,react_1.css)(templateObject_8||(templateObject_8=__makeTemplateObject(["\n        margin: 0 0 0 0.75rem;\n      "],["\n        margin: 0 0 0 0.75rem;\n      "])));case"center":return(0,react_1.css)(templateObject_9||(templateObject_9=__makeTemplateObject(["\n        margin: 0;\n      "],["\n        margin: 0;\n      "])));default:return(0,react_1.css)(templateObject_10||(templateObject_10=__makeTemplateObject([""],[""])))}}(_a.placement)}),(function(_a){return _a.iconColour}));exports.default=function(_a){var _b=_a.type,type=void 0===_b?"button":_b,value=_a.value,styling=_a.styling,_c=_a.disabled,disabled=void 0!==_c&&_c,icon=_a.icon,_d=_a.iconPlacement,iconPlacement=void 0===_d?"left":_d,_e=_a.iconColour,iconColour=void 0===_e?"white":_e,children=_a.children,rest=__rest(_a,["type","value","styling","disabled","icon","iconPlacement","iconColour","children"]);return(0,jsx_runtime_1.jsxs)(StyledButton,__assign({},styling,{type,disabled},rest,{children:[icon&&"left"===iconPlacement&&(0,jsx_runtime_1.jsx)(ButtonIcon,{placement:iconPlacement,iconColour,children:icon}),value,children,icon&&"right"===iconPlacement&&(0,jsx_runtime_1.jsx)(ButtonIcon,{placement:iconPlacement,iconColour,children:icon}),!value&&icon&&"center"===iconPlacement&&(0,jsx_runtime_1.jsx)(ButtonIcon,{placement:iconPlacement,iconColour,children:icon})]}))}},"../../components/styled/menu/lib/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var action_menu_1=__importDefault(__webpack_require__("../../components/styled/menu/lib/molecules/action-menu.js"));exports.default=action_menu_1.default},"../../components/styled/menu/lib/molecules/action-menu.js":function(__unused_webpack_module,exports,__webpack_require__){var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,templateObject_2,templateObject_3,templateObject_4,templateObject_5,templateObject_6,templateObject_7,templateObject_8,jsx_runtime_1=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_1=__importDefault(__webpack_require__("../../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),button_1=__importDefault(__webpack_require__("../../components/styled/button/lib/atoms/button.js")),icon_1=__importStar(__webpack_require__("../../components/styled/icon/lib/index.js")),styles_1=__webpack_require__("../styles/lib/index.js"),focus_trap_react_1=__importDefault(__webpack_require__("../../node_modules/focus-trap-react/dist/focus-trap-react.js")),react_1=__webpack_require__("../../node_modules/react/index.js"),react_popper_1=__webpack_require__("../../node_modules/react-popper/lib/esm/index.js"),defaultMenuButtonProps={type:"icon",iconProps:{type:"ellipsis-vertical",size:"large"}},StyledUnorderedList=styled_1.default.ul(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  ","\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n"],["\n  ","\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n"])),styles_1.CSS_RESET),StyledListItem=styled_1.default.li(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  ","\n  background-color: 'white';\n  padding: 0.5rem;\n  line-height: 1em;\n  display: flex;\n  border-radius: 4px;\n\n  &:hover {\n    background: ",";\n    cursor: pointer;\n    color: white;\n  }\n"],["\n  ","\n  background-color: 'white';\n  padding: 0.5rem;\n  line-height: 1em;\n  display: flex;\n  border-radius: 4px;\n\n  &:hover {\n    background: ",";\n    cursor: pointer;\n    color: white;\n  }\n"])),styles_1.CSS_RESET,styles_1.BTN_COLOURS.PRIMARY.VALUE),StyledListItemIcon=styled_1.default.div(templateObject_3||(templateObject_3=__makeTemplateObject(["\n  flex-basis: 25%;\n"],["\n  flex-basis: 25%;\n"]))),StyledListItemContent=styled_1.default.div(templateObject_4||(templateObject_4=__makeTemplateObject(["\n  flex: 1;\n  text-align: left;\n"],["\n  flex: 1;\n  text-align: left;\n"]))),StyledCard=styled_1.default.div(templateObject_5||(templateObject_5=__makeTemplateObject(["\n  ","\n  display: inline-block;\n  min-width: 10rem;\n  z-index: 1;\n  background: white;\n  border-radius: 4px;\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.04), 0px 4px 5px rgba(0, 0, 0, 0.06), 0px 2px 4px -1px rgba(0, 0, 0, 0.09);\n"],["\n  ","\n  display: inline-block;\n  min-width: 10rem;\n  z-index: 1;\n  background: white;\n  border-radius: 4px;\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.04), 0px 4px 5px rgba(0, 0, 0, 0.06), 0px 2px 4px -1px rgba(0, 0, 0, 0.09);\n"])),styles_1.CSS_RESET),StyledRightIcon=(0,styled_1.default)(icon_1.default)(templateObject_6||(templateObject_6=__makeTemplateObject(["\n  margin-right: 0.5rem;\n  margin-left: 3rem;\n"],["\n  margin-right: 0.5rem;\n  margin-left: 3rem;\n"]))),StyledLeftIcon=(0,styled_1.default)(icon_1.default)(templateObject_7||(templateObject_7=__makeTemplateObject(["\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n"],["\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n"]))),StyledMenuButtonWrapper=styled_1.default.div(templateObject_8||(templateObject_8=__makeTemplateObject(["\n  display: inline-block;\n"],["\n  display: inline-block;\n"])));exports.default=function(_a){var actions=_a.actions,_b=_a.menuButtonOptions,menuButtonOptions=void 0===_b?defaultMenuButtonProps:_b,_c=_a.id,id=void 0===_c?"action-menu-button":_c,_d=_a.popupStyle,popupStyle=void 0===_d?{}:_d,_e=_a.popupPlacement,popupPlacement=void 0===_e?"bottom-start":_e,rest=__rest(_a,["actions","menuButtonOptions","id","popupStyle","popupPlacement"]),popperRef=(0,react_1.useRef)(null),_f=(0,react_1.useState)(null),popperElement=_f[0],setPopperElement=_f[1],_g=(0,react_1.useState)(null),containerElement=_g[0],setContainerElement=_g[1],popper=(0,react_popper_1.usePopper)(popperRef.current,popperElement,{placement:popupPlacement,strategy:"fixed"}),_h=(0,react_1.useState)(!1),showMenu=_h[0],setShowMenu=_h[1];(0,react_1.useEffect)((function(){var _a;(null===(_a=null==containerElement?void 0:containerElement.parentElement)||void 0===_a?void 0:_a.style)&&(containerElement.parentElement.style.zIndex="".concat(showMenu?(0,styles_1.getZIndex)(styles_1.PopUp):(0,styles_1.getZIndex)(styles_1.TableDataWithPopUp)))}),[containerElement,showMenu]);var menuButtonClickHandler=function(){setShowMenu(!showMenu)};return(0,jsx_runtime_1.jsx)("div",{ref:setContainerElement,children:(0,jsx_runtime_1.jsx)(focus_trap_react_1.default,{active:showMenu,focusTrapOptions:{tabbableOptions:{displayCheck:"none"},initialFocus:!1,allowOutsideClick:!1,clickOutsideDeactivates:!0,onDeactivate:function(){setShowMenu(!1)}},children:(0,jsx_runtime_1.jsxs)(StyledMenuButtonWrapper,{ref:popperRef,children:["icon"===menuButtonOptions.type&&(0,jsx_runtime_1.jsx)(icon_1.IconButton,__assign({iconProps:menuButtonOptions.iconProps,text:menuButtonOptions.text},rest,{onClick:function(e){e.stopPropagation(),menuButtonClickHandler()},id,"data-testid":id})),"button"===menuButtonOptions.type&&(0,jsx_runtime_1.jsx)(button_1.default,__assign({},menuButtonOptions.buttonProps,rest,{onClick:function(e){e.stopPropagation(),menuButtonClickHandler()},id,"data-testid":id,children:menuButtonOptions.text})),showMenu&&(0,jsx_runtime_1.jsx)(StyledCard,__assign({tabIndex:-1,ref:setPopperElement,style:__assign(__assign({},popper.styles.popper),popupStyle)},popper.attributes.popper,{children:(0,jsx_runtime_1.jsx)(StyledUnorderedList,{role:"menu","aria-labelledby":id,children:actions.map((function(action,idx){return(0,jsx_runtime_1.jsxs)(StyledListItem,{role:"menuitem",onClick:function(e){e.stopPropagation(),menuButtonClickHandler(),action.clickHandler()},children:[(0,jsx_runtime_1.jsx)(StyledListItemIcon,{children:action.leftIcon&&(0,jsx_runtime_1.jsx)(StyledLeftIcon,__assign({},action.leftIcon))}),(0,jsx_runtime_1.jsx)(StyledListItemContent,{children:action.text}),(0,jsx_runtime_1.jsx)(StyledListItemIcon,{children:action.rightIcon&&(0,jsx_runtime_1.jsx)(StyledRightIcon,__assign({},action.rightIcon))})]},"menu-action-".concat(idx))}))})}))]})})})}}}]);
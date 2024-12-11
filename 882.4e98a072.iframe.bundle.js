"use strict";(self.webpackChunk_ltht_react_storybook=self.webpackChunk_ltht_react_storybook||[]).push([[882],{"../../components/clinical/flag-summary/lib/atoms/flag-icon.js":function(__unused_webpack_module,exports,__webpack_require__){var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,jsx_runtime_1=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_1=__importDefault(__webpack_require__("../../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),icon_1=__importDefault(__webpack_require__("../../components/styled/icon/lib/index.js")),utils_1=__webpack_require__("../utils/lib/index.js"),StyledFlagIcon=styled_1.default.div(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  margin-bottom: 0px;\n"],["\n  margin-bottom: 0px;\n"])));exports.default=function(_a){var _b=_a.flag,extension=_b.extension,rest=__rest(_b,["extension"]);return"High"===(0,utils_1.getStringExtension)(extension,"https://leedsth.nhs.uk/alert/priority")?(0,jsx_runtime_1.jsx)(StyledFlagIcon,__assign({},rest,{children:(0,jsx_runtime_1.jsx)(icon_1.default,{type:"exclamation",color:"red",size:"medium"})})):(0,jsx_runtime_1.jsx)(jsx_runtime_1.Fragment,{})}},"../../components/clinical/flag-summary/lib/atoms/flag-text.js":function(__unused_webpack_module,exports,__webpack_require__){var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,jsx_runtime_1=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_1=__importDefault(__webpack_require__("../../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),styles_1=__webpack_require__("../styles/lib/index.js"),type_summary_1=__webpack_require__("../../components/clinical/shared/type-summary/lib/index.js"),StyledFlagText=styled_1.default.div(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  color: ",";\n  text-align: left;\n  font-size: smaller;\n  padding-top: 0.25rem;\n"],["\n  color: ",";\n  text-align: left;\n  font-size: smaller;\n  padding-top: 0.25rem;\n"])),styles_1.TEXT_COLOURS.SECONDARY.VALUE);exports.default=function(_a){var text=_a.flag.text,rest=__rest(_a,["flag"]);return(0,jsx_runtime_1.jsx)(StyledFlagText,__assign({},rest,{children:(0,jsx_runtime_1.jsx)(type_summary_1.NarrativeSummary,{narrative:text,showIfEmpty:!1,truncate:!0})}))}},"../../components/clinical/flag-summary/lib/atoms/flag-title.js":function(__unused_webpack_module,exports,__webpack_require__){var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,jsx_runtime_1=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_1=__importDefault(__webpack_require__("../../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),styles_1=__webpack_require__("../styles/lib/index.js"),utils_1=__webpack_require__("../utils/lib/index.js"),StyledFlagTitle=styled_1.default.div(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  color: ",";\n  text-align: left;\n  ","\n"],["\n  color: ",";\n  text-align: left;\n  ","\n"])),styles_1.TEXT_COLOURS.PRIMARY,(function(props){return"High"===props.priority&&"\n    padding-left:2px;\n    color: ".concat(styles_1.TEXT_COLOURS.DANGER,";\n")}));exports.default=function(_a){var _b,_c=_a.flag,code=_c.code,extension=_c.extension,ext=null!==(_b=(0,utils_1.getStringExtension)(extension,"https://leedsth.nhs.uk/alert/priority"))&&void 0!==_b?_b:"";return(0,jsx_runtime_1.jsx)(StyledFlagTitle,{priority:ext,children:(0,utils_1.codeableConceptDisplaySummary)(code)})}},"../../components/clinical/flag-summary/lib/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var flag_summary_1=__importDefault(__webpack_require__("../../components/clinical/flag-summary/lib/organisms/flag-summary.js"));exports.default=flag_summary_1.default},"../../components/clinical/flag-summary/lib/molecules/flag-identifier.js":function(__unused_webpack_module,exports,__webpack_require__){var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,jsx_runtime_1=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_1=__importDefault(__webpack_require__("../../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),flag_icon_1=__importDefault(__webpack_require__("../../components/clinical/flag-summary/lib/atoms/flag-icon.js")),flag_title_1=__importDefault(__webpack_require__("../../components/clinical/flag-summary/lib/atoms/flag-title.js")),StyledFlagIdentifier=styled_1.default.div(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  flex-grow: 1;\n  display: inline-flex;\n"],["\n  flex-grow: 1;\n  display: inline-flex;\n"])));exports.default=function(_a){var flag=_a.flag,rest=__rest(_a,["flag"]);return(0,jsx_runtime_1.jsxs)(StyledFlagIdentifier,__assign({},rest,{children:[(0,jsx_runtime_1.jsx)(flag_icon_1.default,{flag}),(0,jsx_runtime_1.jsx)(flag_title_1.default,{flag})]}))}},"../../components/clinical/flag-summary/lib/molecules/flag-redacted.js":function(__unused_webpack_module,exports,__webpack_require__){var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,templateObject_2,jsx_runtime_1=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_1=__importDefault(__webpack_require__("../../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),type_summary_1=__webpack_require__("../../components/clinical/shared/type-summary/lib/index.js"),StyledRedactedDescription=styled_1.default.div(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  flex-grow: 1;\n  text-align: left;\n"],["\n  flex-grow: 1;\n  text-align: left;\n"]))),StyledPeriodSummary=styled_1.default.div(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  text-align: right;\n"],["\n  text-align: right;\n"])));exports.default=function(_a){var period=_a.flag.period;return(0,jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment,{children:[(0,jsx_runtime_1.jsx)(StyledRedactedDescription,{children:(0,jsx_runtime_1.jsx)(type_summary_1.RedactedDescription,{})}),(0,jsx_runtime_1.jsx)(StyledPeriodSummary,{children:(0,jsx_runtime_1.jsx)(type_summary_1.PeriodSummary,{period})})]})}},"../../components/clinical/flag-summary/lib/organisms/flag-summary.js":function(__unused_webpack_module,exports,__webpack_require__){var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,templateObject_2,templateObject_3,jsx_runtime_1=__webpack_require__("../../node_modules/react/jsx-runtime.js"),styled_1=__importDefault(__webpack_require__("../../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),type_summary_1=__webpack_require__("../../components/clinical/shared/type-summary/lib/index.js"),flag_text_1=__importDefault(__webpack_require__("../../components/clinical/flag-summary/lib/atoms/flag-text.js")),flag_identifier_1=__importDefault(__webpack_require__("../../components/clinical/flag-summary/lib/molecules/flag-identifier.js")),flag_redacted_1=__importDefault(__webpack_require__("../../components/clinical/flag-summary/lib/molecules/flag-redacted.js")),StyledSummary=styled_1.default.div(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),StyledDate=styled_1.default.div(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  text-align: right;\n"],["\n  text-align: right;\n"]))),StyledText=styled_1.default.div(templateObject_3||(templateObject_3=__makeTemplateObject(["\n  flex-basis: 100%;\n"],["\n  flex-basis: 100%;\n"])));exports.default=function(_a){var flag=_a.flag,rest=__rest(_a,["flag"]);return flag.metadata.isRedacted?(0,jsx_runtime_1.jsx)(StyledSummary,__assign({},rest,{children:(0,jsx_runtime_1.jsx)(flag_redacted_1.default,{flag})})):(0,jsx_runtime_1.jsxs)(StyledSummary,__assign({},rest,{children:[(0,jsx_runtime_1.jsx)(flag_identifier_1.default,{flag}),(0,jsx_runtime_1.jsx)(StyledDate,{children:(0,jsx_runtime_1.jsx)(type_summary_1.PeriodSummary,{period:flag.period})}),(0,jsx_runtime_1.jsx)(StyledText,{children:(0,jsx_runtime_1.jsx)(flag_text_1.default,{flag})})]}))}},"./src/clinical/organisms/flags/flags.fixtures.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>controls,i:()=>flags});var _ltht_react_icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/styled/icon/lib/index.js"),_ltht_react_icon__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_ltht_react_icon__WEBPACK_IMPORTED_MODULE_0__),_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../types/lib/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const mockMetadata={dataSources:[{display:"Mock"}],isRedacted:!1,requestedWhen:""},FlagOne={id:"580ca927-34e0-e911-a2c7-005056926fe5|personalertandhazard",isEnteredInError:!1,metadata:mockMetadata,author:{display:"Smith, John (Dr)",reference:"https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser",typeName:"Practitioner",identifier:void 0},code:{coding:[{display:"DNACPR",code:"109007"}]},category:{coding:[{display:"Location",code:"66706"},{display:"Demographics",code:"66707"}]},period:{start:{value:"2013-01-01T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Year}},status:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.FlagStatusCode.Active,text:{div:"Lorem ipsum dolor sit amet",text:"A ReSPECT plan for emergency care, including a DO NOT ATTEMPT CARDIOPULMONARY RESUSCITATION decision, is in place. Please review the ReSPECT form and CPR decision, check for changes and, if valid and applicable, take this DNACPR status into account."},extension:[{url:"https://leedsth.nhs.uk/alert/priority",valueString:"High"},{url:"https://leedsth.nhs.uk/alert/advice",valueString:"Some advice"}]},FlagTwo={id:"580ca927-34e0-e911-a2c7-005056926fe4|personalertandhazard",isEnteredInError:!1,metadata:mockMetadata,author:{display:"John Smith",reference:"https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser",typeName:"Practitioner",identifier:void 0},code:{coding:[{display:"Oxygen Alert",code:"BLEOMYCINM"}]},category:{coding:[{display:"Violence",code:"66706"}]},period:{start:{value:"2013-01-01T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Date},end:{value:"2014-02-02T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Date}},status:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.FlagStatusCode.Active,text:{div:"Lorem ipsum dolor sit amet",text:"It has been confirmed that Bleomycin has previously been administered to this patient. They may experience severe lung toxicity or death if high concentration oxygen is administered. Commence oxygen therapy only if SaO2 <85%. SaO2 should be maintained no higher than 85-88% whether on invasive or non invasive ventilation. Refer to LTHT Bleomycin pulmonary toxicity guidelines on LHP for further information/contact the Oncology enquiries nurse bleepholder via LTHT switchboard on 0113 2433144."},extension:[{url:"https://leedsth.nhs.uk/alert/priority",valueString:"High"}]},flags=[FlagOne,{id:"580ca927-34e0-e911-a2c7-005056926fe4|personalertandhazard",isEnteredInError:!1,metadata:mockMetadata,author:{display:"John Smith",reference:"https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser",typeName:"Practitioner",identifier:void 0},code:{coding:[{display:"Adrenal Insufficiency",code:"STEROID"}]},category:{coding:[{display:"Violence",code:"66706"}]},period:{start:{value:"2013-01-01T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Date},end:{value:"2014-02-02T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Date}},status:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.FlagStatusCode.Active,text:{div:"Lorem ipsum dolor sit amet",text:"Requirement for Urgent Glucocorticoids"},extension:[{url:"https://leedsth.nhs.uk/alert/priority",valueString:"High"},{url:"https://leedsth.nhs.uk/alert/advice",valueString:"This patient has adrenal insufficiency and is steroid dependent. Any serious injury or illness may precipitate an adrenal crisis. In the event of a serious illness/accident they require the following age-related doses of Hydrocortisone immediately by IM or IV injection: Age <1 year: Hydrocortisone 25 mg Age 1-5 years: Hydrocortisone 50 mg Age > 6 years: Hydrocortisone 100 mg The usual oral steroids should be doubled or tripled. Please seek advice from the on-call endocrinologist"},{url:"https://leedsth.nhs.uk/alert/linkeddocumentsource",valueString:"https://www.edge.nhs.uk/#/project/100005/site/198655/details"}]},FlagTwo,{id:"580ca927-34e0-e911-a2c7-005056926fe4|personalertandhazard",isEnteredInError:!1,metadata:mockMetadata,author:{display:"John Smith",reference:"https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser",typeName:"Practitioner",identifier:void 0},code:{coding:[{display:"Life Threatening Anaphylaxis",code:"ANAPHYLAXI"}]},category:{coding:[{display:"Violence",code:"66706"}]},period:{start:{value:"2013-01-01T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Date},end:{value:"2014-02-02T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Date}},status:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.FlagStatusCode.Active,text:{div:"Lorem ipsum dolor sit amet",text:"This patient has a history of life threatening anaphylaxis."},extension:[{url:"https://leedsth.nhs.uk/alert/priority",valueString:"High"}]},{id:"580ca927-34e0-e911-a2c7-005056926fe4|personalertandhazard",isEnteredInError:!1,metadata:mockMetadata,author:{display:"John Smith",reference:"https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser",typeName:"Practitioner",identifier:void 0},code:{coding:[{display:"VIOLENT PATIENT",code:"VIOLENT"}]},category:{coding:[{display:"Violence",code:"66706"}]},period:{start:{value:"2013-01-01T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Date},end:{value:"2014-02-02T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Date}},status:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.FlagStatusCode.Active,text:{div:"Lorem ipsum dolor sit amet",text:"This patient has a HISTORY OF VIOLENCE TOWARDS STAFF / OTHERS "},extension:[{url:"https://leedsth.nhs.uk/alert/priority",valueString:"High"}]},{id:"580ca927-34e0-e911-a2c7-005056926fe5|personalertandhazard",isEnteredInError:!1,metadata:mockMetadata,author:{display:"Smith, John (Dr)",reference:"https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser",typeName:"Practitioner",identifier:void 0},code:{coding:[{display:"ReSPECT",code:"ReSPECT"}]},category:{coding:[{display:"Location",code:"66706"},{display:"Demographics",code:"66707"}]},period:{start:{value:"2013-01-01T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Year}},status:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.FlagStatusCode.Inactive,text:{div:"Lorem ipsum dolor sit amet",text:"A ReSPECT plan for care in emergency situations has been completed. Please read and consider these recommendations in event of clinical deterioration."},extension:[{url:"https://leedsth.nhs.uk/alert/priority",valueString:"Clinical"}]},{id:"580ca927-34e0-e911-a2c7-005056926fe4|personalertandhazard",isEnteredInError:!1,metadata:{dataSources:[{display:"Mock"}],isRedacted:!0,requestedWhen:""},author:{display:"John Smith",reference:"https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser",typeName:"Practitioner",identifier:void 0},code:{coding:[{display:"Infection",code:"MRSA"}]},category:{coding:[{display:"Violence",code:"66706"}]},period:{start:{value:"2013-01-01T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Date},end:{value:"2014-02-02T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Date}},status:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.FlagStatusCode.Inactive,text:{div:"Infection Prevention & Control Hazard, please use Apron & Gloves",text:"Staphylococcus aureus - MRSA"}},{id:"580ca927-34e0-e911-a2c7-005056926fe4|personalertandhazard",isEnteredInError:!1,metadata:mockMetadata,author:{display:"John Smith",reference:"https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser",typeName:"Practitioner",identifier:void 0},code:{coding:[{display:"Infection",code:"VRE"}]},category:{coding:[{display:"Violence",code:"66706"}]},period:{start:{value:"2013-01-01T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Date},end:{value:"2014-02-02T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Date}},status:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.FlagStatusCode.Inactive,text:{div:"Infection Prevention & Control Hazard, please use Apron & Gloves",text:"Vancomycin-resistant Enterococcus sp"}},{id:"580ca927-34e0-e911-a2c7-005056926fe4|personalertandhazard",isEnteredInError:!1,metadata:mockMetadata,author:{display:"John Smith",reference:"https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser",typeName:"Practitioner",identifier:void 0},code:{coding:[{display:"Active Clinical Trial",code:"TRIALALERT"}]},category:{coding:[{display:"Violence",code:"66706"}]},period:{start:{value:"2013-01-01T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Date},end:{value:"2014-02-02T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Date}},status:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.FlagStatusCode.Inactive,text:{div:"he patient is on an active trial and if the patient is acutely admitted then the Principal Investigator and Trial Nurse need to be informed within 24 hours of the admission.",text:"SOMAscan Diabetes"}},{id:"580ca927-34e0-e911-a2c7-005056926fe5|personalertandhazard",isEnteredInError:!1,metadata:mockMetadata,author:{display:"Smith, John (Dr)",reference:"https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser",typeName:"Practitioner",identifier:void 0},code:{coding:[{display:"Infection",code:"KPNE"}]},category:{coding:[{display:"Location",code:"66706"},{display:"Demographics",code:"66707"}]},period:{start:{value:"2013-01-01T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Year}},status:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.FlagStatusCode.Active,text:{div:"Infection Prevention & Control Hazard, please use Apron & Gloves",text:"Klebsiella pneumoniae"}},{id:"580ca927-34e0-e911-a2c7-005056926fe5|personalertandhazard",isEnteredInError:!1,metadata:mockMetadata,author:{display:"Smith, John (Dr)",reference:"https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser",typeName:"Practitioner",identifier:void 0},code:{coding:[{display:"Data Quality",code:"DQMERGEDUP"}]},category:{coding:[{display:"Location",code:"66706"},{display:"Demographics",code:"66707"}]},period:{start:{value:"2013-01-01T00:00:00+00:00",kind:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.PartialDateTimeKindCode.Year}},status:_ltht_react_types__WEBPACK_IMPORTED_MODULE_1__.FlagStatusCode.EnteredInError,text:{div:"There is another record in the system which is probably for this patient. Please raise this issue to the Informatics Service Desk and supply the patient details.",text:"Possible Duplicate Patient Exists"}}],controls=[{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ltht_react_icon__WEBPACK_IMPORTED_MODULE_0___default(),{type:"paper-clip",size:"medium"}),value:"Control 1",title:"Description of the button action can go here!!!",styling:{buttonStyle:"workflow",padding:"20px"}},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ltht_react_icon__WEBPACK_IMPORTED_MODULE_0___default(),{type:"link",size:"medium"}),value:"Control 2",styling:{buttonStyle:"standard",padding:"2px 10px"}},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ltht_react_icon__WEBPACK_IMPORTED_MODULE_0___default(),{type:"trash",size:"medium"}),value:"Control 3",styling:{buttonStyle:"danger",padding:"2px 10px"}},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ltht_react_icon__WEBPACK_IMPORTED_MODULE_0___default(),{type:"star",size:"medium"}),value:"Control 4",styling:{buttonStyle:"primary",padding:"2px 10px"}},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ltht_react_icon__WEBPACK_IMPORTED_MODULE_0___default(),{type:"check",size:"medium"}),iconColour:"black",value:"Control 5",styling:{buttonStyle:"clear",padding:"2px 10px"}},{value:"Click Me!",styling:{buttonStyle:"standard",padding:"2px 10px"},onClick:e=>{e.stopPropagation(),alert("clicked me!")}}]}}]);
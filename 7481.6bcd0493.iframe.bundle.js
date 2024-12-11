(self.webpackChunk_ltht_react_storybook=self.webpackChunk_ltht_react_storybook||[]).push([[7481],{"../../node_modules/@bbob/core/dist/index.js":function(__unused_webpack_module,exports,__webpack_require__){!function(exports,parser){"use strict";const isObj=value=>"object"==typeof value,isBool=value=>"boolean"==typeof value;function iterate(t,cb){const tree=t;if(Array.isArray(tree))for(let idx=0;idx<tree.length;idx++)tree[idx]=iterate(cb(tree[idx]),cb);else tree&&isObj(tree)&&tree.content&&iterate(tree.content,cb);return tree}function same(expected,actual){return typeof expected==typeof actual&&(isObj(expected)&&null!==expected?Array.isArray(expected)?expected.every((exp=>[].some.call(actual,(act=>same(exp,act))))):Object.keys(expected).every((key=>{const ao=actual[key],eo=expected[key];return isObj(eo)&&null!==eo&&null!==ao?same(eo,ao):isBool(eo)?eo!==(null===ao):ao===eo})):expected===actual)}function match(expression,cb){return Array.isArray(expression)?iterate(this,(node=>{for(let idx=0;idx<expression.length;idx++)if(same(expression[idx],node))return cb(node);return node})):iterate(this,(node=>same(expression,node)?cb(node):node))}function walk(cb){return iterate(this,cb)}function bbob(plugs){const plugins="function"==typeof plugs?[plugs]:plugs||[];let options={skipParse:!1};return{process(input,opts){options=opts||{};const parseFn=options.parser||parser.parse,renderFn=options.render,data=options.data||null;if("function"!=typeof parseFn)throw new Error('"parser" is not a function, please pass to "process(input, { parser })" right function');let tree=options.skipParse?input||[]:parseFn(input,options);const raw=tree;return tree.messages=[],tree.options=options,tree.walk=walk,tree.match=match,plugins.forEach((plugin=>{tree=plugin(tree,{parse:parseFn,render:renderFn,iterate,match,data})||tree})),{get html(){if("function"!=typeof renderFn)throw new Error('"render" function not defined, please pass to "process(input, { render })"');return renderFn(tree,tree.options)},tree,raw,messages:tree.messages}}}}exports.default=bbob,Object.defineProperty(exports,"__esModule",{value:!0})}(exports,__webpack_require__("../../node_modules/@bbob/parser/dist/index.js"))},"../../node_modules/@bbob/html/dist/index.js":function(__unused_webpack_module,exports,__webpack_require__){!function(exports,core,pluginHelper){"use strict";const SELFCLOSE_END_TAG="/>",CLOSE_START_TAG="</",START_TAG="<",END_TAG=">",renderNode=(node,{stripTags=!1})=>{if(!node)return"";const type=typeof node;return"string"===type||"number"===type?node:"object"===type?!0===stripTags?renderNodes(node.content,{stripTags}):null===node.content?[START_TAG,node.tag,pluginHelper.attrsToString(node.attrs),SELFCLOSE_END_TAG].join(""):[START_TAG,node.tag,pluginHelper.attrsToString(node.attrs),END_TAG,renderNodes(node.content),CLOSE_START_TAG,node.tag,END_TAG].join(""):Array.isArray(node)?renderNodes(node,{stripTags}):""},renderNodes=(nodes,{stripTags=!1}={})=>[].concat(nodes).reduce(((r,node)=>r+renderNode(node,{stripTags})),""),toHTML=(source,plugins,options)=>core(plugins).process(source,{...options,render:renderNodes}).html,render=renderNodes;exports.default=toHTML,exports.render=render,Object.defineProperty(exports,"__esModule",{value:!0})}(exports,__webpack_require__("../../node_modules/@bbob/core/dist/index.js"),__webpack_require__("../../node_modules/@bbob/plugin-helper/dist/index.js"))},"../../node_modules/@bbob/parser/dist/index.js":function(__unused_webpack_module,exports,__webpack_require__){!function(exports,pluginHelper){"use strict";const TOKEN_TYPE_ID="type",TOKEN_VALUE_ID="value",TOKEN_COLUMN_ID="row",TOKEN_LINE_ID="line",TOKEN_TYPE_WORD=1,TOKEN_TYPE_TAG=2,TOKEN_TYPE_ATTR_NAME=3,TOKEN_TYPE_ATTR_VALUE=4,TOKEN_TYPE_SPACE=5,TOKEN_TYPE_NEW_LINE=6,getTokenValue=token=>token&&void 0!==token[TOKEN_VALUE_ID]?token[TOKEN_VALUE_ID]:"",getTokenLine=token=>token&&token[TOKEN_LINE_ID]||0,getTokenColumn=token=>token&&token[TOKEN_COLUMN_ID]||0,isTextToken=token=>!(!token||void 0===token[TOKEN_TYPE_ID]||token[TOKEN_TYPE_ID]!==TOKEN_TYPE_SPACE&&token[TOKEN_TYPE_ID]!==TOKEN_TYPE_NEW_LINE&&token[TOKEN_TYPE_ID]!==TOKEN_TYPE_WORD),isTagToken=token=>!(!token||void 0===token[TOKEN_TYPE_ID])&&token[TOKEN_TYPE_ID]===TOKEN_TYPE_TAG,isTagEnd=token=>getTokenValue(token).charCodeAt(0)===pluginHelper.SLASH.charCodeAt(0),isTagStart=token=>!isTagEnd(token),isAttrNameToken=token=>!(!token||void 0===token[TOKEN_TYPE_ID])&&token[TOKEN_TYPE_ID]===TOKEN_TYPE_ATTR_NAME,isAttrValueToken=token=>!(!token||void 0===token[TOKEN_TYPE_ID])&&token[TOKEN_TYPE_ID]===TOKEN_TYPE_ATTR_VALUE,getTagName=token=>{const value=getTokenValue(token);return isTagEnd(token)?value.slice(1):value},convertTagToText=token=>{let text=pluginHelper.OPEN_BRAKET;return text+=getTokenValue(token),text+=pluginHelper.CLOSE_BRAKET,text};class Token{isEmpty(){return isNaN(this[TOKEN_TYPE_ID])}isText(){return isTextToken(this)}isTag(){return isTagToken(this)}isAttrName(){return isAttrNameToken(this)}isAttrValue(){return isAttrValueToken(this)}isStart(){return isTagStart(this)}isEnd(){return isTagEnd(this)}getName(){return getTagName(this)}getValue(){return getTokenValue(this)}getLine(){return getTokenLine(this)}getColumn(){return getTokenColumn(this)}toString(){return convertTagToText(this)}constructor(type,value,line,row){this[TOKEN_TYPE_ID]=Number(type),this[TOKEN_VALUE_ID]=String(value),this[TOKEN_LINE_ID]=Number(line),this[TOKEN_COLUMN_ID]=Number(row)}}const TYPE_WORD=TOKEN_TYPE_WORD,TYPE_TAG=TOKEN_TYPE_TAG,TYPE_ATTR_NAME=TOKEN_TYPE_ATTR_NAME,TYPE_ATTR_VALUE=TOKEN_TYPE_ATTR_VALUE,TYPE_SPACE=TOKEN_TYPE_SPACE,TYPE_NEW_LINE=TOKEN_TYPE_NEW_LINE;function CharGrabber(source,options){const cursor={pos:0,len:source.length},substrUntilChar=char=>{const{pos}=cursor,idx=source.indexOf(char,pos);return idx>=0?source.substring(pos,idx):""},includes=val=>source.indexOf(val,cursor.pos)>=0,hasNext=()=>cursor.len>cursor.pos,isLast=()=>cursor.pos===cursor.len,skip=(num=1,silent)=>{cursor.pos+=num,options&&options.onSkip&&!silent&&options.onSkip()},rest=()=>source.substring(cursor.pos),grabN=(num=0)=>source.substring(cursor.pos,cursor.pos+num),curr=()=>source[cursor.pos],prev=()=>{const prevPos=cursor.pos-1;return void 0!==source[prevPos]?source[prevPos]:null},next=()=>{const nextPos=cursor.pos+1;return nextPos<=source.length-1?source[nextPos]:null},grabWhile=(cond,silent)=>{let start=0;if(hasNext())for(start=cursor.pos;hasNext()&&cond(curr());)skip(1,silent);return source.substring(start,cursor.pos)};this.skip=skip,this.hasNext=hasNext,this.getCurr=curr,this.getRest=rest,this.getNext=next,this.getPrev=prev,this.isLast=isLast,this.includes=includes,this.grabWhile=grabWhile,this.grabN=grabN,this.substrUntilChar=substrUntilChar}const createCharGrabber=(source,options)=>new CharGrabber(source,options),trimChar=(str,charToRemove)=>{for(;str.charAt(0)===charToRemove;)str=str.substring(1);for(;str.charAt(str.length-1)===charToRemove;)str=str.substring(0,str.length-1);return str},unquote=str=>str.replace(pluginHelper.BACKSLASH+pluginHelper.QUOTEMARK,pluginHelper.QUOTEMARK);function NodeList(values=[]){const nodes=values,getLast=()=>Array.isArray(nodes)&&nodes.length>0&&void 0!==nodes[nodes.length-1]?nodes[nodes.length-1]:null,flushLast=()=>!!nodes.length&&nodes.pop(),push=value=>nodes.push(value),toArray=()=>nodes;this.push=push,this.toArray=toArray,this.getLast=getLast,this.flushLast=flushLast}const createList=(values=[])=>new NodeList(values),EM="!",createToken=(type,value,r=0,cl=0)=>new Token(type,value,r,cl);function createLexer(buffer,options={}){const STATE_WORD=0,STATE_TAG=1,STATE_TAG_ATTRS=2,TAG_STATE_NAME=0,TAG_STATE_ATTR=1,TAG_STATE_VALUE=2;let row=0,col=0,tokenIndex=-1,stateMode=STATE_WORD,tagMode=TAG_STATE_NAME,contextFreeTag="";const tokens=new Array(Math.floor(buffer.length)),openTag=options.openTag||pluginHelper.OPEN_BRAKET,closeTag=options.closeTag||pluginHelper.CLOSE_BRAKET,escapeTags=!!options.enableEscapeTags,contextFreeTags=options.contextFreeTags||[],onToken=options.onToken||(()=>{}),RESERVED_CHARS=[closeTag,openTag,pluginHelper.QUOTEMARK,pluginHelper.BACKSLASH,pluginHelper.SPACE,pluginHelper.TAB,pluginHelper.EQ,pluginHelper.N,EM],NOT_CHAR_TOKENS=[openTag,pluginHelper.SPACE,pluginHelper.TAB,pluginHelper.N],WHITESPACES=[pluginHelper.SPACE,pluginHelper.TAB],SPECIAL_CHARS=[pluginHelper.EQ,pluginHelper.SPACE,pluginHelper.TAB],isCharReserved=char=>RESERVED_CHARS.indexOf(char)>=0,isNewLine=char=>char===pluginHelper.N,isWhiteSpace=char=>WHITESPACES.indexOf(char)>=0,isCharToken=char=>-1===NOT_CHAR_TOKENS.indexOf(char),isSpecialChar=char=>SPECIAL_CHARS.indexOf(char)>=0,isEscapableChar=char=>char===openTag||char===closeTag||char===pluginHelper.BACKSLASH,isEscapeChar=char=>char===pluginHelper.BACKSLASH,onSkip=()=>{col++},unq=val=>unquote(trimChar(val,pluginHelper.QUOTEMARK)),checkContextFreeMode=(name,isClosingTag)=>{""!==contextFreeTag&&isClosingTag&&(contextFreeTag=""),""===contextFreeTag&&contextFreeTags.includes(name)&&(contextFreeTag=name)},chars=createCharGrabber(buffer,{onSkip});function emitToken(type,value){const token=createToken(type,value,row,col);onToken(token),tokenIndex+=1,tokens[tokenIndex]=token}function nextTagState(tagChars,isSingleValueTag){if(tagMode===TAG_STATE_ATTR){const validAttrName=char=>!(char===pluginHelper.EQ||isWhiteSpace(char)),name=tagChars.grabWhile(validAttrName),isEnd=tagChars.isLast(),isValue=tagChars.getCurr()!==pluginHelper.EQ;return tagChars.skip(),isEnd||isValue?emitToken(TYPE_ATTR_VALUE,unq(name)):emitToken(TYPE_ATTR_NAME,name),isEnd?TAG_STATE_NAME:isValue?TAG_STATE_ATTR:TAG_STATE_VALUE}if(tagMode===TAG_STATE_VALUE){let stateSpecial=!1;const validAttrValue=char=>{const isQM=char===pluginHelper.QUOTEMARK,prevChar=tagChars.getPrev(),nextChar=tagChars.getNext(),isPrevSLASH=prevChar===pluginHelper.BACKSLASH,isNextEQ=nextChar===pluginHelper.EQ,isWS=isWhiteSpace(char),isNextWS=isWhiteSpace(nextChar);return!(!stateSpecial||!isSpecialChar(char))||!!(!isQM||isPrevSLASH||(stateSpecial=!stateSpecial,stateSpecial||isNextEQ||isNextWS))&&(!!isSingleValueTag||!1===isWS)},name1=tagChars.grabWhile(validAttrValue);return tagChars.skip(),emitToken(TYPE_ATTR_VALUE,unq(name1)),tagChars.isLast()?TAG_STATE_NAME:TAG_STATE_ATTR}const validName=char=>!(char===pluginHelper.EQ||isWhiteSpace(char)||tagChars.isLast()),name2=tagChars.grabWhile(validName);return emitToken(TYPE_TAG,name2),checkContextFreeMode(name2),tagChars.skip(),isSingleValueTag?TAG_STATE_VALUE:tagChars.includes(pluginHelper.EQ)?TAG_STATE_ATTR:TAG_STATE_VALUE}function stateTag(){const currChar=chars.getCurr(),nextChar=chars.getNext();chars.skip();const substr=chars.substrUntilChar(closeTag),hasInvalidChars=0===substr.length||substr.indexOf(openTag)>=0;if(isCharReserved(nextChar)||hasInvalidChars||chars.isLast())return emitToken(TYPE_WORD,currChar),STATE_WORD;const isNoAttrsInTag=-1===substr.indexOf(pluginHelper.EQ),isClosingTag=substr[0]===pluginHelper.SLASH;if(isNoAttrsInTag||isClosingTag){const name=chars.grabWhile((char=>char!==closeTag));return chars.skip(),emitToken(TYPE_TAG,name),checkContextFreeMode(name,isClosingTag),STATE_WORD}return STATE_TAG_ATTRS}function stateAttrs(){const silent=!0,tagStr=chars.grabWhile((char=>char!==closeTag),silent),tagGrabber=createCharGrabber(tagStr,{onSkip}),hasSpace=tagGrabber.includes(pluginHelper.SPACE);for(tagMode=TAG_STATE_NAME;tagGrabber.hasNext();)tagMode=nextTagState(tagGrabber,!hasSpace);return chars.skip(),STATE_WORD}function stateWord(){if(isNewLine(chars.getCurr()))return emitToken(TYPE_NEW_LINE,chars.getCurr()),chars.skip(),col=0,row++,STATE_WORD;if(isWhiteSpace(chars.getCurr())){const word=chars.grabWhile(isWhiteSpace);return emitToken(TYPE_SPACE,word),STATE_WORD}if(chars.getCurr()===openTag){if(contextFreeTag){const fullTagLen=openTag.length+pluginHelper.SLASH.length+contextFreeTag.length,fullTagName=`${openTag}${pluginHelper.SLASH}${contextFreeTag}`;if(chars.grabN(fullTagLen)===fullTagName)return STATE_TAG}else if(chars.includes(closeTag))return STATE_TAG;return emitToken(TYPE_WORD,chars.getCurr()),chars.skip(),STATE_WORD}if(escapeTags){if(isEscapeChar(chars.getCurr())){const currChar=chars.getCurr(),nextChar=chars.getNext();return chars.skip(),isEscapableChar(nextChar)?(chars.skip(),emitToken(TYPE_WORD,nextChar),STATE_WORD):(emitToken(TYPE_WORD,currChar),STATE_WORD)}const isChar=char=>isCharToken(char)&&!isEscapeChar(char),word1=chars.grabWhile(isChar);return emitToken(TYPE_WORD,word1),STATE_WORD}const word2=chars.grabWhile(isCharToken);return emitToken(TYPE_WORD,word2),STATE_WORD}function tokenize(){for(stateMode=STATE_WORD;chars.hasNext();)switch(stateMode){case STATE_TAG:stateMode=stateTag();break;case STATE_TAG_ATTRS:stateMode=stateAttrs();break;default:stateMode=stateWord()}return tokens.length=tokenIndex+1,tokens}function isTokenNested(token){const value=openTag+pluginHelper.SLASH+token.getValue();return buffer.indexOf(value)>-1}return{tokenize,isTokenNested}}const parse=(input,opts={})=>{const options=opts,openTag=options.openTag||pluginHelper.OPEN_BRAKET,closeTag=options.closeTag||pluginHelper.CLOSE_BRAKET,onlyAllowTags=(options.onlyAllowTags||[]).filter(Boolean).map((tag=>tag.toLowerCase()));let tokenizer=null;const nodes=createList(),nestedNodes=createList(),tagNodes=createList(),tagNodesAttrName=createList(),nestedTagsMap=new Set,isTokenNested=token=>{const value=token.getValue();return!nestedTagsMap.has(value)&&tokenizer.isTokenNested&&tokenizer.isTokenNested(token)?(nestedTagsMap.add(value),!0):nestedTagsMap.has(value)},isTagNested=tagName=>Boolean(nestedTagsMap.has(tagName)),isAllowedTag=value=>!onlyAllowTags.length||onlyAllowTags.indexOf(value.toLowerCase())>=0,flushTagNodes=()=>{tagNodes.flushLast()&&tagNodesAttrName.flushLast()},getNodes=()=>{const lastNestedNode=nestedNodes.getLast();return lastNestedNode&&Array.isArray(lastNestedNode.content)?lastNestedNode.content:nodes.toArray()},appendNodeAsString=(node,isNested=!0)=>{const items=getNodes();Array.isArray(items)&&(items.push(node.toTagStart({openTag,closeTag})),node.content.length&&(node.content.forEach((item=>{items.push(item)})),isNested&&items.push(node.toTagEnd({openTag,closeTag}))))},appendNodes=node=>{const items=getNodes();Array.isArray(items)&&(pluginHelper.isTagNode(node)?isAllowedTag(node.tag)?items.push(node.toTagNode()):appendNodeAsString(node):items.push(node))},handleTagStart=token=>{flushTagNodes();const tagNode=pluginHelper.TagNode.create(token.getValue()),isNested=isTokenNested(token);tagNodes.push(tagNode),isNested?nestedNodes.push(tagNode):appendNodes(tagNode)},handleTagEnd=token=>{flushTagNodes();const lastNestedNode=nestedNodes.flushLast();if(lastNestedNode)appendNodes(lastNestedNode);else if("function"==typeof options.onError){const tag=token.getValue(),line=token.getLine(),column=token.getColumn();options.onError({message:`Inconsistent tag '${tag}' on line ${line} and column ${column}`,tagName:tag,lineNumber:line,columnNumber:column})}},handleTag=token=>{token.isStart()&&handleTagStart(token),token.isEnd()&&handleTagEnd(token)},handleNode=token=>{const lastTagNode=tagNodes.getLast(),tokenValue=token.getValue(),isNested=isTagNested(token);if(lastTagNode)if(token.isAttrName())tagNodesAttrName.push(tokenValue),lastTagNode.attr(tagNodesAttrName.getLast(),"");else if(token.isAttrValue()){const attrName=tagNodesAttrName.getLast();attrName?(lastTagNode.attr(attrName,tokenValue),tagNodesAttrName.flushLast()):lastTagNode.attr(tokenValue,tokenValue)}else token.isText()?isNested?lastTagNode.append(tokenValue):appendNodes(tokenValue):token.isTag()&&appendNodes(token.toString());else token.isText()?appendNodes(tokenValue):token.isTag()&&appendNodes(token.toString())},onToken=token=>{token.isTag()?handleTag(token):handleNode(token)};tokenizer=(opts.createTokenizer?opts.createTokenizer:createLexer)(input,{onToken,openTag,closeTag,onlyAllowTags:options.onlyAllowTags,contextFreeTags:options.contextFreeTags,enableEscapeTags:options.enableEscapeTags}),tokenizer.tokenize();const lastNestedNode=nestedNodes.flushLast();return lastNestedNode&&isTagNested(lastNestedNode.tag)&&appendNodeAsString(lastNestedNode,!1),nodes.toArray()};Object.defineProperty(exports,"TagNode",{enumerable:!0,get:function(){return pluginHelper.TagNode}}),exports.default=parse,exports.parse=parse,Object.defineProperty(exports,"__esModule",{value:!0})}(exports,__webpack_require__("../../node_modules/@bbob/plugin-helper/dist/index.js"))},"../../node_modules/@bbob/plugin-helper/dist/index.js":function(__unused_webpack_module,exports){!function(exports){"use strict";const N="\n",TAB="\t",F="\f",R="\r",EQ="=",QUOTEMARK='"',SPACE=" ",OPEN_BRAKET="[",CLOSE_BRAKET="]",SLASH="/",BACKSLASH="\\",isTagNode=el=>"object"==typeof el&&!!el.tag,isStringNode=el=>"string"==typeof el,isEOL=el=>el===N,keysReduce=(obj,reduce,def)=>Object.keys(obj).reduce(reduce,def),getNodeLength=node=>isTagNode(node)?node.content.reduce(((count,contentNode)=>count+getNodeLength(contentNode)),0):isStringNode(node)?node.length:0,appendToNode=(node,value)=>{node.content.push(value)},escapeHTML=value=>value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/(javascript|data|vbscript):/gi,"$1%3A"),attrValue=(name,value)=>{const type=typeof value,types={boolean:()=>value?`${name}`:"",number:()=>`${name}="${value}"`,string:()=>`${name}="${escapeHTML(value)}"`,object:()=>`${name}="${escapeHTML(JSON.stringify(value))}"`};return types[type]?types[type]():""},attrsToString=values=>null==values?"":keysReduce(values,((arr,key)=>[...arr,attrValue(key,values[key])]),[""]).join(" "),getUniqAttr=attrs=>keysReduce(attrs,((res,key)=>attrs[key]===key?attrs[key]:null),null),getTagAttrs=(tag,params)=>{const uniqAattr=getUniqAttr(params);if(uniqAattr){const tagAttr=attrValue(tag,uniqAattr),attrs={...params};return delete attrs[uniqAattr],`${tagAttr}${attrsToString(attrs)}`}return`${tag}${attrsToString(params)}`};class TagNode{attr(name,value){return void 0!==value&&(this.attrs[name]=value),this.attrs[name]}append(value){return appendToNode(this,value)}get length(){return getNodeLength(this)}toTagStart({openTag=OPEN_BRAKET,closeTag=CLOSE_BRAKET}={}){return`${openTag}${getTagAttrs(this.tag,this.attrs)}${closeTag}`}toTagEnd({openTag=OPEN_BRAKET,closeTag=CLOSE_BRAKET}={}){return`${openTag}${SLASH}${this.tag}${closeTag}`}toTagNode(){return new TagNode(this.tag.toLowerCase(),this.attrs,this.content)}toString({openTag=OPEN_BRAKET,closeTag=CLOSE_BRAKET}={}){const isEmpty=0===this.content.length,content=this.content.reduce(((r,node)=>r+node.toString({openTag,closeTag})),""),tagStart=this.toTagStart({openTag,closeTag});return isEmpty?tagStart:`${tagStart}${content}${this.toTagEnd({openTag,closeTag})}`}constructor(tag,attrs,content){this.tag=tag,this.attrs=attrs,this.content=Array.isArray(content)?content:[content]}}TagNode.create=(tag,attrs={},content=[])=>new TagNode(tag,attrs,content),TagNode.isOf=(node,type)=>node.tag===type,exports.BACKSLASH=BACKSLASH,exports.CLOSE_BRAKET=CLOSE_BRAKET,exports.EQ=EQ,exports.F=F,exports.N=N,exports.OPEN_BRAKET=OPEN_BRAKET,exports.QUOTEMARK=QUOTEMARK,exports.R=R,exports.SLASH=SLASH,exports.SPACE=SPACE,exports.TAB=TAB,exports.TagNode=TagNode,exports.appendToNode=appendToNode,exports.attrValue=attrValue,exports.attrsToString=attrsToString,exports.escapeHTML=escapeHTML,exports.getNodeLength=getNodeLength,exports.getUniqAttr=getUniqAttr,exports.isEOL=isEOL,exports.isStringNode=isStringNode,exports.isTagNode=isTagNode}(exports)},"../../node_modules/@bbob/preset-html5/dist/index.js":function(__unused_webpack_module,exports,__webpack_require__){!function(exports,preset,pluginHelper){"use strict";const isStartsWith=(node,type)=>node[0]===type,styleMap={color:val=>`color:${val};`,size:val=>`font-size:${val};`},getStyleFromAttrs=attrs=>Object.keys(attrs).reduce(((acc,key)=>styleMap[key]?acc.concat(styleMap[key](attrs[key])):acc),[]).join(" "),asListItems=content=>{let listIdx=0;const listItems=[],createItemNode=()=>pluginHelper.TagNode.create("li"),ensureListItem=val=>{listItems[listIdx]=listItems[listIdx]||val},addItem=val=>{listItems[listIdx]&&listItems[listIdx].content?listItems[listIdx].content=listItems[listIdx].content.concat(val):listItems[listIdx]=listItems[listIdx].concat(val)};return content.forEach((el=>{pluginHelper.isStringNode(el)&&isStartsWith(el,"*")?(listItems[listIdx]&&listIdx++,ensureListItem(createItemNode()),addItem(el.substr(1))):pluginHelper.isTagNode(el)&&pluginHelper.TagNode.isOf(el,"*")?(listItems[listIdx]&&listIdx++,ensureListItem(createItemNode())):pluginHelper.isTagNode(listItems[listIdx])?listItems[listIdx]?addItem(el):ensureListItem(el):(listIdx++,ensureListItem(el))})),[].concat(listItems)},renderUrl=(node,render)=>pluginHelper.getUniqAttr(node.attrs)?pluginHelper.getUniqAttr(node.attrs):render(node.content),toNode=(tag,attrs,content)=>({tag,attrs,content}),toStyle=style=>({style});var defaultTags={b:node=>toNode("span",toStyle("font-weight: bold;"),node.content),i:node=>toNode("span",toStyle("font-style: italic;"),node.content),u:node=>toNode("span",toStyle("text-decoration: underline;"),node.content),s:node=>toNode("span",toStyle("text-decoration: line-through;"),node.content),url:(node,{render},options)=>toNode("a",{href:renderUrl(node,render)},node.content),img:(node,{render})=>toNode("img",{src:render(node.content)},null),quote:node=>toNode("blockquote",{},[toNode("p",{},node.content)]),code:node=>toNode("pre",{},node.content),style:node=>toNode("span",toStyle(getStyleFromAttrs(node.attrs)),node.content),list:node=>{const type=pluginHelper.getUniqAttr(node.attrs);return toNode(type?"ol":"ul",type?{type}:{},asListItems(node.content))},color:node=>toNode("span",toStyle(`color: ${pluginHelper.getUniqAttr(node.attrs)};`),node.content)},index=preset.createPreset(defaultTags);exports.default=index,Object.defineProperty(exports,"__esModule",{value:!0})}(exports,__webpack_require__("../../node_modules/@bbob/preset/dist/index.js"),__webpack_require__("../../node_modules/@bbob/plugin-helper/dist/index.js"))},"../../node_modules/@bbob/preset-react/lib/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _default}});var _tags,_tags1,_tags2,_tags3,_presetHtml5=_interopRequireDefault(__webpack_require__("../../node_modules/@bbob/preset-html5/dist/index.js"));function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var tagAttr=function(style){return{attrs:{style}}},_default=_presetHtml5.default.extend((function(tags){return _extends({},tags,{b:function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _extends({},(_tags=tags).b.apply(_tags,args),tagAttr({fontWeight:"bold"}))},i:function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _extends({},(_tags1=tags).i.apply(_tags1,args),tagAttr({fontStyle:"italic"}))},u:function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _extends({},(_tags2=tags).u.apply(_tags2,args),tagAttr({textDecoration:"underline"}))},s:function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _extends({},(_tags3=tags).s.apply(_tags3,args),tagAttr({textDecoration:"line-through"}))}})}))},"../../node_modules/@bbob/preset/dist/index.js":function(__unused_webpack_module,exports){!function(exports){"use strict";const isTagNode=el=>"object"==typeof el&&!!el.tag;function process(tags,tree,core,options){tree.walk((node=>isTagNode(node)&&tags[node.tag]?tags[node.tag](node,core,options):node))}function createPreset(defTags,processor=process){const presetFactory=(opts={})=>{presetFactory.options=Object.assign(presetFactory.options||{},opts);const presetExecutor=(tree,core)=>processor(defTags,tree,core,presetFactory.options);return presetExecutor.options=presetFactory.options,presetExecutor};return presetFactory.extend=callback=>createPreset(callback(defTags,presetFactory.options),processor),presetFactory}exports.createPreset=createPreset,exports.default=createPreset,Object.defineProperty(exports,"__esModule",{value:!0})}(exports)},"../../node_modules/@bbob/react/lib/Component.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _default}});var _react=_interopRequireDefault(__webpack_require__("../../node_modules/react/index.js")),_render=(__webpack_require__("../../node_modules/prop-types/index.js"),__webpack_require__("../../node_modules/@bbob/react/lib/render.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var Component=function(param){var container=param.container,componentProps=param.componentProps,children=param.children,plugins=param.plugins,options=param.options;return _react.default.createElement(container,componentProps,function(children,plugins,options){return _react.default.Children.map(children,(function(child){return"string"==typeof child?(0,_render.render)(child,plugins,options):child}))}(children,plugins,options))};Component.defaultProps={container:"span",plugins:[],options:{},componentProps:{}};var _default=Component},"../../node_modules/@bbob/react/lib/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{default:function(){return _component.default},render:function(){return _render.render}});var _component=_interopRequireDefault(__webpack_require__("../../node_modules/@bbob/react/lib/Component.js")),_render=__webpack_require__("../../node_modules/@bbob/react/lib/render.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}},"../../node_modules/@bbob/react/lib/render.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{render:function(){return render},default:function(){return _default}});var _react=_interopRequireDefault(__webpack_require__("../../node_modules/react/index.js")),_core=_interopRequireDefault(__webpack_require__("../../node_modules/@bbob/core/dist/index.js")),_html=_interopRequireWildcard(__webpack_require__("../../node_modules/@bbob/html/dist/index.js")),_pluginHelper=__webpack_require__("../../node_modules/@bbob/plugin-helper/dist/index.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}var toAST=function(source,plugins,options){return(0,_core.default)(plugins).process(source,_extends({},options,{render:function(input){return _html.render(input,{stripTags:!0})}})).tree},isContentEmpty=function(content){return!content||0===content.length};function renderToReactNodes(nodes){return[].concat(nodes).reduce((function(arr,node,index){return(0,_pluginHelper.isTagNode)(node)?arr.push(function tagToReactElement(node,index){return _react.default.createElement(node.tag,_extends({},node.attrs,{key:index}),isContentEmpty(node.content)?null:renderToReactNodes(node.content))}(node,index)):(0,_pluginHelper.isStringNode)(node)&&arr.push(node),arr}),[])}function render(source,plugins,options){return renderToReactNodes(toAST(source,plugins,options))}var _default=render}}]);
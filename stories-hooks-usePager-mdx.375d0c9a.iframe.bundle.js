/*! For license information please see stories-hooks-usePager-mdx.375d0c9a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_weavingwebs_ww_react=self.webpackChunk_weavingwebs_ww_react||[]).push([[413,684],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/hooks/usePager.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Example=({itemsPerPage,total})=>{const pager=(0,_hooks__WEBPACK_IMPORTED_MODULE_1__.YH)(itemsPerPage,total);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{pager.dispatch({type:"updateItemsPerPage",itemsPerPage})}),[itemsPerPage]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{pager.dispatch({type:"update",total})}),[total]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"button",className:"btn btn-outline-secondary me-2",onClick:()=>pager.dispatch({type:"prev"}),disabled:1===pager.currentPage,children:"Prev"}),`${pager.currentPage} / ${pager.totalPages} `,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"button",className:"btn btn-outline-secondary me-2",onClick:()=>pager.dispatch({type:"next"}),disabled:pager.isLastPage,children:"Next"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"button",className:"btn btn-outline-secondary me-2",onClick:()=>pager.dispatch({type:"reset"}),disabled:1===pager.currentPage,children:"Reset"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{code:JSON.stringify(pager,null,"  "),language:"json"})]})};Example.displayName="Example";const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Source } from '@storybook/blocks';\nimport { Meta } from '@storybook/react';\nimport { FC, useEffect } from 'react';\nimport { usePager } from '../../hooks';\nexport const Example: FC<{\n  itemsPerPage: number;\n  total: number;\n}> = ({\n  itemsPerPage,\n  total\n}) => {\n  const pager = usePager(itemsPerPage, total);\n  useEffect(() => {\n    pager.dispatch({\n      type: 'updateItemsPerPage',\n      itemsPerPage\n    });\n  }, [itemsPerPage]);\n  useEffect(() => {\n    pager.dispatch({\n      type: 'update',\n      total\n    });\n  }, [total]);\n  return <div>\n      <button type=\"button\" className=\"btn btn-outline-secondary me-2\" onClick={() => pager.dispatch({\n      type: 'prev'\n    })} disabled={pager.currentPage === 1}>\n        Prev\n      </button>\n      {`${pager.currentPage} / ${pager.totalPages} `}\n      <button type=\"button\" className=\"btn btn-outline-secondary me-2\" onClick={() => pager.dispatch({\n      type: 'next'\n    })} disabled={pager.isLastPage}>\n        Next\n      </button>\n      <button type=\"button\" className=\"btn btn-outline-secondary me-2\" onClick={() => pager.dispatch({\n      type: 'reset'\n    })} disabled={pager.currentPage === 1}>\n        Reset\n      </button>\n      <Source code={JSON.stringify(pager, null, '  ')} language=\"json\" />\n    </div>;\n};\nconst meta: Meta = {\n  title: 'Hooks/usePager',\n  component: Example,\n  args: {\n    itemsPerPage: 50,\n    total: 283\n  }\n};\nexport default meta;\nExample.parameters = {\n  ...Example.parameters,\n  docs: {\n    ...Example.parameters?.docs,\n    source: {\n      originalSource: \"({\\n  itemsPerPage,\\n  total\\n}) => {\\n  const pager = usePager(itemsPerPage, total);\\n  useEffect(() => {\\n    pager.dispatch({\\n      type: 'updateItemsPerPage',\\n      itemsPerPage\\n    });\\n  }, [itemsPerPage]);\\n  useEffect(() => {\\n    pager.dispatch({\\n      type: 'update',\\n      total\\n    });\\n  }, [total]);\\n  return <div>\\n      <button type=\\\"button\\\" className=\\\"btn btn-outline-secondary me-2\\\" onClick={() => pager.dispatch({\\n      type: 'prev'\\n    })} disabled={pager.currentPage === 1}>\\n        Prev\\n      </button>\\n      {`${pager.currentPage} / ${pager.totalPages} `}\\n      <button type=\\\"button\\\" className=\\\"btn btn-outline-secondary me-2\\\" onClick={() => pager.dispatch({\\n      type: 'next'\\n    })} disabled={pager.isLastPage}>\\n        Next\\n      </button>\\n      <button type=\\\"button\\\" className=\\\"btn btn-outline-secondary me-2\\\" onClick={() => pager.dispatch({\\n      type: 'reset'\\n    })} disabled={pager.currentPage === 1}>\\n        Reset\\n      </button>\\n      <Source code={JSON.stringify(pager, null, '  ')} language=\\\"json\\\" />\\n    </div>;\\n}\",\n      ...Example.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{example:{startLoc:{col:5,line:8},endLoc:{col:1,line:44},startBody:{col:5,line:8},endBody:{col:1,line:44}}}}},title:"Hooks/usePager",component:Example,args:{itemsPerPage:50,total:283}};Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'({\n  itemsPerPage,\n  total\n}) => {\n  const pager = usePager(itemsPerPage, total);\n  useEffect(() => {\n    pager.dispatch({\n      type: \'updateItemsPerPage\',\n      itemsPerPage\n    });\n  }, [itemsPerPage]);\n  useEffect(() => {\n    pager.dispatch({\n      type: \'update\',\n      total\n    });\n  }, [total]);\n  return <div>\n      <button type="button" className="btn btn-outline-secondary me-2" onClick={() => pager.dispatch({\n      type: \'prev\'\n    })} disabled={pager.currentPage === 1}>\n        Prev\n      </button>\n      {`${pager.currentPage} / ${pager.totalPages} `}\n      <button type="button" className="btn btn-outline-secondary me-2" onClick={() => pager.dispatch({\n      type: \'next\'\n    })} disabled={pager.isLastPage}>\n        Next\n      </button>\n      <button type="button" className="btn btn-outline-secondary me-2" onClick={() => pager.dispatch({\n      type: \'reset\'\n    })} disabled={pager.currentPage === 1}>\n        Reset\n      </button>\n      <Source code={JSON.stringify(pager, null, \'  \')} language="json" />\n    </div>;\n}',...Example.parameters?.docs?.source}}};const __namedExportsOrder=["Example"];try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/hooks/usePager.stories.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/stories/hooks/usePager.stories.tsx#Example"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r5:()=>useAsync,m9:()=>useCopyToClipboard,dd:()=>useModal,YH:()=>usePager});var react=__webpack_require__("./node_modules/react/index.js");const pagerReducer=(state,action)=>{const newState={...state};switch(action.type){case"prev":newState.currentPage=state.currentPage-1;break;case"next":newState.currentPage=state.currentPage+1;break;case"update":newState.total=action.total;break;case"reset":newState.currentPage=1;break;case"updateCurrentPage":newState.currentPage=action.page;break;case"updateItemsPerPage":newState.itemsPerPage=action.itemsPerPage,newState.currentPage=1;break;default:throw new Error("unhandled case")}return newState.isLastPage=newState.currentPage*newState.itemsPerPage>=newState.total,newState},usePager=(itemsPerPageDefault,initialTotal=0)=>{const[state,dispatch]=react.useReducer(pagerReducer,{itemsPerPage:itemsPerPageDefault,total:initialTotal,currentPage:1,isLastPage:!1}),{total,currentPage,isLastPage,itemsPerPage}=state,paging=(0,react.useMemo)((()=>({limit:itemsPerPage,offset:(currentPage-1)*itemsPerPage})),[currentPage,itemsPerPage]),totalPages=(0,react.useMemo)((()=>Math.ceil(total/itemsPerPage)),[total,itemsPerPage]);return{total,totalPages,currentPage,isLastPage,itemsPerPage,dispatch,paging}};__webpack_require__("./src/hooks/useMemoOnce.ts");const modalReducer=(s,a)=>{switch(a.type){case"open":return{...s,isOpen:!0};case"close":return{...s,isOpen:!1};default:throw new Error(`invalid action '${a.type}'`)}},useModal=()=>{const[state,dispatch]=(0,react.useReducer)(modalReducer,{isOpen:!1});return{...state,onOpen:(0,react.useCallback)((()=>dispatch({type:"open"})),[]),onClose:(0,react.useCallback)((()=>dispatch({type:"close"})),[])}};__webpack_require__("./src/hooks/useConfirmModal.ts");function loadingReducer(s,a){switch(a.type){case"start_loading":return{...s,isLoading:!0,error:null};case"on_error":return{...s,result:null,isLoading:!1,error:a.error};case"set_error":return{...s,error:a.error};case"success":return{...s,isLoading:!1,result:a.result};case"reset":return{error:null,isLoading:!1,result:null};default:throw new Error(`unhandled case: ${a.type}`)}}function useAsync(defaultState){const[state,dispatch]=(0,react.useReducer)(loadingReducer,{...defaultState,error:null});return{...state,runAsync:(0,react.useCallback)((fn=>(dispatch({type:"start_loading"}),fn().then((result=>(dispatch({type:"success",result}),{result,error:null}))).catch((error=>(dispatch({type:"on_error",error}),{result:null,error}))))),[]),resetAsync:(0,react.useCallback)((()=>{dispatch({type:"reset"})}),[])}}const useCopyToClipboard=()=>{const[hasCopiedToClipboard,setHasCopiedToClipboard]=(0,react.useState)(!1);return{hasCopiedToClipboard,copyToClipboard:text=>{(async text=>{if(void 0===navigator.clipboard)throw new Error("Your browser does not support this action. Please upgrade to a modern browser before trying again.");return navigator.clipboard.writeText(text)})(text).then((()=>setHasCopiedToClipboard(!0))).catch((err=>{console.error(err),alert(`Sorry, this action has failed. ${err.message}.\nAttempting to copy: ${text}`)}))},resetCopiedStatus:()=>setHasCopiedToClipboard(!1)}}},"./src/hooks/useConfirmModal.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useConfirmModal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const DEFAULT={isOpen:!1,config:{onConfirm:async()=>{throw new Error("onConfirm is not set")}}},confirmModalReducer=(s,a)=>{switch(a.type){case"open":return{config:a.config,isOpen:!0};case"close":return{...DEFAULT};default:throw new Error(`invalid action '${a.type}'`)}},useConfirmModal=()=>{const[state,dispatch]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(confirmModalReducer,DEFAULT),showConfirm=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((config=>{dispatch({type:"open",config})}),[dispatch]),onCancel=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{dispatch({type:"close"})}),[dispatch]);return{...state.config,isOpen:state.isOpen,showConfirm,onCancel}}},"./src/hooks/useMemoOnce.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useMemoOnce});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useMemoOnce(fn){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(fn,[])}},"./src/stories/hooks/usePager.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_ww_react_ww_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_usePager_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/hooks/usePager.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ww_react_ww_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({blockquote:"blockquote",p:"p",a:"a"},(0,_home_runner_work_ww_react_ww_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Hooks/usePager"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Dx,{children:"usePager"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["NOTE: Usually it is better to use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/story/hooks-useurlfilters--full-example-with-paging",children:"useUrlFiltersWithPage"})," so the page is remembered when the user navigates away and back to the page (which is a much better user experience)."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Simple state based pager."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_usePager_stories__WEBPACK_IMPORTED_MODULE_2__.Example})]})}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
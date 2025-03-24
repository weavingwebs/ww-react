"use strict";(self.webpackChunk_weavingwebs_ww_react=self.webpackChunk_weavingwebs_ww_react||[]).push([[406,88],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/components/TableResults.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ErrorState:()=>ErrorState,Example:()=>Example,LoadingState:()=>LoadingState,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _mocks_mockData_json__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/mocks/mockData.json"),_components_TableResults__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/TableResults/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Example=({showError,isLoading})=>{const data=_mocks_mockData_json__WEBPACK_IMPORTED_MODULE_0__.slice(0,10);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table",{className:"table",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"Age"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"Gender"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"Company"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"Email"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"Telephone"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_TableResults__WEBPACK_IMPORTED_MODULE_1__.L,{columnCount:6,error:showError?new Error("Mock error"):null,errorPrefix:"Failed to get results",isLoading,results:data,renderRow:person=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:person.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:person.age}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:person.gender}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:person.company}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:person.email}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:person.phone})]},person.id)})})]})};Example.displayName="Example";const meta={parameters:{storySource:{source:'import { FC } from \'react\';\nimport { Meta, StoryObj } from \'@storybook/react\';\nimport mockData from \'../mocks/mockData.json\';\nimport { TableResults } from \'../../components/TableResults\';\nexport const Example: FC<{\n  isLoading: boolean;\n  showError: boolean;\n}> = ({\n  showError,\n  isLoading\n}) => {\n  const data = mockData.slice(0, 10);\n  return <table className="table">\n      <thead>\n        <tr>\n          <th scope="col">Name</th>\n          <th scope="col">Age</th>\n          <th scope="col">Gender</th>\n          <th scope="col">Company</th>\n          <th scope="col">Email</th>\n          <th scope="col">Telephone</th>\n        </tr>\n      </thead>\n      <tbody>\n        <TableResults columnCount={6} error={showError ? new Error(\'Mock error\') : null} errorPrefix="Failed to get results" isLoading={isLoading} results={data} renderRow={person => <tr key={person.id}>\n              <td>{person.name}</td>\n              <td>{person.age}</td>\n              <td>{person.gender}</td>\n              <td>{person.company}</td>\n              <td>{person.email}</td>\n              <td>{person.phone}</td>\n            </tr>} />\n      </tbody>\n    </table>;\n};\nconst meta: Meta = {\n  title: \'Components/TableResults\',\n  component: Example,\n  args: {\n    isLoading: false,\n    showError: false\n  }\n};\nexport default meta;\nconst Template: StoryObj = {\n  story: meta,\n  args: {\n    isLoading: false,\n    showError: false\n  }\n};\nexport const LoadingState = {\n  ...Template,\n  args: {\n    ...Template.args,\n    isLoading: true\n  }\n};\nexport const ErrorState = {\n  ...Template,\n  args: {\n    ...Template.args,\n    showError: true\n  }\n};\nExample.parameters = {\n  ...Example.parameters,\n  docs: {\n    ...Example.parameters?.docs,\n    source: {\n      originalSource: "({\\n  showError,\\n  isLoading\\n}) => {\\n  const data = mockData.slice(0, 10);\\n  return <table className=\\"table\\">\\n      <thead>\\n        <tr>\\n          <th scope=\\"col\\">Name</th>\\n          <th scope=\\"col\\">Age</th>\\n          <th scope=\\"col\\">Gender</th>\\n          <th scope=\\"col\\">Company</th>\\n          <th scope=\\"col\\">Email</th>\\n          <th scope=\\"col\\">Telephone</th>\\n        </tr>\\n      </thead>\\n      <tbody>\\n        <TableResults columnCount={6} error={showError ? new Error(\'Mock error\') : null} errorPrefix=\\"Failed to get results\\" isLoading={isLoading} results={data} renderRow={person => <tr key={person.id}>\\n              <td>{person.name}</td>\\n              <td>{person.age}</td>\\n              <td>{person.gender}</td>\\n              <td>{person.company}</td>\\n              <td>{person.email}</td>\\n              <td>{person.phone}</td>\\n            </tr>} />\\n      </tbody>\\n    </table>;\\n}",\n      ...Example.parameters?.docs?.source\n    }\n  }\n};\nLoadingState.parameters = {\n  ...LoadingState.parameters,\n  docs: {\n    ...LoadingState.parameters?.docs,\n    source: {\n      originalSource: "{\\n  ...Template,\\n  args: {\\n    ...Template.args,\\n    isLoading: true\\n  }\\n}",\n      ...LoadingState.parameters?.docs?.source\n    }\n  }\n};\nErrorState.parameters = {\n  ...ErrorState.parameters,\n  docs: {\n    ...ErrorState.parameters?.docs,\n    source: {\n      originalSource: "{\\n  ...Template,\\n  args: {\\n    ...Template.args,\\n    showError: true\\n  }\\n}",\n      ...ErrorState.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{example:{startLoc:{col:5,line:8},endLoc:{col:1,line:35},startBody:{col:5,line:8},endBody:{col:1,line:35}},"loading-state":{startLoc:{col:28,line:52},endLoc:{col:1,line:58},startBody:{col:28,line:52},endBody:{col:1,line:58}},"error-state":{startLoc:{col:26,line:59},endLoc:{col:1,line:65},startBody:{col:26,line:59},endBody:{col:1,line:65}}}}},title:"Components/TableResults",component:Example,args:{isLoading:!1,showError:!1}},__WEBPACK_DEFAULT_EXPORT__=meta,Template={story:meta,args:{isLoading:!1,showError:!1}},LoadingState={...Template,args:{...Template.args,isLoading:!0}},ErrorState={...Template,args:{...Template.args,showError:!0}};Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'({\n  showError,\n  isLoading\n}) => {\n  const data = mockData.slice(0, 10);\n  return <table className="table">\n      <thead>\n        <tr>\n          <th scope="col">Name</th>\n          <th scope="col">Age</th>\n          <th scope="col">Gender</th>\n          <th scope="col">Company</th>\n          <th scope="col">Email</th>\n          <th scope="col">Telephone</th>\n        </tr>\n      </thead>\n      <tbody>\n        <TableResults columnCount={6} error={showError ? new Error(\'Mock error\') : null} errorPrefix="Failed to get results" isLoading={isLoading} results={data} renderRow={person => <tr key={person.id}>\n              <td>{person.name}</td>\n              <td>{person.age}</td>\n              <td>{person.gender}</td>\n              <td>{person.company}</td>\n              <td>{person.email}</td>\n              <td>{person.phone}</td>\n            </tr>} />\n      </tbody>\n    </table>;\n}',...Example.parameters?.docs?.source}}},LoadingState.parameters={...LoadingState.parameters,docs:{...LoadingState.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    ...Template.args,\n    isLoading: true\n  }\n}",...LoadingState.parameters?.docs?.source}}},ErrorState.parameters={...ErrorState.parameters,docs:{...ErrorState.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    ...Template.args,\n    showError: true\n  }\n}",...ErrorState.parameters?.docs?.source}}};const __namedExportsOrder=["Example","LoadingState","ErrorState"];try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},showError:{defaultValue:null,description:"",name:"showError",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/TableResults.stories.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/stories/components/TableResults.stories.tsx#Example"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/components/TableResults.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_ww_react_ww_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_TableResults_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/components/TableResults.stories.tsx"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_ww_react_ww_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({p:"p",a:"a",h2:"h2"},(0,_home_runner_work_ww_react_ww_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Components/TableResults"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Dx,{children:"TableResults"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"TableResults is a component for rendering table results with standardised loading and error states."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["See ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/story/hooks-useurlfilters--full-example-with-paging",children:"Full Example With Paging"})," for a complete example."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Also see ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/bootstrap-tableresultswithplaceholder--docs",children:"TableResultsWithPlaceholder"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_TableResults_stories__WEBPACK_IMPORTED_MODULE_2__.Example}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"loading-state",children:"Loading State"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_TableResults_stories__WEBPACK_IMPORTED_MODULE_2__.LoadingState}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"error-state",children:"Error State"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_TableResults_stories__WEBPACK_IMPORTED_MODULE_2__.ErrorState})]})}}},"./src/stories/mocks/mockData.json":module=>{module.exports=JSON.parse('[{"id":"7ebd6741-fc7f-4823-a6be-64cfe0d8af16","age":35,"name":"Gibson Blackwell","gender":"male","company":"ZILLAR","email":"gibsonblackwell@zillar.com","phone":"+44 7921469344","registered":"2018-09-23T07:46:00 -01:00"},{"id":"58219a6f-58bb-4e07-8b15-db12c0611178","age":28,"name":"Alberta Griffin","gender":"female","company":"CUBICIDE","email":"albertagriffin@cubicide.com","phone":"+44 7834501244","registered":"2021-05-28T12:10:53 -01:00"},{"id":"51b6753c-840d-42a5-af13-0a8cb9338c9c","age":36,"name":"Rowena Bryan","gender":"female","company":"ORBIFLEX","email":"rowenabryan@orbiflex.com","phone":"+44 7802523369","registered":"2016-05-14T07:33:42 -01:00"},{"id":"52b53fa7-ad26-4a05-a2f3-943ca0df7cb4","age":21,"name":"Tracey Ballard","gender":"female","company":"TROPOLIS","email":"traceyballard@tropolis.com","phone":"+44 7923542382","registered":"2021-11-16T02:29:21 -00:00"},{"id":"2019f676-dab5-4e31-ab3c-d9966cfb67a8","age":40,"name":"Snider Watkins","gender":"male","company":"KROG","email":"sniderwatkins@krog.com","phone":"+44 7969469213","registered":"2018-04-05T08:55:46 -01:00"},{"id":"c01aa83e-30e3-4562-83eb-9ed3fb9593a8","age":25,"name":"Chambers Dawson","gender":"male","company":"EMPIRICA","email":"chambersdawson@empirica.com","phone":"+44 7974455366","registered":"2020-10-28T08:19:02 -00:00"},{"id":"143f65d0-a160-444b-b411-ec4f5713d8d9","age":30,"name":"Amelia Vega","gender":"female","company":"NEBULEAN","email":"ameliavega@nebulean.com","phone":"+44 7892412303","registered":"2016-04-22T10:15:09 -01:00"},{"id":"8c551732-67ab-4eb1-81a7-4e5d53c12471","age":22,"name":"Jocelyn Collier","gender":"female","company":"EARBANG","email":"jocelyncollier@earbang.com","phone":"+44 7828571316","registered":"2016-12-21T06:40:27 -00:00"},{"id":"89cff3cf-696a-4be6-94af-37999bbafaef","age":35,"name":"Hattie Mcconnell","gender":"female","company":"XIXAN","email":"hattiemcconnell@xixan.com","phone":"+44 7840414243","registered":"2016-11-04T03:24:29 -00:00"},{"id":"4909d82e-4965-4f55-b97d-31e0ccf2fbc0","age":25,"name":"Grace Mccormick","gender":"female","company":"ZIPAK","email":"gracemccormick@zipak.com","phone":"+44 7810434369","registered":"2014-02-23T11:15:43 -00:00"},{"id":"300bb579-1327-40a7-abec-205c6084b564","age":21,"name":"Lydia Richmond","gender":"female","company":"SCHOOLIO","email":"lydiarichmond@schoolio.com","phone":"+44 7837511281","registered":"2020-06-27T04:56:46 -01:00"},{"id":"572505c2-bb7c-454b-ac16-6b56b1810f5d","age":25,"name":"Alford Compton","gender":"male","company":"CABLAM","email":"alfordcompton@cablam.com","phone":"+44 7815487276","registered":"2022-12-15T08:32:35 -00:00"},{"id":"09b165c3-e643-4a1d-accb-b0f0c57b9022","age":36,"name":"Fitzgerald Beck","gender":"male","company":"FARMAGE","email":"fitzgeraldbeck@farmage.com","phone":"+44 7959546253","registered":"2014-02-19T10:30:08 -00:00"},{"id":"4e1f9603-ceb7-4388-ac72-11c7c93e03c6","age":25,"name":"Norma Monroe","gender":"female","company":"PETIGEMS","email":"normamonroe@petigems.com","phone":"+44 7919578254","registered":"2020-02-08T08:41:14 -00:00"},{"id":"2d30a00c-a037-40a6-bc11-b25e9cfde206","age":22,"name":"Autumn Moody","gender":"female","company":"BUZZMAKER","email":"autumnmoody@buzzmaker.com","phone":"+44 7997518318","registered":"2022-06-18T05:18:28 -01:00"},{"id":"827db416-0125-4d61-a2e8-9b3675e77eee","age":39,"name":"Jeannie Ruiz","gender":"female","company":"COMTREK","email":"jeannieruiz@comtrek.com","phone":"+44 7955419220","registered":"2021-05-19T10:59:00 -01:00"},{"id":"c50e3a36-9b9a-4fe8-aaf9-1e577c74f6f4","age":40,"name":"Allen Anderson","gender":"male","company":"LUNCHPAD","email":"allenanderson@lunchpad.com","phone":"+44 7896509325","registered":"2017-10-24T02:12:30 -01:00"},{"id":"5fcfb0b6-3562-45e9-b792-91306821a6b5","age":38,"name":"Keith Dodson","gender":"male","company":"INCUBUS","email":"keithdodson@incubus.com","phone":"+44 7992503209","registered":"2019-06-30T02:14:06 -01:00"},{"id":"aae7b67d-45d3-49f8-8476-1dd4e5ccb1f4","age":31,"name":"Andrea Carey","gender":"female","company":"GEEKETRON","email":"andreacarey@geeketron.com","phone":"+44 7804459369","registered":"2017-11-16T06:21:35 -00:00"},{"id":"69837949-34c2-451b-8ed5-6572a877c7e0","age":35,"name":"Mitchell Nunez","gender":"male","company":"TALAE","email":"mitchellnunez@talae.com","phone":"+44 7934416200","registered":"2022-04-08T02:56:08 -01:00"},{"id":"d0757052-86af-4538-9a3a-15e524acb412","age":28,"name":"Short Mercado","gender":"male","company":"DYMI","email":"shortmercado@dymi.com","phone":"+44 7971553304","registered":"2017-01-10T09:04:28 -00:00"},{"id":"44f292f3-e1ef-4a8b-82df-3e1119581a6f","age":38,"name":"Valentine Stevenson","gender":"male","company":"MULTIFLEX","email":"valentinestevenson@multiflex.com","phone":"+44 7863508213","registered":"2019-06-12T07:41:14 -01:00"},{"id":"ce20bcc5-4205-488c-b084-a23427c3fcbb","age":35,"name":"Skinner Holder","gender":"male","company":"QOT","email":"skinnerholder@qot.com","phone":"+44 7942516365","registered":"2019-10-13T08:16:48 -01:00"},{"id":"b1d8649e-88f9-4b4b-ad32-fe35f49119f2","age":26,"name":"Summers Holt","gender":"male","company":"DARWINIUM","email":"summersholt@darwinium.com","phone":"+44 7940512223","registered":"2022-05-05T01:24:00 -01:00"},{"id":"68641fe4-077a-4d0c-be0f-2cf60e0bf0c8","age":20,"name":"Jensen Newton","gender":"male","company":"ENORMO","email":"jensennewton@enormo.com","phone":"+44 7854556362","registered":"2021-12-29T08:16:37 -00:00"},{"id":"1e0016c7-fdd3-4980-8a8b-761d8f61b8c7","age":32,"name":"Richards Ratliff","gender":"male","company":"OBONES","email":"richardsratliff@obones.com","phone":"+44 7806599332","registered":"2017-11-13T12:28:21 -00:00"},{"id":"12f81e70-7a25-4d97-a778-3a14c16b9e38","age":38,"name":"Nielsen Moran","gender":"male","company":"ENTHAZE","email":"nielsenmoran@enthaze.com","phone":"+44 7899450358","registered":"2021-11-20T02:01:07 -00:00"},{"id":"75f48282-5caf-4793-8d06-5c70a8efbe42","age":25,"name":"Alvarado Marsh","gender":"male","company":"CORPULSE","email":"alvaradomarsh@corpulse.com","phone":"+44 7968413224","registered":"2021-02-24T03:15:38 -00:00"},{"id":"82ce402a-1a30-4a74-9384-7e074c1398e9","age":32,"name":"Saundra Landry","gender":"female","company":"ZOLAR","email":"saundralandry@zolar.com","phone":"+44 7819514210","registered":"2020-05-19T10:04:11 -01:00"},{"id":"5cdf739e-cfcc-41f1-9798-dfb13c679b48","age":20,"name":"Stone Baxter","gender":"male","company":"BLANET","email":"stonebaxter@blanet.com","phone":"+44 7921588206","registered":"2018-04-03T03:33:59 -01:00"},{"id":"a239741e-283e-4bf9-ae3a-8f8f3fa3f56d","age":21,"name":"Hays Porter","gender":"male","company":"ADORNICA","email":"haysporter@adornica.com","phone":"+44 7832537240","registered":"2023-07-12T09:14:05 -01:00"},{"id":"288c4024-fbb4-4086-890e-0454ec78cfba","age":20,"name":"Glenn House","gender":"male","company":"QIAO","email":"glennhouse@qiao.com","phone":"+44 7884573268","registered":"2022-10-05T10:57:19 -01:00"},{"id":"efcd8943-9a8d-44cf-b61a-f190426cdbdd","age":25,"name":"Clara Norman","gender":"female","company":"ROUGHIES","email":"claranorman@roughies.com","phone":"+44 7801573388","registered":"2016-03-18T05:42:17 -00:00"},{"id":"b4e6ff8a-89f4-4d9c-a590-03a13b553262","age":25,"name":"Long Ray","gender":"male","company":"NUTRALAB","email":"longray@nutralab.com","phone":"+44 7972449346","registered":"2022-07-31T07:43:26 -01:00"},{"id":"6c2de980-df03-44c4-acf6-c9daf28744c1","age":26,"name":"Estelle Salinas","gender":"female","company":"ULTRASURE","email":"estellesalinas@ultrasure.com","phone":"+44 7839600204","registered":"2018-06-12T06:18:58 -01:00"},{"id":"e93b0ba7-e378-4502-b9fe-25b7c7c0d5e2","age":32,"name":"Munoz Pearson","gender":"male","company":"ZILLAN","email":"munozpearson@zillan.com","phone":"+44 7838490309","registered":"2022-11-11T01:27:02 -00:00"},{"id":"932ff67e-e9ac-42ae-b844-9db80d6b70ae","age":34,"name":"Espinoza Wilkins","gender":"male","company":"XURBAN","email":"espinozawilkins@xurban.com","phone":"+44 7956460381","registered":"2017-05-08T04:52:17 -01:00"},{"id":"3bae51b5-d989-4d28-8fd8-76fcc2251473","age":23,"name":"Tania Fields","gender":"female","company":"XTH","email":"taniafields@xth.com","phone":"+44 7884559327","registered":"2018-08-09T07:02:23 -01:00"},{"id":"d6cfa935-145a-4d03-b69b-f69358ca80c3","age":27,"name":"Johnson Pugh","gender":"male","company":"LYRIA","email":"johnsonpugh@lyria.com","phone":"+44 7936507340","registered":"2014-10-17T05:36:47 -01:00"},{"id":"2fcc679e-3a42-4bc7-b01a-8ac912295870","age":38,"name":"Boone Torres","gender":"male","company":"MAGNAFONE","email":"boonetorres@magnafone.com","phone":"+44 7899512276","registered":"2014-11-06T08:31:22 -00:00"},{"id":"d32482f9-a8ab-4e28-b952-2bdaf550986f","age":40,"name":"Mcclure Barrera","gender":"male","company":"DIGIFAD","email":"mcclurebarrera@digifad.com","phone":"+44 7902451214","registered":"2019-04-26T10:54:54 -01:00"},{"id":"3f68fe96-eb1f-418e-b381-8ce20b7ce5f8","age":40,"name":"Baird Nash","gender":"male","company":"SPACEWAX","email":"bairdnash@spacewax.com","phone":"+44 7830495274","registered":"2015-07-26T06:02:30 -01:00"},{"id":"f0fc59f4-4eac-43b2-a1ce-01440bc3dd78","age":28,"name":"King Mendoza","gender":"male","company":"AUTOGRATE","email":"kingmendoza@autograte.com","phone":"+44 7981482245","registered":"2019-05-19T12:53:00 -01:00"},{"id":"b9466ffd-2062-4997-b5e2-4e14b3216f38","age":39,"name":"Shelby Tyson","gender":"female","company":"EDECINE","email":"shelbytyson@edecine.com","phone":"+44 7941508385","registered":"2021-05-10T02:04:53 -01:00"},{"id":"56613e81-bb9c-420b-8eca-17a7ea9c0741","age":38,"name":"Marie Sellers","gender":"female","company":"SLAMBDA","email":"mariesellers@slambda.com","phone":"+44 7906539252","registered":"2018-12-04T10:16:02 -00:00"},{"id":"e9fc470e-813a-4a6a-8bc3-6f27e3fd66e3","age":26,"name":"Wilkerson Schneider","gender":"male","company":"PROTODYNE","email":"wilkersonschneider@protodyne.com","phone":"+44 7858444201","registered":"2017-02-03T01:08:22 -00:00"},{"id":"3af6c678-621f-4d98-b18a-8d36730535ac","age":23,"name":"Stacey Olsen","gender":"female","company":"TUBESYS","email":"staceyolsen@tubesys.com","phone":"+44 7986453350","registered":"2014-01-07T09:07:18 -00:00"},{"id":"8648880d-073d-4106-9fdb-10c7ffee1135","age":31,"name":"Pearson Morin","gender":"male","company":"ENOMEN","email":"pearsonmorin@enomen.com","phone":"+44 7874538297","registered":"2021-02-10T12:48:14 -00:00"},{"id":"eeb76a80-2e70-46c8-a430-679a5c3da301","age":39,"name":"Parks Cunningham","gender":"male","company":"QUILCH","email":"parkscunningham@quilch.com","phone":"+44 7851533262","registered":"2023-01-03T12:34:01 -00:00"},{"id":"651729cc-33ec-46f3-8037-0c515faee695","age":38,"name":"Angelia Fletcher","gender":"female","company":"PARAGONIA","email":"angeliafletcher@paragonia.com","phone":"+44 7941548291","registered":"2018-07-06T07:15:00 -01:00"}]')}}]);
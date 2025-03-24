"use strict";(self.webpackChunk_weavingwebs_ww_react=self.webpackChunk_weavingwebs_ww_react||[]).push([[481],{"./node_modules/@hookform/resolvers/yup/dist/yup.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>yup_o});var index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),t=function(e,t,i){if(e&&"reportValidity"in e){var n=(0,index_esm.U2)(i,t);e.setCustomValidity(n&&n.message||""),e.reportValidity()}},resolvers_i=function(r,e){var i=function(i){var n=e.fields[i];n&&n.ref&&"reportValidity"in n.ref?t(n.ref,i,r):n.refs&&n.refs.forEach((function(e){return t(e,i,r)}))};for(var n in e.fields)i(n)},resolvers_n=function(t,n){n.shouldUseNativeValidation&&resolvers_i(t,n);var f={};for(var a in t){var s=(0,index_esm.U2)(n.fields,a),u=Object.assign(t[a]||{},{ref:s&&s.ref});if(o(n.names||Object.keys(t),a)){var c=Object.assign({},(0,index_esm.U2)(f,a));(0,index_esm.t8)(c,"root",u),(0,index_esm.t8)(f,a,c)}else(0,index_esm.t8)(f,a,u)}return f},o=function(r,e){return r.some((function(r){return r.startsWith(e+".")}))};function yup_o(o,n,a){return void 0===n&&(n={}),void 0===a&&(a={}),function(s,i,c){try{return Promise.resolve(function(t,r){try{var u=(n.context,Promise.resolve(o["sync"===a.mode?"validateSync":"validate"](s,Object.assign({abortEarly:!1},n,{context:i}))).then((function(t){return c.shouldUseNativeValidation&&resolvers_i({},c),{values:a.raw?s:t,errors:{}}})))}catch(e){return r(e)}return u&&u.then?u.then(void 0,r):u}(0,(function(e){if(!e.inner)throw e;return{values:{},errors:resolvers_n((o=e,n=!c.shouldUseNativeValidation&&"all"===c.criteriaMode,(o.inner||[]).reduce((function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),n){var o=e[t.path].types,a=o&&o[t.type];e[t.path]=(0,index_esm.KN)(t.path,n,e,t.type,a?[].concat(a,t.message):t.message)}return e}),{})),c)};var o,n})))}catch(e){return Promise.reject(e)}}}},"./src/stories/examples/forms/RadiosUsingRawInputs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RadiosUsingRawInputs:()=>RadiosUsingRawInputs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var yup__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/yup/index.esm.js"),react_hook_form__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@hookform/resolvers/yup/dist/yup.mjs"),_bootstrap__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/bootstrap/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const validationSchema=(0,yup__WEBPACK_IMPORTED_MODULE_0__.Ry)({radio:(0,yup__WEBPACK_IMPORTED_MODULE_0__.Z_)().label("Radio").required().min(1)}),RadiosUsingRawInputs=()=>{const formMethods=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.cI)({resolver:(0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__.X)(validationSchema),defaultValues:{radio:""}}),{register,handleSubmit,formState:{isSubmitting,errors},control}=formMethods,liveValues=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.qo)({control});return console.log({liveValues}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.RV,{...formMethods,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form",{noValidate:!0,onSubmit:handleSubmit((values=>alert(JSON.stringify(values)))),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("fieldset",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Dw,{as:"legend",required:!0,children:"What was the weather like?"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"form-check",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label",{className:"form-check-label",htmlFor:"radioSunny",children:["Sunny",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{...register("radio"),id:"radioSunny",type:"radio",value:"Sunny",className:"form-check-input"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"form-check",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label",{className:"form-check-label",htmlFor:"radioRainy",children:["Rainy",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{...register("radio"),id:"radioRainy",type:"radio",value:"Rainy",className:"form-check-input"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"form-check",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label",{className:"form-check-label",htmlFor:"radioCloudy",children:["Cloudy",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{...register("radio"),id:"radioCloudy",type:"radio",value:"Cloudy",className:"form-check-input"})]})})]}),errors.radio&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ky,{id:"selectError",error:errors.radio})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_bootstrap__WEBPACK_IMPORTED_MODULE_1__.zx,{variant:"primary",type:"submit",disabled:isSubmitting,className:"mt-3",children:"Submit"})]})})};RadiosUsingRawInputs.displayName="RadiosUsingRawInputs",RadiosUsingRawInputs.storyName="Radios: raw inputs";const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import { Meta, StoryObj } from \'@storybook/react\';\nimport { object, string } from \'yup\';\nimport { FormProvider, useForm, useWatch } from \'react-hook-form\';\nimport { yupResolver } from \'@hookform/resolvers/yup\';\nimport { Button, BsFormError, BsFormLabel } from \'../../../bootstrap\';\nconst validationSchema = object({\n  radio: string().label(\'Radio\').required().min(1)\n});\nexport const RadiosUsingRawInputs: StoryObj = () => {\n  const formMethods = useForm({\n    resolver: yupResolver(validationSchema),\n    defaultValues: {\n      radio: \'\'\n    } // \'Sunny\' to test default.\n  });\n\n  const {\n    register,\n    handleSubmit,\n    formState: {\n      isSubmitting,\n      errors\n    },\n    control\n  } = formMethods;\n  const liveValues = useWatch({\n    control\n  });\n\n  // When calling useWatch do inputs become controlled? Question.\n  \n  console.log({\n    liveValues\n  });\n  return <FormProvider {...formMethods}>\n      <form\n    // We are validating using yup so we don\'t want HTML validation get in our way.\n    // e.g. setting type="email" or required would trigger HTML validation.\n    noValidate\n    \n    onSubmit={handleSubmit(values => alert(JSON.stringify(values)))}>\n        <div>\n          <fieldset>\n            <BsFormLabel as="legend" required>\n              What was the weather like?\n            </BsFormLabel>\n\n            <div className="form-check">\n              <label className="form-check-label" htmlFor="radioSunny">\n                Sunny\n                <input {...register(\'radio\')} id="radioSunny" type="radio" value="Sunny" className="form-check-input" />\n              </label>\n            </div>\n\n            <div className="form-check">\n              <label className="form-check-label" htmlFor="radioRainy">\n                Rainy\n                <input {...register(\'radio\')} id="radioRainy" type="radio" value="Rainy" className="form-check-input" />\n              </label>\n            </div>\n\n            <div className="form-check">\n              <label className="form-check-label" htmlFor="radioCloudy">\n                Cloudy\n                <input {...register(\'radio\')} id="radioCloudy" type="radio" value="Cloudy" className="form-check-input" />\n              </label>\n            </div>\n          </fieldset>\n\n          {errors.radio && <BsFormError id="selectError" error={errors.radio} />}\n        </div>\n\n        <Button variant="primary" type="submit" disabled={isSubmitting} className="mt-3">\n          Submit\n        </Button>\n      </form>\n    </FormProvider>;\n};\nRadiosUsingRawInputs.storyName = \'Radios: raw inputs\';\nexport default ({\n  title: \'Examples/Forms\',\n  component: RadiosUsingRawInputs\n} as Meta<typeof RadiosUsingRawInputs>);\nRadiosUsingRawInputs.parameters = {\n  ...RadiosUsingRawInputs.parameters,\n  docs: {\n    ...RadiosUsingRawInputs.parameters?.docs,\n    source: {\n      originalSource: "() => {\\n  const formMethods = useForm({\\n    resolver: yupResolver(validationSchema),\\n    defaultValues: {\\n      radio: \'\'\\n    } // \'Sunny\' to test default.\\n  });\\n\\n  const {\\n    register,\\n    handleSubmit,\\n    formState: {\\n      isSubmitting,\\n      errors\\n    },\\n    control\\n  } = formMethods;\\n  const liveValues = useWatch({\\n    control\\n  });\\n\\n  // When calling useWatch do inputs become controlled? Question.\\n  // eslint-disable-next-line no-console\\n  console.log({\\n    liveValues\\n  });\\n  return <FormProvider {...formMethods}>\\n      <form\\n    // We are validating using yup so we don\'t want HTML validation get in our way.\\n    // e.g. setting type=\\"email\\" or required would trigger HTML validation.\\n    noValidate\\n    // eslint-disable-next-line no-alert\\n    onSubmit={handleSubmit(values => alert(JSON.stringify(values)))}>\\n        <div>\\n          <fieldset>\\n            <BsFormLabel as=\\"legend\\" required>\\n              What was the weather like?\\n            </BsFormLabel>\\n\\n            <div className=\\"form-check\\">\\n              <label className=\\"form-check-label\\" htmlFor=\\"radioSunny\\">\\n                Sunny\\n                <input {...register(\'radio\')} id=\\"radioSunny\\" type=\\"radio\\" value=\\"Sunny\\" className=\\"form-check-input\\" />\\n              </label>\\n            </div>\\n\\n            <div className=\\"form-check\\">\\n              <label className=\\"form-check-label\\" htmlFor=\\"radioRainy\\">\\n                Rainy\\n                <input {...register(\'radio\')} id=\\"radioRainy\\" type=\\"radio\\" value=\\"Rainy\\" className=\\"form-check-input\\" />\\n              </label>\\n            </div>\\n\\n            <div className=\\"form-check\\">\\n              <label className=\\"form-check-label\\" htmlFor=\\"radioCloudy\\">\\n                Cloudy\\n                <input {...register(\'radio\')} id=\\"radioCloudy\\" type=\\"radio\\" value=\\"Cloudy\\" className=\\"form-check-input\\" />\\n              </label>\\n            </div>\\n          </fieldset>\\n\\n          {errors.radio && <BsFormError id=\\"selectError\\" error={errors.radio} />}\\n        </div>\\n\\n        <Button variant=\\"primary\\" type=\\"submit\\" disabled={isSubmitting} className=\\"mt-3\\">\\n          Submit\\n        </Button>\\n      </form>\\n    </FormProvider>;\\n}",\n      ...RadiosUsingRawInputs.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{"radios-using-raw-inputs":{startLoc:{col:46,line:9},endLoc:{col:1,line:78},startBody:{col:46,line:9},endBody:{col:1,line:78}}}}},title:"Examples/Forms",component:RadiosUsingRawInputs};RadiosUsingRawInputs.parameters={...RadiosUsingRawInputs.parameters,docs:{...RadiosUsingRawInputs.parameters?.docs,source:{originalSource:'() => {\n  const formMethods = useForm({\n    resolver: yupResolver(validationSchema),\n    defaultValues: {\n      radio: \'\'\n    } // \'Sunny\' to test default.\n  });\n\n  const {\n    register,\n    handleSubmit,\n    formState: {\n      isSubmitting,\n      errors\n    },\n    control\n  } = formMethods;\n  const liveValues = useWatch({\n    control\n  });\n\n  // When calling useWatch do inputs become controlled? Question.\n  // eslint-disable-next-line no-console\n  console.log({\n    liveValues\n  });\n  return <FormProvider {...formMethods}>\n      <form\n    // We are validating using yup so we don\'t want HTML validation get in our way.\n    // e.g. setting type="email" or required would trigger HTML validation.\n    noValidate\n    // eslint-disable-next-line no-alert\n    onSubmit={handleSubmit(values => alert(JSON.stringify(values)))}>\n        <div>\n          <fieldset>\n            <BsFormLabel as="legend" required>\n              What was the weather like?\n            </BsFormLabel>\n\n            <div className="form-check">\n              <label className="form-check-label" htmlFor="radioSunny">\n                Sunny\n                <input {...register(\'radio\')} id="radioSunny" type="radio" value="Sunny" className="form-check-input" />\n              </label>\n            </div>\n\n            <div className="form-check">\n              <label className="form-check-label" htmlFor="radioRainy">\n                Rainy\n                <input {...register(\'radio\')} id="radioRainy" type="radio" value="Rainy" className="form-check-input" />\n              </label>\n            </div>\n\n            <div className="form-check">\n              <label className="form-check-label" htmlFor="radioCloudy">\n                Cloudy\n                <input {...register(\'radio\')} id="radioCloudy" type="radio" value="Cloudy" className="form-check-input" />\n              </label>\n            </div>\n          </fieldset>\n\n          {errors.radio && <BsFormError id="selectError" error={errors.radio} />}\n        </div>\n\n        <Button variant="primary" type="submit" disabled={isSubmitting} className="mt-3">\n          Submit\n        </Button>\n      </form>\n    </FormProvider>;\n}',...RadiosUsingRawInputs.parameters?.docs?.source}}};const __namedExportsOrder=["RadiosUsingRawInputs"]}}]);
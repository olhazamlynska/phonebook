"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[745],{9745:function(e,r,a){a.r(r),a.d(r,{default:function(){return w}});var t=a(6907),n=a(5705),o=a(9434),i=a(266),s=a(4554),l=a(3044),c=a(890),u=a(1889),d=a(722),m=a(3227),h=a(7933),f=a(5822),v=a(6340),p=a(5218),g=a(1876),x=a(184),Z=function(){var e=(0,o.I0)(),r=(0,v.a)().authIsLoading,a=(0,n.TA)({initialValues:{email:"",password:""},validationSchema:g.Br,onSubmit:function(r,a){var t=a.resetForm;e((0,f.Ib)({name:r.name,email:r.email,password:r.password})).unwrap().then((function(){return p.Am.success("You are logged in!")})).catch((function(){return p.Am.error("Something went wrong! Try again...")})),t()}});return(0,x.jsx)(i.Z,{component:"main",maxWidth:"xs",children:(0,x.jsxs)(s.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,x.jsx)(l.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,x.jsx)(h.Z,{})}),(0,x.jsx)(c.Z,{component:"h1",variant:"h5",mb:2,children:"Log in"}),(0,x.jsxs)("form",{onSubmit:a.handleSubmit,children:[(0,x.jsxs)(u.ZP,{container:!0,spacing:4,children:[(0,x.jsx)(u.ZP,{item:!0,xs:12,children:(0,x.jsx)(d.Z,{type:"email",required:!0,fullWidth:!0,id:"email",label:"Email Adress",name:"email",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email})}),(0,x.jsx)(u.ZP,{item:!0,xs:12,children:(0,x.jsx)(d.Z,{required:!0,fullWidth:!0,type:"password",name:"password",label:"password",id:"password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password})})]}),(0,x.jsx)(m.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},loading:r,children:"Log in"})]})]})})},w=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t.ql,{children:(0,x.jsx)("title",{children:"Login"})}),(0,x.jsx)(Z,{})]})}},7933:function(e,r,a){var t=a(4836);r.Z=void 0;var n=t(a(5649)),o=a(184),i=(0,n.default)([(0,o.jsx)("path",{d:"M6 20V10h12v1c.7 0 1.37.1 2 .29V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6.26c-.42-.6-.75-1.28-.97-2H6zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"},"0"),(0,o.jsx)("path",{d:"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c.83 0 1.5.67 1.5 1.5S18.83 18 18 18s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm0 6c-1.03 0-1.94-.52-2.48-1.32.73-.42 1.57-.68 2.48-.68s1.75.26 2.48.68c-.54.8-1.45 1.32-2.48 1.32z"},"1")],"LockPersonOutlined");r.Z=i},3044:function(e,r,a){a.d(r,{Z:function(){return b}});var t=a(9439),n=a(3366),o=a(7462),i=a(2791),s=a(8182),l=a(4419),c=a(6934),u=a(1402),d=a(9201),m=a(184),h=(0,d.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),f=a(5878),v=a(1217);function p(e){return(0,v.Z)("MuiAvatar",e)}(0,f.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],x=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var a=e.ownerState;return[r.root,r[a.variant],a.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,a=e.ownerState;return(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===a.variant&&{borderRadius:(r.vars||r).shape.borderRadius},"square"===a.variant&&{borderRadius:0},a.colorDefault&&(0,o.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),Z=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),w=(0,c.ZP)(h,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var b=i.forwardRef((function(e,r){var a=(0,u.Z)({props:e,name:"MuiAvatar"}),c=a.alt,d=a.children,h=a.className,f=a.component,v=void 0===f?"div":f,b=a.imgProps,j=a.sizes,S=a.src,y=a.srcSet,k=a.variant,P=void 0===k?"circular":k,A=(0,n.Z)(a,g),C=null,M=function(e){var r=e.crossOrigin,a=e.referrerPolicy,n=e.src,o=e.srcSet,s=i.useState(!1),l=(0,t.Z)(s,2),c=l[0],u=l[1];return i.useEffect((function(){if(n||o){u(!1);var e=!0,t=new Image;return t.onload=function(){e&&u("loaded")},t.onerror=function(){e&&u("error")},t.crossOrigin=r,t.referrerPolicy=a,t.src=n,o&&(t.srcset=o),function(){e=!1}}}),[r,a,n,o]),c}((0,o.Z)({},b,{src:S,srcSet:y})),R=S||y,z=R&&"error"!==M,D=(0,o.Z)({},a,{colorDefault:!z,component:v,variant:P}),I=function(e){var r=e.classes,a={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.Z)(a,p,r)}(D);return C=z?(0,m.jsx)(Z,(0,o.Z)({alt:c,src:S,srcSet:y,sizes:j,ownerState:D,className:I.img},b)):null!=d?d:R&&c?c[0]:(0,m.jsx)(w,{className:I.fallback}),(0,m.jsx)(x,(0,o.Z)({as:v,ownerState:D,className:(0,s.Z)(I.root,h),ref:r},A,{children:C}))}))},266:function(e,r,a){var t=a(80),n=a(4036),o=a(6934),i=a(1402),s=(0,t.Z)({createStyledComponent:(0,o.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,r){var a=e.ownerState;return[r.root,r["maxWidth".concat((0,n.Z)(String(a.maxWidth)))],a.fixed&&r.fixed,a.disableGutters&&r.disableGutters]}}),useThemeProps:function(e){return(0,i.Z)({props:e,name:"MuiContainer"})}});r.Z=s}}]);
//# sourceMappingURL=745.f4a73bbb.chunk.js.map
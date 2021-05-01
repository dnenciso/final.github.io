(this["webpackJsonpcrud-react"]=this["webpackJsonpcrud-react"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),u=a.n(l),o=(a(12),a(2)),i=a(3),c=function(e){return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"NOMBRE"),r.a.createElement("th",null,"PROFESION"),r.a.createElement("th",null,"FUNCION"))),r.a.createElement("tbody",null,e.users.length>0?e.users.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.profesion),r.a.createElement("td",null,r.a.createElement("button",{className:"button muted-button",onClick:function(){e.editRow(t)}},"Editar"),r.a.createElement("button",{className:"button muted-button",onClick:function(){return e.deleteUser(t.id)}},"Eliminar")))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:3},"No hay usuarios creados"))))},s=a(4),m=function(e){var t,a,n=Object(s.a)(),l=n.register,u=n.errors,o=n.handleSubmit;return r.a.createElement("form",{onSubmit:o((function(t,a){t.id=null,e.addUser(t),a.target.reset()}))},r.a.createElement("label",null,"Name"),r.a.createElement("input",{placeholder:"INGRESA NOMBRE",type:"text",name:"name",ref:l({required:{value:!0,message:"Valor requerido"}})}),r.a.createElement("div",{className:"event"},null===u||void 0===u||null===(t=u.name)||void 0===t?void 0:t.message),r.a.createElement("label",null,"Profesion"),r.a.createElement("input",{placeholder:"INGRESA TU PROFESION",type:"text",name:"profesion",ref:l({required:{value:!0,message:"Valor requerido"}})}),r.a.createElement("div",{className:"event"},null===u||void 0===u||null===(a=u.profesion)||void 0===a?void 0:a.message),r.a.createElement("button",{type:"submit"},"Nuevo Usuario"))},d=function(e){var t,a,n=Object(s.a)({defaultValues:e.currentUser}),l=n.register,u=n.errors,o=n.handleSubmit,i=n.setValue;i("name",e.currentUser.name),i("profesion",e.currentUser.profesion);return r.a.createElement("form",{onSubmit:o((function(t,a){t.id=e.currentUser.id,console.log(t),e.updateUser(e.currentUser.id,t),a.target.reset()}))},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",ref:l({required:{value:!0,message:"Valor requerido"}})}),r.a.createElement("div",{className:"event"},null===u||void 0===u||null===(t=u.name)||void 0===t?void 0:t.message),r.a.createElement("label",null,"Profesion"),r.a.createElement("input",{type:"text",name:"profesion",ref:l({required:{value:!0,message:"Valor requerido"}})}),r.a.createElement("div",{className:"event"},null===u||void 0===u||null===(a=u.username)||void 0===a?void 0:a.message),r.a.createElement("button",{type:"submit"},"Actualizar Datos"),r.a.createElement("button",{onClick:function(){return e.setEditing(!1)},className:"button muted-button"},"Cancel"))},E=a(16);var f=function(){var e=[{id:Object(E.a)(),name:"Jonathan Alonso",profesion:"Ing Sistemas"},{id:Object(E.a)(),name:"Cristian Diaz",profesion:"Tec Sistemas"},{id:Object(E.a)(),name:"Daniel Enciso Orjuela",profesion:"Ing Sistemas"}],t=Object(n.useState)(e),a=Object(i.a)(t,2),l=a[0],u=a[1],s=Object(n.useState)(!1),f=Object(i.a)(s,2),b=f[0],v=f[1],p=Object(n.useState)({id:null,name:"",profesion:""}),g=Object(i.a)(p,2),N=g[0],O=g[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"CRUD React Daniel Enciso"),r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"flex-large"},b?r.a.createElement("div",null,r.a.createElement("h2",null,"Editar usuario"),r.a.createElement(d,{setEditing:v,currentUser:N,updateUser:function(e,t){v(!1),u(l.map((function(a){return a.id===e?t:a})))}})):r.a.createElement("div",null,r.a.createElement("h2",null,"Ingresar Nuevo Usuario"),r.a.createElement(m,{addUser:function(e){e.id=Object(E.a)(),console.log(e),u([].concat(Object(o.a)(l),[e]))}}))),r.a.createElement("div",{className:"flex-large"},r.a.createElement("h2",null,"Datos Usuarios"),r.a.createElement(c,{users:l,deleteUser:function(e){u(l.filter((function(t){return t.id!==e}))),console.log(e)},editRow:function(e){v(!0),O({id:e.id,name:e.name,profesion:e.profesion})}}))))};u.a.render(r.a.createElement(f,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.136c0232.chunk.js.map
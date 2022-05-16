(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={input:"Filter_input__3ydGM",label:"Filter_label__esReL"}},15:function(t,e,n){t.exports={container:"App_container__1cmVB"}},2:function(t,e,n){t.exports={form:"ContactForm_form__2MDjt",label:"ContactForm_label__2t_wP",input:"ContactForm_input__354fx",button:"ContactForm_button__2bj0p"}},3:function(t,e,n){t.exports={contactList:"ContactList_contactList__2b_lD",item:"ContactList_item__3oWbQ",button:"ContactList_button__3GfmE",name:"ContactList_name__2Qcq-",number:"ContactList_number__1bS_O"}},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(13),s=n.n(r),o=n(4),i=n(16),l=n(7),u=n(8),m=n(10),b=n(9),d=n(14),h=n.n(d),j=n(6),p=n(2),f=n.n(p),C=n(0),_={name:"",number:""},O=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=Object(o.a)({},_),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.addContact(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.form,children:[Object(C.jsxs)("label",{className:f.a.label,htmlFor:this.nameInputId,children:["Name",Object(C.jsx)("input",{className:f.a.input,type:"text",name:"name",id:this.nameInputId,value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(C.jsxs)("label",{className:f.a.label,htmlFor:this.numberInputId,children:["Number",Object(C.jsx)("input",{className:f.a.input,type:"tel",name:"number",id:this.numberInputId,value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(C.jsx)("button",{className:f.a.button,type:"submit",children:"Add contact"})]})}}]),n}(c.a.Component),x=n(3),v=n.n(x),g=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(C.jsx)("ul",{className:v.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(C.jsxs)("li",{className:v.a.item,children:[Object(C.jsx)("p",{className:v.a.name,children:a}),Object(C.jsx)("p",{className:v.a.number,children:c}),Object(C.jsx)("button",{className:v.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},y=n(12),N=n.n(y),F=function(t){var e=t.value,n=t.onChange;return Object(C.jsxs)("label",{className:N.a.label,children:["Find contacts by name",Object(C.jsx)("input",{className:N.a.input,type:"text",name:"filter",value:e,onChange:n})]})},L=n(15),w=n.n(L),S=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){t.state.contacts.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("This contact is already exist!! Try one more time, please!"):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[Object(o.a)(Object(o.a)({},e),{},{id:h.a.generate()})])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"getFilteredContacts",value:function(){var t=this;return this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))}},{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return Object(C.jsxs)("div",{className:w.a.container,children:[Object(C.jsx)("h1",{children:"Phonebook"}),Object(C.jsx)(O,{addContact:this.addContact}),Object(C.jsx)("h2",{children:"Contacts"}),Object(C.jsx)(F,{value:t,onChange:this.changeFilter}),Object(C.jsx)(g,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(c.a.Component);n(30);s.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(S,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.3a698ad7.chunk.js.map
(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{13:function(e,t,a){e.exports=a(29)},19:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),s=a(4),i=a.n(s),o=a(7),m=a(8),d=a(9),u=a(12),f=a(11),E=(a(19),function(){return l.a.createElement("div",{className:"lds-spinner"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))}),h=function(e){return l.a.createElement("table",{className:"table border-bottom"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{onClick:e.onSort.bind(null,"id"),scope:"col"},"ID ","id"===e.sortField?"asc"===e.sort?l.a.createElement("i",{className:"fa fa-caret-down","aria-hidden":"true"}):l.a.createElement("i",{className:"fa fa-caret-up","aria-hidden":"true"}):null),l.a.createElement("th",{onClick:e.onSort.bind(null,"firstName"),scope:"col"},"\u0418\u043c\u044f ","firstName"===e.sortField?"asc"===e.sort?l.a.createElement("i",{className:"fa fa-caret-down","aria-hidden":"true"}):l.a.createElement("i",{className:"fa fa-caret-up","aria-hidden":"true"}):null),l.a.createElement("th",{onClick:e.onSort.bind(null,"lastName"),scope:"col"},"\u0424\u0430\u043c\u0438\u043b\u0438\u044f ","lastName"===e.sortField?"asc"===e.sort?l.a.createElement("i",{className:"fa fa-caret-down","aria-hidden":"true"}):l.a.createElement("i",{className:"fa fa-caret-up","aria-hidden":"true"}):null),l.a.createElement("th",{onClick:e.onSort.bind(null,"email"),scope:"col"},"E-mail ","email"===e.sortField?"asc"===e.sort?l.a.createElement("i",{className:"fa fa-caret-down","aria-hidden":"true"}):l.a.createElement("i",{className:"fa fa-caret-up","aria-hidden":"true"}):null),l.a.createElement("th",{onClick:e.onSort.bind(null,"phone"),scope:"col"},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d ","phone"===e.sortField?"asc"===e.sort?l.a.createElement("i",{className:"fa fa-caret-down","aria-hidden":"true"}):l.a.createElement("i",{className:"fa fa-caret-up","aria-hidden":"true"}):null))),l.a.createElement("tbody",null,e.data.map((function(t){return l.a.createElement("tr",{key:t.id+t.phone,onClick:e.onRowSelect.bind(null,t)},l.a.createElement("td",null,t.id),l.a.createElement("td",null,t.firstName),l.a.createElement("td",null,t.lastName),l.a.createElement("td",null,t.email),l.a.createElement("td",null,t.phone))}))))},p=function(e){var t=e.person;return void 0===t.description?l.a.createElement("div",{className:"d-flex flex-column align-items-center m-3"},l.a.createElement("p",null,"\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ",l.a.createElement("b",null,t.firstName+" "+t.lastName)),l.a.createElement("p",null,l.a.createElement("b",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"))):l.a.createElement("div",{className:"d-flex flex-column align-items-center"},l.a.createElement("p",null,"\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ",l.a.createElement("b",null,t.firstName+" "+t.lastName)),l.a.createElement("p",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",l.a.createElement("br",null),l.a.createElement("textarea",{defaultValue:t.description})),l.a.createElement("p",null,"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f: ",l.a.createElement("b",null,t.address.streetAddress)),l.a.createElement("p",null,"\u0413\u043e\u0440\u043e\u0434: ",l.a.createElement("b",null,t.address.city)),l.a.createElement("p",null,"\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f/\u0448\u0442\u0430\u0442: ",l.a.createElement("b",null,t.address.state)),l.a.createElement("p",null,"\u0418\u043d\u0434\u0435\u043a\u0441: ",l.a.createElement("b",null,t.address.zip)))},N=function(e){return l.a.createElement("div",{className:"d-flex align-items-center flex-column",style:{padding:"50px 0"}},l.a.createElement("b",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0431\u044a\u0451\u043c \u0434\u0430\u043d\u043d\u044b\u0445"),l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("button",{onClick:function(){return e.onSelect("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")},className:"btn btn-light m-5"},"\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439"),l.a.createElement("button",{onClick:function(){return e.onSelect("http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")},className:"btn btn-light m-5"},"\u0411\u043e\u043b\u044c\u0448\u043e\u0439")))},b=a(1),v=function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),r=a[0],c=a[1];return l.a.createElement("div",{className:"d-flex text-center flex-column align-items-center"},l.a.createElement("div",{className:"input-group w-50 p-2"},l.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){c(e.target.value)},value:r}),l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return e.onSearch(r)}},"\u041f\u043e\u0438\u0441\u043a"))),l.a.createElement("div",{className:"m-2"},l.a.createElement("div",null,"\u0414\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043c\u044f, \u0424\u0430\u043c\u0438\u043b\u0438\u044e \u0438\u043b\u0438 email"),l.a.createElement("div",null,"\u0414\u043b\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432 \u0448\u0430\u043f\u043a\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),l.a.createElement("div",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u043d\u0438\u044e \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0443")))},g=function(){return l.a.createElement("div",{className:"d-flex justify-content-center mt-3"},l.a.createElement("p",null,l.a.createElement("b",null,"\u041f\u043e\u0438\u0441\u043a \u043d\u0435 \u0434\u0430\u043b \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432")))},w=function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),i=Object(b.a)(s,2),o=i[0],m=i[1],d=Object(n.useState)(""),u=Object(b.a)(d,2),f=u[0],E=u[1],h=Object(n.useState)(""),p=Object(b.a)(h,2),N=p[0],v=p[1],g=Object(n.useState)(""),w=Object(b.a)(g,2),x=w[0],C=w[1],S={id:r,firstName:o,lastName:f,email:N,phone:x};return l.a.createElement("div",{className:"d-flex m-2 flex-column"},l.a.createElement("form",{className:"m-3"},l.a.createElement("div",{className:"form-row d-flex justify-content-around"},l.a.createElement("div",{className:"col-2 mb-3"},l.a.createElement("input",{type:"number",min:"0",className:"form-control",placeholder:"ID",value:r,onChange:function(e){c(e.target.value)}})),l.a.createElement("div",{className:"col-2  mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u0418\u043c\u044f",value:o,onChange:function(e){m(e.target.value)}})),l.a.createElement("div",{className:"col-2  mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:f,onChange:function(e){E(e.target.value)}})),l.a.createElement("div",{className:"col-2  mb-3"},l.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:N,onChange:function(e){v(e.target.value)}})),l.a.createElement("div",{className:"col-2  mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",value:x,onChange:function(e){C(e.target.value)}})))),l.a.createElement("button",{className:"btn btn-dark w-75 mb-1",disabled:!(r&&o&&f&&N&&x),type:"submit",onClick:function(){return t=S,c(""),m(""),E(""),v(""),C(""),void e.addNewPerson(t);var t},style:{margin:"0 auto"}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),l.a.createElement("button",{className:"btn btn-dark w-75 mt-1",onClick:function(){return e.adderHandler(!1)},style:{margin:"0 auto"}},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"))},x=function(e){return l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("button",{className:"btn btn-dark w-75 mt-1 mb-2",onClick:function(){return e.adderHandler(!0)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c"))},C=a(2),S=a.n(C),k=a(10),y=a.n(k),j=function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={isModeSelected:!1,isLoading:!1,isAdding:!1,data:[],search:"",sort:"asc",sortField:"id",row:null,currentPage:0,addMode:!1},e.alert={isAlerted:!1},e.onSort=function(t){var a=e.state.data.concat(),n="asc"===e.state.sort?"desc":"asc",l=S.a.orderBy(a,t,n);e.setState({data:l,sort:n,sortField:t})},e.onRowSelect=function(t){return e.setState({row:t})},e.modeSelectHandler=function(t){e.setState({isModeSelected:!0,isLoading:!0}),e.fetchData(t)},e.pageChangeHandler=function(t){var a=t.selected;e.setState({currentPage:a})},e.searchHandler=function(t){e.setState({search:t,currentPage:0})},e.addHandler=function(t){var a=e.state.data;a.some((function(e){return e.id===t.id}))&&a.some((function(e){return e.phone===t.phone}))?alert("\u0423\u0436\u0435 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435"):(a.unshift(t),e.setState({data:a}))},e.closeHandler=function(t){e.setState({isAdding:t})},e}return Object(d.a)(a,[{key:"fetchData",value:function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,this.setState({isLoading:!1,data:S.a.orderBy(n,this.state.sortField,this.state.sort)});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getFilteredData",value:function(){var e=this.state,t=e.data,a=e.search;return a?0===t.filter((function(e){return e.firstName.toLowerCase().includes(a.toLowerCase())||e.lastName.toLowerCase().includes(a.toLowerCase())||e.email.toLowerCase().includes(a.toLowerCase())})).length?(this.alert.isAlerted=!0,t):(this.alert.isAlerted=!1,t.filter((function(e){return e.firstName.toLowerCase().includes(a.toLowerCase())||e.lastName.toLowerCase().includes(a.toLowerCase())||e.email.toLowerCase().includes(a.toLowerCase())}))):t}},{key:"render",value:function(){if(!this.state.isModeSelected)return l.a.createElement("div",{className:"container"},l.a.createElement(N,{onSelect:this.modeSelectHandler}));var e=this.getFilteredData(),t=Math.ceil(e.length/50),a=S.a.chunk(e,50)[this.state.currentPage];return l.a.createElement("div",{className:"container-fluid p-0"},this.state.isLoading?l.a.createElement(E,null):l.a.createElement(l.a.Fragment,null,this.alert.isAlerted?l.a.createElement(g,null):null,l.a.createElement(v,{onSearch:this.searchHandler}),this.state.isAdding?null:l.a.createElement(x,{adderHandler:this.closeHandler}),this.state.isAdding?l.a.createElement(w,{addNewPerson:this.addHandler,adderHandler:this.closeHandler}):null,l.a.createElement(h,{data:a,onSort:this.onSort,sort:this.state.sort,sortField:this.state.sortField,onRowSelect:this.onRowSelect})),this.state.data.length>50?l.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},l.a.createElement(y.a,{previousLabel:"<",nextLabel:">",breakLabel:"...",breakClassName:"break-me",pageCount:t,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.pageChangeHandler,containerClassName:"pagination",activeClassName:"active",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",nextClassName:"page-item",previousLinkClassName:"page-link",nextLinkClassName:"page-link",forcePage:this.state.currentPage})):null,this.state.row?l.a.createElement(p,{person:this.state.row}):null)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(27),a(28);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.8f81b69f.chunk.js.map
(this["webpackJsonpredux-test"]=this["webpackJsonpredux-test"]||[]).push([[0],[,,,,function(t,e,c){t.exports={item:"CartItem_item__aaVyx",details:"CartItem_details__3tfMp",quantity:"CartItem_quantity__1lJSA",price:"CartItem_price__c6LIW",itemprice:"CartItem_itemprice__3OwQn",actions:"CartItem_actions__3tcD2"}},function(t,e,c){t.exports={"button-wrapper":"ItemForm_button-wrapper__1P53V","error-handler":"ItemForm_error-handler__4RXQk","input-wrapper":"ItemForm_input-wrapper__dSWBE"}},,,,function(t,e,c){t.exports={item:"ProductItem_item__3I7k0",price:"ProductItem_price__23v2A",actions:"ProductItem_actions__9bMcV"}},,,,function(t,e,c){t.exports={button:"CartButton_button__2jS2a",badge:"CartButton_badge__amhZ6"}},function(t,e,c){t.exports={products:"Products_products__2S08e","button-wrapper":"Products_button-wrapper__d3Ryk"}},,,function(t,e,c){t.exports={card:"Card_card__1s9Ge"}},function(t,e,c){t.exports={cart:"Cart_cart__6506v"}},function(t,e,c){t.exports={header:"MainHeader_header__3flqM"}},,,,,,,,function(t,e,c){},,function(t,e,c){"use strict";c.r(e);var r=c(7),n=c.n(r),i=c(2),a=c(3),s=Object(a.b)({name:"CartIsShown",initialState:{cartIsShown:!1},reducers:{showCart:function(t){t.cartIsShown=!t.cartIsShown}}}),o=c(10),u=Object(a.b)({name:"CartItems",initialState:{items:[{title:"Test Item 1",quantity:1,total:6,price:6},{title:"Test Item 2",quantity:0,total:0,price:10}]},reducers:{addNewProduct:function(t,e){var c=Object(o.a)(t.items);c.push(e.payload),t.items=c},addItem:function(t,e){var c=Object(o.a)(t.items);t.items.forEach((function(r,n){return r.title==e.payload&&(n,c[n].quantity=r.quantity+1,c[n].total=Number(r.price)*Number(r.quantity),console.log(c[n])),t.items=c}))},removeItem:function(t,e){var c=Object(o.a)(t.items);t.items.forEach((function(r,n){if(r.title==e.payload){if(n,0==r.quantity)return;c[n].quantity=r.quantity-1,c[n].total=c[n].total-c[n].price,console.log(c[n])}return t.items=c}))}}}),l=Object(a.b)({name:"FormIsShown",initialState:{FormIsShown:!1},reducers:{showForm:function(t){t.FormIsShown=!t.FormIsShown}}}),d=Object(a.a)({reducer:{showCart:s.reducer,items:u.reducer,showForm:l.reducer}}),j=l.actions,b=u.actions,m=s.actions,h=d,p=(c(27),c(17)),O=c.n(p),x=c(0),f=function(t){return Object(x.jsx)("section",{className:"".concat(O.a.card," ").concat(t.className?t.className:""),children:t.children})},_=c(18),w=c.n(_),v=c(4),I=c.n(v),y=function(t){Object(i.c)((function(t){return t.items}));var e=Object(i.b)(),c=t.item,r=c.title,n=c.quantity,a=c.total,s=c.price;return Object(x.jsxs)("li",{className:I.a.item,children:[Object(x.jsxs)("header",{children:[Object(x.jsx)("h3",{children:r}),Object(x.jsxs)("div",{className:I.a.price,children:["$",a.toFixed(2)," ",Object(x.jsxs)("span",{className:I.a.itemprice,children:["($",s.toFixed(2),"/item)"]})]})]}),Object(x.jsxs)("div",{className:I.a.details,children:[Object(x.jsxs)("div",{className:I.a.quantity,children:["x ",Object(x.jsx)("span",{children:n})]}),Object(x.jsxs)("div",{className:I.a.actions,children:[Object(x.jsx)("button",{onClick:function(){e(b.removeItem(r)),console.log(r)},children:"-"}),Object(x.jsx)("button",{onClick:function(){e(b.addItem(r)),console.log(r)},children:"+"})]})]})]})},N=function(t){var e=Object(i.c)((function(t){return t.items})),c=e.items.map((function(t,e){return t.quantity>0?Object(x.jsx)(y,{item:{title:t.title,quantity:t.quantity,total:t.total,price:t.price}},e):void 0}));return console.log(e.items),Object(x.jsxs)(f,{className:w.a.cart,children:[Object(x.jsx)("h2",{children:"Your Shopping Cart"}),Object(x.jsx)("ul",{children:c})]})},C=c(1),S=c(13),q=c.n(S),F=function(t){var e=0,c=Object(i.b)(),r=Object(i.c)((function(t){return t.showCart.cartIsShown}));Object(i.c)((function(t){return t.items.items})).forEach((function(t){e+=t.quantity}));return Object(x.jsxs)("button",{className:q.a.button,onClick:function(){c(m.showCart()),console.log(r)},children:[Object(x.jsx)("span",{children:"My Cart"}),Object(x.jsx)("span",{className:q.a.badge,children:e})]})},g=c(19),k=c.n(g),P=function(t){return Object(x.jsxs)("header",{className:k.a.header,children:[Object(x.jsx)("h1",{children:"ReduxCart"}),Object(x.jsx)("nav",{children:Object(x.jsx)("ul",{children:Object(x.jsx)("li",{children:Object(x.jsx)(F,{})})})})]})},A=function(t){return Object(x.jsxs)(C.Fragment,{children:[Object(x.jsx)(P,{}),Object(x.jsx)("main",{children:t.children})]})},E=c(9),B=c.n(E),M=function(t){var e=t.title,c=t.price,r=t.description,n=Object(i.b)();return Object(x.jsx)("li",{className:B.a.item,children:Object(x.jsxs)(f,{children:[Object(x.jsxs)("header",{children:[Object(x.jsx)("h3",{children:e}),Object(x.jsxs)("div",{className:B.a.price,children:["$",c.toFixed(2)]})]}),Object(x.jsx)("p",{children:r}),Object(x.jsx)("div",{className:B.a.actions,children:Object(x.jsx)("button",{onClick:function(){n(b.addItem(e)),console.log(e)},children:"Add to Cart"})})]})})},J=c(14),R=c.n(J),V=c(15),$=c(5),D=c.n($),Q=function(t){var e=Object(C.useState)(""),c=Object(V.a)(e,2),r=c[0],n=c[1],i=Object(C.useState)(0),a=Object(V.a)(i,2),s=a[0],o=a[1];return Object(x.jsx)(C.Fragment,{children:Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c={title:"",price:0};""!==r.trim()&&""!==s&&(c.title=r,c.price=Number(s),t.onAddNewItem(c),o(0),n(""))},children:[Object(x.jsxs)(f,{children:[Object(x.jsxs)("div",{className:D.a["input-wrapper"],children:[Object(x.jsx)("label",{htmlFor:"product-name",children:"Product name"}),Object(x.jsx)("input",{name:"product-name",type:"text",placeholder:"put your product name here",onChange:function(t){n(t.target.value)},value:r})]}),""===r?Object(x.jsx)("div",{className:D.a["error-handler"],children:Object(x.jsx)("p",{children:"please write product name"})}):""]}),Object(x.jsxs)(f,{children:[Object(x.jsxs)("div",{className:D.a["input-wrapper"],children:[Object(x.jsx)("label",{htmlFor:"price",children:"Product price"}),Object(x.jsx)("input",{name:"price",type:"number",min:"1",step:"0.5",placeholder:"1",onChange:function(t){o(t.target.value)},value:s})]}),0===s?Object(x.jsx)("div",{className:D.a["error-handler"],children:Object(x.jsx)("p",{children:"please write product price"})}):""]}),Object(x.jsx)("div",{className:D.a["button-wrapper"],children:Object(x.jsx)("button",{type:"submit",children:"Add"})})]})})},T=function(t){var e=Object(i.c)((function(t){return t.items})),c=Object(i.c)((function(t){return t.showForm.FormIsShown})),r=Object(i.b)(),n=function(){r(j.showForm())},a=e.items.map((function(t,e){return Object(x.jsx)(M,{title:t.title,price:t.price,description:"basic description"},e)}));return Object(x.jsxs)("section",{className:R.a.products,children:[Object(x.jsx)("h2",{children:"Buy your favorite products"}),Object(x.jsx)(f,{className:R.a["button-wrapper"],children:c?Object(x.jsx)(Q,{onAddNewItem:function(t){var e={title:t.title,price:t.price,quantity:0,total:0};r(b.addNewProduct(e)),n()}}):Object(x.jsx)("button",{onClick:n,children:"add item to the cart"})}),Object(x.jsx)("ul",{children:a})]})};var W=function(){var t=Object(i.c)((function(t){return t.items.items})),e=Object(i.c)((function(t){return t.showCart.cartIsShown})),c=0;return t.forEach((function(t){c+=t.quantity})),Object(x.jsxs)(A,{children:[e&&c>0?Object(x.jsx)(N,{}):"",e?Object(x.jsx)(T,{}):""]})};n.a.render(Object(x.jsx)(i.a,{store:h,children:Object(x.jsx)(W,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.2c1440cb.chunk.js.map
(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(t,e,a){t.exports={container:"Feedback_container__qXuY9",title:"Feedback_title__QwkuQ",list:"Feedback_list__2bOil",listElement:"Feedback_listElement__CcSEv",btnList:"Feedback_btnList__3TN_R",btnGood:"Feedback_btnGood__1scQu",btnNeutral:"Feedback_btnNeutral__2wbiy",btnBad:"Feedback_btnBad__37XxR"}},16:function(t,e,a){"use strict";a.r(e);var n=a(2),c=a.n(n),i=a(5),s=a.n(i),l=a(6),o=a(7),r=a(10),d=a(9),b=a(8),u=a.n(b),j=a(0),k=function(t){var e=t.children;return Object(j.jsx)("div",{className:u.a.section,children:e})},h=a(1),_=a.n(h),m=function(t){var e=t.onClickLike,a=t.onClickNeutral,n=t.onClickBad;return Object(j.jsxs)("div",{className:_.a.container,children:[Object(j.jsx)("h2",{className:_.a.title,children:"Please leave feedback!"}),Object(j.jsxs)("ul",{className:_.a.list,children:[Object(j.jsx)("li",{className:_.a.listElement,children:Object(j.jsx)("button",{className:_.a.btnList&&_.a.btnGood,onClick:e,children:"Good"})}),Object(j.jsx)("li",{className:_.a.listElement,children:Object(j.jsx)("button",{className:_.a.btnList&&_.a.btnNeutral,onClick:a,children:"Neutral"})}),Object(j.jsx)("li",{className:_.a.listElement,children:Object(j.jsx)("button",{className:_.a.btnList&&_.a.btnBad,onClick:n,children:"Bad"})})]})]})},O=a(3),x=a.n(O),N=function(t){var e=t.good,a=t.neutral,n=t.bad,c=t.total,i=t.positive;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:x.a.title,children:"Statistics"}),0===e&&0===a&&0===n?Object(j.jsx)("p",{children:"No feedback given"}):Object(j.jsxs)("ul",{className:x.a.list,children:[Object(j.jsxs)("li",{className:x.a.listElement,children:["Good: ",e]}),Object(j.jsxs)("li",{className:x.a.listElement,children:["Neutral: ",a]}),Object(j.jsxs)("li",{className:x.a.listElement,children:["Bad: ",n]}),Object(j.jsxs)("li",{className:x.a.listElement,children:["Total: ",c]}),Object(j.jsxs)("li",{className:x.a.listElement,children:["Positive feedback: ",i,"%"]})]})]})},f=function(t){Object(r.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0,total:0,positive:0},t.onClickLike=function(){t.setState((function(t){return{good:t.good+1}})),t.countTotalFeedback(),t.countPositiveFeedbackPercentage()},t.onClickNeutral=function(){t.setState((function(t){return{neutral:t.neutral+1}})),t.countTotalFeedback(),t.state.good>=1&&t.countPositiveFeedbackPercentage()},t.onClickBad=function(){t.setState((function(t){return{bad:t.bad+1}})),t.countTotalFeedback(),t.state.good>=1&&t.countPositiveFeedbackPercentage()},t.countTotalFeedback=function(){t.setState((function(t){return{total:t.total+1}}))},t.countPositiveFeedbackPercentage=function(){t.setState((function(t){return{positive:t.good/t.total*100}}))},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)(k,{children:[Object(j.jsx)(m,{onClickLike:this.onClickLike,onClickNeutral:this.onClickNeutral,onClickBad:this.onClickBad}),Object(j.jsx)(N,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.state.total,positive:this.state.positive})]})}}]),a}(c.a.Component);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))},3:function(t,e,a){t.exports={title:"Statistics_title__1o1Qs",list:"Statistics_list__dcc3w",listElement:"Statistics_listElement__1W-6Y"}},8:function(t,e,a){t.exports={section:"Section_section__O2zwl"}}},[[16,1,2]]]);
//# sourceMappingURL=main.13e824bd.chunk.js.map
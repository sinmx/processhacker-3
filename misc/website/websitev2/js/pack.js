function displayFeed(e){if(e.error)feedContainer.innerHTML="Error fetching feeds!";else{for(var t="",n=e.feed.entries,s=0;s<n.length;s++)t+="<div>",t+='<a href=" '+n[s].link+' ">'+n[s].title.replace("/p/processhacker/code/","http://sourceforge.net/p/processhacker/code/")+"</a>",t+='<span class="forumdate"> by <span class="author">'+n[s].author+"</span></span>",t+='<div class="forumdate">'+moment(n[s].publishedDate).fromNow()+" - "+new Date(n[s].publishedDate).toLocaleString()+"</div>",t+="</div>";feedContainer.innerHTML=t}}function rssFeedSetup(){var e=new google.feeds.Feed("http://sourceforge.net/p/processhacker/code/feed");e.setNumEntries(5),e.load(displayFeed)}(function(e){function t(e,t,n){switch(arguments.length){case 2:return null!=e?e:t;case 3:return null!=e?e:null!=t?t:n;default:throw new Error("Implement me")}}function n(e,t){return bt.call(e,t)}function s(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function a(e){Dt.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function i(e,t){var n=!0;return f(function(){return n&&(a(e),n=!1),t.apply(this,arguments)},t)}function r(e,t){pn[e]||(a(t),pn[e]=!0)}function o(e,t){return function(n){return m(e.call(this,n),t)}}function u(e,t){return function(n){return this.localeData().ordinal(e.call(this,n),t)}}function c(){}function l(e,t){t!==!1&&C(e),h(this,e),this._d=new Date(+e._d)}function d(e){var t=k(e),n=t.year||0,s=t.quarter||0,a=t.month||0,i=t.week||0,r=t.day||0,o=t.hour||0,u=t.minute||0,c=t.second||0,l=t.millisecond||0;this._milliseconds=+l+1e3*c+6e4*u+36e5*o,this._days=+r+7*i,this._months=+a+3*s+12*n,this._data={},this._locale=Dt.localeData(),this._bubble()}function f(e,t){for(var s in t)n(t,s)&&(e[s]=t[s]);return n(t,"toString")&&(e.toString=t.toString),n(t,"valueOf")&&(e.valueOf=t.valueOf),e}function h(e,t){var n,s,a;if("undefined"!=typeof t._isAMomentObject&&(e._isAMomentObject=t._isAMomentObject),"undefined"!=typeof t._i&&(e._i=t._i),"undefined"!=typeof t._f&&(e._f=t._f),"undefined"!=typeof t._l&&(e._l=t._l),"undefined"!=typeof t._strict&&(e._strict=t._strict),"undefined"!=typeof t._tzm&&(e._tzm=t._tzm),"undefined"!=typeof t._isUTC&&(e._isUTC=t._isUTC),"undefined"!=typeof t._offset&&(e._offset=t._offset),"undefined"!=typeof t._pf&&(e._pf=t._pf),"undefined"!=typeof t._locale&&(e._locale=t._locale),zt.length>0)for(n in zt)s=zt[n],a=t[s],"undefined"!=typeof a&&(e[s]=a);return e}function _(e){return 0>e?Math.ceil(e):Math.floor(e)}function m(e,t,n){for(var s=""+Math.abs(e),a=e>=0;s.length<t;)s="0"+s;return(a?n?"+":"":"-")+s}function y(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function p(e,t){var n;return t=I(t,e),e.isBefore(t)?n=y(e,t):(n=y(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n}function g(e,t){return function(n,s){var a,i;return null===s||isNaN(+s)||(r(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period)."),i=n,n=s,s=i),n="string"==typeof n?+n:n,a=Dt.duration(n,s),D(this,a,e),this}}function D(e,t,n,s){var a=t._milliseconds,i=t._days,r=t._months;s=null==s?!0:s,a&&e._d.setTime(+e._d+a*n),i&&ht(e,"Date",ft(e,"Date")+i*n),r&&dt(e,ft(e,"Month")+r*n),s&&Dt.updateOffset(e,i||r)}function M(e){return"[object Array]"===Object.prototype.toString.call(e)}function w(e){return"[object Date]"===Object.prototype.toString.call(e)||e instanceof Date}function Y(e,t,n){var s,a=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),r=0;for(s=0;a>s;s++)(n&&e[s]!==t[s]||!n&&S(e[s])!==S(t[s]))&&r++;return r+i}function v(e){if(e){var t=e.toLowerCase().replace(/(.)s$/,"$1");e=ln[e]||dn[t]||t}return e}function k(e){var t,s,a={};for(s in e)n(e,s)&&(t=v(s),t&&(a[t]=e[s]));return a}function b(t){var n,s;if(0===t.indexOf("week"))n=7,s="day";else{if(0!==t.indexOf("month"))return;n=12,s="month"}Dt[t]=function(a,i){var r,o,u=Dt._locale[t],c=[];if("number"==typeof a&&(i=a,a=e),o=function(e){var t=Dt().utc().set(s,e);return u.call(Dt._locale,t,a||"")},null!=i)return o(i);for(r=0;n>r;r++)c.push(o(r));return c}}function S(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=t>=0?Math.floor(t):Math.ceil(t)),n}function T(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function O(e,t,n){return ot(Dt([e,11,31+t-n]),t,n).week}function F(e){return W(e)?366:365}function W(e){return e%4===0&&e%100!==0||e%400===0}function C(e){var t;e._a&&-2===e._pf.overflow&&(t=e._a[Tt]<0||e._a[Tt]>11?Tt:e._a[Ot]<1||e._a[Ot]>T(e._a[St],e._a[Tt])?Ot:e._a[Ft]<0||e._a[Ft]>23?Ft:e._a[Wt]<0||e._a[Wt]>59?Wt:e._a[Ct]<0||e._a[Ct]>59?Ct:e._a[Gt]<0||e._a[Gt]>999?Gt:-1,e._pf._overflowDayOfYear&&(St>t||t>Ot)&&(t=Ot),e._pf.overflow=t)}function G(e){return null==e._isValid&&(e._isValid=!isNaN(e._d.getTime())&&e._pf.overflow<0&&!e._pf.empty&&!e._pf.invalidMonth&&!e._pf.nullInput&&!e._pf.invalidFormat&&!e._pf.userInvalidated,e._strict&&(e._isValid=e._isValid&&0===e._pf.charsLeftOver&&0===e._pf.unusedTokens.length)),e._isValid}function U(e){return e?e.toLowerCase().replace("_","-"):e}function z(e){for(var t,n,s,a,i=0;i<e.length;){for(a=U(e[i]).split("-"),t=a.length,n=U(e[i+1]),n=n?n.split("-"):null;t>0;){if(s=L(a.slice(0,t).join("-")))return s;if(n&&n.length>=t&&Y(a,n,!0)>=t-1)break;t--}i++}return null}function L(e){var t=null;if(!Ut[e]&&Lt)try{t=Dt.locale(),require("./locale/"+e),Dt.locale(t)}catch(n){}return Ut[e]}function I(e,t){return t._isUTC?Dt(e).zone(t._offset||0):Dt(e).local()}function H(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function P(e){var t,n,s=e.match(At);for(t=0,n=s.length;n>t;t++)s[t]=yn[s[t]]?yn[s[t]]:H(s[t]);return function(a){var i="";for(t=0;n>t;t++)i+=s[t]instanceof Function?s[t].call(a,e):s[t];return i}}function A(e,t){return e.isValid()?(t=x(t,e.localeData()),fn[t]||(fn[t]=P(t)),fn[t](e)):e.localeData().invalidDate()}function x(e,t){function n(e){return t.longDateFormat(e)||e}var s=5;for(xt.lastIndex=0;s>=0&&xt.test(e);)e=e.replace(xt,n),xt.lastIndex=0,s-=1;return e}function Z(e,t){var n,s=t._strict;switch(e){case"Q":return Xt;case"DDDD":return Kt;case"YYYY":case"GGGG":case"gggg":return s?en:jt;case"Y":case"G":case"g":return nn;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return s?tn:Nt;case"S":if(s)return Xt;case"SS":if(s)return Rt;case"SSS":if(s)return Kt;case"DDD":return Et;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return qt;case"a":case"A":return t._locale._meridiemParse;case"X":return Qt;case"Z":case"ZZ":return $t;case"T":return Jt;case"SSSS":return Vt;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return s?Rt:Zt;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Zt;case"Do":return Bt;default:return n=new RegExp(B(Q(e.replace("\\","")),"i"))}}function E(e){e=e||"";var t=e.match($t)||[],n=t[t.length-1]||[],s=(n+"").match(un)||["-",0,0],a=+(60*s[1])+S(s[2]);return"+"===s[0]?-a:a}function j(e,t,n){var s,a=n._a;switch(e){case"Q":null!=t&&(a[Tt]=3*(S(t)-1));break;case"M":case"MM":null!=t&&(a[Tt]=S(t)-1);break;case"MMM":case"MMMM":s=n._locale.monthsParse(t),null!=s?a[Tt]=s:n._pf.invalidMonth=t;break;case"D":case"DD":null!=t&&(a[Ot]=S(t));break;case"Do":null!=t&&(a[Ot]=S(parseInt(t,10)));break;case"DDD":case"DDDD":null!=t&&(n._dayOfYear=S(t));break;case"YY":a[St]=Dt.parseTwoDigitYear(t);break;case"YYYY":case"YYYYY":case"YYYYYY":a[St]=S(t);break;case"a":case"A":n._isPm=n._locale.isPM(t);break;case"H":case"HH":case"h":case"hh":a[Ft]=S(t);break;case"m":case"mm":a[Wt]=S(t);break;case"s":case"ss":a[Ct]=S(t);break;case"S":case"SS":case"SSS":case"SSSS":a[Gt]=S(1e3*("0."+t));break;case"X":n._d=new Date(1e3*parseFloat(t));break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=E(t);break;case"dd":case"ddd":case"dddd":s=n._locale.weekdaysParse(t),null!=s?(n._w=n._w||{},n._w.d=s):n._pf.invalidWeekday=t;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":e=e.substr(0,1);case"gggg":case"GGGG":case"GGGGG":e=e.substr(0,2),t&&(n._w=n._w||{},n._w[e]=S(t));break;case"gg":case"GG":n._w=n._w||{},n._w[e]=Dt.parseTwoDigitYear(t)}}function N(e){var n,s,a,i,r,o,u;n=e._w,null!=n.GG||null!=n.W||null!=n.E?(r=1,o=4,s=t(n.GG,e._a[St],ot(Dt(),1,4).year),a=t(n.W,1),i=t(n.E,1)):(r=e._locale._week.dow,o=e._locale._week.doy,s=t(n.gg,e._a[St],ot(Dt(),r,o).year),a=t(n.w,1),null!=n.d?(i=n.d,r>i&&++a):i=null!=n.e?n.e+r:r),u=ut(s,a,i,o,r),e._a[St]=u.year,e._dayOfYear=u.dayOfYear}function V(e){var n,s,a,i,r=[];if(!e._d){for(a=$(e),e._w&&null==e._a[Ot]&&null==e._a[Tt]&&N(e),e._dayOfYear&&(i=t(e._a[St],a[St]),e._dayOfYear>F(i)&&(e._pf._overflowDayOfYear=!0),s=st(i,0,e._dayOfYear),e._a[Tt]=s.getUTCMonth(),e._a[Ot]=s.getUTCDate()),n=0;3>n&&null==e._a[n];++n)e._a[n]=r[n]=a[n];for(;7>n;n++)e._a[n]=r[n]=null==e._a[n]?2===n?1:0:e._a[n];e._d=(e._useUTC?st:nt).apply(null,r),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()+e._tzm)}}function q(e){var t;e._d||(t=k(e._i),e._a=[t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond],V(e))}function $(e){var t=new Date;return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function J(e){if(e._f===Dt.ISO_8601)return void R(e);e._a=[],e._pf.empty=!0;var t,n,s,a,i,r=""+e._i,o=r.length,u=0;for(s=x(e._f,e._locale).match(At)||[],t=0;t<s.length;t++)a=s[t],n=(r.match(Z(a,e))||[])[0],n&&(i=r.substr(0,r.indexOf(n)),i.length>0&&e._pf.unusedInput.push(i),r=r.slice(r.indexOf(n)+n.length),u+=n.length),yn[a]?(n?e._pf.empty=!1:e._pf.unusedTokens.push(a),j(a,n,e)):e._strict&&!n&&e._pf.unusedTokens.push(a);e._pf.charsLeftOver=o-u,r.length>0&&e._pf.unusedInput.push(r),e._isPm&&e._a[Ft]<12&&(e._a[Ft]+=12),e._isPm===!1&&12===e._a[Ft]&&(e._a[Ft]=0),V(e),C(e)}function Q(e){return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,a){return t||n||s||a})}function B(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function X(e){var t,n,a,i,r;if(0===e._f.length)return e._pf.invalidFormat=!0,void(e._d=new Date(0/0));for(i=0;i<e._f.length;i++)r=0,t=h({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._pf=s(),t._f=e._f[i],J(t),G(t)&&(r+=t._pf.charsLeftOver,r+=10*t._pf.unusedTokens.length,t._pf.score=r,(null==a||a>r)&&(a=r,n=t));f(e,n||t)}function R(e){var t,n,s=e._i,a=sn.exec(s);if(a){for(e._pf.iso=!0,t=0,n=rn.length;n>t;t++)if(rn[t][1].exec(s)){e._f=rn[t][0]+(a[6]||" ");break}for(t=0,n=on.length;n>t;t++)if(on[t][1].exec(s)){e._f+=on[t][0];break}s.match($t)&&(e._f+="Z"),J(e)}else e._isValid=!1}function K(e){R(e),e._isValid===!1&&(delete e._isValid,Dt.createFromInputFallback(e))}function et(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function tt(t){var n,s=t._i;s===e?t._d=new Date:w(s)?t._d=new Date(+s):null!==(n=It.exec(s))?t._d=new Date(+n[1]):"string"==typeof s?K(t):M(s)?(t._a=et(s.slice(0),function(e){return parseInt(e,10)}),V(t)):"object"==typeof s?q(t):"number"==typeof s?t._d=new Date(s):Dt.createFromInputFallback(t)}function nt(e,t,n,s,a,i,r){var o=new Date(e,t,n,s,a,i,r);return 1970>e&&o.setFullYear(e),o}function st(e){var t=new Date(Date.UTC.apply(null,arguments));return 1970>e&&t.setUTCFullYear(e),t}function at(e,t){if("string"==typeof e)if(isNaN(e)){if(e=t.weekdaysParse(e),"number"!=typeof e)return null}else e=parseInt(e,10);return e}function it(e,t,n,s,a){return a.relativeTime(t||1,!!n,e,s)}function rt(e,t,n){var s=Dt.duration(e).abs(),a=kt(s.as("s")),i=kt(s.as("m")),r=kt(s.as("h")),o=kt(s.as("d")),u=kt(s.as("M")),c=kt(s.as("y")),l=a<hn.s&&["s",a]||1===i&&["m"]||i<hn.m&&["mm",i]||1===r&&["h"]||r<hn.h&&["hh",r]||1===o&&["d"]||o<hn.d&&["dd",o]||1===u&&["M"]||u<hn.M&&["MM",u]||1===c&&["y"]||["yy",c];return l[2]=t,l[3]=+e>0,l[4]=n,it.apply({},l)}function ot(e,t,n){var s,a=n-t,i=n-e.day();return i>a&&(i-=7),a-7>i&&(i+=7),s=Dt(e).add(i,"d"),{week:Math.ceil(s.dayOfYear()/7),year:s.year()}}function ut(e,t,n,s,a){var i,r,o=st(e,0,1).getUTCDay();return o=0===o?7:o,n=null!=n?n:a,i=a-o+(o>s?7:0)-(a>o?7:0),r=7*(t-1)+(n-a)+i+1,{year:r>0?e:e-1,dayOfYear:r>0?r:F(e-1)+r}}function ct(t){var n=t._i,s=t._f;return t._locale=t._locale||Dt.localeData(t._l),null===n||s===e&&""===n?Dt.invalid({nullInput:!0}):("string"==typeof n&&(t._i=n=t._locale.preparse(n)),Dt.isMoment(n)?new l(n,!0):(s?M(s)?X(t):J(t):tt(t),new l(t)))}function lt(e,t){var n,s;if(1===t.length&&M(t[0])&&(t=t[0]),!t.length)return Dt();for(n=t[0],s=1;s<t.length;++s)t[s][e](n)&&(n=t[s]);return n}function dt(e,t){var n;return"string"==typeof t&&(t=e.localeData().monthsParse(t),"number"!=typeof t)?e:(n=Math.min(e.date(),T(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e)}function ft(e,t){return e._d["get"+(e._isUTC?"UTC":"")+t]()}function ht(e,t,n){return"Month"===t?dt(e,n):e._d["set"+(e._isUTC?"UTC":"")+t](n)}function _t(e,t){return function(n){return null!=n?(ht(this,e,n),Dt.updateOffset(this,t),this):ft(this,e)}}function mt(e){return 400*e/146097}function yt(e){return 146097*e/400}function pt(e){Dt.duration.fn[e]=function(){return this._data[e]}}function gt(e){"undefined"==typeof ender&&(Mt=vt.moment,vt.moment=e?i("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",Dt):Dt)}for(var Dt,Mt,wt,Yt="2.8.3",vt="undefined"!=typeof global?global:this,kt=Math.round,bt=Object.prototype.hasOwnProperty,St=0,Tt=1,Ot=2,Ft=3,Wt=4,Ct=5,Gt=6,Ut={},zt=[],Lt="undefined"!=typeof module&&module.exports,It=/^\/?Date\((\-?\d+)/i,Ht=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Pt=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,At=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,xt=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Zt=/\d\d?/,Et=/\d{1,3}/,jt=/\d{1,4}/,Nt=/[+\-]?\d{1,6}/,Vt=/\d+/,qt=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,$t=/Z|[\+\-]\d\d:?\d\d/gi,Jt=/T/i,Qt=/[\+\-]?\d+(\.\d{1,3})?/,Bt=/\d{1,2}/,Xt=/\d/,Rt=/\d\d/,Kt=/\d{3}/,en=/\d{4}/,tn=/[+-]?\d{6}/,nn=/[+-]?\d+/,sn=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,an="YYYY-MM-DDTHH:mm:ssZ",rn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],on=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],un=/([\+\-]|\d\d)/gi,cn=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),ln={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},dn={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},fn={},hn={s:45,m:45,h:22,d:26,M:11},_n="DDD w W M D d".split(" "),mn="M D H h m s w W".split(" "),yn={M:function(){return this.month()+1},MMM:function(e){return this.localeData().monthsShort(this,e)},MMMM:function(e){return this.localeData().months(this,e)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(e){return this.localeData().weekdaysMin(this,e)},ddd:function(e){return this.localeData().weekdaysShort(this,e)},dddd:function(e){return this.localeData().weekdays(this,e)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return m(this.year()%100,2)},YYYY:function(){return m(this.year(),4)},YYYYY:function(){return m(this.year(),5)},YYYYYY:function(){var e=this.year(),t=e>=0?"+":"-";return t+m(Math.abs(e),6)},gg:function(){return m(this.weekYear()%100,2)},gggg:function(){return m(this.weekYear(),4)},ggggg:function(){return m(this.weekYear(),5)},GG:function(){return m(this.isoWeekYear()%100,2)},GGGG:function(){return m(this.isoWeekYear(),4)},GGGGG:function(){return m(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return S(this.milliseconds()/100)},SS:function(){return m(S(this.milliseconds()/10),2)},SSS:function(){return m(this.milliseconds(),3)},SSSS:function(){return m(this.milliseconds(),3)},Z:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+m(S(e/60),2)+":"+m(S(e)%60,2)},ZZ:function(){var e=-this.zone(),t="+";return 0>e&&(e=-e,t="-"),t+m(S(e/60),2)+m(S(e)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},pn={},gn=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];_n.length;)wt=_n.pop(),yn[wt+"o"]=u(yn[wt],wt);for(;mn.length;)wt=mn.pop(),yn[wt+wt]=o(yn[wt],2);yn.DDDD=o(yn.DDD,3),f(c.prototype,{set:function(e){var t,n;for(n in e)t=e[n],"function"==typeof t?this[n]=t:this["_"+n]=t},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(e){return this._months[e.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(e){return this._monthsShort[e.month()]},monthsParse:function(e){var t,n,s;for(this._monthsParse||(this._monthsParse=[]),t=0;12>t;t++)if(this._monthsParse[t]||(n=Dt.utc([2e3,t]),s="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[t]=new RegExp(s.replace(".",""),"i")),this._monthsParse[t].test(e))return t},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(e){return this._weekdays[e.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(e){return this._weekdaysShort[e.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(e){return this._weekdaysMin[e.day()]},weekdaysParse:function(e){var t,n,s;for(this._weekdaysParse||(this._weekdaysParse=[]),t=0;7>t;t++)if(this._weekdaysParse[t]||(n=Dt([2e3,1]).day(t),s="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[t]=new RegExp(s.replace(".",""),"i")),this._weekdaysParse[t].test(e))return t},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(e){var t=this._longDateFormat[e];return!t&&this._longDateFormat[e.toUpperCase()]&&(t=this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e]=t),t},isPM:function(e){return"p"===(e+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(e,t){var n=this._calendar[e];return"function"==typeof n?n.apply(t):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(e,t,n,s){var a=this._relativeTime[n];return"function"==typeof a?a(e,t,n,s):a.replace(/%d/i,e)},pastFuture:function(e,t){var n=this._relativeTime[e>0?"future":"past"];return"function"==typeof n?n(t):n.replace(/%s/i,t)},ordinal:function(e){return this._ordinal.replace("%d",e)},_ordinal:"%d",preparse:function(e){return e},postformat:function(e){return e},week:function(e){return ot(e,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),Dt=function(t,n,a,i){var r;return"boolean"==typeof a&&(i=a,a=e),r={},r._isAMomentObject=!0,r._i=t,r._f=n,r._l=a,r._strict=i,r._isUTC=!1,r._pf=s(),ct(r)},Dt.suppressDeprecationWarnings=!1,Dt.createFromInputFallback=i("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(e){e._d=new Date(e._i)}),Dt.min=function(){var e=[].slice.call(arguments,0);return lt("isBefore",e)},Dt.max=function(){var e=[].slice.call(arguments,0);return lt("isAfter",e)},Dt.utc=function(t,n,a,i){var r;return"boolean"==typeof a&&(i=a,a=e),r={},r._isAMomentObject=!0,r._useUTC=!0,r._isUTC=!0,r._l=a,r._i=t,r._f=n,r._strict=i,r._pf=s(),ct(r).utc()},Dt.unix=function(e){return Dt(1e3*e)},Dt.duration=function(e,t){var s,a,i,r,o=e,u=null;return Dt.isDuration(e)?o={ms:e._milliseconds,d:e._days,M:e._months}:"number"==typeof e?(o={},t?o[t]=e:o.milliseconds=e):(u=Ht.exec(e))?(s="-"===u[1]?-1:1,o={y:0,d:S(u[Ot])*s,h:S(u[Ft])*s,m:S(u[Wt])*s,s:S(u[Ct])*s,ms:S(u[Gt])*s}):(u=Pt.exec(e))?(s="-"===u[1]?-1:1,i=function(e){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*s},o={y:i(u[2]),M:i(u[3]),d:i(u[4]),h:i(u[5]),m:i(u[6]),s:i(u[7]),w:i(u[8])}):"object"==typeof o&&("from"in o||"to"in o)&&(r=p(Dt(o.from),Dt(o.to)),o={},o.ms=r.milliseconds,o.M=r.months),a=new d(o),Dt.isDuration(e)&&n(e,"_locale")&&(a._locale=e._locale),a},Dt.version=Yt,Dt.defaultFormat=an,Dt.ISO_8601=function(){},Dt.momentProperties=zt,Dt.updateOffset=function(){},Dt.relativeTimeThreshold=function(t,n){return hn[t]===e?!1:n===e?hn[t]:(hn[t]=n,!0)},Dt.lang=i("moment.lang is deprecated. Use moment.locale instead.",function(e,t){return Dt.locale(e,t)}),Dt.locale=function(e,t){var n;return e&&(n="undefined"!=typeof t?Dt.defineLocale(e,t):Dt.localeData(e),n&&(Dt.duration._locale=Dt._locale=n)),Dt._locale._abbr},Dt.defineLocale=function(e,t){return null!==t?(t.abbr=e,Ut[e]||(Ut[e]=new c),Ut[e].set(t),Dt.locale(e),Ut[e]):(delete Ut[e],null)},Dt.langData=i("moment.langData is deprecated. Use moment.localeData instead.",function(e){return Dt.localeData(e)}),Dt.localeData=function(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Dt._locale;if(!M(e)){if(t=L(e))return t;e=[e]}return z(e)},Dt.isMoment=function(e){return e instanceof l||null!=e&&n(e,"_isAMomentObject")},Dt.isDuration=function(e){return e instanceof d};for(wt=gn.length-1;wt>=0;--wt)b(gn[wt]);Dt.normalizeUnits=function(e){return v(e)},Dt.invalid=function(e){var t=Dt.utc(0/0);return null!=e?f(t._pf,e):t._pf.userInvalidated=!0,t},Dt.parseZone=function(){return Dt.apply(null,arguments).parseZone()},Dt.parseTwoDigitYear=function(e){return S(e)+(S(e)>68?1900:2e3)},f(Dt.fn=l.prototype,{clone:function(){return Dt(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var e=Dt(this).utc();return 0<e.year()&&e.year()<=9999?A(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):A(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var e=this;return[e.year(),e.month(),e.date(),e.hours(),e.minutes(),e.seconds(),e.milliseconds()]},isValid:function(){return G(this)},isDSTShifted:function(){return this._a?this.isValid()&&Y(this._a,(this._isUTC?Dt.utc(this._a):Dt(this._a)).toArray())>0:!1},parsingFlags:function(){return f({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(e){return this.zone(0,e)},local:function(e){return this._isUTC&&(this.zone(0,e),this._isUTC=!1,e&&this.add(this._dateTzOffset(),"m")),this},format:function(e){var t=A(this,e||Dt.defaultFormat);return this.localeData().postformat(t)},add:g(1,"add"),subtract:g(-1,"subtract"),diff:function(e,t,n){var s,a,i,r=I(e,this),o=6e4*(this.zone()-r.zone());return t=v(t),"year"===t||"month"===t?(s=432e5*(this.daysInMonth()+r.daysInMonth()),a=12*(this.year()-r.year())+(this.month()-r.month()),i=this-Dt(this).startOf("month")-(r-Dt(r).startOf("month")),i-=6e4*(this.zone()-Dt(this).startOf("month").zone()-(r.zone()-Dt(r).startOf("month").zone())),a+=i/s,"year"===t&&(a/=12)):(s=this-r,a="second"===t?s/1e3:"minute"===t?s/6e4:"hour"===t?s/36e5:"day"===t?(s-o)/864e5:"week"===t?(s-o)/6048e5:s),n?a:_(a)},from:function(e,t){return Dt.duration({to:this,from:e}).locale(this.locale()).humanize(!t)},fromNow:function(e){return this.from(Dt(),e)},calendar:function(e){var t=e||Dt(),n=I(t,this).startOf("day"),s=this.diff(n,"days",!0),a=-6>s?"sameElse":-1>s?"lastWeek":0>s?"lastDay":1>s?"sameDay":2>s?"nextDay":7>s?"nextWeek":"sameElse";return this.format(this.localeData().calendar(a,this))},isLeapYear:function(){return W(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=at(e,this.localeData()),this.add(e-t,"d")):t},month:_t("Month",!0),startOf:function(e){switch(e=v(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e?this.weekday(0):"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(e){return e=v(e),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms")},isAfter:function(e,t){return t=v("undefined"!=typeof t?t:"millisecond"),"millisecond"===t?(e=Dt.isMoment(e)?e:Dt(e),+this>+e):+this.clone().startOf(t)>+Dt(e).startOf(t)},isBefore:function(e,t){return t=v("undefined"!=typeof t?t:"millisecond"),"millisecond"===t?(e=Dt.isMoment(e)?e:Dt(e),+e>+this):+this.clone().startOf(t)<+Dt(e).startOf(t)},isSame:function(e,t){return t=v(t||"millisecond"),"millisecond"===t?(e=Dt.isMoment(e)?e:Dt(e),+this===+e):+this.clone().startOf(t)===+I(e,this).startOf(t)},min:i("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(e){return e=Dt.apply(null,arguments),this>e?this:e}),max:i("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(e){return e=Dt.apply(null,arguments),e>this?this:e}),zone:function(e,t){var n,s=this._offset||0;return null==e?this._isUTC?s:this._dateTzOffset():("string"==typeof e&&(e=E(e)),Math.abs(e)<16&&(e=60*e),!this._isUTC&&t&&(n=this._dateTzOffset()),this._offset=e,this._isUTC=!0,null!=n&&this.subtract(n,"m"),s!==e&&(!t||this._changeInProgress?D(this,Dt.duration(s-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,Dt.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(e){return e=e?Dt(e).zone():0,(this.zone()-e)%60===0},daysInMonth:function(){return T(this.year(),this.month())},dayOfYear:function(e){var t=kt((Dt(this).startOf("day")-Dt(this).startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},quarter:function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},weekYear:function(e){var t=ot(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==e?t:this.add(e-t,"y")},isoWeekYear:function(e){var t=ot(this,1,4).year;return null==e?t:this.add(e-t,"y")},week:function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},isoWeek:function(e){var t=ot(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},weekday:function(e){var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},isoWeekday:function(e){return null==e?this.day()||7:this.day(this.day()%7?e:e-7)},isoWeeksInYear:function(){return O(this.year(),1,4)},weeksInYear:function(){var e=this.localeData()._week;return O(this.year(),e.dow,e.doy)},get:function(e){return e=v(e),this[e]()},set:function(e,t){return e=v(e),"function"==typeof this[e]&&this[e](t),this},locale:function(t){var n;return t===e?this._locale._abbr:(n=Dt.localeData(t),null!=n&&(this._locale=n),this)},lang:i("moment().lang() is deprecated. Use moment().localeData() instead.",function(t){return t===e?this.localeData():this.locale(t)}),localeData:function(){return this._locale},_dateTzOffset:function(){return 15*Math.round(this._d.getTimezoneOffset()/15)}}),Dt.fn.millisecond=Dt.fn.milliseconds=_t("Milliseconds",!1),Dt.fn.second=Dt.fn.seconds=_t("Seconds",!1),Dt.fn.minute=Dt.fn.minutes=_t("Minutes",!1),Dt.fn.hour=Dt.fn.hours=_t("Hours",!0),Dt.fn.date=_t("Date",!0),Dt.fn.dates=i("dates accessor is deprecated. Use date instead.",_t("Date",!0)),Dt.fn.year=_t("FullYear",!0),Dt.fn.years=i("years accessor is deprecated. Use year instead.",_t("FullYear",!0)),Dt.fn.days=Dt.fn.day,Dt.fn.months=Dt.fn.month,Dt.fn.weeks=Dt.fn.week,Dt.fn.isoWeeks=Dt.fn.isoWeek,Dt.fn.quarters=Dt.fn.quarter,Dt.fn.toJSON=Dt.fn.toISOString,f(Dt.duration.fn=d.prototype,{_bubble:function(){var e,t,n,s=this._milliseconds,a=this._days,i=this._months,r=this._data,o=0;r.milliseconds=s%1e3,e=_(s/1e3),r.seconds=e%60,t=_(e/60),r.minutes=t%60,n=_(t/60),r.hours=n%24,a+=_(n/24),o=_(mt(a)),a-=_(yt(o)),i+=_(a/30),a%=30,o+=_(i/12),i%=12,r.days=a,r.months=i,r.years=o},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return _(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*S(this._months/12)},humanize:function(e){var t=rt(this,!e,this.localeData());return e&&(t=this.localeData().pastFuture(+this,t)),this.localeData().postformat(t)},add:function(e,t){var n=Dt.duration(e,t);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(e,t){var n=Dt.duration(e,t);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(e){return e=v(e),this[e.toLowerCase()+"s"]()},as:function(e){var t,n;if(e=v(e),"month"===e||"year"===e)return t=this._days+this._milliseconds/864e5,n=this._months+12*mt(t),"month"===e?n:n/12;switch(t=this._days+yt(this._months/12),e){case"week":return t/7+this._milliseconds/6048e5;case"day":return t+this._milliseconds/864e5;case"hour":return 24*t+this._milliseconds/36e5;case"minute":return 24*t*60+this._milliseconds/6e4;case"second":return 24*t*60*60+this._milliseconds/1e3;case"millisecond":return Math.floor(24*t*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+e)}},lang:Dt.fn.lang,locale:Dt.fn.locale,toIsoString:i("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var e=Math.abs(this.years()),t=Math.abs(this.months()),n=Math.abs(this.days()),s=Math.abs(this.hours()),a=Math.abs(this.minutes()),i=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(e?e+"Y":"")+(t?t+"M":"")+(n?n+"D":"")+(s||a||i?"T":"")+(s?s+"H":"")+(a?a+"M":"")+(i?i+"S":""):"P0D"},localeData:function(){return this._locale
}}),Dt.duration.fn.toString=Dt.duration.fn.toISOString;for(wt in cn)n(cn,wt)&&pt(wt.toLowerCase());Dt.duration.fn.asMilliseconds=function(){return this.as("ms")},Dt.duration.fn.asSeconds=function(){return this.as("s")},Dt.duration.fn.asMinutes=function(){return this.as("m")},Dt.duration.fn.asHours=function(){return this.as("h")},Dt.duration.fn.asDays=function(){return this.as("d")},Dt.duration.fn.asWeeks=function(){return this.as("weeks")},Dt.duration.fn.asMonths=function(){return this.as("M")},Dt.duration.fn.asYears=function(){return this.as("y")},Dt.locale("en",{ordinal:function(e){var t=e%10,n=1===S(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),Lt?module.exports=Dt:"function"==typeof define&&define.amd?(define("moment",function(e,t,n){return n.config&&n.config()&&n.config().noGlobal===!0&&(vt.moment=Mt),Dt}),gt(!0)):gt()}).call(this);var feedContainer=document.getElementById("feeddiv");feedContainer.innerHTML="<div>Loading commit history...</div>",window.onload=function(){rssFeedSetup()};
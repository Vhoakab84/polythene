"use strict";Object.defineProperty(exports,"__esModule",{value:true});var listeners={};var throttle=function throttle(func){var s=arguments.length<=1||arguments[1]===undefined?.05:arguments[1];var context=arguments.length<=2||arguments[2]===undefined?window:arguments[2];var wait=false;return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}var later=function later(){func.apply(context,args)};if(!wait){later();wait=true;setTimeout(function(){wait=false},s)}}};var subscribe=function subscribe(eventName,listener,delay){listeners[eventName]=listeners[eventName]||[];listeners[eventName].push(delay?throttle(listener,delay):listener)};var unsubscribe=function unsubscribe(eventName,listener){if(!listeners[eventName]){return}var index=listeners[eventName].indexOf(listener);if(index>-1){listeners[eventName].splice(index,1)}};var emit=function emit(eventName,event){if(!listeners[eventName]){return}listeners[eventName].forEach(function(listener){listener(event)})};exports.default={throttle:throttle,subscribe:subscribe,unsubscribe:unsubscribe,emit:emit};module.exports=exports["default"];
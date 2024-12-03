/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsxs as v,Fragment as V,jsx as i}from"@dropins/tools/preact-jsx-runtime.js";import*as a from"@dropins/tools/preact-compat.js";import{useState as g,useEffect as W}from"@dropins/tools/preact-compat.js";import{classes as w}from"@dropins/tools/lib.js";import{Skeleton as q,SkeletonRow as x,Icon as X}from"@dropins/tools/components.js";import{useState as D,useEffect as F}from"@dropins/tools/preact-hooks.js";const H=e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"37px",height:"24px",viewBox:"0 0 37 24",...e},a.createElement("g",{id:"surface1"},a.createElement("rect",{x:0,y:0,width:37,height:24,style:{fill:"rgb(14.509805%,34.117648%,83.92157%)",fillOpacity:1,stroke:"none"}}),a.createElement("path",{style:{stroke:"none",fillRule:"nonzero",fill:"rgb(100%,100%,100%)",fillOpacity:1},d:"M 0.0117188 11.3125 L 1.789062 11.3125 L 2.1875 10.375 L 3.085938 10.375 L 3.484375 11.3125 L 6.980469 11.3125 L 6.980469 10.597656 L 7.289062 11.316406 L 9.105469 11.316406 L 9.417969 10.585938 L 9.417969 11.3125 L 18.101562 11.3125 L 18.097656 9.777344 L 18.265625 9.777344 C 18.382812 9.78125 18.417969 9.789062 18.417969 9.980469 L 18.417969 11.3125 L 22.910156 11.3125 L 22.910156 10.957031 C 23.269531 11.144531 23.835938 11.3125 24.578125 11.3125 L 26.464844 11.3125 L 26.871094 10.375 L 27.765625 10.375 L 28.164062 11.3125 L 31.804688 11.3125 L 31.804688 10.421875 L 32.355469 11.3125 L 35.273438 11.3125 L 35.273438 5.433594 L 32.386719 5.433594 L 32.386719 6.128906 L 31.980469 5.433594 L 29.019531 5.433594 L 29.019531 6.128906 L 28.648438 5.433594 L 24.644531 5.433594 C 23.972656 5.433594 23.386719 5.523438 22.910156 5.777344 L 22.910156 5.433594 L 20.148438 5.433594 L 20.148438 5.777344 C 19.84375 5.515625 19.433594 5.433594 18.972656 5.433594 L 8.882812 5.433594 L 8.203125 6.953125 L 7.507812 5.433594 L 4.332031 5.433594 L 4.332031 6.128906 L 3.980469 5.433594 L 1.269531 5.433594 L 0.0117188 8.226562 Z M 11.222656 10.464844 L 10.15625 10.464844 L 10.152344 7.164062 L 8.644531 10.464844 L 7.734375 10.464844 L 6.222656 7.160156 L 6.222656 10.464844 L 4.109375 10.464844 L 3.707031 9.523438 L 1.542969 9.523438 L 1.140625 10.464844 L 0.0117188 10.464844 L 1.875 6.25 L 3.417969 6.25 L 5.1875 10.242188 L 5.1875 6.25 L 6.882812 6.25 L 8.242188 9.109375 L 9.492188 6.25 L 11.222656 6.25 Z M 3.351562 8.648438 L 2.640625 6.96875 L 1.933594 8.648438 Z M 15.464844 10.464844 L 11.992188 10.464844 L 11.992188 6.25 L 15.464844 6.25 L 15.464844 7.125 L 13.03125 7.125 L 13.03125 7.886719 L 15.40625 7.886719 L 15.40625 8.75 L 13.03125 8.75 L 13.03125 9.59375 L 15.464844 9.59375 Z M 20.355469 7.382812 C 20.355469 8.054688 19.894531 8.402344 19.625 8.507812 C 19.851562 8.59375 20.046875 8.738281 20.140625 8.863281 C 20.285156 9.074219 20.3125 9.261719 20.3125 9.636719 L 20.3125 10.464844 L 19.261719 10.464844 L 19.257812 9.933594 C 19.257812 9.679688 19.285156 9.316406 19.09375 9.113281 C 18.941406 8.964844 18.710938 8.929688 18.335938 8.929688 L 17.222656 8.929688 L 17.222656 10.464844 L 16.183594 10.464844 L 16.183594 6.25 L 18.574219 6.25 C 19.105469 6.25 19.496094 6.261719 19.832031 6.449219 C 20.160156 6.640625 20.355469 6.914062 20.355469 7.382812 Z M 19.042969 8.011719 C 18.902344 8.09375 18.730469 8.097656 18.527344 8.097656 L 17.265625 8.097656 L 17.265625 7.160156 L 18.546875 7.160156 C 18.726562 7.160156 18.917969 7.167969 19.039062 7.238281 C 19.175781 7.296875 19.257812 7.429688 19.257812 7.609375 C 19.257812 7.792969 19.179688 7.941406 19.042969 8.011719 Z M 22.023438 10.464844 L 20.964844 10.464844 L 20.964844 6.25 L 22.023438 6.25 Z M 34.335938 10.464844 L 32.863281 10.464844 L 30.894531 7.300781 L 30.894531 10.464844 L 28.777344 10.464844 L 28.371094 9.523438 L 26.210938 9.523438 L 25.820312 10.464844 L 24.605469 10.464844 C 24.097656 10.464844 23.457031 10.355469 23.097656 10 C 22.730469 9.640625 22.542969 9.15625 22.542969 8.390625 C 22.542969 7.761719 22.65625 7.191406 23.101562 6.742188 C 23.4375 6.402344 23.964844 6.25 24.679688 6.25 L 25.6875 6.25 L 25.6875 7.152344 L 24.703125 7.152344 C 24.320312 7.152344 24.109375 7.207031 23.902344 7.402344 C 23.722656 7.578125 23.601562 7.914062 23.601562 8.355469 C 23.601562 8.808594 23.695312 9.132812 23.886719 9.347656 C 24.046875 9.515625 24.339844 9.566406 24.613281 9.566406 L 25.078125 9.566406 L 26.542969 6.25 L 28.101562 6.25 L 29.863281 10.238281 L 29.863281 6.25 L 31.445312 6.25 L 33.273438 9.183594 L 33.273438 6.25 L 34.335938 6.25 Z M 28.019531 8.648438 L 27.300781 6.96875 L 26.582031 8.648438 Z M 36.984375 17.199219 C 36.734375 17.554688 36.242188 17.738281 35.574219 17.738281 L 33.566406 17.738281 L 33.566406 16.832031 L 35.566406 16.832031 C 35.765625 16.832031 35.902344 16.808594 35.988281 16.726562 C 36.066406 16.65625 36.109375 16.558594 36.109375 16.453125 C 36.109375 16.332031 36.058594 16.234375 35.984375 16.175781 C 35.90625 16.109375 35.796875 16.082031 35.617188 16.082031 C 34.640625 16.046875 33.421875 16.109375 33.421875 14.773438 C 33.421875 14.164062 33.824219 13.519531 34.914062 13.519531 L 36.984375 13.519531 L 36.984375 12.679688 L 35.0625 12.679688 C 34.480469 12.679688 34.058594 12.816406 33.761719 13.023438 L 33.761719 12.679688 L 30.914062 12.679688 C 30.460938 12.679688 29.925781 12.789062 29.671875 13.023438 L 29.671875 12.679688 L 24.59375 12.679688 L 24.59375 13.023438 C 24.1875 12.742188 23.503906 12.679688 23.191406 12.679688 L 19.839844 12.679688 L 19.839844 13.023438 C 19.519531 12.726562 18.808594 12.679688 18.375 12.679688 L 14.621094 12.679688 L 13.765625 13.582031 L 12.960938 12.679688 L 7.355469 12.679688 L 7.355469 18.566406 L 12.855469 18.566406 L 13.738281 17.648438 L 14.570312 18.566406 L 17.960938 18.566406 L 17.960938 17.183594 L 18.292969 17.183594 C 18.742188 17.191406 19.273438 17.171875 19.742188 16.976562 L 19.742188 18.566406 L 22.539062 18.566406 L 22.539062 17.03125 L 22.671875 17.03125 C 22.84375 17.03125 22.859375 17.039062 22.859375 17.203125 L 22.859375 18.566406 L 31.351562 18.566406 C 31.890625 18.566406 32.457031 18.429688 32.765625 18.1875 L 32.765625 18.566406 L 35.460938 18.566406 C 36.019531 18.566406 36.570312 18.488281 36.984375 18.292969 L 36.984375 17.195312 Z M 20.148438 14.933594 C 20.148438 16.105469 19.246094 16.347656 18.339844 16.347656 L 17.042969 16.347656 L 17.042969 17.761719 L 15.019531 17.761719 L 13.742188 16.367188 L 12.410156 17.761719 L 8.292969 17.761719 L 8.292969 13.542969 L 12.472656 13.542969 L 13.753906 14.925781 L 15.074219 13.542969 L 18.398438 13.542969 C 19.222656 13.542969 20.148438 13.765625 20.148438 14.933594 Z M 11.882812 16.875 L 9.328125 16.875 L 9.328125 16.035156 L 11.609375 16.035156 L 11.609375 15.175781 L 9.328125 15.175781 L 9.328125 14.410156 L 11.933594 14.410156 L 13.070312 15.636719 Z M 16.003906 17.359375 L 14.40625 15.640625 L 16.003906 13.976562 Z M 18.363281 15.484375 L 17.019531 15.484375 L 17.019531 14.410156 L 18.375 14.410156 C 18.75 14.410156 19.011719 14.558594 19.011719 14.925781 C 19.011719 15.289062 18.761719 15.484375 18.363281 15.484375 Z M 25.398438 13.542969 L 28.871094 13.542969 L 28.871094 14.417969 L 26.433594 14.417969 L 26.433594 15.183594 L 28.808594 15.183594 L 28.808594 16.042969 L 26.433594 16.042969 L 26.433594 16.882812 L 28.871094 16.886719 L 28.871094 17.761719 L 25.398438 17.761719 Z M 24.066406 15.800781 C 24.296875 15.882812 24.488281 16.03125 24.574219 16.15625 C 24.722656 16.363281 24.742188 16.554688 24.746094 16.925781 L 24.746094 17.761719 L 23.703125 17.761719 L 23.703125 17.234375 C 23.703125 16.980469 23.730469 16.605469 23.535156 16.410156 C 23.382812 16.257812 23.152344 16.222656 22.773438 16.222656 L 21.664062 16.222656 L 21.664062 17.761719 L 20.617188 17.761719 L 20.617188 13.542969 L 23.019531 13.542969 C 23.542969 13.542969 23.925781 13.566406 24.269531 13.742188 C 24.597656 13.9375 24.804688 14.199219 24.804688 14.679688 C 24.804688 15.351562 24.339844 15.695312 24.066406 15.800781 Z M 23.480469 15.269531 C 23.339844 15.347656 23.167969 15.355469 22.964844 15.355469 L 21.703125 15.355469 L 21.703125 14.410156 L 22.984375 14.410156 C 23.167969 14.410156 23.351562 14.414062 23.480469 14.484375 C 23.613281 14.554688 23.695312 14.683594 23.695312 14.863281 C 23.695312 15.042969 23.613281 15.191406 23.480469 15.269531 Z M 32.863281 15.539062 C 33.066406 15.742188 33.171875 15.996094 33.171875 16.429688 C 33.171875 17.339844 32.589844 17.761719 31.539062 17.761719 L 29.515625 17.761719 L 29.515625 16.855469 L 31.53125 16.855469 C 31.730469 16.855469 31.871094 16.832031 31.957031 16.753906 C 32.027344 16.6875 32.078125 16.59375 32.078125 16.476562 C 32.078125 16.355469 32.023438 16.257812 31.953125 16.199219 C 31.875 16.132812 31.765625 16.105469 31.582031 16.105469 C 30.609375 16.074219 29.394531 16.132812 29.394531 14.800781 C 29.394531 14.1875 29.789062 13.542969 30.878906 13.542969 L 32.964844 13.542969 L 32.964844 14.441406 L 31.058594 14.441406 C 30.867188 14.441406 30.746094 14.449219 30.640625 14.519531 C 30.527344 14.585938 30.484375 14.6875 30.484375 14.820312 C 30.484375 14.980469 30.582031 15.089844 30.710938 15.136719 C 30.820312 15.171875 30.9375 15.183594 31.117188 15.183594 L 31.675781 15.199219 C 32.238281 15.210938 32.628906 15.304688 32.863281 15.539062 Z M 36.988281 14.410156 L 35.09375 14.410156 C 34.902344 14.410156 34.777344 14.414062 34.671875 14.484375 C 34.5625 14.554688 34.519531 14.65625 34.519531 14.789062 C 34.519531 14.945312 34.613281 15.054688 34.746094 15.101562 C 34.855469 15.140625 34.976562 15.148438 35.148438 15.148438 L 35.710938 15.164062 C 36.28125 15.179688 36.660156 15.273438 36.890625 15.503906 C 36.933594 15.535156 36.957031 15.574219 36.988281 15.609375 Z M 36.988281 14.410156 "}))),I=e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"37px",height:"24px",viewBox:"0 0 37 24",...e},a.createElement("g",{id:"surface1"},a.createElement("rect",{x:0,y:0,width:37,height:24,style:{fill:"rgb(14.509805%,21.568628%,27.843139%)",fillOpacity:1,stroke:"none"}}),a.createElement("path",{style:{stroke:"none",fillRule:"nonzero",fill:"rgb(100%,100%,100%)",fillOpacity:1},d:"M 10.011719 22.417969 L 10.011719 21.027344 C 10.011719 20.496094 9.691406 20.148438 9.144531 20.148438 C 8.867188 20.148438 8.570312 20.242188 8.363281 20.542969 C 8.203125 20.289062 7.976562 20.148438 7.632812 20.148438 C 7.402344 20.148438 7.171875 20.21875 6.992188 20.472656 L 6.992188 20.195312 L 6.511719 20.195312 L 6.511719 22.417969 L 6.992188 22.417969 L 6.992188 21.191406 C 6.992188 20.796875 7.195312 20.609375 7.515625 20.609375 C 7.835938 20.609375 7.996094 20.820312 7.996094 21.191406 L 7.996094 22.417969 L 8.476562 22.417969 L 8.476562 21.191406 C 8.476562 20.796875 8.707031 20.609375 9 20.609375 C 9.320312 20.609375 9.480469 20.820312 9.480469 21.191406 L 9.480469 22.417969 Z M 17.128906 20.195312 L 16.347656 20.195312 L 16.347656 19.523438 L 15.871094 19.523438 L 15.871094 20.195312 L 15.433594 20.195312 L 15.433594 20.636719 L 15.871094 20.636719 L 15.871094 21.65625 C 15.871094 22.164062 16.074219 22.464844 16.625 22.464844 C 16.828125 22.464844 17.058594 22.394531 17.21875 22.300781 L 17.078125 21.882812 C 16.941406 21.976562 16.78125 22 16.667969 22 C 16.4375 22 16.347656 21.859375 16.347656 21.628906 L 16.347656 20.636719 L 17.125 20.636719 L 17.125 20.195312 Z M 21.199219 20.148438 C 20.925781 20.148438 20.742188 20.289062 20.628906 20.472656 L 20.628906 20.191406 L 20.148438 20.191406 L 20.148438 22.414062 L 20.628906 22.414062 L 20.628906 21.164062 C 20.628906 20.792969 20.785156 20.585938 21.085938 20.585938 C 21.175781 20.585938 21.289062 20.609375 21.382812 20.628906 L 21.523438 20.167969 C 21.425781 20.148438 21.289062 20.148438 21.199219 20.148438 Z M 15.046875 20.378906 C 14.816406 20.21875 14.496094 20.148438 14.152344 20.148438 C 13.605469 20.148438 13.238281 20.425781 13.238281 20.863281 C 13.238281 21.234375 13.511719 21.445312 13.992188 21.511719 L 14.222656 21.535156 C 14.472656 21.582031 14.613281 21.652344 14.613281 21.769531 C 14.613281 21.929688 14.425781 22.046875 14.109375 22.046875 C 13.789062 22.046875 13.535156 21.929688 13.375 21.8125 L 13.144531 22.183594 C 13.394531 22.371094 13.738281 22.460938 14.082031 22.460938 C 14.722656 22.460938 15.089844 22.160156 15.089844 21.742188 C 15.089844 21.351562 14.792969 21.140625 14.335938 21.074219 L 14.109375 21.046875 C 13.902344 21.023438 13.742188 20.976562 13.742188 20.839844 C 13.742188 20.679688 13.902344 20.585938 14.15625 20.585938 C 14.429688 20.585938 14.703125 20.703125 14.84375 20.773438 Z M 27.808594 20.148438 C 27.535156 20.148438 27.351562 20.289062 27.238281 20.472656 L 27.238281 20.191406 L 26.757812 20.191406 L 26.757812 22.414062 L 27.238281 22.414062 L 27.238281 21.164062 C 27.238281 20.792969 27.398438 20.585938 27.695312 20.585938 C 27.785156 20.585938 27.898438 20.609375 27.992188 20.628906 L 28.132812 20.171875 C 28.039062 20.148438 27.902344 20.148438 27.808594 20.148438 Z M 21.679688 21.308594 C 21.679688 21.980469 22.136719 22.464844 22.847656 22.464844 C 23.167969 22.464844 23.394531 22.394531 23.625 22.210938 L 23.394531 21.816406 C 23.210938 21.957031 23.03125 22.023438 22.824219 22.023438 C 22.433594 22.023438 22.160156 21.746094 22.160156 21.308594 C 22.160156 20.890625 22.433594 20.609375 22.824219 20.589844 C 23.027344 20.589844 23.210938 20.660156 23.394531 20.796875 L 23.625 20.402344 C 23.394531 20.21875 23.167969 20.148438 22.847656 20.148438 C 22.136719 20.148438 21.679688 20.636719 21.679688 21.308594 Z M 26.117188 21.308594 L 26.117188 20.195312 L 25.636719 20.195312 L 25.636719 20.472656 C 25.476562 20.265625 25.25 20.148438 24.949219 20.148438 C 24.332031 20.148438 23.851562 20.636719 23.851562 21.308594 C 23.851562 21.980469 24.332031 22.464844 24.949219 22.464844 C 25.269531 22.464844 25.5 22.347656 25.636719 22.140625 L 25.636719 22.417969 L 26.117188 22.417969 Z M 24.355469 21.308594 C 24.355469 20.914062 24.605469 20.589844 25.019531 20.589844 C 25.410156 20.589844 25.683594 20.890625 25.683594 21.308594 C 25.683594 21.699219 25.410156 22.023438 25.019531 22.023438 C 24.609375 22 24.355469 21.699219 24.355469 21.308594 Z M 18.613281 20.148438 C 17.976562 20.148438 17.515625 20.609375 17.515625 21.304688 C 17.515625 22 17.976562 22.460938 18.640625 22.460938 C 18.957031 22.460938 19.277344 22.371094 19.53125 22.160156 L 19.300781 21.8125 C 19.117188 21.953125 18.890625 22.042969 18.664062 22.042969 C 18.363281 22.042969 18.070312 21.902344 18 21.511719 L 19.621094 21.511719 C 19.621094 21.441406 19.621094 21.394531 19.621094 21.324219 C 19.644531 20.609375 19.230469 20.148438 18.613281 20.148438 Z M 18.613281 20.566406 C 18.914062 20.566406 19.117188 20.75 19.164062 21.097656 L 18.019531 21.097656 C 18.066406 20.796875 18.269531 20.566406 18.613281 20.566406 Z M 30.535156 21.308594 L 30.535156 19.316406 L 30.054688 19.316406 L 30.054688 20.472656 C 29.894531 20.265625 29.664062 20.148438 29.367188 20.148438 C 28.746094 20.148438 28.269531 20.636719 28.269531 21.308594 C 28.269531 21.980469 28.746094 22.464844 29.367188 22.464844 C 29.6875 22.464844 29.914062 22.347656 30.054688 22.140625 L 30.054688 22.417969 L 30.535156 22.417969 Z M 28.773438 21.308594 C 28.773438 20.914062 29.023438 20.589844 29.433594 20.589844 C 29.824219 20.589844 30.097656 20.890625 30.097656 21.308594 C 30.097656 21.699219 29.824219 22.023438 29.433594 22.023438 C 29.023438 22 28.773438 21.699219 28.773438 21.308594 Z M 12.710938 21.308594 L 12.710938 20.195312 L 12.230469 20.195312 L 12.230469 20.472656 C 12.070312 20.265625 11.84375 20.148438 11.542969 20.148438 C 10.925781 20.148438 10.445312 20.636719 10.445312 21.308594 C 10.445312 21.980469 10.925781 22.464844 11.542969 22.464844 C 11.863281 22.464844 12.09375 22.347656 12.230469 22.140625 L 12.230469 22.417969 L 12.710938 22.417969 Z M 10.929688 21.308594 C 10.929688 20.914062 11.179688 20.589844 11.59375 20.589844 C 11.980469 20.589844 12.253906 20.890625 12.253906 21.308594 C 12.253906 21.699219 11.980469 22.023438 11.59375 22.023438 C 11.179688 22 10.929688 21.699219 10.929688 21.308594 Z M 10.929688 21.308594 "}),a.createElement("path",{style:{stroke:"none",fillRule:"nonzero",fill:"rgb(100%,35.294119%,0%)",fillOpacity:1},d:"M 22.09375 3.320312 L 14.886719 3.320312 L 14.886719 16.421875 L 22.09375 16.421875 Z M 22.09375 3.320312 "}),a.createElement("path",{style:{stroke:"none",fillRule:"nonzero",fill:"rgb(92.156863%,0%,10.588235%)",fillOpacity:1},d:"M 15.367188 9.871094 C 15.367188 7.207031 16.601562 4.84375 18.5 3.320312 C 17.101562 2.207031 15.339844 1.535156 13.421875 1.535156 C 8.867188 1.535156 5.183594 5.261719 5.183594 9.871094 C 5.183594 14.476562 8.867188 18.203125 13.421875 18.203125 C 15.339844 18.203125 17.101562 17.53125 18.5 16.421875 C 16.601562 14.914062 15.367188 12.53125 15.367188 9.871094 Z M 15.367188 9.871094 "}),a.createElement("path",{style:{stroke:"none",fillRule:"nonzero",fill:"rgb(96.862745%,61.960787%,10.588235%)",fillOpacity:1},d:"M 31.816406 9.871094 C 31.816406 14.476562 28.132812 18.203125 23.582031 18.203125 C 21.660156 18.203125 19.898438 17.53125 18.5 16.421875 C 20.421875 14.890625 21.632812 12.53125 21.632812 9.871094 C 21.632812 7.207031 20.398438 4.84375 18.5 3.320312 C 19.894531 2.207031 21.65625 1.535156 23.578125 1.535156 C 28.132812 1.535156 31.816406 5.289062 31.816406 9.871094 Z M 31.816406 9.871094 "}))),Y=e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"37px",height:"24px",viewBox:"0 0 37 24",...e},a.createElement("g",{id:"surface1"},a.createElement("rect",{x:0,y:0,width:37,height:24,style:{fill:"rgb(7.843138%,20.392157%,79.607844%)",fillOpacity:1,stroke:"none"}}),a.createElement("path",{style:{stroke:"none",fillRule:"nonzero",fill:"rgb(100%,100%,100%)",fillOpacity:1},d:"M 23.234375 6.871094 C 21.011719 6.871094 19.027344 8.035156 19.027344 10.1875 C 19.027344 12.65625 22.550781 12.828125 22.550781 14.070312 C 22.550781 14.589844 21.957031 15.058594 20.949219 15.058594 C 19.515625 15.058594 18.441406 14.40625 18.441406 14.40625 L 17.984375 16.578125 C 17.984375 16.578125 19.21875 17.128906 20.855469 17.128906 C 23.285156 17.128906 25.199219 15.90625 25.199219 13.71875 C 25.199219 11.109375 21.660156 10.941406 21.660156 9.792969 C 21.660156 9.382812 22.148438 8.933594 23.15625 8.933594 C 24.292969 8.933594 25.21875 9.410156 25.21875 9.410156 L 25.667969 7.308594 C 25.667969 7.308594 24.65625 6.871094 23.234375 6.871094 Z M 2.910156 7.027344 L 2.855469 7.34375 C 2.855469 7.34375 3.789062 7.519531 4.632812 7.863281 C 5.714844 8.257812 5.792969 8.488281 5.976562 9.207031 L 7.964844 16.96875 L 10.632812 16.96875 L 14.738281 7.027344 L 12.078125 7.027344 L 9.4375 13.785156 L 8.363281 8.058594 C 8.261719 7.402344 7.761719 7.027344 7.152344 7.027344 Z M 15.808594 7.027344 L 13.722656 16.96875 L 16.257812 16.96875 L 18.339844 7.027344 Z M 29.957031 7.027344 C 29.347656 7.027344 29.023438 7.359375 28.785156 7.9375 L 25.066406 16.96875 L 27.726562 16.96875 L 28.242188 15.460938 L 31.484375 15.460938 L 31.796875 16.96875 L 34.144531 16.96875 L 32.097656 7.027344 Z M 30.304688 9.714844 L 31.09375 13.441406 L 28.980469 13.441406 Z M 30.304688 9.714844 "}))),G=({className:e,cardContainerId:n,cardNumberContainerId:L,expirationDateContainerId:t,securityCodeContainerId:o,eligibleCards:c,cardTypeSelected:l,showCardTypeSelected:u=!1,validationErrors:r,isLoading:m=!0,...d})=>v(V,{children:[v(q,{"data-testid":"loading-indicator",className:w(["elsie-credit-card-form__loading",m?"":"hidden"]),children:[i(x,{variant:"row",lines:1,fullWidth:!0,size:"xsmall",multilineGap:"xsmall"}),i(x,{variant:"row",size:"xsmall",fullWidth:!1}),i(x,{variant:"row",size:"xsmall",fullWidth:!1}),i(x,{variant:"row",size:"xsmall",fullWidth:!1})]}),v("div",{id:n,"data-testid":n,...d,className:w(["elsie-credit-card-form",e,m?"hidden":""]),children:[u&&i("div",{id:"eligible-cards","data-testid":"eligible-cards",className:w(["elsie-credit-card-form__eligible-cards"]),children:c.map(s=>i(X,{id:`elsie-credit-card-form__eligible-cards-${s.code}`,source:s.code==="amex"?H:s.code==="mastercard"?I:Y,viewBox:"0 0 37 24",className:w(["elsie-credit-card-form__eligible-cards-icon",!l||l.code!==s.code?"elsie-credit-card-form__eligible-cards-unselected":"elsie-credit-card-form__eligible-cards-selected"]),title:s.type},s.type))}),v("div",{className:"elsie-credit-card-form__card-number",children:[i("div",{className:"elsie-credit-card-form__input-label",children:"Credit Card Number"}),i("div",{className:"elsie-credit-card-form__input-container",children:i("div",{id:L,"data-testid":L,className:w(["elsie-credit-card-form__input-target"])})}),i("div",{id:`${L}-error`,className:"elsie-credit-card-form__input-error",children:r==null?void 0:r.number})]}),v("div",{className:"elsie-credit-card-form__expiration-date",children:[i("div",{className:"elsie-credit-card-form__input-label",children:"Expiration Date"}),i("div",{className:"elsie-credit-card-form__input-container",children:i("div",{id:t,"data-testid":t,className:w(["elsie-credit-card-form__input-target"])})}),i("div",{id:`${t}-error`,className:"elsie-credit-card-form__input-error",children:r==null?void 0:r.expirationDate})]}),v("div",{className:"elsie-credit-card-form__security-code",children:[i("div",{className:"elsie-credit-card-form__input-label",children:"Card Security Code"}),i("div",{className:"elsie-credit-card-form__input-container",children:i("div",{id:o,"data-testid":o,className:w(["elsie-credit-card-form__input-target"])})}),i("div",{id:`${o}-error`,className:"elsie-credit-card-form__input-error",children:r==null?void 0:r.cvv})]})]})]});function U(e,n,L,t){function o(c){return c instanceof L?c:new L(function(l){l(c)})}return new(L||(L=Promise))(function(c,l){function u(d){try{m(t.next(d))}catch(s){l(s)}}function r(d){try{m(t.throw(d))}catch(s){l(s)}}function m(d){d.done?c(d.value):o(d.value).then(u,r)}m((t=t.apply(e,[])).next())})}function B(e,n){return U(this,void 0,void 0,function*(){if("PaymentServicesSDK"in window)return window.PaymentServicesSDK;if(yield J(e,n||{}),!("PaymentServicesSDK"in window))throw new Error("Script loaded, but Payment Services SDK not found.");return window.PaymentServicesSDK})}function J(e,{crossOrigin:n,integrity:L}){const t=document.createElement("script");return n!=null&&(t.crossOrigin=n),L!=null&&(t.integrity=L),new Promise((o,c)=>{t.src=e,t.async=!0,t.onload=()=>o(),t.onerror=l=>c(l),document.head.appendChild(t)})}var Q=B;const e1="https://payments-sdk.int.magento-payments.com/v0/PaymentSDK.js";function t1({apiUrl:e,location:n,getCustomerToken:L}){const[t,o]=D(null),[c,l]=D("loading");return F(()=>{Q(e1).then(async u=>{const r=new u({apiUrl:e,location:n,getCustomerToken:L});await r.init(),o(r)}).then(()=>l("ready")).catch(()=>l("error"))},[e,n,L]),{paymentsSDK:t,sdkStatus:c}}var i1=(e=>(e.ProductDetail="PRODUCT_DETAIL",e.MiniCart="MINICART",e.Cart="CART",e.Checkout="CHECKOUT",e.Admin="ADMIN",e))(i1||{}),E=(e=>(e.Visa="visa",e.MasterCard="mastercard",e.Amex="amex",e))(E||{});const c1="payment_services_paypal_hosted_fields",d1=({location:e,apiUrl:n,getCartId:L,setSubmit:t,onSuccess:o,onError:c,onStart:l,onRender:u,getCustomerToken:r,onValidityChange:m,onFormValidityChange:d,onCardTypeChange:s,...N})=>{const Z="number",b="expirationDate",S="cvv",M=`${e}-card-container`,[K,O]=g(!0),[$,R]=g([]),[z,k]=g(null),[A,P]=g({}),{paymentsSDK:_}=t1({apiUrl:n,location:e,getCustomerToken:r});return W(()=>{if(!_||!_.Payment.CreditCard.isAvailable())return;_.Payment.CreditCard.render({getCartId:L,onStart:l,onSuccess:o,onError:c,onValidityChange:(C,f)=>{if(m?m(C,f):j(C,f),d){const p=Object.values(C).every(h=>h.isValid);d(p)}},onRender:u,onCardTypeChange:C=>{if(!s)return C.length>0?k(C[0]):k(null);s(C)},fields:{number:{selector:`#${M} #${Z}`,placeholder:" "},expirationDate:{selector:`#${M} #${b}`,placeholder:"MM/YY"},cvv:{selector:`#${M} #${S}`,placeholder:" "}}}).then(C=>{t(C.submit.bind(C));const f=C.getEligibleCards().filter(p=>Object.values(E).includes(p.code));R(f)}).finally(()=>{O(!1)});const j=(C,f)=>{const p=C[f];let h="";if(!p.isValid)switch(f){case"expirationDate":h=p.isEmpty?"This is required field.":"Enter valid expiration date.";break;case"cvv":h=p.isEmpty?"This is required field.":"Enter valid cvv.";break;case"number":h=p.isEmpty?"This is required field.":"Enter valid card number.";break}P(T=>{const y={...T};return h?y[f]=h:delete y[f],y})}},[_,M,L,l,o,c,t,u,m,d,s]),i("div",{class:"payment-services_paypal-credit-card-container",...N,children:i(G,{cardContainerId:M,cardNumberContainerId:Z,expirationDateContainerId:b,securityCodeContainerId:S,eligibleCards:$,isLoading:K,cardTypeSelected:z,showCardTypeSelected:!s,validationErrors:A})})};export{c1 as CREDIT_CARD_CODE,E as CardTypes,d1 as CreditCard,i1 as PaymentLocation,d1 as default};

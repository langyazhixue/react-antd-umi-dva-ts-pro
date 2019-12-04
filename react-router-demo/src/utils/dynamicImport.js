// import React from 'react';
import loadable from '@loadable/component'


// function Loading () {
//   return (
//     <div>Loading...</div>
//   ) 
// }
export function dynamicImport(CmpURL) {
  const LoadableComponent  = loadable(() => import(CmpURL));
  return LoadableComponent
} 
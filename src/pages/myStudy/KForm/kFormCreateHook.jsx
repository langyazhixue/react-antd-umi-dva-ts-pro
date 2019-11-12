// 用 Hook 来实现这个KFormCreate

// import React, { useState } from 'react';

// function KFormCreateHook(Cmp) {
//   return function(props) {
//     const [state, setState] = useState({});
//     const options = {};

//     const handleChange = event => {
//       setState({
//         ...state,
//         [event.target.name]: event.target.value,
//       });
//     };

//     const getFieldDecorator = (field, option) => {
//       options[field] = option;

//       return InpurtCmp => {
//         return (
//           <>
//             {React.cloneElement(InpurtCmp, {
//               name: field,
//               value: state[field] || '',
//               onChange: handleChange,
//             })}
//           </>
//         );
//       };
//     };

//     const getFieldsValue = () => {
//       return { ...state };
//     };

//     const getFieldValue = field => {
//       return state[field];
//     };

//     const validateFields = callback => {
//       const res = { ...state };
//       const err = [];

//       for (let item in options) {
//         if (res[item] === undefined || res[item] === '') {
//           err.push({
//             [item]: 'error',
//           });
//         }
//       }

//       if (err.length) {
//         callback(err, res);
//       } else {
//         callback(undefined, res);
//       }
//     };
//     return (
//       <div className="border">
//         <Cmp
//           {...props}
//           getFieldDecorator={getFieldDecorator}
//           getFieldsValue={getFieldsValue}
//           getFieldValue={getFieldValue}
//           validateFields={validateFields}
//         />{' '}
//       </div>
//     );
//   }
// }

// export default KFormCreateHook;

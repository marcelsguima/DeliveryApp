// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import myContext from './myContext';

// function MyProvider({ children }) {

//   useEffect(() => {
//     const responseAPI = async () => {
//       const response = await fetch('https://swapi.dev/api/planets');
//       const { results } = await response.json();
//       results.forEach((el) => delete el.residents);
//       setData(results);
//     };
//     responseAPI();
//   }, []);

//   const handleButton = () => {
//     setAllFilter([...allFilter, { column, comparison, valor }]);
//     setFiltrando(true);
//     const newFilter = selectFilter.filter((el) => column !== el);
//     setSelectFilter(newFilter);
//     setColumn(newFilter[0]);
//   };

//   const clickOrder = () => {
//     if (radio === 'ASC') {
//       const dataSort = data.filter((el) => el[order] !== 'unknown')
//         .sort((a, b) => +(a[order]) - +(b[order]));
//       const unknown = data.filter((el) => el[order] === 'unknown');
//       const unknownData = [...dataSort, ...unknown];
//       setData(unknownData);
//     } else {
//       const dataSort = data.filter((el) => el[order] !== 'unknown')
//         .sort((a, b) => +(b[order]) - +(a[order]));
//       const unknown = data.filter((el) => el[order] === 'unknown');
//       const unknownData = [...dataSort, ...unknown];
//       setData(unknownData);
//     }
//   };

//   return (
//     <myContext.Provider value={ contexto }>
//       { children }
//     </myContext.Provider>

//   );
// }

// MyProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default MyProvider;

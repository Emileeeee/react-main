// import React, { useState, useEffect } from "react";

// const ShopListPage = () => {
//   // const [shops, setShops] = useState([]);
//   // const [filteredShops, setFilteredShops] = useState([]);
//   // const [searchTerm, setSearchTerm] = useState("");
//   // const [showModal, setShowModal] = useState(false);
//   // const [newShop, setNewShop] = useState({
//   //   name: "",
//   //   openingTime: "",
//   //   distance: "",
//   //   paymentMethod: "",
//   // });

//   // useEffect(() => {
//   //   setShops([
//   //     {
//   //       id: 1,
//   //       name: "Shop",
//   //       openingTime: " 09:00",
//   //       distance: 50,
//   //       paymentMethod: "Cash",
//   //     },
//   //     {
//   //       id: 2,
//   //       name: "Shop D",
//   //       openingTime: "20:31",
//   //       distance: 1,
//   //       paymentMethod: "Live",
//   //     },
//   //     {
//   //       id: 3,
//   //       name: "Shop O",
//   //       openingTime: "20:31 ",
//   //       distance: 1,
//   //       paymentMethod: "Live",
//   //     },
//   //     {
//   //       id: 4,
//   //       name: "Shop T",
//   //       openingTime: "20:31 ",
//   //       distance: 1,
//   //       paymentMethod: "Live",
//   //     },
//   //     {
//   //       id: 5,
//   //       name: "Shop A",
//   //       openingTime: "20:31 ",
//   //       distance: 1,
//   //       paymentMethod: "Live",
//   //     },      {
//   //       id: 6,
//   //       name: "Shop 2",
//   //       openingTime: "20:31 ",
//   //       distance: 1,
//   //       paymentMethod: "Live",
//   //     },
//   //   ]);
//   // }, []);

//   // useEffect(() => {
//   //   const filtered = shops.filter((shop) =>
//   //     shop.name.toLowerCase().includes(searchTerm.toLowerCase())
//   //   );
//   //   setFilteredShops(filtered);
//   // }, [searchTerm, shops]);

//   // const openModal = () => {
//   //   setShowModal(true);
//   // };

//   // const closeModal = () => {
//   //   setShowModal(false);
//   // };

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setNewShop((prevShop) => ({ ...prevShop, [name]: value }));
//   // };

//   // const addShop = () => {
//   //   setShops((prevShops) => [...prevShops, newShop]);
//   //   closeModal();
//   // };

//   return (
//     <div>
//       <h1>Список магазинов</h1>
//       <input
//         type="text"
//         placeholder="Поиск по названию магазина"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={openModal}>Добавить магазин</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Название</th>
//             <th>Время открытия</th>
//             <th>Удалённость (км)</th>
//             <th>Метод оплаты</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredShops.map((shop) => (
//             <tr key={shop.id}>
//               <td>{shop.name}</td>
//               <td>{shop.openingTime}</td>
//               <td>{shop.distance}</td>
//               <td>{shop.paymentMethod}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {showModal && (
//         <div className="modal">
//           <h2>Добавить новый магазин</h2>
//           <input
//             type="text"
//             placeholder="Название магазина"
//             name="name"
//             value={newShop.name}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             placeholder="Время открытия"
//             name="openingTime"
//             value={newShop.openingTime}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             placeholder="Удалённость (км)"
//             name="distance"
//             value={newShop.distance}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             placeholder="Метод оплаты"
//             name="paymentMethod"
//             value={newShop.paymentMethod}
//             onChange={handleInputChange}
//           />
//           <button onClick={addShop}>Добавить</button>
//           <button onClick={closeModal}>Закрыть</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShopListPage;

import React, { useState, useEffect } from "react";

const ShopListPage = () => {
  const [shops, setShops] = useState([]);
  const [filteredShops, setFilteredShops] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newShop, setNewShop] = useState({
    name: "",
    openingTime: "",
    distance: "",
    paymentMethod: "",
  });
  const [sortConfig, setSortConfig] = useState(null);

  useEffect(() => {
    setShops([
      {
        id: 1,
        name: "Shop",
        openingTime: " 09:00",
        distance: 50,
        paymentMethod: "Cash",
      },
      {
        id: 2,
        name: "Shop D",
        openingTime: "20:31",
        distance: 1,
        paymentMethod: "Live",
      },
      {
        id: 3,
        name: "Shop O",
        openingTime: "20:31 ",
        distance: 1,
        paymentMethod: "Live",
      },
      {
        id: 4,
        name: "Shop T",
        openingTime: "20:31 ",
        distance: 1,
        paymentMethod: "Live",
      },
      {
        id: 5,
        name: "Shop A",
        openingTime: "20:31 ",
        distance: 1,
        paymentMethod: "Live",
      },      {
        id: 6,
        name: "Shop 2",
        openingTime: "20:31 ",
        distance: 1,
        paymentMethod: "Live",
      },
    ]);
  }, []);

  useEffect(() => {
    let sortedShops = [...shops];
    if (sortConfig !== null) {
      sortedShops.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    setFilteredShops(sortedShops);
  }, [searchTerm, shops, sortConfig]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewShop((prevShop) => ({ ...prevShop, [name]: value }));
  };

  const addShop = () => {
    setShops((prevShops) => [...prevShops, newShop]);
    closeModal();
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Список магазинов</h1>
      <input
        type="text"
        placeholder="Поиск по названию магазина"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={openModal}>Добавить магазин</button>
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('name')}>Название</th>
            <th onClick={() => requestSort('openingTime')}>Время открытия</th>
            <th onClick={() => requestSort('distance')}>Удалённость (км)</th>
            <th onClick={() => requestSort('paymentMethod')}>Метод оплаты</th>
          </tr>
        </thead>
        <tbody>
          {filteredShops.map((shop) => (
            <tr key={shop.id}>
              <td>{shop.name}</td>
              <td>{shop.openingTime}</td>
              <td>{shop.distance}</td>
              <td>{shop.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <div className="modal">
          <h2>Добавить новый магазин</h2>
          <input
            type="text"
            placeholder="Название магазина"
            name="name"
            value={newShop.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Время открытия"
            name="openingTime"
            value={newShop.openingTime}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Удалённость (км)"
            name="distance"
            value={newShop.distance}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Метод оплаты"
            name="paymentMethod"
            value={newShop.paymentMethod}
            onChange={handleInputChange}
          />
          <button onClick={addShop}>Добавить</button>
          <button onClick={closeModal}>Закрыть</button>
        </div>
      )}
    </div>
  );
};

export default ShopListPage;

// Challenge #1 - Write a function that takes in an array of objects such as customers,
// and indexes them by their id property. When passed customers, the resulting data structure should be:

// {
//   '1': { id: 1, name: 'Gertrude' },
//   '2': { id: 2, name: 'Taurean' },
//   '3': { id: 3, name: 'Vincent' },
//   '4': { id: 4, name: 'Blaze' },
//   '5': { id: 5, name: 'Carli' },
//   '6': { id: 6, name: 'Rebekah' }
// }

var customers = [
  {id: 1, name: 'Gertrude'},
  {id: 2, name: 'Taurean'},
  {id: 3, name: 'Vincent'},
  {id: 4, name: 'Blaze'},
  {id: 5, name: 'Carli'},
  {id: 6, name: 'Rebekah'},
]

var orders = [
  {id: 1, customerId: 1, date: '5/5/2012'},
  {id: 2, customerId: 1, date: '6/2/2014'},
  {id: 3, customerId: 2, date: '5/16/2015'},
  {id: 4, customerId: 3, date: '1/1/2012'},
  {id: 5, customerId: 4, date: '1/24/2014'},
  {id: 6, customerId: 2, date: '7/26/2014'},
]
//solution
function sortCustomers (object){
  var indexed = object.reduce(function(result, object){
    result[object.id] = object
    return result
  }, {})
  return indexed
}
sortCustomers(customers)

// Challenge #2 - Write a function that takes in an array of objects such as orders and groups them by their customerId. When passed orders, the result should be:
//
// {
//   '1': [
//     { id: 1, customerId: 1, date: '5/5/2012' },
//     { id: 2, customerId: 1, date: '6/2/2014' }
//   ],
//   '2': [
//     { id: 3, customerId: 2, date: '5/16/2015' },
//     { id: 6, customerId: 2, date: '7/26/2014' }
//   ],
//   '3': [
//     { id: 4, customerId: 3, date: '1/1/2012' }
//   ],
//   '4': [
//     { id: 5, customerId: 4, date: '1/24/2014' }
//   ]
// }
//solution 2 var 1

function sortOrders (array){
  return array.reduce(function(result, object){
    result[object.customerId] = result[object.customerId] || []
    result[object.customerId].push(object)
    return result
  },{})
}

//solution 2 var 2 (iterates twice)
function group(array) {
  return array.reduce(function (result, order) {
    result[order.customerId] = orders.filter(function (request) {
      return request.customerId == order.customerId;
    });
    return result;
  }, {});
}

sortOrders(orders)

// Challenge #3 - Write a function that takes in two arrays, such as orders and customers,
// and replaces the order's customerId field with the actual customer object.
// When passed orders and customers, the resulting data structure should be:

// [
//   {
//     "id": 1,
//     "date": "5/5/2012",
//     "customer": {"id": 1, "name": "Gertrude"}},
//   {
//     "id": 2,
//     "date": "6/2/2014",
//     "customer": {"id": 1, "name": "Gertrude"}},
//   {
//     "id": 3,
//     "date": "5/16/2015",
//     "customer": {"id": 2, "name": "Taurean"}
//   },
//   {
//     "id": 4,
//     "date": "1/1/2012",
//     "customer": {"id": 3, "name": "Vincent"}
//   },
//   {
//     "id": 5,
//     "date": "1/24/2014",
//     "customer": {"id": 4, "name": "Blaze"}
//   },
//   {
//     "id": 6,
//     "date": "7/26/2014",
//     "customer": {"id": 2, "name": "Taurean"}
//   }
// ]

function specificZipJoin(array1, array2) {
 function go(array1, array2, collectorArray) {
   if (array1.length == 0) { return collectorArray; }

   array1[0].customer = array2[array1[0].customerId];
   delete array1[0].customerId;
   collectorArray.push(array1[0]);

   return go(array1.slice(1), array2, collectorArray);
 }
 return go(array1, array2, []);
}
console.log('------------------------------------');
console.log(specificZipJoin(orders, customers));

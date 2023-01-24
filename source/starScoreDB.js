// 메인에서 불러오는 DataBase 불러서 값 넣는 외부 java script

//prefixes of implementation that we want to test
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

//prefixes of window.IDB objects
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

if (!window.indexedDB) {
  window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

// client side 용량이 한계가 있기 때문에 일부 정보들만 Data로 넣어뒀다.
const allData = [{
    id: "212", //유성온천공원
    score: 3.2
  },
  {
    id: "215", //월평공원
    score: 3.5
  },
  {
    id: "412", //갈마공원
    score: 3.0
  },
  {
    id: "613", //한빛수목원
    score: 4.5
  },
  {
    id: "712", //남선공원
    score: 3.6
  },
  {
    id: "1212", //유림공원
    score: 3.8
  },
  {
    id: "1314", //금강로하스공원
    score: 4.2
  },
  {
    id: "1912", // 우암사적공원
    score: 3.7
  },
  {
    id: "2114", //엑스포과학공원
    score: 4.0
  },
  {
    id: "2215", //대동하늘공원
    score: 3.4
  },
  {
    id: "614", // 놀숲
    score: 4.1
  },
  {
    id: "321", // 삼층다락방
    score: 4.2
  }
];



var db;
var request = window.indexedDB.open("newDatabase", 1);

request.onerror = function(event) {
  console.log("error: ");
};

request.onsuccess = function(event) {
  db = request.result;
  console.log("success: " + db);
};

//연결 후 데베에 값 넣기
request.onupgradeneeded = function(event) {
  var db = event.target.result;
  var objectStore = db.createObjectStore("scores", {
    keyPath: "id"
  });
  for (var i in allData) {
    objectStore.add(allData[i]);
  }
}

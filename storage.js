// console.log("lmd");

const AddStorage = () => {
  const StorageId = document.getElementById("storage-id");
  const ID = StorageId.value;
  const StorageValue = document.getElementById("storage-value");
  const Value = StorageValue.value;

  if ((ID, Value)) {
    localStorage.setItem(ID, Value);
  }else{

          alert("its blank")
  }

  StorageId.value = "";
  StorageValue.value = "";
};

import React from "react";

function useLocalStorage(itemName, initialValue) {  
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify([]));
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(true);
        }
      }, 2000);
    })
    
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(true);
      }
    };
  
    /*
      cuando un hook de react devuelve varios objetos para el array
      se devuelve un objeto ya no un array.
    */
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

  export { useLocalStorage }
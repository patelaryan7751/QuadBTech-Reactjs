export const storeObjInLocalStorage = (key, obj) => {
  try {
    // Convert the obj to a string
    const objString = JSON.stringify(obj);
    // Store the string in local storage
    localStorage.setItem(key, objString);
  } catch (error) {
    console.error("Error storing array in localStorage:", error);
  }
};

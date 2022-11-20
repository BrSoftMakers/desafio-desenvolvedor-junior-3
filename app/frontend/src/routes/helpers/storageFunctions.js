export const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};


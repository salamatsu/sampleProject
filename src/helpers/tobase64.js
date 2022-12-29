export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const convertToBase64 = async (file) => {
  try {
    const result = await toBase64(file);
    return result;
  } catch (error) {
    console.error(error);
    alert("Image convertion failed. Please try again or contact support.");
    return;
  }
};

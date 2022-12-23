// Create a function that we can import to use for the other three operations: Create, Update, and Delete
const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {

  // 3 blocks: try, catch, finally:
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error('Please reload the app')
  } catch (err) { 
    errMsg = err.message;
  } finally {
    return errMsg;
  }
}


export default apiRequest
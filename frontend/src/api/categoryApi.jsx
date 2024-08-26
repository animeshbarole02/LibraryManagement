const BASE_URL = "http://localhost:8080/api/v1/categories";

const getAuthHeaders = () =>{
    const token =  localStorage.getItem("token");
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    
};

export const fetchCategories =  async (page=0,size=5) => {
     try {
        const response =  await fetch(`${BASE_URL}/list?page=${page}&size=${size}`,{
            method: "GET",
            headers: {
                ...getAuthHeaders(),
                "Cache-Control": "no-cache", // Prevents caching
              },
        });

        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
     }catch(error) {
        console.log("Failed to Fetch Categories :",error);
        throw error;
     }
}

export const addCategory = async (newCategory) => {
    try {
      const response = await fetch(`${BASE_URL}/save`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify([newCategory]), // Ensure body format matches what the API expects
      });
  
      console.log("Response received:", response);
  
      if (!response.ok) {
        throw new Error(`Failed to add category: ${response.statusText}`);
      }
  
      // Expect the API to return a response wrapped in an object
     
    } catch (error) {
      console.error("Error in addCategory function:", error);
      throw error; // Rethrow the error to be caught by the caller
    }
  }


export const deleteCategory = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to delete category: ${response.statusText}`);
      }
  
      return true;
    } catch (error) {
      console.error("Failed to delete category:", error);
      throw error;
    }
  };
import "./Categories.css";

import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import EditIcon from "../../assets/icons/EditIcom.png";
import LeftPageIcon from "../../assets/icons/LeftPage.png";
import RightPageIcon from "../../assets/icons/Right-Page.png";

import DeleteIcon from "../../assets/icons/DeleteIcon.png";
import Table from "../../components/Table/Table";

import SearchIcon from "../../assets/icons/magnifying-glass.png";
import AdminHOC from "../../hoc/AdminHOC";
import Modal from "../../components/modal/modal";
import Dynamicform from "../../components/forms/dynamicform";
import { fetchCategories, addCategory, deleteCategory } from "../../api/categoryApi";

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [categories, setCategories] = useState([]);
  const[filteredCategories , setFilteredCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemsPerPage = 5; 


  useEffect(()=>{
     
    loadCategories();
  },[currentPage]);

  useEffect(() => {
    setFilteredCategories(categories); // Initialize filtered categories with all categories
  }, [categories]); // Run this whenever categories change


 
  const loadCategories = async () => {
    try {
      const data = await fetchCategories(currentPage);
      const startIndex = currentPage * itemsPerPage;
      const transformedCategories = data.content.map((category, index) => ({
        ...category,
        displayId: startIndex + index + 1, 
      }));
      setCategories(transformedCategories);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Failed to load categories:", error);
    }
  };


  const handleSearch =() => {
    if(searchTerm.trim()===""){
      setFilteredCategories(categories);
    }else {
      const filtered = categories.filter((category) => 
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  };

  const handleAddCategory = async (newCategory) => {
    if (newCategory.name && newCategory.categoryDesc) {
      try {

        console.log("category");
        await addCategory(newCategory);
        console.log("Added Category")
        loadCategories();
        handleCloseModal();
        console.log("Modal closed");
      } catch (error) {
        console.error("Failed to add category:", error);
      }
    }
  };

  const handleDelete = async (rowData) => {
    const id = rowData.id;
    try {
      await deleteCategory(id);
      setCategories(categories.filter((category) => category.id !== id));
    } catch (error) {
      console.error("Failed to delete the category", error);
    }
  };

  
  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };



  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  

  const columns = [
    { header: "ID", accessor: "displayId", width: "0.5%" },
    { header: "Category Name", accessor: "name", width: "2%" },
    { header: "Category Description", accessor: "categoryDesc", width: "3%" },
    {
      header: "Actions",
      render: (rowData) => renderActions(rowData),
      width: "0.5%",
    },
  ];

  const renderActions = (rowData) => (
    <div className="actionicons">
      <img
        src={EditIcon}
        alt="Edit"
        className="action-icon"
        onClick={() => handleEdit(rowData)}
      />
      <img
        src={DeleteIcon}
        alt="Delete"
        className="action-icon"
        onClick={() => handleDelete(rowData)}
      />
    </div>
  );

  const handleEdit = (rowData) => {
    console.log("Edit clicked for", rowData);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(); // Trigger search when Enter key is pressed
    }
  };



  return (
    <>
      <div className="categories-div">
        <div className="center-div">
          <div className="upper-div">
            <div className="upper-div-text">
              <span>Categories</span>
            </div>

            <div className="upper-div-btns">
              <div className="upper-search-div">
                <div className="search-input-div">
                  <div className="search-icon-div">
                    <img src={SearchIcon} alt="" />
                  </div>

                  <div className="search-categories-div">
                    <input
                      type="text"
                      placeholder="Search categories..."
                      className="search-input"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                </div>
              </div>

              <div className="add-categories-div">
                <Button
                  text="Add Category"
                  className="add-categories-btn"
                  onClick={handleOpenModal}
                />
              </div>
            </div>
          </div>

          <div className="lower-div">
            <Table data={filteredCategories} columns={columns} />

            <div className="pagination-div">
              <div className="left-pagination">
                <img 
                src={LeftPageIcon} 
                alt="" 
                onClick={() => handlePageChange("prev")}
                />
              </div>
              <div className="pagination-number">
              <span>{currentPage + 1}/{totalPages}</span>
              </div>
              <div className="right-pagination">
                <img
                 src={RightPageIcon} 
                 alt="" 
                 onClick={() => handlePageChange("next")}
                 />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Dynamicform
         heading="Add Category"
          fields={[
            {
              name: "name",
              type: "text",
              placeholder: "Category Name",
              required: true,
            },
            {
              name: "categoryDesc",
              type: "text",
              placeholder: "Category Description",
              required: true,
            },
          ]}
          onSubmit={handleAddCategory}
       
        />
      </Modal>
    </>
  );
};

export default AdminHOC(Categories);

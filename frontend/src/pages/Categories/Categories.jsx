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

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(()=>{
     
    fetchCategories();
  },[currentPage]);

  const fetchCategories = async () => {
       const response =  await fetch(`http://localhost:8080/api/v1/categories/list?page=${currentPage}&size=5`);
       
       const data = await response.json();

       console.log(data);
       
       setCategories(data.content);
       setTotalPages(data.totalPages);
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddCategory = async (newCategory) => {
    if (newCategory.name && newCategory.categoryDesc) {
         const reponse =  await fetch(`http://localhost:8080/api/v1/categories/save`,{
            method :'POST',
            headers:{'Content-Type' : 'application/json'},
            body : JSON.stringify([newCategory]),

         });
        
      if(reponse.ok)
      {
         fetchCategories();
         handleCloseModal();
      }
   
    }
  };

  const columns = [
    { header: "ID", accessor: "id", width: "0.5%" },
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

  const handleDelete = async (rowData) => {

    const id = rowData.id;
    const response = await fetch(`http://localhost:8080/api/v1/categories/${id}`,{
      method :"DELETE"
    })

    if (response.ok) {
     
      setCategories(categories.filter((category) => category.id !== id));
    } else {
      console.error("Failed to delete the category", response.statusText);
    }
     
  };


  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
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
            <Table data={categories} columns={columns} />

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

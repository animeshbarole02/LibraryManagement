import "./Categories.css";

import { useState } from "react";
import Button from "../../components/Button/Button";
import EditIcon from "../../assets/icons/EditIcom.png";
import LeftPageIcon from "../../assets/icons/LeftPage.png";
import RightPageIcon from "../../assets/icons/Right-Page.png";

import DeleteIcon from "../../assets/icons/DeleteIcon.png";
import Table from "../../components/Table/Table";

import SearchIcon from "../../assets/icons/magnifying-glass.png";
import AdminHOC from "../../hoc/AdminHOC";

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const categories = [
    {
      id: 1,
      name: "Fiction",
      description: "Books that contain fictional stories.",
    },
    {
      id: 2,
      name: "Non-Fiction",
      description: "Books based on factual information.",
    },
    {
      id: 3,
      name: "Science",
      description: "Books that explain scientific concepts.",
    },
    {
      id: 1,
      name: "Fiction",
      description: "Books that contain fictional stories.",
    },
    {
      id: 2,
      name: "Non-Fiction",
      description: "Books based on factual information.",
    },
  ];

  const columns = [
    { header: "ID", accessor: "id", width: "0.5%" },
    { header: "Category Name", accessor: "name", width: "2%" },
    { header: "Category Description", accessor: "description", width: "3%" },
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

  const handleDelete = (rowData) => {
    console.log("Delete clicked for", rowData);
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
              <Button text="Add Categories" className="add-categories-btn" />
               </div>
            </div>

           
          </div>

          <div className="lower-div">
            <Table data={categories} columns={columns} />

            <div className="pagination-div">
              <div className="left-pagination">
                <img src={LeftPageIcon} alt="" />
              </div>
              <div className="pagination-number">
                <span>1/5</span>
              </div>
              <div className="right-pagination">
                <img src={RightPageIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHOC(Categories);

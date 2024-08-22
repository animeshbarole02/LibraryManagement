import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import Table from "../../components/Table/Table";
import { useState } from "react";
import Button from "../../components/Button/Button";
import SearchIcon from "../../assets/icons/magnifying-glass.png";
import LeftPageIcon from "../../assets/icons/LeftPage.png";
import RightPageIcon from "../../assets/icons/Right-Page.png";
import EditIcon from "../../assets/icons/EditIcom.png";
import AssignUser from "../../assets/icons/UserAsign.png";

const Books = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
      quantity: 10,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      category: "Dystopian",
      quantity: 15,
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Classic",
      quantity: 7,
    },
    {
      id: 4,
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      category: "Science",
      quantity: 5,
    },
    {
      id: 5,
      title: "The Art of War",
      author: "Sun Tzu",
      category: "Philosophy",
      quantity: 12,
    },
  ];

  const columns = [
    { header: "ID", accessor: "id", width: "5%" },
    { header: "Title", accessor: "title", width: "10%" },
    { header: "Author", accessor: "author", width: "10%" },
    { header: "Category", accessor: "category", width: "5%" },
    { header: "Quantity", accessor: "quantity", width: "1%" },
    {
      header: "Actions",
      render: (rowData) => renderActions(rowData),
      width: "1%",
    },
  ];

  const handleEdit = (rowData) => {
    // Logic for editing the category
    console.log("Edit clicked for", rowData);
  };

  const handleDelete = (rowData) => {
    // Logic for deleting the category
    console.log("Delete clicked for", rowData);
  };

  const renderActions = (rowData) => (
    <div className="actionicons">
      <img
        src={AssignUser}
        alt="Delete"
        className="action-icon"
        onClick={() => handleDelete(rowData)}
      />
      <img
        src={EditIcon}
        alt="Edit"
        className="action-icon"
        onClick={() => handleEdit(rowData)}
      />
    </div>
  );

  return (
    <>
      <Navbar />
      <SideBar />

      <div className="center-div">
        <div className="upper-heading">
          <span>Books</span>
        </div>
        <div className="upper-div">
          <div className="search-input-div">
            <div className="search-icon-div">
              <img src={SearchIcon} alt="" />
            </div>

            <div className="search-categories-div">
              <input
                type="text"
                placeholder="Search Books..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="add-categories-div">
            <Button text="Add Books" className="add-categories-btn" />
          </div>
        </div>

        <div className="lower-div">
          <Table data={books} columns={columns} />
        </div>
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
    </>
  );
};

export default Books;

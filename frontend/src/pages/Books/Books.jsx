import Table from "../../components/Table/Table";
import { useState } from "react";
import Button from "../../components/Button/Button";
import SearchIcon from "../../assets/icons/magnifying-glass.png";
import LeftPageIcon from "../../assets/icons/LeftPage.png";
import RightPageIcon from "../../assets/icons/Right-Page.png";
import EditIcon from "../../assets/icons/EditIcom.png";
import AssignUser from "../../assets/icons/UserAsign.png";
import AdminHOC from "../../hoc/AdminHOC";
import Modal from "../../components/modal/modal";
import Dynamicform from "../../components/forms/dynamicform";

const Books = () => {
  const [searchTerm, setSearchTerm] = useState("");
 
  const [books, setBooks] = useState( [
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
  ])
 
  const [isModalOpen , setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // title: "The Art of War",
  // author: "Sun Tzu",
  // category: "Philosophy",
  // quantity: 12,


  const handleAddBook = (newBook) => {
    if(newBook.title && newBook.author && newBook.category && newBook.quantity) {

      const newBookEntry = {
        id : books.length +1,
        ...newBook,
      }

      setBooks([...books , newBookEntry]);

      handleCloseModal();

    }
  };



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
   
    console.log("Edit clicked for", rowData);
  };

  const handleDelete = (rowData) => {
    
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
      <div className="center-div">
      <div className="upper-div">
            <div className="upper-div-text">
              <span>Books</span>
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
                    placeholder="Search Books..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                 </div>
                </div>
              </div> 

              <div className="add-categories-div">
              <Button text="Add Books" className="add-categories-btn"
              onClick={handleOpenModal} />
               </div>
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

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Dynamicform
          
           fields={[
            {
               name :"title",
               type :"text",
               placeholder : "Book Title",
               required :true,
            },
            {
              name: "author",
              type: "text",
              placeholder: "Author Name",
              required: true,
            },
            {
              name: "category",
              type: "text",
              placeholder: "Book Category",
              required: true,
            },
            {
              name: "quantity",
              type: "number",
              placeholder: "Enter Quantity",
              required: true,
            },

          
           


           ]}
           onSubmit={handleAddBook}
        />

        
      </Modal>
    </>
  );
};

export default AdminHOC(Books);

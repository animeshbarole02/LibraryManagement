
import Navbar from '../../components/Navbar/Navbar'
import SideBar from '../../components/SideBar/SideBar'
import Table from '../../components/Table/Table'
import { useState } from "react";
import Button  from '../../components/Button/Button'
import SearchIcon from "../../assets/icons/magnifying-glass.png"

const Books = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const books = [
        { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", quantity: 10 },
        { id: 2, title: "1984", author: "George Orwell", category: "Dystopian", quantity: 15 },
        { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Classic", quantity: 7 },
        { id: 4, title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", quantity: 5 },
        { id: 5, title: "The Art of War", author: "Sun Tzu", category: "Philosophy", quantity: 12 },
      ];
    
      const columns = [
        { header: "ID", accessor: "id", width: "10%" },
        { header: "Title", accessor: "title", width: "30%" },
        { header: "Author", accessor: "author", width: "25%" },
        { header: "Category", accessor: "category", width: "20%" },
        { header: "Quantity", accessor: "quantity", width: "15%" },
      ];

  return (
    <>
    <Navbar/>
    <SideBar/>
    
     
    <div className="center-div">
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
                <Button
                text="Add Books" 
                className="add-categories-btn"
                />
          </div>
        </div>

        <div className="lower-div">
        <Table
            className="category-table"
            data={books}
            columns={columns}
           
          />
        </div>
      </div>
         

       
    
    </> 
  )
}

export default Books
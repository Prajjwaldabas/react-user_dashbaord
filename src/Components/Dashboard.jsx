import React, { useState } from "react";
import "./Dashboard.css";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from '@mui/icons-material/Edit'

 

const Dashboard = ({ data, labels,name }) => {
    

    
    const [selectedUserIndex, setSelectedUserIndex] = useState(null);
    const handleEdit = (index) => {
        if (selectedUserIndex === index) {
          setSelectedUserIndex(null); // Close the modal if already open
        } else {
          setSelectedUserIndex(index); // Open the modal for the selected user
        }
      };


  return (
    <div className="Container flex jcc aic fd-col">
      <div className="header flex jcsb aic">
        <div>
          <p className="fs-14 fwb">Manage {name}</p>
        </div>
        <div className="searchInput flex jcsa aic">
          <input type="text" placeholder="Search..." />
          <button className="searchBtn">
            <SearchIcon />
          </button>
        </div>
        <div className="addIcon flex jcc aic">
          <button className="flex jcc aic">
            <AddIcon />
          </button>
        </div>
      </div>
      {/* header ends here */}
      
      {/* users scrollable data starts here  */}
      <div className="tableContainer">
        <div className="tableHead flex w-100 jcsb">
          {labels.map((item, index) => (
            <div key={index} className="userData ">
              
              <p className="fwb">{item.label}</p>
            </div>
          ))}
        </div>
       
        {data.map((item, index) => (
        <div key={index} className="tableRows w-100 flex jcsb">
          {labels.map((label, columnIndex) => (
            // Add condition to exclude the "Action" label from rendering
            label.key !== "action" && (
              <div className="userData" key={columnIndex}>
                {label.key === "avatar" ? (
                  <img
                    className="userImage"
                    src={item[label.key]}
                    alt={`Avatar of ${item.name}`}
                  />
                ) : (
                  <p>{item[label.key]}</p>
                )}
              </div>
            )
          ))}
           <div className="userData">
            <p onClick={() => handleEdit(index)}>
              <EditIcon />
            </p>

            
            {selectedUserIndex === index && (
              <div className="editModal ">
                <p>View Profile</p>
                <p>Edit profile</p>
                <p>Delete </p>
              </div>
            )}
</div>

    
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import stadiumData from "../JsonData/stadium.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

function Stadium() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState([]);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(stadiumData.length / itemsPerPage);
  const pageNum = [];
  const navigate = useNavigate();

  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) {
      pageNum.push(i);
    }
  } else {
    if (currentPage <= 2) {
      pageNum.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 1) {
      pageNum.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNum.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }
  }

  useEffect(() => {
    let arr = [];
    for (
      let i = currentPage * itemsPerPage - itemsPerPage;
      i < currentPage * itemsPerPage && i < stadiumData.length;
      i++
    ) {
      arr.push(stadiumData[i]);
    }
    setDataPerPage(arr);
  }, [currentPage]);

  const handleButtonClick = () => {
    navigate("/stadiumform");
  };

  const stadiumnameoptions = [
    { value: 1, label: "Court Yard" },
    { value: 2, label: "Court Yard" },
    { value: 3, label: "Court Yard" },
  ];
  const cityoptions = [
    { value: 1, label: "Banglore" },
    { value: 2, label: "Chennai" },
    { value: 3, label: "Mumbai" },
  ];
  const countryoptions = [
    { value: 1, label: "India" },
    { value: 2, label: "USA" },
    { value: 3, label: "UK" },
  ];

  return (
    <div className="page-container">
      <div className="mb-4">
        <h3 className="my-0">Stadium</h3>
        <div>Manage the list of stadiums and the details.</div>
      </div>
      <div className="filter-container mb-4">
        <div className="col-auto d-flex">
          <Select
            options={stadiumnameoptions}
            placeholder="Stadium Name"
            classNamePrefix="custom-select"
          />
          <Select
            options={cityoptions}
            placeholder="City"
            classNamePrefix="custom-select"
          />
          <Select
            options={countryoptions}
            placeholder="Country"
            classNamePrefix="custom-select"
          />
        </div>
        <div className="col-auto d-flex">
          <input
            type="search"
            className="filter-inputs"
            placeholder="Search"
            id="packages-search"
          />
          <button className="btn add-new-button" onClick={handleButtonClick}>
            <FaPlus className="icon" />
            Add Stadium
          </button>
        </div>
      </div>
      <div className="border bg-white">
        <div className="data-table-container">
          <table className="w-100 data-table table table-hover">
            <thead>
              <tr>
                <th>Stadium Name</th>
                <th>City</th>
                <th>Country</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataPerPage.map((stadium, index) => (
                <tr key={index}>
                  <td className="fw-semibold">{stadium.stadiumName}</td>
                  <td>{stadium.cityName}</td>
                  <td>{stadium.countryName}</td>
                  <td className="">
                    <button className="action-icon">
                      <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button className="action-icon">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end me-2 py-3">
          <div>
            <select className="table-control-input">
              <option selected>10 items per page</option>
              <option value={1}>20 items per page</option>
              <option value={2}>30 items per page</option>
              <option value={3}>40 items per page</option>
              <option value={3}>50 items per page</option>
            </select>
          </div>
          <ul className="pagination">
            <li
              className={`page-item pagination-page-items ${
                currentPage === 1 ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                aria-label="Previous"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {pageNum.map((page, i) => (
              <li
                className={`page-item pagination-page-items ${
                  currentPage === page ? "active" : ""
                }`}
                key={i}
              >
                {page === "..." ? (
                  <span className="page-link">...</span>
                ) : (
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                )}
              </li>
            ))}
            <li
              className={`page-item pagination-page-items ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                aria-label="Next"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Stadium;

import React from "react";
import { FaPlus } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddBanner() {
  const navigate = useNavigate();


  const handleButtonClick = () => {
    navigate("/Adddoubleheader");
  };
  const NewMatchTableClick = () => {
    navigate("/AddNewMatchForm");
  };
  const BackToLandingpage = () => {
    navigate("/landingpage");
  };
  const MatchesTable = () => {
    navigate("/AddnewmatchTable");
  };

  const [activeTab, setActiveTab] = useState("matches");

  const showContent = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="page-container">
      <div className="mb-4">
        <h3 className="my-0">IPL - 2022 India</h3>
        <div>26 Mar 2022 - 29 May 2022</div>
        <div className="d-flex justify-content-end mb-0">
          <button
            className="btn add-new-button mx-2"
            onClick={handleButtonClick}
          >
            <FaPlus className="icon" />
            Add Double Header
          </button>
          {/* <button className="btn add-new-button" onClick={NewMatchTableClick}>
            <FaPlus className="icon" />
            Add Match
          </button> */}
        </div>
      </div>

      <form className="form-section">
        <p className="form-section-heading">Add Matches</p>
        <div className="p-4 form-inputs-section">
          <div className="row ">
            <div className="col-md-6">
              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="hotel-name">
                    Title
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="IPL"
                    id="hotel-name"
                  />
                  <div className="error-message">*Please fill this field</div>
                </div>
              </div>

              <div className="row align-items-center mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="hotel-country">
                    Match Type
                  </label>
                </div>
                <div className="col-sm-8">
                  <select className="form-input">
                    <option selected>National</option>
                    <option value={1}>T20</option>
                    <option value={2}>IPL</option>
                    <option value={3}></option>
                  </select>
                </div>
              </div>
              <div className="row align-items-center mb-4">
                <div className="col-sm-4">
                  <label htmlFor="departure-date-time" className="form-label">
                    Date & Time
                  </label>
                </div>
                <div className="col-sm-8">
                  <input
                    className="form-input"
                    type="datetime-local"
                    id="departure-date-time"
                    placeholder="March 26, 2022"
                    onFocus={(e) => (e.target.type = "datetime-local")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-sm-4">
                  <label className="form-label" htmlFor="hotel-description">
                    Description
                  </label>
                </div>
                <div className="col-sm-8">
                  <textarea
                    className="form-input"
                    rows={4}
                    id="hotel-description"
                    placeholder="Near Airport"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="hotel-country">
                      Stadium
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <select className="form-input">
                      <option selected>Wankhede Stadium</option>
                      <option value={1}></option>
                      <option value={2}>ODI</option>
                      <option value={3}>Test</option>
                    </select>
                  </div>
                </div>
                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="hotel-name">
                      City
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Mumbai"
                      id="hotel-name"
                    />
                  </div>
                  <div className="col-sm-2">
                    <p className="form-label ">Score</p>
                  </div>
                </div>

                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="hotel-country">
                      Teams
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <select className="form-input">
                      <option selected>CSK</option>
                      <option value={1}></option>
                      <option value={2}></option>
                      <option value={3}></option>
                    </select>
                  </div>

                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="131/5"
                      id="hotel-name"
                    />
                  </div>
                </div>
                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label
                      className="form-label"
                      htmlFor="hotel-country"
                    ></label>
                  </div>
                  <div className="col-sm-6">
                    <select className="form-input">
                      <option selected>KKR</option>
                      <option value={1}></option>
                      <option value={2}></option>
                      <option value={3}></option>
                    </select>
                  </div>

                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="133/4"
                      id="hotel-name"
                    />
                  </div>
                </div>

                <div className="row align-items-center mb-5">
                  <div className="col-sm-4">
                    <label className="form-label" htmlFor="hotel-name">
                      Results
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="KKR Won By 6 Wickets "
                      id="hotel-name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="bg-light py-2">Add Hotels</div>
            <div className="container-fluid bg-white mb-5">
              <div
                id="bottom-matches"
                className={`content ${activeTab === "matches" ? "active" : ""}`}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <table className="table table-borderless">
                      <thead className=" border-bottom">
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Hotel Name</th>
                          <th scope="col">Rooms</th>
                          <th scope="col">Date & Time</th>
                          <th scope="col">Address</th>
                          <th scope="col">User's Choice</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>
                            <select
                              name="select-tournament"
                              id="select-tournament"
                              className="package-table-input"
                            >
                              <option value="india">Select Hotels</option>
                              <option value="india">Marriot</option>
                              <option value="india">Novotel</option>
                              <option value="india">Radisson </option>
                              <option value="india">Hilton</option>
                            </select>
                          </td>
                          <td>
                            <select
                              name="select-tournament"
                              id="select-tournament"
                              className="package-table-input"
                            >
                              <option value="india">Category</option>
                              <option value="india">Suite</option>
                              <option value="india">King Rom</option>
                              <option value="india">Double Room</option>
                              <option value="india">Deluxe Room</option>
                            </select>
                          </td>
                          <td className="d-flex">
                            <div>
                              <input
                                type="date"
                                className="package-input w-75"
                                id="package-dates"
                                name="package-dates"
                                placeholder="Enter Dates"
                              />
                            </div>
                          </td>
                          <td>
                            <textarea
                              name="text"
                              id=""
                              placeholder="Description"
                            ></textarea>
                          </td>
                          <td>
                            <label className="checkbox-container ps-4">
                              <input
                                type="checkbox"
                                check
                                readOnly
                                style={{ width: "20px", height: "20px" }}
                              />
                            </label>
                          </td>
                          <td className=" d-flex">
                            <button className="action-btn">
                              <i className="fa-regular fa-trash-can"></i>
                            </button>
                            <span className="action-btn">
                              <i className="fa-solid fa-arrow-left-long mt-2"></i>
                            </span>
                            <span>
                              <button className="add-package-add-btn">
                                Add
                              </button>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-end py-5">
                    <div className=" py-2 ">
                      <button className=" form-cancel-btn">CANCEL</button>
                      <button className=" form-save-btn">SAVE</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="bottom-hotels"
                className={`content ${activeTab === "hotels" ? "active" : ""}`}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <table className="table table-borderless">
                      <thead className=" border-bottom">
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Match</th>
                          <th scope="col">Hotels</th>
                          <th scope="col">Rooms</th>
                          <th scope="col">Date </th>
                          <th scope="col">User's choice</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>-----</td>
                          <td>
                            <select
                              name="select-tournament"
                              id="select-tournament"
                              className="package-table-input"
                            >
                              <option value="india">Select Hotels</option>
                              <option value="india">Marriot</option>
                              <option value="india">Novotel</option>
                              <option value="india">Radisson </option>
                              <option value="india">Hilton</option>
                            </select>
                          </td>
                          <td>
                            <select
                              name="select-tournament"
                              id="select-tournament"
                              className="package-table-input"
                            >
                              <option value="india">Category</option>
                              <option value="india">Suite</option>
                              <option value="india">King Rom</option>
                              <option value="india">Double Room</option>
                              <option value="india">Deluxe Room</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="date"
                              className="package-input w-75"
                              id="package-dates"
                              name="package-dates"
                              placeholder="Enter Dates"
                            />
                          </td>
                          <td>
                            <label className="checkbox-container ps-4">
                              <input
                                type="checkbox"
                                check
                                readOnly
                                style={{ width: "20px", height: "20px" }}
                              />
                            </label>
                          </td>
                          <td>
                            <span>
                              <button className=" action-btn">
                                <i className="fa-regular fa-trash-can"></i>
                              </button>
                            </span>
                            <span>
                              <button className=" add-package-add-btn  ">
                                Add
                              </button>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-end py-5">
                    <div className=" py-2">
                      <button className=" form-cancel-btn">CANCEL</button>
                      <button className=" form-save-btn">SAVE</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="bottom-attractions"
                className={`content ${
                  activeTab === "attractions" ? "active" : ""
                }`}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <table className="table table-borderless">
                      <thead className=" border-bottom">
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Attraction</th>
                          <th scope="col">Date </th>
                          <th scope="col">User's choice</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>

                          <td>
                            <select
                              name="select-tournament"
                              id="select-tournament"
                              className="package-table-input"
                            >
                              <option value="india">Select</option>
                              <option value="india">Beaches</option>
                              <option value="india">Tropical Islands</option>
                              <option value="india">Resorst</option>
                              <option value="india">National Parks</option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="date"
                              className="package-input w-50"
                              id="package-dates"
                              name="package-dates"
                              placeholder="Enter Dates"
                            />
                          </td>

                          <td>
                            <label className="checkbox-container ps-4">
                              <input
                                type="checkbox"
                                check
                                readOnly
                                style={{ width: "20px", height: "20px" }}
                              />
                            </label>
                          </td>
                          <td>
                            <span>
                              <button className=" action-btn">
                                <i className="fa-regular fa-trash-can"></i>
                              </button>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-end py-5">
                    <div className=" py-2 ">
                      <button className=" form-cancel-btn">CANCEL</button>
                      <button className=" form-save-btn">SAVE</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="bottom-intraIntercity"
                className={`content ${
                  activeTab === "intraIntercity" ? "active" : ""
                }`}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <table className="table table-borderless">
                      <thead className=" border-bottom">
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Tranport</th>
                          <th scope="col">Departure </th>
                          <th scope="col">Destination </th>
                          <th scope="col">Departure Time </th>
                          <th scope="col">Travel Duration </th>
                          <th scope="col">User's choice</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>

                          <td>
                            <select
                              name="select-tournament"
                              id="select-tournament"
                              className="package-table-input"
                            >
                              <option value="india">Select</option>
                              <option value="india">Bus</option>
                              <option value="india">Train</option>
                              <option value="india">Cabs</option>
                            </select>
                          </td>
                          <td>-----</td>
                          <td>-----</td>
                          <td>-----</td>
                          <td>-----</td>
                          <td>
                            <label className="checkbox-container ps-4">
                              <input
                                type="checkbox"
                                check
                                readOnly
                                style={{ width: "20px", height: "20px" }}
                              />
                            </label>
                          </td>
                          <td>
                            <span>
                              <button className=" action-btn">
                                <i className="fa-regular fa-trash-can"></i>
                              </button>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-end py-5">
                    <div className=" py-2 ">
                      <button className=" form-cancel-btn">CANCEL</button>
                      <button className=" form-save-btn">SAVE</button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="bottom-itinerary"
                className={`content ${
                  activeTab === "itinerary" ? "active" : ""
                }`}
              >
                <div className="row">
                  <div className="col-lg-12 py-4 px-5">
                    <form>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="row align-items-center mb-4">
                            <label for="hotel-name" className="package-label">
                              Number of days
                            </label>
                            <input
                              type="text"
                              className="package-input"
                              id="hotel-name"
                              name="hotel-name"
                              placeholder="Input"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="row  mb-4 mt-2">
                            <div className="col-lg-2">
                              <label for="team-logo" className="package-label">
                                Images
                              </label>
                            </div>

                            <div className="col-lg-8 p-0">
                              <div className="teams-file-upload ">
                                <label
                                  for="team-logo"
                                  className="teams-file-upload-input"
                                >
                                  Team Logo
                                </label>
                                <input
                                  type="file"
                                  id="team-logo"
                                  name="team-logo"
                                  className="teams-file-upload-input"
                                />
                                <span className="teams-file-icon">
                                  <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                </span>
                              </div>
                              <div className="teams-file-info">
                                CSK.jpeg (500Kb){" "}
                                <span className="remove-file">&#x2716;</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <table className="table table-borderless">
                      <thead className=" border-bottom">
                        <tr>
                          <th scope="col">Day</th>
                          <th scope="col">Date</th>
                          <th scope="col">Activity </th>
                          <th scope="col">Description</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">-----</th>
                          <td>
                            {" "}
                            <input
                              type="date"
                              className="package-input w-50"
                              id="package-dates"
                              name="package-dates"
                              placeholder="Enter Dates"
                            />
                          </td>
                          <td>-------</td>
                          <td>
                            <textarea
                              id="banner-description"
                              name="banner-description"
                              placeholder="-------------"
                              className="package-table-input"
                            ></textarea>
                          </td>
                          <td>
                            <span>
                              <button className="action-btn">
                                <i className="fa-regular fa-trash-can"></i>
                              </button>
                            </span>
                            <span>
                              <button className=" add-package-add-btn ">
                                Add
                              </button>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-end py-5">
                    <div className=" py-2 ">
                      <button href className="form-cancel-btn">
                        CANCEL
                      </button>
                      <button href className="form-save-btn">
                        SAVE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AddBanner;

import React, { useState } from "react";
import { userActions } from "../actions";
import { useDispatch } from "react-redux";

const Content = (props) => {
  // initialize dispatch
  const dispatch = useDispatch();
  // proceed search states
  const search = (event) => {
    let searchQuery = event.target.value;
    dispatch(userActions.search(searchQuery));
  };

  return (
    <div>
      <div className="wrapper">
        <div className="search-container">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            onChange={(e) => search(e)}
          />
          <button type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        {/* Begin interate team users data */}
        {!props.users.search ? (
          <>
            {props.users.users.map((user) => (
              <div className="content-container" key={user.id}>
                <div className="img-container">
                  <img src="/avatar-default-icon.png" alt="default image" />
                </div>
                <div className="description">
                  <label>
                    <strong>Name:</strong>
                  </label>
                  <p>{user.name}</p>
                  <label>
                    <strong>Email:</strong>
                  </label>
                  <p>{user.email}</p>
                  <label>
                    <strong>Phone:</strong>
                  </label>
                  <p>{user.phone}</p>
                  <label>
                    <strong>Website:</strong>
                  </label>
                  <p>
                    <a href={`http://${user.website}`}>{user.website}</a>
                  </p>
                  <label>
                    <strong>Address:</strong>
                  </label>
                  <p>{`(${user.address.zipcode}) ${user.address.suite} ${user.address.street}, ${user.address.city}`}</p>
                  <label>
                    <strong>Company:</strong>
                  </label>
                  <p>{`${user.company.name} (${user.company.catchPhrase})`}</p>
                </div>
                <div className="clear"></div>
              </div>
            ))}
          </>
        ) : (
          <>
            {props.users.users.map((user) => (
              <div key={user.id}>
                {user.hint && (
                  <div className="content-container">
                    <>
                      <div className="img-container">
                        <img
                          src="/avatar-default-icon.png"
                          alt="default image"
                        />
                      </div>
                      <div className="description">
                        <label>
                          <strong>Name:</strong>
                        </label>
                        <p>{user.name}</p>
                        <label>
                          <strong>Email:</strong>
                        </label>
                        <p>{user.email}</p>
                        <label>
                          <strong>Phone:</strong>
                        </label>
                        <p>{user.phone}</p>
                        <label>
                          <strong>Website:</strong>
                        </label>
                        <p>
                          <a href={`http://${user.website}`}>{user.website}</a>
                        </p>
                        <label>
                          <strong>Address:</strong>
                        </label>
                        <p>{`(${user.address.zipcode}) ${user.address.suite} ${user.address.street}, ${user.address.city}`}</p>
                        <label>
                          <strong>Company:</strong>
                        </label>
                        <p>{`${user.company.name} (${user.company.catchPhrase})`}</p>
                      </div>
                      <div className="clear"></div>
                    </>
                  </div>
                )}
              </div>
            ))}
          </>
        )}
        {/* End interate team users data */}
      </div>
    </div>
  );
};

export default Content;

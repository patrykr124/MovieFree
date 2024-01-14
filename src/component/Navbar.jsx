import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import {
  Search,
  NotificationsActive,
  ArrowDropDown,
  Menu,
} from "@mui/icons-material";

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isIcon, setIsIcon] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isIconSearch, setIsIconSearch] = useState(false);

  const inputBoxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const inputBox = document.querySelector(".input_box");

      if (
        inputBoxRef.current &&
        !inputBoxRef.current.contains(event.target) &&
        !isIconSearch && // Dodaj warunek, aby nie zamykać, gdy ikona search jest kliknięta
        !isIcon
      ) {
        inputBox.classList.remove("open");
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isIcon, isIconSearch]);

  const handleIconSearch = (event) => {
    const isIconClicked = event.target.classList.contains("icon");
    if (isIconClicked) {
      setIsIconSearch(!isIconSearch);
      const inputBox = document.querySelector(".input_box");
      if (!isIconSearch) {
        inputBox.classList.add("open");
      } else {
        inputBox.classList.remove("open");
      }
    }
  };

  window.onscroll = () => {
    setIsScroll(window.scrollY >= 100 ? true : false);
  };



  const handleInputClick = (event) => {
    event.stopPropagation();
  };

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className={isScroll ? "navbar scroll" : "navbar"}>
      <div className="navbar_left">
        <a style={{ zIndex: "2" }} href="home">
          {" "}
          <img src="/public/img/logo.png" alt="logo" />
        </a>

        <ul className="menuListItem}">
          <li>
            <a href="#serial">Serial</a>
          </li>
          <li>
            <a href="#movies">Movies</a>
          </li>
          <li>
            <a href="#new">New</a>
          </li>
        </ul>
      </div>
      <div className="menuBtn">
        <Menu
          onClick={toggleMenu}
          style={{ fontSize: "35px", cursor: "pointer", zIndex: "2" }}
          className="nav_btn"
        ></Menu>
      </div>

      <div className="navbar_right" style={{ zIndex: "2" }}>
        <Search
          className="icon"
          onClick={(e) => handleIconSearch(e)}
          ref={inputBoxRef}
        />
        <div
          onClickCapture={handleInputClick}
          className={isIconSearch ? "input_box open" : "input_box"}
        >
          <input className="navbar_input"></input>
        </div>
        <NotificationsActive className="icon" />
        <img
          className="avatarImg"
          src="public/img/avatar.jpg"
          alt="avatar"
        ></img>
        <div className="profile">
          <ArrowDropDown className="arrow icon" />
          <div className="settings">
            <li>
              <a href="#">Setting</a>
            </li>
            <li>
              <a href="#">Log out</a>
            </li>
          </div>
        </div>
      </div>

      <div className={`menuOpen ${isOpen ? "active" : ""}`}>
        <div className="menuOpenContainer">
          <div className="openItem">
            <Search
              className="icon"
              onClick={(e) => handleIconSearch(e)}
              ref={inputBoxRef}
            />
            <div
              onClickCapture={handleInputClick}
              className={isIcon ? "input_box open" : "input_box"}
            ></div>
            <NotificationsActive className="icon" />
          </div>
          <ul className={`menuListItem}`}>
            <li>
              <a onClick={toggleMenu} href="#serial">
                Serial
              </a>
            </li>
            <li>
              <a onClick={toggleMenu} href="#movies">
                Movies
              </a>
            </li>
            <li>
              <a onClick={toggleMenu} href="#new">
                New
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

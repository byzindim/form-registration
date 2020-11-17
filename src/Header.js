import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext, useEffect, useRef } from "react";

const Header = () => {
  return (
    <div class="s-layout">
      <div class="s-layout__sidebar">
        <a class="s-sidebar__trigger" href="#0"></a>

        <nav class="s-sidebar__nav">
          <ul class="check-list">
            <li class="users">
              <a class="s-sidebar__nav-link active" href="\details.js">
                <FontAwesomeIcon
                  icon="users"
                  style={{ marginLeft: "20px", marginTop: "23px" }}
                />
                <em>ПОЛЬЗОВАТЕЛИ</em>
              </a>
            </li>
            <li class="user">
              <a class="s-sidebar__nav-link" href="\User.js">
                <FontAwesomeIcon
                  icon="plus-square"
                  style={{ marginLeft: "20px", marginTop: "23px" }}
                />
                <em>Добавить пользователей</em>
              </a>
            </li>

            <li class="logout">
              <a class="s-sidebar__nav-link" href="\">
                <FontAwesomeIcon
                  icon="sign-out-alt"
                  style={{ marginLeft: "20px", marginTop: "23px" }}
                />
                <em>ВЫЙТИ</em>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <main class="s-layout__content">
        <h1>Полный обзор!</h1>
      </main>
    </div>
  );
};

export default Header;

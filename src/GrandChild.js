import React, { useState, useContext } from "react";

import { GlobalData } from "./App";

function GrandChild() {
  const [search, setSearch] = useState("");
  const posts = useContext(GlobalData);
  console.log(posts, "dataAPI");
  return (
    <div className="data">
      <div className="search">
        <input
          type="text"
          placeholder="Search Contact"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <div>
        {posts
          ?.filter((post) => {
            if (search == "") {
              return post;
            } else if (
              post.email.toLowerCase().includes(search.toLowerCase())
            ) {
              return post;
            }
          })
          .map((e) => {
            return (
              <>
                <div key={e.id}>
                  {e.first_name} {e.last_name}
                </div>
                <img alt="contactImage" src={e.avatar} />
              </>
            );
          })}
      </div>
    </div>
  );
}

export default GrandChild;

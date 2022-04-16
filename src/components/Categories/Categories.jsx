import React, { useState } from 'react';

import '../../styles/Categories.css';

const Categories = () => {
  const [id, setId] = useState(1);
  const [hid, setHid] = useState(1)
  const h = window.innerHeight;

  const categories = [
    {
      id: 1,
      name: "Arts",
    },
    {
      id: 2,
      name: "Audio Visual",
    },
    {
      id: 3,
      name: "Dramatics",
    },
    {
      id: 4,
      name: "Hikking and Trekking",
    },
    {
      id: 5,
      name: "Informals",
    },
    {
      id: 6,
      name: "Lifestyle",
    },
    {
      id: 7,
      name: "Literary",
    },
    {
      id: 8,
      name: "Literary and Oratory",
    },
    {
      id: 9,
      name: "Music and Dance",
    },
    {
      id: 10,
      name: "Photography",
    },
    {
      id: 11,
      name: "Quizzing",
    },
  ];

  window.addEventListener("scroll", (e) => {
    const height = window.pageYOffset;

    if(height<0.75*h) setHid(1)
    else setHid(0); 

    if (height < 1.75 * h) setId(1);
    else if (height < 2.75 * h) setId(2);
    else if (height < 3.75 * h) setId(3);
    else if (height < 4.75 * h) setId(4);
    else if (height < 5.75 * h) setId(5);
    else if (height < 6.75 * h) setId(6);
    else if (height < 7.75 * h) setId(7);
    else if (height < 8.75 * h) setId(8);
    else if (height < 9.75 * h) setId(9);
    else if (height < 10.75 * h) setId(10);
    else if (height < 11.75 * h) setId(11);
  });

  let a = 0, b = 0;

  return (
    <>
    <div className="header">
        <h1 className="cat-head">Categories</h1>
    </div>
    
      <div className="page">
        <div>
          {<img src={null} alt="bg" className="image" />}
        </div>

        <div className="categories">
        {categories.map((e) => {
            a = a + 1;
          return (
            <div className="cat" id={`t${a}`} key={a}>
                <div className="info">
                    <h1 className="category-heading">{e.name}</h1>
                    <p className="category-desc">One Liner Description</p>
                </div>
                <a href="#">
              <FontAwesomeIcon icon={faArrowRightLong} className="icon"/></a>
            </div>
          );
        })}
      </div>

        <div className={`scrollable-list ${hid===1?"hidden":""}`}>
          <ul className="list">
            {categories.map((e) => {
                b = b+1;
              return (
                <li className={`list-item `} key={b}>
                  <a href={`#t{b}`} className={`link ${id === b ? "focus" : ""}`}>
                    {e.name[0]}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
    )
};

export default Categories;
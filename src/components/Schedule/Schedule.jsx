import React, { useEffect } from "react";
import "../../styles/Schedule.css";

const Schedule = () => {
  const imgArr = [
    "images/avatar/s_bg.jpg",
    "images/avatar/k.jpg",
    "images/avatar/f.jpg",
    "images/avatar/c.jpg",
    "images/avatar/g.jpg",
    "images/avatar/l.jpg",
    "images/avatar/n.jpg",
  ];

  const classAddHandler = () => {
    let main_container = document.getElementById("bgMedia_123");
    let selector = document.getElementsByClassName("timeline-item");
    selector[0].classList.add("timeline-item--active");

    main_container.style.backgroundImage = "url('images/avatar/s_bg.jpg')";

    main_container.style.backgroundSize = "cover";
    main_container.style.backgroundPosition = "center";
  };

  const handleScroll = () => {
    let main_container = document.getElementById("bgMedia_123");
    let selector = document.getElementsByClassName("timeline-item");
    const position = window.pageYOffset;

    let sum = 0;
    for (let i = 0; i < selector.length; i++) {
      let item = selector[i];
      let height = item.clientHeight - 20;

      if (position >= sum && position < sum + height) {
        item.classList.add("timeline-item--active");

        main_container.style.backgroundImage = `url(${imgArr[i]})`;
        main_container.style.backgroundSize = "cover";
        main_container.style.backgroundPosition = "center";
      } else {
        item.classList.remove("timeline-item--active");
      }

      sum += height;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    classAddHandler();
  }, []);

  return (
    <>
      <div id="bgMedia_123"></div>

      <div id="mainContainerSche">
        <div className="timeline-container" id="timeline-1">
          <div className="timeline-header">
            <h2 className="timeline-header__title">Featured Events</h2>
            <h3 className="timeline-header__subtitle">Of the confluence</h3>
          </div>

          <div className="timeline">
            <div className="timeline-item" data-text="DAY 1">
              <div className="timeline__content">
                <div className="img_wrapper_schedule">
                  <img className="timeline__img" src="images/avatar/s.jpg" />
                </div>
                <h2 className="timeline__content-title">Star Night </h2>
                <p className="timeline__content-desc">
                  {" "}
                  The major attraction of Confluence, THE STAR NIGHT, which has
                  been graced by stars like:
                  <li>Nikhil D'souza</li>
                  <li>The Local Train</li>
                  <li>Jassi Gill and Babbal Rai</li>
                  With Open Air Theatre brimming with audience.
                </p>
              </div>
            </div>
            <div className="timeline-item special_timeline" data-text="DAY 2">
              <div className="timeline__content">
                <div className="img_wrapper_schedule">
                  <img className="timeline__img" src="images/avatar/k.jpg" />
                </div>
                <h2 className="timeline__content-title">काव्यांजलि</h2>
                <p className="timeline__content-desc">
                  {" "}
                  काव्यांजलि (एक शाम प्रेम, हास्य और गज़लों के नाम), एक ऐसी शाम
                  जहां हर अहसास लफ़्ज़ों में बया होता है, जहां हर ज़ुबान पर
                  सिर्फ वाह होता है। यहां शिरकत करने आते है देश के विश्व
                  प्रसिद्ध कवि/कवयित्री और उनको सुनने के लिए मौजूद होती है,
                  उत्साह और जोश से भरी हजारों की भीड़।
                </p>
              </div>
            </div>
            <div className="timeline-item" data-text="DAY 3">
              <div className="timeline__content">
                <div className="img_wrapper_schedule">
                  <img className="timeline__img" src="images/avatar/f.jpg" />
                </div>
                <h2 className="timeline__content-title">Folk Dance</h2>
                <p className="timeline__content-desc">
                  {" "}
                  India is a land of varied cultures and traditions. Diversities
                  in all spheres make the Indian culture quite unique.
                  Indianfolk and tribal dances are products of different
                  socio-economic set up and traditions evolved over ages. It's
                  an Inter college Folk Dance competition Based on Cultural
                  themes.
                </p>
              </div>
            </div>
            <div className="timeline-item" data-text="DAY 4">
              <div className="timeline__content">
                <div className="img_wrapper_schedule">
                  <img className="timeline__img" src="images/avatar/c.jpg" />
                </div>
                <h2 className="timeline__content-title">Choreo Dance</h2>
                <p className="timeline__content-desc">
                  {" "}
                  It's a form of theatrical performance and presentation in
                  outdoor public spaces without a specific paying audience. It
                  shows an exciting Play of characters representing a social
                  taboo.
                </p>
              </div>
            </div>
            <div className="timeline-item" data-text="DAY 4">
              <div className="timeline__content">
                <div className="img_wrapper_schedule">
                  <img className="timeline__img" src="images/avatar/g.jpg" />
                </div>

                <h2 className="timeline__content-title">Groove Armada</h2>
                <p className="timeline__content-desc">
                  Its a Major Group dance competition based on Hip Hop
                  theme.Over years Groove Armada has become established as one
                  of the NITKKR’s best-loved and biggest dance acts. Best dance
                  groups from the colleges of all around india do participate in
                  this competition.
                </p>
              </div>
            </div>

            <div className="timeline-item" data-text="DAY 4">
              <div className="timeline__content">
                <div className="img_wrapper_schedule">
                  <img className="timeline__img" src="images/avatar/l.jpg" />
                </div>

                <h2 className="timeline__content-title">LIBAS</h2>
                <p className="timeline__content-desc">
                  Its a Major Group dance competition based on Hip Hop
                  theme.Over years Groove Armada has become established as one
                  of the NITKKR’s best-loved and biggest dance acts. Best dance
                  groups from the colleges of all around india do participate in
                  this competition.
                </p>
              </div>
            </div>

            {/* <div className="timeline-item" data-text="DAY 4">
              <div className="timeline__content">
                <img className="timeline__img" src="images/avatar/d_bg.jpg" />
                <h2 className="timeline__content-title">LIME LIGHT</h2>
                <p className="timeline__content-desc">
                  For all the budding fashion photographers,this is the event to
                  look out for.Choose your own model, clothing, background or
                  whatever fits in your definition of THE GREAT picture and you
                  just might get termed as the college's most wonderful
                  photographer.
                </p>
              </div>
            </div>

            <div className="timeline-item" data-text="DAY 4">
              <div className="timeline__content">
                <img className="timeline__img" src="images/avatar/d_bg.jpg" />
                <h2 className="timeline__content-title">Battle of Bands</h2>
                <p className="timeline__content-desc">
                  Its a Major Group dance competition based on Hip Hop
                  theme.Over years Groove Armada has become established as one
                  of the NITKKR’s best-loved and biggest dance acts. Best dance
                  groups from the colleges of all around india do participate in
                  this competition.
                </p>
              </div>
            </div>

            <div className="timeline-item" data-text="DAY 4">
              <div className="timeline__content">
                <img className="timeline__img" src="images/avatar/d_bg.jpg" />
                <h2 className="timeline__content-title">Cinematography</h2>
                <p className="timeline__content-desc">
                  Bring out the director in you in this short film making event
                  ,Participants need to make a short film of their own.One of
                  The most anticipated events of Confluence, which witnesses
                  immense external participation
                </p>
              </div>
            </div> */}

            <div className="timeline-item" data-text="DAY 4">
              <div className="timeline__content">
                <div className="img_wrapper_schedule">
                  <img className="timeline__img" src="images/avatar/n.jpg" />
                </div>

                <h2 className="timeline__content-title">Nukkad Natak</h2>
                <p className="timeline__content-desc">
                  Its a Major Group dance competition based on Hip Hop
                  theme.Over years Groove Armada has become established as one
                  of the NITKKR’s best-loved and biggest dance acts. Best dance
                  groups from the colleges of all around india do participate in
                  this competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;

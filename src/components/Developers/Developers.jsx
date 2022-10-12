import React from "react";
import "../../styles/Developers.css";

const Developers = () => {
  const developers = [
    {
      name: "Ayush ",
      image: "https://i.ibb.co/D5zp66d/IMG-20211104-152222-575-01.jpg",
      role: "Full STACK DEVELOPER",
      linkedin: "linkedin.com/in/aayush-meena-729298135/",
      github: "https://github.com/ayushmina",
    },
    {
      name: "Kshitiz Pratap Singh ",
      image: "https://i.ibb.co/D5zp66d/IMG-20211104-152222-575-01.jpg",
      role: "Front-end Developer",
      linkedin: "https://www.linkedin.com/in/kshitiz-pratap-singh-00b57b209",
      github: "https://github.com/KshitizPratap",
    },
    {
      name: "Nihar ",
      image:
        "https://i.ibb.co/9nzJrWR/4dfabe32-2ea6-4246-b807-623a370f97bc-1.jpg",
      role: "Full Stack Developer",
      linkedin: "http://www.linkedin.com/in/nihar-meena",
      github: "https://github.com/niharx",
    },

    {
      name: "Abhishek Kumar",
      image:
        "https://res.cloudinary.com/dmwoknpni/image/upload/v1659725808/img_gjpmmz.jpg",
      role: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/abhii30/",
      github: "https://github.com/abhii30",
    },
    {
      name: "Nikhil",
      image:
        "https://i.ibb.co/9nzJrWR/4dfabe32-2ea6-4246-b807-623a370f97bc-1.jpg",
      role: "Front-end Developer",
      linkedin: "https://www.linkedin.com/in/nikhil-mittal-a54903186",
      github: "https://github.com/nikhilmittalx",
    },

    {
      name: "Pransu",
      image:
        "https://i.ibb.co/9nzJrWR/4dfabe32-2ea6-4246-b807-623a370f97bc-1.jpg",
      role: "Front-end Developer",
      linkedin: "https://www.linkedin.com/in/pransu-yadav-a082891b8",
      github: "https://github.com/Pransu-code",
    },

    {
      name: "lakshay",
      image:
        "https://i.ibb.co/jvffFhZ/IMG20210116210210-00-01-1-compressed.jpg",
      role: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/lakshay-rose-514518206",
      github: "https://github.com/Daemon-25",
    },
    {
      name: "Dev bansal",
      image: "https://i.ibb.co/D8TNqvw/IMG-20220420-WA0130-2-1.jpg",
      role: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/dev-bansal-753061209",
      behance: "https://www.behance.net/devbansal2",
    },
    {
      name: "karan",
      image:
        "https://i.ibb.co/rdWtMK2/4154ba60-d0ee-4cd2-b97d-1d1b5d58c650.jpg",
      role: "Front-end Developer",
      linkedin: "https://www.linkedin.com/in/karan-gupta-97571b202/",
      github: "https://github.com/guptakaran9896",
    },
    {
      name: "himanshu",
      image:
        "https://i.ibb.co/jMBdMPp/2440ba39-56fe-414c-a24d-096a0f5df586-11zon-1.jpg",
      role: "Front-end Developer",
      linkedin: "https://www.linkedin.com/in/himanshu-623879224",
      github: "https://github.com/Himansh0u01",
    },
  ];

  return (
    <div class="bg-drak py-5 ">
      <div class="container py-5 downsection">
        <div class="row mt-4">
          <div class="col-lg-6">
            <h2 class="display-4 font-weight-light font-head">Developers</h2>
          </div>
        </div>

        <div class="row text-center mt-5" style={{ justifyContent: "center" }}>
          {developers.length > 0
            ? developers.map((e, index) => {
                return (
                  <div class="col-xl-3 col-sm-6 mb-5 dev-card">
                    <div class="bg-white rounded shadow-sm py-5 px-4">
                      <div
                        style={{
                          height: "100px",
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={e.image}
                          alt=""
                          width="100"
                          class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                          style={{
                            minHeight: "80px",
                          }}
                        />
                      </div>
                      <h5 class="mb-0  text-dark">{e.name}</h5>
                      <span class="small text-uppercase text-muted">
                        {e.role}
                      </span>
                      <ul class="social mb-0 list-inline mt-3">
                        <li class="list-inline-item">
                          <a href={e.github} class="social-link">
                            <i class="bi bi-github"></i>
                          </a>
                        </li>

                        <li class="list-inline-item">
                          <a href={e.linkedin} class="social-link">
                            <i class="bi bi-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Developers;

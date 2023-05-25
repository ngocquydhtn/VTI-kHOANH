import { useState } from "react";

const giftList = ["CPU i9", "RAM 32GB RGB", "RGB Keyboard"];

const courseList = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "ReactJs",
  },
];

function HookUseState() {
  const [gift, setGift] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(2);
  const [checkedBox, setCheckedBox] = useState([]);

  const handleRandomGift = () => {
    const index = Math.floor(Math.random() * giftList.length);
    setGift(giftList[index]);
  };

  const handleSubmit = () => {
    console.log({ name, email });
  };

  const handleSubmitCourse = () => {
    console.log({ id: checked });
  };

  const handleCheckBox = (id) => {
    setCheckedBox((prevState) => {
      const isCheckedBox = checkedBox.includes(id);

      if (isCheckedBox) {
        return checkedBox.filter((item) => item !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  const handleSubmitCourseBox = () => {
    console.log({ idList: checkedBox });
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      {/* ///////////////////////////////////////VD1///////////////////////////////////////////// */}
      <div style={{ border: "1px solid yellowgreen", padding: 20 }}>
        <h1>{gift || "Chưa có phần thưởng"}</h1>
        <button onClick={handleRandomGift}>Lấy thưởng</button>
      </div>
      {/* ///////////////////////////////////////VD2///////////////////////////////////////////// */}
      <div
        style={{ border: "1px solid yellowgreen", padding: 20, marginTop: 20 }}
      >
        <div>
          <label style={{ display: "inline-block", minWidth: 50 }}>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div style={{ margin: "8px 0" }}>
          <label style={{ display: "inline-block", minWidth: 50 }}>
            Email:
          </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button onClick={handleSubmit}>Register</button>
      </div>
      {/* ///////////////////////////////////////VD3///////////////////////////////////////////// */}
      <div
        style={{ border: "1px solid yellowgreen", padding: 20, marginTop: 20 }}
      >
        {courseList.map((course) => (
          <div key={course.id}>
            <input
              checked={checked === course.id}
              type="radio"
              onChange={() => setChecked(course.id)}
              id={`course-${course.id}`}
            />

            {course.name}
          </div>
        ))}
        <button onClick={handleSubmitCourse}>Submit Course</button>
      </div>
      {/* ///////////////////////////////////////VD4///////////////////////////////////////////// */}
      <div
        style={{ border: "1px solid yellowgreen", padding: 20, marginTop: 20 }}
      >
        {courseList.map((course) => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checkedBox.includes(course.id)}
              onChange={() => handleCheckBox(course.id)}
              id={`course-checkbox-${course.id}`}
            />
            {course.name}
          </div>
        ))}
        <button onClick={handleSubmitCourseBox}>Submit Course</button>
      </div>
    </div>
  );
}

export default HookUseState;

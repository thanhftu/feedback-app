function RatingSelect({ select, selected }) {
  const clickHandler = (e) => {
    console.log(e.target.getAttribute("value"));
    select(+e.target.getAttribute("value"));
    console.log("select ", selected);
  };
  return (
    // <ul className="rating">
    //   <li>
    //     <input
    //       type="radio"
    //       id="num1"
    //       name="rating"
    //       value="1"
    //       onChange={handleChange}
    //       checked={selected === 1}
    //     />
    //     <lable htmlFor="num1">1</lable>
    //   </li>
    //   <li>
    //     <input
    //       type="radio"
    //       id="num2"
    //       name="rating"
    //       value="2"
    //       onChange={handleChange}
    //       checked={selected === 2}
    //     />
    //     <lable htmlFor="num2">2</lable>
    //   </li>
    //   <li>
    //     <input
    //       type="radio"
    //       id="num10"
    //       name="rating"
    //       value="10"
    //       onChange={handleChange}
    //       checked={selected === 10}
    //     />
    //     <lable htmlFor="num10">10</lable>
    //   </li>
    // </ul>
    <div className="rating-select">
      <div
        className={`num-display-stand ${
          selected === 1 ? "num-display-stand__active" : ""
        }`}
        onClick={clickHandler}
        value="1"
      >
        1
      </div>
      <div
        className={`num-display-stand ${
          selected === 2 ? "num-display-stand__active" : ""
        }`}
        onClick={clickHandler}
        value="2"
      >
        2
      </div>
      <div
        className={`num-display-stand ${
          selected === 3 ? "num-display-stand__active" : ""
        }`}
        onClick={clickHandler}
        value="3"
      >
        3
      </div>
      <div
        className={`num-display-stand ${
          selected === 4 ? "num-display-stand__active" : ""
        }`}
        onClick={clickHandler}
        value="4"
      >
        4
      </div>
      <div
        className={`num-display-stand ${
          selected === 5 ? "num-display-stand__active" : ""
        }`}
        onClick={clickHandler}
        value="5"
      >
        5
      </div>
      <div
        className={`num-display-stand ${
          selected === 6 ? "num-display-stand__active" : ""
        }`}
        onClick={clickHandler}
        value="6"
      >
        6
      </div>
      <div
        className={`num-display-stand ${
          selected === 7 ? "num-display-stand__active" : ""
        }`}
        onClick={clickHandler}
        value="7"
      >
        7
      </div>
      <div
        className={`num-display-stand ${
          selected === 8 ? "num-display-stand__active" : ""
        }`}
        onClick={clickHandler}
        value="8"
      >
        8
      </div>
      <div
        className={`num-display-stand ${
          selected === 9 ? "num-display-stand__active" : ""
        }`}
        onClick={clickHandler}
        value="9"
      >
        9
      </div>
      <div
        className={`num-display-stand ${
          selected === 10 ? "num-display-stand__active" : ""
        }`}
        onClick={clickHandler}
        value="10"
      >
        10
      </div>
    </div>
  );
}

export default RatingSelect;

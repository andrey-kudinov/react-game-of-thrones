import React from "react";
import ItemList from "./itemList";
import { mount, shallow } from "enzyme";
// import gotService from "../../services/gotService";

// describe("Testing <ItemList />", () => {
//   const service = new gotService();
//   const list = mount(
//     <ItemList getData={service.getAllHouses} renderItem={({ name }) => name} />
//   );

//   it("Click on item list must rerender all list in 1 instance", () => {
//     list.setState({
//       itemList: [
//         { name: "qwe", id: 1 },
//         { name: "asd", id: 2 },
//       ],
//     });
//     list.find(".item:first-child").simulate("click");
//     expect(list.find("ul")).toHaveLength(1);
//   });
// });

describe("Testing snap and state", () => {
  const itemList = shallow(<ItemList />);

  it("ItemList have rendered correctly", () => {
    expect(itemList).toMatchSnapshot();
  });

});
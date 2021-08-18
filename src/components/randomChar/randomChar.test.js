import React from "react";
import RandomChar from "./randomChar";
import { shallow } from "enzyme";

// import renderer from "react-test-renderer";

// describe("Testing <RandomChar />", () => {
//   it("RandomChar have rendered correctly", () => {
//     const char = renderer.create(<RandomChar />).toJSON();
//     expect(char).toMatchSnapshot();
//   });
// });

describe("Testing <RandomChar />", () => {
  const char = shallow(<RandomChar />);

  describe("Testing snap and state", () => {
    it("RandomChar have rendered correctly", () => {
      expect(char).toMatchSnapshot();
    });

    // it('Should render a title', () => {
    //   const wrapper = shallow(<Document title='Some title' />);
    //   expect(wrapper.prop('title')).toEqual('Some title')
    // })

    it('RandomChar state "char" is empty object', () => {
      expect(char.state().char).toBeObject();
    });

    it('RandomChar state "loading" is empty object', () => {
      expect(char.state().loading).toBeTruthy();
    });

    it('RandomChar state "error" is empty object', () => {
      expect(char.state().error).toBeFalsy();
    });
  });

  describe("Handlers test", () => {
    it("testing onCharLoaded", () => {
      char.instance().onCharLoaded();
      expect(char.state().loading).toBeFalsy();
    });

    it("testing onError", () => {
      char.instance().onError();
      expect(char.state().loading).toBeFalsy();
      expect(char.state().error).toBeTruthy();
    });

    it("testing updateChar", () => {
      char.instance().updateChar();
      expect(char.state().loading).toBeFalsy();
    });
  });
});

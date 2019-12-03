import { expect } from "chai";
import "mocha";
import {
  object,
  person,
  job,
  nestedObject,
  user,
  address,
  id,
  newObject,
  welcome,
  greeting,
  name
} from "./object-destructuring";

describe("Object destructuring tests", () => {
  it("#1 should have a variable for every property in the given object", () => {
    expect(person).to.be.equal(object.name);
    expect(job).to.be.equal(object.title)
  });

  it("#2 should have a variable for every property in the given nested object", () => {
    expect(user).to.be.equal(nestedObject.user);
    expect(address).to.be.equal(nestedObject.address);
    expect(id).to.be.equal(nestedObject.id);
  });

  it("#3 should create a new object given the destrutured variables from the nested object", () => {
    expect(newObject).to.be.eql(nestedObject);
  });

  it("#4 should construct a statement from the given object", () => {
    expect(greeting + ', ' + name + '!').to.be.equal("hello, taylor!");
  });
});

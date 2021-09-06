import filterProduct from "../utils/filterProduct";

const data = [
  {
    id: 1,
    name: "test",
    price: 6,
    quantity: 6,
  },
  {
    id: 2,
    name: "foobar",
    price: 6,
    quantity: 10,
  },
];

describe("filter products", () => {
  // todo: fix test
  it("filter by name-length", () => {
    expect(data.filter(filterProduct({ name: "Test" })).length).toBe(1);
  });
 it('filter by name', () => {
		expect(data.filter(filterProduct({ name: 'foobar' }))).toStrictEqual([data[1]]);
 });
 it('filter by price', () => {
		expect(data.filter(filterProduct({ price: 6 }))).toStrictEqual([data[0], data[1]]);
 });
 it('filter by name and quantity', () => {
		expect(data.filter(filterProduct({ price: 6, quantity: 20 }))).toStrictEqual([data[0], data[1]]);
 });
  // todo: test multi-filters e.g. by `name` and `price`
  // todo: test multi-filters

  it("no matches", () => {
    expect(data.filter(filterProduct({ name: "javascript" })).length).toBe(0);
  });
});

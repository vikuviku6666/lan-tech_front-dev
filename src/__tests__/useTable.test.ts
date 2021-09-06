import { renderHook, act } from "@testing-library/react-hooks";
import useTable from "../hooks/useTable";

describe("useTable hook", () => {
  const { result } = renderHook(() => useTable("./data/products.json", 30));

  it("should change page", () => {
    act(() => {
      result.current.setCurrentPage(3);
    });

    expect(result.current.currentPage).toBe(3);
  });

  it("start fetching data", () => {
    // todo: test if starts fetching
  });
});

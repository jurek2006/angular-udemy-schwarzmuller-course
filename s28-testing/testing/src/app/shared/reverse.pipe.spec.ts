import { ReversePipe } from "./reverse.pipe";

describe("ReversePipe", () => {
  it("create an instance", () => {
    const reversePipe = new ReversePipe();
    expect(reversePipe).toBeTruthy();
  });

  it("should reverse string", () => {
    const reversePipe = new ReversePipe();
    expect(reversePipe.transform("hello")).toEqual("olleh");
  });
});

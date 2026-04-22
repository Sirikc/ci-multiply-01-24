import {degree} from "/index.js";

test("degree", ()=>{
    expect(degree(4, 4)).toEqual(1);
    expect(degree(4, 0)).toEqual("infinit");
})

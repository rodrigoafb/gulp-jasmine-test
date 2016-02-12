describe("A suite is just a function", function() {
  var a;

  it("and so is a spec 1", function() {
    a = true;
 
    expect(a).toBe(true);
  });
  
  it("and so is a spec 2", function() {
    a = false;
 
    expect(a).toBe(false);
  });
  
  it("and so is a spec 3", function() {
    a = false;
 
    expect(a).toBe(false);
  });
  
  it("and so is a spec 4", function() {
    a = true;
 
    expect(a).toBe(true);
  });
  
  it("and so is a spec 5", function() {
    a = true;
 
    expect(a).toBe(true);
  });
  
  it("and so is a spec 6", function() {
    a = false;
 
    expect(a).toBe(false);
  });
});
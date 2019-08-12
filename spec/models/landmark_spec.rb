RSpec.describe Landmark, type: :model do
  it "should not be blank" do
    Landmark.create!(:title=>"", latitude: "32", longitude: "32")
    foo = Landmark.new(:title=>"")
    foo.should_not be_valid
  end
  it "title should be unique" do
    Landmark.create!(:title=>"Foo", latitude: "32", longitude: "32")
    foo = Landmark.new(:title=>"Foo")
    foo.should_not be_valid
    foo.errors[:title].should include("has already been taken")
  end
end
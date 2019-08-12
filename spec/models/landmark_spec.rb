RSpec.describe Landmark, type: :model do
  it "should validate title" do
    Landmark.create!(:title=>"Foo", latitude: "32", longitude: "32")
    foo = Landmark.new(:title=>"Foo")
    foo.should_not be_valid
    foo.errors[:title].should include("has already been taken")
  end
end
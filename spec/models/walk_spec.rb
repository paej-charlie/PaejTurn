RSpec.describe Walk, type: :model do
  it "should validate title" do
    Walk.create!(:name=>"Foo")
    foo = Walk.new(:name=>"Foo")
    foo.should_not be_valid
    foo.errors[:name].should include("has already been taken")
  end
end
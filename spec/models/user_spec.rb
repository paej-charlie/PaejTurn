RSpec.describe User, type: :model do
  it "should validate first name" do
    user = User.create
    expect(user.errors[:first_name]).to_not be_empty
  end
  it "should validate last name" do
    user = User.create
    expect(user.errors[:last_name]).to_not be_empty
  end
end
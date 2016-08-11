Given(/^I am on the sign up page$/) do
  visit '/users/sign_up'
end

When(/^I sign up as a user with email "([^"]*)"$/) do |email|
  fill_in 'Email', :with => email
  fill_in 'Password', :with => 'sexchicken'
  fill_in 'Password confirmation', :with => 'sexchicken'
  click_button 'Sign up'
end

Then(/^I should have an account$/) do
  assert_equal 1, User.count
end

Given(/^I am on the login page$/) do
  visit '/users/sign_in'
end

Given(/^I have already registered as "([^"]*)"$/) do |email|
  User.create :email => email, :password => 'sexchicken', :password_confirmation => 'sexchicken'
end

When(/^I login with correct email "([^"]*)"$/) do |email|
  fill_in 'Email', :with => email
  fill_in 'Password', :with => 'sexchicken'
  click_button 'Log in'
end

Then(/^I should see "([^"]*)"$/) do |expected|
  assert page.has_content? expected
end

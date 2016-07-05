class PagesController < ApplicationController
  def home
  end

  def numbers
    @amount = 234
    @big_number = 35983538
    @phone = 2125551212
  end

  def text
    @numbers = (1..20).to_a
    @friend_count1 = 1
    @friend_count2 = 17
    @story = "A very long long long long long long time ago in a place far far far far away"
  end

  def assets
  end

  def url
  end
end

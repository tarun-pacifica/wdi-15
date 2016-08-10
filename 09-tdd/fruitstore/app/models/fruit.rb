class Fruit < ActiveRecord::Base
  belongs_to :shelf
  def squishy?
    false
  end
end

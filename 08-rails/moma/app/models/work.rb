# == Schema Information
#
# Table name: works
#
#  id         :integer          not null, primary key
#  title      :text
#  year       :string
#  medium     :string
#  style      :string
#  image      :text
#  created_at :datetime
#  updated_at :datetime
#

class Work < ActiveRecord::Base
end

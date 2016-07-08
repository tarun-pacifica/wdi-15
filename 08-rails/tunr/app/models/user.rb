# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string
#  image           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string
#  admin           :boolean          default("false")
#

class User < ActiveRecord::Base
  has_secure_password
  validates :email, :presence => true, :uniqueness => true
  has_many :mixtapes
end

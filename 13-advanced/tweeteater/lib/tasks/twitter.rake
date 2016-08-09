namespace :twitter do
  desc 'Empties out the user and tweet tables'
  task :clear => :environment do
    User.destroy_all
    Tweet.destroy_all
  end

  desc 'Creates fake users and fake tweets'
  task :posts, [:user_count] => :environment do |t, args|
    FactoryGirl.create_list :user_with_tweets, args[:user_count].to_i
  end

  task :search, [:query, :limit] => :environment do |t, args|
    # GOOD LUCK
    # Bits of code will go here
    # Don't bother with getting users from Twitter
  end
end

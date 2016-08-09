namespace :db do
  desc 'Drops, recreates, remigrates and reseeds the database'
  task :regenerate do
    Rake::Task['db:drop'].invoke
    Rake::Task['db:create'].invoke
    Rake::Task['db:migrate'].invoke
    Rake::Task['db:seed'].invoke
  end
end

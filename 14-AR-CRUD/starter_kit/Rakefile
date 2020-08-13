require_relative './config/environment'
require 'sinatra/activerecord/rake'

desc "Start our app console"
task :console do
  # enables logging in Pry console whenever ActiveRecord writes SQL for us
  ActiveRecord::Base.logger = Logger.new(STDOUT)
  # open Pry console, similar to binding.pry
  Pry.start
end

desc "code benders magic"
task :magic do
  puts "⚡️ ⚡️ ⚡️ ⚡️ ⚡️ "
end

require "rubygems"
require "possible_email"
require "json"

profiles = PossibleEmail.search('Dorian', 'Karter', 'doriankarter.com') #, 'yahoo.com', 'live.com')

json_result = JSON.pretty_generate profiles.map { |p| p.data }

File.open("results.json", "w") { |file| file.write(json_result) }
require "possible_email"
require "json"


class Pfinder < Sinatra::Application
	get '/pfind' do
		if PossibleEmail
			profiles = PossibleEmail.search(params[:first], params[:last], params[:domains])
		
			puts JSON.pretty_generate profiles.map { |p| p.data }	
		end
		
	end	
	
end
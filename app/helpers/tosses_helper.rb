module TossesHelper
	def toss_params
		params.require(:toss).permit(:team_a, :team_b)
	end
end

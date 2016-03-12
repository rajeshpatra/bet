class TossesController < ApplicationController


	include TossesHelper

	def index
		@tosses = Toss.all
	end

	def show
		@toss = Toss.find(params[:id])
	end

	def new
		@toss = Toss.new
	end

	def create
		@toss = Toss.new(toss_params)
		@toss.save
		redirect_to tosses_path(@toss)
	end

	def edit
		@toss = Toss.find(params[:id])
	end

	def update
		@toss = Toss.find(params[:id])
		@toss.update(toss_params)
		redirect_to tosses_path(@toss)
	end

	def destroy
		@toss = Toss.find(params[:id])
		@toss.destroy
		redirect_to tosses_path
	end
end

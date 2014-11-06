module Api
  class RewardsController < ApplicationController

    def show
      @reward = Reward.find(params[:id])

      render :reward_show
    end

    def create
      @reward = Reward.new(reward_params)

      if @reward.save
        render json: @reward
      else
        puts @project.errors.full_messages
        render json: @project.errors.full_messages, status: :unprocessable_entity
      end
    end

    def reward_params
      params.require(:reward).permit(:backer_id, :project_id, :pledge_amt, :description, :est_delivery, :qty)
    end

  end
end
